// ==== INVENTORY DEFINITIONS ====

const INVENTORIES = {
  phq9: {
    id: "phq9",
    name: "PHQ-9",
    maxTotal: 27,
    severityThresholds: [0, 5, 10, 15, 20, 27],
    type: "simple_sum",
    questions: [
      {
        id: "phq9_q1",
        text: "Little interest or pleasure in doing things",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q2",
        text: "Feeling down, depressed, or hopeless",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q3",
        text: "Trouble falling or staying asleep, or sleeping too much",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q4",
        text: "Feeling tired or having little energy",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q5",
        text: "Poor appetite or overeating",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q6",
        text:
          "Feeling bad about yourself or like you are a failure or have let yourself or your family down",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q7",
        text: "Trouble concentrating (reading, TV, etc.)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q8",
        text:
          "Moving or speaking noticeably slower than usual, or feeling very restless and fidgety",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "phq9_q9",
        text: "Thoughts you would be better off dead or of self-harm",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
      },
    ],
  },

  madrs: {
    id: "madrs",
    name: "MADRS",
    maxTotal: 60,
    severityThresholds: [0, 7, 20, 35, 60],
    type: "simple_sum",
    questions: [
      {
        id: "madrs_q1",
        text: "Apparent sadness (how much you look visibly low/flat)",
        options: [
          { label: "0 – none", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – mild", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – clearly present", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – very marked", value: 6 },
        ],
      },
      {
        id: "madrs_q2",
        text: "Reported sadness (how depressed you feel inside)",
        options: [
          { label: "0 – mood basically OK", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – some low mood", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – low most of the time", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – constant misery", value: 6 },
        ],
      },
      {
        id: "madrs_q3",
        text: "Inner tension (nervous, on edge, inner agitation)",
        options: [
          { label: "0 – calm", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – occasional tension", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – persistent tension/panic", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – overwhelming dread/panic", value: 6 },
        ],
      },
      {
        id: "madrs_q4",
        text: "Sleep reduction compared with your usual",
        options: [
          { label: "0 – sleep as usual", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – slightly reduced/light", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – cut by ≥2 hours", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – only a couple of hours or less", value: 6 },
        ],
      },
      {
        id: "madrs_q5",
        text: "Appetite reduction compared with your usual",
        options: [
          { label: "0 – normal or increased", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – slightly reduced", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – no appetite, food tasteless", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – needs persuasion to eat", value: 6 },
        ],
      },
      {
        id: "madrs_q6",
        text: "Concentration difficulties",
        options: [
          { label: "0 – none", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – occasional", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – clear problems reading/talking", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – almost unable to focus", value: 6 },
        ],
      },
      {
        id: "madrs_q7",
        text: "Lassitude (difficulty getting started, low drive)",
        options: [
          { label: "0 – basically normal", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – somewhat harder to start", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – routine tasks need major effort", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – cannot do anything without help", value: 6 },
        ],
      },
      {
        id: "madrs_q8",
        text: "Inability to feel interest or emotional connection",
        options: [
          { label: "0 – normal interest/emotions", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – reduced enjoyment", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – marked loss of interest/feeling", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – emotionally “numb” to everything", value: 6 },
        ],
      },
      {
        id: "madrs_q9",
        text: "Pessimistic thoughts (guilt, failure, ruin)",
        options: [
          { label: "0 – none", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – intermittent self-blame", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – persistent guilt/doom", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – fixed, extreme guilt/ruin ideas", value: 6 },
        ],
      },
      {
        id: "madrs_q10",
        text: "Suicidal thoughts",
        options: [
          { label: "0 – enjoys life or neutral", value: 0 },
          { label: "1", value: 1 },
          { label: "2 – weary of life, fleeting thoughts", value: 2 },
          { label: "3", value: 3 },
          { label: "4 – frequent suicidal thoughts", value: 4 },
          { label: "5", value: 5 },
          { label: "6 – clear plan/preparation", value: 6 },
        ],
      },
    ],
  },

  bdi2: {
    id: "bdi2",
    name: "BDI-II",
    maxTotal: 63,
    severityThresholds: [0, 14, 20, 29, 63],
    type: "simple_sum",
    questions: [
      {
        id: "bdi2_q1",
        text: "Sadness",
        options: [
          { label: "I do not feel sad", value: 0 },
          { label: "I feel sad much of the time", value: 1 },
          { label: "I am sad all the time", value: 2 },
          { label: "I am so sad I can hardly stand it", value: 3 },
        ],
      },
      {
        id: "bdi2_q2",
        text: "Pessimism about the future",
        options: [
          { label: "I am not discouraged", value: 0 },
          { label: "More discouraged than before", value: 1 },
          { label: "Don’t expect things to work out", value: 2 },
          { label: "Future feels hopeless", value: 3 },
        ],
      },
      {
        id: "bdi2_q3",
        text: "Sense of failure",
        options: [
          { label: "I do not feel like a failure", value: 0 },
          { label: "I’ve failed more than I should have", value: 1 },
          { label: "I see a lot of failures", value: 2 },
          { label: "I feel like a total failure", value: 3 },
        ],
      },
      {
        id: "bdi2_q4",
        text: "Loss of pleasure",
        options: [
          { label: "Enjoy things as usual", value: 0 },
          { label: "Enjoy things less", value: 1 },
          { label: "Very little pleasure", value: 2 },
          { label: "No pleasure at all", value: 3 },
        ],
      },
      {
        id: "bdi2_q5",
        text: "Guilty feelings",
        options: [
          { label: "No strong guilt", value: 0 },
          { label: "Guilty about a number of things", value: 1 },
          { label: "Quite guilty most of the time", value: 2 },
          { label: "Guilty all the time", value: 3 },
        ],
      },
      {
        id: "bdi2_q6",
        text: "Feeling punished",
        options: [
          { label: "Don’t feel punished", value: 0 },
          { label: "Might be punished", value: 1 },
          { label: "Expect to be punished", value: 2 },
          { label: "Feel I am being punished", value: 3 },
        ],
      },
      {
        id: "bdi2_q7",
        text: "Self-dislike",
        options: [
          { label: "Feel same about myself as ever", value: 0 },
          { label: "Less confidence in myself", value: 1 },
          { label: "Disappointed in myself", value: 2 },
          { label: "I dislike myself", value: 3 },
        ],
      },
      {
        id: "bdi2_q8",
        text: "Self-criticalness",
        options: [
          { label: "Not more critical than usual", value: 0 },
          { label: "More self-critical than before", value: 1 },
          { label: "Blame myself for many problems", value: 2 },
          { label: "Blame myself for everything", value: 3 },
        ],
      },
      {
        id: "bdi2_q9",
        text: "Suicidal thoughts / wishes",
        options: [
          { label: "No thoughts of killing myself", value: 0 },
          { label: "Thoughts but would not act", value: 1 },
          { label: "Would like to kill myself", value: 2 },
          { label: "Would kill myself if I could", value: 3 },
        ],
      },
      {
        id: "bdi2_q10",
        text: "Crying",
        options: [
          { label: "No more than usual", value: 0 },
          { label: "Cry more than before", value: 1 },
          { label: "Cry over many things", value: 2 },
          { label: "Want to cry but can’t", value: 3 },
        ],
      },
      {
        id: "bdi2_q11",
        text: "Agitation / restlessness",
        options: [
          { label: "No more restless than usual", value: 0 },
          { label: "More restless than usual", value: 1 },
          { label: "Hard to stay still", value: 2 },
          { label: "Must keep moving or doing something", value: 3 },
        ],
      },
      {
        id: "bdi2_q12",
        text: "Loss of interest",
        options: [
          { label: "Interest in people/activities unchanged", value: 0 },
          { label: "Less interested than before", value: 1 },
          { label: "Lost most interest", value: 2 },
          { label: "Hard to get interested in anything", value: 3 },
        ],
      },
      {
        id: "bdi2_q13",
        text: "Indecisiveness",
        options: [
          { label: "Decide as well as ever", value: 0 },
          { label: "More difficult than usual", value: 1 },
          { label: "Much greater difficulty", value: 2 },
          { label: "Can hardly decide anything", value: 3 },
        ],
      },
      {
        id: "bdi2_q14",
        text: "Worthlessness",
        options: [
          { label: "Do not feel worthless", value: 0 },
          { label: "Feel less worthwhile/useful", value: 1 },
          { label: "Feel more worthless than others", value: 2 },
          { label: "Feel utterly worthless", value: 3 },
        ],
      },
      {
        id: "bdi2_q15",
        text: "Loss of energy",
        options: [
          { label: "Energy as usual", value: 0 },
          { label: "Less energy than before", value: 1 },
          { label: "Not enough energy for much", value: 2 },
          { label: "No energy for anything", value: 3 },
        ],
      },
      {
        id: "bdi2_q16",
        text: "Changes in sleep pattern",
        options: [
          { label: "No change in sleep", value: 0 },
          { label: "Sleep a bit more or less", value: 1 },
          { label: "Sleep a lot more or a lot less", value: 2 },
          { label: "Sleep most of day or wake very early", value: 3 },
        ],
      },
      {
        id: "bdi2_q17",
        text: "Irritability",
        options: [
          { label: "Not more irritable than usual", value: 0 },
          { label: "More irritable than usual", value: 1 },
          { label: "Much more irritable", value: 2 },
          { label: "Irritable all the time", value: 3 },
        ],
      },
      {
        id: "bdi2_q18",
        text: "Changes in appetite",
        options: [
          { label: "No change in appetite", value: 0 },
          { label: "Somewhat less or more appetite", value: 1 },
          { label: "Much less or much more", value: 2 },
          { label: "No appetite at all or constant cravings", value: 3 },
        ],
      },
      {
        id: "bdi2_q19",
        text: "Concentration difficulty",
        options: [
          { label: "Can concentrate as ever", value: 0 },
          { label: "Harder to concentrate", value: 1 },
          { label: "Very hard to keep mind on things", value: 2 },
          { label: "Cannot concentrate on anything", value: 3 },
        ],
      },
      {
        id: "bdi2_q20",
        text: "Tiredness / fatigue",
        options: [
          { label: "No more tired than usual", value: 0 },
          { label: "Tire more easily", value: 1 },
          { label: "Too tired for many things", value: 2 },
          { label: "Too tired for most things", value: 3 },
        ],
      },
      {
        id: "bdi2_q21",
        text: "Loss of interest in sex",
        options: [
          { label: "No recent change", value: 0 },
          { label: "Less interested than before", value: 1 },
          { label: "Much less interested", value: 2 },
          { label: "No interest at all", value: 3 },
        ],
      },
    ],
  },

  burns: {
    id: "burns",
    name: "Burns Depression Checklist",
    maxTotal: 100,
    severityThresholds: [0, 5, 10, 25, 50, 75, 100],
    type: "simple_sum",
    questions: [
      { id: "burns_q1", text: "Feeling sad or down" },
      { id: "burns_q2", text: "Feeling unhappy or blue" },
      { id: "burns_q3", text: "Crying or feeling like crying" },
      { id: "burns_q4", text: "Feeling discouraged" },
      { id: "burns_q5", text: "Feeling hopeless" },
      { id: "burns_q6", text: "Low self-esteem" },
      { id: "burns_q7", text: "Feeling worthless or inadequate" },
      { id: "burns_q8", text: "Guilt or shame" },
      { id: "burns_q9", text: "Self-criticism or blaming others" },
      { id: "burns_q10", text: "Difficulty making decisions" },
      { id: "burns_q11", text: "Less interest in family/friends/colleagues" },
      { id: "burns_q12", text: "Feeling lonely" },
      { id: "burns_q13", text: "Spending less time with others" },
      { id: "burns_q14", text: "Loss of motivation" },
      { id: "burns_q15", text: "Less interest in work/activities" },
      { id: "burns_q16", text: "Avoiding work or activities" },
      { id: "burns_q17", text: "Less pleasure or satisfaction in life" },
      { id: "burns_q18", text: "Feeling tired or low energy" },
      { id: "burns_q19", text: "Trouble sleeping or sleeping too much" },
      { id: "burns_q20", text: "Appetite changes (less or more)" },
      { id: "burns_q21", text: "Less interest in sex" },
      { id: "burns_q22", text: "Worrying about health" },
      { id: "burns_q23", text: "Any suicidal thoughts" },
      { id: "burns_q24", text: "Wish you were dead" },
      { id: "burns_q25", text: "Plans for self-harm" },
    ].map((q) => ({
      ...q,
      options: [
        { label: "0 – Not at all", value: 0 },
        { label: "1 – Somewhat", value: 1 },
        { label: "2 – Moderately", value: 2 },
        { label: "3 – A lot", value: 3 },
        { label: "4 – Extremely", value: 4 },
      ],
    })),
  },

  shaps: {
    id: "shaps",
    name: "Snaith-Hamilton Pleasure Scale",
    maxTotal: 14,
    severityThresholds: [0, 2, 5, 9, 14],
    type: "shaps_dichotomous",
    questions: [
      { id: "shaps_q1", text: "Enjoying a favourite TV or radio programme", reverse: false },
      { id: "shaps_q2", text: "Enjoying being with family or close friends", reverse: true },
      { id: "shaps_q3", text: "Finding pleasure in hobbies or pastimes", reverse: false },
      { id: "shaps_q4", text: "Enjoying a favourite meal", reverse: true },
      { id: "shaps_q5", text: "Enjoying a warm bath or refreshing shower", reverse: true },
      {
        id: "shaps_q6",
        text: "Enjoying pleasant smells (flowers, sea air, fresh bread, etc.)",
        reverse: false,
      },
      { id: "shaps_q7", text: "Enjoying other people’s smiling faces", reverse: true },
      { id: "shaps_q8", text: "Enjoying looking smart after making an effort", reverse: false },
      { id: "shaps_q9", text: "Enjoying reading (book, magazine, news)", reverse: true },
      { id: "shaps_q10", text: "Enjoying a favourite drink (tea, coffee, etc.)", reverse: false },
      {
        id: "shaps_q11",
        text: "Finding pleasure in small things (sunny day, call from a friend)",
        reverse: false,
      },
      { id: "shaps_q12", text: "Enjoying a beautiful view or landscape", reverse: false },
      { id: "shaps_q13", text: "Getting pleasure from helping others", reverse: false },
      { id: "shaps_q14", text: "Feeling pleasure when praised by others", reverse: false },
    ].map((q) => ({
      ...q,
      options: [
        { label: "Strongly disagree", value: 0 },
        { label: "Disagree", value: 1 },
        { label: "Agree", value: 2 },
        { label: "Strongly agree", value: 3 },
      ],
    })),
  },
};

// ==== STORAGE ====

const STORAGE_KEY = "mood_inventory_entries_v2";

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// ==== SEVERITY NORMALIZATION ====

function severityNormalized(invId, rawScore) {
  const inv = INVENTORIES[invId];
  const th = inv.severityThresholds;
  const s = Math.max(th[0], Math.min(rawScore, th[th.length - 1]));
  let idx = th.length - 2;
  for (let i = 0; i < th.length - 1; i++) {
    if (s >= th[i] && s <= th[i + 1]) {
      idx = i;
      break;
    }
  }
  const binStart = th[idx];
  const binEnd = th[idx + 1];
  const binCount = th.length - 1;
  const within = binEnd === binStart ? 0 : (s - binStart) / (binEnd - binStart);
  return (idx + within) / binCount;
}

// ==== SHAPS SCORING ====

function scoreShaps(questionDefs, numericAnswers) {
  let total = 0;
  questionDefs.forEach((q, idx) => {
    const v = numericAnswers[idx];
    if (!Number.isFinite(v)) return;
    if (q.reverse) {
      if (v >= 2) total += 1; // agree / strongly agree
    } else {
      if (v <= 1) total += 1; // disagree / strongly disagree
    }
  });
  return total;
}

function computeScore(invId, numericAnswers) {
  const inv = INVENTORIES[invId];
  if (inv.type === "shaps_dichotomous") {
    return scoreShaps(inv.questions, numericAnswers);
  }
  return numericAnswers.reduce((a, b) => a + (Number(b) || 0), 0);
}

// ==== DOM ELEMENTS ====

const homeScreenEl = document.getElementById("home-screen");
const testScreenEl = document.getElementById("test-screen");
const testTitleEl = document.getElementById("test-title");
const testQuestionsEl = document.getElementById("test-questions");
const testStatusEl = document.getElementById("test-status");
const saveTestBtn = document.getElementById("save-test-btn");
const cancelTestBtn = document.getElementById("cancel-test-btn");
const testLaunchButtons = document.querySelectorAll(".test-launch-btn");

const historyBodyEl = document.getElementById("history-body");
const filterCheckboxes = document.querySelectorAll(".test-filter");
const exportBtn = document.getElementById("export-json");
const downloadLinkEl = document.getElementById("download-link");
const ctx = document.getElementById("scores-chart").getContext("2d");

let entries = loadEntries();
let currentInventoryId = null;

// ==== RENDER QUESTIONS ====

function renderQuestions(invId) {
  const inv = INVENTORIES[invId];
  testQuestionsEl.innerHTML = "";

  inv.questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = `${index + 1}. ${q.text}`;
    wrapper.appendChild(title);

    const optionsRow = document.createElement("div");
    optionsRow.className = "options-row";

    q.options.forEach((opt) => {
      const label = document.createElement("label");
      label.className = "option-pill";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = q.id;
      radio.value = opt.value;
      radio.required = true;

      const span = document.createElement("span");
      span.textContent = opt.label;

      label.appendChild(radio);
      label.appendChild(span);
      optionsRow.appendChild(label);

      radio.addEventListener("change", () => {
        optionsRow.querySelectorAll(".option-pill").forEach((lab) => {
          lab.classList.remove("selected");
        });
        label.classList.add("selected");
      });
    });

    wrapper.appendChild(optionsRow);
    testQuestionsEl.appendChild(wrapper);
  });
}

// ==== SCREEN SWITCHING ====

function showHomeScreen() {
  testScreenEl.classList.add("hidden");
  homeScreenEl.classList.remove("hidden");
  currentInventoryId = null;
  testQuestionsEl.innerHTML = "";
  testStatusEl.textContent = "";
}

function openTest(invId) {
  const inv = INVENTORIES[invId];
  if (!inv) return;
  currentInventoryId = invId;
  testTitleEl.textContent = inv.name;
  testStatusEl.textContent = "";
  renderQuestions(invId);
  homeScreenEl.classList.add("hidden");
  testScreenEl.classList.remove("hidden");
}

testLaunchButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const invId = btn.getAttribute("data-inv");
    openTest(invId);
  });
});

cancelTestBtn.addEventListener("click", () => {
  showHomeScreen();
});

// ==== SAVE TEST ====

saveTestBtn.addEventListener("click", () => {
  if (!currentInventoryId) return;
  const inv = INVENTORIES[currentInventoryId];

  const answers = [];
  for (const q of inv.questions) {
    const checked = testQuestionsEl.querySelector(
      `input[name="${q.id}"]:checked`
    );
    if (!checked) {
      testStatusEl.textContent = "Please answer all questions.";
      testStatusEl.className = "status err";
      return;
    }
    answers.push(Number(checked.value));
  }

  const rawScore = computeScore(currentInventoryId, answers);
  const norm = severityNormalized(currentInventoryId, rawScore);
  const now = new Date();
  const entry = {
    id: `entry_${now.getTime()}`,
    inventoryId: currentInventoryId,
    inventoryName: inv.name,
    timestamp: now.toISOString(),
    rawScore,
    answers,
    severityNormalized: norm,
  };

  entries.push(entry);
  saveEntries(entries);
  renderHistory();
  updateChart();

  testStatusEl.textContent = `${inv.name} saved (raw score ${rawScore})`;
  testStatusEl.className = "status ok";

  // Return to home after brief delay
  setTimeout(showHomeScreen, 400);
});

// ==== HISTORY TABLE ====

function renderHistory() {
  historyBodyEl.innerHTML = "";
  const sorted = [...entries].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  for (const e of sorted) {
    const tr = document.createElement("tr");

    const dt = document.createElement("td");
    dt.textContent = new Date(e.timestamp).toLocaleString();
    tr.appendChild(dt);

    const tn = document.createElement("td");
    tn.textContent = e.inventoryName;
    tr.appendChild(tn);

    const sc = document.createElement("td");
    sc.textContent = e.rawScore;
    tr.appendChild(sc);

    const det = document.createElement("td");
    det.className = "details-cell";
    det.textContent = `answers: [${e.answers.join(", ")}]`;
    tr.appendChild(det);

    historyBodyEl.appendChild(tr);
  }
}

// ==== CHART ====

const COLOR_MAP = {
  phq9: "#f97316",
  madrs: "#22c55e",
  bdi2: "#3b82f6",
  burns: "#e11d48",
  shaps: "#a855f7",
};

const chart = new Chart(ctx, {
  type: "line",
  data: { datasets: [] },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    parsing: false,
    scales: {
      x: {
        type: "time",
        time: { unit: "day" },
        ticks: { color: "#9ca3af" },
        grid: { color: "#1f2937" },
      },
      y: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: "Severity-normalized (0–1)",
        },
        ticks: { color: "#9ca3af" },
        grid: { color: "#1f2937" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#e5e7eb" },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const d = ctx.raw;
            const inv = INVENTORIES[d.inventoryId];
            return `${inv.name}: raw ${d.rawScore}, norm ${d.y.toFixed(2)}`;
          },
        },
      },
    },
    elements: {
      line: { tension: 0.25 },
      point: { radius: 3 },
    },
  },
});

function updateChart() {
  const activeIds = Array.from(filterCheckboxes)
    .filter((c) => c.checked)
    .map((c) => c.value);

  const datasets = activeIds.map((invId) => {
    const inv = INVENTORIES[invId];
    const data = entries
      .filter((e) => e.inventoryId === invId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      .map((e) => ({
        x: new Date(e.timestamp),
        y: e.severityNormalized,
        rawScore: e.rawScore,
        inventoryId: e.inventoryId,
      }));

    return {
      label: inv.name,
      data,
      borderColor: COLOR_MAP[invId] || "#f97316",
      backgroundColor: COLOR_MAP[invId] || "#f97316",
    };
  });

  chart.data.datasets = datasets;
  chart.update();
}

filterCheckboxes.forEach((cb) =>
  cb.addEventListener("change", updateChart)
);

// ==== EXPORT JSON ====

exportBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(entries, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  downloadLinkEl.href = url;
  downloadLinkEl.download = "mood_inventory_data.json";
  downloadLinkEl.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
});

// ==== INIT ====

renderHistory();
updateChart();

// ==== SERVICE WORKER REGISTRATION ====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((err) => console.error("SW registration failed:", err));
  });
}
