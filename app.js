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
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q2",
        text: "Feeling down, depressed, or hopeless",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q3",
        text: "Trouble falling or staying asleep, or sleeping too much",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q4",
        text: "Feeling tired or having little energy",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q5",
        text: "Poor appetite or overeating",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q6",
        text:
          "Feeling bad about yourself or like you are a failure or have let yourself or your family down",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q7",
        text: "Trouble concentrating (reading, TV, etc.)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q8",
        text:
          "Moving or speaking noticeably slower than usual, or feeling very restless and fidgety",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
        ],
      },
      {
        id: "phq9_q9",
        text: "Thoughts you would be better off dead or of self-harm",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Sometimes", value: 1 },
          { label: "More than half the time", value: 2 },
          { label: "Nearly all the time", value: 3 },
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
      {
        id: "shaps_q1",
        text: "Enjoying a favourite TV or radio programme",
        reverse: false,
      },
      {
        id: "shaps_q2",
        text: "Enjoying being with family or close friends",
        reverse: true,
      },
      {
        id: "shaps_q3",
        text: "Finding pleasure in hobbies or pastimes",
        reverse: false,
      },
      {
        id: "shaps_q4",
        text: "Enjoying a favourite meal",
        reverse: true,
      },
      {
        id: "shaps_q5",
        text: "Enjoying a warm bath or refreshing shower",
        reverse: true,
      },
      {
        id: "shaps_q6",
        text:
          "Enjoying pleasant smells (flowers, sea air, fresh bread, etc.)",
        reverse: false,
      },
      {
        id: "shaps_q7",
        text: "Enjoying other people’s smiling faces",
        reverse: true,
      },
      {
        id: "shaps_q8",
        text: "Enjoying looking smart after making an effort",
        reverse: false,
      },
      {
        id: "shaps_q9",
        text: "Enjoying reading (book, magazine, news)",
        reverse: true,
      },
      {
        id: "shaps_q10",
        text: "Enjoying a favourite drink (tea, coffee, etc.)",
        reverse: false,
      },
      {
        id: "shaps_q11",
        text: "Finding pleasure in small things (sunny day, call from a friend)",
        reverse: false,
      },
      {
        id: "shaps_q12",
        text: "Enjoying a beautiful view or landscape",
        reverse: false,
      },
      {
        id: "shaps_q13",
        text: "Getting pleasure from helping others",
        reverse: false,
      },
      {
        id: "shaps_q14",
        text: "Feeling pleasure when praised by others",
        reverse: false,
      },
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
  if (!inv) return 0;
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
      if (v >= 2) total += 1;
    } else {
      if (v <= 1) total += 1;
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

const questionCardEl = document.getElementById("question-card");
const testTitleEl = document.getElementById("test-title");
const testQuestionsEl = document.getElementById("test-questions");
const testStatusEl = document.getElementById("test-status");
const saveTestBtn = document.getElementById("save-test-btn");
const cancelTestBtn = document.getElementById("cancel-test-btn");
const testLaunchButtons = document.querySelectorAll(".test-launch-btn");

const historyBodyEl = document.getElementById("history-body");
const filterCheckboxes = document.querySelectorAll(".test-filter");
const exportBtn = document.getElementById("export-json");
const importBtn = document.getElementById("import-json");
const importInput = document.getElementById("import-file");
const downloadLinkEl = document.getElementById("download-link");
const ctx = document.getElementById("scores-chart").getContext("2d");

// Event UI
const eventDateInput = document.getElementById("event-date");
const eventDescInput = document.getElementById("event-description");
const addEventBtn = document.getElementById("add-event-btn");
const eventStatusEl = document.getElementById("event-status");

// Manual add UI
const manualTestSelect = document.getElementById("manual-test-select");
const manualDateInput = document.getElementById("manual-date");
const manualScoreInput = document.getElementById("manual-score");
const manualAddBtn = document.getElementById("manual-add-btn");
const manualStatusEl = document.getElementById("manual-status");

// AVG toggle
const avgToggle = document.getElementById("avg-toggle");
const forecastControlsEl = document.getElementById("forecast-controls");
const forecastToggle = document.getElementById("forecast-toggle");
const forecastFieldsEl = document.getElementById("forecast-fields");
const forecastPastInput = document.getElementById("forecast-past-days");
const forecastFutureInput = document.getElementById("forecast-future-days");
const forecastMethodSelect = document.getElementById("forecast-method");

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

// ==== SHOW / HIDE QUESTION CARD ====

function openTest(invId) {
  const inv = INVENTORIES[invId];
  if (!inv) return;
  currentInventoryId = invId;
  testTitleEl.textContent = inv.name;
  testStatusEl.textContent = "";
  testStatusEl.className = "status";
  renderQuestions(invId);
  questionCardEl.classList.remove("hidden");
  questionCardEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeTest() {
  currentInventoryId = null;
  testQuestionsEl.innerHTML = "";
  testStatusEl.textContent = "";
  testStatusEl.className = "status";
  questionCardEl.classList.add("hidden");
}

testLaunchButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const invId = btn.getAttribute("data-inv");
    openTest(invId);
  });
});

cancelTestBtn.addEventListener("click", () => {
  closeTest();
});

// ==== SAVE TEST FROM QUESTIONNAIRE ====

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
    kind: "test",
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

  setTimeout(() => {
    closeTest();
  }, 400);
});

// ==== ADD KEY EVENT ====

addEventBtn.addEventListener("click", () => {
  const dateStr = eventDateInput.value;
  const desc = eventDescInput.value.trim();

  if (!dateStr) {
    eventStatusEl.textContent = "Please pick a date.";
    eventStatusEl.className = "status err";
    return;
  }
  if (!desc) {
    eventStatusEl.textContent = "Please enter a description.";
    eventStatusEl.className = "status err";
    return;
  }

  const date = new Date(dateStr + "T12:00:00");
  const now = new Date();

  const ev = {
    kind: "event",
    id: `event_${now.getTime()}`,
    timestamp: date.toISOString(),
    description: desc,
  };

  entries.push(ev);
  saveEntries(entries);
  renderHistory();
  updateChart();

  eventStatusEl.textContent = "Event added.";
  eventStatusEl.className = "status ok";
  eventDescInput.value = "";
});

// ==== MANUAL SCORE ENTRY ====

manualAddBtn.addEventListener("click", () => {
  const invId = manualTestSelect.value;
  const inv = INVENTORIES[invId];
  const dateStr = manualDateInput.value;
  const rawStr = manualScoreInput.value;

  if (!inv) {
    manualStatusEl.textContent = "Invalid test selected.";
    manualStatusEl.className = "status err";
    return;
  }
  if (!dateStr) {
    manualStatusEl.textContent = "Please pick a date.";
    manualStatusEl.className = "status err";
    return;
  }
  if (rawStr === "") {
    manualStatusEl.textContent = "Please enter a raw score.";
    manualStatusEl.className = "status err";
    return;
  }

  let rawScore = Number(rawStr);
  if (!Number.isFinite(rawScore)) {
    manualStatusEl.textContent = "Raw score must be a number.";
    manualStatusEl.className = "status err";
    return;
  }

  // Clamp to valid range
  rawScore = Math.max(0, Math.min(rawScore, inv.maxTotal));

  const date = new Date(dateStr + "T12:00:00");
  const norm = severityNormalized(invId, rawScore);

  const entry = {
    kind: "test",
    id: `manual_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    inventoryId: invId,
    inventoryName: inv.name,
    timestamp: date.toISOString(),
    rawScore,
    answers: [],
    severityNormalized: norm,
  };

  entries.push(entry);
  saveEntries(entries);
  renderHistory();
  updateChart();

  manualStatusEl.textContent = `Added manual ${inv.name} score ${rawScore}.`;
  manualStatusEl.className = "status ok";
  manualScoreInput.value = "";
});

// ==== HISTORY TABLE (expandable, deletable) ====

function buildDetailsContent(entry) {
  const wrapper = document.createElement("div");
  wrapper.className = "details-expanded";
  const dt = new Date(entry.timestamp).toLocaleString();

  if (entry.kind === "event") {
    wrapper.innerHTML = `
      <div><strong>Event:</strong> ${entry.description || ""}</div>
      <div><strong>Date/time:</strong> ${dt}</div>
    `;
  } else {
    const inv = INVENTORIES[entry.inventoryId];
    const invName = inv ? inv.name : entry.inventoryName || entry.inventoryId;
    const norm = (entry.severityNormalized ?? 0).toFixed(3);

    wrapper.innerHTML = `
      <div><strong>Inventory:</strong> ${invName}</div>
      <div><strong>Date/time:</strong> ${dt}</div>
      <div><strong>Raw score:</strong> ${entry.rawScore}</div>
      <div><strong>Normalized severity:</strong> ${norm}</div>
   `;

    if (inv && Array.isArray(entry.answers) && entry.answers.length) {
      const list = document.createElement("ul");
      list.className = "answers-list";
      entry.answers.forEach((val, idx) => {
        const q = inv.questions[idx];
        const li = document.createElement("li");
        let optLabel = "";
        if (q && q.options) {
          const match = q.options.find(
            (o) => Number(o.value) === Number(val)
          );
          if (match) optLabel = match.label;
        }
        li.textContent = q
          ? `${idx + 1}. ${q.text} → ${optLabel || val}`
          : `Q${idx + 1}: ${val}`;
        list.appendChild(li);
      });
      wrapper.appendChild(list);
    }
  }

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete entry";
  delBtn.className = "danger-btn";
  delBtn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    if (!confirm("Delete this entry?")) return;
    entries = entries.filter((x) => x.id !== entry.id);
    saveEntries(entries);
    renderHistory();
    updateChart();
  });

  wrapper.appendChild(delBtn);
  return wrapper;
}

function toggleHistoryRow(entry, rowEl) {
  const next = rowEl.nextSibling;
  if (next && next.classList && next.classList.contains("expansion-row")) {
    next.remove();
    return;
  }

  const detailsTr = document.createElement("tr");
  detailsTr.className = "expansion-row";
  const td = document.createElement("td");
  td.colSpan = 4;
  td.appendChild(buildDetailsContent(entry));
  detailsTr.appendChild(td);
  rowEl.parentNode.insertBefore(detailsTr, rowEl.nextSibling);
}

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
    const sc = document.createElement("td");
    const det = document.createElement("td");
    det.className = "details-cell";

    if (e.kind === "event") {
      tn.textContent = "EVENT";
      sc.textContent = "—";
      det.textContent = e.description || "";
    } else {
      tn.textContent =
        e.inventoryName || INVENTORIES[e.inventoryId]?.name || e.inventoryId;
      sc.textContent =
        typeof e.rawScore === "number" ? e.rawScore : e.rawScore ?? "—";
      det.textContent = e.answers && e.answers.length
        ? `answers: [${e.answers.join(", ")}]`
        : "manual / imported entry";
    }

    tr.appendChild(tn);
    tr.appendChild(sc);
    tr.appendChild(det);

    tr.addEventListener("click", () => toggleHistoryRow(e, tr));

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

const LABEL_MAP = {
  phq9: "PHQ-9",
  madrs: "MADRS",
  bdi2: "BDI-II",
  burns: "BURNS",
  shaps: "SHAPS",
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function clamp01(v) {
  if (!Number.isFinite(v)) return 0;
  return Math.min(1, Math.max(0, v));
}

function stddev(values) {
  if (!values || values.length === 0) return 0;
  const mean =
    values.reduce((sum, val) => sum + (Number(val) || 0), 0) /
    values.length;
  const variance =
    values.reduce((acc, val) => acc + (val - mean) * (val - mean), 0) /
    Math.max(1, values.length - 1);
  return Math.sqrt(Math.max(variance, 0));
}

function forecastMethodLabel(method) {
  switch (method) {
    case "linear":
      return "Linear regression";
    case "poly":
      return "Power series fit";
    case "smoothing":
      return "Exponential smoothing";
    default:
      return "Forecast";
  }
}

function solvePoly2(xs, ys) {
  if (!xs.length || xs.length !== ys.length) return null;
  let s0 = xs.length;
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let s4 = 0;
  let t0 = 0;
  let t1 = 0;
  let t2 = 0;

  for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
    const y = ys[i];
    const x2 = x * x;
    const x3 = x2 * x;
    const x4 = x2 * x2;
    s1 += x;
    s2 += x2;
    s3 += x3;
    s4 += x4;
    t0 += y;
    t1 += x * y;
    t2 += x2 * y;
  }

  const A = [
    [s0, s1, s2],
    [s1, s2, s3],
    [s2, s3, s4],
  ];
  const B = [t0, t1, t2];

  // Gaussian elimination
  for (let col = 0; col < 3; col++) {
    let pivot = col;
    for (let r = col + 1; r < 3; r++) {
      if (Math.abs(A[r][col]) > Math.abs(A[pivot][col])) pivot = r;
    }
    if (Math.abs(A[pivot][col]) < 1e-9) return null;
    if (pivot !== col) {
      [A[pivot], A[col]] = [A[col], A[pivot]];
      [B[pivot], B[col]] = [B[col], B[pivot]];
    }

    const div = A[col][col];
    for (let c = col; c < 3; c++) A[col][c] /= div;
    B[col] /= div;

    for (let r = 0; r < 3; r++) {
      if (r === col) continue;
      const factor = A[r][col];
      for (let c = col; c < 3; c++) A[r][c] -= factor * A[col][c];
      B[r] -= factor * B[col];
    }
  }

  return B;
}

function buildForecast(avgData, settings) {
  if (!avgData || avgData.length < 2) return null;

  const sorted = [...avgData].sort((a, b) => a.x - b.x);
  const lastTime = sorted[sorted.length - 1].x.getTime();
  const cutoff = lastTime - settings.pastDays * MS_PER_DAY;
  const training = sorted.filter((p) => p.x.getTime() >= cutoff);

  if (training.length < 2) return null;

  const baseTime = training[0].x.getTime();
  const xs = training.map((p) => (p.x.getTime() - baseTime) / MS_PER_DAY);
  const ys = training.map((p) => p.y);

  let fitted = [];
  let predictor;

  if (settings.method === "poly") {
    const coeffs = solvePoly2(xs, ys);
    if (coeffs) {
      predictor = (x) => coeffs[0] + coeffs[1] * x + coeffs[2] * x * x;
      fitted = xs.map((x) => predictor(x));
    }
  }

  if (!predictor && settings.method === "smoothing") {
    const alpha = 0.35;
    let smoothed = ys[0];
    let prev = smoothed;
    fitted = [smoothed];
    for (let i = 1; i < ys.length; i++) {
      const next = alpha * ys[i] + (1 - alpha) * smoothed;
      prev = smoothed;
      smoothed = next;
      fitted.push(smoothed);
    }
    const lastSlope = smoothed - prev;
    const lastX = xs[xs.length - 1];
    predictor = (x) => smoothed + lastSlope * (x - lastX);
  }

  if (!predictor) {
    const meanX = xs.reduce((a, b) => a + b, 0) / xs.length;
    const meanY = ys.reduce((a, b) => a + b, 0) / ys.length;
    let num = 0;
    let den = 0;
    xs.forEach((x, idx) => {
      num += (x - meanX) * (ys[idx] - meanY);
      den += (x - meanX) * (x - meanX);
    });
    const slope = den ? num / den : 0;
    const intercept = meanY - slope * meanX;
    predictor = (x) => intercept + slope * x;
    fitted = xs.map((x) => predictor(x));
  }

  const residuals = ys.map((y, idx) => y - (fitted[idx] ?? y));
  const baseStd = Math.max(0.015, stddev(residuals));
  const spreadStd = Math.max(0.01, stddev(ys));
  const maxY = Math.max(...ys);
  const minY = Math.min(...ys);
  const lastPoint = training[training.length - 1];
  const lastX = xs[xs.length - 1];
  let lastForecastY = lastPoint.y;

  const meanSeries = [
    { x: lastPoint.x, y: lastPoint.y, isForecast: true },
  ];
  const upperSeries = [
    { x: lastPoint.x, y: lastPoint.y, isForecastBand: true },
  ];
  const lowerSeries = [
    { x: lastPoint.x, y: lastPoint.y, isForecastBand: true },
  ];

  for (let step = 1; step <= settings.futureDays; step++) {
    const xVal = lastX + step;
    const time = lastPoint.x.getTime() + step * MS_PER_DAY;
    const rawPredicted = predictor(xVal);
    const growth = rawPredicted - lastForecastY;
    const damp = 1 / (1 + 0.08 * step); // progressively flatten further-out steps
    let predicted = lastForecastY + growth * damp;

    const upperCap = Math.min(0.97, maxY + 2 * spreadStd);
    const lowerCap = Math.max(0, minY - 2 * spreadStd);
    if (predicted > upperCap) {
      predicted = upperCap - (predicted - upperCap) * 0.3;
    } else if (predicted < lowerCap) {
      predicted = lowerCap + (lowerCap - predicted) * 0.3;
    }

    predicted = clamp01(predicted);
    lastForecastY = predicted;
    const sigma = baseStd * Math.sqrt(step);

    meanSeries.push({
      x: new Date(time),
      y: predicted,
      isForecast: true,
    });
    upperSeries.push({
      x: new Date(time),
      y: clamp01(predicted + sigma),
      isForecastBand: true,
    });
    lowerSeries.push({
      x: new Date(time),
      y: clamp01(predicted - sigma),
      isForecastBand: true,
    });
  }

  return { meanSeries, upperSeries, lowerSeries };
}

function syncForecastUI() {
  const avgOn = !!(avgToggle && avgToggle.checked);
  if (forecastControlsEl) {
    forecastControlsEl.classList.toggle("hidden", !avgOn);
  }
  if (!avgOn && forecastToggle) {
    forecastToggle.checked = false;
  }

  const forecastOn = avgOn && forecastToggle && forecastToggle.checked;
  if (forecastFieldsEl) {
    forecastFieldsEl.classList.toggle("hidden", !forecastOn);
  }
}

function getForecastSettings() {
  const pastDaysRaw = Number(forecastPastInput?.value);
  const futureDaysRaw = Number(forecastFutureInput?.value);

  const pastDays = Math.max(
    7,
    Math.min(365, Number.isFinite(pastDaysRaw) ? pastDaysRaw : 10)
  );
  const futureDays = Math.max(
    1,
    Math.min(180, Number.isFinite(futureDaysRaw) ? futureDaysRaw : 10)
  );

  if (forecastPastInput) forecastPastInput.value = pastDays;
  if (forecastFutureInput) forecastFutureInput.value = futureDays;

  return {
    pastDays,
    futureDays,
    method: forecastMethodSelect?.value || "linear",
  };
}

function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(249, 115, 22, ${alpha})`;
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Plugin to draw event vertical lines
const eventLinesPlugin = {
  id: "eventLines",
  afterDraw(chart) {
    const events = chart.$events || [];
    if (!events.length) return;

    const { ctx, chartArea, scales } = chart;
    const xScale = scales.x;
    ctx.save();
    ctx.strokeStyle = "#6b7280";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);

    events.forEach((ev) => {
      const x = xScale.getPixelForValue(new Date(ev.timestamp));
      if (x < chartArea.left || x > chartArea.right) return;
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
    });

    ctx.restore();
  },
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
        labels: {
          color: "#e5e7eb",
          filter: (item, data) => {
            const ds = data.datasets[item.datasetIndex];
            return !ds.isEvent && !ds.isBand; // hide Events + forecast bands
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const d = ctx.raw;

            if (ctx.dataset && ctx.dataset.isBand) return "";

            if (d && d.eventDescription) {
              const dt = new Date(d.x);
              return `Event: ${d.eventDescription} (${dt.toLocaleDateString()})`;
            }

            if (d && d.isForecast) {
              const dt = new Date(d.x);
              const methodLabel = ctx.dataset?.methodLabel || "Forecast";
              return `${methodLabel}: ${d.y.toFixed(2)} (${dt.toLocaleDateString()})`;
            }

            if (d && d.isAvg) {
              const dt = new Date(d.x);
              return `AVG: ${d.y.toFixed(2)} (${dt.toLocaleDateString()})`;
            }

            if (!d || !d.inventoryId) return "";
            const invId = d.inventoryId;
            const label =
              LABEL_MAP[invId] || INVENTORIES[invId]?.name || "Score";
            return `${label}: raw ${d.rawScore}, norm ${d.y.toFixed(2)}`;
          },
        },
      },
    },
    elements: {
      line: { tension: 0.25 },
      point: { radius: 3 },
    },
  },
  plugins: [eventLinesPlugin],
});

function updateChart() {
  const activeIds = Array.from(filterCheckboxes)
    .filter((c) => c.checked)
    .map((c) => c.value);

  const avgActive = !!(avgToggle && avgToggle.checked);
  const forecastActive =
    avgActive && forecastToggle && forecastToggle.checked;
  const forecastSettings = forecastActive ? getForecastSettings() : null;

  // Score datasets
  const scoreDatasets = activeIds.map((invId) => {
    const inv = INVENTORIES[invId];
    const baseColor = COLOR_MAP[invId] || "#f97316";
    const color = avgActive ? hexToRgba(baseColor, 0.15) : baseColor;

    const data = entries
      .filter((e) => e.kind !== "event" && e.inventoryId === invId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      .map((e) => ({
        x: new Date(e.timestamp),
        y: e.severityNormalized,
        rawScore: e.rawScore,
        inventoryId: e.inventoryId,
      }));

    return {
      label: LABEL_MAP[invId] || inv.name,
      data,
      borderColor: color,
      backgroundColor: color,
    };
  });

  // Events dataset (for tooltip hit area)
  const events = entries.filter((e) => e.kind === "event");
  let eventDataset = null;
  if (events.length) {
    const eventPoints = events.map((ev) => ({
      x: new Date(ev.timestamp),
      y: 0,
      eventDescription: ev.description,
    }));
    eventDataset = {
      label: "Events",
      isEvent: true,
      data: eventPoints,
      borderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      showLine: false,
    };
  }

  // AVG dataset across all active inventories (by day)
  let avgDataset = null;
  let avgData = [];
  let analysisStartTime = null;
  if (avgActive && activeIds.length > 0) {
    const byDay = new Map(); // key: YYYY-MM-DD -> {sum, count}
    entries
      .filter(
        (e) => e.kind !== "event" && activeIds.includes(e.inventoryId)
      )
      .forEach((e) => {
        const d = new Date(e.timestamp);
        const key = d.toISOString().slice(0, 10);
        const norm = e.severityNormalized ?? 0;
        if (!byDay.has(key)) byDay.set(key, { sum: 0, count: 0 });
        const obj = byDay.get(key);
        obj.sum += norm;
        obj.count += 1;
      });

    avgData = Array.from(byDay.entries())
      .map(([key, { sum, count }]) => ({
        x: new Date(key + "T12:00:00"),
        y: sum / count,
        isAvg: true,
      }))
      .sort((a, b) => a.x - b.x);

    if (forecastActive && avgData.length) {
      const lastTime = avgData[avgData.length - 1].x.getTime();
      analysisStartTime = lastTime - forecastSettings.pastDays * MS_PER_DAY;
    }

    if (
      forecastActive &&
      analysisStartTime !== null &&
      avgData.length >= 2
    ) {
      const firstTime = avgData[0].x.getTime();
      const lastTime = avgData[avgData.length - 1].x.getTime();
      if (analysisStartTime > firstTime && analysisStartTime < lastTime) {
        let insertIdx = avgData.findIndex(
          (p) => p.x.getTime() >= analysisStartTime
        );
        if (insertIdx === -1) insertIdx = avgData.length;
        const alreadyAtBoundary =
          avgData[insertIdx] &&
          avgData[insertIdx].x.getTime() === analysisStartTime;
        if (!alreadyAtBoundary) {
          const prev = avgData[insertIdx - 1];
          const next = avgData[insertIdx];
          let yVal = prev ? prev.y : next?.y || 0;
          if (prev && next) {
            const range = next.x.getTime() - prev.x.getTime();
            const offset = analysisStartTime - prev.x.getTime();
            const ratio = range ? offset / range : 0;
            yVal = prev.y + (next.y - prev.y) * ratio;
          }
          avgData.splice(insertIdx, 0, {
            x: new Date(analysisStartTime),
            y: yVal,
            isAvg: true,
            isAnalysisStart: true,
          });
        }
      }
    }

    if (avgData.length) {
      const baseColor = "#facc15";
      const fadedColor = "rgba(250, 204, 21, 0.5)";
      const colorForX = (xVal) => {
        if (!Number.isFinite(xVal)) return baseColor;
        if (!forecastActive || analysisStartTime === null) return baseColor;
        return xVal >= analysisStartTime ? baseColor : fadedColor;
      };
      avgDataset = {
        label: "AVG",
        data: avgData,
        borderColor: baseColor,
        backgroundColor: baseColor,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: forecastActive
          ? (ctx) => colorForX(ctx.parsed.x)
          : baseColor,
        segment: forecastActive
          ? {
              borderColor: (ctx) => colorForX(ctx.p0.parsed.x),
            }
          : undefined,
      };
    }
  }

  // Forecast dataset based on AVG points
  let forecastDatasets = [];
  if (forecastActive && avgData.length >= 2) {
    const forecastResult = buildForecast(avgData, forecastSettings);
    if (forecastResult) {
      const methodLabel = forecastMethodLabel(forecastSettings.method);
      const lowerBand = {
        label: "Forecast lower",
        data: forecastResult.lowerSeries,
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
        pointRadius: 0,
        pointHitRadius: 0,
        tension: 0.25,
        fill: false,
        isBand: true,
      };
      const upperBand = {
        label: "Forecast range",
        data: forecastResult.upperSeries,
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: "rgba(250, 204, 21, 0.16)",
        pointRadius: 0,
        pointHitRadius: 0,
        tension: 0.25,
        fill: "-1",
        isBand: true,
      };
      const forecastLine = {
        label: `Forecast (${methodLabel})`,
        data: forecastResult.meanSeries,
        borderColor: "#facc15",
        backgroundColor: "#facc15",
        borderDash: [6, 4],
        borderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 4,
        fill: false,
        tension: 0.25,
        isForecast: true,
        methodLabel,
      };
      forecastDatasets = [lowerBand, upperBand, forecastLine];
    }
  }

  chart.$events = events;

  const datasets = [...scoreDatasets];
  if (avgDataset) datasets.push(avgDataset);
  if (forecastDatasets.length) datasets.push(...forecastDatasets);
  if (eventDataset) datasets.push(eventDataset);

  chart.data.datasets = datasets;

  // === NEW: force x-axis to span all points (tests + events + avg) ===
  let minX = null;
  let maxX = null;

  datasets.forEach((ds) => {
    (ds.data || []).forEach((p) => {
      if (!p || !p.x) return;
      const t =
        p.x instanceof Date
          ? p.x.getTime()
          : new Date(p.x).getTime();
      if (!Number.isFinite(t)) return;
      if (minX === null || t < minX) minX = t;
      if (maxX === null || t > maxX) maxX = t;
    });
  });

  if (minX !== null && maxX !== null) {
    const pad = 0.5 * MS_PER_DAY; // half-day padding on each side
    chart.options.scales.x.min = minX - pad;
    chart.options.scales.x.max = maxX + pad;
  } else {
    chart.options.scales.x.min = undefined;
    chart.options.scales.x.max = undefined;
  }
  // === end new block ===

  chart.update();
}

filterCheckboxes.forEach((cb) =>
  cb.addEventListener("change", updateChart)
);

if (avgToggle) {
  avgToggle.addEventListener("change", () => {
    syncForecastUI();
    updateChart();
  });
}

if (forecastToggle) {
  forecastToggle.addEventListener("change", () => {
    syncForecastUI();
    updateChart();
  });
}

[forecastPastInput, forecastFutureInput, forecastMethodSelect].forEach(
  (el) => {
    if (!el) return;
    el.addEventListener("change", updateChart);
  }
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

// ==== IMPORT JSON (MERGE) ====

importBtn.addEventListener("click", () => {
  importInput.click();
});

importInput.addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const text = String(reader.result || "");
      const parsed = JSON.parse(text);

      // Accept either a raw array or { entries: [...] }
      const incoming = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed.entries)
        ? parsed.entries
        : [];

      if (!incoming.length) {
        alert("No entries found in JSON.");
        importInput.value = "";
        return;
      }

      const existingIds = new Set(entries.map((x) => x.id));
      let added = 0;

      incoming.forEach((obj) => {
        if (!obj || typeof obj !== "object") return;

        if (!obj.id) {
          obj.id = `import_${Date.now()}_${Math.random()
            .toString(36)
            .slice(2, 8)}`;
        }
        if (existingIds.has(obj.id)) return;

        // For old-format test entries: ensure severityNormalized exists
        if (
          (obj.kind === "test" || !obj.kind) &&
          obj.inventoryId &&
          typeof obj.rawScore === "number" &&
          (obj.severityNormalized === undefined ||
            obj.severityNormalized === null)
        ) {
          obj.severityNormalized = severityNormalized(
            obj.inventoryId,
            obj.rawScore
          );
        }

        entries.push(obj);
        existingIds.add(obj.id);
        added += 1;
      });

      if (added > 0) {
        saveEntries(entries);
        renderHistory();
        updateChart();
        alert(`Imported ${added} new entries.`);
      } else {
        alert("No new entries imported (all duplicates or invalid).");
      }
    } catch (err) {
      console.error(err);
      alert("Invalid JSON file.");
    } finally {
      importInput.value = "";
    }
  };

  reader.readAsText(file);
});

// ==== INIT ====

syncForecastUI();
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
