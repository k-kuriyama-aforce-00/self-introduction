
$('.slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    
    responsive: [
      {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
  
 $('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

const MenuContainer = document.querySelector('.menu_container');
const MenuOpen = document.querySelector('.menu_open');
const MenuClose = document.querySelector('.menu_close');

const SPMenu = document.querySelector('.sample_sp_menu');			
	MenuContainer.addEventListener('click', () => {
		MenuOpen.classList.toggle('active');
		MenuClose.classList.toggle('active');
		SPMenu.classList.toggle('active');
	});