import { clickBackButton } from './common_element'

export const handleKeyDownEventForResultPage = (event: KeyboardEvent): void => {
  switch (event.code) {
    case 'ArrowRight':
      clickNextTestButton()
      break
    case 'ArrowLeft':
      clickTryAgainButton()
      break
    case 'Space':
      clickQuizButton()
      break
    case 'Escape':
      clickBackButton()
      break
  }
}

const clickNextTestButton = (): void => {
  const els = document.querySelectorAll(
    '.footer_inner button.default-button-component.button-short.is-small.is-black'
  )
  const el = els[els.length - 1] as HTMLElement
  el.click()
}

const clickTryAgainButton = (): void => {
  const els = document.querySelectorAll(
    '.footer_inner button.default-button-component.button-short.is-small.is-black'
  )
  const el = els[0] as HTMLElement
  el.click()
}

const clickQuizButton = (): void => {
  const el = document.querySelector(
    '.footer_inner button.default-button-component.button-wide.is-small.is-black.is-fill'
  ) as HTMLElement
  el.click()
}
