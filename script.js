// Color Scheme
const colorSchemes = [
    { color1: "#7bf759", color2: "#200775"},
    { color1: "#f972d7", color2: "#000D57"},
    { color1: "#ff8a00", color2: "#35004C"},
    { color1: "#ECEC64", color2: "#040071"}
  ];
  
  window.onload = function() {
    // Choose a random color scheme from the array
   const colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    document.documentElement.style.setProperty('--color1', colorScheme.color1);
    document.documentElement.style.setProperty('--color2', colorScheme.color2);
  }

//Modal Action

//open and closing modal
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    var closeButton = modal.querySelector(".close");
    var audio = modal.querySelector(".audio");
    modal.style.display = "flex";
    closeButton.onclick = function() {
        modal.style.display ="none";
        audio.pause();
    }
    window.onclick = function(event) {
        if (event.target == modal) {
      modal.style.display = "none";
      audio.pause();
       }
    }
}

// Audio on hover
function PlaySound(soundobj) {
    var som=document.getElementById(soundobj);
    som.play();
}

function StopSound(soundobj) {
    var som=document.getElementById(soundobj);
    som.pause();
    som.currentTime = 0;
}
