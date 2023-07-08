import { handleKeyDownEventForExplanationPage, handleKeyUpEventForExplanationPage } from './shortcut_for_explanation_page'
import { handleKeyDownEventForWordTestPage } from './shortcut_for_word_test_page'

function main() {
  document.addEventListener('keydown', (event) => {
    const url = window.location.href;
    if (url.startsWith('https://app.abceed.com/books/study')) {
      handleKeyDownEventForExplanationPage(event);
    } else if (url.startsWith('https://app.abceed.com/recommend-question/word-test/')) {
      handleKeyDownEventForWordTestPage(event)
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
