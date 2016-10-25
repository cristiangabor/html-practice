function getStuff(){
  document.querySelector('#kid2').onclick=showmessage;
}

function showmessage(){
  alert('Datorita unor probleme tehnice nu pot accesa acest site');
}

window.onload=getStuff;
