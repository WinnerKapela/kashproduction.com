
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
                if ($(this).scrollTop() > 600) {
                  $('#navigation').addClass('header-scrolled');
                } else {
                  $('#navigation').removeClass('header-scrolled');
                }
              });

              let lastScrollTop = 0;
              const navbar = $('.navbar');

              $(window).on('scroll', function() {
             const scrollTop = $(this).scrollTop();

            if (scrollTop > lastScrollTop) {
                // Scrolling vers le bas
                
                    setTimeout(() => {
                        navbar.css('top', '-120px'); // Masquer la navbar
                    }, 100);
        
            
        } else {
            setTimeout(() => {
                   // Scrolling vers le haut
                    navbar.css({'top': '0px'}); 
                    navbar.css({'color': '#fff'}); // Afficher la navbar
                }, 300);
            
        }
        lastScrollTop = scrollTop;
    });

            // Événement de clic sur les liens
            $('.nav-link').on('click', function(event) {
              event.preventDefault(); // Empêcher le comportement par défaut

              // Récupérer l'ID de la section cible
              const target = $(this).attr('href');
              

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
            effect : "cards",
            speed: 600,
            loop: true,
            
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