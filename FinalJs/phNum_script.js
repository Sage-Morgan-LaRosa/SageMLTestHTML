document.addEventListener('DOMContentLoaded', () => {
  const digitBoxes = Array.from(document.querySelectorAll('.digit-box'));
  const slider = document.getElementById('temp');

  // Function to reset all digits to 0
  function resetDigits() {
    digitBoxes.forEach(box => {
      box.textContent = '0';
    });
  }

  // Function to randomly generate a digit (0-9)
  function randomDigit() {
    return Math.floor(Math.random() * 9);
  }

  // Function to update digits based on slider value
  function updateDigits(value) {
    if (value === -10) {
      // Reset all digits to 0
      resetDigits();
    } else if (value === 0) {
      // Hold the current digits, do nothing
      return;
    } else {
      // For other values (10 to 100), update the corresponding digit and all digits behind it
      // Calculate digit index: slider value / 10 - 1 (0-based index)
      const digitIndex = value / 10 - 1;
      if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
        // Assign digits in reverse order from right to left
        for (let i = digitBoxes.length - 1; i >= digitBoxes.length - 1 - digitIndex; i--) {
          digitBoxes[i].textContent = randomDigit();
        }
      }
    }
  }

  // Initialize digits to 0
  resetDigits();

  // Add event listener to slider input - no digit update here, just visual update if needed
  slider.addEventListener('input', (event) => {
    // No digit update on input event
  });

  // Prevent clicking on the slider track to jump to a position, allow only dragging
  slider.addEventListener('click', (event) => {
    event.preventDefault();
  });

  // Add event listener to slider mouseup - update digits and smoothly reset slider to 0
  slider.addEventListener('mouseup', (event) => {
    const value = parseInt(event.target.value, 10);
    updateDigits(value);

    // Smoothly animate slider value back to 0
    const startValue = value;
    const duration = 300; // animation duration in ms
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = startValue - progress * startValue;
      slider.value = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        slider.value = 0;
      }
    }

    requestAnimationFrame(animate);
  });

  // Add event listener to save button to alert current phone number with custom message
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', () => {
    const phoneNumber = digitBoxes.map(box => box.textContent).join('');
    alert('Congrats on gambling for your number: ' + phoneNumber);
  });
});
