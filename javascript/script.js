// JavaScript para alternar entre o menu header e o menu footer com base no tamanho da tela
window.addEventListener('resize', function () {
    if (window.innerWidth <= 576) {
        document.querySelector('.menu-header').style.display = 'none';
        document.querySelector('.menu-footer').style.display = 'block';
    } else {
        document.querySelector('.menu-header').style.display = 'block';
        document.querySelector('.menu-footer').style.display = 'none';
    }
});

// Executar uma vez na inicialização para definir o menu apropriado
if (window.innerWidth <= 576) {
    document.querySelector('.menu-header').style.display = 'none';
    document.querySelector('.menu-footer').style.display = 'block';
} else {
    document.querySelector('.menu-header').style.display = 'block';
    document.querySelector('.menu-footer').style.display = 'none';
}