// Color Scheme
const colorSchemes = [
    { color1: "#7bf759", color2: "#200775"},
    { color1: "#f972d7", color2: "#001bb2"},
    { color1: "#ffe200", color2: "#198f4a"},
    { color1: "#ff8a00", color2: "#520076"},
    { color1: "#99ffba", color2: "#0079ff"},
    { color1: "#40b37c", color2: "#d40000"},
    { color1: "#d3ffff", color2: "#ff9500"},
    { color1: "#bfffaa", color2: "#ff00f5"},
    { color1: "#feff00", color2: "#0700c7"},
    { color1: "#b2f4b8", color2: "#242331"},
    { color1: "#f2ff00", color2: "#34c992"}
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
