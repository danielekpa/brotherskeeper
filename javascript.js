// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navBarr");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
$(document).ready(function () { 
    $("ul.navbar-nav > li > a").click( 
      function (e) { 
        $("ul.navbar-nav > li").removeClass( 
          "active"); 
        $("ul.navbar-nav > li > a").css( 
          "color", ""); 

        $(this).addClass("active"); 
        $(this).css("color", "#FFBD59"); 
    }); 
}); 
