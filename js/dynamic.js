function innerBg() {
	if ( $('.wrapper').height() > 1880 ) {
		$('.wrapper').css({
			'background-size': 'auto 100%'
		});
		if ( $('.wrapper').width() >= 1900 ) {
			$('.wrapper').css({
				'background-size': '100% 100%'
			});
		}
	}
	if ( $('.content').height() < $(window).height()-$('header').height()-$('footer').height()-$('.map-b').height() ) {
		$('.content').css({
			'min-height': $(window).height()-$('header').height()-$('footer').height()+'px'
		});
	}
	else {
		$('.content').css({
			'min-height': '0'
		});
	}
}
function slider() {
	var h = $(window).height()-$('header').height()-101;
	if ( h < 500 ) {
		h = 500;
	}
	if ( h > 1400 ) {
		h = 1400;
	}
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center',
		});
	})
	if ( h > 728 || $('.slider').width() > 1900 ) {
		$('.slider .temp > div').each(function() {
			$(this).css({
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
		});
	}
	else {
		$('.slider .temp > div').each(function() {
			$(this).css({
				'-webkit-background-size': 'auto auto',
				'-moz-background-size': 'auto auto',
				'-o-background-size': 'auto auto',
				'background-size': 'auto auto'
			});
		});
	}
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').css({
		'width': $('body').width()+'px',
		'height': h+'px'
	});
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.slider').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 800,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 1000
		});
	}
	else {
		$('.slider').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 800,
			slideEasing: 'easeInOutQuad',
			play: 0,
			pause: 0
		});
	}
	$('.slider .pagination li').each(function() {
		var c = $(this).index()+1;
		var t = $(this).parents('.slider').find('.container > div > div:nth-child('+c+')').attr('data-title');
		$(this).find('a').text(t);
	});
	if ( $('.slider').height() < 600 ) {
		$('.slider .prev, .slider .next').css({
			'margin-top': '40px'
		});
	}
}
function cards() {
	var m1 = ($('.contacts').width()/2-439)+455*((1750-$('.contacts .card.first').position().top+267)/1750);
	$('.contacts .card.first').css({
		'left': m1+'px'
	});
	var m2 = ($('.contacts').width()/2-439)+455*((1750-$('.contacts .card.second').position().top+39)/1750);
	$('.contacts .card.second').css({
		'left': m2+'px'
	});
}
$(document).ready(function() {
	if ( $('.card').length > 0 ) {
		$('.card .photos').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.card .photos').bind('swipeleft', function() {
			$('.card .photos .next').trigger('click');
		});
		$('.card .photos').bind('swiperight', function() {
			$('.card .photos .prev').trigger('click');
		});
	}
	if ( $('.wrapper').length > 0 ) {
		innerBg()
	}
	if ( $('.prenews').length > 0 ) {
		$('.prenews > div > ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.prenews .jcarousel-container').bind('swipeleft', function() {
			$('.prenews .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.prenews .jcarousel-container').bind('swiperight', function() {
			$('.prenews .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	if ( $('.core').length > 0 ) {
		var hhh = Math.ceil($(window).height()+101);
		if ( hhh < 1000 ) {
			hhh = 1000;
		}
		if ( hhh > 1500 ) {
			hhh = 1500;
		}
		$('.core, .links').css({
			'height': hhh+'px'
		});
		$(".core .links .num1").css({top:221/999*hhh+"px","margin-left":"-433px"}),$(".core .links .num2").css({top:458/999*hhh+"px","margin-left":"-487px"}),$(".core .links .num3").css({top:621/999*hhh+"px","margin-left":"-320px"}),$(".core .links .num4").css({top:847/999*hhh+"px","margin-left":"-356px"});var cX=2250,cY=$("canvas").height()/2,cH=$("canvas").height();$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:10.5,x1:cX-236,y1:-5,x2:cX+21,y2:cH+5}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-462,y1:0,x2:cX-532,y2:913*cH/999}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-748,y1:0,x2:cX-541,y2:816*cH/999}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-486,y1:322*cH/999,x2:cX-214,y2:377*cH/999}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-164,y1:293*cH/999,x2:cX-583,y2:cH}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-105,y1:515*cH/999,x2:20,y2:cH}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-63,y1:677*cH/999,x2:610,y2:cH}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX-19,y1:830*cH/999,x2:cX+130,y2:cH}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX+99,y1:879*cH/999,x2:cX+28,y2:cH}),$("canvas").drawLine({layer:!0,strokeStyle:"#000",strokeWidth:.5,x1:cX+49,y1:963*cH/999,x2:cX+202,y2:cH}),$("canvas").drawLine({layer:!0,name:"hover1",strokeStyle:"rgba(0,0,0,0)",strokeWidth:9.5,closed:!0,x1:cX-465,y1:97*cH/999,x2:cX-210,y2:97*cH/999,x3:cX-163,y3:282*cH/999,x4:cX-217,y4:373*cH/999,x5:cX-482,y5:319*cH/999}),$("canvas").drawLine({layer:!0,name:"link1",x1:cX-465,y1:97*cH/999,x2:cX-210,y2:97*cH/999,x3:cX-163,y3:282*cH/999,x4:cX-217,y4:373*cH/999,x5:cX-482,y5:319*cH/999,closed:!0,cursors:{mouseover:"pointer"},mouseup:function(){$(".num1").addClass("active").siblings().removeClass("active"),$("canvas").animateLayer("hover1",{strokeStyle:"rgba(0,0,0,1)"},0),$("canvas").animateLayer("hover2",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover3",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover4",{strokeStyle:"rgba(0,0,0,0)"},0),$(".core .information").stop((!0)["true"]).fadeOut(500).siblings(".information.tab1").delay(250).fadeIn(500)},mouseover:function(){$(".num1").addClass("hover").siblings().removeClass("hover")},mouseout:function(){$(".core .links > div").removeClass("hover")}}),$("canvas").drawLine({layer:!0,name:"hover2",strokeStyle:"rgba(0,0,0,0)",strokeWidth:9.5,x1:cX-483,y1:326*cH/999,x2:cX-220,y2:379*cH/999,x3:cX-328,y3:563*cH/999,x4:cX-504,y4:603*cH/999,closed:!0}),$("canvas").drawLine({layer:!0,name:"link2",x1:cX-483,y1:326*cH/999,x2:cX-220,y2:379*cH/999,x3:cX-328,y3:563*cH/999,x4:cX-504,y4:603*cH/999,closed:!0,cursors:{mouseover:"pointer"},mouseup:function(){$(".num2").addClass("active").siblings().removeClass("active"),$("canvas").animateLayer("hover2",{strokeStyle:"rgba(0,0,0,1)"},0),$("canvas").animateLayer("hover1",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover3",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover4",{strokeStyle:"rgba(0,0,0,0)"},0),$(".core .information").stop((!0)["true"]).fadeOut(500).siblings(".information.tab2").delay(250).fadeIn(500)},mouseover:function(){$(".num2").addClass("hover").siblings().removeClass("hover")},mouseout:function(){$(".core .links > div").removeClass("hover")}}),$("canvas").drawLine({layer:!0,name:"hover3",strokeStyle:"rgba(0,0,0,0)",strokeWidth:9.5,x1:cX-323,y1:568*cH/999,x2:cX-103,y2:518*cH/999,x3:cX-64,y3:674*cH/999,x4:cX-430,y4:749*cH/999,closed:!0}),$("canvas").drawLine({layer:!0,name:"link3",x1:cX-323,y1:568*cH/999,x2:cX-103,y2:518*cH/999,x3:cX-64,y3:674*cH/999,x4:cX-430,y4:749*cH/999,closed:!0,cursors:{mouseover:"pointer"},mouseup:function(){$(".num3").addClass("active").siblings().removeClass("active"),$("canvas").animateLayer("hover3",{strokeStyle:"rgba(0,0,0,1)"},0),$("canvas").animateLayer("hover1",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover2",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover4",{strokeStyle:"rgba(0,0,0,0)"},0),$(".core .information").stop((!0)["true"]).fadeOut(500).siblings(".information.tab3").delay(250).fadeIn(500)},mouseover:function(){$(".num3").addClass("hover").siblings().removeClass("hover")},mouseout:function(){$(".core .links > div").removeClass("hover")}}),$("canvas").drawLine({layer:!0,name:"hover4",strokeStyle:"rgba(0,0,0,0)",strokeWidth:9.5,x1:cX-434,y1:756*cH/999,x2:cX-61,y2:680*cH/999,x3:cX+19,y3:cH-5,x4:cX-575,y4:cH-5,closed:!0}),$("canvas").drawLine({layer:!0,name:"link4",x1:cX-434,y1:756*cH/999,x2:cX-61,y2:680*cH/999,x3:cX+19,y3:cH-5,x4:cX-575,y4:cH-5,closed:!0,cursors:{mouseover:"pointer"},mouseup:function(){$(".num4").addClass("active").siblings().removeClass("active"),$("canvas").animateLayer("hover4",{strokeStyle:"rgba(0,0,0,1)"},0),$("canvas").animateLayer("hover1",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover2",{strokeStyle:"rgba(0,0,0,0)"},0).animateLayer("hover3",{strokeStyle:"rgba(0,0,0,0)"},0),$(".core .information").stop((!0)["true"]).fadeOut(500).siblings(".information.tab4").delay(250).fadeIn(500)},mouseover:function(){$(".num4").addClass("hover").siblings().removeClass("hover")},mouseout:function(){$(".core .links > div").removeClass("hover")}});
		$('canvas').css({
			'height': hhh+'px'
		});
		$('canvas').triggerLayerEvent('link2', 'mouseup');
		$('.scroll').css({
			'height': '101px'
		});
		$('.scroll h6').bind('click', function(event) {
			$('html, body').animate({
				scrollTop: $('.core').position().top+101+'px'
			}, 800, 'easeInOutQuad');
			event.preventDefault();
		});
		$('.core .information').each(function() {
			$(this).css({
				'top': $('.core').height()*18/999+101+'px'
			});
		});	
	}
	if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	if ( $('.contacts').length > 0 ) {
		var random = Math.ceil(Math.random()*3);
		$('.contacts').css({
			'background': 'url("./pic/city'+random+'.jpg") no-repeat center top',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'
		});
		cards();
	}
	$('.content .navigation li a').bind('click', function(event) {
		var t = $(this).attr('href');
		$(this).parents('.content').find('.tab[data-tab="'+t+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
		event.preventDefault();
	}).filter(':first').click();
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
			$(this).parent().addClass('focus');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
			if ( $(this).val().length > 0 ) {
				$(this).parent().addClass('complete').removeClass('focus');
			}
			else {
				$(this).parent().removeClass('focus complete');
			}
		});
	});
	$('.form p span').bind('click', function(event) {
		$(this).parent().find('input, textarea').focus();
		event.preventDefault();
	});
	$('.modal').append('<span class="close"></span>');
	$('[data-open]').bind('click', function(event) {
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(400);
		var h = $(window).scrollTop()+($(window).height()-t.outerWidth())/2;
		if ( h < 0 ) {
			h = 0;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(400);
		event.preventDefault();
	});
	$('.fade, .modal .close').bind('click', function(event) {
		$('.fade, .modal').stop(true,true).fadeOut(400);
		event.preventDefault();
	});
	/*$('.contacts .card').hover(
		function() {
			$(this).delay(200).queue(function(next) {
				$(this).addClass('active');
				next();
			});
		},
		function() {
			$(this).removeClass('active');
		}
	);*/
});
$(window).resize(function() {
	if ( $('.wrapper').length > 0 ) {
		innerBg()
	}
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.contacts').length > 0 ) {
		cards();
	}
});