var getGif = function() {
    var gif = [];
    $('img').each(function() {
      var data = $(this).data('alt');
      gif.push(data);
    });
    return gif;
  }
  var gif = getGif();

  $('figure').on('click', function() {
 
    var $this   = $(this),
            $index  = $this.index(),
             
            $img    = $this.children('img'),
            $imgSrc = $img.attr('src'),
            $imgAlt = $img.attr('data-alt'),
            $imgExt = $imgAlt.split('.');

    $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);     
    var aAudio = new Audio('media/wavpoi1.wav');
    aAudio.play();        

  });

