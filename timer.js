// timer.js
// This script displays a real-time digital clock in a stylish way on the website.

document.addEventListener('DOMContentLoaded', function () {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'cool-timer';
  document.body.prepend(timerContainer);

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timerContainer.innerHTML = `
      <span class="timer-hours">${hours}</span>:
      <span class="timer-minutes">${minutes}</span>:
      <span class="timer-seconds">${seconds}</span>
    `;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
