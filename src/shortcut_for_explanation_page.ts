import { clickBackButton } from './common_element'

const pressedKeyMap = new Map<string, boolean>()

export const handleKeyDownEventForExplanationPage = (event: KeyboardEvent): void => {
  pressedKeyMap.set(event.key, true)

  if (pressedKeyMap.get('Shift') !== undefined) {
    switch (event.code) {
      case 'ArrowLeft':
        clickPrevCommentaryLink()
        break
      case 'ArrowRight':
        clickNextCommentaryLink()
        break
    }
  } else if (pressedKeyMap.get('Alt') !== undefined) {
    switch (event.code) {
      case 'ArrowLeft':
        clickSoundControllerButton(0)
        break
      case 'ArrowRight':
        clickSoundControllerButton(4)
        break
    }
  } else {
    switch (event.code) {
      case 'ArrowLeft':
        clickSoundControllerButton(1)
        break
      case 'ArrowRight':
        clickSoundControllerButton(3)
        break
      case 'ArrowUp':
        changeVoiceSpeedSelectBox(-1)
        break
      case 'ArrowDown':
        changeVoiceSpeedSelectBox(1)
        break
      case 'Space':
        clickSoundControllerButton(2)
        break
      case 'Escape':
        clickBackButton()
        break
    }
  }
}

export const handleKeyUpEventForExplanationPage = (event: KeyboardEvent): void => {
  pressedKeyMap.delete(event.key)
}

const clickSoundControllerButton = (index: number): void => {
  (document.getElementsByClassName('sound-controller_item')[index] as HTMLElement).click()
}

const changeVoiceSpeedSelectBox = (diff: number): void => {
  const selectEl = document.querySelector('select.playback-rate_select')
  if (selectEl === null) return

  const foundSelectEl = selectEl as HTMLSelectElement
  const options = foundSelectEl.options
  const currentSpeed = (
    document.getElementsByClassName('current-rate')[0] as HTMLElement
  ).innerText
  const currentIndex = Array.from(options).findIndex(
    (option) =>
      Number.parseFloat(option.value) ===
      Number.parseFloat(currentSpeed.replace('×', ''))
  )
  if (currentIndex < 0) return

  const newIndex = currentIndex + diff
  if (newIndex >= 0 && newIndex <= options.length - 1) {
    foundSelectEl.selectedIndex = newIndex
    foundSelectEl.dispatchEvent(new Event('change'))
  }
}

const clickNextCommentaryLink = (): void => {
  const el = document.querySelector('.commentary-nav-next')
  if (el !== null) (el as HTMLElement).click()
}

const clickPrevCommentaryLink = (): void => {
  const el = document.querySelector('.commentary-nav-prev')
  if (el !== null) (el as HTMLElement).click()
}
