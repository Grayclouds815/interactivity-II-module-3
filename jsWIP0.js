
let brightness = 255;

let firsetButton = document.
getElementById('button1');

firstButton.style.backgroundColor = 
`rgb(${brightness}, ${brightness}, 
${brightness})`;
;

brightness -= 50; // 

function openNextButton
(nextButtonId) {
  let nextButtonElement = document.getElementById(nextButtonId);


  nextButtonElement.classList.remove('hidden');


  let color = `rgb(${brightness}, ${brightness}, ${brightness})`;

  nextButtonElement.style.
  backgroundColor = color;

  textArea5.style.backgroundColor = color;


  brightness -= 50;

}
