// Importación resiliente de microbiología (multi-ruta)
(function(){
    document.addEventListener('DOMContentLoaded', async () => {
        const paths = [
            '/data/examen_microbiologia_importable.json',
            'data/examen_microbiologia_importable.json',
            './data/examen_microbiologia_importable.json'
        ];
        let loaded = false, lastError = null;
        for(const p of paths){
            try {
                const res = await fetch(p, {cache:'no-store'});
                if(res.ok){
                    const banks = await res.json();
                    if(Array.isArray(banks)){
                        banks.forEach(bank => {
                            if(window.academiaUmbramed && typeof window.academiaUmbramed.importQuestions==='function'){
                                window.academiaUmbramed.importQuestions(bank.questions, bank.name);
                            }
                        });
                        console.log('[Micro] Importación OK desde', p);
                        window.dispatchEvent(new CustomEvent('umbramed:microImportOk',{detail:{path:p}}));
                        loaded = true;
                        break;
                    }
                } else {
                    lastError = 'HTTP '+res.status+' '+p;
                }
            } catch(err){
                lastError = err.message;
            }
        }
        if(!loaded){
            console.warn('[Micro] Falló importación', lastError);
            window.dispatchEvent(new CustomEvent('umbramed:microImportFail',{detail:{error:lastError}}));
        }
    });
})();
