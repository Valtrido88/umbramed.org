// LEGACY STUB — No usar en producción. La implementación activa está en academia-umbramed-secure.js
(function(){
  const FLAG='__UMBRAMED_LEGACY__';
  if(!window[FLAG]){
    console.warn('[UMBRAMED][LEGACY] Cargado academia-umbramed.js (stub). Debes cargar js/academia-umbramed-secure.js');
    window[FLAG]=true;
  }
  class LegacyAcademiaUmbramed{static init(){console.info('[UMBRAMED][LEGACY] init() ignorado (stub)');}}
  // No sobrescribir si ya existe la clase real
  if(!window.AcademiaUmbramed){window.AcademiaUmbramed=LegacyAcademiaUmbramed;}
})();
