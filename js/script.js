
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