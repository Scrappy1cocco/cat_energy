var divisor = document.getElementById("divisor"),
	slider = document.getElementById("slider");

console.log('1');


function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}

slider.addEventListener('input', moreDivisor());

// console.log(moreDivisor());

