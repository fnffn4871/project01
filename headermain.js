
var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// //네비바 메뉴 클릭시 세부메뉴 펼쳐짐 (추후, 배경은 어둡게 처리하기)
// let navTab1 = document.getElementById('navTab1');
// let navWrap1 = document.getElementById('navWrap1');

// navTab1.addEventListener('mouseleave',()=>{
//   navWrap1.classList.add('navvisible');
// })
// navTab1.addEventListener('mouseover',()=>{
//   navWrap1.classList.remove('navvisible');
// })
// let navTab2 = document.getElementById('navTab2');
// let navWrap2 = document.getElementById('navWrap2');

// navTab2.addEventListener('click',()=>{
//   navWrap2.classList.toggle('navvisible');
// })

// let navTab3 = document.getElementById('navTab3');
// let navWrap3 = document.getElementById('navWrap3');

// navTab3.addEventListener('click',()=>{
//   navWrap3.classList.toggle('navvisible')
// })
// let navTab4 = document.getElementById('navTab4');
// let navWrap4 = document.getElementById('navWrap4');

// navTab4.addEventListener('click',()=>{
//   navWrap4.classList.toggle('navvisible')
// })
// let navTab5 = document.getElementById('navTab5');
// let navWrap5 = document.getElementById('navWrap5');

// navTab5.addEventListener('click',()=>{
//   navWrap5.classList.toggle('navvisible')
// })

// let navTab6 = document.getElementById('navTab6');
// let navWrap6 = document.getElementById('navWrap6');

// navTab6.addEventListener('click',()=>{
//   navWrap6.classList.toggle('navvisible')
// })
const navItems = document.querySelectorAll('.nav-item');
const submenu = document.getElementById('submenu');
const submenuItems = document.querySelectorAll('.submenu-item');
const gnbDim = document.querySelector('.gnb-dim');
let submenuTimeout;

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(submenuTimeout);
    submenu.style.display = 'block';
    gnbDim.style.display = 'block';

    const index = parseInt(item.dataset.index);

    // 서브메뉴 항목 모두 초기화
    submenuItems.forEach(i => i.classList.remove('active'));

    // 해당 메뉴에 해당하는 서브메뉴 항목에만 클래스 추가
    if (submenuItems[index]) {
      submenuItems[index].classList.add('active');
    }
  });

  item.addEventListener('mouseleave', () => {
    submenuTimeout = setTimeout(() => {
      submenu.style.display = 'none';
      gnbDim.style.display = 'none';
      submenuItems.forEach(i => i.classList.remove('active'));
    }, 300);
  });

  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submenu.style.display = 'block';
      gnbDim.style.display = 'block';

      const index = parseInt(item.dataset.index);
      submenuItems.forEach(i => i.classList.remove('active'));
      if (submenuItems[index]) {
        submenuItems[index].classList.add('active');
      }
    }
  });
});

submenu.addEventListener('mouseenter', () => {
  clearTimeout(submenuTimeout);
});
submenu.addEventListener('mouseleave', () => {
  submenuTimeout = setTimeout(() => {
    submenu.style.display = 'none';
    gnbDim.style.display = 'none';
    submenuItems.forEach(i => i.classList.remove('active'));
  }, 300);
});

//실패..왜?
// navTab1.addEventListener('click',()=>{
//   navWrap1.document.style.display = 'block';
// })
// navTab1.addEventListener('click',()=>{
//   navWrap1.document.style.display = 'block';
// }) 
// navTab1.addEventListener('mouseenter',()=>{
//    navWrap1.document.style.display = 'block';
//  })
//  navTab1.addEventListener('mouseleave',()=>{
//    navWrap1.document.style.display = 'none';
//  })

//사이드바 토글

let togglebtn = document.getElementById('togglebtn');
let sidetab = document.getElementById('sidetab');

togglebtn.addEventListener('click',()=>{
  sidetab.classList.toggle('sidetabvisible');
  togglebtn.classList.toggle('active');
})


// 
let topIcon = document.querySelector('.top-icon');
let sitemap = document.getElementById('sitemap-section');
let siteIcon = document.querySelector('.site-icon');
console.log(siteIcon)

topIcon.addEventListener('click', function(){
  sitemap.style.display = 'block';
})
siteIcon.addEventListener('click', function(){
  sitemap.style.display = 'none';
})

// 모바일 메뉴바

              let title01 = document.getElementById('title01');
              let con01 = document.getElementById('con01');
  
              title01.addEventListener('click', function(){
                  con01.classList.toggle('active')
              })
              let title02 = document.getElementById('title02');
              let con02 = document.getElementById('con02');
  
              title02.addEventListener('click', function(){
                  con02.classList.toggle('active')
              })
              let title03 = document.getElementById('title03');
              let con03 = document.getElementById('con03');
  
              title03.addEventListener('click', function(){
                  con03.classList.toggle('active')
              })
              let title04 = document.getElementById('title04');
              let con04 = document.getElementById('con04');
  
              title04.addEventListener('click', function(){
                  con04.classList.toggle('active')
              })
              let title05 = document.getElementById('title05');
              let con05 = document.getElementById('con05');
  
              title05.addEventListener('click', function(){
                  con05.classList.toggle('active')
              })
              let title06 = document.getElementById('title06');
              let con06 = document.getElementById('con06');
  
              title06.addEventListener('click', function(){
                  con06.classList.toggle('active')
              })
          
