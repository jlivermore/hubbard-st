
$(document).ready(function() {

	var counter = 0;
	var links = ["https://www.google.com/maps/@32.3495455,-86.2968835,3a,75y,90.49h,93.77t/data=!3m6!1e1!3m4!1skiuuTKEm5ijNeIK7s2lyfQ!2e0!7i13312!8i6656", "https://www.google.com/maps/@32.9072857,-111.7326968,3a,75y,7.98h,90.8t/data=!3m6!1e1!3m4!1sOM7HVb94ekXJKHfG_qq1PQ!2e0!7i13312!8i6656"];

	$('.state').each(function(index){
		$(this).click(function(){
			$('.state').removeClass('red');
			$(this).addClass('red');
			counter = index + 1;
			links = index + 1;
			$('.map img').attr('src','images/'+counter+'.png');
			$('.google img').attr('src','images/streetview/'+counter+'.png');
			$('.letter img').attr('src','images/letter/'+counter+'.png');
		});
	});


/* changes the house icon */

	$('.redhouse').addClass('hide');

	$('.info').click(function(){
		$('.greyhouse').addClass('hide');
		$('.redhouse').addClass('show');		
	});

/* makes the letter appear and disappear */
	$('.info').click(function(){
		$('.writing').addClass('show');
	});

	$('.writing').click(function(){
		$('.writing').removeClass('show');
	});

/* makes About page appear and disappear */
	$('.pop').click(function(){
		$('.about').fadeToggle('show');
		$('.contact').removeClass('show');
	});

	$('.about').click(function(){
		$('.about').fadeToggle('show');
	});

/* makes Contact page appear and disappear */
	$('.popit').click(function(){
		$('.contact').fadeToggle('show');
		$('.about').removeClass('show');
	});

	$('.contact').click(function(){
		$('.contact').fadeToggle('show');
	});

});