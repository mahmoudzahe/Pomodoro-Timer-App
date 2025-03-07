export function setupSoundAlerts() {}
  export function playEndSound() {
    const alertSound = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3');
    alertSound.play().catch(() => alert('Session ended!'));
  }