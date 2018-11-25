var divisor = document.getElementById("divisor"),
	slider = document.getElementById("slider");


console.log('1');


function moveDivisor() { 
	divisor.style.width = slider.value+"%";
	console.log('2');
}

slider.addEventListener('input', moveDivisor);

// console.log(moreDivisor());

