

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    displayTodayFact();
});

// API endpoints
const Endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
const Endpointb = 'https://uselessfacts.jsph.pl/api/v2/facts/today';

// Button event listeners
document.querySelector('#js-new-quote').addEventListener('click', getFact);
document.querySelector('#js-tweet').addEventListener('click', displayTodayFact);

let current = {
    fact: ''
};

async function getFact() {
    try {
        const response = await fetch(Endpoint);
  
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();

        displayFact(json.text);
        current.fact = json.text;
        console.log(current.fact);
    }
    catch(err) {
        console.error(err);
        alert('Failed to fetch fact. Please try again.');
    }
}

function displayFact(fact) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.innerHTML = fact;
}

async function displayTodayFact() {
    console.log('Today\'s Fact button clicked'); // Debug log
    try {
        const response = await fetch(Endpointb);
        console.log('API response received', response); // Debug log
        
        if (!response.ok) {
            throw Error(response.statusText);
        }
        
        const json = await response.json();
        console.log('API data:', json); // Debug log
        
        const quoteText = document.querySelector('#js-quote-text');
        if (!quoteText) {
            console.error('Could not find quote text element');
            return;
        }

        const today = new Date();
        const dateStr = today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        quoteText.innerHTML = `Today's Fact (${dateStr}):<br>${json.text}`;
        quoteText.style.display = 'block'; // Ensure element is visible
    } catch (err) {
        console.error('Error fetching today\'s fact:', err);
        alert('Failed to fetch today\'s fact. Please try again.');
    }
}




