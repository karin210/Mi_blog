let main = document.querySelector('.pages_main');
let idea1 = document.querySelector('#idea1');
let modal1 = document.querySelector('#idea1_p');
let idea2 = document.querySelector('#idea2');
let modal2 = document.querySelector('#idea2_p');
let idea3 = document.querySelector('#idea3');
let modal3 = document.querySelector('#idea3_p');



main.addEventListener('click', function(e) {
		if(e.target.id.includes('idea1')) {
			modal1.style.display= 'block';
			modal1.style.zIndex= '1';
		}
		else if(e.target.id.includes('idea2')) {
			modal2.style.display= 'block';
			modal2.style.zIndex= '1';
		}
		else if(e.target.id.includes('idea3')) {
			modal3.style.display= 'block';
			modal3.style.zIndex= '1';
		}
})

main.addEventListener('click', function(e) {
	if(e.target.id.includes('idea1_p')) {
		modal1.style.display= 'none';
	}
	else if(e.target.id.includes('idea2_p')) {
		modal2.style.display= 'none';
	}
	else if(e.target.id.includes('idea3_p')) {
		modal3.style.display= 'none';
	}
})



