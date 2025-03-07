import './styles.css';
import { setupTimer } from './timerLogic.js';
import { setupInterface } from './interface.js';
import { loadUserSettings } from './userSettings.js';
import { setupSoundAlerts } from './soundAlerts.js';

document.addEventListener('DOMContentLoaded', () => {
  loadUserSettings();
  setupInterface();
  setupTimer();
  setupSoundAlerts();
});