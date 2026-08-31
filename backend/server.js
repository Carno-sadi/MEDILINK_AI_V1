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
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Please provide a medical question."
      });
    }

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: `
You are MediLink AI, a medical information assistant.

Help patients understand basic health information,
symptoms, common medical conditions, and general health topics.

Use clear, friendly and simple language.

Do not claim to be a human doctor.
Do not provide a definitive diagnosis.
Do not prescribe medication or give unsafe treatment instructions.

If a patient's symptoms could indicate an emergency,
clearly recommend seeking urgent medical attention.

Explain that medical information from an AI does not replace
evaluation by a qualified healthcare professional.
          `
        },
        {
          role: "user",
          content: question
        }
      ]
    });

    const answer = completion.choices[0].message.content;

    res.json({ answer });

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
