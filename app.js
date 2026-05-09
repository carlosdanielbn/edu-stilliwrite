let contrast = false;
let motion = true;
let fontSize = 16;

function toggleContrast(){
document.body.style.background = contrast ? "#05070D" : "white";
document.body.style.color = contrast ? "white" : "black";
contrast = !contrast;
}

function toggleMotion(){
document.body.style.scrollBehavior = motion ? "smooth" : "auto";
motion = !motion;
}

function increaseText(){
fontSize += 2;
document.body.style.fontSize = fontSize + "px";
}

function decreaseText(){
fontSize -= 2;
document.body.style.fontSize = fontSize + "px";
}