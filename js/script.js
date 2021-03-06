$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$(function () {
  var menu = document.getElementById('menu'); // colocar em cache
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
      else menu.classList.remove('menuFixo');
  });
})();

