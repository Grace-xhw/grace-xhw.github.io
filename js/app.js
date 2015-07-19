$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage','4thPage', '5thPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Me', 'Skills', 'Project', 'Contact Me'],
    responsiveWidth: 900,
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#CF3D3D', '#ccddff'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1000,
    scroll: true
  });
});
