var img=document.getElementById("fan");
var fanOnSound=new Audio("c:\\Users\\priya\\OneDrive\\Documents\\FanSound.mp4");
var fanOffSound=new Audio("c:\\Users\\priya\\OneDrive\\Documents\\FanOff.mp4");
function fan_on(){
    img.classList.add("rotate");
    img.style.animationDuration="0.2s";
    fanOnSound.loop=true;
    fanOnSound.play();
}
function fan_off(){
    img.style.animationDuration="2s";
    setTimeout(()=>img.classList.remove("rotate"),1000);
    fanOnSound.pause();
    fanOnSound.currentTime=0;
    fanOffSound.play();
}