
let fontSize = 16;
let highContrast = false;
let reducedMotion = false;

function toggleAccessibilityPanel(){
document.getElementById('accessibility-panel').classList.toggle('active');
}

function increaseText(){
fontSize += 2;
document.body.style.fontSize = fontSize + 'px';
}

function decreaseText(){
fontSize = Math.max(12,fontSize-2);
document.body.style.fontSize = fontSize + 'px';
}

function toggleContrast(){
document.body.classList.toggle('high-contrast');
}

function toggleMotion(){
reducedMotion = !reducedMotion;
document.documentElement.style.scrollBehavior = reducedMotion ? 'auto' : 'smooth';
}

function toggleDyslexia(){
document.body.classList.toggle('dyslexia-font');
}

function toggleFocusMode(){
document.body.classList.toggle('focus-mode');
}

const revealElements = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.animate([
{opacity:0, transform:'translateY(50px)'},
{opacity:1, transform:'translateY(0px)'}
],{
duration:900,
fill:'forwards'
});
}
});
},{threshold:0.2});

revealElements.forEach(el=>observer.observe(el));
