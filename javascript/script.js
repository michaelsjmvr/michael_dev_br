// JavaScript para alternar entre o menu header e o menu footer com base no tamanho da tela
window.addEventListener('resize', function () {
    if (window.innerWidth <= 576) {
        document.querySelector('.menu-header').style.display = 'none';
        document.querySelector('footer').style.display = 'block';
    } else {
        document.querySelector('.menu-header').style.display = 'block';
        document.querySelector('footer').style.display = 'none';
    }
});

// Executar uma vez na inicialização para definir o menu apropriado
if (window.innerWidth <= 576) {
    document.querySelector('.menu-header').style.display = 'none';
    document.querySelector('footer').style.display = 'block';
} else {
    document.querySelector('.menu-header').style.display = 'block';
    document.querySelector('footer').style.display = 'none';
}

window.onload = function() {
    var stats = true; // Definindo a variável stats

    audioPlayer.addEventListener('canplay', function() {
        setTimeout(function() {
            togglePlayPause(); // Inicia a reprodução após o tempo de espera
        }, 1000); // Delay de 1000 milissegundos (1 segundo)
    });
};

var audioPlayer = document.getElementById('audioPlayer');
var playPauseIcon = document.getElementById('playPauseIcon');

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        stats = true; // Atualizando a variável stats
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
        stats = false; // Atualizando a variável stats
    }
}
