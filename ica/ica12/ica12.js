

const newQuoteButton = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const anwserButton = document.querySelector('#js-tweet').addEventListener('click', dispalyAW);
const Endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let current = {
    question:'',
    answer: '',
};

async function getQuote() {
    
    try{
        const response = await fetch(Endpoint);

        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();

        dispalyQuote(json.question);
        current.question = json.question;
        current.answer = json.answer;
    }

    catch(err){
        console.error(err);
        alert('Fail')
    }
}


function dispalyQuote(question) {
    const quoteTexta = document.querySelector('#js-quote-text');
    quoteTexta.textContent = current.question;
}

function dispalyAW(answer) {
    const quoteTextb = document.querySelector('#js-answer-text');
    quoteTextb.textContent = current.answer;
}


