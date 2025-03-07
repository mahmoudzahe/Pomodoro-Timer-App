import { startTimer, pauseTimer, resetTimer } from './timerLogic.js';
import { updateUserSettings } from './userSettings.js';

export function setupInterface() {
  document.getElementById('startButton').addEventListener('click', startTimer);
  document.getElementById('pauseButton').addEventListener('click', pauseTimer);
  document.getElementById('resetButton').addEventListener('click', resetTimer);
  document.getElementById('applySettingsButton').addEventListener('click', () => {
    const workInput = parseInt(document.getElementById('workInput').value);
    const breakInput = parseInt(document.getElementById('breakInput').value);
    if (workInput > 0 && breakInput > 0) {
      updateUserSettings(workInput, breakInput);
      resetTimer();
    } else {
      alert('Please enter valid durations (greater than 0)');
    }
  });
}

export function updateTimeDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById('timerDisplay').textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function toggleControlButtons(isActive) {
  document.getElementById('startButton').disabled = isActive;
  document.getElementById('pauseButton').disabled = !isActive;
}