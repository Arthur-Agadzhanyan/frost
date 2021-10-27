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
        1100:{
            slidesPerView: 6,  
        },
        1200:{
            slidesPerView: 5, 
        },
        1500:{
            slidesPerView: 8,  
        },
        1700:{
            slidesPerView: 10,
        },
    }
})
// document.querySelector(".categories-slider").offsetWidth
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
            slidesPerView: 2,
            autoHeight: true, 
        },
        1400:{
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

        1100:{
            slidesPerView: 2.3,
            autoHeight: true,
        },


        1200:{
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

const smallProductSlider= new Swiper(".small-product-slider",{
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    slideToClickedSlide: true,
    grabCursor: true,
    slidesPerGroup: true,

    direction: "vertical",
})

const bigProductSlider = new Swiper(".big-product-slider",{
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    spaceBetween: 24,
    slidesPerGroup: true,

    navigation:{
        nextEl: ".product__next",
        prevEl: ".product__prev",
    },
})


smallProductSlider.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = smallProductSlider.realIndex + 1;
    let currentSlide = smallProductSlider.slides[index_currentSlide]
    bigProductSlider.slideTo(index_currentSlide, 1000, false);
  });
  
bigProductSlider.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = bigProductSlider.realIndex + 4;
    let currentSlide = bigProductSlider.slides[index_currentSlide]
    smallProductSlider.slideTo(index_currentSlide, 1000, false);
});

const changeSlider = (slider, breakpoint)=>{
    console.log(typeof slider);
}

// Opening the menu

const menuBtn = document.getElementById("menuBtn");
const menuPoppup = document.getElementById("menu_poppup");
const content = document.querySelector(".content");
const main_pop = document.querySelector(".main_poppup");

let menuOpened = false;

if(menuPoppup){
    menuBtn.addEventListener("click",()=>{
        if(menuOpened){
            document.body.style.paddingLeft = "0px"
            document.body.style.marginLeft = "100px"
            document.body.classList.remove("mn_opened")
            

            content.style.paddingLeft = "64px"
            menuPoppup.style.left = "-100%"
            menuOpened = false
            return
        } else{
            if(document.documentElement.clientWidth <= 1500){
                document.body.style.paddingLeft =  `470px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
                menuPoppup.style.left = "0"
                menuOpened = true
            }else{
                document.body.style.paddingLeft =  `570px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
                menuPoppup.style.left = "0"
                menuOpened = true
            }
            
            if(main_pop){
                document.body.style.paddingLeft =  `470px`
            }
            
        }
    })
}


const filterGridBtn = document.getElementById("filter__grid_btn");
const filterListBtn = document.getElementById("filter__list_btn");
const catalogGrid = document.querySelector(".catalog__list")
const catalogList = document.querySelector(".catalog__large_list")

if(filterGridBtn && filterListBtn){
    filterGridBtn.addEventListener("click",()=>{
        filterGridBtn.classList.add("active")
        filterListBtn.classList.remove("active")

        catalogGrid.style.display = "flex"
        catalogList.style.display = "none"
    })
    filterListBtn.addEventListener("click",()=>{
        filterListBtn.classList.add("active")
        filterGridBtn.classList.remove("active")
        catalogGrid.style.display = "none"
        catalogList.style.display = "flex"
    })
}