let timerSettings = {
    workMinutes: 25,
    breakMinutes: 5,
    longBreakMinutes: 15,
  };
  
  export function loadUserSettings() {
    document.getElementById('workInput').value = timerSettings.workMinutes;
    document.getElementById('breakInput').value = timerSettings.breakMinutes;
  }
  
  export function updateUserSettings(work, breakTime) {
    timerSettings.workMinutes = work;
    timerSettings.breakMinutes = breakTime;
  }
  
  export function getUserSettings() {
    return timerSettings;
  }