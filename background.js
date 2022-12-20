function pushButton(index) {
  const els = document.getElementsByClassName('sound-controller_item')
  els[index].click()
}

chrome.commands.onCommand.addListener(async (command, tab) => {
  let i = -1
  switch (command) {
    case 'push-back-button':
      i = 1
      break
    case 'toggle-play-button':
      i = 2
      break
    case 'push-forward-button':
      i = 3
      break
  }
  chrome.scripting.executeScript(
    {
      target: {tabId: tab.id},
      func: pushButton,
      args: [i]
    }
  );
});
