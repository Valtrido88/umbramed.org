// Sistema básico de autenticación reutilizable UMBRAMED
(function(){
    if(window.UmbraAuthCore) return; // Evitar doble carga

    const USERS = {
        'kike@umbramed.org': {password:'mola', role:'admin'},
        'valerio.trigos88@gmail.com': {password:'valerioM16AK47', role:'admin'}
    };

    const STORAGE_KEY = 'umbramed_auth_session';

    function getSession(){
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch(e){ return null; }
    }
    function setSession(data){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    function clearSession(){ localStorage.removeItem(STORAGE_KEY); }

    function ensureModal(){
        if(document.getElementById('loginModal')) return;
        const modal = document.createElement('div');
        modal.id='loginModal';
        modal.style.cssText='display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.55);z-index:3000;justify-content:center;align-items:center;padding:1rem;';
        modal.innerHTML=`<div style="background:#fff;padding:2rem 2rem 1.5rem;border-radius:14px;max-width:420px;width:100%;position:relative;box-shadow:0 15px 45px rgba(0,0,0,.25);font-family:system-ui,sans-serif;">
            <button type="button" onclick="closeLogin()" style="position:absolute;top:8px;right:10px;background:none;border:none;font-size:1.8rem;line-height:1;color:#C41E3A;cursor:pointer;font-weight:700;">×</button>
            <h2 style="color:#C41E3A;margin:0 0 1.2rem;font-size:1.4rem;text-align:center;letter-spacing:.5px;">ACCESO PRIVADO</h2>
            <form onsubmit="handleLogin(event)" style="display:flex;flex-direction:column;gap:.9rem;">
                <input id="username" type="email" autocomplete="username" placeholder="Email" required style="padding:.8rem 1rem;border:2px solid #e5e5e5;border-radius:8px;font-size:.95rem;">
                <input id="password" type="password" autocomplete="current-password" placeholder="Contraseña" required style="padding:.8rem 1rem;border:2px solid #e5e5e5;border-radius:8px;font-size:.95rem;">
                <button type="submit" style="margin-top:.3rem;background:linear-gradient(45deg,#C41E3A,#8B0000);border:none;color:#fff;padding:.85rem 1rem;font-weight:600;border-radius:8px;cursor:pointer;letter-spacing:.5px;">Entrar</button>
                <div id="loginError" style="display:none;color:#b00020;font-size:.8rem;font-weight:600;text-align:center;">Credenciales inválidas</div>
            </form>
            <div style="margin-top:1rem;text-align:center;font-size:.7rem;color:#666;">Acceso restringido. Uso interno formativo.</div>
        </div>`;
        document.body.appendChild(modal);
    }

    window.showLogin = function(){
        ensureModal();
        document.getElementById('loginModal').style.display='flex';
        setTimeout(()=>{const u=document.getElementById('username'); if(u) u.focus();},50);
    };
    window.closeLogin = function(){
        const m=document.getElementById('loginModal'); if(m) m.style.display='none';
    };
    window.handleLogin = function(e){
        e.preventDefault();
        const email = (document.getElementById('username').value||'').trim().toLowerCase();
        const pwd = document.getElementById('password').value;
        const rec = USERS[email];
        const err = document.getElementById('loginError');
        if(rec && rec.password === pwd){
            setSession({email, role: rec.role, ts:Date.now()});
            updateLoginUI();
            closeLogin();
            window.dispatchEvent(new CustomEvent('umbramed:login',{detail:{email, role:rec.role}}));
        } else {
            if(err){err.style.display='block'; err.textContent='Credenciales inválidas';}
        }
    };
    window.logoutUmbra = function(){
        clearSession();
        updateLoginUI();
        window.dispatchEvent(new CustomEvent('umbramed:logout'));
    };

    function updateLoginUI(){
        const container = document.getElementById('loginArea');
        if(!container) return;
        const session = getSession();
        if(session){
            container.innerHTML = `<div style="display:flex;align-items:center;gap:.5rem;">
                <span style="font-size:.8rem;color:#28a745;font-weight:600;">${session.email.split('@')[0]}</span>
                <button class="logout-btn" onclick="logoutUmbra()" style="background:linear-gradient(45deg,#444,#222);padding:.5rem .9rem;border:none;border-radius:6px;color:#fff;font-size:.65rem;letter-spacing:.5px;cursor:pointer;">LOGOUT</button>
            </div>`;
        } else {
            container.innerHTML = `<button class="login-btn" onclick="showLogin()">LOGIN</button>`;
        }
        secureProtectedAreas();
    }

    function secureProtectedAreas(){
        const session = getSession();
        document.querySelectorAll('[data-protected]')
            .forEach(el=>{
                if(session){
                    el.style.display='';
                } else {
                    el.style.display='none';
                }
            });
    }

    // Exponer núcleo
    window.UmbraAuthCore = {getSession, setSession, clearSession, updateLoginUI};

    document.addEventListener('DOMContentLoaded', () => {
        ensureModal();
        updateLoginUI();
    });
})();
