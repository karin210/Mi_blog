// Home's nav mouseover events
/*const links = document.querySelector('#nav');
links.addEventListener('mouseover', function(e) {
	if(e.target.matches('.links')) {
		e.target.style.backgroundColor= 'black';
	}
});

links.addEventListener('mouseout', function(e) {
	if(e.target.matches('.links')) {
		e.target.style.backgroundColor= 'transparent';
	}
});*/


let body = document.querySelector('body');
let picts = document.querySelector('img');
let legend = document.querySelector('p');
body.addEventListener('mouseover', function(e) {
	if(e.target.matches('img')) {
		legend.style.display= 'block';
	}})