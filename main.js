let content = "Hello worl I'm John Doe!";
let i = 0;
const speed = 100;

function typeWriter(speed, target) {
  if (i < content.length) {
    document.getElementById(target).innerHTML += content.charAt(i);
    i++;
    setTimeout(function(){
      typeWriter(speed, target)
    }, speed);
  }
}

typeWriter(70, 'tw-effect-0');
