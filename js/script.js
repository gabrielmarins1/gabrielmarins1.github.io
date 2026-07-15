function abrirTelaLicenca() { document.getElementById('license-overlay').style.display = 'flex'; }
function fecharTelaLicenca() { document.getElementById('license-overlay').style.display = 'none'; }
function verificarLicenca() {
    const chave = document.getElementById('license-key').value;
    const chavesValidas = ['TROVAOPRO']; // Adicione as chaves aqui
    if(chavesValidas.includes(chave)) {
        alert('Acesso liberado.');
        fecharTelaLicenca();
    } else {
        alert('Chave inválida.');
    }
}
function sair() { window.location.reload(); }