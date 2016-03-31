
(function() {
  var links = document.querySelectorAll('.links li a');

  var colors = ['rgb(0, 18, 255)', 'rgb(255, 0, 138)', 'rgb(0, 221, 141)', 'rgb(120, 0, 255)', 'rgb(255, 92, 0)', 'rgb(255, 48, 3)', 'rgb(255, 230, 3)'].sort(function() { return Math.random() - 0.5; });

  var intro = document.querySelector('.intro');
  var introBottom = intro.getBoundingClientRect().bottom + 10 || 120;

  var yOffset = introBottom + 20;
  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    link.style.color = colors[i % colors.length];

    link.style.position = 'absolute';
    link.style.top = yOffset + 'px';

    var x = Math.random() * Math.min(window.innerWidth / 2, 350) + 20;
    if (i % 2 === 0) {
      link.style.left = x + 'px';
    }
    else {
      link.style.right = x + 'px';
    }

    yOffset += (Math.random() * 30 + 120);
  }

  document.body.style.height = (yOffset + 300) + 'px';
})();
