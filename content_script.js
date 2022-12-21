let keysPressed = {}
document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true

  if (keysPressed['Shift']) {
    switch (event.code) {
      case 'ArrowLeft':
        pushButton(1)
        break
      case 'ArrowRight':
        pushButton(3)
        break
      case 'ArrowUp':
        changeSelectBox(-1)
        break
      case 'ArrowDown':
        changeSelectBox(1)
        break
      case 'Space':
        pushButton(2)
        break
    }
  }
})

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key]
})

function pushButton(index) {
  const els = document.getElementsByClassName('sound-controller_item')
  els[index].click()
}

function changeSelectBox(diff) {
  const currentSpeed = document.getElementsByClassName('current-rate')[0].innerText
  const selectEl = document.querySelector('select.playback-rate_select')
  const options = selectEl.options
  currentIndex = Array.from(options).findIndex(option => Number.parseFloat(option.value) === Number.parseFloat(currentSpeed.replace('×', '')))
  const newIndex = currentIndex + diff
  if (newIndex >= 0 && newIndex <= options.length - 1) {
    selectEl.selectedIndex = newIndex
    selectEl.dispatchEvent(new Event('change'))
  }
}
