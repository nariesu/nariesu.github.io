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
$(function () {
  $('.menu-toggle').on('click', function (e) {
    // prevent the default anchor click behavior (which causes scrolling)
    e.preventDefault();

    // scroll to the top when navigating away from the page
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    // switch the class on the previously active div to make it hidden
    $('.active-menu').removeClass('active-menu').addClass('inactive-menu');

    // switch the class on the new active div to show it
    var selectorForActiveMenu = $(this).attr('href');
    $(selectorForActiveMenu).removeClass('inactive-menu').addClass('active-menu');

    // reset background styles for all menu-toggle links
    $('.menu-toggle').removeClass('active-link');

    // apply the active link style to the clicked link
    $(this).addClass('active-link');
  });
});

