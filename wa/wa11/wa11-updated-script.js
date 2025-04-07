const body =document.getElementById("body");
const btn = document.getElementById('BButton');

function changeBody() {
    btn.addEventListener('click', () => {
        
    })
  
  if (button.innerHTML === 'Turn on') {
    button.innerHTML = 'Turn Off';
    body.style.backgroundImage = "linear-gradient(to right, red , white, white, red)";
  } else {
    button.innerHTML = 'Turn on';
    body.style.backgroundImage = "linear-gradient(to right, red , white, white, red)";
  }
}

