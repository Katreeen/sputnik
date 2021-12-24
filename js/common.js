"use strict";
document.addEventListener("DOMContentLoaded", () => {

  const itop = new Swiper('.itop__slider', {
    loop: false,
    speed: 800,
    navigation: {
      nextEl: '.itop .swiper-button-next',
      prevEl: '.itop .swiper-button-prev',
    },
  });
  
  const actual = new Swiper('.iactual__slider', {
    loop: false,
    speed: 800,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.iactual__nav .swiper-button-next',
      prevEl: '.iactual__nav .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  
  const spec = new Swiper('.ispec__slider', {
    loop: false,
    speed: 800,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.ispec__nav .swiper-button-next',
      prevEl: '.ispec__nav .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  
  const news = new Swiper('.inews__slider', {
    loop: false,
    speed: 800,
    slidesPerView: 5,
    spaceBetween: 34,
    navigation: {
      nextEl: '.inews__nav .swiper-button-next',
      prevEl: '.inews__nav .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 34
      }
    }
  });

  // custom scrollbar
  new SimpleBar(document.querySelector('.nav-box'), {
    autoHide: false
  });
  new SimpleBar(document.querySelector('.tab-content'), {
    autoHide: true
  });
  
  
  // Tabs header menu
  const tabs = document.querySelectorAll('.tabs button'),
        tabsContent = document.querySelectorAll('.tab-content .tab-item'),
        tabsParent = document.querySelector('.tabs');
    
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.remove('show', 'active');
    });
    tabs.forEach(item => {
      item.classList.remove('active');
    });
  }
  
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'active');
    tabs[i].classList.add('active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains('nav-link')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // header drop menu toggle
  const catalogToggler = document.querySelector('.navbar-toggler.catalog-btn');
  const dropMenu = document.querySelector('#catalog-menu');
  catalogToggler.addEventListener('click', () => {
    if (dropMenu.classList.contains('show')) {
      dropMenu.classList.remove('show');
      dropMenu.style.height = 0;
    } else {
      dropMenu.classList.add('show');
      dropMenu.style.height = `${dropMenu.scrollHeight}px`;
    }
  });

  // toggle search
  const togglerSearch = document.querySelector('.toggle-search'),
        searchForm = document.querySelector('.header__search');
  togglerSearch.addEventListener('click', () => {
      searchForm.classList.toggle('show');
  });
  
  // const ireviews = new Swiper('.ireviews__carousel', {
  //   loop: false,
  //   speed: 800,
    
  //   navigation: {
  //     nextEl: '.ireviews .swiper-button-next',
  //     prevEl: '.ireviews .swiper-button-prev',
  //   },
  // });

  // const inews = new Swiper('.inews__carousel', {
  //   loop: false,
  //   speed: 800,
  //   navigation: {
  //     nextEl: '.inews .swiper-button-next',
  //     prevEl: '.inews .swiper-button-prev',
  //   },
  // });

  // const team = new Swiper('.team__slider', {
  //   loop: false,
  //   speed: 800,
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: '.team .swiper-button-next',
  //     prevEl: '.team .swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     575: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     992: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  //   }
  // });

  // const cert = new Swiper('.cert__slider', {
  //   loop: false,
  //   speed: 800,
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: '.cert .swiper-button-next',
  //     prevEl: '.cert .swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     575: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 30
  //     },
  //   }
  // });
  // const reviews = new Swiper('.reviews__carousel', {
  //   loop: false,
  //   speed: 800,
  //   // slidesPerView: "auto",
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: '.reviews .swiper-button-next',
  //     prevEl: '.reviews .swiper-button-prev',
  //   },
  // });
  // const news = new Swiper('.news__carousel', {
  //   loop: false,
  //   speed: 800,
  //   slidesPerView: "auto",
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: '.news .swiper-button-next',
  //     prevEl: '.news .swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     400: {
  //       slidesPerView: "auto",
  //     },
  //   }
  // });

  // const getPaddingContainer = () => {
  //   const fullContainer = document.querySelectorAll('.js-pl');
  //   const paddingContainer = document.querySelector('.container').getBoundingClientRect();
  //   console.log(paddingContainer);
  //   fullContainer.forEach(item => {
  //     console.log(item);
  //     item.style.paddingLeft = `${paddingContainer.left+15}px`;
  //   });
  // };
  // getPaddingContainer();
  // window.addEventListener('resize', getPaddingContainer, true);


  // const addPhoto = document.getElementById('r-photo');
  // addPhoto.addEventListener('change', (event) => {
  //   const result = document.querySelector('.filename');
  //   result.textContent = `${event.target.value}`;
  // });
  
  //  // Add event listener
  //  document.addEventListener("mousemove", parallax);
  //  const elems = document.querySelectorAll(".parallax");

  //  // Magic happens here
  //  function parallax(e) {
  //      let _w = window.innerWidth/2;
  //      let _h = window.innerHeight/2;
  //      let _mouseX = e.clientX;
  //      let _mouseY = e.clientY;
  //      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  //      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  //      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  //      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  //    console.log(x);
  //    elems.forEach(item => {
  //     item.style.backgroundPosition = x;
  //    });
     
  //  }

});