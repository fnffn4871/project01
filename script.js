
    function showPair(key) {
  const ids = ['slideA', 'conA', 'slideB', 'conB','slideC', 'conC','slideD', 'conD'];

  // 모든 콘텐츠 숨기기
  ids.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  // 선택된 쌍만 보이기
  document.getElementById(`con${key}`).classList.remove('hidden');
  document.getElementById(`slide${key}`).classList.remove('hidden');
}

//section05 사업정보부분

let tab = document.querySelectorAll('.tab_btn');
    let tabContent = document.querySelectorAll('.tab_content');
    console.log(tab, tabContent)
    // 각 탭 요소에 클릭 이벤트 리스너 추가
    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener('click', function () {
        // 모든 탭에서 'active' 클래스 제거
        for (let j = 0; j < tab.length; j++) {
          tab[j].classList.remove('active');
          tabContent[j].classList.remove('active'); // 콘텐츠도 같이 초기화
        }

        // 클릭한 탭에만 'active' 클래스 추가
        tab[i].classList.add('active');

        // 해당 탭에 대응하는 콘텐츠만 보여줌
        tabContent[i].classList.add('active');
      });
    }