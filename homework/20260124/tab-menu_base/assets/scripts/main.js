const dashboard = document.querySelector('.dashboard')
const tabBtn = dashboard.querySelectorAll('.tab-nav .tab-nav__button')
const tabPanel = dashboard.querySelectorAll('.tab-panel')

tabBtn.forEach((navBtn, index) => {
  navBtn.addEventListener('click', () => {

    tabBtn.forEach((btn) => {
      btn.classList.remove('tab-nav__button--active')
    })
    tabBtn[index].classList.add('tab-nav__button--active')

    tabPanel.forEach((panels) => {
      panels.classList.remove('tab-panel--active')
    })
    tabPanel[index].classList.add('tab-panel--active')
  })
})