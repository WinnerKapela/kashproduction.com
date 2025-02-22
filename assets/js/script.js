
          $(document).ready(function(){
            
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