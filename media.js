// Picture
var pathname = location.pathname;
if (pathname == '/') {
    var picname = 'logo.png';
} else {
    var picname = pathname.substr(0, (pathname.length - 1)) + '.png';
    picname = picname.substr(1);
}
document.getElementById('pic').style.backgroundImage = 'url("' + picname + '")';

// Sound
function speak() {
    document.getElementById('sound-file').play();
}
