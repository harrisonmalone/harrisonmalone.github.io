const cards = document.querySelectorAll('.card-inner')
const content = document.querySelector('.content')
const infoToAppend = document.querySelector('.info-to-append')

cards.forEach((card, index) => {
  card.addEventListener('click', (e) => {
    removeContent()
    handleCard(index)
  })
})

const removeContent = () => {
  content.innerHTML = ''
}

const handleCard = (index) => {
  const infoNodes = infoToAppend.children
  const item = infoNodes[index].innerHTML
  content.innerHTML = item
}