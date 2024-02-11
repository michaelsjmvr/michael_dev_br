document.addEventListener('DOMContentLoaded', function() {
    var fillBars = document.querySelectorAll('.fill.my-class3');
    fillBars.forEach(function(fillBar) {
        var percentage = fillBar.getAttribute('data-percentage');
        fillBar.style.width = percentage + '%';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement1 = document.getElementById('targetElement1');
    var targetElement2 = document.getElementById('targetElement2');
    var targetElement3 = document.getElementById('targetElement3');
    var targetElement4 = document.getElementById('targetElement4');
    
    // Espera 2 segundos e, em seguida, muda o background-color
    setTimeout(function() {
      targetElement1.style.backgroundColor = 'rgba(9, 27, 42, 0.795)';
      targetElement2.style.backgroundColor = 'rgba(9, 27, 42, 0.795)';
      targetElement3.style.backgroundColor = 'rgba(9, 27, 42, 0.795)';
      targetElement4.style.backgroundColor = 'rgba(9, 27, 42, 0.795)';
    }, 500);
  });
  