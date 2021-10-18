@@include('webpTest.js');
@@include('swiper.js');

const introSlider = new Swiper(".swiper-slider",{
    pagination:{
        el:".slider__pagination",
        clickable: true
    },
    navigation:{
        nextEl: ".slider__right_arrow",
        prevEl: ".slider__left_arrow",
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
})

const categoriesSlider = new Swiper(".categories-slider",{
    slidesPerView: 12,
    // loop: true,
    grabCursor: true,
    speed: 400,
    breakpoints:{
        320:{
            slidesPerView: 3,
        },
        800:{
            slidesPerView: 4,
        },
        900:{
            slidesPerView: 5,
        },
        1100:{
            slidesPerView: 6,  
        },
        1400:{
            slidesPerView: 8,  
        },
        1700:{
            slidesPerView: 11,  
        },
        1800:{
            slidesPerView: 12,  
        }
    }
})

const recommendSlider = new Swiper(".recommend-slider",{
    slidesPerView: 4,
    autoHeight: true,
    navigation:{
        nextEl: ".recommend__next",
        prevEl: ".recommend__prev",
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
            autoHeight: false,
        },
        1000:{
            slidesPerView: 3,
            autoHeight: true,
        },
        1700:{
            slidesPerView: 4,
        }
    }
})

const promotionsSlider = new Swiper(".promotions-slider",{
    slidesPerView: 6,
    autoHeight: true,
    spaceBetween: 25,

    navigation:{
        nextEl: ".promotions__next",
        prevEl: ".promotions__prev",
    },

    breakpoints:{
        320:{
            slidesPerView: 1,
            autoHeight: true,
        },

        800:{
            slidesPerView: 2,
            autoHeight: true,
        },

        1050:{
            slidesPerView: 3,
            autoHeight: true,
        },

        1314:{
            slidesPerView: 4,
            autoHeight: true,
        },
        1620:{
            slidesPerView: 5,
            autoHeight: true,
        },
        1900:{
            slidesPerView: 6,
        }
    }
})

const eventsSlider = new Swiper(".events-slider",{
    slidesPerView: 4,
    autoHeight: true,
    spaceBetween: 24,

    navigation:{
        nextEl: ".events__next",
        prevEl: ".events__prev",
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        850:{
            slidesPerView: 2,
        },
        1150:{
            slidesPerView: 3,
        },
        1300:{
            slidesPerView: 4,
        }
    }
})