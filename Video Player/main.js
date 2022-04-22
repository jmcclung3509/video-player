document.addEventListener("DOMContentLoaded", function() {startplayer(); } );


let player;

const video = document.getElementById("video-player")

function startplayer() {
    player = document.getElementById("video-player");
   player.controls = false;
}
function play() {
    player.play();
}

function pause() {
    player.pause()
}

function stop(){
    player.pause();
    player.currentTime = 0;
}

