/*
//Gallery's mouseover/mouseout events
let body = document.querySelector('body');
let picts = document.querySelector('img');
let legend = document.querySelector('p');
body.addEventListener('mouseover', function(e) {
	if(e.target.matches('#img1')) {
		document.querySelector('#pImg1').style.display= 'block';
	} 
	else if(e.target.matches('#img2')) {
		document.querySelector('#pImg2').style.display= 'block'
	} 
	else if(e.target.matches('#img3')) {
		document.querySelector('#pImg3').style.display= 'block'
	}
	else if(e.target.matches('#img4')) {
		document.querySelector('#pImg4').style.display= 'block'
	}
})

body.addEventListener('mouseout', function(e) {
	if(e.target.matches('#img1')) {
		document.querySelector('#pImg1').style.display= 'none';
	} 
	else if(e.target.matches('#img2')) {
		document.querySelector('#pImg2').style.display= 'none'
	} 
	else if(e.target.matches('#img3')) {
		document.querySelector('#pImg3').style.display= 'none'
	}
	else if(e.target.matches('#img4')) {
		document.querySelector('#pImg4').style.display= 'none'
	}
})