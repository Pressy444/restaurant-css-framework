
  $(document).ready(function(){
    $('#monCarousel').carousel(); // Initialise le carousel
    
    // Gère la navigation lorsque vous cliquez sur les éléments de pagination
    $('.pagination li').on('click', function(){
      var targetSlide = $(this).attr('data-slide-to');
      $('#monCarousel').carousel(parseInt(targetSlide));
    });
    
    // Met à jour la classe active sur les éléments de pagination lorsque le carousel change de diapositive
    $('#monCarousel').on('slide.bs.carousel', function (e) {
      $('.pagination li').removeClass('active');
      $('.pagination li[data-slide-to="' + e.to + '"]').addClass('active');
    });
  });
