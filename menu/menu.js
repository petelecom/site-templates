var toggler = document.getElementById("toggle-container");
var toggleContents = document.getElementById("toggle-content");
document.addEventListener("click", function(){
//Apply a class intance to each navigation and set display to toggle: 
     toggleContents.classList.toggle("displayed");
});

window.onclick = function(event) {
    //Target the click event on the menu bar to allow the webpage body to track it: 
    if (!event.target.matches('#toggle-container')) {
      var dropdowns = document.getElementsByClassName("toggle-content");
      //Hide the navigations by looping through each of them: 
      for (var i = 0; i < dropdowns.length; i++) {
        var dropped = dropdowns[i];
        if (dropped.classList.contains('display')) {
          dropped.classList.remove('display');
        }
      }
    }
  }