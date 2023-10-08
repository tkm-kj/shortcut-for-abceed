import { clickBackButton } from './common_element'

export const handleKeyDownEventForWordTestPage = (event: KeyboardEvent): void => {
  switch (event.code) {
    case 'ArrowRight':
      clickKnownButton()
      break
    case 'ArrowLeft':
      clickUnknownButton()
      break
    case 'ArrowUp':
      clickComentaryButton()
      break
    case 'Space':
      clickPlaybackButton()
      break
    case 'Escape':
      clickBackButton()
      break
  }
}

const clickKnownButton = (): void => {
  const el = document.querySelector('.is-known')
  if (el !== null) (el as HTMLElement).click()
}

const clickUnknownButton = (): void => {
  const el = document.querySelector('.is-unknown')
  if (el !== null) (el as HTMLElement).click()
}

const clickComentaryButton = (): void => {
  const el = document.querySelector('.score-button-component')
  if (el !== null) (el as HTMLElement).click()
}

const clickPlaybackButton = (): void => {
  const el = document.querySelector('.speaker-button-component')
  if (el !== null) (el as HTMLElement).click()
}
