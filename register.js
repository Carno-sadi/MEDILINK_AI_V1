// registation page js code start
/* ═══════════════════════════════════════════════
   MEDILINK AI — ONBOARDING APP
   Vanilla JS | Zero Dependencies
   ═══════════════════════════════════════════════ */

// ── 1. State ──
const userData = {
  step: 1,
  fullName: "",
  age: null,
  gender: "",
  bloodGroup: "",
  conditions: [],
  allergies: [],
  primaryGoal: "",
};

// ── 2. Data Definitions ──
const GENDERS = ["Male", "Female", "Prefer not to say"];
const BLOOD_GROUPS = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

const DISEASES = [
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Migraine",
  "Thyroid Disorder",
  "Arthritis",
  "Heart Disease",
  "Kidney Disease",
  "Liver Disease",
  "Epilepsy",
  "Depression",
  "Anxiety Disorder",
  "PCOS",
  "Anemia",
  "Obesity",
  "Sleep Apnea",
  "Osteoporosis",
  "Gastric Ulcer",
  "Chronic Back Pain",
  "Eczema",
  "COPD",
  "Cancer",
  "Stroke",
  "Alzheimer's",
  "Parkinson's",
  "Multiple Sclerosis",
  "Hepatitis B/C",
  "Tuberculosis",
  "Dengue",
  "Sickle Cell",
  "Lupus",
  "Psoriasis",
  "Celiac Disease",
  "Crohn's Disease",
  "Ulcerative Colitis",
  "IBS",
  "Gout",
  "Fibromyalgia",
  "Chronic Fatigue",
  "HIV/AIDS",
  "Malaria",
  "COVID Long",
  "Rheumatoid Arthritis",
  "Hepatitis A",
  "Pneumonia",
];

const ALLERGIES = [
  "Penicillin",
  "Amoxicillin",
  "Aspirin",
  "Ibuprofen",
  "Paracetamol",
  "Sulfa Drugs",
  "Codeine",
  "Tetracycline",
  "Ciprofloxacin",
  "Metronidazole",
  "Peanuts",
  "Tree Nuts",
  "Dairy / Lactose",
  "Gluten / Wheat",
  "Eggs",
  "Shellfish",
  "Seafood / Fish",
  "Soy",
  "Sesame",
  "Latex",
  "Bee / Insect",
  "Dust Mites",
  "Pollen",
  "Animal Dander",
  "Mold",
];

// ── 3. DOM References ──
const dom = {
  btnBack: document.getElementById("btnBack"),
  btnSkip: document.getElementById("btnSkip"),
  btnNext: document.getElementById("btnNext"),
  progressFill: document.getElementById("progressFill"),
  stepNum: document.getElementById("stepNum"),
  completionOverlay: document.getElementById("completionOverlay"),
  formCard: document.querySelector(".form-card"),
  rightPanel: document.querySelector(".right-panel"),
};

// ── 4. Initialization ──
function init() {
  // Render gender chips
  renderChips("genderChips", GENDERS, "gender", false);

  // Setup interactive elements
  setupGoalCards();
  setupInputListeners();
  setupNavigation();

  // Reveal initial content
  revealAllInitialContent();

  // Sync UI to step 1
  updateUI();
}

// ── 5. Reveal Animation Engine ──
function revealAllInitialContent() {
  // Reveal left panel elements
  document.querySelectorAll(".left-panel .reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("is-visible"), 100 + i * 100);
  });

  // Reveal form card shell
  setTimeout(() => dom.formCard.classList.add("is-visible"), 200);

  // Reveal active step content (Step 1)
  const activeStep = document.querySelector(".form-step.is-active");
  if (activeStep) {
    activeStep.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), 250 + i * 80);
    });
  }
}

function revealStepContent(stepNumber) {
  const step = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
  if (!step) return;

  step.querySelectorAll(".reveal").forEach((el, i) => {
    // Reset first so animation plays
    el.classList.remove("is-visible");
    // Force reflow
    void el.offsetWidth;
    // Add visible with stagger
    setTimeout(() => el.classList.add("is-visible"), 50 + i * 70);
  });
}

// ── 6. Reusable Chip Renderer ──
function renderChips(containerId, items, dataKey, multiSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  items.forEach((item) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = item;
    chip.dataset.value = item;

    if (item === "None of the above" || item === "No Known Allergies") {
      chip.dataset.exclusive = "true";
    }

    chip.addEventListener("click", () => {
      handleChipClick(chip, container, dataKey, multiSelect);
    });

    container.appendChild(chip);
  });
}

// ── 7. Chip Interaction Handler ──
function handleChipClick(chip, container, dataKey, multiSelect) {
  const isExclusive = chip.dataset.exclusive === "true";
  const allChips = container.querySelectorAll(".chip");

  if (isExclusive) {
    // Exclusive chip: deselect all others, select this one
    allChips.forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");

    // NKA container styling for allergies
    if (chip.textContent === "No Known Allergies") {
      container.classList.toggle(
        "has-nka",
        chip.classList.contains("is-active"),
      );
    }

    userData[dataKey] = [chip.dataset.value];
  } else {
    // Normal chip: blocked if NKA is active
    if (container.classList.contains("has-nka")) return;

    if (!multiSelect) {
      // Single-select: clear all, select target
      allChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      userData[dataKey] = chip.dataset.value;
    } else {
      // Multi-select: deselect "None of the above" if present
      const noneChip = Array.from(allChips).find(
        (c) =>
          c.dataset.exclusive === "true" &&
          c.textContent === "None of the above",
      );
      if (noneChip && noneChip.classList.contains("is-active")) {
        noneChip.classList.remove("is-active");
      }

      chip.classList.toggle("is-active");

      const selected = Array.from(allChips)
        .filter((c) => c.classList.contains("is-active"))
        .map((c) => c.dataset.value);
      userData[dataKey] = selected;
    }
  }

  clearError(dataKey);
}

// ── 8. No Known Allergies (NKA) Special Handler ──
function setupNKAChip() {
  const nkaChip = document.querySelector(".chip-nka");
  const allergiesContainer = document.getElementById("allergiesChips");
  if (!nkaChip || !allergiesContainer) return;

  nkaChip.addEventListener("click", () => {
    const allChips = allergiesContainer.querySelectorAll(".chip");

    if (nkaChip.classList.contains("is-active")) {
      // Deactivate NKA
      nkaChip.classList.remove("is-active");
      allergiesContainer.classList.remove("has-nka");
      userData.allergies = [];
    } else {
      // Activate NKA: clear all allergies, select NKA
      nkaChip.classList.add("is-active");
      allergiesContainer.classList.add("has-nka");
      allChips.forEach((c) => c.classList.remove("is-active"));
      userData.allergies = ["No Known Allergies"];
    }

    clearError("allergies");
  });
}

// ── 9. Goal Cards Setup ──
function setupGoalCards() {
  const container = document.getElementById("goalCards");
  if (!container) return;

  const cards = container.querySelectorAll(".goal-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("is-active"));
      card.classList.add("is-active");
      userData.primaryGoal = card.dataset.value;
      clearError("primaryGoal");
    });
  });
}

// // ── 10. Input Listeners & AI Real-Time Insight Preview ──
function setupInputListeners() {
  const fullName = document.getElementById("fullName");
  const age = document.getElementById("age");
  const customDisease = document.getElementById("customDisease");
  const customAllergy = document.getElementById("customAllergy");

  if (fullName) {
    fullName.addEventListener("input", () => {
      fullName.classList.toggle("is-filled", fullName.value.length > 0);
      userData.fullName = fullName.value.trim();
      if (fullName.value.trim()) clearError("fullName");
    });
  }

  if (age) {
    age.addEventListener("input", () => {
      age.classList.toggle("is-filled", age.value.length > 0);
      userData.age = age.value ? parseInt(age.value) : null;
      if (age.value) clearError("age");
    });
  }

  if (customDisease) {
    customDisease.addEventListener("input", () => {
      const val = customDisease.value.trim() || "None";
      userData.conditions = [val];
      userData.disease = val;
      clearError("conditions");
      updateAIInsight();
    });
  }

  if (customAllergy) {
    customAllergy.addEventListener("input", () => {
      const val = customAllergy.value.trim() || "None";
      userData.allergies = [val];
      userData.allergy = val;
      clearError("allergies");
      updateAIInsight();
    });
  }
}

function updateAIInsight() {
  const box = document.getElementById("aiInsightBox");
  const text = document.getElementById("aiInsightText");
  if (!box || !text) return;

  const d = userData.disease || "";
  const a = userData.allergy || "";

  if (d || a) {
    box.classList.remove("hidden");
    let msg = "Dr. MediLink AI Insight: ";
    if (d && d !== "None") msg += `Analyzing condition "${d}". Tailoring care recommendations. `;
    if (a && a !== "None") msg += `Allergy shield active for "${a}" (contraindications will be checked).`;
    text.textContent = msg;
  } else {
    box.classList.add("hidden");
  }
}

// ── 11. Navigation ──
function setupNavigation() {
  dom.btnBack.addEventListener("click", () => {
    if (userData.step > 1) {
      goToStep(userData.step - 1);
    }
  });

  dom.btnNext.addEventListener("click", () => {
    if (validateStep(userData.step)) {
      if (userData.step < 3) {
        goToStep(userData.step + 1);
      } else {
        finishOnboarding();
      }
    }
  });
}

// ── 12. Step Transition Engine ──
function goToStep(targetStep) {
  const direction = targetStep > userData.step ? "forward" : "back";
  const currentEl = document.querySelector(
    `.form-step[data-step="${userData.step}"]`,
  );
  const targetEl = document.querySelector(
    `.form-step[data-step="${targetStep}"]`,
  );

  if (!currentEl || !targetEl) return;

  // Exit animation
  const exitClass = direction === "forward" ? "is-exit" : "is-exit-back";
  currentEl.classList.add(exitClass);

  setTimeout(() => {
    currentEl.classList.remove("is-active", exitClass);

    // Enter animation
    const enterClass = direction === "forward" ? "is-enter" : "is-enter-back";
    targetEl.classList.add(enterClass);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        targetEl.classList.add("is-enter-active");
      });
    });

    setTimeout(() => {
      targetEl.classList.remove(enterClass, "is-enter-active");
      targetEl.classList.add("is-active");

      // Reveal new step content with stagger
      revealStepContent(targetStep);
    }, 550);
  }, 450);

  userData.step = targetStep;

  // Scroll right panel to top
  if (dom.rightPanel) {
    dom.rightPanel.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateUI();
}

// ── 13. Validation ──
function validateStep(step) {
  let isValid = true;

  if (step === 1) {
    const nameEl = document.getElementById("fullName");
    const ageEl = document.getElementById("age");
    const name = nameEl ? nameEl.value.trim() : "";
    const age = ageEl ? parseInt(ageEl.value) : NaN;

    if (!name) {
      showError("fullName", "Full name is required");
      isValid = false;
    } else if (name.length < 2) {
      showError("fullName", "Must be at least 2 characters");
      isValid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
      showError("fullName", "Please use letters only");
      isValid = false;
    } else {
      clearError("fullName");
      userData.fullName = name;
    }

    if (!ageEl || !ageEl.value) {
      showError("age", "Age is required");
      isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
      showError("age", "Please enter a valid age between 1 and 120");
      isValid = false;
    } else {
      clearError("age");
      userData.age = age;
    }

    if (!userData.gender) {
      showError("gender", "Please select your gender");
      isValid = false;
    } else {
      clearError("gender");
    }
  }

  if (step === 2) {
    const customDisease = document.getElementById("customDisease");
    const val = customDisease ? customDisease.value.trim() : "";
    userData.conditions = [val || "None"];
    userData.disease = val || "None";
    clearError("conditions");
  }

  if (step === 3) {
    const customAllergy = document.getElementById("customAllergy");
    const val = customAllergy ? customAllergy.value.trim() : "";
    userData.allergies = [val || "None"];
    userData.allergy = val || "None";
    clearError("allergies");
  }

  return isValid;
}

// ── 14. Error UI ──
function showError(fieldId, message) {
  const errorEl = document.getElementById(`error-${fieldId}`);
  const fieldEl =
    document.getElementById(fieldId) ||
    document.querySelector(`[data-key="${fieldId}"]`);

  if (errorEl) errorEl.textContent = message;
  if (fieldEl) fieldEl.classList.add("has-error");
}

function clearError(fieldId) {
  const errorEl = document.getElementById(`error-${fieldId}`);
  const fieldEl =
    document.getElementById(fieldId) ||
    document.querySelector(`[data-key="${fieldId}"]`);

  if (errorEl) errorEl.textContent = "";
  if (fieldEl) fieldEl.classList.remove("has-error");
}

// ── 15. UI Sync ──
function updateUI() {
  updateStepIndicator(userData.step);
  animateProgressBar(userData.step);
  updateButtons(userData.step);
  if (dom.stepNum) dom.stepNum.textContent = userData.step;
}

function updateStepIndicator(currentStep) {
  const items = document.querySelectorAll(".step-item");
  items.forEach((item) => {
    const step = parseInt(item.dataset.step);
    if (step < currentStep) {
      item.dataset.state = "done";
    } else if (step === currentStep) {
      item.dataset.state = "active";
    } else {
      item.dataset.state = "idle";
    }
  });
}

function animateProgressBar(step) {
  if (dom.progressFill) {
    const width = (step / 3) * 100;
    dom.progressFill.style.width = `${width}%`;
  }
}

function updateButtons(step) {
  if (dom.btnBack) {
    dom.btnBack.style.visibility = step === 1 ? "hidden" : "visible";
  }

  if (step === 3) {
    if (dom.btnNext) dom.btnNext.textContent = "Finish & Start AI Advisor";
  } else {
    if (dom.btnNext) dom.btnNext.textContent = "Next";
  }
}

// ── 16. Completion Flow ──
function finishOnboarding() {
  saveToLocalStorage();

  if (!localStorage.getItem('medilink_user_plan')) {
    localStorage.setItem('medilink_user_plan', 'basic');
  }

  if (dom.formCard) dom.formCard.classList.add("is-complete");
  if (dom.completionOverlay) dom.completionOverlay.classList.add("is-visible");

  setTimeout(() => {
    window.location.href = "ai.html";
  }, 1200);
}

function saveToLocalStorage() {
  const profile = {
    name: userData.fullName || "Patient",
    fullName: userData.fullName || "Patient",
    age: userData.age || 30,
    gender: userData.gender || "Not specified",
    disease: userData.disease || (userData.conditions && userData.conditions[0]) || "None",
    conditions: [userData.disease || "None"],
    allergy: userData.allergy || (userData.allergies && userData.allergies[0]) || "None",
    allergies: [userData.allergy || "None"],
    registeredAt: new Date().toISOString()
  };
  localStorage.setItem("medilink_user_profile", JSON.stringify(profile));
}

// ── 17. Boot ──
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
// registation page js code end
