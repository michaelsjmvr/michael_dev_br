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

var delayTime = 500; // Tempo de espera em milissegundos

var audioPlayer; // Variável para armazenar o elemento de áudio
var playPauseIcon; // Variável para armazenar o ícone de reprodução/pausa
var stats = false; // Definindo a variável stats

window.onload = function() {
    audioPlayer = document.getElementById('audioPlayer'); // Obtendo o elemento de áudio
    playPauseIcon = document.getElementById('playPauseIcon'); // Obtendo o ícone de reprodução/pausa

    delayTime(); // Chamar a função delayTime

    if (stats === true) {
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
};

function delayTime() {
    // Aqui você pode definir o que a função deve fazer
    // Se desejar, você pode adicionar um atraso aqui
}

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

