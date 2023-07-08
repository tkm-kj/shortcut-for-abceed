import { handleKeyDownEventForExplanationPage, handleKeyUpEventForExplanationPage } from './shortcut_for_explanation_page'

function main() {
  document.addEventListener('keydown', (event) => {
    const url = window.location.href;
    if (url.startsWith('https://app.abceed.com/books/study')) {
      handleKeyDownEventForExplanationPage(event);
    }
  })
  document.addEventListener('keyup', (event) => {
    const url = window.location.href;
    if (url.startsWith('https://app.abceed.com/books/study')) {
      handleKeyUpEventForExplanationPage(event)
    }
  });
}

main()
