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
    spaceBetween: 24,
    grabCursor: true,
    speed: 400,

    breakpoints:{
        320:{
            slidesPerView: 3.7,
        },
        420:{
            slidesPerView: 4,  
        },
        540:{
            slidesPerView: 4.2,  
        },
        700:{
            slidesPerView: 5.5,  
        },
        900:{
            slidesPerView: 6.5,  
        },
        1100:{
            slidesPerView: 5,  
        },
        1200:{
            slidesPerView: 5.5, 
        },
        1300:{
            slidesPerView: 6.5, 
        },
        1400:{
            slidesPerView: 7, 
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
            slidesPerView: 2.15,
            autoHeight: true,
        },
        400:{
            slidesPerView: 2.3,
        },
        700:{
            slidesPerView: 2.3,
        },
        1000:{
            slidesPerView: 2,
        },
        1400:{
            slidesPerView: 3,
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
            slidesPerView: 2.2,
            autoHeight: true,
            spaceBetween: 8,
        },

        500:{
            slidesPerView: 2.4,
            autoHeight: true,
            spaceBetween: 8,
        },

        700:{
            slidesPerView: 2.8,
            autoHeight: true,
        },

        900:{
            slidesPerView: 3.4,
            autoHeight: true,
        },

        1101:{
            slidesPerView: 2.4,
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

if(document.documentElement.clientWidth > 700){
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
            600:{
                slidesPerView: 3,
            },
            750:{
                slidesPerView: 3.4,
            },
            950:{
                slidesPerView: 3.7,
            },
            1100:{
                slidesPerView: 2.3,
            },
            1300:{
                slidesPerView: 2.7,
            },
            1400:{
                slidesPerView: 3,
            },
            1600:{
                slidesPerView: 4,
            }
        }
    })
}

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

    breakpoints:{
        320:{
            pagination:{
                el: '.big_slider__pagination',
                clickable: true
            },
            navigation:{
                nextEl: ".slider__right_arrow",
                prevEl: ".slider__left_arrow",
            },
        },
        1100:{
            navigation:{
                nextEl: ".product__next",
                prevEl: ".product__prev",
            },
        }
    }
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

const loginPromotionsSlider = new Swiper(".login-promotions-slider",{
    slidesPerView: 2.5,
    autoHeight: true,
    spaceBetween: 25,
    breakpoints:{
        320:{
            slidesPerView: 2.1, 
            spaceBetween: 8,
        },
        350:{
            slidesPerView: 2.3, 
            spaceBetween: 8,
        },
        450:{
            slidesPerView: 2.5, 
            spaceBetween: 12,
        },
        700:{
            slidesPerView: 3.2, 
        },
        950:{
            slidesPerView: 2.2,
        },
        1100:{
            slidesPerView: 2.5,
        }
    }
})

// modals-----------------------------------------------
const changePassInput = document.getElementById("changePassInput")
const openChangePassInput = document.getElementById("openChangePassInput")

const textModal = document.getElementById("textModal")
const openTextModal = document.getElementById("openTextModal")

const openTextModalBtn = document.getElementById("openTextModalBtn")

const openChangePasswordModal = document.getElementById("openChangePasswordModal")
const changePasswordModal = document.getElementById("changePasswordModal")

const changePassTextModal = document.getElementById("changePassTextModal")
const openChangePassTextModal = document.getElementById("openChangePassTextModal")

const closeModal = document.querySelectorAll(".close_modal")

const openModalBtns = document.querySelectorAll(".openModalBtn")
const modal = document.getElementById("modal")

if(openChangePassInput && changePassInput){
    openChangePassInput.onclick = (e)=>{
        changePassInput.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>changePassInput.style.opacity = "1",50)
    
        return
    }
}

if(openTextModal && textModal){
    openTextModal.onsubmit = (e)=>{
        e.preventDefault()
        if(changePassInput){
            changePassInput.style.opacity = "0"
            document.body.style.overflow = "auto"
            setTimeout(()=>changePassInput.style.display = "none",300)
        }

        textModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>textModal.style.opacity = "1", 200)
        return
    }
}

if(openTextModalBtn && textModal){
    openTextModalBtn.onclick = (e)=>{
        e.preventDefault()
        if(changePassInput){
            changePassInput.style.opacity = "0"
            document.body.style.overflow = "auto"
            setTimeout(()=>changePassInput.style.display = "none",300)
        }

        textModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>textModal.style.opacity = "1", 200)
        return 
    }
}

if(openChangePassTextModal && changePassTextModal){
    openChangePassTextModal.onsubmit = (e)=>{
        e.preventDefault()

        if(changePasswordModal){
            changePasswordModal.style.opacity = "0"
            document.body.style.overflow = "auto"
            setTimeout(()=>changePasswordModal.style.display = "none",300)
        }

        changePassTextModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>changePassTextModal.style.opacity = "1", 200)
        return
    }
}

if(openChangePasswordModal && changePasswordModal){
    openChangePasswordModal.onclick = (e)=>{
        changePasswordModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>changePasswordModal.style.opacity = "1", 200)
        return 
    }
}

if(modal && openModalBtns){
    openModalBtns.forEach(el=>{
        el.addEventListener("click",()=>{
            if(textModal){
                textModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>textModal.style.display = "none",300)
            }
    
            modal.style.display = "flex"
            document.body.style.overflow = "hidden"
            setTimeout(()=>modal.style.opacity = "1", 200)
            return
        })
    })
}

if(closeModal){
    closeModal.forEach(el=>{
        el.addEventListener("click",()=>{
            if(changePassInput){
                changePassInput.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>changePassInput.style.display = "none",300)
            }
            
            if(textModal){
                textModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>textModal.style.display = "none",300)
            }

            if(changePasswordModal){
                changePasswordModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>changePasswordModal.style.display = "none",300)
            }

            if(changePassTextModal){
                changePassTextModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>changePassTextModal.style.display = "none",300)
            }

            if(modal){
                modal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>modal.style.display = "none",300)
            }

            return
        })
    })
}

// Opening the menu

const menuBtn = document.querySelectorAll("#menuBtn");
const menuPoppup = document.getElementById("menu_poppup");
const content = document.querySelector(".content");
const main_pop = document.querySelector(".main_poppup");

const mobilePoppup = document.querySelector(".mobile_poppup"); 
const mdPoppup = document.querySelector('.menu_poppup-md')
const mobileDefaultPoppups = document.querySelector(".menu_poppup-default_show"); 

const openedDefaultMenuPage = document.getElementById("menu_default_open_page")

if(!!openedDefaultMenuPage){
    if(document.documentElement.clientWidth > 1100){
            if(document.documentElement.clientWidth <= 1500){
                document.body.style.paddingLeft = `466px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
            }else{
                document.body.style.paddingLeft =  `566px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
            }

            if(main_pop){
                document.body.style.paddingLeft =  `466px`
            }
    }
}

let menuOpened = false;

const moveBody = (condition)=>{
    if(condition){
        if(document.documentElement.clientWidth > 1100){
            if(menuOpened && !!openedDefaultMenuPage){
                if(document.documentElement.clientWidth <= 1500){
                    menuPoppup.style.left = "-100%"
                    menuOpened = false
                    return
                }else{
                    menuPoppup.style.left = "-100%"
                    menuOpened = false
                    return
                }
            }
            else if(menuOpened){
                if(document.documentElement.clientWidth <= 1500){
                    document.body.style.paddingLeft = "0px"
                    document.body.style.marginLeft = "96px"
                    document.body.classList.remove("mn_opened") 
        
                    content.style.paddingLeft = "24px"
                    menuPoppup.style.left = "-100%"
                    menuOpened = false
                    return
                }else{
                    document.body.style.paddingLeft = "0px"
                    document.body.style.marginLeft = "96px"
                    document.body.classList.remove("mn_opened") 
        
                    content.style.paddingLeft = "64px"
                    menuPoppup.style.left = "-100%"
                    menuOpened = false
                    return
                }
            } 
            else{
                if(document.documentElement.clientWidth <= 1500){
                    document.body.style.paddingLeft = `466px`
                    document.body.classList.add("mn_opened")
                    document.body.style.marginLeft = "0px"
                    content.style.paddingLeft = "24px"
                    menuPoppup.style.left = "0"
                    menuOpened = true
                }else{
                    document.body.style.paddingLeft =  `566px`
                    document.body.classList.add("mn_opened")
                    document.body.style.marginLeft = "0px"
                    content.style.paddingLeft = "24px"
                    menuPoppup.style.left = "0"
                    menuOpened = true
                }
    
                if(main_pop){
                    document.body.style.paddingLeft =  `466px`
                }
            }
        }else{
            if(document.documentElement.clientWidth <= 1100 && document.documentElement.clientWidth > 600){
                if(mdPoppup){
                    if(menuOpened){
                        mdPoppup.style.left = "-200%"
                        mdPoppup.style.bottom = "initial"
                        document.body.style.overflow = "auto"   
                        menuOpened = false
                        return
                    }
                    if(document.documentElement.clientWidth <= 700){
                        mdPoppup.style.top = "66px"
                        mdPoppup.style.left = "0px"
                        mdPoppup.style.bottom = "0px"
                        document.body.style.overflow = "hidden"     
                        menuOpened = true
                        return
                    }else{
                        mdPoppup.style.top = "85px"
                        mdPoppup.style.left = "0px"
                        mdPoppup.style.bottom = "0px"  
                        document.body.style.overflow = "hidden"     
                        menuOpened = true
                        return
                    }
                }else{
                    if(menuOpened){
                        menuPoppup.style.left = "-200%"
                        menuPoppup.style.bottom = "initial"
                        document.body.style.overflow = "auto"   
                        menuOpened = false
                        return
                    }
                    if(document.documentElement.clientWidth <= 700){
                        menuPoppup.style.top = "66px"
                        menuPoppup.style.left = "0px"
                        menuPoppup.style.bottom = "0"
                        menuPoppup.style.bottom = "0px"
                        document.body.style.overflow = "hidden"     
                        menuOpened = true
                        return
                    }else{
                        menuPoppup.style.top = "85px"
                        menuPoppup.style.left = "0px"
                        menuPoppup.style.bottom = "0px"
                        document.body.style.overflow = "hidden"     
                        menuOpened = true
                        return
                    }
                }
            }else{
                if(menuOpened){
                    mobilePoppup.style.top = "66px"
                    mobilePoppup.style.left = "-200%"
                    mobilePoppup.style.bottom = "initial"
                    document.body.style.overflow = "auto"   
                    menuOpened = false
                    return
                }else{
                    menuPoppup.style.display = "none"
                    mobilePoppup.style.display = "block"
    
                    mobilePoppup.style.top = "66px"
                    mobilePoppup.style.left = "0px"
                    mobilePoppup.style.bottom = "0px"
                    document.body.style.overflow = "hidden"     
                    menuOpened = true
                    return
                }
            } 
        }
    }
}

menuBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        moveBody(!!menuPoppup)
    })
})

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

// Opening mobile catalog filter

const mobileFilterBtn = document.getElementById("mobile_filter_btn")
const mobileFilterCatalogPoppup = document.getElementById("filter_poppup")
const closeFilterPoppup = document.getElementById("close_filter_poppup")

if(mobileFilterCatalogPoppup){
    mobileFilterBtn.addEventListener("click",()=>{
        document.body.style.overflow = "hidden"
        mobileFilterCatalogPoppup.style.right = "0"
        setTimeout(()=>mobileFilterCatalogPoppup.style.left = "0",300)  
        document.body.style.overflow = "hidden"
    })

    closeFilterPoppup.addEventListener("click",()=>{
        document.body.style.overflow = "auto"
        mobileFilterCatalogPoppup.style.right = "-100%"
        mobileFilterCatalogPoppup.style.left = "initial"
    })
}

let lastScroll = 0;
const defaultOffset = 250;
const categoryPoppupTrigger = document.querySelector('.categoryPoppupTrigger');
const scrollTopBtn = document.getElementById("scroll_top_btn")

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => categoryPoppupTrigger.classList.contains('hide-category-trigger');

window.addEventListener('scroll', () => {
   if(categoryPoppupTrigger){
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            categoryPoppupTrigger.classList.add('hide-category-trigger');
        }
        else if(scrollPosition() < lastScroll && containHide()){
            //scroll up
            categoryPoppupTrigger.classList.remove('hide-category-trigger');
        }

        lastScroll = scrollPosition();
   }
   if(scrollTopBtn){
       if(window.scrollY > 700){
            scrollTopBtn.classList.remove("scroll_top_btn-hide")
       }else{
        scrollTopBtn.classList.add("scroll_top_btn-hide")
       }
   }
})

scrollTopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

// Profile file input

const profileFileInput = document.getElementById("file_inp")
const gallery = document.getElementById('gallery')
const fileName = document.getElementById("file_name")
const fileLabel = document.getElementById("file_label")

let file;
let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

if(profileFileInput){

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
          let img = document.createElement('img')
          img.src = reader.result
          console.log(img)
          gallery.innerHTML = ""
          gallery.appendChild(img)
        }
    }

    profileFileInput.addEventListener("change",()=>{
        let file = profileFileInput.files[0]
        let fileType = file.type;

        if(validExtensions.includes(fileType)){
            previewFile(file)

            if(profileFileInput.value){
                fileName.textContent = profileFileInput.value;
            }
        } else{
            alert("Это не картинка")
        }
        
    })

    fileLabel.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    fileLabel.addEventListener("drop",(e)=>{
        e.preventDefault();

        file = e.dataTransfer.files[0]

        let fileType = file.type;

        if(validExtensions.includes(fileType)){
            previewFile(file)
        }else{
            alert("Это не картинка")
        }
    })
}

function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view_password');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view_password');
		input.setAttribute('type', 'password');
	}
	return false;
}

// Initial opened poppup
const openedMenuPage = document.getElementById("menu_open_page")

if(openedMenuPage){
    if(document.documentElement.clientWidth > 1100){
        if(menuOpened){
            if(document.documentElement.clientWidth <= 1500){
                document.body.style.paddingLeft = "0px"
                document.body.style.marginLeft = "96px"
                document.body.classList.remove("mn_opened") 
    
                content.style.paddingLeft = "24px"
                menuPoppup.style.left = "-100%"
                menuOpened = false
                
            }else{
                document.body.style.paddingLeft = "0px"
                document.body.style.marginLeft = "96px"
                document.body.classList.remove("mn_opened") 
    
                content.style.paddingLeft = "64px"
                menuPoppup.style.left = "-100%"
                menuOpened = false
                
            }
        } 
        else{
            if(document.documentElement.clientWidth <= 1500){
                document.body.style.paddingLeft = `466px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
                menuPoppup.style.left = "0"
                menuOpened = true
            }else{
                document.body.style.paddingLeft =  `566px`
                document.body.classList.add("mn_opened")
                document.body.style.marginLeft = "0px"
                content.style.paddingLeft = "24px"
                menuPoppup.style.left = "0"
                menuOpened = true
            }

            if(main_pop){
                document.body.style.paddingLeft =  `466px`
            }
        }
    }
}

const toCartBtn = document.querySelectorAll('.to_cart_btn')

toCartBtn.forEach((btn)=>{
    const btnCount = btn.querySelector('.count');
    const toCartMsg = btn.querySelector('.to_cart_msg');

    btn.addEventListener('mouseover',()=>{
        btnCount.style.display = 'flex'
        toCartMsg.style.display = 'none'
    })

    btn.addEventListener('mouseleave',()=>{
        btnCount.style.display = 'none'
        toCartMsg.style.display = 'block'
    })
})

const showCategoriesButton = document.querySelector('#show_categories_button')

if(showCategoriesButton){
    showCategoriesButton.addEventListener('click',()=>{
        moveBody(!!menuPoppup)
    })
}