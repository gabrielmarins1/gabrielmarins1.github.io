document.addEventListener("DOMContentLoaded", () => {
    const licencaValida = localStorage.getItem('memorial_pro_key');
    if (licencaValida === 'TROVAO2026') { 
        document.getElementById('license-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
});

function verificarLicenca() {
    const key = document.getElementById('license-key').value;
    if (key === 'TROVAO2026') { 
        localStorage.setItem('memorial_pro_key', 'TROVAO2026');
        location.reload(); 
    } else {
        alert('Chave inválida. Entre em contacto pelo WhatsApp (34) 98897-3971');
    }
}

function sair() {
    localStorage.removeItem('memorial_pro_key');
    location.reload();
}