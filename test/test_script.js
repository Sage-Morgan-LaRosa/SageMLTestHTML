document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('temp');
    const phoneBoxes = document.querySelectorAll('.phone-box');

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
    displayDigits(getDigitsArray());

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
            displayDigits(randomDigits);
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
            return digits;
        } else if (randomizationValue === 0) {
            return digits;
        } else if (randomizationValue === 100) {
            // Randomize all digits
            for (let i = 0; i < totalDigits; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 90) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 1; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 80) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 2; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 70) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 3; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 60) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 4; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 50) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 5; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 40) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 6; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 30) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 7; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 20) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 8; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        } else if (randomizationValue === 10) {
            // Change all digits except digit9
            for (let i = 0; i < totalDigits - 9; i++) {
                digits[i] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        }       

        else {
            // Map slider values to digit indices (10 -> 0, 20 -> 1, ..., 100 -> 9)
            const valueToIndexMap = {
                10: 0,
                20: 1,
                30: 2,
                40: 3,
                50: 4,
                60: 5,
                70: 6,
                80: 7,
                90: 8,
                100: 9
            };

            const digitIndex = valueToIndexMap[randomizationValue];
            if (digitIndex !== undefined) {
                digits[digitIndex] = Math.floor(Math.random() * 10).toString();
            }
            return digits;
        }
    }

    function displayDigits(digits) {
        phoneBoxes[0].value = digits.slice(0, 3).join('');
        phoneBoxes[1].value = digits.slice(3, 6).join('');
        phoneBoxes[2].value = digits.slice(6, 10).join('');
    }

    function displayDigitsWithReverse(digits, sliderValue) {
        if (sliderValue === 0) {
            displayDigits(digits);
        } else {
            displayDigits(digits.slice().reverse());
        }
    }


    // New function to position marker-rect elements to match slider markers
    function positionMarkerRects() {
        const markerRects = document.querySelectorAll('.marker-rect');
        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;

        const markersCount = markerRects.length;
        if (markersCount === 0) return;

        // Assign ids to marker rects starting from 0
        markerRects.forEach((rect, index) => {
            rect.id = 'marker' + index;
        });

        // Calculate spacing between markers
        const spacing = sliderWidth / (markersCount - 1);

        // Get width of a marker-rect element to center it
        const markerWidth = markerRects[0].offsetWidth;

        markerRects.forEach((rect, index) => {
            // Calculate left position relative to slider container
            // Adjust leftPos to center the marker-rect on the tick
            const leftPos = spacing * index - markerWidth / 2;

            // Position the marker-rect relative to the slider container
            rect.style.position = 'absolute';
            rect.style.left = leftPos + 'px';
        });

        // Ensure the parent container is positioned relatively for absolute children
        const sliderMarkersContainer = document.querySelector('.slider-markers');
        if (sliderMarkersContainer) {
            sliderMarkersContainer.style.position = 'relative';
            sliderMarkersContainer.style.width = sliderWidth + 'px';
        }
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
