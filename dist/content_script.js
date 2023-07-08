/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shortcut_for_explanation_page.ts":
/*!**********************************************!*\
  !*** ./src/shortcut_for_explanation_page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.handleKeyUpEventForExplanationPage = exports.handleKeyDownEventForExplanationPage = void 0;
var keysPressed = {};
var handleKeyDownEventForExplanationPage = function (event) {
    keysPressed[event.key] = true;
    if (keysPressed['Shift']) {
        switch (event.code) {
            case 'ArrowLeft':
                clickPrevCommentaryLink();
                break;
            case 'ArrowRight':
                clickNextCommentaryLink();
                break;
        }
    }
    else if (keysPressed['Alt']) {
        switch (event.code) {
            case 'ArrowLeft':
                clickSoundControllerButton(0);
                break;
            case 'ArrowRight':
                clickSoundControllerButton(4);
                break;
        }
    }
    else {
        switch (event.code) {
            case 'ArrowLeft':
                clickSoundControllerButton(1);
                break;
            case 'ArrowRight':
                clickSoundControllerButton(3);
                break;
            case 'ArrowUp':
                changeVoiceSpeedSelectBox(-1);
                break;
            case 'ArrowDown':
                changeVoiceSpeedSelectBox(1);
                break;
            case 'Space':
                clickSoundControllerButton(2);
                break;
        }
    }
};
exports.handleKeyDownEventForExplanationPage = handleKeyDownEventForExplanationPage;
var handleKeyUpEventForExplanationPage = function (event) {
    delete keysPressed[event.key];
};
exports.handleKeyUpEventForExplanationPage = handleKeyUpEventForExplanationPage;
var clickSoundControllerButton = function (index) {
    var el = document.getElementsByClassName('sound-controller_item')[index];
    if (el)
        el.click();
};
var changeVoiceSpeedSelectBox = function (diff) {
    var selectEl = document.querySelector('select.playback-rate_select');
    var options = selectEl.options;
    var currentSpeed = document.getElementsByClassName('current-rate')[0].innerText;
    var currentIndex = Array.from(options).findIndex(function (option) { return Number.parseFloat(option.value) === Number.parseFloat(currentSpeed.replace('×', '')); });
    if (currentIndex < 0)
        return;
    var newIndex = currentIndex + diff;
    if (newIndex >= 0 && newIndex <= options.length - 1) {
        selectEl.selectedIndex = newIndex;
        selectEl.dispatchEvent(new Event('change'));
    }
};
var clickNextCommentaryLink = function () {
    var el = document.querySelector('.commentary-nav-next');
    if (el)
        el.click();
};
var clickPrevCommentaryLink = function () {
    var el = document.querySelector('.commentary-nav-prev');
    if (el)
        el.click();
};


/***/ }),

/***/ "./src/shortcut_for_word_test_page.ts":
/*!********************************************!*\
  !*** ./src/shortcut_for_word_test_page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.handleKeyDownEventForWordTestPage = void 0;
var handleKeyDownEventForWordTestPage = function (event) {
    switch (event.code) {
        case 'ArrowRight':
            clickKnownButton();
            break;
        case 'ArrowLeft':
            clickUnknownButton();
            break;
        case 'ArrowUp':
            clickComentaryButton();
            break;
        case 'Space':
            console.log('clickPlaybackButton');
            clickPlaybackButton();
            break;
    }
};
exports.handleKeyDownEventForWordTestPage = handleKeyDownEventForWordTestPage;
var clickKnownButton = function () {
    var el = document.querySelector('.is-known');
    if (el)
        el.click();
};
var clickUnknownButton = function () {
    var el = document.querySelector('.is-unknown');
    if (el)
        el.click();
};
var clickComentaryButton = function () {
    var el = document.querySelector('.score-button-component');
    if (el)
        el.click();
};
var clickPlaybackButton = function () {
    var el = document.querySelector('.speaker-button-component');
    if (el)
        el.click();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/content_script.ts ***!
  \*******************************/

exports.__esModule = true;
var shortcut_for_explanation_page_1 = __webpack_require__(/*! ./shortcut_for_explanation_page */ "./src/shortcut_for_explanation_page.ts");
var shortcut_for_word_test_page_1 = __webpack_require__(/*! ./shortcut_for_word_test_page */ "./src/shortcut_for_word_test_page.ts");
function main() {
    document.addEventListener('keydown', function (event) {
        var url = window.location.href;
        if (url.startsWith('https://app.abceed.com/books/study')) {
            (0, shortcut_for_explanation_page_1.handleKeyDownEventForExplanationPage)(event);
        }
        else if (url.startsWith('https://app.abceed.com/recommend-question/word-test/')) {
            (0, shortcut_for_word_test_page_1.handleKeyDownEventForWordTestPage)(event);
        }
    });
    document.addEventListener('keyup', function (event) {
        var url = window.location.href;
        if (url.startsWith('https://app.abceed.com/books/study')) {
            (0, shortcut_for_explanation_page_1.handleKeyUpEventForExplanationPage)(event);
        }
    });
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsRUFBRTtZQUN4RCxzRUFBa0MsRUFBQyxLQUFLLENBQUM7U0FDMUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL3Nob3J0Y3V0X2Zvcl9leHBsYW5hdGlvbl9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX3dvcmRfdGVzdF9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9jb250ZW50X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUHJlc3NlZEtleVN0YXR1cyB7XG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG59XG5sZXQga2V5c1ByZXNzZWQ6IFByZXNzZWRLZXlTdGF0dXMgPSB7fVxuXG5leHBvcnQgY29uc3QgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGtleXNQcmVzc2VkW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gIGlmIChrZXlzUHJlc3NlZFsnU2hpZnQnXSkge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tQcmV2Q29tbWVudGFyeUxpbmsoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tOZXh0Q29tbWVudGFyeUxpbmsoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleXNQcmVzc2VkWydBbHQnXSkge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3goLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3goMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlVcEV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGRlbGV0ZSBrZXlzUHJlc3NlZFtldmVudC5rZXldO1xufVxuXG5jb25zdCBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291bmQtY29udHJvbGxlcl9pdGVtJylbaW5kZXhdO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cblxuY29uc3QgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCA9IChkaWZmOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc2VsZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QucGxheWJhY2stcmF0ZV9zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlbGVjdEVsLm9wdGlvbnM7XG4gIGNvbnN0IGN1cnJlbnRTcGVlZCA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXJyZW50LXJhdGUnKVswXSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0O1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBBcnJheS5mcm9tKG9wdGlvbnMpLmZpbmRJbmRleChvcHRpb24gPT4gTnVtYmVyLnBhcnNlRmxvYXQob3B0aW9uLnZhbHVlKSA9PT0gTnVtYmVyLnBhcnNlRmxvYXQoY3VycmVudFNwZWVkLnJlcGxhY2UoJ8OXJywgJycpKSk7XG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSByZXR1cm47XG5cbiAgY29uc3QgbmV3SW5kZXggPSBjdXJyZW50SW5kZXggKyBkaWZmO1xuICBpZiAobmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8PSBvcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICBzZWxlY3RFbC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgc2VsZWN0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgfVxufVxuXG5jb25zdCBjbGlja05leHRDb21tZW50YXJ5TGluayA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1uYXYtbmV4dCcpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cblxuY29uc3QgY2xpY2tQcmV2Q29tbWVudGFyeUxpbmsgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRhcnktbmF2LXByZXYnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59XG4iLCJleHBvcnQgY29uc3QgaGFuZGxlS2V5RG93bkV2ZW50Rm9yV29yZFRlc3RQYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgY2xpY2tLbm93bkJ1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNsaWNrVW5rbm93bkJ1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICBjbGlja0NvbWVudGFyeUJ1dHRvbigpO1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdTcGFjZSc6XG4gICAgICBjb25zb2xlLmxvZygnY2xpY2tQbGF5YmFja0J1dHRvbicpXG4gICAgICBjbGlja1BsYXliYWNrQnV0dG9uKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5jb25zdCBjbGlja0tub3duQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pcy1rbm93bicpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn07XG5cbmNvbnN0IGNsaWNrVW5rbm93bkJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXMtdW5rbm93bicpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn07XG5cbmNvbnN0IGNsaWNrQ29tZW50YXJ5QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1idXR0b24tY29tcG9uZW50Jyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcblxuY29uc3QgY2xpY2tQbGF5YmFja0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlYWtlci1idXR0b24tY29tcG9uZW50Jyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBoYW5kbGVLZXlEb3duRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UsIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UgfSBmcm9tICcuL3Nob3J0Y3V0X2Zvcl9leHBsYW5hdGlvbl9wYWdlJ1xuaW1wb3J0IHsgaGFuZGxlS2V5RG93bkV2ZW50Rm9yV29yZFRlc3RQYWdlIH0gZnJvbSAnLi9zaG9ydGN1dF9mb3Jfd29yZF90ZXN0X3BhZ2UnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vYm9va3Mvc3R1ZHknKSkge1xuICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL3JlY29tbWVuZC1xdWVzdGlvbi93b3JkLXRlc3QvJykpIHtcbiAgICAgIGhhbmRsZUtleURvd25FdmVudEZvcldvcmRUZXN0UGFnZShldmVudClcbiAgICB9XG4gIH0pXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5JykpIHtcbiAgICAgIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpXG4gICAgfVxuICB9KTtcbn1cblxubWFpbigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=