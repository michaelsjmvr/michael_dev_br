document.addEventListener('DOMContentLoaded', function() {
    var fillBars = document.querySelectorAll('.fill.my-class3');
    fillBars.forEach(function(fillBar) {
        var percentage = fillBar.getAttribute('data-percentage');
        fillBar.style.width = percentage + '%';
    });
});