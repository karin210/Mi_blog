

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
