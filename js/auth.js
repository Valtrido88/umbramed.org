// Auth básico placeholder para evitar errores de carga
(function(){
    if(window.showLogin) return; // Ya definido
    window.showLogin = function(){
        const evt = new CustomEvent('umbramed:showLogin');
        window.dispatchEvent(evt);
        // Si academia está cargada, forzar scroll al app
        const app = document.getElementById('app');
        if(app) app.scrollIntoView({behavior:'smooth'});
    };
})();
