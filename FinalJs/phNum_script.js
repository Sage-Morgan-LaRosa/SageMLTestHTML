document.addEventListener('DOMContentLoaded', () => {
  const digitBoxes = Array.from(document.querySelectorAll('.digit-box'));
  const slider = document.getElementById('temp');

  // Function once pulled back slider for reset
  function resetDigits() {
    digitBoxes.forEach(box => {
      box.textContent = '0';
    });
  }

  // Function  randomly generate a digit (0-9)
  function randomDigit() {
    return Math.floor(Math.random() * 9);
  }

  // Function to update digits based on slider value
  function updateDigits(value) {
    if (value === -10) {
      // Reset all digits to 0 on pull back
      resetDigits();
    } else if (value === 0) {
      // just do nothing just nothing 
      return;
    } else {
      // update the digit and all digits behind it      const digitIndex = value / 10 - 1;
      if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
        // Assign digits in reverse order from right to left
        for (let i = digitBoxes.length - 1; i >= digitBoxes.length - 1 - digitIndex; i--) {
          digitBoxes[i].textContent = randomDigit();
        }
      }
    }
  }

  // Function to animate digits randomization for a duration, then update final digits
  //to do add flutter aniamtion if possible
  function animateRandomization(value, duration = 1000) {
    const digitIndex = value / 10 - 1;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      if (elapsed < duration) {
        // Randomize only digits up to digitIndex
        if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
          for (let i = digitBoxes.length - 1; i >= digitBoxes.length - 1 - digitIndex; i--) {
            digitBoxes[i].textContent = randomDigit();
          }
        }
        requestAnimationFrame(animate);
      } else {
        // After animation is completeed update digits based on slider value
        updateDigits(value);
      }
    }

    requestAnimationFrame(animate);
  }

  // Initialize digits to 0
  resetDigits();

  // Add event listener to slider input - remineder no digit update here
  slider.addEventListener('input', (event) => {
    // keep empty for now
  });

  // Prevent clicking on the slider track to jump to a position, allow only dragging
  slider.addEventListener('click', (event) => {
    event.preventDefault();
  });

  // Add event listener to slider mouseup - animate digits randomization and smoothly reset slider to 0
  slider.addEventListener('mouseup', (event) => {
    const value = parseInt(event.target.value, 10);
    animateRandomization(value);

    // Smoothly animate slider value back to 0
    const startValue = value;
    const duration = 300; // REMINDER animation duration in ms not s
    const startTime = performance.now();

    function animateSlider(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = startValue - progress * startValue;
      slider.value = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animateSlider);
      } else {
        slider.value = 0;
      }
    }

    requestAnimationFrame(animateSlider);
  });

  // Add event listener to save button to alert current phone number with custom message
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', () => {
    const phoneNumber = digitBoxes.map(box => box.textContent).join('');
    alert('Congrats on gambling for your number: ' + phoneNumber);
  });
});



// TO do list
// clean it up 
// add some elemnts to look more like a gambling maching 
// use this youtube https://www.youtube.com/watch?v=-rCFGNSK5aM for flutter aniuamtions
// fuck around with the slider animation to add more of a waighted feeling on it
