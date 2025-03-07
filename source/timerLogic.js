import { updateTimeDisplay, toggleControlButtons } from './interface.js';
import { playEndSound } from './soundAlerts.js';
import { getUserSettings } from './userSettings.js';

let remainingSeconds = 0;
let isTimerActive = false;
let timerInterval = null;
let completedSessions = 0;

export function setupTimer() {
  const { workMinutes } = getUserSettings();
  remainingSeconds = workMinutes * 60;
  updateTimeDisplay(remainingSeconds);
}

export function startTimer() {
  if (!isTimerActive) {
    isTimerActive = true;
    toggleControlButtons(isTimerActive);
    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateTimeDisplay(remainingSeconds);
      } else {
        clearInterval(timerInterval);
        isTimerActive = false;
        playEndSound();
        switchTimerMode();
      }
    }, 1000);
  }
}

export function pauseTimer() {
  if (isTimerActive) {
    clearInterval(timerInterval);
    isTimerActive = false;
    toggleControlButtons(isTimerActive);
  }
}

export function resetTimer() {
  clearInterval(timerInterval);
  isTimerActive = false;
  completedSessions = 0;
  const { workMinutes } = getUserSettings();
  remainingSeconds = workMinutes * 60;
  updateTimeDisplay(remainingSeconds);
  toggleControlButtons(isTimerActive);
  document.getElementById('currentMode').textContent = 'Work';
}

function switchTimerMode() {
  const { workMinutes, breakMinutes, longBreakMinutes } = getUserSettings();
  completedSessions++;
  if (completedSessions % 4 === 0) {
    remainingSeconds = longBreakMinutes * 60;
    document.getElementById('currentMode').textContent = 'Long Break';
  } else if (completedSessions % 2 === 0) {
    remainingSeconds = breakMinutes * 60;
    document.getElementById('currentMode').textContent = 'Break';
  } else {
    remainingSeconds = workMinutes * 60;
    document.getElementById('currentMode').textContent = 'Work';
  }
  updateTimeDisplay(remainingSeconds);
  startTimer();
}