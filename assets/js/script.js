
          $(document).ready(function(){
            
             // Back to top button
              $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                  $('.back-to-top').fadeIn('slow');
                } else {
                  $('.back-to-top').fadeOut('slow');
                }
              });
              $('.back-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
                return false;
              });

              $(window).scroll(function() {
                if ($(this).scrollTop() > 400) {
                  $('#navigation').addClass('header-scrolled');
                } else {
                  $('#navigation').removeClass('header-scrolled');
                }
              });

              let lastScrollTop = 0;
              const navbar = $('.navbar');
              const btnmenu = $('#btn-menu')

              $(window).on('scroll', function() {
             const scrollTop = $(this).scrollTop();

            if (scrollTop > lastScrollTop) {
                // Scrolling vers le bas
                
                    setTimeout(() => {
                        navbar.css('top', '-120px'); // Masquer la navbar
                        btnmenu.css({'background-color':'inherit'})
                    }, 100);
        
            
        } else {
            setTimeout(() => {
                   // Scrolling vers le haut
                    navbar.css({'top': '0px'}); 
                    navbar.css({'color': '#fff'}); // Afficher la navbar
                    btnmenu.css({'background':''})
                }, 300);
            
        }
        lastScrollTop = scrollTop;
    });

            // Événement de clic sur les liens
            $('.nav-link').on('click', function(event) {
              event.preventDefault(); // Empêcher le comportement par défaut
              // Récupérer l'ID de la section cible
              
                $('#menu').removeClass('navOn');
                $('#btn-menu-close').hide();
                $('#fondNoir').removeClass();
               
              const target = $(this).attr('href');
              
              $('.menu.active').removeClass('active')
              $('.nav-link').addClass('active');
              $('.accueil').click(function(){
                $('.menu.accueil').addClass('active');
                $('.nav-link.active').removeClass('active')
              })
              // Scroller vers la section cible
              $('html, body').animate({
                  scrollTop: $(target).offset().top
              }, 1500,'easeInOutExpo'); // Durée de l'animation
              
          });

            $('#btn-menu').click(function(){
                $('#menu').toggleClass('navOn');
                $('#btn-menu-close').show();
                $('#fondNoir').toggleClass('fondNoirOn');
                
            })
           const $func = function closeMenu(){
            $('#btn-menu-close').click(function(){
              $('#menu').removeClass('navOn');
              $('#btn-menu-close').hide();
              $('#fondNoir').removeClass();
              });
           } 
            $('#btn-menu-close').click(function(){
                $('#menu').removeClass('navOn');
                $('#btn-menu-close').hide();
                $('#fondNoir').removeClass();
            });
            $('#fondNoir').click(function(){
                $('#menu').removeClass('navOn');
                $('#btn-menu-close').hide();
                $('#fondNoir').removeClass();          
                
            });
          // Display form
          $('.a-contact').click(function(e){
            e.preventDefault();
            $('.formulaire').fadeIn(500);
            $('.formulaire').show(300);
            $('.bg-form').show();
            
          })
          $('#btn-contact-close').click(function(){
            $('.formulaire').fadeOut(500);
            $('.formulaire').hide(300);
            $('.bg-form').hide();
          })
          // FAQ section
            $(document).ready(function(){
              $('#one').click(function(){
                     $('.wrapper1').toggleClass('wrapper-one');   
                   })
                   $('#two').click(function(){
                       $('.wrapper2').toggleClass('wrapper-two');
                     
                   })
                   $('#three').click(function(){
                       $('.wrapper3').toggleClass('wrapper-three');
                   })
                   $('#four').click(function(){
                       $('.wrapper4').toggleClass('wrapper-four');
                   })
                   $('#five').click(function(){
                       $('.wrapper5').toggleClass('wrapper-five');
                   })
       
               })
          });
          const swiper = new Swiper(".mySwiper", {
      
            speed: 600,
            loop: true,
            autoplay: {
            delay: 5000,
            disableOnInteraction: false
            },
            slidesPerView: 3,
            spaceBetween: 25,
            centerSlide:'true',
            grabCursor:'true',
            fade:'true',
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets:true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints:{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            },
          });

          const swiper2 = new Swiper(".mySwiper2", {
            speed: 600,
            loop: true,
            
            slidesPerView: 1,
            spaceBetween: 25,
            centerSlide:'true',
            grabCursor:'true',
            fade:'true',
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets:true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints:{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              950: {
                slidesPerView: 1,
              },
            },

            
          });
         /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();