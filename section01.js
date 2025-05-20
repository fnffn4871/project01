/* section01 알림/소식 */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let targetLink = document.querySelectorAll('.tab_menu a');
    let targetContent = document.querySelectorAll('#tab_content > div');
  
    for (let i = 0; i < targetLink.length; i++) {
      targetLink[i].addEventListener('click', function(e) {
        e.preventDefault(); // a 태그의 기본 동작 막기
  
        // 클릭된 링크의 href 속성에서 id 값 추출
        let orgTarget = e.target.getAttribute('href'); // 오타 수정
        let tabTarget = orgTarget.replace('#', '');
  
        // 모든 콘텐츠 숨기기
        for (let x = 0; x < targetContent.length; x++) {
          targetContent[x].style.display = 'none';
        }
  
        // 클릭된 탭에 해당하는 콘텐츠만 보이기
        document.getElementById(tabTarget).style.display = 'block'; // 오타 수정
  
        // active 클래스 제어
        for (let j = 0; j < targetLink.length; j++) {
          targetLink[j].classList.remove('active');
        }
        e.target.classList.add('active'); // 클릭한 요소에 active 추가
      });
    }
  
    // 첫 번째 탭 콘텐츠는 기본적으로 보여주기
    document.getElementById('tab1').style.display = 'block';