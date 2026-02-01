const body = document.querySelector('body')
const priceSection = body.querySelector('.pricing-section')
const planCards = priceSection.querySelectorAll('.plan-card')
const selectInfo = body.querySelector('.selection-info')

// 첫번째 작업
/* planCards.forEach((cardBtn) => {
  cardBtn.addEventListener('click', (e) => {
    const beforeSelected = priceSection.querySelector('.plan-card.selected')
    const selectCard = e.currentTarget

    if (beforeSelected) {
      beforeSelected.classList.remove('selected')
    }

    selectCard.classList.add('selected')
    selectInfo.classList.add('show')

    const planName = selectCard.dataset.plan;
    const planPrice = selectCard.dataset.price;

    selectInfo.innerHTML = `
      <strong class="highlight">${planName}</strong>
      플랜(<span>${planPrice}</span>)을 선택하셨습니다.
    `;
  })
}) */

// 두번째 작업 - 리팩토링
planCards.forEach((cardBtn) => {
  cardBtn.addEventListener('click', handleClick);
})

function handleClick(e) {
  const beforeSelected = priceSection.querySelector('.plan-card.selected')
  const selectCard = e.currentTarget

  if (selectCard.classList.contains('selected')) return
  
  if (beforeSelected) {
    beforeSelected.classList.remove('selected')
  }
  selectCard.classList.add('selected')
  selectInfo.classList.add('show')

  const planName = selectCard.dataset.plan
  const planPrice = selectCard.dataset.price

  selectInfo.innerHTML = `
    <strong class="highlight">${planName}</strong>
    플랜(<span>${planPrice}</span>)을 선택하셨습니다.
  `
}
