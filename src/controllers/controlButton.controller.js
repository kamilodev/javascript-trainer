export const disableButton = () => {
	document.getElementById('firstButton').style.pointerEvents = 'none';
	document.getElementById('secondButton').style.pointerEvents = 'none';
	document.getElementById('thirdButton').style.pointerEvents = 'none';

	document.getElementById('firstButton').disabled = true;
	document.getElementById('secondButton').disabled = true;
	document.getElementById('thirdButton').disabled = true;
	document.querySelector('.btn').classList.remove('hideMe');
};

export const enableButton = () => {
	document.getElementById('firstButton').style.pointerEvents = 'auto';
	document.getElementById('secondButton').style.pointerEvents = 'auto';
	document.getElementById('thirdButton').style.pointerEvents = 'auto';

	document.getElementById('firstButton').disabled = false;
	document.getElementById('secondButton').disabled = false;
	document.getElementById('thirdButton').disabled = false;
	document.querySelector('.btn').classList.add('hideMe');
};
