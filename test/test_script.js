const valueToIndexMap = {
    10: 9,
    20: 8,
    30: 7,
    40: 6,
    50: 5,
    60: 4,
    70: 3,
    80: 2,
    90: 1,
    100: 0
};

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('temp');

    // Define each digit as its own variable
    let digit0 = '0';
    let digit1 = '0';
    let digit2 = '0';
    let digit3 = '0';
    let digit4 = '0';
    let digit5 = '0';
    let digit6 = '0';
    let digit7 = '0';
    let digit8 = '0';
    let digit9 = '0';

    const valueToIndexMap = {
        10: 9,
        20: 8,
        30: 7,
        40: 6,
        50: 5,
        60: 4,
        70: 3,
        80: 2,
        90: 1,
        100: 0
    };
    
    // Global variable to hold randomized mask for digits
    let randomizedMaskGlobal = new Array(10).fill(false);

    // Helper function to get all digits as an array
    function getDigitsArray() {
        return [digit0, digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9];
    }

    // Helper function to set digits from an array
    function setDigitsFromArray(arr) {
        digit0 = arr[0];
        digit1 = arr[1];
        digit2 = arr[2];
        digit3 = arr[3];
        digit4 = arr[4];
        digit5 = arr[5];
        digit6 = arr[6];
        digit7 = arr[7];
        digit8 = arr[8];
        digit9 = arr[9];
    }

    // Initialize slider value and phone number inputs
    slider.value = 0;
    displayDigits(getDigitsArray(), randomizedMaskGlobal);

    slider.addEventListener('mouseup', function() {
        const startValue = parseInt(slider.value, 10);
        const duration = 300; // animation duration in ms
        const startTime = performance.now();

        // Start interval to show random digits rapidly
        const randomInterval = setInterval(() => {
            const randomDigits = [];
            for (let i = 0; i < 10; i++) {
                randomDigits.push(Math.floor(Math.random() * 10).toString());
            }
            displayDigits(randomDigits, randomizedMaskGlobal);
        }, 50);

        function animateSlider(time) {
            const elapsed = time - startTime;
            if (elapsed < duration) {
                const progress = elapsed / duration;
                slider.value = Math.round(startValue * (1 - progress));
                requestAnimationFrame(animateSlider);
            } else {
                slider.value = 0;
                clearInterval(randomInterval);
                const newDigits = generateDigits(startValue);
                setDigitsFromArray(newDigits);
                displayDigitsWithReverse(getDigitsArray(), startValue);
            }
        }
        requestAnimationFrame(animateSlider);
    });

    function generateDigits(randomizationValue) {
        const totalDigits = 10;
        let digits = getDigitsArray(); // Start with current digits

        if (randomizationValue === -10) {
            // All zeros
            digits = new Array(totalDigits).fill('0');
            randomizedMaskGlobal = new Array(totalDigits).fill(false);
            return digits;
        } else if (randomizationValue === 0) {
            randomizedMaskGlobal = new Array(totalDigits).fill(false);
            return digits;
        } else if (randomizationValue === 100) {
            // Randomize all digits
            for (let i = 0; i < totalDigits; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            return digits;
        } else if (randomizationValue === 90) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 1; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 80) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 2; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 70) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 3; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 60) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 4; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 50) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 5; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[5] = false;
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 40) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 6; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[4] = false;
            randomizedMaskGlobal[5] = false;
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 30) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 7; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[3] = false;
            randomizedMaskGlobal[4] = false;
            randomizedMaskGlobal[5] = false;
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 20) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 8; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[2] = false;
            randomizedMaskGlobal[3] = false;
            randomizedMaskGlobal[4] = false;
            randomizedMaskGlobal[5] = false;
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        } else if (randomizationValue === 10) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 9; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            randomizedMaskGlobal = new Array(totalDigits).fill(true);
            randomizedMaskGlobal[1] = false;
            randomizedMaskGlobal[2] = false;
            randomizedMaskGlobal[3] = false;
            randomizedMaskGlobal[4] = false;
            randomizedMaskGlobal[5] = false;
            randomizedMaskGlobal[6] = false;
            randomizedMaskGlobal[7] = false;
            randomizedMaskGlobal[8] = false;
            randomizedMaskGlobal[9] = false;
            return digits;
        }       

        else {
            const digitIndex = valueToIndexMap[randomizationValue];
            if (digitIndex !== undefined) {
                digits[digitIndex] = Math.floor(Math.random() * 10).toString();
                randomizedMaskGlobal = new Array(totalDigits).fill(false);
                randomizedMaskGlobal[digitIndex] = true;
            }
            return digits;
        }
    }

function displayDigits(digits, randomizedMask, sliderDigitIndexThreshold = 9) {
    // Animate digit changes with flipping effect on digit boxes
    const wrappers = document.querySelectorAll('.phone-box-wrapper');
    let globalDigitIndex = 0;

    // Get current displayed digits to compare and hold non-randomized digits
    const currentDigits = [];
    wrappers.forEach(wrapper => {
        const digitBoxes = wrapper.querySelectorAll('.digit-box');
        digitBoxes.forEach(digitBox => {
            currentDigits.push(digitBox.textContent);
        });
    });

    for (let i = 0; i < 3; i++) {
        const wrapper = wrappers[i];
        if (!wrapper) continue;

        const newValue = i === 0 ? digits.slice(0, 3).join('') :
                         i === 1 ? digits.slice(3, 6).join('') :
                                   digits.slice(6, 10).join('');

        // Update digit boxes
        const digitBoxes = wrapper.querySelectorAll('.digit-box');
        for (let j = 0; j < digitBoxes.length; j++) {
            const digitBox = digitBoxes[j];
            const newDigit = newValue[j] || ' ';

            if (globalDigitIndex > sliderDigitIndexThreshold) {
                // Do not update digit or animate - keep static
            } else if (newDigit !== currentDigits[globalDigitIndex]) {
                // Animate flipping only if digit changes from current display and is randomized
                if (randomizedMask[globalDigitIndex]) {
                    // Randomly decide whether to animate flip
                if (Math.random() < 0.5) {
                    // Update digit without animation (removed flipping animation)
                    digitBox.textContent = newDigit;
                } else {
                    // Update digit without animation
                    digitBox.textContent = newDigit;
                }
                } else {
                    // Digit not randomized, update without animation
                    digitBox.textContent = newDigit;
                }
            }
            globalDigitIndex++;
        }
    }
}

function displayDigitsWithReverse(digits, sliderValue) {
        // Map slider values to digit indices (reverse of valueToIndexMap)

        const sliderDigitIndexThreshold = valueToIndexMap[sliderValue] !== undefined ? valueToIndexMap[sliderValue] : 9;


    if (sliderValue === 0) {
        displayDigits(digits, randomizedMaskGlobal, sliderDigitIndexThreshold);
    } else {
        displayDigits(digits.slice().reverse(), randomizedMaskGlobal, sliderDigitIndexThreshold);
    }
}


    // New function to position marker-rect elements to match slider markers
    function positionMarkerRects() {
        const sliderMarkersContainer = document.querySelector('.slider-markers');
        if (!sliderMarkersContainer) return;

        // Clear existing marker-rect elements
        sliderMarkersContainer.innerHTML = '';

        // Number of markers based on valueToIndexMap keys count plus one for zero marker
        const markersCount = Object.keys(valueToIndexMap).length + 1;

        // Create marker-rect elements equal to markersCount
        for (let i = 0; i < markersCount; i++) {
            const rect = document.createElement('div');
            rect.classList.add('marker-rect');
            rect.id = 'marker' + i;
            sliderMarkersContainer.appendChild(rect);
        }

        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;

        // Calculate spacing between markers
        const spacing = sliderWidth / (markersCount - 1);

        // Get width of a marker-rect element to center it
        const markerWidth = sliderMarkersContainer.querySelector('.marker-rect').offsetWidth;

        // Position each marker-rect
        for (let i = 0; i < markersCount; i++) {
            const rect = document.getElementById('marker' + i);
            const leftPos = spacing * i - markerWidth / 2;
            rect.style.position = 'absolute';
            rect.style.left = leftPos + 'px';
        }

        // Ensure the parent container is positioned relatively for absolute children
        sliderMarkersContainer.style.position = 'relative';
        sliderMarkersContainer.style.width = sliderWidth + 'px';
    }

    // Call on DOMContentLoaded
    positionMarkerRects();

    // Attach digits to markers by id
    function attachDigitsToMarkers() {
        const digits = getDigitsArray();
        const totalDigits = digits.length;
        for (let i = 0; i < totalDigits; i++) {
            const marker = document.getElementById('marker' + i);
            if (marker) {
                // Assign all digits in reverse order to markers
                const digitToAssign = digits[totalDigits - 1 - i];
                if (digitToAssign !== '0') {
                    marker.textContent = digitToAssign;
                } else {
                    marker.textContent = '';
                }
            }
        }
    }
    attachDigitsToMarkers();

    // Call on window resize to keep alignment responsive
    window.addEventListener('resize', positionMarkerRects);
});

// Preserve digits that are not randomized by wrapping generateDigits
(function() {
    const originalGenerateDigits = generateDigits;
    generateDigits = function(randomizationValue) {
        const previousDigits = getDigitsArray();
        const newDigits = originalGenerateDigits(randomizationValue);

        // Determine which digits are randomized based on randomizationValue
        // If randomizationValue is 0 or -10, no digits change, so return previousDigits
        if (randomizationValue === 0 || randomizationValue === -10) {
            return previousDigits;
        }

        // For values 10 to 100, determine which digits are randomized
        // Create a mask array indicating which digits are randomized
        const totalDigits = 10;
        let randomizedMask = new Array(totalDigits).fill(false);

        if (randomizationValue === 100) {
            randomizedMask.fill(true);
        } else if ([90,80,70,60,50,40,30,20,10].includes(randomizationValue)) {
            const count = totalDigits - (randomizationValue / 10);
            for (let i = 0; i < count; i++) {
                randomizedMask[i] = true;
            }
        } else {
            // Single digit randomization
            const digitIndex = valueToIndexMap[randomizationValue];
            if (digitIndex !== undefined) {
                randomizedMask[digitIndex] = true;
            }
        }

        // Combine previousDigits and newDigits based on randomizedMask
        const combinedDigits = previousDigits.map((digit, index) => {
            return randomizedMask[index] ? newDigits[index] : digit;
        });

        return combinedDigits;
    };
})();
