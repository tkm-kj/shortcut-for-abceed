import  { clickBackButton } from './common_element';

export const handleKeyDownEventForResultPage = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'ArrowRight':
      clickNextTestButton();
      break;
    case 'ArrowLeft':
      clickTryAgainButton();
      break;
    case 'Space':
      clickQuizButton();
      break;
    case 'Escape':
      clickBackButton();
      break;
  }
}

const clickNextTestButton = () => {
  const els = document.querySelectorAll('.footer_inner button.default-button-component.button-short.is-small.is-black');
  const el = els[els.length - 1]
  if (el) (el as HTMLElement).click();
}

const clickTryAgainButton = () => {
  const els = document.querySelectorAll('.footer_inner button.default-button-component.button-short.is-small.is-black');
  const el = els[0]
  if (el) (el as HTMLElement).click();
}

const clickQuizButton = () => {
  const el = document.querySelector('.footer_inner button.default-button-component.button-wide.is-small.is-black.is-fill');
  if (el) (el as HTMLElement).click();
}
