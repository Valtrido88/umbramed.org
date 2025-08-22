// Sistema sencillo de versionado y busting de caché UmbraMed
(function(){
  window.UMBRA_BUILD_VERSION = '2025-08-22-01'; // Incrementar este valor al desplegar cambios
  const versionParam = 'v=' + window.UMBRA_BUILD_VERSION;
  function applyVersioning(){
    const nodes = [
      ...document.querySelectorAll('script[src]'),
      ...document.querySelectorAll('link[rel="stylesheet"][href]')
    ];
    nodes.forEach(el=>{
      const attr = el.tagName === 'SCRIPT' ? 'src' : 'href';
      let url = el.getAttribute(attr);
      if(!url) return;
      // Ignorar externos o ya versionados
      if(/^(https?:)?\/\//i.test(url) || url.startsWith('data:') || /[?&]v=/.test(url)) return;
      const sep = url.includes('?') ? '&' : '?';
      el.setAttribute(attr, url + sep + versionParam);
    });
    console.log('[UMBRA VERSION]', window.UMBRA_BUILD_VERSION, 'aplicada');
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', applyVersioning);
  } else {
    applyVersioning();
  }
})();
