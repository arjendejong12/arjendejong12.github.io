jQuery(document).foundation();

jQuery( document ).ready(function($) {
	$('.owl-portfolio').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		navText: ["<i class='fa fa-2x fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-2x fa-arrow-right' aria-hidden='true'></i>"],
		dots:true
	});

	var contentSections = $('section'),
		navigationItems = $('.nav__item');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.nav__item[href^="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('nav__item--active');
			}else {
				navigationItems.eq(activeSection).removeClass('nav__item--active');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});