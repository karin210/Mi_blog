//Philosophy page
const main = document.querySelector('.pages_main');
const idea1 = document.querySelector('#idea1');
const modal1 = document.querySelector('#idea1_p');
const idea2 = document.querySelector('#idea2');
const modal2 = document.querySelector('#idea2_p');
const idea3 = document.querySelector('#idea3');
const modal3 = document.querySelector('#idea3_p');



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

//Stories page
const story1 = document.querySelector('#story1');
const storyModal1 = document.querySelector('#story1_p');
const story2 = document.querySelector('#story2');
const storyModal2 = document.querySelector('#story2_p');
main.addEventListener('click', function(e) {
		if(e.target.id.includes('story1')) {
			storyModal1.style.display= 'block';
			storyModal1.style.zIndex= '1';
		}
		else if(e.target.id.includes('story2')) {
			storyModal2.style.display= 'block';
			storyModal2.style.zIndex= '1';
		}
	
})

main.addEventListener('click', function(e) {
	if(e.target.id.includes('story1_p')) {
		storyModal1.style.display= 'none';
	}
	else if(e.target.id.includes('story2_p')) {
		storyModal2.style.display= 'none';
	}
})

