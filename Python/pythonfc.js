function getStuff(){
  var mylist= document.querySelectorAll('#kid2')
  mylist[1].onclick=showmessage;
  mylist[0].onclick=showmessage2;
}

function showmessage(){
  alert('Datorita unor probleme tehnice nu pot accesa acest site');
}

function showmessage2(){
  alert("Aceasta e a doua problema tehnica! BIP BIP !");
}
window.onload=getStuff;
