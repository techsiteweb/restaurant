$(document).ready(function(){
    $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    },
    // other options
  });
  $('body').scrollspy({target: ".navbar", offset: 80});
  
  //hide collapse nav-bar on click small devices
  $('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});



//Here we control on scroll depending on height
window.addEventListener("scroll", function(){
  // declare the scrolalble size and scrolled height variables
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = window.scrollY;
  
  // declare the obtained elements (a tag: nav) and (an id: menu-nav) variables
  var nav = document.getElementsByTagName("nav");
  var menuNav = document.getElementById("menu-nav");
  var menuLink = document.getElementsByClassName("menu-link");
  var concept = document.getElementsByClassName("concept");
  
  //Change Navbar height past 350px height
  if(scrolled >= 200) {
    nav[0].classList.add("shrink");
    concept[0].classList.add("concept-shrink");
    var i;
    for(i = 0; i < menuLink.length; i++) {
      menuLink[i].classList.add("menu-link-shrink");
    }
  } else {
    nav[0].classList.remove('shrink');
    concept[0].classList.remove("concept-shrink");
    for(i = 0; i < menuLink.length; i++) {
      menuLink[i].classList.remove("menu-link-shrink");
    }
  }
});


// ===== Smooth scrolling  =========
    //Store all the anchor tags with class .scroll in a variable. This way we retreive it once from the DOM
    
    var scrollLink = $(".scroll");
    scrollLink.click(function(e){
        e.preventDefault(); /*prevent the default behaviour of the selected element (scrollLink)*/
        $("body, html").animate({
        scrollTop: $(this.hash).offset().top - 68 // this will return the current element's distance (.offset()) from the top 
        }, 1000);                                 // - minus the height of the fixed top navbar    
    });
    
// =========== End of Smooth Scrolling Masonry Layout ============
  
// ========= Parallax Effect with Plugin ============

 // $("#header").parallax("50%", 0.2);
 // $("#second").parallax("50%", 0.2);
 // $(".shoe").parallax("50%", 0.4);

// ========= End of Parallax Effect with Plugin ============


// ========= Parallax Effect no Plugin ============

  $(window).scroll(function() {
    parallax();
    backToTop();
  });
  
  //With this Parallax function we change any of the css properties to an element.
  //Play with it and setup as needed.
  
  function parallax() {
    var wScroll = $(window).scrollTop(); //store in a variable the scroll distance from the top
    // console.log(wScroll);
    //We are changing the css vertical position with a variable, similar to: background-position: center 30px
    $(".parallax-bg").css("background-position", "center "+(wScroll*0.75)+"px"); 
    
     // if(wScroll > 3537) {
        //Here we change the css top postion with a variable, similar to: top: 10em;
       // $(".parallax-box").css("top", -17+(wScroll*0.005)+"em");
     // }
    
  }
  

// ========= End of Parallax Effect no Plugin ============


//==========  About us section ===========

  $(".flip-card-inner").click(function(){
  $(this).toggleClass("flip-card-now");
});

/*===========  Back to top button =====*/
    // $("#back-to-top").css({"visibility": "hidden"});
      
    function backToTop() {
      var wScroll = $(window).scrollTop(); //store in a variable the scroll distance from the top
      console.log(wScroll);
      if(wScroll >= 1200) {
        $("#back-to-top").css({"visibility": "visible"});
        console.log("visible");
      }  else  {
        $("#back-to-top").css({"visibility": "hidden"});
        console.log("hidden");
      }
    }



});