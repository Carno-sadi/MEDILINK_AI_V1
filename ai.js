/* ============================================
   MEDILINK AI ADVISOR — STATE MACHINE & LOGIC
   Vanilla JS | Zero External APIs | 100% English
   ============================================ */

/* --------------------------------------------
   PASTE YOUR medilinkAIDatabase HERE
   -------------------------------------------- */
const medilinkAIDatabase = {
  diseases: {
    Diabetes: {
      prevention:
        "Maintain a low-glycemic index diet, engage in regular cardiovascular exercise, and proactively manage body weight.",
      primaryCare:
        "Monitor blood glucose frequently, adhere to a scheduled balanced diet, and engage in daily foot care.",
      mediumCare:
        "Utilize oral hypoglycemic agents or basal insulin as prescribed, combined with routine HbA1c monitoring.",
      advancedCare:
        "Intensive insulin therapy, insulin pump management, and intervention for neuropathic or nephropathic complications.",
      doList: [
        "Check your blood sugar at the recommended times daily.",
        "Eat balanced meals emphasizing fiber and lean proteins.",
        "Inspect your feet daily for any cuts, blisters, or redness.",
        "Carry a fast-acting carbohydrate source at all times.",
        "Stay adequately hydrated with zero-calorie beverages.",
      ],
      dontList: [
        "Do not skip meals or drastically delay eating times.",
        "Do not consume high-sugar or refined-carbohydrate foods.",
        "Do not walk barefoot, even indoors.",
        "Do not ignore symptoms of shakiness, sweating, or confusion.",
        "Do not alter your insulin dosage without medical consultation.",
      ],
      warningSigns: [
        "Blood glucose levels consistently above 300 mg/dL or below 60 mg/dL.",
        "Fruity-smelling breath with rapid, deep breathing.",
        "Persistent vomiting or severe abdominal pain.",
        "Sudden changes in vision or blurred vision.",
        "Loss of consciousness, extreme lethargy, or seizures.",
      ],
      specialist: "Endocrinologist",
      specialistReason:
        "Provides expert management of hormonal imbalances, complex insulin regimens, and long-term diabetic complications.",
      ageNote: {
        over60:
          "Elderly patients are at higher risk for atypical hypoglycemia and require adjusted glycemic targets to prevent falls.",
      },
    },
    Hypertension: {
      prevention:
        "Adopt the DASH diet, reduce sodium intake, limit alcohol consumption, and maintain an active lifestyle.",
      primaryCare:
        "Track blood pressure at home, reduce dietary salt, and practice stress-reduction techniques.",
      mediumCare:
        "Initiate first-line antihypertensives (e.g., ACE inhibitors, ARBs, diuretics) and schedule quarterly clinical reviews.",
      advancedCare:
        "Manage resistant hypertension with multi-drug regimens and assess for target organ damage.",
      doList: [
        "Measure your blood pressure at the same time each day.",
        "Eat a diet rich in potassium, calcium, and magnesium.",
        "Engage in at least 30 minutes of aerobic exercise daily.",
        "Take your blood pressure medication exactly as prescribed.",
        "Practice deep breathing or meditation to manage stress.",
      ],
      dontList: [
        "Do not consume processed foods high in hidden sodium.",
        "Do not stop taking medication abruptly if you feel fine.",
        "Do not exceed recommended daily limits for caffeine.",
        "Do not smoke or use tobacco products.",
        "Do not ignore severe headaches or shortness of breath.",
      ],
      warningSigns: [
        "Sudden, extremely severe headache (thunderclap headache).",
        "Chest pain or difficulty breathing.",
        "Numbness or weakness in the face, arm, or leg.",
        "Severe anxiety with palpitations and sweating.",
        "Blood pressure reading exceeding 180/120 mmHg.",
      ],
      specialist: "Cardiologist",
      specialistReason:
        "Specializes in the cardiovascular system to prevent and treat hypertensive heart disease and heart failure.",
      ageNote: {
        over60:
          "Susceptible to orthostatic hypotension; blood pressure goals should balance cardiovascular risk with the risk of falls.",
      },
    },
    Asthma: {
      prevention:
        "Identify and avoid environmental triggers, maintain indoor air quality, and receive annual respiratory vaccinations.",
      primaryCare:
        "Use prescribed quick-relief inhalers for acute symptoms and track peak flow meter readings.",
      mediumCare:
        "Implement daily inhaled corticosteroids or combination inhalers, and review asthma action plans.",
      advancedCare:
        "Biologic therapies, systemic corticosteroids, and bronchial thermoplasty for severe, uncontrolled asthma.",
      doList: [
        "Always carry your rescue inhaler with you.",
        "Use your preventer inhaler daily as prescribed.",
        "Wash bedding weekly in hot water to reduce dust mites.",
        "Monitor your peak flow readings each morning.",
        "Warm up properly before exercising in cold weather.",
      ],
      dontList: [
        "Do not expose yourself to secondhand smoke or strong fumes.",
        "Do not ignore a progressive drop in peak flow readings.",
        "Do not sleep with pets in the bedroom if allergic.",
        "Do not use NSAIDs if you have aspirin-induced asthma.",
        "Do not rely solely on rescue inhalers without using preventers.",
      ],
      warningSigns: [
        "Severe shortness of breath unaffected by the rescue inhaler.",
        "Inability to speak in full sentences due to breathlessness.",
        "Lips or fingertips turning blue (cyanosis).",
        "Chest retractions (skin pulling in around ribs when breathing).",
        "Peak flow reading below 50% of your personal best.",
      ],
      specialist: "Pulmonologist",
      specialistReason:
        "Focuses on complex lung conditions, comprehensive pulmonary function testing, and advanced respiratory therapeutics.",
      ageNote: {
        over60:
          "Aging lungs may mask asthma symptoms; careful differentiation from COPD is critical in elderly patients.",
      },
    },
    Migraine: {
      prevention:
        "Maintain consistent sleep schedules, manage stress, stay hydrated, and avoid known dietary triggers.",
      primaryCare:
        "Rest in a dark, quiet room, apply cold compresses to the head, and take over-the-counter analgesics early.",
      mediumCare:
        "Use prescription triptans for acute attacks and initiate daily preventive medications (e.g., beta-blockers, anticonvulsants).",
      advancedCare:
        "CGRP monoclonal antibodies, Botox injections, or nerve stimulation devices for chronic, refractory migraines.",
      doList: [
        "Maintain a strict, regular sleep and wake schedule.",
        "Keep a daily headache diary to identify personal triggers.",
        "Drink at least 8 glasses of water daily to prevent dehydration.",
        "Take acute migraine medication at the very first sign of an attack.",
        "Incorporate relaxation techniques like yoga or biofeedback.",
      ],
      dontList: [
        "Do not skip meals, which can cause trigger-inducing blood sugar drops.",
        "Do not consume excessive amounts of caffeine or alcohol.",
        "Do not overuse acute pain medications (prevents medication-overuse headaches).",
        "Do not expose yourself to bright, flickering lights when an aura begins.",
        "Do not ignore changes in your typical migraine pattern.",
      ],
      warningSigns: [
        "A sudden, severe headache unlike any you've had before.",
        "Headache accompanied by fever, stiff neck, or confusion.",
        "New onset of paralysis or weakness on one side of the body.",
        "Headache following a recent head injury.",
        "Aura symptoms that last longer than one hour.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Expert in brain and nervous system disorders, capable of distinguishing migraines from secondary severe neurological conditions.",
      ageNote: {
        over60:
          "New onset of migraines after age 50 requires immediate imaging to rule out secondary causes like temporal arteritis or lesions.",
      },
    },
    "Thyroid Disorder": {
      prevention:
        "Ensure adequate dietary iodine/selenium intake, avoid excessive soy or goitrogenic foods, and undergo routine screening if symptomatic.",
      primaryCare:
        "Recognize symptoms of metabolic shift (weight changes, fatigue) and maintain balanced nutrition and rest.",
      mediumCare:
        "Take prescribed synthetic thyroid hormones (e.g., levothyroxine) or anti-thyroid medications with routine TSH blood tests.",
      advancedCare:
        "Radioactive iodine therapy, targeted immunomodulators, or surgical thyroidectomy for nodules or severe hyperthyroidism.",
      doList: [
        "Take your thyroid medication on an empty stomach every morning.",
        "Wait at least 30-60 minutes after medication before eating.",
        "Keep track of symptoms like unexplained weight changes or palpitations.",
        "Consume a balanced diet rich in essential nutrients.",
        "Attend all scheduled lab appointments for TSH testing.",
      ],
      dontList: [
        "Do not take calcium or iron supplements within 4 hours of your thyroid medication.",
        "Do not abruptly stop taking your medication even if you feel better.",
        "Do not ignore a rapid, irregular heartbeat.",
        "Do not overconsume raw goitrogenic vegetables (like kale or cabbage).",
        "Do not switch generic medication brands without consulting your doctor.",
      ],
      warningSigns: [
        "Dangerously high heart rate, fever, and agitation (Thyroid Storm).",
        "Extreme cold intolerance, lethargy, and decreased consciousness (Myxedema Coma).",
        "Difficulty swallowing or severe swelling in the neck.",
        "Sudden, extreme changes in vision or bulging eyes.",
        "Severe shortness of breath at rest.",
      ],
      specialist: "Endocrinologist",
      specialistReason:
        "Specialize in the endocrine system and hormonal regulation, essential for fine-tuning complex thyroid imbalances.",
      ageNote: {
        over60:
          "Over-replacement of thyroid hormone can trigger atrial fibrillation or worsen angina in older adults.",
      },
    },
    Arthritis: {
      prevention:
        "Maintain a healthy body weight, perform low-impact joint-strengthening exercises, and protect joints from repetitive strain.",
      primaryCare:
        "Use hot/cold therapy, practice gentle range-of-motion exercises, and take OTC NSAIDs for mild inflammation.",
      mediumCare:
        "Engage in physical therapy, utilize prescription NSAIDs or intra-articular corticosteroid injections.",
      advancedCare:
        "DMARDs, biologic response modifiers, or surgical joint replacement for severe structural damage.",
      doList: [
        "Engage in daily low-impact exercises like swimming or cycling.",
        "Apply warm compresses to stiff joints in the morning.",
        "Use assistive devices if they help reduce joint strain.",
        "Maintain a healthy weight to reduce stress on hips and knees.",
        "Pace your activities to avoid extreme fatigue.",
      ],
      dontList: [
        "Do not push through severe, sharp joint pain during exercise.",
        "Do not remain in one sedentary position for long periods.",
        "Do not ignore sudden joint swelling or redness.",
        "Do not rely solely on pain pills while ignoring physical therapy.",
        "Do not carry heavy objects that put undue stress on your hands/wrists.",
      ],
      warningSigns: [
        "A joint becomes suddenly hot, swollen, and extremely painful.",
        "Fever and chills accompanying joint pain (indicating possible infection).",
        "Complete inability to bear weight on a leg or use an arm.",
        "Rapid, unexplained weight loss alongside joint inflammation.",
        "Sudden loss of bowel or bladder control (if back/spine arthritis is present).",
      ],
      specialist: "Rheumatologist",
      specialistReason:
        "Focuses on systemic autoimmune and inflammatory joint conditions requiring specialized immunomodulatory therapies.",
      ageNote: {
        over60:
          "Polypharmacy risk is high; careful monitoring of NSAID use is required to prevent gastrointestinal bleeding and kidney stress.",
      },
    },
    "Heart Disease": {
      prevention:
        "Maintain low LDL cholesterol, avoid smoking, manage blood pressure, and adhere to a Mediterranean-style diet.",
      primaryCare:
        "Engage in regular aerobic activity, practice dietary sodium restriction, and monitor for signs of edema or breathlessness.",
      mediumCare:
        "Daily use of statins, beta-blockers, antiplatelet therapy, and regular echocardiogram monitoring.",
      advancedCare:
        "Angioplasty, stenting, bypass surgery, or implantable cardioverter-defibrillators (ICDs).",
      doList: [
        "Eat a diet rich in whole grains, fruits, vegetables, and omega-3s.",
        "Engage in cardiovascular exercise as cleared by your doctor.",
        "Take all prescribed cardiac medications precisely on schedule.",
        "Weigh yourself daily to check for fluid retention.",
        "Keep a fast-acting nitrate (if prescribed) easily accessible.",
      ],
      dontList: [
        "Do not smoke, vape, or use any tobacco products.",
        "Do not consume foods high in trans fats and saturated fats.",
        "Do not ignore chest discomfort, even if it feels like indigestion.",
        "Do not participate in sudden bursts of strenuous physical exertion (e.g., shoveling heavy snow).",
        "Do not skip medications to save money.",
      ],
      warningSigns: [
        "Crushing chest pain radiating to the arm, neck, or jaw.",
        "Sudden, severe shortness of breath at rest.",
        "Unexplained cold sweats accompanied by lightheadedness.",
        "Fainting or severe episodes of dizziness.",
        "Rapid, irregular heartbeat that does not resolve.",
      ],
      specialist: "Cardiologist",
      specialistReason:
        "Expertise in diagnosing and treating coronary artery disease, heart failure, and complex arrhythmias.",
      ageNote: {
        over60:
          "Higher risk of silent ischemia; symptoms of heart problems may present unusually as profound fatigue or confusion.",
      },
    },
    "Kidney Disease": {
      prevention:
        "Aggressively manage diabetes and hypertension, avoid overuse of NSAIDs, and maintain adequate hydration.",
      primaryCare:
        "Adopt a kidney-friendly diet (controlling protein, sodium, and phosphorus) and monitor fluid intake.",
      mediumCare:
        "Medications to control blood pressure (ACE/ARB), treat anemia (erythropoietin), and manage bone mineral metabolism.",
      advancedCare:
        "Hemodialysis, peritoneal dialysis, or renal transplantation.",
      doList: [
        "Follow your prescribed renal diet strict guidelines.",
        "Monitor your blood pressure daily at home.",
        "Keep track of your daily fluid intake as instructed.",
        "Take phosphate binders exactly with meals if prescribed.",
        "Stay active with light to moderate daily exercise.",
      ],
      dontList: [
        "Do not take OTC pain meds like ibuprofen without consulting a doctor.",
        "Do not consume high-potassium foods if your doctor restricted them.",
        "Do not miss scheduled laboratory blood tests.",
        "Do not ignore changes in your urine output or color.",
        "Do not use herbal supplements, as many are toxic to kidneys.",
      ],
      warningSigns: [
        "Severe decrease in urination or inability to urinate.",
        "Extreme swelling in the legs, ankles, or around the eyes.",
        "Severe nausea, vomiting, or inability to keep food down.",
        "Shortness of breath due to fluid buildup in lungs.",
        "Confusion, severe lethargy, or seizures.",
      ],
      specialist: "Nephrologist",
      specialistReason:
        "Specializes in renal function, fluid/electrolyte balance, and oversees dialysis or transplant prep.",
      ageNote: {
        over60:
          "Age-related decline in GFR is normal, but requires precise medication dosing to avoid drug toxicity.",
      },
    },
    "Liver Disease": {
      prevention:
        "Limit alcohol consumption, get vaccinated against Hepatitis A/B, practice safe sex, and maintain a healthy weight.",
      primaryCare:
        "Eliminate alcohol and hepatotoxic supplements, follow a balanced diet, and rest during fatigue flares.",
      mediumCare:
        "Antiviral medications for hepatitis, monitoring for varices, and diuretics to manage mild ascites.",
      advancedCare:
        "Paracentesis for severe ascites, management of hepatic encephalopathy, and evaluation for liver transplant.",
      doList: [
        "Eat a low-sodium diet to prevent fluid accumulation.",
        "Consume small, frequent meals to maintain energy levels.",
        "Review all current medications and supplements with your doctor.",
        "Get vaccinated against preventable liver infections.",
        "Monitor yourself for yellowing of the skin or eyes.",
      ],
      dontList: [
        "Do not consume any alcohol whatsoever.",
        "Do not take acetaminophen (Tylenol) without strict medical guidance.",
        "Do not eat raw or undercooked shellfish.",
        "Do not ignore sudden weight gain or swelling in your abdomen.",
        "Do not use illicit IV drugs or share needles.",
      ],
      warningSigns: [
        "Vomiting blood or noticing black, tarry stools.",
        "Severe abdominal pain with rapid, massive swelling.",
        "Sudden yellowing of the eyes or skin (jaundice).",
        "Mental confusion, extreme sleepiness, or slurred speech.",
        "Unexplained severe bruising or prolonged bleeding.",
      ],
      specialist: "Hepatologist",
      specialistReason:
        "Focuses exclusively on the biliary tree and liver, managing cirrhosis complications and advanced hepatic therapeutics.",
      ageNote: {
        over60:
          "Increased risk of hepatocellular carcinoma; requires stringent surveillance imaging every 6 months.",
      },
    },
    Epilepsy: {
      prevention:
        "Prevent traumatic brain injury by using seatbelts/helmets, manage stroke risk factors, and avoid recreational drug use.",
      primaryCare:
        "Maintain a strict sleep schedule, avoid known seizure triggers (e.g., flashing lights), and manage stress.",
      mediumCare:
        "Daily adherence to Anti-Epileptic Drugs (AEDs) and routine EEG monitoring.",
      advancedCare:
        "Vagus nerve stimulation (VNS), responsive neurostimulation, or respective brain surgery for focal seizures.",
      doList: [
        "Take your anti-seizure medication at the exact same times daily.",
        "Ensure you get 7-9 hours of uninterrupted sleep every night.",
        "Keep a detailed seizure diary (date, time, duration, triggers).",
        "Wear a medical alert bracelet identifying your condition.",
        "Educate family and friends on seizure first aid.",
      ],
      dontList: [
        "Do not skip medication doses, as this is a primary trigger.",
        "Do not consume alcohol, which lowers the seizure threshold.",
        "Do not swim or bathe alone without supervision.",
        "Do not drive unless legally cleared by a physician.",
        "Do not ignore pre-seizure auras without getting to a safe place.",
      ],
      warningSigns: [
        "A seizure lasting longer than 5 minutes.",
        "Multiple seizures occurring without recovery of consciousness between them.",
        "Difficulty breathing or choking after a seizure stops.",
        "Physical injury sustained during the seizure.",
        "First-time seizure with no prior history of epilepsy.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Expert in brain electrical activity and tailoring specific anticonvulsant regimens to seizure types.",
      ageNote: {
        over60:
          "Epilepsy in older adults often results from cerebrovascular disease; AED dosages must be carefully titrated to avoid cognitive slowing.",
      },
    },
    Depression: {
      prevention:
        "Build a strong social support network, engage in regular physical activity, and practice mindfulness or CBT techniques.",
      primaryCare:
        "Maintain a daily routine, ensure adequate sunlight exposure, and prioritize sleep hygiene.",
      mediumCare:
        "Initiate SSRI/SNRI antidepressant therapy and participate in ongoing psychotherapy.",
      advancedCare:
        "Transcranial Magnetic Stimulation (TMS), Ketamine therapy, or Electroconvulsive Therapy (ECT) for treatment-resistant depression.",
      doList: [
        "Set small, manageable daily goals to build momentum.",
        "Engage in at least 20 minutes of physical activity daily.",
        "Maintain regular eating and sleeping schedules.",
        "Reach out to a friend, family member, or therapist weekly.",
        "Take prescribed antidepressants consistently, even when feeling well.",
      ],
      dontList: [
        "Do not isolate yourself from loved ones for extended periods.",
        "Do not use alcohol or recreational drugs to self-medicate.",
        "Do not make major life decisions during a severe depressive episode.",
        "Do not abruptly stop taking medication to avoid withdrawal.",
        "Do not ignore feelings of worthlessness or despair.",
      ],
      warningSigns: [
        "Active thoughts or plans of suicide or self-harm.",
        "Complete inability to get out of bed or care for basic hygiene for days.",
        "Sudden, unexplained state of extreme calm or euphoria after severe depression.",
        "Hallucinations or delusions.",
        "Refusal to eat or drink leading to physical decline.",
      ],
      specialist: "Psychiatrist",
      specialistReason:
        "Capable of prescribing psychiatric medications, managing complex mental health diagnostics, and overseeing advanced treatments.",
      ageNote: {
        over60:
          "Depression can mimic dementia (pseudodementia) in older adults; careful cognitive evaluation is required.",
      },
    },
    "Anxiety Disorder": {
      prevention:
        "Practice regular stress management, limit caffeine intake, and employ cognitive behavioral coping strategies.",
      primaryCare:
        "Use deep breathing exercises (e.g., box breathing), practice progressive muscle relaxation, and maintain a journal.",
      mediumCare:
        "Psychotherapy (CBT), daily SSRIs/SNRIs, and occasional use of prescribed short-acting anxiolytics.",
      advancedCare:
        "Intensive outpatient programs, EMDR for trauma-related anxiety, and advanced pharmacotherapy.",
      doList: [
        "Practice daily mindfulness or meditation exercises.",
        "Limit caffeine intake to morning hours or eliminate it entirely.",
        "Exercise regularly to metabolize excess stress hormones.",
        "Challenge irrational or catastrophic thoughts logically.",
        "Maintain a consistent sleep routine to stabilize mood.",
      ],
      dontList: [
        "Do not rely on alcohol to calm your nerves.",
        "Do not avoid situations entirely just because they cause mild anxiety.",
        "Do not overuse benzodiazepines or take them unprescribed.",
        "Do not excessively doom-scroll or consume negative news.",
        "Do not ignore the physical symptoms of chronic stress.",
      ],
      warningSigns: [
        "Severe panic attacks presenting with chest pain mimicking a heart attack.",
        "Inability to leave the house (agoraphobia) severely impacting life.",
        "Intrusive thoughts leading to self-harm behaviors.",
        "Total inability to sleep for consecutive nights.",
        "Sudden onset of severe paranoia or disconnection from reality.",
      ],
      specialist: "Psychiatrist",
      specialistReason:
        "Expertly differentiates anxiety from physical medical conditions and manages long-term neurochemical balance.",
      ageNote: {
        over60:
          "Avoid long-term benzodiazepine use due to a significantly increased risk of falls and cognitive impairment.",
      },
    },
    PCOS: {
      prevention:
        "Maintain a healthy body weight to reduce insulin resistance and consume a low-glycemic, anti-inflammatory diet.",
      primaryCare:
        "Monitor menstrual cycles, exercise regularly to improve insulin sensitivity, and use OTC targeted acne treatments.",
      mediumCare:
        "Hormonal contraceptives to regulate cycles, Metformin for insulin resistance, and anti-androgens for hirsutism.",
      advancedCare:
        "Ovulation induction therapies (e.g., Letrozole, Clomid) and assisted reproductive technologies if fertility is desired.",
      doList: [
        "Eat meals rich in fiber, lean protein, and healthy fats.",
        "Perform regular strength training to improve metabolism.",
        "Keep a detailed log of your menstrual cycles and symptoms.",
        "Take prescribed supplements like Inositol or Vitamin D.",
        "Manage stress to prevent cortisol-driven hormonal spikes.",
      ],
      dontList: [
        "Do not consume large amounts of refined sugars or carbs.",
        "Do not ignore prolonged periods of amenorrhea (absent periods).",
        "Do not engage in extreme, crash dieting.",
        "Do not skip annual screenings for blood sugar and cholesterol.",
        "Do not rely solely on aesthetic treatments for hirsutism without addressing hormones.",
      ],
      warningSigns: [
        "Extremely heavy vaginal bleeding soaking through pads rapidly.",
        "Sudden, severe pelvic pain (potential ruptured cyst or torsion).",
        "Signs of severe depression or sudden, profound mood swings.",
        "Darkening of the skin in neck creases (Acanthosis Nigricans) with dizziness.",
        "Unexplained, rapid weight gain unresponsive to lifestyle changes.",
      ],
      specialist: "Endocrinologist",
      specialistReason:
        "Specializes in complex hormonal and metabolic interactions, going beyond basic gynecological care.",
      ageNote: {
        over60:
          "Post-menopausal PCOS patients remain at elevated risk for type 2 diabetes, cardiovascular disease, and endometrial cancer.",
      },
    },
    Anemia: {
      prevention:
        "Consume a diet rich in iron, vitamin B12, and folic acid, and combine iron-rich foods with vitamin C for absorption.",
      primaryCare:
        "Increase dietary iron, use OTC iron supplements as advised, and monitor for excessive fatigue or pallor.",
      mediumCare:
        "Prescription-strength iron, B12 injections, and investigation into underlying causes of blood loss or malabsorption.",
      advancedCare:
        "Intravenous (IV) iron infusions, blood transfusions, or treatment of underlying bone marrow disorders.",
      doList: [
        "Eat dark leafy greens, lean red meats, and fortified cereals.",
        "Take iron supplements with orange juice to enhance absorption.",
        "Space out tea and coffee consumption from meals (tannins block absorption).",
        "Pace your daily activities to manage fatigue.",
        "Monitor your stool color (iron supplements may cause harmless black stools).",
      ],
      dontList: [
        "Do not take iron supplements simultaneously with calcium or antacids.",
        "Do not ignore symptoms of dizziness or shortness of breath.",
        "Do not assume all anemia is iron-deficiency without a blood test.",
        "Do not perform extremely strenuous exercise if severely fatigued.",
        "Do not ignore unusually heavy menstrual bleeding.",
      ],
      warningSigns: [
        "Fainting or severe dizziness upon standing.",
        "Chest pain or rapid, irregular heartbeat at rest.",
        "Extreme shortness of breath with minimal exertion.",
        "Vomiting blood or black, tarry stools (indicating GI bleeding).",
        "Sudden, severe yellowing of the skin (hemolytic crisis).",
      ],
      specialist: "Hematologist",
      specialistReason:
        "Expert in blood disorders, necessary for accurately diagnosing the specific type and root cause of complex anemias.",
      ageNote: {
        over60:
          "Anemia in the elderly must always prompt an investigation for gastrointestinal malignancies or occult bleeding.",
      },
    },
    Obesity: {
      prevention:
        "Maintain a balanced caloric intake, prioritize whole foods over ultra-processed foods, and engage in daily physical activity.",
      primaryCare:
        "Track daily food intake and physical activity, practice portion control, and ensure adequate sleep and hydration.",
      mediumCare:
        "Medical weight management using GLP-1 receptor agonists, nutritional counseling, and targeted behavioral therapy.",
      advancedCare:
        "Bariatric surgery (e.g., gastric bypass, sleeve gastrectomy) and multidisciplinary post-operative metabolic care.",
      doList: [
        "Plan your meals to include high protein and high fiber.",
        "Engage in at least 150 minutes of moderate exercise per week.",
        "Drink water before meals to promote a feeling of fullness.",
        "Keep a truthful, accurate food and mood journal.",
        "Weigh yourself weekly rather than daily to track true trends.",
      ],
      dontList: [
        "Do not consume sugary drinks, including juices and sodas.",
        "Do not use extreme starvation diets or unverified supplements.",
        "Do not use food as a primary coping mechanism for emotional distress.",
        "Do not eat distracted, such as in front of the television.",
        "Do not ignore snoring or daytime sleepiness (signs of sleep apnea).",
      ],
      warningSigns: [
        "Sudden chest pain, shortness of breath, or heart palpitations.",
        "Signs of severe sleep apnea, like choking or gasping during sleep.",
        "Severe joint pain that completely limits mobility.",
        "Inability to control blood sugar or blood pressure despite medications.",
        "Rapid, unexplained weight gain accompanied by severe edema.",
      ],
      specialist: "Endocrinologist",
      specialistReason:
        "Manages the metabolic, hormonal, and systemic factors underlying severe obesity and oversees advanced pharmacotherapy.",
      ageNote: {
        over60:
          "Weight loss should prioritize preserving lean muscle mass and bone density through resistance training to prevent frailty.",
      },
    },
    "Sleep Apnea": {
      prevention:
        "Maintain a healthy weight, avoid alcohol and sedatives before bed, and sleep on your side rather than your back.",
      primaryCare:
        "Use positional sleeping aids, practice good sleep hygiene, and use nasal dilators or saline sprays.",
      mediumCare:
        "Nightly use of a CPAP or BiPAP machine, and consultation with a sleep specialist for proper mask fitting.",
      advancedCare:
        "Oral appliances fitted by a dentist, or upper airway stimulation surgery (e.g., Inspire implant).",
      doList: [
        "Use your CPAP machine every single night without exception.",
        "Clean your CPAP mask, tubing, and water chamber regularly.",
        "Try to sleep on your side rather than your back.",
        "Maintain a healthy weight to reduce neck circumference.",
        "Keep your bedroom cool, dark, and quiet.",
      ],
      dontList: [
        "Do not drink alcohol within 4 hours of bedtime.",
        "Do not take sleeping pills or sedatives unless cleared by your doctor.",
        "Do not ignore excessive daytime sleepiness or falling asleep driving.",
        "Do not sleep on your back if positional apnea is diagnosed.",
        "Do not stop using your CPAP just because it feels awkward initially.",
      ],
      warningSigns: [
        "Falling asleep while driving or operating machinery.",
        "Waking up gasping or choking for air repeatedly.",
        "Severe morning headaches accompanied by high blood pressure.",
        "Unexplained irregular heart rhythms or chest pain at night.",
        "Profound, debilitating daytime fatigue despite seemingly enough sleep hours.",
      ],
      specialist: "Pulmonologist",
      specialistReason:
        "Often dual-boarded in Sleep Medicine, they expertly manage airway dynamics and complex CPAP/BiPAP titrations.",
      ageNote: {
        over60:
          "Increased risk of nighttime cardiovascular events (stroke, heart attack) if sleep apnea is left untreated.",
      },
    },
    Osteoporosis: {
      prevention:
        "Ensure adequate calcium and vitamin D intake from a young age, and perform regular weight-bearing exercises.",
      primaryCare:
        "Take daily calcium and vitamin D supplements, perform balance exercises, and remove tripping hazards at home.",
      mediumCare:
        "Prescription bisphosphonates (e.g., Alendronate) or hormone-related therapies, and regular DEXA bone density scans.",
      advancedCare:
        "Anabolic agents (e.g., Teriparatide) or RANK ligand inhibitors (e.g., Denosumab) for severe bone loss.",
      doList: [
        "Engage in weight-bearing exercises like walking or light resistance training.",
        "Take calcium and Vitamin D supplements exactly as directed.",
        "Ensure your home is well-lit and free of loose rugs or clutter.",
        "Wear supportive, non-slip footwear inside and outside.",
        "Get a bone density scan (DEXA) as recommended by your physician.",
      ],
      dontList: [
        "Do not engage in high-impact activities with a risk of falling.",
        "Do not smoke, as it significantly reduces bone mass.",
        "Do not consume excessive amounts of alcohol or caffeine.",
        "Do not bend forcefully forward from the waist or twist the spine rapidly.",
        "Do not ignore sudden, severe back pain.",
      ],
      warningSigns: [
        "Sudden, severe back pain without an obvious injury.",
        "A noticeable loss of height or development of a stooped posture.",
        "A bone breaking from a very minor fall or bump.",
        "Numbness, tingling, or weakness in the legs (potential spinal compression).",
        "Inability to stand up straight due to sudden spine pain.",
      ],
      specialist: "Endocrinologist",
      specialistReason:
        "Expert in bone metabolism and calcium regulation, essential for managing advanced osteoporosis medications.",
      ageNote: {
        over60:
          "Fall prevention is paramount; a single hip fracture significantly increases mortality and morbidity in this age group.",
      },
    },
    "Gastric Ulcer": {
      prevention:
        "Avoid chronic use of NSAIDs, limit alcohol, stop smoking, and manage stress levels.",
      primaryCare:
        "Eat smaller, more frequent meals, avoid spicy and highly acidic foods, and use OTC antacids for mild symptoms.",
      mediumCare:
        "Prescription Proton Pump Inhibitors (PPIs) or H2 blockers, and targeted antibiotic therapy if H. pylori is present.",
      advancedCare:
        "Endoscopic intervention to stop active bleeding, or surgery for perforated or refractory ulcers.",
      doList: [
        "Take your PPI medication 30 minutes before your first meal.",
        "Eat smaller meals to prevent excessive stomach acid production.",
        "Complete the entire course of antibiotics if treated for H. pylori.",
        "Stay hydrated and chew food thoroughly.",
        "Manage stress through relaxation techniques.",
      ],
      dontList: [
        "Do not take aspirin, ibuprofen, or naproxen (use acetaminophen instead).",
        "Do not drink alcohol or smoke tobacco.",
        "Do not eat spicy, fried, or highly acidic foods.",
        "Do not consume heavy meals within three hours of bedtime.",
        "Do not drink large amounts of caffeinated beverages.",
      ],
      warningSigns: [
        "Vomiting blood or material that looks like coffee grounds.",
        "Passing black, tarry, or bloody stools.",
        "Sudden, sharp, and severe abdominal pain that does not go away.",
        "Feeling faint, dizzy, or lightheaded (signs of internal bleeding).",
        "Unexplained weight loss and difficulty swallowing.",
      ],
      specialist: "Gastroenterologist",
      specialistReason:
        "Performs endoscopies to visually diagnose ulcers, check for cancer, and treat active gastrointestinal bleeding.",
      ageNote: {
        over60:
          "Higher risk of silent ulcers that present suddenly with severe bleeding, often due to long-term NSAID use for arthritis.",
      },
    },
    "Chronic Back Pain": {
      prevention:
        "Maintain core muscle strength, practice proper lifting mechanics, and ensure ergonomic workspace setups.",
      primaryCare:
        "Use alternating heat and ice therapy, gentle stretching, and OTC NSAIDs or acetaminophen for flare-ups.",
      mediumCare:
        "Targeted physical therapy, chiropractic care, muscle relaxants, and localized corticosteroid injections.",
      advancedCare:
        "Radiofrequency ablation, spinal cord stimulators, or surgical interventions like laminectomy or spinal fusion.",
      doList: [
        "Perform daily core-strengthening and flexibility exercises.",
        "Practice good posture while sitting, standing, and walking.",
        "Use ergonomic chairs and supportive mattresses.",
        "Lift heavy objects using your legs, not your back.",
        "Take frequent breaks to walk and stretch if you have a desk job.",
      ],
      dontList: [
        "Do not stay in bed for extended periods during a pain flare-up.",
        "Do not perform heavy deadlifts or twisting exercises.",
        "Do not ignore pain that radiates down your leg.",
        "Do not rely continuously on opioid pain medications.",
        "Do not sleep on your stomach without proper pelvic support.",
      ],
      warningSigns: [
        "Sudden loss of bowel or bladder control (Cauda Equina Syndrome).",
        "New or worsening numbness and weakness in one or both legs.",
        "Back pain accompanied by a high fever.",
        "Severe pain following a recent fall or trauma.",
        "Back pain that is worse at night or causes unintended weight loss.",
      ],
      specialist: "Orthopedic Surgeon",
      specialistReason:
        "Evaluates structural spinal integrity, nerve compression, and determines if surgical intervention is necessary.",
      ageNote: {
        over60:
          "Evaluate for osteoporotic compression fractures or spinal stenosis, which are highly common causes of back pain in the elderly.",
      },
    },
    Eczema: {
      prevention:
        "Moisturize skin daily, avoid harsh soaps or detergents, and manage environmental triggers and stress.",
      primaryCare:
        "Apply thick, fragrance-free emollients immediately after bathing, and use OTC hydrocortisone for mild flare-ups.",
      mediumCare:
        "Prescription topical corticosteroids, calcineurin inhibitors, and antihistamines to control severe itching.",
      advancedCare:
        "Systemic immunosuppressants, biologic injectables (e.g., Dupilumab), or phototherapy (UVB light).",
      doList: [
        "Moisturize at least twice a day with a thick cream or ointment.",
        "Take short, lukewarm showers instead of long, hot baths.",
        "Use gentle, fragrance-free soaps and laundry detergents.",
        "Wear soft, breathable fabrics like 100% cotton.",
        "Keep fingernails trimmed short to prevent skin damage from scratching.",
      ],
      dontList: [
        "Do not scratch the affected areas, which breaks the skin barrier.",
        "Do not use hot water for bathing or washing hands.",
        "Do not wear rough, scratchy materials like wool directly on the skin.",
        "Do not expose yourself to extreme, rapid temperature changes.",
        "Do not ignore signs of infected eczema (yellow crusts).",
      ],
      warningSigns: [
        "The rash begins to ooze yellow pus or form golden crusts.",
        "Development of a fever alongside a severe eczema flare.",
        "Rapid spread of the rash covering a large portion of the body.",
        "Painful, fluid-filled blisters appearing in the eczema patches.",
        "Severe sleep deprivation due to uncontrollable nighttime itching.",
      ],
      specialist: "Dermatologist",
      specialistReason:
        "Expert in skin barrier dysfunction and managing potent topical and systemic dermatological medications.",
      ageNote: {
        over60:
          "Aging skin naturally loses moisture (xerosis); older adults require highly aggressive daily emollient therapy.",
      },
    },
    COPD: {
      prevention:
        "Never smoke, avoid secondhand smoke, and minimize exposure to occupational dust, fumes, and severe air pollution.",
      primaryCare:
        "Quit smoking completely, receive annual flu and pneumonia vaccines, and practice pursed-lip breathing.",
      mediumCare:
        "Daily use of long-acting bronchodilators and inhaled corticosteroids, and participation in pulmonary rehabilitation.",
      advancedCare:
        "Supplemental home oxygen therapy, surgical lung volume reduction, or lung transplantation.",
      doList: [
        "Take your maintenance inhalers daily exactly as prescribed.",
        "Practice controlled breathing techniques to manage shortness of breath.",
        "Stay active to maintain cardiovascular and respiratory muscle strength.",
        "Eat small, frequent, high-nutrition meals to preserve energy.",
        "Wash hands frequently and avoid crowds to prevent respiratory infections.",
      ],
      dontList: [
        "Do not smoke or allow anyone to smoke in your home.",
        "Do not ignore an increase in cough, mucus, or breathlessness.",
        "Do not expose yourself to cold air without a scarf over your mouth.",
        "Do not use aerosol sprays or strong cleaning chemicals.",
        "Do not skip your annual respiratory vaccinations.",
      ],
      warningSigns: [
        "Severe shortness of breath even while entirely at rest.",
        "Lips or fingernails turning blue or gray.",
        "Mental confusion, severe lethargy, or inability to stay awake.",
        "Rapidly worsening cough with a change in mucus color or thickness.",
        "Swelling in the ankles or legs indicating right-sided heart strain.",
      ],
      specialist: "Pulmonologist",
      specialistReason:
        "Focuses on chronic lung disease management, oxygen titration, and advanced pulmonary function testing.",
      ageNote: {
        over60:
          "High risk of pneumonia; strict adherence to vaccination schedules and early antibiotic treatment for exacerbations is vital.",
      },
    },
    Cancer: {
      prevention:
        "Avoid tobacco, limit alcohol, protect skin from UV rays, maintain a healthy weight, and undergo regular age-appropriate screenings.",
      primaryCare:
        "Maintain a nutrient-dense diet, preserve energy through paced activities, and manage mental health and stress.",
      mediumCare:
        "Surgical tumor resection, standard chemotherapy or radiation protocols, and targeted symptom management.",
      advancedCare:
        "Immunotherapy, personalized targeted genetic therapies, bone marrow transplants, or palliative care.",
      doList: [
        "Attend all scheduled oncology appointments and scans.",
        "Eat a high-protein diet to help tissues heal during treatment.",
        "Keep a detailed log of all side effects and communicate them to your team.",
        "Practice strict hand hygiene to prevent infections.",
        "Seek emotional support through counseling or support groups.",
      ],
      dontList: [
        "Do not ignore a fever of 100.4°F (38°C) or higher during chemotherapy.",
        "Do not take unverified herbal supplements that may interact with chemo.",
        "Do not expose yourself to people who are sick or crowded places.",
        "Do not ignore severe pain or sudden changes in your body.",
        "Do not consume raw or undercooked foods while immune-suppressed.",
      ],
      warningSigns: [
        "Fever or chills while undergoing immunosuppressive treatment.",
        "Uncontrollable vomiting or inability to keep liquids down.",
        "Sudden, severe shortness of breath or chest pain.",
        "Unexplained severe bleeding or widespread bruising.",
        "Sudden neurological changes, confusion, or severe headaches.",
      ],
      specialist: "Oncologist",
      specialistReason:
        "Manages comprehensive cancer staging, chemotherapy/radiation protocols, and cutting-edge targeted treatments.",
      ageNote: {
        over60:
          "Treatment plans must be carefully weighed against existing comorbidities to balance cancer control with quality of life.",
      },
    },
    Stroke: {
      prevention:
        "Aggressively control blood pressure, manage diabetes, treat atrial fibrillation, and avoid smoking.",
      primaryCare:
        "Engage in post-stroke physical and occupational therapy, modify diet for swallowing safety, and manage cardiovascular risk factors.",
      mediumCare:
        "Daily use of antiplatelets/anticoagulants, statins, and antihypertensives, alongside intensive neuro-rehabilitation.",
      advancedCare:
        "Carotid endarterectomy, surgical aneurysm clipping, or long-term specialized nursing care for severe deficits.",
      doList: [
        "Take all prescribed blood thinners and blood pressure medications.",
        "Participate actively in prescribed physical and speech therapy.",
        "Follow swallowing guidelines strictly if you have dysphagia.",
        "Use assistive devices (canes, walkers) to prevent falls.",
        "Monitor your blood pressure daily at home.",
      ],
      dontList: [
        "Do not ignore temporary symptoms of a mini-stroke (TIA).",
        "Do not stop taking blood thinners without a doctor's explicit order.",
        "Do not smoke or consume excessive alcohol.",
        "Do not eat foods that are difficult to chew or swallow safely.",
        "Do not remain sedentary; move safely within your physical limits.",
      ],
      warningSigns: [
        "Sudden numbness or weakness in the face, arm, or leg (especially one side).",
        "Sudden confusion, trouble speaking, or difficulty understanding speech.",
        "Sudden trouble seeing in one or both eyes.",
        "Sudden severe headache with no known cause.",
        "Sudden trouble walking, dizziness, loss of balance, or coordination.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Expert in brain vasculature, stroke recovery mapping, and secondary stroke prevention strategies.",
      ageNote: {
        over60:
          "The risk of recurrent stroke is highly elevated; careful monitoring for silent aspiration pneumonia is critical.",
      },
    },
    "Alzheimer's": {
      prevention:
        "Engage in lifelong cognitive training, maintain cardiovascular health, exercise regularly, and stay socially active.",
      primaryCare:
        "Establish a safe, predictable daily routine, use memory aids (clocks, calendars), and ensure home safety.",
      mediumCare:
        "Prescription of cholinesterase inhibitors or memantine, and implementation of caregiver support services.",
      advancedCare:
        "Anti-amyloid monoclonal antibodies (if eligible), professional memory care facilities, and comprehensive palliative care.",
      doList: [
        "Maintain a structured, calm, and predictable daily routine.",
        "Engage the brain with music, puzzles, or simple conversation.",
        "Remove tripping hazards and install safety locks on doors.",
        "Ensure the patient wears a medical ID bracelet with a GPS tracker.",
        "Caregivers must prioritize their own mental and physical respite.",
      ],
      dontList: [
        "Do not argue with or aggressively correct the person's confused reality.",
        "Do not leave the person alone if they have a history of wandering.",
        "Do not have loose rugs, poor lighting, or accessible toxic chemicals.",
        "Do not overstimulate with loud noises or crowded environments.",
        "Do not ignore signs of sudden behavioral changes (often a sign of a UTI).",
      ],
      warningSigns: [
        "Sudden, extreme aggression or paranoia completely out of character.",
        "Wandering away from home and becoming lost.",
        "Inability to swallow food or liquids safely.",
        "Sudden loss of mobility or inability to get out of bed.",
        "Signs of an underlying infection, such as fever or foul-smelling urine.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Specializes in neurodegenerative diseases, distinguishing Alzheimer's from reversible dementias, and managing cognitive decline.",
      ageNote: {
        over60:
          "Be highly vigilant for 'sundowning' (increased confusion in late afternoon) and delirium caused by minor infections.",
      },
    },
    "Parkinson's": {
      prevention:
        "Currently no definitive prevention, though regular vigorous exercise and a neuro-protective diet (Mediterranean) may delay onset.",
      primaryCare:
        "Engage in targeted physical therapy (like LSVT BIG), ensure home safety to prevent falls, and maintain good nutrition.",
      mediumCare:
        "Levodopa/Carbidopa therapy, dopamine agonists, and speech therapy for swallowing/vocal volume issues.",
      advancedCare:
        "Deep Brain Stimulation (DBS) surgery, continuous intestinal levodopa infusions, or advanced movement disorder specialized care.",
      doList: [
        "Take your Parkinson's medications at the exact times prescribed.",
        "Engage in daily exercise like Tai Chi or stationary cycling.",
        "Remove all tripping hazards and install grab bars in the bathroom.",
        "Eat a high-fiber diet and hydrate to prevent severe constipation.",
        "Work with a speech therapist to maintain vocal strength and swallowing.",
      ],
      dontList: [
        "Do not take medication with high-protein meals (blocks absorption).",
        "Do not stop medications abruptly, which can cause life-threatening neuroleptic malignant-like syndrome.",
        "Do not wear rubber-soled shoes that catch on carpets (promotes falls).",
        "Do not ignore feelings of depression or severe anxiety.",
        "Do not rush when walking if you experience 'freezing' spells.",
      ],
      warningSigns: [
        "Sudden inability to move or severe 'off' periods lasting for hours.",
        "Choking on food or frequent coughing during meals.",
        "Hallucinations or severe delusions (often medication-induced).",
        "Severe, unexplained weight loss or signs of malnutrition.",
        "A bad fall leading to a potential fracture or head injury.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Specifically, a Movement Disorder Specialist can finely tune complex dopamine regimens and evaluate for DBS.",
      ageNote: {
        over60:
          "Medication side effects in older adults frequently include orthostatic hypotension and visual hallucinations.",
      },
    },
    "Multiple Sclerosis": {
      prevention:
        "Maintain optimal Vitamin D levels, avoid smoking, and manage stress to reduce the frequency of inflammatory flares.",
      primaryCare:
        "Pace activities to manage extreme fatigue, use cooling vests to prevent heat intolerance, and engage in gentle stretching.",
      mediumCare:
        "Disease-Modifying Therapies (DMTs), short courses of high-dose corticosteroids for relapses, and physical therapy.",
      advancedCare:
        "Infusion therapies (e.g., Ocrelizumab), intrathecal baclofen pumps for severe spasticity, and comprehensive neuro-rehabilitation.",
      doList: [
        "Take your disease-modifying medication strictly as directed.",
        "Stay in cool environments, as heat exacerbates MS symptoms.",
        "Engage in physical therapy to maintain mobility and balance.",
        "Monitor yourself for signs of urinary tract infections.",
        "Practice energy conservation techniques throughout the day.",
      ],
      dontList: [
        "Do not take hot baths or expose yourself to extreme heat.",
        "Do not ignore a new neurological symptom lasting more than 24 hours.",
        "Do not push yourself to the point of extreme physical exhaustion.",
        "Do not skip routine MRI scans to track disease progression.",
        "Do not smoke, as it is linked to faster disease progression.",
      ],
      warningSigns: [
        "Sudden loss of vision in one eye accompanied by pain.",
        "Complete inability to walk or sudden severe paralysis.",
        "Severe difficulty breathing or swallowing.",
        "Inability to urinate or severe bowel impaction.",
        "Signs of severe infection while on immunosuppressive DMTs.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Expert in demyelinating diseases of the central nervous system and navigating complex immunomodulatory DMTs.",
      ageNote: {
        over60:
          "Disease often transitions to a progressive phase; focus shifts from managing acute relapses to maximizing mobility and independence.",
      },
    },
    "Hepatitis B/C": {
      prevention:
        "Receive the Hep B vaccine, practice safe sex, never share needles or razors, and ensure safe tattoo/piercing practices.",
      primaryCare:
        "Abstain entirely from alcohol, eat a healthy diet to support liver function, and get adequate rest.",
      mediumCare:
        "Direct-acting antivirals for Hep C (often curative) or long-term nucleoside analogues for Hep B, with regular liver ultrasounds.",
      advancedCare:
        "Management of liver cirrhosis, treatment of hepatocellular carcinoma, or liver transplantation.",
      doList: [
        "Take your antiviral medications every single day without missing a dose.",
        "Inform healthcare providers and sexual partners of your status.",
        "Get regular blood tests and liver ultrasounds as scheduled.",
        "Eat a balanced, low-fat diet to reduce liver strain.",
        "Get vaccinated against Hepatitis A (and B if only infected with C).",
      ],
      dontList: [
        "Do not drink any alcohol, as it accelerates liver damage immensely.",
        "Do not take acetaminophen or supplements without doctor approval.",
        "Do not share toothbrushes, razors, or nail clippers.",
        "Do not donate blood, tissue, or semen.",
        "Do not consume raw seafood, particularly oysters.",
      ],
      warningSigns: [
        "Sudden yellowing of the skin or eyes (jaundice).",
        "Vomiting blood or noticing dark, tarry stools.",
        "Severe abdominal swelling or pain on the right side.",
        "Extreme confusion, lethargy, or altered mental state.",
        "Unexplained, severe bruising or prolonged bleeding.",
      ],
      specialist: "Hepatologist",
      specialistReason:
        "Specializes in liver virology, advanced antiviral regimens, and surveillance for liver cancer and cirrhosis.",
      ageNote: {
        over60:
          "Decades of chronic infection significantly raise the risk for end-stage liver disease; aggressive cancer screening is mandatory.",
      },
    },
    Tuberculosis: {
      prevention:
        "Avoid close contact with active TB patients, ensure adequate ventilation in crowded spaces, and receive the BCG vaccine if indicated.",
      primaryCare:
        "Strict isolation during the infectious phase, adequate nutrition, and wearing a mask when interacting with others.",
      mediumCare:
        "Adherence to a 6-9 month regimen of multiple antibiotics (e.g., INH, Rifampin, Pyrazinamide, Ethambutol) with DOT (Directly Observed Therapy).",
      advancedCare:
        "Treatment of Multi-Drug Resistant TB (MDR-TB) with second-line injectable drugs, or surgical resection of destroyed lung tissue.",
      doList: [
        "Take all of your TB medications exactly as prescribed every day.",
        "Complete the entire months-long course, even if symptoms disappear.",
        "Cover your mouth and nose completely when coughing or sneezing.",
        "Ensure your living space is well-ventilated with fresh air.",
        "Attend all follow-up appointments and sputum tests.",
      ],
      dontList: [
        "Do not stop taking medications early, which creates drug-resistant TB.",
        "Do not drink alcohol, as TB drugs are heavily processed by the liver.",
        "Do not interact with infants or immunocompromised people while infectious.",
        "Do not take acetaminophen without checking with your doctor.",
        "Do not ignore symptoms of jaundice (yellow skin/eyes).",
      ],
      warningSigns: [
        "Coughing up significant amounts of bright red blood.",
        "Severe chest pain and sudden severe shortness of breath.",
        "Yellowing of the eyes or skin (liver toxicity from medications).",
        "High, persistent fever and severe night sweats returning.",
        "Vision changes or color blindness (potential side effect of Ethambutol).",
      ],
      specialist: "Infectious Disease Specialist",
      specialistReason:
        "Expertise in managing prolonged, complex antibiotic regimens and identifying drug-resistant strains of mycobacteria.",
      ageNote: {
        over60:
          "Elderly patients are highly susceptible to the hepatotoxic effects of TB medications; frequent liver enzyme monitoring is essential.",
      },
    },
    Dengue: {
      prevention:
        "Eliminate standing water, use mosquito repellents containing DEET, and install window screens or sleep under mosquito nets.",
      primaryCare:
        "Strict bed rest, maintain aggressive oral hydration with electrolyte solutions, and use acetaminophen for fever control.",
      mediumCare:
        "Daily complete blood counts (CBC) to monitor platelet levels and hematocrit, and supervised intravenous fluids if mildly dehydrated.",
      advancedCare:
        "Intensive care unit admission for Dengue Hemorrhagic Fever/Shock Syndrome, fluid resuscitation, and blood transfusions.",
      doList: [
        "Drink plenty of oral rehydration salts, coconut water, or clear soups.",
        "Monitor urine output; dark or minimal urine means dehydration.",
        "Take only acetaminophen (paracetamol) for pain and fever.",
        "Rest completely under a mosquito net to prevent spreading to others.",
        "Get daily blood tests as instructed by your healthcare provider.",
      ],
      dontList: [
        "Do not take aspirin, ibuprofen, naproxen, or any NSAIDs.",
        "Do not ignore severe abdominal pain or persistent vomiting.",
        "Do not exert yourself physically; strict rest is required.",
        "Do not allow mosquitoes to breed in or around your home.",
        "Do not ignore bleeding from the gums or nose.",
      ],
      warningSigns: [
        "Severe, continuous abdominal pain.",
        "Persistent vomiting, especially with blood (looks like coffee grounds).",
        "Bleeding from the nose, gums, or blood in the urine/stool.",
        "Extreme fatigue, restlessness, or sudden behavioral changes.",
        "Cold, clammy skin and a rapid, weak pulse (signs of shock).",
      ],
      specialist: "Infectious Disease Specialist",
      specialistReason:
        "Skilled in managing vector-borne tropical diseases and recognizing the critical transition to hemorrhagic shock.",
      ageNote: {
        over60:
          "Older adults have a lower tolerance for plasma leakage and shock; they require earlier hospitalization and careful fluid management.",
      },
    },
    "Sickle Cell": {
      prevention:
        "Genetic counseling before conception. To prevent crises: avoid extreme temperatures, high altitudes, and dehydration.",
      primaryCare:
        "Drink 8-10 glasses of water daily, take folic acid supplements, and use OTC pain relievers and heating pads for mild pain.",
      mediumCare:
        "Daily Hydroxyurea to increase fetal hemoglobin, prophylactic penicillin (in children), and prescription analgesics for crises.",
      advancedCare:
        "Chronic blood transfusions, management of acute chest syndrome in ICU, or bone marrow/stem cell transplantation.",
      doList: [
        "Drink large amounts of water every day to keep blood cells from sickling.",
        "Dress warmly in cold weather and avoid sudden temperature changes.",
        "Take your prescribed Hydroxyurea and folic acid consistently.",
        "Pace yourself during physical activity to avoid oxygen depletion.",
        "Seek immediate medical care for any fever above 101°F (38.3°C).",
      ],
      dontList: [
        "Do not swim in cold water or use ice packs on pain areas.",
        "Do not smoke or consume heavy amounts of alcohol.",
        "Do not engage in extreme physical exertion or high-altitude activities.",
        "Do not ignore a persistent, painful erection (priapism).",
        "Do not skip regular eye exams and echocardiograms.",
      ],
      warningSigns: [
        "Fever of 101°F (38.3°C) or higher, indicating a severe infection.",
        "Severe chest pain, coughing, and difficulty breathing (Acute Chest Syndrome).",
        "Sudden numbness, weakness, or difficulty speaking (signs of stroke).",
        "Severe, unmanageable pain that does not respond to home medications.",
        "Sudden enlargement of the spleen accompanied by dizziness and pale skin.",
      ],
      specialist: "Hematologist",
      specialistReason:
        "Specializes in red blood cell disorders, managing chronic transfusions, and preventing complex organ damage.",
      ageNote: {
        over60:
          "Life expectancy is improving, but older adults face severe cumulative organ damage, particularly renal failure and pulmonary hypertension.",
      },
    },
    Lupus: {
      prevention:
        "Avoid direct sun exposure (UV light triggers flares), manage stress, get adequate sleep, and prevent infections.",
      primaryCare:
        "Use high-SPF sunscreen daily, employ stress-reduction techniques, and use NSAIDs for mild joint pain.",
      mediumCare:
        "Antimalarials (e.g., Hydroxychloroquine), low-dose corticosteroids, and targeted immunosuppressants.",
      advancedCare:
        "High-dose IV steroids, potent biologics (e.g., Belimumab), or cytotoxic drugs (e.g., Cyclophosphamide) for severe organ involvement.",
      doList: [
        "Apply broad-spectrum sunscreen (SPF 50+) daily, even indoors.",
        "Wear protective clothing, hats, and sunglasses when outside.",
        "Take your Hydroxychloroquine or immunosuppressants exactly as directed.",
        "Pace your daily activities to manage profound fatigue.",
        "Attend all scheduled blood and urine tests to monitor organ function.",
      ],
      dontList: [
        "Do not expose yourself to direct sunlight during peak hours.",
        "Do not take sulfa-based antibiotics (can trigger flares).",
        "Do not ignore a new fever or signs of infection.",
        "Do not use echinacea or immune-boosting supplements.",
        "Do not stop taking steroids abruptly.",
      ],
      warningSigns: [
        "Chest pain that sharpens when you take a deep breath.",
        "Frothy or bloody urine and sudden swelling in the legs (kidney failure).",
        "Fever accompanied by a severe flare of joint pain or rash.",
        "Sudden confusion, seizures, or severe headaches.",
        "Severe shortness of breath or a rapid, irregular heartbeat.",
      ],
      specialist: "Rheumatologist",
      specialistReason:
        "Expert in systemic autoimmune diseases, capable of managing complex immunosuppressive regimens to protect major organs.",
      ageNote: {
        over60:
          "Late-onset lupus often presents with less severe skin/joint symptoms but requires careful monitoring due to age-related decline in kidney function.",
      },
    },
    Psoriasis: {
      prevention:
        "Identify and avoid triggers (stress, skin injury, strep infections, cold weather), and moisturize skin daily.",
      primaryCare:
        "Apply heavy emollients, use over-the-counter coal tar or salicylic acid preparations, and get moderate natural sunlight.",
      mediumCare:
        "Prescription topical corticosteroids, Vitamin D analogues, and specialized narrow-band UVB phototherapy.",
      advancedCare:
        "Systemic oral medications (e.g., Methotrexate) or targeted biologic injections (e.g., Humira, Stelara).",
      doList: [
        "Moisturize the skin immediately after bathing to lock in moisture.",
        "Take lukewarm baths with colloidal oatmeal or Epsom salts.",
        "Use prescribed topical treatments consistently on plaques.",
        "Maintain a healthy weight to reduce systemic inflammation.",
        "Expose skin to small, safe amounts of natural sunlight if advised.",
      ],
      dontList: [
        "Do not pick, scratch, or aggressively peel the scales.",
        "Do not use hot water for showering or bathing.",
        "Do not smoke or consume heavy amounts of alcohol.",
        "Do not use harsh, fragranced soaps or exfoliants.",
        "Do not ignore joint pain or stiffness (potential Psoriatic Arthritis).",
      ],
      warningSigns: [
        "The rash suddenly turns bright red, hot, and spreads rapidly.",
        "Development of pus-filled bumps all over the body (Pustular Psoriasis).",
        "Severe joint pain, swelling, and stiffness (Psoriatic Arthritis).",
        "Skin sheds in large sheets causing severe pain and fever (Erythrodermic).",
        "Signs of severe skin infection like oozing, foul odor, or red streaks.",
      ],
      specialist: "Dermatologist",
      specialistReason:
        "Specializes in complex skin immunopathology and manages potent topical, phototherapy, and biologic treatments.",
      ageNote: {
        over60:
          "Immunosenescence makes older patients more vulnerable to the immunosuppressive side effects of systemic biologic therapies.",
      },
    },
    "Celiac Disease": {
      prevention:
        "The only prevention for flare-ups and intestinal damage is strict, lifelong adherence to a 100% gluten-free diet.",
      primaryCare:
        "Completely eliminate wheat, barley, and rye from the diet. Learn to read food labels meticulously for hidden gluten.",
      mediumCare:
        "Dietitian consultation, monitoring for nutritional deficiencies (Iron, D, B12), and bone density screening.",
      advancedCare:
        "Intravenous nutrition or targeted immunosuppressants for rare cases of Refractory Celiac Disease.",
      doList: [
        "Maintain a strict, zero-tolerance gluten-free diet.",
        "Read every single food, medication, and cosmetic label for gluten.",
        "Use separate toasters, cutting boards, and utensils to avoid cross-contamination.",
        "Take prescribed vitamin and mineral supplements.",
        "Communicate your strict dietary needs clearly at all restaurants.",
      ],
      dontList: [
        "Do not eat foods containing wheat, barley, rye, or regular oats.",
        "Do not eat food from a shared fryer at a restaurant.",
        "Do not 'cheat' on your diet—even a crumb causes intestinal damage.",
        "Do not assume 'wheat-free' means 'gluten-free'.",
        "Do not ignore ongoing fatigue or bone pain despite dietary changes.",
      ],
      warningSigns: [
        "Severe, unintentional weight loss despite a strict gluten-free diet.",
        "Profuse, watery diarrhea causing severe dehydration.",
        "Severe bone pain or frequent fractures.",
        "Neurological symptoms like severe tingling in hands and feet.",
        "Vomiting blood or severe, unrelenting abdominal pain.",
      ],
      specialist: "Gastroenterologist",
      specialistReason:
        "Performs intestinal biopsies to confirm diagnosis and monitors for complications like malabsorption or intestinal lymphoma.",
      ageNote: {
        over60:
          "Undiagnosed Celiac in older adults often presents atypically with severe osteoporosis, anemia, or cognitive decline rather than GI symptoms.",
      },
    },
    "Crohn's Disease": {
      prevention:
        "Avoid NSAIDs, stop smoking, manage stress, and identify personal dietary triggers that exacerbate symptoms.",
      primaryCare:
        "Eat small frequent meals, maintain a low-residue diet during flares, and stay well hydrated.",
      mediumCare:
        "Prescription aminosalicylates, oral corticosteroids for acute flares, and immunomodulators (e.g., Azathioprine).",
      advancedCare:
        "Biologic therapies (e.g., Infliximab) or bowel resection surgery for strictures, fistulas, or severe refractory disease.",
      doList: [
        "Take all prescribed medications consistently, even during remission.",
        "Eat a low-fiber, bland diet during an active flare-up.",
        "Drink plenty of water to offset fluid lost from diarrhea.",
        "Keep a food diary to identify and avoid individual trigger foods.",
        "Attend regular colonoscopies to monitor for colon cancer.",
      ],
      dontList: [
        "Do not smoke tobacco, as it severely worsens Crohn's disease.",
        "Do not take NSAIDs like ibuprofen, which can trigger severe flares.",
        "Do not eat high-fiber, raw, or greasy foods during an active flare.",
        "Do not ignore a new fever or localized abdominal pain.",
        "Do not stop medications abruptly just because you feel better.",
      ],
      warningSigns: [
        "Severe, localized abdominal pain with high fever.",
        "Inability to pass gas or have a bowel movement (bowel obstruction).",
        "Large amounts of bright red blood in the stool.",
        "Drainage of pus or stool from the skin around the anus (fistula).",
        "Signs of severe dehydration (dizziness, no urine output).",
      ],
      specialist: "Gastroenterologist",
      specialistReason:
        "Manages complex immunosuppressive therapies and uses endoscopy/colonoscopy to monitor intestinal healing.",
      ageNote: {
        over60:
          "Corticosteroids should be used sparingly due to high risks of osteoporosis, diabetes, and severe infections in the elderly.",
      },
    },
    "Ulcerative Colitis": {
      prevention:
        "Avoid NSAIDs, manage stress, maintain a nutrient-dense diet, and adhere strictly to maintenance medications to prevent relapses.",
      primaryCare:
        "Maintain hydration during diarrheal episodes, eat a low-residue diet during flares, and use prescribed enemas/suppositories.",
      mediumCare:
        "Oral/topical aminosalicylates, systemic corticosteroids during flares, and targeted immunomodulators.",
      advancedCare:
        "Biologic infusions, or a proctocolectomy (surgical removal of the colon and rectum), which is considered curative.",
      doList: [
        "Take your prescribed maintenance medications daily without fail.",
        "Stay highly hydrated, particularly when experiencing diarrhea.",
        "Consume small, easily digestible meals during a flare-up.",
        "Get regular colonoscopies as recommended to screen for colon cancer.",
        "Consult your doctor about iron or calcium supplements.",
      ],
      dontList: [
        "Do not use NSAID pain relievers (use acetaminophen instead).",
        "Do not eat raw vegetables, whole grains, or spicy food during a flare.",
        "Do not ignore frequent, bloody stools.",
        "Do not use over-the-counter anti-diarrheal drugs without doctor approval (risk of toxic megacolon).",
        "Do not ignore symptoms of severe fatigue or rapid heartbeat.",
      ],
      warningSigns: [
        "Massive, continuous rectal bleeding.",
        "A suddenly distended, rigidly hard, and severely painful abdomen.",
        "High fever with a rapid heart rate and extreme lethargy.",
        "Cessation of bowel movements accompanied by severe bloating.",
        "Severe dehydration with confusion and inability to stand.",
      ],
      specialist: "Gastroenterologist",
      specialistReason:
        "Expert in managing chronic colonic inflammation, complex biologics, and colon cancer surveillance.",
      ageNote: {
        over60:
          "Differentiating a late-onset UC flare from ischemic colitis or infectious colitis (like C. diff) is a critical diagnostic step.",
      },
    },
    IBS: {
      prevention:
        "Manage psychological stress, maintain regular eating and sleeping schedules, and follow a balanced diet tailored to gut tolerance.",
      primaryCare:
        "Adopt the Low-FODMAP diet, use peppermint oil or probiotics, and practice stress reduction (yoga, meditation).",
      mediumCare:
        "Prescription antispasmodics, targeted neuromodulators (low-dose antidepressants), or specific anti-diarrheal/laxative medications.",
      advancedCare:
        "Intensive Gut-Directed Hypnotherapy, comprehensive CBT, and specialized GI motility clinics.",
      doList: [
        "Eat meals slowly and at regular times every day.",
        "Identify and restrict high-FODMAP trigger foods.",
        "Incorporate soluble fiber (like psyllium) gently into your diet.",
        "Engage in daily stress-relieving activities.",
        "Drink plenty of water throughout the day.",
      ],
      dontList: [
        "Do not consume large amounts of caffeine or alcohol.",
        "Do not eat highly processed, greasy, or excessively spicy foods.",
        "Do not chew gum constantly, as it introduces excess gas into the gut.",
        "Do not rely heavily on stimulant laxatives for long periods.",
        "Do not skip meals or eat large, heavy meals right before bed.",
      ],
      warningSigns: [
        "Unexplained, significant weight loss.",
        "Bleeding from the rectum or blood in the stool.",
        "Awakening from sleep due to severe abdominal pain or diarrhea.",
        "A palpable lump or mass in the abdomen.",
        "Onset of symptoms occurring for the first time after age 50.",
      ],
      specialist: "Gastroenterologist",
      specialistReason:
        "Can definitively rule out severe structural diseases (like IBD or cancer) and manage complex gut-brain axis therapies.",
      ageNote: {
        over60:
          "New onset of IBS-like symptoms in older adults requires immediate screening to rule out colorectal cancer or microscopic colitis.",
      },
    },
    Gout: {
      prevention:
        "Avoid high-purine foods (red meat, shellfish), strictly limit alcohol (especially beer), and maintain a healthy weight.",
      primaryCare:
        "During a flare, rest and elevate the joint, apply ice, and drink large amounts of water to flush out uric acid.",
      mediumCare:
        "Prescription NSAIDs, Colchicine, or Corticosteroids for flares. Urate-lowering therapy like Allopurinol for prevention.",
      advancedCare:
        "Intra-articular steroid injections or advanced biologic therapies (e.g., Pegloticase) for severe, refractory tophi.",
      doList: [
        "Drink 8-16 cups of fluid daily, mostly water.",
        "Take urate-lowering medications daily exactly as prescribed.",
        "Elevate and ice the affected joint immediately during a flare.",
        "Incorporate low-fat dairy and complex carbohydrates into your diet.",
        "Gradually lose weight if overweight, avoiding crash diets.",
      ],
      dontList: [
        "Do not drink beer, liquor, or heavily sweetened beverages.",
        "Do not eat organ meats, shellfish, or excessive red meat.",
        "Do not stop Allopurinol during an acute flare without doctor approval.",
        "Do not use aspirin for pain relief, as it can raise uric acid levels.",
        "Do not ignore the appearance of hard nodules (tophi) under the skin.",
      ],
      warningSigns: [
        "A joint becomes intensely painful, red, hot, and swollen overnight.",
        "Fever and chills accompanying the joint pain (rule out joint infection).",
        "Severe pain in the lower back radiating to the groin (kidney stones).",
        "Inability to move the affected joint entirely.",
        "Skin over the joint breaks open and discharges a chalky substance.",
      ],
      specialist: "Rheumatologist",
      specialistReason:
        "Specializes in crystal-induced inflammatory arthritis and manages complex uric acid reduction therapies safely.",
      ageNote: {
        over60:
          "High risk of drug interactions; Allopurinol dosing must be carefully adjusted based on age-related declining kidney function.",
      },
    },
    Fibromyalgia: {
      prevention:
        "Maintain excellent sleep hygiene, manage emotional stress aggressively, and engage in daily, gentle aerobic exercise.",
      primaryCare:
        "Establish a strict sleep routine, perform low-impact exercises (walking, water aerobics), and practice CBT.",
      mediumCare:
        "Neuromodulators (e.g., Pregabalin, Gabapentin), SNRIs (e.g., Duloxetine), and specialized physical therapy.",
      advancedCare:
        "Comprehensive multidisciplinary pain management programs, trigger point injections, and specialized neuro-rehabilitation.",
      doList: [
        "Engage in graded, gentle aerobic exercise daily.",
        "Maintain a strict, consistent sleep and wake schedule.",
        "Practice daily relaxation techniques like deep breathing or meditation.",
        "Pace your physical and mental activities to prevent 'crash' days.",
        "Keep a symptom journal to track flares and identify triggers.",
      ],
      dontList: [
        "Do not push through the pain to exhaustion.",
        "Do not remain completely sedentary, as inactivity worsens muscle pain.",
        "Do not consume caffeine or alcohol late in the day.",
        "Do not rely on opioid pain medications, which are generally ineffective for this condition.",
        "Do not ignore the emotional/psychological impact of chronic pain.",
      ],
      warningSigns: [
        "Sudden, severe, localized pain unlike typical widespread aches.",
        "New onset of distinct neurological symptoms (numbness, extreme weakness).",
        "Severe depression with thoughts of self-harm or suicide.",
        "Total inability to sleep for multiple consecutive nights.",
        "Unexplained high fever or extreme, rapid weight loss.",
      ],
      specialist: "Rheumatologist",
      specialistReason:
        "Diagnoses fibromyalgia by ruling out systemic autoimmune conditions and coordinates multidisciplinary pain management.",
      ageNote: {
        over60:
          "Must be carefully distinguished from Polymyalgia Rheumatica, an inflammatory condition in the elderly that responds rapidly to steroids.",
      },
    },
    "Chronic Fatigue": {
      prevention:
        "Avoid physical or cognitive overexertion, manage stress, and protect against severe viral infections.",
      primaryCare:
        "Practice extreme 'pacing' (energy conservation), optimize sleep hygiene, and manage orthostatic intolerance (drink fluids, consume salt).",
      mediumCare:
        "Targeted medications for sleep, pain, and dysautonomia (e.g., beta-blockers, fludrocortisone), and CBT for coping strategies.",
      advancedCare:
        "Specialized multidisciplinary clinics for ME/CFS focusing on autonomic nervous system regulation and severe symptom palliation.",
      doList: [
        "Practice strict energy pacing to avoid Post-Exertional Malaise (PEM).",
        "Rest in a dark, quiet room during severe symptom flares.",
        "Use a heart rate monitor to stay within a safe exertion limit.",
        "Maintain adequate hydration and salt intake if dizziness is an issue.",
        "Prioritize the most important tasks and delegate the rest.",
      ],
      dontList: [
        "Do not 'push through' fatigue; it will cause severe relapses.",
        "Do not engage in Graded Exercise Therapy (GET) if it triggers PEM.",
        "Do not ignore the need for restorative sleep.",
        "Do not expose yourself to high-stress, highly stimulating environments.",
        "Do not consume stimulants like caffeine in an attempt for fake energy.",
      ],
      warningSigns: [
        "Sudden inability to stand without fainting (severe POTS/Dysautonomia).",
        "Complete bedbound state with an inability to eat or drink.",
        "Severe cognitive dysfunction where speaking or recognizing people is impaired.",
        "New, severe localized pain or focal neurological deficits.",
        "Severe depression with active suicidal ideation.",
      ],
      specialist: "Neurologist",
      specialistReason:
        "Can evaluate dysautonomia, rule out other neuro-immune disorders, and manage complex nervous system symptoms.",
      ageNote: {
        over60:
          "Profound fatigue in older adults must thoroughly prompt screening for occult malignancies, heart failure, and advanced thyroid disease first.",
      },
    },
    "HIV/AIDS": {
      prevention:
        "Practice safe sex, use PrEP if at high risk, never share needles, and screen all blood products.",
      primaryCare:
        "Strict daily adherence to Antiretroviral Therapy (ART), maintain a nutrient-dense diet, and practice strict hygiene to prevent infections.",
      mediumCare:
        "Routine monitoring of CD4 count and Viral Load, and prophylactic antibiotics if CD4 drops below critical levels.",
      advancedCare:
        "Treatment of opportunistic infections (e.g., PCP, MAC, Kaposi's Sarcoma) in specialized infectious disease units.",
      doList: [
        "Take your ART medications at the exact same time every single day.",
        "Attend all scheduled medical appointments for lab monitoring.",
        "Practice strict hand hygiene and food safety protocols.",
        "Inform all sexual partners of your status and use barrier protection.",
        "Get all recommended non-live vaccines (Flu, Pneumonia, COVID).",
      ],
      dontList: [
        "Do not miss a single dose of your ART medication.",
        "Do not consume raw or undercooked meats, eggs, or unpasteurized dairy.",
        "Do not share needles, razors, or toothbrushes.",
        "Do not expose yourself to people with active contagious infections.",
        "Do not take unverified herbal supplements (like St. John's Wort) that interact with ART.",
      ],
      warningSigns: [
        "A sudden, severe headache with neck stiffness or confusion.",
        "A dry cough accompanied by severe shortness of breath and fever.",
        "Unexplained, extreme weight loss (wasting syndrome).",
        "Sudden loss of vision or severe eye pain.",
        "Purple or black skin lesions that grow or spread rapidly.",
      ],
      specialist: "Infectious Disease Specialist",
      specialistReason:
        "Expert in complex retroviral biology, ART resistance profiling, and managing rare opportunistic infections.",
      ageNote: {
        over60:
          "Older adults with HIV are at a significantly higher risk for accelerated cardiovascular disease, osteoporosis, and cognitive decline.",
      },
    },
    Malaria: {
      prevention:
        "Use antimalarial prophylaxis when traveling to endemic areas, sleep under insecticide-treated nets, and use DEET repellents.",
      primaryCare:
        "Seek immediate blood testing if a fever develops after travel. Rest and maintain hydration and fever control.",
      mediumCare:
        "Prescription of specific antimalarials (e.g., Artemisinin-based combination therapies, Chloroquine) based on region-specific resistance.",
      advancedCare:
        "Intravenous Artesunate and ICU admission for severe, complicated malaria (cerebral malaria, severe anemia).",
      doList: [
        "Take antimalarial prophylaxis exactly as prescribed when traveling.",
        "Use mosquito nets and insect repellent in endemic areas.",
        "Seek immediate medical attention for any unexplained fever.",
        "Complete the entire course of antimalarial treatment if diagnosed.",
        "Drink plenty of fluids and monitor urine output.",
      ],
      dontList: [
        "Do not delay seeking medical care for a fever after travel.",
        "Do not assume you are immune because you grew up in an endemic area.",
        "Do not stop taking prophylactic medications prematurely after leaving the area.",
        "Do not use counterfeit or unprescribed antimalarial drugs.",
        "Do not ignore symptoms like dark urine or extreme fatigue.",
      ],
      warningSigns: [
        "Extreme confusion, seizures, or coma (Cerebral Malaria).",
        "Severe difficulty breathing or rapid breathing.",
        "Dark, cola-colored urine or complete lack of urine.",
        "Severe, uncontrollable vomiting preventing medication intake.",
        "Extreme paleness and weakness indicating severe anemia.",
      ],
      specialist: "Infectious Disease Specialist",
      specialistReason:
        "Vital for navigating regional drug resistance patterns and managing critical, life-threatening malarial complications.",
      ageNote: {
        over60:
          "Higher risk of rapidly progressing to severe malaria; aggressive fluid management and prompt IV therapy are critical.",
      },
    },
    "COVID Long": {
      prevention:
        "Stay up to date with COVID-19 vaccinations and boosters, wear masks in high-risk settings, and rest adequately during acute infection.",
      primaryCare:
        "Practice energy pacing, utilize breathing exercises, and treat individual symptoms (e.g., OTC pain meds for headaches).",
      mediumCare:
        "Targeted therapies for specific organ systems (inhalers for lungs, beta-blockers for POTS), and olfactory training for smell loss.",
      advancedCare:
        "Comprehensive Post-COVID multidisciplinary clinics, specialized neuro-cognitive rehabilitation, and intensive dysautonomia management.",
      doList: [
        "Pace your physical and mental energy strictly to prevent crashes.",
        "Keep a detailed log of your symptoms and triggers.",
        "Engage in slow, gentle breathing exercises to improve lung capacity.",
        "Stay hydrated and increase salt intake if you have POTS/dizziness.",
        "Seek psychological support to cope with prolonged illness.",
      ],
      dontList: [
        "Do not attempt to 'push through' the fatigue or brain fog.",
        "Do not jump back into intense exercise immediately.",
        "Do not ignore new or rapidly worsening symptoms.",
        "Do not take unproven, experimental treatments without medical supervision.",
        "Do not isolate yourself completely; maintain a support system.",
      ],
      warningSigns: [
        "Sudden, severe chest pain or pressure.",
        "New onset of significant shortness of breath at rest.",
        "Fainting or severe dizziness upon standing.",
        "Signs of a blood clot, such as a hot, swollen leg or sudden stroke symptoms.",
        "Severe depression with thoughts of self-harm.",
      ],
      specialist: "Pulmonologist",
      specialistReason:
        "Often leads multi-disciplinary Post-COVID clinics, addressing long-term respiratory, immune, and systemic dysfunction.",
      ageNote: {
        over60:
          "Elderly patients with Long COVID are highly prone to severe deconditioning, frailty, and accelerated cognitive decline.",
      },
    },
    "Rheumatoid Arthritis": {
      prevention:
        "Avoid smoking (a major environmental trigger), maintain excellent dental hygiene, and eat an anti-inflammatory diet.",
      primaryCare:
        "Use heat for stiffness and cold for acute pain, perform gentle range-of-motion exercises, and get adequate rest.",
      mediumCare:
        "Conventional DMARDs (e.g., Methotrexate), low-dose corticosteroids, and NSAIDs for symptom management.",
      advancedCare:
        "Biologic or targeted synthetic DMARDs (e.g., TNF inhibitors, JAK inhibitors) and reconstructive joint surgery.",
      doList: [
        "Take your immunosuppressive medications consistently.",
        "Perform daily gentle joint-mobility stretches.",
        "Use assistive devices to protect small joints in the hands.",
        "Apply heat therapies in the morning to relieve profound stiffness.",
        "Attend regular blood test monitoring for medication toxicity.",
      ],
      dontList: [
        "Do not smoke, as it makes RA more severe and medication less effective.",
        "Do not perform heavy, repetitive lifting that stresses the joints.",
        "Do not ignore signs of infection while on immunosuppressants.",
        "Do not stay completely immobile during pain flares; gentle movement is needed.",
        "Do not skip regular eye exams and cardiovascular screenings.",
      ],
      warningSigns: [
        "A single joint becomes extraordinarily red, hot, and swollen (possible infection).",
        "High fever, chills, and severe fatigue.",
        "Sudden chest pain or difficulty breathing (systemic RA involvement).",
        "Numbness or weakness in the arms/legs (cervical spine instability).",
        "Severe, unexplained weight loss or night sweats.",
      ],
      specialist: "Rheumatologist",
      specialistReason:
        "Diagnoses systemic autoimmune disorders and prescribes aggressive, complex immunomodulatory therapies to prevent joint destruction.",
      ageNote: {
        over60:
          "Patients are at a highly elevated risk for cardiovascular disease and osteoporosis; holistic monitoring is required.",
      },
    },
    "Hepatitis A / Pneumonia": {
      prevention:
        "Practice meticulous hand hygiene, ensure food/water safety, and receive Hep A and Pneumococcal vaccinations.",
      primaryCare:
        "For Hep A: strict rest, hydration, and bland diet. For Pneumonia: hydration, rest, and OTC fever reducers.",
      mediumCare:
        "Hep A: Supportive care. Pneumonia: Prescription oral antibiotics (if bacterial), bronchodilators, and close monitoring of oxygen levels.",
      advancedCare:
        "Hospital admission for IV fluids, IV antibiotics, supplemental oxygen, or mechanical ventilation for severe respiratory failure.",
      doList: [
        "Wash your hands thoroughly with soap and water frequently.",
        "Drink plenty of fluids to thin out mucus and stay hydrated.",
        "Take the full course of prescribed antibiotics if treating pneumonia.",
        "Eat small, easily digestible meals to preserve energy.",
        "Monitor your breathing rate and temperature daily.",
      ],
      dontList: [
        "Do not prepare food for others if infected with Hepatitis A.",
        "Do not drink any alcohol, as it taxes the liver and immune system.",
        "Do not stop taking antibiotics early, even if you feel better.",
        "Do not smoke or expose yourself to lung irritants.",
        "Do not ignore severe chest pain when coughing.",
      ],
      warningSigns: [
        "Severe difficulty breathing or lips turning blue.",
        "Sudden confusion, delirium, or inability to stay awake.",
        "Persistent vomiting leading to extreme dehydration.",
        "Coughing up blood or large amounts of rust-colored sputum.",
        "Intense right upper quadrant abdominal pain and deep jaundice.",
      ],
      specialist: "Infectious Disease Specialist",
      specialistReason:
        "Manages complex overlapping infections, specific antimicrobial therapies, and severe systemic inflammatory responses.",
      ageNote: {
        over60:
          "Pneumonia can rapidly become fatal in the elderly; early intervention with antibiotics and careful fluid balance is critical.",
      },
    },
    "None of the above": {
      prevention:
        "Maintain a balanced diet, exercise at least 150 minutes weekly, prioritize sleep, and manage stress proactively.",
      primaryCare:
        "Perform routine self-care, stay hydrated, maintain good hygiene, and seek preventive checkups annually.",
      mediumCare:
        "Address minor ailments promptly with a general practitioner, utilizing basic lab tests and standard prescriptions when needed.",
      advancedCare:
        "Referral to specialized medical care if new, persistent, or complex symptoms develop beyond basic preventive scope.",
      doList: [
        "Drink at least 8 glasses of water daily.",
        "Aim for 7-9 hours of quality sleep every night.",
        "Eat a diet rich in fruits, vegetables, and lean proteins.",
        "Engage in some form of physical activity every day.",
        "Schedule and attend an annual preventive health physical.",
      ],
      dontList: [
        "Do not smoke or use any form of tobacco.",
        "Do not consume excessive amounts of alcohol.",
        "Do not lead a completely sedentary lifestyle.",
        "Do not ignore persistent or unusual physical symptoms.",
        "Do not engage in prolonged, unmanaged chronic stress.",
      ],
      warningSigns: [
        "Sudden, severe pain anywhere in the body.",
        "Unexplained, rapid weight loss or gain.",
        "Difficulty breathing or persistent chest pressure.",
        "Sudden neurological changes, like numbness or slurred speech.",
        "A high, persistent fever that does not respond to basic care.",
      ],
      specialist: "General Physician",
      specialistReason:
        "Provides comprehensive primary care, preventive screenings, and acts as the gateway to specialized medicine if required.",
      ageNote: {
        over60:
          "Focus shifts heavily toward fall prevention, cardiovascular screening, bone density monitoring, and cognitive health maintenance.",
      },
    },
  },
  allergies: {
    Penicillin: {
      description:
        "An immune system reaction to the antibiotic drug penicillin and its derivatives.",
      crossReactivity:
        "Cephalosporins (e.g., Cephalexin) have a small risk of cross-reactivity.",
      safeAlternatives:
        "Macrolides (e.g., Azithromycin), Clindamycin, or Doxycycline.",
      primaryCare:
        "Stop the medication immediately. Take an oral antihistamine for mild rashes or hives.",
      warningSigns: [
        "Swelling of the lips, tongue, or throat.",
        "Difficulty breathing or wheezing.",
        "Sudden, severe drop in blood pressure causing dizziness.",
        "Rapid, weak pulse.",
        "A widespread, intensely itchy rash spreading rapidly.",
      ],
      emergencyAction:
        "Administer epinephrine (EpiPen) immediately and call emergency services. Do not wait for symptoms to worsen.",
    },
    Amoxicillin: {
      description:
        "A common allergic reaction to amoxicillin, a beta-lactam antibiotic often used for respiratory and ear infections.",
      crossReactivity:
        "Other penicillins and a minor risk with cephalosporins.",
      safeAlternatives:
        "Macrolides (e.g., Clarithromycin), Sulfa drugs, or Tetracyclines (if age-appropriate).",
      primaryCare:
        "Discontinue drug use. Use OTC antihistamines for mild cutaneous symptoms and monitor closely.",
      warningSigns: [
        "Tightness in the chest or throat.",
        "Severe, rapid swelling of the face.",
        "Inability to speak in full sentences due to breathlessness.",
        "Fainting or severe lightheadedness.",
        "Severe abdominal cramping and vomiting.",
      ],
      emergencyAction:
        "Inject epinephrine into the outer thigh and seek immediate emergency medical care.",
    },
    Aspirin: {
      description:
        "An intolerance or allergic reaction to acetylsalicylic acid, potentially exacerbating asthma or causing anaphylaxis.",
      crossReactivity: "Other NSAIDs like Ibuprofen, Naproxen, and Diclofenac.",
      safeAlternatives:
        "Acetaminophen (Paracetamol) or selective COX-2 inhibitors (e.g., Celecoxib) under medical supervision.",
      primaryCare:
        "Stop use. For mild hives, take an H1-antihistamine. For mild asthma exacerbation, use a rescue inhaler.",
      warningSigns: [
        "Severe exacerbation of asthma symptoms (AERD).",
        "Facial and nasal swelling.",
        "Sudden development of hives across the body.",
        "Dizziness and a sudden drop in blood pressure.",
        "Gastrointestinal distress leading to severe vomiting.",
      ],
      emergencyAction:
        "Use an epinephrine auto-injector if breathing is compromised and call 911/emergency services.",
    },
    Ibuprofen: {
      description:
        "An allergic or hypersensitivity reaction to ibuprofen, a common over-the-counter NSAID.",
      crossReactivity: "Aspirin, Naproxen, and other non-selective NSAIDs.",
      safeAlternatives: "Acetaminophen (Paracetamol).",
      primaryCare:
        "Discontinue the medication. Apply cool compresses to hives and take an oral antihistamine.",
      warningSigns: [
        "Swelling around the eyes or mouth.",
        "Sudden wheezing or shortness of breath.",
        "Blistering or peeling of the skin (rare but severe).",
        "Feeling of impending doom or extreme panic.",
        "Fainting or loss of consciousness.",
      ],
      emergencyAction:
        "Administer epinephrine immediately upon signs of airway restriction and seek emergency care.",
    },
    Paracetamol: {
      description:
        "A very rare allergic reaction to acetaminophen (paracetamol), an analgesic and antipyretic drug.",
      crossReactivity:
        "Generally safe, but avoid combination drugs containing other potential allergens.",
      safeAlternatives: "Ibuprofen or Naproxen (if no NSAID allergy exists).",
      primaryCare:
        "Stop taking the drug. Manage mild itching with OTC antihistamines.",
      warningSigns: [
        "Acute swelling of the face, tongue, or throat.",
        "Difficulty swallowing.",
        "Severe rash or skin peeling (e.g., Stevens-Johnson Syndrome).",
        "Sudden respiratory distress.",
        "Profound dizziness or collapse.",
      ],
      emergencyAction:
        "Call emergency services immediately and administer epinephrine if available.",
    },
    "Sulfa Drugs": {
      description:
        "An allergy to medications containing sulfonamides, commonly found in certain antibiotics.",
      crossReactivity:
        "Sulfamethoxazole (Bactrim), some diuretics (e.g., Furosemide), and certain diabetes drugs (Sulfonylureas).",
      safeAlternatives:
        "Penicillins, Macrolides, or Quinolones (for infections).",
      primaryCare:
        "Cease taking the medication. Treat mild skin rashes with antihistamines and topical corticosteroids.",
      warningSigns: [
        "Development of a painful, widespread red or purple rash.",
        "Blisters in the mouth, nose, or eyes.",
        "Fever accompanying a sudden skin rash.",
        "Difficulty breathing or swallowing.",
        "Swelling of the lymph nodes and face.",
      ],
      emergencyAction:
        "Seek immediate emergency room evaluation for severe skin reactions or respiratory distress.",
    },
    Codeine: {
      description:
        "An allergic reaction to codeine, an opiate used for pain and cough suppression (often confused with opiate side effects).",
      crossReactivity: "Morphine, Hydrocodone, and other opiate derivatives.",
      safeAlternatives:
        "Acetaminophen, NSAIDs, or non-opiate synthetic pain relievers (e.g., Tramadol, under supervision).",
      primaryCare:
        "Stop medication. Distinguish true allergy (hives, swelling) from normal opiate histamine release (mild itching).",
      warningSigns: [
        "Swelling of the tongue and throat.",
        "Severe wheezing or stopping breathing.",
        "Dangerous drop in blood pressure.",
        "Widespread hives (not just localized itching).",
        "Loss of consciousness.",
      ],
      emergencyAction:
        "Administer epinephrine, perform CPR if breathing stops, and call for emergency medical help.",
    },
    Tetracycline: {
      description:
        "An immune reaction to the tetracycline class of broad-spectrum antibiotics.",
      crossReactivity: "Doxycycline, Minocycline.",
      safeAlternatives:
        "Macrolides, Penicillins, or Cephalosporins depending on the infection.",
      primaryCare:
        "Discontinue use. Treat mild allergic rashes with oral antihistamines and avoid sun exposure.",
      warningSigns: [
        "Severe photosensitivity leading to immediate blistering in the sun.",
        "Swelling of the facial features and airway.",
        "Difficulty breathing or chest tightness.",
        "Severe gastrointestinal cramping with hives.",
        "Dizziness or fainting.",
      ],
      emergencyAction:
        "Call emergency services and use an EpiPen if anaphylaxis symptoms develop.",
    },
    Ciprofloxacin: {
      description:
        "An allergy to fluoroquinolone antibiotics, which can range from mild rashes to anaphylaxis.",
      crossReactivity:
        "Levofloxacin, Moxifloxacin, and other fluoroquinolones.",
      safeAlternatives:
        "Macrolides, Penicillins, or Sulfa drugs (if no sulfa allergy).",
      primaryCare:
        "Stop taking the drug immediately. Use antihistamines for mild pruritus (itching).",
      warningSigns: [
        "Sudden, severe swelling of the lips, tongue, or throat.",
        "Wheezing or severe shortness of breath.",
        "Rapid heartbeat and severe lightheadedness.",
        "Sudden, severe joint or tendon pain with swelling (tendon rupture risk).",
        "Loss of consciousness.",
      ],
      emergencyAction:
        "Administer epinephrine immediately and transport to the nearest emergency department.",
    },
    Metronidazole: {
      description:
        "A rare hypersensitivity to metronidazole, an antibiotic and antiprotozoal medication.",
      crossReactivity: "Tinidazole.",
      safeAlternatives:
        "Clindamycin, Vancomycin, or specific antiprotozoals depending on the pathogen.",
      primaryCare:
        "Discontinue use immediately. Take an antihistamine for minor hives.",
      warningSigns: [
        "Swelling of the face, throat, or tongue.",
        "Difficulty breathing or chest tightness.",
        "Severe neurological symptoms (seizures or severe tingling).",
        "Widespread blistering rash.",
        "Severe dizziness and drop in blood pressure.",
      ],
      emergencyAction:
        "Call emergency services immediately and administer an epinephrine auto-injector if available.",
    },
    Peanuts: {
      description:
        "A severe, often lifelong immune response to proteins found in peanuts (a legume).",
      crossReactivity:
        "Lupine, sometimes soy, peas, or other legumes. (Usually distinct from tree nuts, but co-allergy is common).",
      safeAlternatives:
        "Sunflower seed butter, soy nut butter (if safe), or pumpkin seed butter.",
      primaryCare:
        "For minor accidental contact causing mild localized hives, wash the area and administer an oral antihistamine.",
      warningSigns: [
        "Swelling of the throat, tongue, or lips.",
        "Wheezing, coughing, or difficulty breathing.",
        "Severe vomiting or diarrhea immediately after ingestion.",
        "A sudden drop in blood pressure resulting in fainting.",
        "A sense of impending doom or panic.",
      ],
      emergencyAction:
        "Inject Epinephrine immediately into the outer thigh. Do not wait. Call emergency services.",
    },
    "Tree Nuts": {
      description:
        "An allergy to nuts that grow on trees (e.g., almonds, walnuts, cashews, pecans).",
      crossReactivity:
        "High cross-reactivity among different tree nuts. Also potential cross-reactivity with pink peppercorn.",
      safeAlternatives:
        "Seeds (sunflower, pumpkin, sesame - if safe), roasted chickpeas, or peanuts (if cleared by an allergist).",
      primaryCare:
        "For known mild exposures (e.g., mild oral itching), take an antihistamine and monitor strictly.",
      warningSigns: [
        "Tightness in the throat or difficulty swallowing.",
        "Shortness of breath or audible wheezing.",
        "Rapid spread of hives across the body.",
        "Vomiting, stomach cramps, and nausea.",
        "Dizziness, confusion, or loss of consciousness.",
      ],
      emergencyAction:
        "Use an EpiPen immediately and seek emergency medical care, even if symptoms temporarily improve.",
    },
    "Dairy / Lactose": {
      description:
        "An immune reaction to milk proteins (casein/whey), distinct from lactose intolerance.",
      crossReactivity: "Goat's milk, sheep's milk, and rarely beef.",
      safeAlternatives:
        "Oat milk, almond milk, soy milk, and coconut-based dairy alternatives.",
      primaryCare:
        "If mild hives occur after ingestion, administer an antihistamine. Avoid all dairy products.",
      warningSigns: [
        "Swelling of the lips, tongue, or airway.",
        "Severe coughing or wheezing.",
        "Projectile vomiting shortly after ingestion.",
        "Anaphylactic shock (drop in blood pressure).",
        "Widespread hives and facial swelling.",
      ],
      emergencyAction:
        "Administer epinephrine instantly and call for emergency transport to a hospital.",
    },
    "Gluten / Wheat": {
      description:
        "An allergic reaction to proteins found in wheat (distinct from Celiac disease, which is autoimmune).",
      crossReactivity:
        "Barley, rye, oats (due to cross-contamination), and occasionally other grass pollens.",
      safeAlternatives:
        "Rice, corn, quinoa, amaranth, and certified gluten-free oats.",
      primaryCare:
        "Take an antihistamine for mild cutaneous symptoms and remove the food source.",
      warningSigns: [
        "Difficulty breathing or asthma-like symptoms.",
        "Swelling of the throat or mouth.",
        "Anaphylaxis, particularly exercise-induced anaphylaxis after eating wheat.",
        "Severe abdominal cramps and vomiting.",
        "Sudden, severe drop in blood pressure.",
      ],
      emergencyAction:
        "Use an epinephrine auto-injector immediately and go to the emergency room.",
    },
    Eggs: {
      description:
        "An immune reaction primarily to proteins in egg whites, though egg yolks can also trigger it.",
      crossReactivity:
        "Bird feathers or poultry meat (rarely, known as bird-egg syndrome).",
      safeAlternatives:
        "Flaxseed meal (for baking), applesauce, commercial egg replacers, aquafaba.",
      primaryCare:
        "Wash any skin contact areas. Use an oral antihistamine for minor hives.",
      warningSigns: [
        "Swelling of the face, airway, or tongue.",
        "Difficulty breathing or chest tightness.",
        "Severe gastrointestinal distress (vomiting).",
        "Rapid heartbeat and dizziness.",
        "Sudden, widespread hives.",
      ],
      emergencyAction:
        "Administer epinephrine immediately and contact emergency medical services.",
    },
    Shellfish: {
      description:
        "A severe allergic reaction to crustacea (shrimp, crab, lobster) or mollusks (clams, oysters, scallops).",
      crossReactivity:
        "Dust mites, cockroaches (due to the protein tropomyosin). Very high cross-reactivity within shellfish families.",
      safeAlternatives:
        "Finfish (e.g., salmon, cod, tuna), if cleared by an allergist. Vegan seafood alternatives.",
      primaryCare:
        "For very mild localized itching, take an antihistamine, but observe closely for rapid escalation.",
      warningSigns: [
        "Swelling of the throat, lips, and tongue.",
        "Severe trouble breathing or wheezing.",
        "Abdominal cramps, severe nausea, or vomiting.",
        "Dizziness, fainting, or shock.",
        "Hoarseness or inability to speak clearly.",
      ],
      emergencyAction:
        "Use an EpiPen immediately upon any sign of airway restriction and call 911.",
    },
    "Seafood / Fish": {
      description:
        "An allergy to finned fish (e.g., salmon, tuna, halibut), often developing in adulthood.",
      crossReactivity:
        "High cross-reactivity among different types of finfish. Sometimes cross-reacts with amphibian meat.",
      safeAlternatives:
        "Plant-based proteins, poultry, meat. Shellfish may be safe if completely distinct, but consult a doctor.",
      primaryCare:
        "Discontinue eating immediately. Take an antihistamine for minor skin reactions.",
      warningSigns: [
        "Throat tightness or feeling a lump in the throat.",
        "Difficulty breathing or asthma exacerbation.",
        "Severe digestive distress shortly after eating.",
        "Swelling of the face or widespread hives.",
        "Fainting or severe hypotension.",
      ],
      emergencyAction:
        "Administer epinephrine without delay and proceed to the nearest emergency room.",
    },
    Soy: {
      description:
        "An allergic reaction to soybeans and products containing soy protein.",
      crossReactivity: "Peanuts and other legumes (peas, beans, lentils).",
      safeAlternatives:
        "Coconut aminos (instead of soy sauce), oat or almond milk, seitan, or quinoa.",
      primaryCare: "For mild hives or itching, administer an H1-antihistamine.",
      warningSigns: [
        "Swelling of the lips, tongue, or throat.",
        "Wheezing, coughing, or difficulty breathing.",
        "Flushing, generalized hives, and severe itching.",
        "Nausea, abdominal pain, and vomiting.",
        "Drop in blood pressure or loss of consciousness.",
      ],
      emergencyAction:
        "Inject epinephrine into the outer thigh immediately and seek emergency medical care.",
    },
    Sesame: {
      description:
        "An increasingly common, severe allergy to sesame seeds and sesame oil.",
      crossReactivity:
        "Poppy seeds, rye grain, kiwi, and sometimes tree nuts like walnuts.",
      safeAlternatives:
        "Sunflower seeds, pumpkin seeds, olive oil, and tahini-free hummus.",
      primaryCare:
        "If minor itching occurs, take an oral antihistamine and watch closely.",
      warningSigns: [
        "Swelling of the airway, tongue, or lips.",
        "Shortness of breath or severe wheezing.",
        "Sudden, severe vomiting or diarrhea.",
        "A pale or bluish tint to the skin (cyanosis).",
        "Dizziness or fainting.",
      ],
      emergencyAction:
        "Administer an epinephrine auto-injector immediately and call emergency services.",
    },
    Latex: {
      description: "An allergic reaction to proteins in natural rubber latex.",
      crossReactivity:
        "Latex-fruit syndrome: Bananas, avocados, kiwi, chestnuts, and papaya.",
      safeAlternatives:
        "Nitrile or vinyl gloves, silicone or polyurethane medical products.",
      primaryCare:
        "Remove the latex source immediately. Wash the area with soap and water. Take an antihistamine for hives.",
      warningSigns: [
        "Swelling of the facial features or airway.",
        "Difficulty breathing, chest tightness, or wheezing.",
        "Severe, widespread hives or intensely itchy skin.",
        "Rapid heartbeat and severe lightheadedness.",
        "Loss of consciousness.",
      ],
      emergencyAction:
        "Administer epinephrine immediately and call for emergency medical assistance.",
    },
    "Bee / Insect": {
      description:
        "A severe systemic reaction to the venom from stings (bees, wasps, hornets, yellow jackets, fire ants).",
      crossReactivity:
        "High cross-reactivity between different wasp and hornet venoms.",
      safeAlternatives:
        "Wear protective clothing, use insect repellents, and avoid perfumes/bright colors outdoors.",
      primaryCare:
        "Remove the stinger by scraping (do not pinch). Clean the area, apply ice, and take an antihistamine.",
      warningSigns: [
        "Swelling that spreads far beyond the sting site (e.g., to the face or neck).",
        "Difficulty breathing or wheezing.",
        "Dizziness, fainting, or a drop in blood pressure.",
        "Stomach cramps, nausea, or vomiting.",
        "Hives that break out all over the body.",
      ],
      emergencyAction:
        "Use an epinephrine auto-injector instantly if systemic symptoms appear, and call emergency services.",
    },
    "Dust Mites": {
      description:
        "An allergic reaction to the microscopic bugs that live in household dust and their waste.",
      crossReactivity: "Shellfish (due to the shared protein tropomyosin).",
      safeAlternatives:
        "Hardwood floors instead of carpets, allergen-proof mattress covers, and HEPA filters.",
      primaryCare:
        "Use OTC oral antihistamines, nasal corticosteroid sprays, and saline sinus rinses.",
      warningSigns: [
        "Severe asthma exacerbation (wheezing, chest tightness).",
        "Inability to breathe easily, especially at night.",
        "Severe, persistent facial pressure and pain.",
        "Uncontrollable, severe coughing spells.",
        "Worsening of eczema leading to severe skin infections.",
      ],
      emergencyAction:
        "If a severe asthma attack occurs that does not respond to a rescue inhaler, seek emergency care immediately.",
    },
    Pollen: {
      description:
        "Allergic rhinitis (hay fever) triggered by fine powder from trees, grasses, and weeds.",
      crossReactivity:
        "Oral Allergy Syndrome (e.g., Birch pollen cross-reacts with apples/celery; Ragweed with melons/bananas).",
      safeAlternatives:
        "Stay indoors during high pollen counts, keep windows closed, and use air conditioning.",
      primaryCare:
        "Take non-drowsy antihistamines, use steroid nasal sprays, and shower before bed to wash off pollen.",
      warningSigns: [
        "Severe asthma attack triggered by high pollen counts.",
        "Extreme difficulty breathing or uncontrollable wheezing.",
        "Severe swelling of the eyes to the point of being swollen shut.",
        "Development of a secondary severe sinus infection with high fever.",
        "Anaphylaxis from eating cross-reactive raw fruits (rare but possible).",
      ],
      emergencyAction:
        "Use a rescue inhaler or epinephrine if airway obstruction occurs and seek emergency medical attention.",
    },
    "Animal Dander": {
      description:
        "An immune reaction to proteins found in an animal's skin cells, saliva, or urine.",
      crossReactivity:
        "Pork-cat syndrome (rare cross-reactivity where cat allergic individuals react to pork meat).",
      safeAlternatives:
        "Reptiles or fish as pets. Using HEPA air purifiers and establishing pet-free zones in the home.",
      primaryCare:
        "Wash hands after petting animals. Use oral antihistamines and eye drops for symptom relief.",
      warningSigns: [
        "Severe asthma exacerbation within minutes of exposure.",
        "Chest tightness and severe shortness of breath.",
        "Hives appearing instantly upon contact with the animal.",
        "Severe facial swelling.",
        "Inability to control symptoms with standard OTC medications.",
      ],
      emergencyAction:
        "If a severe asthma attack begins, use a rescue inhaler and go to the emergency room if breathing doesn't improve.",
    },
    Mold: {
      description:
        "An allergy to the spores of molds and other fungi present both indoors and outdoors.",
      crossReactivity:
        "Certain foods containing fungi or yeast (mushrooms, fermented foods) may occasionally cause minor reactions.",
      safeAlternatives:
        "Use dehumidifiers to keep indoor humidity below 50%. Clean bathrooms and kitchens with mold-killing solutions.",
      primaryCare:
        "Take antihistamines and use nasal decongestants. Remove oneself from the damp environment.",
      warningSigns: [
        "Severe asthma attack triggered by entering a damp building.",
        "Allergic bronchopulmonary aspergillosis (ABPA) causing severe coughing and fever.",
        "Shortness of breath that worsens progressively.",
        "Chest tightness that does not resolve.",
        "Coughing up brown flecks or blood.",
      ],
      emergencyAction:
        "Seek immediate emergency care for severe breathing difficulties or uncontrolled asthma attacks.",
    },
    "No Known Allergies": {
      description: "No registered allergies or known hypersensitivities.",
      crossReactivity: "None.",
      safeAlternatives: "Standard medical and dietary guidelines apply.",
      primaryCare: "Maintain standard health and hygiene practices.",
      warningSigns: [
        "Sudden difficulty breathing after trying a new food or drug.",
        "Unexpected onset of hives or facial swelling.",
        "Sudden severe dizziness or fainting.",
        "Unexplained rapid heartbeat.",
        "A sensation of tightness in the throat.",
      ],
      emergencyAction:
        "Standard first-aid applies. Call emergency services if an unexpected anaphylactic reaction occurs.",
    },
  },
};
/* END DATABASE */

/* ==========================================
   1. SIMULATED PROFILE BOOT
   ========================================== */
const DEFAULT_PROFILE = {
  name: "Sadi Muhammad",
  age: 65,
  disease: "Diabetes",
  allergy: "Peanuts",
  blood: "O+",
};

function loadUserProfile() {
  try {
    const stored = localStorage.getItem("medilink_user_profile");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && (parsed.fullName || parsed.name || parsed.disease || parsed.allergy)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to parse stored profile:", e);
  }
  return null;
}

function getUserProfile() {
  const profile = loadUserProfile();
  if (profile) return profile;
  return {
    fullName: "Guest",
    name: "Guest",
    disease: "None of the above",
    allergy: "No Known Allergies",
    bloodGroup: "O+",
    age: 30
  };
}

function getUserName() {
  const p = getUserProfile();
  return p.fullName || p.name || "Patient";
}

function getUserDisease() {
  const p = getUserProfile();
  if (p.disease && p.disease !== "None of the above") return p.disease;
  if (p.conditions && Array.isArray(p.conditions) && p.conditions.length > 0 && p.conditions[0] !== "None of the above") {
    return p.conditions[0];
  }
  return "None of the above";
}

function getUserAllergy() {
  const p = getUserProfile();
  if (p.allergy && p.allergy !== "No Known Allergies") return p.allergy;
  if (p.allergies && Array.isArray(p.allergies) && p.allergies.length > 0 && p.allergies[0] !== "No Known Allergies") {
    return p.allergies[0];
  }
  return "No Known Allergies";
}

function getUserBlood() {
  const p = getUserProfile();
  return p.bloodGroup || p.blood || "O+";
}

function getDiseaseData() {
  const dName = getUserDisease();
  if (medilinkAIDatabase && medilinkAIDatabase.diseases) {
    if (medilinkAIDatabase.diseases[dName]) {
      return medilinkAIDatabase.diseases[dName];
    }
    const lower = dName.toLowerCase();
    for (const key of Object.keys(medilinkAIDatabase.diseases)) {
      if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
        return medilinkAIDatabase.diseases[key];
      }
    }
  }
  if (dName && dName !== "None of the above") {
    return {
      prevention: `Maintain a tailored healthy regimen for ${dName}. Monitor active symptoms daily and maintain adequate hydration and sleep.`,
      primaryCare: `Log daily symptoms for ${dName}, adhere to non-pharmacological care routines, and avoid known environmental triggers.`,
      mediumCare: `Consult your primary physician regarding targeted therapeutics for ${dName} and perform routine baseline diagnostic checks.`,
      advancedCare: `Specialist intervention and diagnostic monitoring if ${dName} symptoms escalate or impair daily activities.`,
      doList: [
        `Keep a daily symptom log for ${dName}.`,
        "Maintain balanced nutrition and adequate hydration.",
        "Consult your physician before taking new over-the-counter drugs.",
        "Seek emergency medical services if severe acute symptoms arise."
      ],
      dontList: [
        "Do not ignore worsening or acute symptoms.",
        "Do not alter prescribed dosages without clinical advice.",
        "Do not delay seeking in-person clinical evaluation when needed."
      ],
      warningSigns: [
        `Severe sudden escalation of ${dName} symptoms.`,
        "Difficulty breathing, chest tightness, or severe dizziness.",
        "High persistent fever or severe unmanageable pain."
      ],
      specialist: "Clinical Specialist / General Physician",
      specialistReason: `Provides targeted diagnostic evaluation and clinical management for ${dName}.`
    };
  }
  return (medilinkAIDatabase && medilinkAIDatabase.diseases && medilinkAIDatabase.diseases["None of the above"]) || {};
}

function getAllergyData() {
  const aName = getUserAllergy();
  if (medilinkAIDatabase && medilinkAIDatabase.allergies) {
    if (medilinkAIDatabase.allergies[aName]) {
      return medilinkAIDatabase.allergies[aName];
    }
    const lower = aName.toLowerCase();
    for (const key of Object.keys(medilinkAIDatabase.allergies)) {
      if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
        return medilinkAIDatabase.allergies[key];
      }
    }
  }
  if (aName && aName !== "No Known Allergies") {
    return {
      trigger: aName,
      severity: "Moderate to High",
      crossReactivity: `Cross-reactivity may occur with compound analogs related to ${aName}.`,
      emergencyAction: `If exposed to ${aName} and experiencing swelling or difficulty breathing, use emergency epinephrine if prescribed and call 999 immediately.`
    };
  }
  return (medilinkAIDatabase && medilinkAIDatabase.allergies && medilinkAIDatabase.allergies["No Known Allergies"]) || {};
}

// Bind dynamic property getters to window scope
Object.defineProperty(window, "userProfile", { get: getUserProfile, configurable: true });
Object.defineProperty(window, "userName", { get: getUserName, configurable: true });
Object.defineProperty(window, "userDisease", { get: getUserDisease, configurable: true });
Object.defineProperty(window, "userAllergy", { get: getUserAllergy, configurable: true });
Object.defineProperty(window, "userBlood", { get: getUserBlood, configurable: true });
Object.defineProperty(window, "diseaseData", { get: getDiseaseData, configurable: true });
Object.defineProperty(window, "allergyData", { get: getAllergyData, configurable: true });

/* ==========================================
   2. DOM REFERENCES
   ========================================== */
const els = {
  greeting: document.getElementById("profileGreeting"),
  bloodBadge: document.getElementById("bloodBadge"),
  chatCanvas: document.getElementById("chatCanvas"),
  chipContainer: document.getElementById("chipContainer"),
  orbOverlay: document.getElementById("orbOverlay"),
  orbText: document.getElementById("orbText"),
  mainWorkspace: document.getElementById("mainWorkspace"),
  preventionPanel: document.getElementById("preventionPanel"),
  preventionContent: document.getElementById("preventionContent"),
  heroPanel: document.getElementById("heroPanel"),
  hero1Content: document.getElementById("hero1Content"),
  hero2Content: document.getElementById("hero2Content"),
  hero3Content: document.getElementById("hero3Content"),
};

/* ==========================================
   3. QUERY CHIP DEFINITIONS (100% English)
   ========================================== */
const CHIPS = [
  {
    label: "Primary Home-Care",
    question:
      "What primary home-care protocols should I follow for my condition?",
    type: "primaryCare",
  },
  {
    label: "Medium Care & Monitoring",
    question:
      "What clinical monitoring or medications are required (Medium Care)?",
    type: "mediumCare",
  },
  {
    label: "Critical Warning Signs",
    question:
      "What critical warning signs indicate I should immediately go to a hospital?",
    type: "warningSigns",
  },
  {
    label: "Daily DOs & DON'Ts",
    question: "What are the daily DOs and DONTs for managing my life?",
    type: "dosdonts",
  },
  {
    label: "Allergy Cross-Reactions",
    question:
      "What is my allergy severity and what cross-reactions must I avoid?",
    type: "allergyCross",
  },
  {
    label: "Emergency First-Aid",
    question:
      "What immediate first-aid protocol should I execute upon accidental exposure?",
    type: "allergyEmergency",
  },
];

/* ==========================================
   4. CHAT ENGINE
   ========================================== */
function getSelectedModel() {
  const select = document.getElementById("aiModelSelect");
  return select ? select.value : (localStorage.getItem("medilink_selected_model") || "med1-pro");
}

function getSelectedLanguage() {
  const select = document.getElementById("aiLanguageSelect");
  return select ? select.value : "English";
}

function addMessage(content, sender = "bot", modelName = null) {
  const div = document.createElement("div");
  div.className = `message ${sender} markdown-body`;
  if (typeof content === "string") {
    if (sender === "bot" && window.marked) {
      div.innerHTML = marked.parse(content);
    } else {
      div.textContent = content;
    }
  } else {
    div.appendChild(content);
  }

  // Attach interactive Copy, Text-to-Speech, and Model Badge for bot messages
  if (sender === "bot" && typeof content === "string") {
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "msg-actions";

    const currentModel = modelName || (getSelectedModel() === "med1-flash" ? "Med1 Flash" : "Med1 Pro");
    const isFlash = currentModel.toLowerCase().includes("flash");

    const badge = document.createElement("span");
    badge.className = `inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
      isFlash
        ? "bg-amber-100 text-amber-800 border border-amber-300"
        : "bg-teal-100 text-teal-800 border border-teal-300"
    }`;
    badge.innerHTML = isFlash ? "⚡ Med1 Flash" : "🧠 Med1 Pro";

    const copyBtn = document.createElement("button");
    copyBtn.className = "msg-action-btn btn-animate";
    copyBtn.innerHTML = `
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
      <span>Copy</span>
    `;
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(div.innerText.replace(/Copy|Listen|Copied!|Med1 Flash|Med1 Pro/g, "").trim());
      const label = copyBtn.querySelector("span");
      if (label) label.textContent = "Copied!";
      setTimeout(() => { if (label) label.textContent = "Copy"; }, 2000);
    };

    const speakBtn = document.createElement("button");
    speakBtn.className = "msg-action-btn btn-animate";
    speakBtn.innerHTML = `
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
      </svg>
      <span>Listen</span>
    `;
    speakBtn.onclick = () => {
      const targetLang = getSelectedLanguage();
      const rawText = (typeof content === "string" && content.trim()) ? content : div.innerText;
      speakCleanText(rawText, targetLang, speakBtn);
    };

    actionsDiv.appendChild(badge);
    actionsDiv.appendChild(copyBtn);
    actionsDiv.appendChild(speakBtn);
    div.appendChild(actionsDiv);
  }

  els.chatCanvas.appendChild(div);
  scrollToBottom();
  return div;
}

// ==========================================
// CRYSTAL-CLEAR NATURAL TEXT-TO-SPEECH ENGINE
// ==========================================

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

function cleanTextForSpeech(rawText) {
  if (!rawText) return "";
  let text = String(rawText);

  // Strip UI artifacts & model names
  text = text.replace(/Copy|Listen|Copied!|Speaking\.\.\.|Stop|Med1 Flash|Med1 Pro/gi, " ");

  // Strip markdown headers (###, ##, #)
  text = text.replace(/^#+\s+/gm, "");

  // Strip markdown table borders & dividers
  text = text.replace(/\|[\s-:]+\|/g, " ");
  text = text.replace(/\|/g, ". ");

  // Strip bold, italic, strikethrough, backticks
  text = text.replace(/(\*\*|__)(.*?)\1/g, "$2");
  text = text.replace(/(\*|_)(.*?)\1/g, "$2");
  text = text.replace(/~~(.*?)~~/g, "$1");
  text = text.replace(/`([^`]+)`/g, "$1");

  // Strip markdown links [label](url) -> label
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Strip bullet markers (*, -, +, numbered lists)
  text = text.replace(/^[\*\-\+]\s+/gm, "");
  text = text.replace(/^\d+\.\s+/gm, "");

  // Strip blockquote symbols
  text = text.replace(/^>\s+/gm, "");

  // Strip emojis & decorative symbols that cause TTS glitches
  text = text.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu, " ");

  // Replace clinical symbols with natural spoken words
  text = text.replace(/&/g, " and ");
  text = text.replace(/\+/g, " plus ");
  text = text.replace(/\//g, " or ");

  // Clean redundant whitespace & punctuation
  text = text.replace(/\s+/g, " ").replace(/\s*([,\.;:\?!])\s*/g, "$1 ").trim();

  return text;
}

function speakCleanText(rawText, langCode, buttonEl) {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported on this device/browser.");
    return;
  }

  // Toggle stop if already speaking
  if (window.speechSynthesis.speaking && buttonEl && buttonEl.dataset.speaking === "true") {
    window.speechSynthesis.cancel();
    resetSpeakBtn(buttonEl);
    return;
  }

  window.speechSynthesis.cancel();

  const textToSpeak = cleanTextForSpeech(rawText);
  if (!textToSpeak) return;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  // Map chosen language to BCP-47 language tag
  const langMap = {
    "Bangla": "bn-BD",
    "Spanish": "es-ES",
    "French": "fr-FR",
    "Arabic": "ar-SA",
    "English": "en-US"
  };

  const bcp47 = langMap[langCode] || "en-US";
  utterance.lang = bcp47;

  // Find the clearest matching voice
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const langPrefix = bcp47.split("-")[0];
    const matchingVoice = voices.find(v => v.lang === bcp47) ||
                          voices.find(v => v.lang.startsWith(langPrefix)) ||
                          voices.find(v => v.lang.startsWith("en"));
    if (matchingVoice) utterance.voice = matchingVoice;
  }

  // Optimized doctor pace & pitch for maximum clarity
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  if (buttonEl) {
    buttonEl.dataset.speaking = "true";
    buttonEl.classList.add("bg-teal-600", "text-white");
    const span = buttonEl.querySelector("span");
    if (span) span.textContent = "Stop";
  }

  utterance.onend = () => {
    resetSpeakBtn(buttonEl);
  };

  utterance.onerror = (e) => {
    console.warn("SpeechSynthesis error:", e);
    resetSpeakBtn(buttonEl);
  };

  // Chrome resume bug fix
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  window.speechSynthesis.speak(utterance);
}

function resetSpeakBtn(buttonEl) {
  if (!buttonEl) return;
  buttonEl.dataset.speaking = "false";
  buttonEl.classList.remove("bg-teal-600", "text-white");
  const span = buttonEl.querySelector("span");
  if (span) span.textContent = "Listen";
}

function scrollToBottom() {
  els.chatCanvas.scrollTo({
    top: els.chatCanvas.scrollHeight,
    behavior: "smooth",
  });
}

function showThinking() {
  const div = document.createElement("div");
  div.className = "message thinking";
  div.id = "thinkingMsg";
  div.innerHTML = `<span class="animate-pulse">🩺 Dr. MediLink is evaluating your question...</span>`;
  els.chatCanvas.appendChild(div);
  scrollToBottom();
  return div;
}

function removeThinking() {
  const t = document.getElementById("thinkingMsg");
  if (t) t.remove();
}

/* ==========================================
   6. MULTI-THREAD CHAT HISTORY ENGINE
   ========================================== */
let threads = {};
let activeThreadId = null;

function loadThreadsFromStorage() {
  try {
    const saved = localStorage.getItem("medilink_chat_threads");
    if (saved) threads = JSON.parse(saved);
    const activeId = localStorage.getItem("medilink_active_thread_id");
    if (activeId && threads[activeId]) {
      activeThreadId = activeId;
    }
  } catch (e) {
    console.warn("Failed to load threads from storage:", e);
  }

  if (!activeThreadId || !threads[activeThreadId]) {
    createNewThread("General Medical Consultation");
  }
}

function saveThreadsToStorage() {
  try {
    localStorage.setItem("medilink_chat_threads", JSON.stringify(threads));
    if (activeThreadId) {
      localStorage.setItem("medilink_active_thread_id", activeThreadId);
    }
  } catch (e) {
    console.warn("Failed to save threads to storage:", e);
  }
}

function createNewThread(customTitle = null) {
  const id = "thread_" + Date.now();
  const lang = getSelectedLanguage();
  const model = getSelectedModel();

  threads[id] = {
    id: id,
    title: customTitle || ("Consultation " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    language: lang,
    model: model,
    messages: [],
    createdAt: new Date().toISOString()
  };

  activeThreadId = id;
  saveThreadsToStorage();

  if (els.chatCanvas) els.chatCanvas.innerHTML = "";

  const langGreetings = {
    "Bangla": "🔄 নতুন বাংলা পরামর্শ শুরু হয়েছে। হ্যালো, আমি ড. মেডিলিংক — একজন নিরপেক্ষ ক্লিনিক্যাল চিকিৎসক। আপনার স্বাস্থ্য বিষয়ক যেকোনো প্রশ্ন বাংলায় জিজ্ঞাসা করুন।",
    "Spanish": "🔄 Nueva consulta en Español iniciada. Hola, soy el Dr. MediLink, su médico clínico. ¿En qué puedo ayudarle hoy?",
    "French": "🔄 Nouvelle consultation en Français démarrée. Bonjour, je suis le Dr. MediLink, votre médecin clinique. Comment puis-je vous aider?",
    "Arabic": "🔄 تم بدء استشارة جديدة باللغة العربية. مرحباً، أنا الدكتور ميديلينك، طبيبك السريري المحايد. كيف يمكنني مساعدتك اليوم؟",
    "English": "🔄 New consultation initialized. Hello, I am Dr. MediLink — a neutral clinical medical advisor. How can I assist you today?"
  };

  const greeting = langGreetings[lang] || langGreetings["English"];
  addMessage(greeting, "bot");

  renderThreadList();
  closeHistoryDrawer();
}

function switchThread(threadId) {
  if (!threads[threadId]) return;
  activeThreadId = threadId;
  saveThreadsToStorage();

  const thread = threads[threadId];

  const langSelect = document.getElementById("aiLanguageSelect");
  const modelSelect = document.getElementById("aiModelSelect");
  if (langSelect && thread.language) langSelect.value = thread.language;
  if (modelSelect && thread.model) modelSelect.value = thread.model;

  if (els.chatCanvas) els.chatCanvas.innerHTML = "";

  if (!thread.messages || thread.messages.length === 0) {
    addMessage(
      `Hello, I am Dr. MediLink. I am ready to evaluate your health questions strictly in ${thread.language || 'English'}. How can I assist you today?`,
      "bot"
    );
  } else {
    thread.messages.forEach((msg) => {
      addMessage(msg.content, msg.role === "user" ? "user" : "bot", msg.modelUsed);
    });
  }

  renderThreadList();
  closeHistoryDrawer();
}

function deleteThread(threadId, event) {
  if (event) event.stopPropagation();
  delete threads[threadId];

  const threadIds = Object.keys(threads);
  if (threadIds.length === 0) {
    createNewThread();
  } else {
    switchThread(threadIds[threadIds.length - 1]);
  }
}

function getActiveThreadMessages() {
  if (activeThreadId && threads[activeThreadId] && Array.isArray(threads[activeThreadId].messages)) {
    return threads[activeThreadId].messages;
  }
  return [];
}

function recordMessageToActiveThread(role, content, modelUsed = null) {
  if (!activeThreadId || !threads[activeThreadId]) {
    createNewThread();
  }
  const thread = threads[activeThreadId];
  thread.messages.push({ role, content, modelUsed, time: new Date().toISOString() });

  if (role === "user" && thread.messages.length <= 2) {
    thread.title = content.length > 26 ? content.substring(0, 26) + "..." : content;
  }

  saveThreadsToStorage();
  renderThreadList();
}

function renderThreadList() {
  const container = document.getElementById("threadListContainer");
  if (!container) return;
  container.innerHTML = "";

  const threadIds = Object.keys(threads).sort((a, b) => threads[b].createdAt.localeCompare(threads[a].createdAt));

  threadIds.forEach((id) => {
    const thread = threads[id];
    const isActive = id === activeThreadId;

    const item = document.createElement("div");
    item.className = `thread-item ${isActive ? 'active' : ''} flex items-center justify-between gap-2 btn-animate`;
    item.onclick = () => switchThread(id);

    const timeStr = new Date(thread.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    item.innerHTML = `
      <div class="flex-1 min-w-0">
        <div class="font-heading font-bold text-xs truncate ${isActive ? 'text-white' : 'text-slate-800'}">${thread.title}</div>
        <div class="text-[10px] thread-time mt-0.5 ${isActive ? 'text-teal-100' : 'text-slate-500'} flex items-center gap-1.5">
          <span>${timeStr}</span>
          <span class="px-1.5 py-0.2 rounded bg-black/10 text-[9px] uppercase font-mono font-bold">${thread.language || 'EN'}</span>
        </div>
      </div>
      <button class="delete-thread-btn p-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-colors ${isActive ? 'text-white/80' : 'text-slate-400'}" title="Delete Thread">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    `;

    const delBtn = item.querySelector(".delete-thread-btn");
    delBtn.onclick = (e) => deleteThread(id, e);

    container.appendChild(item);
  });
}

function openHistoryDrawer() {
  const drawer = document.getElementById("historyDrawer");
  const backdrop = document.getElementById("historyBackdrop");
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
  renderThreadList();
}

function closeHistoryDrawer() {
  const drawer = document.getElementById("historyDrawer");
  const backdrop = document.getElementById("historyBackdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

/* ==========================================
   5. ANSWER RESOLVERS
   ========================================== */
function getAnswer(type) {
  switch (type) {
    case "primaryCare":
      return diseaseData.primaryCare || "No primary care data available.";

    case "mediumCare":
      return diseaseData.mediumCare || "No medium care data available.";

    case "warningSigns": {
      const items = diseaseData.warningSigns || [];
      if (!items.length) return "No warning signs documented.";
      const ul = document.createElement("ul");
      ul.className = "clean-list red";
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      return ul;
    }

    case "dosdonts": {
      const container = document.createElement("div");
      container.className = "grid grid-cols-1 md:grid-cols-2 gap-4 mt-1";

      const doList = diseaseData.doList || [];
      const dontList = diseaseData.dontList || [];

      const doCol = document.createElement("div");
      doCol.innerHTML = `<div class="font-heading text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">DOs</div>`;
      const doUl = document.createElement("ul");
      doUl.className = "clean-list";
      doList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        doUl.appendChild(li);
      });
      doCol.appendChild(doUl);

      const dontCol = document.createElement("div");
      dontCol.innerHTML = `<div class="font-heading text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">DON'Ts</div>`;
      const dontUl = document.createElement("ul");
      dontUl.className = "clean-list red";
      dontList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        dontUl.appendChild(li);
      });
      dontCol.appendChild(dontUl);

      container.appendChild(doCol);
      container.appendChild(dontCol);
      return container;
    }

    case "allergyCross":
      return (
        allergyData.crossReactivity || "No cross-reactivity data available."
      );

    case "allergyEmergency":
      return (
        allergyData.emergencyAction || "No emergency action data available."
      );

    default:
      return "I do not have an answer for that query.";
  }
}

/* ==========================================
   6. CHIP INTERACTION HANDLER & MEMORY
   ========================================== */
let chatHistory = [];

try {
  const savedHistory = localStorage.getItem("medilink_chat_history");
  if (savedHistory) {
    chatHistory = JSON.parse(savedHistory);
  }
} catch (e) {
  console.warn("Failed to load chat history:", e);
}

function saveChatHistory() {
  try {
    localStorage.setItem("medilink_chat_history", JSON.stringify(chatHistory.slice(-20)));
  } catch (e) {
    console.warn("Failed to save chat history:", e);
  }
}

async function handleChipClick(index) {
  const chip = CHIPS[index];
  if (!chip) return;

  // Show the user's question & record memory
  addMessage(chip.question, "user");
  chatHistory.push({ role: "user", content: chip.question });
  saveChatHistory();

  // Disable all chips while AI is responding
  if (els.chipContainer) {
    const allChips = els.chipContainer.querySelectorAll(".chip");
    allChips.forEach((c) => (c.disabled = true));
  }

  // Show thinking message
  showThinking();

  try {
    const payload = {
      question: chip.question,
      messages: chatHistory,
      model: getSelectedModel(),
      language: getSelectedLanguage(),
      userProfile: {
        name: getUserName(),
        fullName: getUserName(),
        age: getUserProfile().age,
        gender: getUserProfile().gender,
        disease: getUserDisease(),
        allergy: getUserAllergy()
      }
    };

    const data = await callMedicalAI(payload);

    removeThinking();

    // Show Groq's answer & record memory
    addMessage(data.answer, "bot", data.modelUsed);
    chatHistory.push({ role: "assistant", content: data.answer });
    saveChatHistory();

  } catch (error) {
    console.error("MediLink AI error:", error);

    removeThinking();

    addMessage(
      "Sorry, I couldn't connect to MediLink AI right now. Please try again in a moment.",
      "bot"
    );
  } finally {
    // Re-enable the buttons
    if (els.chipContainer) {
      const allChips = els.chipContainer.querySelectorAll(".chip");
      allChips.forEach((c) => (c.disabled = false));
    }
  }
}

function renderChips(locked = true) {
  if (!els.chipContainer) return;
  els.chipContainer.innerHTML = "";
  CHIPS.forEach((chip, idx) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = chip.label;
    btn.disabled = locked;
    btn.onclick = () => handleChipClick(idx);
    els.chipContainer.appendChild(btn);
  });
}

/* ==========================================
   7. RIGHT PANEL — HERO COMPONENT RENDERERS
   ========================================== */

// --- Phase 1: Prevention Guidelines ---
function renderPrevention() {
  els.preventionContent.textContent =
    diseaseData.prevention ||
    "Maintain a healthy lifestyle and consult your physician regularly.";
}

// --- Hero 1: AI Specialist & Medication Recommendation ---
function renderHero1() {
  const container = document.createElement("div");

  // Specialist Block
  const specialist = document.createElement("div");
  specialist.className = "mb-4";
  specialist.innerHTML = `
    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Recommended Specialist</div>
    <div class="font-heading text-2xl font-bold text-slate-800">${diseaseData.specialist || "General Physician"}</div>
    <div class="text-sm text-slate-600 mt-1 leading-relaxed">${diseaseData.specialistReason || ""}</div>
  `;
  container.appendChild(specialist);

  // Active Clinical Medication Summary
  const medSummary = document.createElement("div");
  medSummary.className = "mt-4 pt-4 border-t border-slate-200";
  medSummary.innerHTML = `<div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Clinical Care Summary</div>`;

  const levels = [
    { label: "Primary", text: diseaseData.primaryCare, badge: "primary" },
    { label: "Medium", text: diseaseData.mediumCare, badge: "medium" },
    { label: "Advanced", text: diseaseData.advancedCare, badge: "advanced" },
  ];

  levels.forEach((lvl) => {
    if (!lvl.text) return;
    const row = document.createElement("div");
    row.className = "mb-3";
    row.innerHTML = `
      <span class="care-badge ${lvl.badge}">${lvl.label} Level</span>
      <div class="text-sm text-slate-700 mt-1 leading-relaxed">${lvl.text}</div>
    `;
    medSummary.appendChild(row);
  });

  container.appendChild(medSummary);

  // Elderly Patient Layer (Age > 60)
  if (
    userProfile.age > 60 &&
    diseaseData.ageNote &&
    diseaseData.ageNote.over60
  ) {
    const callout = document.createElement("div");
    callout.className = "age-callout";
    callout.innerHTML = `
      <div class="age-callout-icon">!</div>
      <div class="age-callout-text">
        <div class="font-bold text-amber-800 mb-1">Senior Patient Alert (Age ${userProfile.age})</div>
        ${diseaseData.ageNote.over60}
      </div>
    `;
    container.appendChild(callout);
  }

  els.hero1Content.innerHTML = "";
  els.hero1Content.appendChild(container);
}

// --- Hero 2: Multi-Level Medication & Care Matrix ---
function renderHero2() {
  const container = document.createElement("div");

  // Tab Navigation
  const tabList = document.createElement("div");
  tabList.className = "tab-list";

  const tabs = [
    {
      id: "tab-primary",
      label: "Primary Level",
      content: diseaseData.primaryCare,
    },
    {
      id: "tab-medium",
      label: "Medium Level",
      content: diseaseData.mediumCare,
    },
    {
      id: "tab-advanced",
      label: "Advanced Level",
      content: diseaseData.advancedCare,
    },
  ];

  const contents = document.createElement("div");

  tabs.forEach((tab, idx) => {
    // Tab Button
    const btn = document.createElement("button");
    btn.className = `tab-btn ${idx === 0 ? "active" : ""}`;
    btn.textContent = tab.label;
    btn.onclick = () => {
      tabList
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      contents
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      document.getElementById(tab.id).classList.add("active");
    };
    tabList.appendChild(btn);

    // Tab Content Pane
    const pane = document.createElement("div");
    pane.id = tab.id;
    pane.className = `tab-content ${idx === 0 ? "active" : ""}`;
    pane.innerHTML = `<div class="hero-text">${tab.content || "No data available for this care level."}</div>`;
    contents.appendChild(pane);
  });

  container.appendChild(tabList);
  container.appendChild(contents);

  els.hero2Content.innerHTML = "";
  els.hero2Content.appendChild(container);
}

// --- Hero 3: Critical Allergy Guard & SOS Protocol ---
function renderHero3() {
  const container = document.createElement("div");

  // Warning Signs List
  const signs = allergyData.warningSigns || [];
  if (signs.length) {
    const listTitle = document.createElement("div");
    listTitle.className =
      "text-xs font-bold text-red-800 uppercase tracking-wider mb-2";
    listTitle.textContent = "Allergy Warning Signs";
    container.appendChild(listTitle);

    const ul = document.createElement("ul");
    ul.className = "clean-list red";
    signs.forEach((sign) => {
      const li = document.createElement("li");
      li.textContent = sign;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Emergency Action Protocol
  if (allergyData.emergencyAction) {
    const actionDiv = document.createElement("div");
    actionDiv.className = "mt-4 pt-4 border-t border-red-200";
    actionDiv.innerHTML = `
      <div class="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">Immediate Emergency Action</div>
      <div class="text-sm text-red-900 font-medium leading-relaxed">${allergyData.emergencyAction}</div>
    `;
    container.appendChild(actionDiv);
  }

  // One-Click Emergency Redirect Button
  const btn = document.createElement("button");
  btn.className = "emergency-btn";
  btn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    Call Emergency Hospital / Ambulance
  `;
  btn.onclick = () => {
    const url = `emergency.html?blood=${encodeURIComponent(userProfile.blood)}&condition=allergic_shock`;
    window.location.href = url;
  };
  container.appendChild(btn);

  els.hero3Content.innerHTML = "";
  els.hero3Content.appendChild(container);
}

/* ==========================================
   8. TWO-PHASE TIMING ORCHESTRATION
   ========================================== */
const ORB_TEXTS = [
  "Scanning molecular contraindications...",
  "Analyzing patient metrics...",
  "Cross-referencing allergy matrices...",
  "Optimizing care pathways...",
  "Finalizing personalized recommendations...",
];

function checkUserRegistrationStatus() {
  const profile = loadUserProfile();
  const isRegistered = !!profile;
  const guestEmergencyPanel = document.getElementById("guestEmergencyPanel");
  const preventionPanel = document.getElementById("preventionPanel");
  const heroPanel = document.getElementById("heroPanel");

  if (!isRegistered) {
    if (preventionPanel) preventionPanel.classList.add("hidden");
    if (heroPanel) heroPanel.classList.add("hidden");
    if (guestEmergencyPanel) guestEmergencyPanel.classList.remove("hidden");
  } else {
    if (guestEmergencyPanel) guestEmergencyPanel.classList.add("hidden");
    if (preventionPanel) preventionPanel.classList.remove("hidden");
    if (heroPanel) heroPanel.classList.remove("hidden");
  }
  return isRegistered;
}

function startPhase1() {
  const isRegistered = checkUserRegistrationStatus();

  if (!isRegistered) {
    // Guest User Setup (registration is optional)
    els.orbOverlay.classList.add("hidden");
    els.mainWorkspace.classList.remove("phase-1");
    els.mainWorkspace.classList.add("phase-2");
    els.greeting.textContent = "Welcome, Guest User";
    els.bloodBadge.textContent = "Guest";

    addMessage(
      "Hello, I am Dr. MediLink, a neutral clinical medical advisor. I am here to provide objective medical guidance, symptom evaluations, and general health information. How can I assist you with your health today?",
      "bot",
    );
    renderChips(false);
    return;
  }

  // Registered User Setup
  const displayName = userName || "Patient";
  els.greeting.textContent = `Hello, ${displayName} (${userProfile.age || 'N/A'})`;
  els.bloodBadge.textContent = `${userProfile.gender || 'Patient'}`;

  // Initial Chat Greeting — include custom disease & allergy context
  const diseaseContext = userDisease && userDisease !== "None of the above" ? userDisease : "no specific pre-existing conditions";
  const allergyContext = userAllergy && userAllergy !== "No Known Allergies" ? userAllergy : "no known allergies";
  addMessage(
    `Hello ${displayName}, I am Dr. MediLink, your clinical health advisor. I have loaded your health profile: conditions noted — **${diseaseContext}**; allergies noted — **${allergyContext}**. Please wait while I load your personalized care matrix.`,
    "bot",
  );

  // Render Prevention Guidelines in Right Panel
  renderPrevention();

  // Fast 1.5 second transition to Phase 2
  setTimeout(() => {
    transitionToPhase2();
  }, 1500);
}

function transitionToPhase2() {
  // Hide the breathing orb with fade
  els.orbOverlay.classList.add("hidden");

  // Swap CSS phase classes on main workspace to trigger cubic-bezier morphs
  els.mainWorkspace.classList.remove("phase-1");
  els.mainWorkspace.classList.add("phase-2");

  // Render the 3 Hero Components
  renderHero1();
  renderHero2();
  renderHero3();

  // Unlock query chips for active interaction
  renderChips(false);

  // Notify user of advanced mode activation
  addMessage(
    "Analysis complete. Your personalized care dashboard is now active. You may select any topic below to consult with me.",
    "bot",
  );
}

/* ==========================================
   9. APPLICATION BOOT & ADVANCED ACTIONS
   ========================================== */
function clearChatHistory() {
  chatHistory = [];
  localStorage.removeItem("medilink_chat_history");
  if (els.chatCanvas) els.chatCanvas.innerHTML = "";
  addMessage(
    "🔄 New consultation thread initialized. Hello, I am Dr. MediLink, your neutral clinical medical advisor. How can I assist you today?",
    "bot"
  );
}

function downloadPDFSummary() {
  const messages = getActiveThreadMessages();
  const thread = activeThreadId && threads[activeThreadId];
  const title = thread ? thread.title : "MediLink Consultation";
  const lang = thread ? (thread.language || "English") : "English";

  let htmlContent = `<!DOCTYPE html><html><head>
  <meta charset="UTF-8"/>
  <title>MediLink — ${title}</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; margin: 40px; color: #1e293b; line-height: 1.6; }
    h1 { color: #0d9488; font-size: 22px; margin-bottom: 4px; }
    .meta { color: #64748b; font-size: 12px; margin-bottom: 24px; }
    .msg { margin-bottom: 16px; padding: 12px 16px; border-radius: 10px; }
    .msg.user { background: #f0fdf4; border-left: 4px solid #0d9488; }
    .msg.bot { background: #f8fafc; border-left: 4px solid #6366f1; }
    .msg-role { font-weight: bold; font-size: 11px; text-transform: uppercase; margin-bottom: 4px; color: #64748b; }
    .msg-content { font-size: 14px; white-space: pre-wrap; }
    .footer { margin-top: 32px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px; }
  </style>
  </head><body>
  <h1>🏥 MediLink AI — Clinical Consultation Summary</h1>
  <div class="meta">Thread: ${title} &nbsp;|&nbsp; Language: ${lang} &nbsp;|&nbsp; Date: ${new Date().toLocaleDateString()}</div>`;

  messages.forEach((msg) => {
    const role = msg.role === "user" ? "You (Patient)" : "Dr. MediLink AI";
    const cls = msg.role === "user" ? "user" : "bot";
    const content = (msg.content || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    htmlContent += `<div class="msg ${cls}"><div class="msg-role">${role}</div><div class="msg-content">${content}</div></div>`;
  });

  htmlContent += `<div class="footer">MediLink AI — This clinical summary is AI-generated and does not replace advice from a qualified medical doctor.</div></body></html>`;

  const printWin = window.open("", "_blank");
  if (printWin) {
    printWin.document.write(htmlContent);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => { printWin.print(); }, 600);
  }
}

function findNearbyHospitals() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const url = `https://www.google.com/maps/search/hospitals+near+me/@${pos.coords.latitude},${pos.coords.longitude},14z`;
        window.open(url, "_blank");
      },
      () => {
        window.open("https://www.google.com/maps/search/hospitals+near+me", "_blank");
      }
    );
  } else {
    window.open("https://www.google.com/maps/search/hospitals+near+me", "_blank");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Load conversation threads from storage
  loadThreadsFromStorage();

  // Ensure workspace starts in Phase 1 state
  els.mainWorkspace.classList.add("phase-1");
  startPhase1();

  // History Drawer Controls
  const btnHistoryToggle = document.getElementById("btnHistoryToggle");
  const btnCloseHistory = document.getElementById("btnCloseHistory");
  const historyBackdrop = document.getElementById("historyBackdrop");
  const btnDrawerNewChat = document.getElementById("btnDrawerNewChat");

  if (btnHistoryToggle) btnHistoryToggle.addEventListener("click", openHistoryDrawer);
  if (btnCloseHistory) btnCloseHistory.addEventListener("click", closeHistoryDrawer);
  if (historyBackdrop) historyBackdrop.addEventListener("click", closeHistoryDrawer);
  if (btnDrawerNewChat) btnDrawerNewChat.addEventListener("click", () => createNewThread());

  // Language Selection Listener
  const aiLanguageSelect = document.getElementById("aiLanguageSelect");
  if (aiLanguageSelect) {
    aiLanguageSelect.addEventListener("change", (e) => {
      if (activeThreadId && threads[activeThreadId]) {
        threads[activeThreadId].language = e.target.value;
        saveThreadsToStorage();
        renderThreadList();
      }
    });
  }

  // Model Selection Listener
  const aiModelSelect = document.getElementById("aiModelSelect");
  if (aiModelSelect) {
    const savedModel = localStorage.getItem("medilink_selected_model");
    if (savedModel) aiModelSelect.value = savedModel;

    aiModelSelect.addEventListener("change", (e) => {
      localStorage.setItem("medilink_selected_model", e.target.value);
      if (activeThreadId && threads[activeThreadId]) {
        threads[activeThreadId].model = e.target.value;
        saveThreadsToStorage();
      }
    });
  }

  // Action Buttons
  const btnNewConsultation = document.getElementById("btnNewConsultation");
  const btnPDFDownload = document.getElementById("btnPDFDownload");
  const btnFloatingPDF = document.getElementById("btnFloatingPDF");
  const btnNearbyER = document.getElementById("btnNearbyER");
  const aiImageInput = document.getElementById("aiImageInput");

  if (btnNewConsultation) btnNewConsultation.addEventListener("click", () => createNewThread());
  if (btnPDFDownload) btnPDFDownload.addEventListener("click", downloadPDFSummary);
  if (btnFloatingPDF) btnFloatingPDF.addEventListener("click", downloadPDFSummary);
  if (btnNearbyER) btnNearbyER.addEventListener("click", findNearbyHospitals);

  if (aiImageInput) {
    aiImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        addMessage(`📷 Attachment uploaded: ${file.name}. Dr. MediLink is scanning document text...`, "user");
        recordMessageToActiveThread("user", `📷 Attachment uploaded: ${file.name}`);
        addMessage(`📋 **Prescription / Document Scanner Preview:** Document "${file.name}" received. Dr. MediLink will cross-reference this report with your active health record.`, "bot");
        recordMessageToActiveThread("assistant", `📋 Prescription / Document Scanner Preview: Document "${file.name}" received.`);
      }
    });
  }

  // Mobile responsive toggle & segmented switcher logic
  const btnShowMore = document.getElementById("btnShowMore");
  const btnBackToChat = document.getElementById("btnBackToChat");
  const mobileTabChat = document.getElementById("mobileTabChat");
  const mobileTabMatrix = document.getElementById("mobileTabMatrix");

  function switchToMobileChat() {
    if (els.mainWorkspace) els.mainWorkspace.classList.remove("show-details");
    if (mobileTabChat) {
      mobileTabChat.className = "flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold font-heading transition-all duration-200 bg-white text-teal-800 shadow-sm flex items-center justify-center gap-1";
    }
    if (mobileTabMatrix) {
      mobileTabMatrix.className = "flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold font-heading transition-all duration-200 text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1";
    }
  }

  function switchToMobileMatrix() {
    if (els.mainWorkspace) els.mainWorkspace.classList.add("show-details");
    if (mobileTabMatrix) {
      mobileTabMatrix.className = "flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold font-heading transition-all duration-200 bg-white text-teal-800 shadow-sm flex items-center justify-center gap-1";
    }
    if (mobileTabChat) {
      mobileTabChat.className = "flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold font-heading transition-all duration-200 text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1";
    }
  }

  if (btnShowMore) btnShowMore.addEventListener("click", switchToMobileMatrix);
  if (btnBackToChat) btnBackToChat.addEventListener("click", switchToMobileChat);
  if (mobileTabChat) mobileTabChat.addEventListener("click", switchToMobileChat);
  if (mobileTabMatrix) mobileTabMatrix.addEventListener("click", switchToMobileMatrix);
});

// ==========================================
// DIRECT AI CHAT — GROQ VIA RENDER WITH MULTI-THREAD MEMORY & STRICT LANGUAGE
// ==========================================

const aiQuestionInput = document.getElementById("aiQuestionInput");
const aiSendButton = document.getElementById("aiSendButton");

async function callMedicalAI(payload) {
  const endpoints = [];
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.protocol === "file:") {
    endpoints.push("http://localhost:3000/api/medical-ai");
    endpoints.push("http://localhost:5000/api/medical-ai");
  }
  endpoints.push("https://medilink-ai-v1.onrender.com/api/medical-ai");

  let lastError = null;
  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) return await res.json();
      const errData = await res.json().catch(() => ({}));
      lastError = errData.error || `Server returned status ${res.status}`;
    } catch (e) {
      lastError = e.message;
    }
  }
  throw new Error(lastError || "Could not connect to MediLink AI server.");
}

async function sendAIQuestion() {
  const question = aiQuestionInput.value.trim();

  if (!question) return;

  const targetLang = getSelectedLanguage();
  const targetModel = getSelectedModel();

  // Render & record user message in active thread
  addMessage(question, "user");
  recordMessageToActiveThread("user", question);

  aiQuestionInput.value = "";
  aiSendButton.disabled = true;
  aiSendButton.textContent = "Thinking...";

  showThinking();

  try {
    const payload = {
      question: question,
      messages: getActiveThreadMessages(),
      model: targetModel,
      language: targetLang,
      userProfile: {
        name: getUserName(),
        fullName: getUserName(),
        age: getUserProfile().age,
        gender: getUserProfile().gender,
        disease: getUserDisease(),
        allergy: getUserAllergy()
      }
    };

    const data = await callMedicalAI(payload);

    removeThinking();

    // Render & record assistant response memory
    addMessage(data.answer, "bot", data.modelUsed);
    recordMessageToActiveThread("assistant", data.answer, data.modelUsed);

  } catch (error) {
    console.error("AI connection error:", error);

    removeThinking();

    addMessage(
      error.message || "Sorry, I could not connect to MediLink AI. Please try again.",
      "bot"
    );

  } finally {
    aiSendButton.disabled = false;
    aiSendButton.textContent = "Send";
  }
}

aiSendButton.addEventListener("click", sendAIQuestion);

aiQuestionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendAIQuestion();
  }
});
