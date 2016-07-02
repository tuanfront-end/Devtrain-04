
    $(document).ready(function() {
      //OWLCarolsel-Js-------------------------------------------------------
        var owl = $("#owl-demo");
        owl.owlCarousel({
            items : 4, //10 items above 1000px browser width
            itemsDesktop : [1000,4], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,3], // betweem 900px and 601px
            itemsTablet: [600,2], //2 items between 600 and 0
            itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
            pagination : false
        });

        $(".next").click(function(){
          owl.trigger('owl.next');
        })
        $(".prev").click(function(){
          owl.trigger('owl.prev');
        })
        // End owlCarousel_________-------------------------------------------------------
        

        // JS- Validate -Form-------------------------------------------------------
         $('#contact-form').validate({ 
           rules: {
               email: {
                   required: true,
                   email: true
               },
               name: {
                   required: true,
                   minlength: 3
               },
               Subject: {
                   required: true,
                   number: true,
                   minlength: 5
               },
               Description: {
                   required: true,
                   minlength: 10
               }
           }
        });
       // JS- Validate -Form-------------------------------------------------------
   
      // external js: isotope.pkgd.js-------------------------------------------------------
        $(".grid").isotope({
           itemSelector: '.grid-item-2',
           layoutMode: 'fitRows',
        });

        $('.portfolio-list li').click(function(){
          $('.portfolio-list li').removeClass('active');
          $(this).addClass('active');

          var selector =$(this).attr('data-filter');
          $(".grid").isotope({
            filter: selector,
            animationOption: {
              duration: 750,
              easing: 'linear',
              queue: false,
            }
          });
            return false;
        });

      //- END ISOTOPE---------------------------------------------------------------------

        //- Light box---------------------------------------------------------------------
         lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          })
         //- end Light box---------------------------------------------------------------------




        //  REnponsive-menu________----------------------------------------------------------
        var animationNameIn = 'animated bounceInLeft';
          var animationNameOut = 'animated hinge';
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

         $('.open-nav').click(function(){
          
              $(".reponsive-nav-list").css({"z-index":"100","width":"100%","display":"block","font-size":"40px",
                "text-align":"center"});
              $(".reponsive-nav-list").addClass(animationNameIn).one(animationEnd,function(){
                $(this).removeClass(animationNameIn);
             });
          });
          $('.close-nav').click(function(){
             $(".reponsive-nav-list").addClass(animationNameOut).one(animationEnd,function(){
               $(this).css("display","none");
               $(this).removeClass(animationNameOut);
            });
         });
        // End REnponsive-menu________----------------------------------------------------------


        // Flex slide2________----------------------------------------------------------
         $(window).load(function() {
            $('.flexslider').flexslider({
              animation: "slide"
            });
          });
         //end  Flex slide2________----------------------------------------------------------

          // Jquery for Class Naviar-sub-----------------------------------------------------------
          $("ul.my-nav li").has("ul").addClass("sub-menu");
          $("li.sub-menu").append("<i class='fa fa-chevron-down' aria-hidden='true'></i>");

          //End Jquery for Class Naviar-sub-----------------------------------------------------------


          //Jquey for Star chose !!!

         
          $('.inner-2 > i').mouseenter(function(){
             var i = $(this).index() +1;
             $('.inner-2 > i:lt('+i+')').addClass('cam');
          });
           
          $('.inner-2 > i').click(function(){
             $('.inner-2 > i').removeClass('cam2');
             var i = $(this).index() +1;
             $('.inner-2 > i:lt('+i+')').addClass('cam2');
          });
          

         $('.inner-2 > i').mouseout(function(){
           $('.inner-2 > i').removeClass('cam');
         });
       
          // $('.inner-2').each(function(){
              
               //$(this).mouseenter(function(){
                 
              //   console.log(this);  
              //    var i = $(this).index()+1;
                

              // });

              // $(this).find('> i').mouseout(function(){
              //   var i = $(this).index()+1;
              //    $('i:lt('+i+')').removeClass('red');
              // });

              // $(this).find('> i').click(function(){
              //    $(this).removeClass('bb');
              //    var i = $(this).index()+1;
              //     $('i:lt('+i+')').addClass('bb');
              // });



          // });
          //End Jquey for Star chose !!!









          
    });
