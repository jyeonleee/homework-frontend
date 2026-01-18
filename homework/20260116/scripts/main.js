const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const page3 = document.querySelector(".page-3")

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const current = document.querySelector(".current")

let currentPage = 1 // 초기세팅(첫번째 페이지 노출)

function showPage() {
  // 전부 숨김
  page1.classList.remove("is-active")
  page2.classList.remove("is-active")
  page3.classList.remove("is-active")

  // 현재 페이지만 보여줌
  if (currentPage === 1) {
    page1.classList.add("is-active")
  } else if (currentPage === 2) {
    page2.classList.add("is-active")
  } else {
    page3.classList.add("is-active")
  }

  // 숫자 변경 - current 요소 안에 있는 글자를 currentPage 값으로 바꿔라
  // textContent (텍스트변경)
  current.textContent = currentPage
}

// 다음
nextBtn.addEventListener("click", () => {
  if (currentPage < 3) {
    currentPage = currentPage + 1
    showPage()
  }
})

// 이전
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage = currentPage - 1
    showPage()
  }
})

// 처음 실행
showPage()