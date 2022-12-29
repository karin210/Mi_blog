//Philosophy page
const main = document.querySelector('.pages_main');
const body = document.querySelector('.base');

main.addEventListener('click', open1);

function open1(e) {
	if(e.target.classList.contains('main_ideas')) {
		const modalId = e.target.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
		body.style.overflow= 'hidden';
	} else if(e.target.classList.contains('phil_h')) {
		const modalId = e.target.parentNode.id + '' + '_modal';
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
*/


//Stories page
main.addEventListener('click', open2);

function open2(e) {
	if(e.target.classList.contains('main_stories')) {
		const modalId = e.target.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
	} else if(e.target.classList.contains('story_h')) {
		const modalId = e.target.parentNode.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
	} else if(e.target.classList.contains('story_p-modal')) {
		const modalId = e.target.id;
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'none';
	}
}


//Articles page
main.addEventListener('click', open3);

function open3(e) {
	if(e.target.classList.contains('main_articles')) {
		const modalId = e.target.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
		body.style.overflow= 'hidden';
	} else if(e.target.classList.contains('article_h')) {
		const modalId = e.target.parentNode.id + '' + '_modal';
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'block';
		getModal.style.zIndex= '1';
		body.style.overflow= 'hidden';
	} else if(e.target.classList.contains('article_p-modal')) {
		const modalId = e.target.id;
		const getModal = document.querySelector('#' + modalId);
		getModal.style.display= 'none';
		body.style.overflow= 'initial';
	} 

}
