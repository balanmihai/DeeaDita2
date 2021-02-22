var audio = document.getElementById('background_audio');

var audio = new Audio(),
    i = 0;
var playlist = new Array('song1d.mp3', 'song2d.mp3', 'song3d.mp3');

audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 0.2;
audio.loop = false;
audio.src = playlist[Math.floor(Math.random() * playlist.length)];
audio.play();

document.getElementById('un-mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;

}, false);