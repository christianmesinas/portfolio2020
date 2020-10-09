//======== Mobile Navigation =============//

// Select dom items
       const menuBtn =
           document.querySelector(".menu-btn");

       const menu =
           document.querySelector(".menu");

       const menuNav =
           document.querySelector(".menu-nav");

       const menuBranding =
           document.querySelector(".menu-branding");

       const navItems =
           document.querySelectorAll(".nav-item");

       // Set the initial state of the menu
       let showMenu = false;

       menuBtn.addEventListener("click", toggleMenu);

       function toggleMenu() {
           if (!showMenu) {
               menuBtn.classList.add("close");
               menu.classList.add("show");
               menuNav.classList.add("show");
               menuBranding.classList.add("show");
               navItems.forEach((item) =>
                   item.classList.add("show"));

               // Reset the menu state
               showMenu = true;
           } else {
               menuBtn.classList.remove("close");
               menu.classList.remove("show");
               menuNav.classList.remove("show");
               menuBranding.classList.remove("show");
               navItems.forEach((item) =>
                   item.classList.remove("show"));

               // Reset the menu state
               showMenu = false;
           }
       }


 //======== Jquery full page navigation =============//

            $(document).ready(function() {

                 $('#fullpage').fullpage({
                  sectionSelector: '.vertical-scrolling',
                  responsiveWidth: 740,
                  navigation: false,
                  slidesNavigation: true,
                  controlArrows: false,
                  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],

                });
              })

//======== Jquery skills section selector =============//

                jQuery(function($) {
                  var pop = $('.map-popup');
                  pop.click(function(e) {
                    e.stopPropagation();
                  });

                  $('a.marker').click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $(this).next('.map-popup').toggleClass('open');
                    $(this).parent().siblings().children('.map-popup').removeClass('open');
                  });

                  $(document).click(function() {
                    pop.removeClass('open');
                  });

                  pop.each(function() {
                    var w = $(window).outerWidth(),
                        edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
                    if( w < edge ) {
                      $(this).addClass('edge');
                    }
                  });
                });
