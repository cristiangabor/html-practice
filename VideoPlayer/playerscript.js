function doFirst(){
  barSize=600;
  myMovie=document.getElementById('MyMovie');
  playButton=document.getElementById('playButton');
  mydefaultBar=document.getElementById('defaultBar');
  myprogressBar=document.getElementById('progressBar');

  playButton.addEventListener('click',playOrPause,false);
  mydefaultBar.addEventListener('click',clickedBar,false);
}

function playOrPause(){
  if(!myMovie.paused && !myMovie.ended){
    myMovie.pause();
    playButton.innerHTML='Play';
    window.clearInterval(updateBar);
  }else{
    myMovie.play();
    playButton.innerHTML="Pause";
    updateBar=setInterval(update,500,)
  }

}

function update(){
  if(!myMovie.ended){
    var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
    myprogressBar.style.width=size+'px';
  }else{
    myprogressBar.style.width='0px';
    playButton.innerHTML='Play';
    window.clearInterval(updateBar);
  }
}

function clickedBar(e) {
  if(!myMovie.paused && !myMovie.ended){
    var mouseX=e.pageX-mydefaulBar.offsetLeft;
    var newtime=mouseX*myMovie.duration/barSize;
    myMovie.currentTime=newtime;
    progressBar.style.width=mouseX+'px';
  }
}

window.addEventListener('load',doFirst,false);
