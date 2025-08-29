(function(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js')
      .then(function(reg){ console.log('[PWA] SW registered', reg.scope); })
      .catch(function(err){ console.warn('[PWA] SW failed', err); });
    });
  }
})();
