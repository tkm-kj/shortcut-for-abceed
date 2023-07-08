export const handleKeyDownEventForWordTestPage = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'ArrowRight':
      clickKnownButton();
      break;
    case 'ArrowLeft':
      clickUnknownButton();
      break;
    case 'ArrowUp':
      clickComentaryButton();
      break
    case 'Space':
      console.log('clickPlaybackButton')
      clickPlaybackButton();
      break;
  }
}

const clickKnownButton = () => {
  const el = document.querySelector('.is-known');
  if (el) (el as HTMLElement).click();
};

const clickUnknownButton = () => {
  const el = document.querySelector('.is-unknown');
  if (el) (el as HTMLElement).click();
};

const clickComentaryButton = () => {
  const el = document.querySelector('.score-button-component');
  if (el) (el as HTMLElement).click();
};

const clickPlaybackButton = () => {
  const el = document.querySelector('.speaker-button-component');
  if (el) (el as HTMLElement).click();
};
