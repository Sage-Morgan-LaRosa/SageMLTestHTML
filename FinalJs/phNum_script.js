document.addEventListener('DOMContentLoaded', () => {
  const digitBoxes = Array.from(document.querySelectorAll('.digit-box'));
  const slider = document.getElementById('temp');
  const saveBtnContainer = document.querySelector('.save-button-container');
  const saveBtn = document.getElementById('saveBtn');
  const randomizeLimit = 5;
  const randomizeCounts = new Array(digitBoxes.length).fill(0);

  // Function once pulled back slider for reset
  function resetDigits() {
    digitBoxes.forEach(box => {
      box.textContent = '0';
      box.classList.remove('completed');
    });
    randomizeCounts.fill(0);
    saveBtnContainer.classList.remove('top');
  }

  // Function  randomly generate a digit (0-9)
  function randomDigit() {
    return Math.floor(Math.random() * 9);
  }

  // Check if all digits have hit the randomize limit
  function allDigitsCompleted() {
    return digitBoxes.every(box => box.classList.contains('completed'));
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
      const digitIndex = value / 10 - 1;
      if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
        // Assign digit only to the digitIndex position
        digitBoxes[digitBoxes.length - 1 - digitIndex].textContent = randomDigit();
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
        // Randomize only the digit at digitIndex and add highlight class
        if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
          const box = digitBoxes[digitBoxes.length - 1 - digitIndex];
          // Check if digit is locked (completed), if so skip randomization
          if (box.classList.contains('completed')) {
            requestAnimationFrame(animate);
            return;
          }
          box.textContent = randomDigit();
          box.classList.add('highlight');
        }
        requestAnimationFrame(animate);
      } else {
        // After animation is completeed update digits based on slider value and remove highlight class
        if (digitIndex >= 0 && digitIndex < digitBoxes.length) {
          const box = digitBoxes[digitBoxes.length - 1 - digitIndex];
          box.classList.remove('highlight');

          // Increment randomize count and check limit
          randomizeCounts[digitBoxes.length - 1 - digitIndex]++;
          if (randomizeCounts[digitBoxes.length - 1 - digitIndex] >= randomizeLimit) {
            box.classList.add('completed');
          }
        }
        updateDigits(value);

        // If all digits completed, move save button to top and enlarge
        if (allDigitsCompleted()) {
          saveBtnContainer.classList.add('top');
        }
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

  // Add event listener to slider mouseup - animate digits randomization and instantly reset slider to 0
  slider.addEventListener('mouseup', (event) => {
    const value = parseInt(event.target.value, 10);
    if (value === -10) {
      // Faster animation duration for reset
      animateRandomization(value, 100);
    } else {
      animateRandomization(value);
    }

    // Instantly reset slider value to 0
    slider.value = 0;
  });

  // Add event listener to save button to alert current phone number with custom message and reset digits after alert
  saveBtn.addEventListener('click', () => {
    const phoneNumber = digitBoxes.map(box => box.textContent).join('');
    alert('Congrats on gambling for your number: ' + phoneNumber);
    resetDigits();
  });
});



// TO do list
// clean it up 
// add some elemnts to look more like a gambling maching 
// use this youtube https://www.youtube.com/watch?v=-rCFGNSK5aM for flutter aniuamtions
// fuck around with the slider animation to add more of a waighted feeling on it
