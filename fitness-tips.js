// fitness-tips.js
// Fitness Tip Generator: Shows a random fitness tip at the bottom of the website with nice colors.

document.addEventListener('DOMContentLoaded', function () {
  // Fitness tips array
  const tips = [
    "Stay hydrated! Drink water before, during, and after your workout.",
    "Warm up before exercising to prevent injuries.",
    "Mix cardio and strength training for best results.",
    "Rest days are important for muscle recovery.",
    "Eat a balanced diet rich in protein, veggies, and healthy fats.",
    "Track your progress to stay motivated.",
    "Stretch after your workout to improve flexibility.",
    "Set realistic fitness goals and celebrate small wins.",
    "Get enough sleep to help your body recover.",
    "Consistency is key—make fitness a habit!"
  ];

  // Create the tip container
  const tipContainer = document.createElement('div');
  tipContainer.id = 'fitness-tip-generator';
  tipContainer.style.position = 'fixed';
  tipContainer.style.left = '50%';
  tipContainer.style.bottom = '0';
  tipContainer.style.transform = 'translateX(-50%)';
  tipContainer.style.background = 'linear-gradient(90deg, #ffb347 0%, #7fffd4 100%)';
  tipContainer.style.color = '#222';
  tipContainer.style.fontFamily = 'Segoe UI, Arial, sans-serif';
  tipContainer.style.fontSize = '1.1rem';
  tipContainer.style.padding = '1em 2em 1em 2em';
  tipContainer.style.borderRadius = '1.2em 1.2em 0 0';
  tipContainer.style.boxShadow = '0 -2px 16px 0 rgba(0,0,0,0.13)';
  tipContainer.style.zIndex = '9999';
  tipContainer.style.display = 'flex';
  tipContainer.style.alignItems = 'center';
  tipContainer.style.gap = '1em';
  tipContainer.style.transition = 'background 0.3s, color 0.3s';

  // Tip text
  const tipText = document.createElement('span');
  tipText.id = 'fitness-tip-text';
  tipText.textContent = tips[Math.floor(Math.random() * tips.length)];
  tipText.style.fontWeight = '600';

  // Button
  const tipBtn = document.createElement('button');
  tipBtn.textContent = 'New Tip';
  tipBtn.style.background = 'linear-gradient(90deg, #ff4f81 0%, #842222 100%)';
  tipBtn.style.color = '#fff';
  tipBtn.style.border = 'none';
  tipBtn.style.borderRadius = '0.7em';
  tipBtn.style.padding = '0.5em 1.2em';
  tipBtn.style.fontWeight = 'bold';
  tipBtn.style.cursor = 'pointer';
  tipBtn.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.10)';
  tipBtn.style.fontSize = '1em';
  tipBtn.style.transition = 'background 0.2s, color 0.2s';
  tipBtn.onmouseover = function() {
    tipBtn.style.background = 'linear-gradient(90deg, #842222 0%, #ff4f81 100%)';
  };
  tipBtn.onmouseout = function() {
    tipBtn.style.background = 'linear-gradient(90deg, #ff4f81 0%, #842222 100%)';
  };

  tipBtn.onclick = function() {
    let newTip;
    do {
      newTip = tips[Math.floor(Math.random() * tips.length)];
    } while (newTip === tipText.textContent && tips.length > 1);
    tipText.textContent = newTip;
  };

  // Add elements
  tipContainer.appendChild(tipText);
  tipContainer.appendChild(tipBtn);
  document.body.appendChild(tipContainer);

  // Responsive for small screens
  function updateTipContainerStyle() {
    if (window.innerWidth < 500) {
      tipContainer.style.fontSize = '0.65rem';
      tipContainer.style.padding = '0.2em 0.3em 0.2em 0.3em';
      tipContainer.style.maxWidth = '60vw';
      tipContainer.style.width = 'auto';
      tipContainer.style.minWidth = '0';
      tipBtn.style.fontSize = '0.75em';
      tipBtn.style.padding = '0.2em 0.5em';
    } else {
      tipContainer.style.fontSize = '1.1rem';
      tipContainer.style.padding = '1em 2em 1em 2em';
      tipContainer.style.maxWidth = 'unset';
      tipContainer.style.width = 'auto';
      tipContainer.style.minWidth = '350px';
      tipBtn.style.fontSize = '1em';
      tipBtn.style.padding = '0.5em 1.2em';
    }
  }
  window.addEventListener('resize', updateTipContainerStyle);
  updateTipContainerStyle();
});
