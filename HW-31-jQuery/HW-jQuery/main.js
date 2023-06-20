const stuffPrice = {
	"Read Meat": 5,
	"Royal canin": 7,
	"Beaph Care+": 4,
	"Tetra ReptoMin": 6
};

const stuffPosters = {
	"Read Meat": './images/Read Meat.jpg',
	"Royal canin": './images/Royal canin.jpg',
	"Beaph Care+": './images/Beaph Care+.jpg',
	"Tetra ReptoMin": './images/Tetra ReptoMin.jpg'

};

let productPrice = 0;
let productsCount = 0;

const calcOrderTotal = () => {
	return productPrice * productsCount;
};

const printOrderTotal = () => {
	$('.orderTotal').val(calcOrderTotal() + '$');
};

const updateStuffPoster = (stuff) => {
	$('.orderImg').attr('src', stuffPosters[stuff]);
};

$('.orderSelect').on('change', ({ target }) => {
	productPrice = stuffPrice[target.value];
	updateStuffPoster(target.value);
	printOrderTotal();
});

$('.orderCount').on('input', ({ target }) => {
	productsCount = target.value;
	printOrderTotal();
});

$('.orderBtn').on('click', (event) => {
	event.preventDefault();
	$('.wrap')[0].reset();
	init();
	$('.orderMsg').on('transitionend', ({ target }) => {
		target.classList.remove('show');
	});
	$('.orderMsg').addClass('show');
});

const init = () => {
	$('.orderSelect').trigger('change');
	$('.orderCount').trigger('input');
};

init();