   
// wrapper function
$(function() {

"use strict";   



// animated hamburger menu
var toggles = document.querySelectorAll(".animated-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
        console.log(this.id);
      //(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        $(this).hasClass("is-active") === true ?$(this).removeClass("is-active"):$(this).addClass("is-active");
    });
  }
  
    

}); // function wrappers