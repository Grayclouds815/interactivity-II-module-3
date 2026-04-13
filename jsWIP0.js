
let brightness= 255; 

function openNextButton
(nextButtonId) { 
    let nextButtonElement = document.
    getElementById(nextButtonId);
    
    nextButtonElement.classList.
    remove('hidden');

    let color= `rgb (${brightness}, ${brightness}, ${brightness})`;
    nextButtonElement.style.
    backgroundColor= color;

    brightness -=50; 

}

