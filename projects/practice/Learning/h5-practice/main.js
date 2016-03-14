window.onload = function(){
  var music = document.getElementById('music');
  var desc = document.getElementById('desc');
  var audio = document.getElementsByTagName('audio')[0];
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');
  var pgLoading = document.getElementById('p2_loading');

  desc.className = 'play';

  music.onclick = function(){
    if (audio.paused) {
      audio.play();
      desc.className = 'play';
    }else{
      audio.pause();
      desc.className = '';
    };
  };

  audio.addEventListener('ended',function(){
    desc.className = '';
  },false);

  page1.onclick = function(){
    this.style.display = 'none';
    pgLoading.style.display = 'block';
    page2.style.display = 'block';

    setTimeout(function(){
      pgLoading.style.display = 'none';

      setTimeout(function(){
        page2.style.display = 'none';
        pgLoading.style.display = 'block';
        page3.className = 'page page3 slideUp';
      },5500)
    }, 1000);
  }


}
