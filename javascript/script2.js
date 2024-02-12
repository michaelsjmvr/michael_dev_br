// JavaScript para alternar entre o menu header e o menu footer com base no tamanho da tela
window.addEventListener('resize', function () {
    if (window.innerWidth <= 576) {
        document.querySelector('caixa-principal').style.display = 'none';
        document.querySelector('footer').style.display = 'block';
    } else {
        document.querySelector('caixa-principal').style.display = 'block';
        document.querySelector('footer').style.display = 'none';
    }
});

// Executar uma vez na inicialização para definir o menu apropriado
if (window.innerWidth <= 576) {
    document.querySelector('caixa-principal').style.display = 'none';
    document.querySelector('footer').style.display = 'block';
} else {
    document.querySelector('caixa-principal').style.display = 'block';
    document.querySelector('footer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var fillBars = document.querySelectorAll('.fill.my-class3');
    fillBars.forEach(function(fillBar) {
        var percentage = fillBar.getAttribute('data-percentage');
        fillBar.style.width = percentage + '%';
    });
});