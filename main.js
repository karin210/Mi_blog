//Philosophy page
const main = document.querySelector('.pages_main');
const idea1 = document.querySelector('#idea1');
const modal1 = document.querySelector('#idea1_p');
const idea2 = document.querySelector('#idea2');
const modal2 = document.querySelector('#idea2_p');
const idea3 = document.querySelector('#idea3');
const modal3 = document.querySelector('#idea3_p');
const idea4 = document.querySelector('#idea4');
const modal4 = document.querySelector('#idea4_p');
const idea5 = document.querySelector('#idea5');
const modal5 = document.querySelector('#idea5_p');
const idea6 = document.querySelector('#idea6');
const modal6 = document.querySelector('#idea6_p');
const idea7 = document.querySelector('#idea7');
const modal7 = document.querySelector('#idea7_p');



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
		else if(e.target.id.includes('idea4')) {
			modal4.style.display= 'block';
			modal4.style.zIndex= '1';
		}
		else if(e.target.id.includes('idea5')) {
			modal5.style.display= 'block';
			modal5.style.zIndex= '1';
		}
		else if(e.target.id.includes('idea6')) {
			modal6.style.display= 'block';
			modal6.style.zIndex= '1';
		}
		else if(e.target.id.includes('idea7')) {
			modal7.style.display= 'block';
			modal7.style.zIndex= '1';
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
	else if(e.target.id.includes('idea4_p')) {
		modal4.style.display= 'none';
	}
	else if(e.target.id.includes('idea5_p')) {
		modal5.style.display= 'none';
	}
	else if(e.target.id.includes('idea6_p')) {
		modal6.style.display= 'none';
	}
	else if(e.target.id.includes('idea7_p')) {
		modal7.style.display= 'none';
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

