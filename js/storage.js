// js/storage.js
const STORAGE_KEY = "invitation-review";

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setMastery(cardId, level) {
  const state = loadState();
  state.mastery = state.mastery || {};
  state.mastery[cardId] = level;
  saveState(state);
}

function getMastery(cardId) {
  const state = loadState();
  return state.mastery?.[cardId] || "unknown";
}
