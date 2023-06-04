// hamburger
function hamburgerMenu() {
    var x = document.getElementById("hamburgerToggle");
    // var y = document.getElementById("hamburger")
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

// hamburger animation
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

// menu list  
$(function() {
    $('.menu-toggle').on('click', function() {

         // switch the class on the previously active div to make it hidden
         $('.active-menu').removeClass('active-menu').addClass('inactive-menu');

         // switch the class on the new active div to show it
         var selectorForActiveMenu = $(this).attr('href');
         $(selectorForActiveMenu).removeClass('inactive-menu').addClass('active-menu');
    });
});
  
