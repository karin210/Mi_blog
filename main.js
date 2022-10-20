// Nav mouseover events
const links = document.querySelector('#nav');
links.addEventListener('mouseover', function(e) {
	if(e.target.matches('.links')) {
		e.target.style.backgroundColor= 'black';
	}
});

links.addEventListener('mouseout', function(e) {
	if(e.target.matches('.links')) {
		e.target.style.backgroundColor= 'transparent';
	}
});

