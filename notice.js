let rowsPrePage = 10;
let rows = document.querySelectorAll('tbody tr');

let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/rowsPrePage);
let numbers = document.querySelector('#numbers')

for(let i = 1; i<= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}

//클릭이벤트함수
let numberBtn = numbers.querySelectorAll('a')
numberBtn.forEach(function(item, idx){
  item.addEventListener('click', function(e){
    //클릭할 때마다 그 값을 e라고 하겠다. = 클릭이벤트니까
    e.preventDefault();
    console.log(item,idx)
    displayRow(idx)//클릭했을 때 이것에 대한 idx값을 가져와야함
  })
})
//테이블 10개씩 보여주는 함수 //(idx)순번을 받아올거임. 
function displayRow(idx){
  let start = idx * rowsPrePage; //시작인덱스
  let end = start + rowsPrePage;  //끝인덱스
  let rowsArray = [...rows];
  /* console.log(start);
  console.log(end);
  console.log(rowsArray); */
  //tr 다 지우기
  for(let row of rowsArray){
    row.style.display = 'none'
  }//모두 다 지워졌으니 이제 해당하는 행 (1클릭하면 1-10이런식으로 )만 보여줘야함.

  //클릭한 영역 해당하는 행만 보여주기
  //슬라이싱이용. slice(시작값, 끝값)
  let newRows = rowsArray.slice(start, end);
  for(let row of newRows){
    row.style.display = ''
  }
  
  // .active 추가
  for(let btn of numberBtn){
    btn.classList.remove('active')
  }//active삭제되었다가 아래 코드를 보고 그것에만 .active추가
  numberBtn[idx].classList.add('active');
  //numberBtn(페이지네이션 버튼인 a태그를 변수로 선언)[값].active 클래스가 추가됨.

}
displayRow(0); //1부터 10까지만 보여주겠다. (처음 보여지는 기본값으로)


//좌우버튼선택
let prevPageBtn = document.querySelector('.pagination .arrow-left')
let nextPageBtn = document.querySelector('.pagination .arrow-right')
//console.log(nextPageBtn, prevPageBtn)
let pageActiveIdx = 0; //현재 보고 있는 페이지 번호 그룹(0부터 시작)
let maxPageNum = 3; //한번에 보여줄 페이지 최대개수
//전부지우기(nb = numberBtn)
for(let nb of numberBtn){
  nb.style.display = 'none'
}
//현재 페이지 그룹에 해당하는 페이지 번호만 보여주기
function displayPage(num){
  //1. 모든페이지 번호 숨기기
  //전부지우기(nb = numberBtn)
  for(let nb of numberBtn){
    nb.style.display = 'none'
  }
  //2. 전체페이지 번호 그룹 개수
  //예를 들어서, 총 페이지가 10개이고, maxPageNum 3개 그룹이 4(0,1,2,3)
  let totalGroup = Math.ceil(pageCount / maxPageNum)
  //3. 현재 보고있는 그룹 num에 해당하는 시작/끝 계산
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  //4. 배열로 잘라내기
  let groupArr = [...numberBtn].slice(start, end)
  //5. 잘라낸것만 보여주기
  for(let btn of groupArr){
    btn.style.display = ''
  }
 /*  //6. 왼쪽 버튼 제어하기 
  //첫번째 그룹이면, 왼쪽버튼 숨기기. 아니면 보이게 하기
  if(pageActiveIdx === 0){
    prevPageBtn.style.display = 'none'
  }else{
    prevPageBtn.style.display = 'inline-block'
  }

  //7. 오른쪽 버튼 제어하기 
  //마지막 그룹이면, 오른쪽버튼 숨기기. 아니면 보이게 하기
  if(pageActiveIdx === totalGroup -1){
    nextPageBtn.style.display = 'none'
  }else{
    nextPageBtn.style.display = 'inline-block'
  } */
}
//오른쪽 버튼 클릭시 : 다음 페이지 그룹 보여주기
nextPageBtn.addEventListener('click',()=>{
  pageActiveIdx++; //오른쪽 버튼 누르면 다음 버튼으로 넘어가기
  displayPage(pageActiveIdx);
  displayRow(pageActiveIdx * maxPageNum);
})
//왼쪽 버튼 클릭시 : 이전 페이지 그룹 보여주기
prevPageBtn.addEventListener('click',()=>{
  pageActiveIdx--; //왼쪽 버튼 누르면 이전 버튼으로 넘어가기
  displayPage(pageActiveIdx)
  displayRow(pageActiveIdx * maxPageNum)
})
displayPage(0)