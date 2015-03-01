var scroll_pos,
	to_translate = $('#top').height();

function parallax(){
	if(scroll_pos < to_translate){
		$('.parallax-content').css({
			transform: 'translate3d(0,' + scroll_pos/2 + 'px, 0)',
			opacity: 1.3 - scroll_pos/to_translate,
		});
	}
}

$(window).on('scroll', function(){
	scroll_pos = window.pageYOffset;
	requestAnimationFrame(parallax);
});