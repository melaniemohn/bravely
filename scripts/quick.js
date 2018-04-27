$(document).ready(function(){
	$('.hero-container').parallax({imageSrc: '../public/images/hero.jpg'});
	$('.how-it-works').parallax({imageSrc: '../public/images/iphone-purple.jpg'});
	$('.demo-button').click(function(){
		alert('Hi Ras!');
	});
});
