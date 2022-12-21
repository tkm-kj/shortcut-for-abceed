function pushButton(index) {
  const els = document.getElementsByClassName('sound-controller_item')
  els[index].click()
}

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
      // case 'ArrowUp':
      //   console.log('Shift + ArrowUp')
      //   break
      // case 'ArrowDown':
      //   console.log('Shift + ArrowDown')
      //   break
      case 'Space':
        pushButton(2)
        break
    }
  }
})

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key]
})
