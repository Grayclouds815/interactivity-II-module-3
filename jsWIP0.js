let r = 180;
let g = 160;
let b = 255;

let firstButton = document.getElementById('button1');

firstButton.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

function openNextButton(nextButtonId) {
  let nextButtonElement = document.getElementById(nextButtonId);
  nextButtonElement.classList.remove('hidden');

  let color = `rgb(${r}, ${g}, ${b})`;

  nextButtonElement.style.backgroundColor = color;

  if (textArea5) {
    textArea5.style.backgroundColor = color;
  }

  if (firstButton) {
    firstButton.style.backgroundColor = color;
    }       


  let fade = setInterval(() => {
    if (r > 60 || g > 40 || b > 120) {
      r -= 8;
      g -= 2;
      b -= 3;
//-- if i change the numbers here it changes the speed of color change
      let newColor = `rgb(${r}, ${g}, ${b})`;

      nextButtonElement.style.backgroundColor = newColor;

      if (textArea5) {
        textArea5.style.backgroundColor = newColor;
      }
    } else {
      clearInterval(fade);
    }
  }, 90);
}

