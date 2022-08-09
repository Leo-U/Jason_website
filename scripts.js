function addEvent(){
  document.body.addEventListener("click", play)
}
function play() {
 var audio = document.getElementById("audio");
 audio.play();
}
play();