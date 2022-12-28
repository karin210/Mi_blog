//Philosophy page
const main = document.querySelector('.pages_main');
const idea1 = document.querySelector('#idea1');
const modal1 = document.querySelector('#idea1_modal');
const idea2 = document.querySelector('#idea2');
const modal2 = document.querySelector('#idea2_modal');
const idea3 = document.querySelector('#idea3');
const modal3 = document.querySelector('#idea3_modal');
const idea4 = document.querySelector('#idea4');
const modal4 = document.querySelector('#idea4_modal');
const idea5 = document.querySelector('#idea5');
const modal5 = document.querySelector('#idea5_modal');
const idea6 = document.querySelector('#idea6');
const modal6 = document.querySelector('#idea6_modal');
const idea7 = document.querySelector('#idea7');
const modal7 = document.querySelector('#idea7_modal');
const body = document.querySelector('.base');

main.addEventListener('click', open); 
function open(e) {
	if(e.target.classList.contains('main_ideas') || e.target.classList.contains('phil_h')) {
		const modalId = e.target.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
		body.style.overflow= 'hidden';
	} else if(e.target.classList.contains('phil_p-modal')) {
		const modalId = e.target.id;
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'none';
		body.style.overflow= 'initial';

	}


}
		
/*
!Bugs:
	1. You shouldn't be able to click on another philisophy's idea if a modal is open.
>>>	2. When you click on the bottom ideas the modal appears above.
	3. when you click on the idea's title modal doesn't appears.
*/


//Stories page
const story1 = document.querySelector('#story1');
const storyModal1 = document.querySelector('#story1_p');
const story2 = document.querySelector('#story2');
const storyModal2 = document.querySelector('#story2_p');
const story3 = document.querySelector('#story3');
const storyModal3 = document.querySelector('#story3_p');
const story4 = document.querySelector('#story4');
const storyModal4 = document.querySelector('#story4_p');
const story5 = document.querySelector('#story5');
const storyModal5 = document.querySelector('#story5_p');
const story6 = document.querySelector('#story6');
const storyModal6 = document.querySelector('#story6_p');
const story7 = document.querySelector('#story7');
const storyModal7 = document.querySelector('#story7_p');

main.addEventListener('click', function(e) {
		if(e.target.id.includes('story1')) {
			storyModal1.style.display= 'block';
			storyModal1.style.zIndex= '1';
		}
		else if(e.target.id.includes('story2')) {
			storyModal2.style.display= 'block';
			storyModal2.style.zIndex= '1';
		}
		else if(e.target.id.includes('story3')) {
			storyModal3.style.display= 'block';
			storyModal3.style.zIndex= '1';
		}
		else if(e.target.id.includes('story3')) {
			storyModal3.style.display= 'block';
			storyModal3.style.zIndex= '1';
		}
		else if(e.target.id.includes('story4')) {
			storyModal4.style.display= 'block';
			storyModal4.style.zIndex= '1';
		}
		else if(e.target.id.includes('story5')) {
			storyModal5.style.display= 'block';
			storyModal5.style.zIndex= '1';
		}
		else if(e.target.id.includes('story6')) {
			storyModal6.style.display= 'block';
			storyModal6.style.zIndex= '1';
		}
		else if(e.target.id.includes('story7')) {
			storyModal7.style.display= 'block';
			storyModal7.style.zIndex= '1';
		}

})

main.addEventListener('click', function(e) {
	if(e.target.id.includes('story1_p')) {
		storyModal1.style.display= 'none';
	}
	else if(e.target.id.includes('story2_p')) {
		storyModal2.style.display= 'none';
	}
	else if(e.target.id.includes('story3_p')) {
		storyModal3.style.display= 'none';
	}
	else if(e.target.id.includes('story4_p')) {
		storyModal4.style.display= 'none';
	}
	else if(e.target.id.includes('story5_p')) {
		storyModal5.style.display= 'none';
	}
	else if(e.target.id.includes('story6_p')) {
		storyModal6.style.display= 'none';
	}
	else if(e.target.id.includes('story7_p')) {
		storyModal7.style.display= 'none';
	}
})

//Articles page

const article1 = document.querySelector('#article1');
const articleModal1 = document.querySelector('#article1_p');
const article2 = document.querySelector('#article2');
const articleModal2 = document.querySelector('#article2_p');
const article3 = document.querySelector('#article3');
const articleModal3 = document.querySelector('#article3_p');
const article4 = document.querySelector('#article4');
const articleModal4 = document.querySelector('#article4_p');
const article5 = document.querySelector('#article5');
const articleModal5 = document.querySelector('#article5_p');
const article6 = document.querySelector('#article6');
const articleModal6 = document.querySelector('#article6_p');
const article7 = document.querySelector('#article7');
const articleModal7 = document.querySelector('#article7_p');

main.addEventListener('click', function(e) {
		if(e.target.id.includes('article1')) {
			articleModal1.style.display= 'block';
			articleModal1.style.zIndex= '1';
		}
		else if(e.target.id.includes('article2')) {
			articleModal2.style.display= 'block';
			articleModal2.style.zIndex= '1';
		}
		else if(e.target.id.includes('article3')) {
			articleModal3.style.display= 'block';
			articleModal3.style.zIndex= '1';
		}
		else if(e.target.id.includes('article3')) {
			articleModal3.style.display= 'block';
			articleModal3.style.zIndex= '1';
		}
		else if(e.target.id.includes('article4')) {
			articleModal4.style.display= 'block';
			articleModal4.style.zIndex= '1';
		}
		else if(e.target.id.includes('article5')) {
			articleModal5.style.display= 'block';
			articleModal5.style.zIndex= '1';
		}
		else if(e.target.id.includes('article6')) {
			articleModal6.style.display= 'block';
			articleModal6.style.zIndex= '1';
		}
		else if(e.target.id.includes('article7')) {
			articleModal7.style.display= 'block';
			articleModal7.style.zIndex= '1';
		}

})

main.addEventListener('click', function(e) {
	if(e.target.id.includes('article1_p')) {
		articleModal1.style.display= 'none';
	}
	else if(e.target.id.includes('article2_p')) {
		articleModal2.style.display= 'none';
	}
	else if(e.target.id.includes('article3_p')) {
		articleModal3.style.display= 'none';
	}
	else if(e.target.id.includes('article4_p')) {
		articleModal4.style.display= 'none';
	}
	else if(e.target.id.includes('article5_p')) {
		articleModal5.style.display= 'none';
	}
	else if(e.target.id.includes('article6_p')) {
		articleModal6.style.display= 'none';
	}
	else if(e.target.id.includes('article7_p')) {
		articleModal7.style.display= 'none';
	}
})
