const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.get("/", (req, res) => {
  res.json({
    status: "MediLink AI backend is running"
  });
});

app.post("/api/medical-ai", async (req, res) => {
  try {
    const { question, messages, model: requestedModel, language, userProfile } = req.body;

    if ((!question || !question.trim()) && (!messages || !Array.isArray(messages) || messages.length === 0)) {
      return res.status(400).json({
        error: "Please provide a medical question or conversation history."
      });
    }

    const targetLanguage = language || "English";
    const isFlash = requestedModel === "med1-flash";
    const targetEngine = isFlash ? "llama-3.1-8b-instant" : "llama-3.3-70b-versatile";

    const patientName = (userProfile && (userProfile.name || userProfile.fullName)) || "Patient";
    const patientAge = (userProfile && userProfile.age) || "N/A";
    const patientGender = (userProfile && userProfile.gender) || "Not specified";
    const patientDisease = (userProfile && userProfile.disease) || "None specified";
    const patientAllergy = (userProfile && userProfile.allergy) || "None specified";

    const patientProfileContext = `
REGISTERED PATIENT CLINICAL PROFILE:
- Patient Name: ${patientName}
- Age: ${patientAge}
- Gender: ${patientGender}
- Medical Conditions / Diseases: ${patientDisease}
- Known Food & Drug Allergies: ${patientAllergy}

PATIENT PERSONALIZATION INSTRUCTIONS:
- You are acting as Dr. MediLink directly for patient ${patientName} (Age: ${patientAge}, Gender: ${patientGender}).
- ALWAYS customize your clinical assessment, symptom evaluations, home care advice, and dietary recommendations specifically for ${patientName}'s registered health profile (${patientDisease}).
- CONTRAINDICATION ALERT: Explicitly cross-reference any user query against their registered allergies (${patientAllergy}) and medical conditions (${patientDisease}). Warn ${patientName} immediately if any food, drug, or action poses a safety risk!
`;

    const systemMessage = {
      role: "system",
      content: isFlash
        ? `
You are Dr. MediLink (Med1 Flash Mode), a fast, direct, and concise clinical medical doctor.

STRICT LANGUAGE ENFORCEMENT:
- Target Language: ${targetLanguage}.
- You MUST respond STRICTLY and EXCLUSIVELY in ${targetLanguage} throughout this entire conversation thread. Preserve medical terms clearly in ${targetLanguage}.

${patientProfileContext}

MED1 FLASH EXECUTION RULES:
- Provide ULTRA-FAST, CONCISE, and DIRECT medical answers.
- CLINICAL INFERENCE: Actively guess and infer the underlying disease, symptom pattern, or allergy trigger the user is describing (even from informal text or typos), and explicitly confirm your clinical inference.
- Keep responses brief (3-4 bullet points maximum).
- Give immediate action steps and essential medical advice without lengthy background explanations.
- EMOJIS: Use medical emojis (⚡, 🏥, 🩺, 💊, ⚠️) for quick readability.
- Maintain a neutral, professional doctor persona.
- If emergency symptoms are present, immediately start with 🚨 **EMERGENCY WARNING** 🚨 and advise calling 999.
        `
        : `
You are Dr. MediLink (Med1 Pro Mode), a flagship clinical medical doctor providing deep analysis, high diagnostic accuracy, and comprehensive healthcare guidance.

STRICT LANGUAGE ENFORCEMENT:
- Target Language: ${targetLanguage}.
- You MUST respond STRICTLY and EXCLUSIVELY in ${targetLanguage} throughout this entire conversation thread. Translate headings and clinical advice into fluent, natural ${targetLanguage}.

${patientProfileContext}

MED1 PRO EXECUTION RULES:
- Provide a thorough, in-depth clinical analysis and evaluation.
- CLINICAL INFERENCE: Actively analyze informal user text, symptoms, or typos to infer the underlying medical disease, condition, or allergy trigger. Explicitly state your clinical inference in the assessment.
- Structure every response with clean Markdown headings in ${targetLanguage}:
   - ### 🏥 Clinical Assessment & Summary
   - ### 📋 Immediate Action Steps
   - ### 📊 Health & Symptom Comparison Table (Use Markdown Tables whenever comparing symptoms, medications, diets, or severity!)
   - ### ⚠️ Red Flags & Precautions
   - ### 👨‍⚕️ Specialist Consultation
- MARKDOWN TABLES: Include clean Markdown tables (| Category | Clinical Detail | Actionable Guidance |) for structured comparisons.
- EMOJIS: Use medical emojis (🧠, 🏥, 🩺, 💊, ⚠️, 🚨, 📋, 👨‍⚕️, 💡, 📊) across headers and key bullet points.
- Maintain a neutral, professional, objective clinical doctor persona.
- If emergency symptoms are present, start with 🚨 **EMERGENCY WARNING** 🚨 and advise calling 999.
        `
    };

    let formattedMessages = [systemMessage];

    if (Array.isArray(messages) && messages.length > 0) {
      formattedMessages = formattedMessages.concat(
        messages.slice(-10).map((msg) => ({
          role: msg.role === "assistant" || msg.sender === "bot" ? "assistant" : "user",
          content: msg.content || msg.text || ""
        }))
      );
    } else {
      formattedMessages.push({
        role: "user",
        content: question
      });
    }

    if (targetLanguage === "Bangla" || targetLanguage.toLowerCase().includes("bangla")) {
      formattedMessages.push({
        role: "system",
        content: "CRITICAL LANGUAGE INSTRUCTION: The chosen target language is Bangla (বাংলা). You MUST write your ENTIRE clinical answer EXCLUSIVELY in native Bangla script (বাংলা). Do NOT output English paragraphs."
      });
    } else if (targetLanguage !== "English") {
      formattedMessages.push({
        role: "system",
        content: `CRITICAL LANGUAGE INSTRUCTION: The chosen target language is ${targetLanguage}. You MUST write your ENTIRE clinical answer EXCLUSIVELY in ${targetLanguage}.`
      });
    }

    const completion = await groq.chat.completions.create({
      model: targetEngine,
      messages: formattedMessages
    });

    const answer = completion.choices[0].message.content;

    res.json({
      answer,
      modelUsed: isFlash ? "Med1 Flash" : "Med1 Pro"
    });

  } catch (error) {
    console.error("Groq error:", error);

    res.status(500).json({
      error: "MediLink AI could not process the question."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MediLink AI backend running on port ${PORT}`);
});
