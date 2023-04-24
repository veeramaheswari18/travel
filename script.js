//tooggle function//
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-x");
    navbar.classList.remove("active");
}


//search fun//
var search =document.querySelector('.searchform');
var searchbth = document.querySelector('#searchbth');
var closesearch = document.querySelector("#closesearch");

searchbth.onclick=()=>{
 search.classList.add('active');
}

closesearch.onclick=()=>{
    search.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');

    }
};
window.onload=()=>{
    
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');

    }
};

var swiper = new Swiper(".homeslider", {
    loop:true,
    grabcursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 var swiper = new Swiper(".productslider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
          },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
         
        },
        1024: {
          slidesPerView: 4,
          
        },
      },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
          },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
         
        },
      },
  });




  var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
          },
        768: {
          slidesPerView: 2,
          
        },
        991: {
          slidesPerView: 3,
         
        },
      },
  });