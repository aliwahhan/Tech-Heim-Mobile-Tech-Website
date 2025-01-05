var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
          loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetween: 10,

        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,

        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        }

    }


});
//==============================
var swiper = new Swiper('.product-sale_swiper', {
  
  loop: true,
  breakpoints: {
      1400: {
          slidesPerView: 4,
          spaceBetween: 30,
      },
      1200: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
      800: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      650: {
          slidesPerView: 3,
          spaceBetween: 5,
      },
      0: {
          slidesPerView: 1,
          spaceBetween: 10,
      }

  }

});

// =============================== Best Sellers
var swiper = new Swiper('.swiper-bestSellers', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
          loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetween: 10,

        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,

        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        }

    }
});

// =============================== Page Products
var swiper = new Swiper('.swiperProduct', {
 loop: true,
    breakpoints: {
        1400: {
            slidesPerView: 9,
            spaceBetween: 30,

        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 30,

        },
        800: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        650: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        0: {
            slidesPerView: 4,
            spaceBetween: 10,
        }

    }


});

