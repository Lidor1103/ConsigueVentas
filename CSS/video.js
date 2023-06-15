// Cargar la API de YouTube de forma asíncrona
(function() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  })();
  
  // Función que se ejecuta al cargar la API de YouTube
  function onYouTubeIframeAPIReady() {
    // Crear el reproductor de YouTube
    var player = new YT.Player('player', {
      height: '315',
      width: '560',
      videoId: 'HKp05QW6OAY', // Reemplaza con el ID del video de YouTube
      playerVars: {
        rel: 0, // Desactivar la sección de "Más videos" al finalizar
      },
      events: {
        onStateChange: onPlayerStateChange
      }
    });
  }
  
  // Función que se ejecuta al cambiar el estado del reproductor de YouTube
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      // Ocultar la sección de "Más videos" al finalizar
      var moreVideosSection = document.getElementsByClassName('ytp-ce-element ytp-ce-video ytp-ce-bottom-panel');
      if (moreVideosSection.length > 0) {
        moreVideosSection[0].style.display = 'none';
      }
    }
  }
  