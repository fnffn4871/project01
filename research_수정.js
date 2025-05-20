const bookData = [
  { title: "[협력연구]대학로 소규모 공연 집적 효과 분석", author: "기타", publisher: "공연정보팀", target: "2024.12" },
  { title: "뮤지컬 전문 프로듀서 글로벌 역향강화 프로그램 결과 자료집", author: "조사평가", publisher: "(재)예술경영지원센터", target: "2025.01" },
  { title: "미술품 시가감정 전문인력 양성 교육 모델 및 중장기 발전방안 연구 보고서", author: "연구", publisher: "예술경영지원센터", target: "2024.12" },
  { title: "2024 미술시장조사(2023년도 기준) 보고서", author: "조사평가", publisher: "(재)예술경영지원센터", target: "2024.12" },
  { title: " [KOPIS] 2024년 총결산 공연시장 티켓판매 현황 분석 보고서", author: "연구", publisher: "공연정보팀", target: "2025.02" },
  { title: "[KOPIS] 2024년 3분기 공연시장 티켓판매 현황 분석 보고서", author: "기타", publisher: "공연정보팀", target: "2024. 11." },
  
  
];

window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.book-swiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function () {
        updateInfo(0);
      },
      slideChange: function () {
        updateInfo(this.activeIndex);
      }
    }
  });

  function updateInfo(i) {
    const data = bookData[i];
    document.getElementById("title").textContent = data.title;
    document.getElementById("author").textContent = data.author;
    document.getElementById("publisher").textContent = data.publisher;
    document.getElementById("target").textContent = data.target;
    document.getElementById("customPage").textContent = `${i + 1} / ${bookData.length}`;
  }
});

new Swiper('.businessSwiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    1024:{
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev'
  }
});