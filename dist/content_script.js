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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFFO1lBQ3hELHNFQUFrQyxFQUFDLEtBQUssQ0FBQztTQUMxQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX2V4cGxhbmF0aW9uX3BhZ2UudHMiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9zaG9ydGN1dF9mb3Jfd29yZF90ZXN0X3BhZ2UudHMiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBQcmVzc2VkS2V5U3RhdHVzIHtcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbn1cbmxldCBrZXlzUHJlc3NlZDogUHJlc3NlZEtleVN0YXR1cyA9IHt9XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAga2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgaWYgKGtleXNQcmVzc2VkWydTaGlmdCddKSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1ByZXZDb21tZW50YXJ5TGluaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja05leHRDb21tZW50YXJ5TGluaygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5c1ByZXNzZWRbJ0FsdCddKSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oNCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgZGVsZXRlIGtleXNQcmVzc2VkW2V2ZW50LmtleV07XG59XG5cbmNvbnN0IGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3VuZC1jb250cm9sbGVyX2l0ZW0nKVtpbmRleF07XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuXG5jb25zdCBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94ID0gKGRpZmY6IG51bWJlcikgPT4ge1xuICBjb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5wbGF5YmFjay1yYXRlX3NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdCBvcHRpb25zID0gc2VsZWN0RWwub3B0aW9ucztcbiAgY29uc3QgY3VycmVudFNwZWVkID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1cnJlbnQtcmF0ZScpWzBdIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IEFycmF5LmZyb20ob3B0aW9ucykuZmluZEluZGV4KG9wdGlvbiA9PiBOdW1iZXIucGFyc2VGbG9hdChvcHRpb24udmFsdWUpID09PSBOdW1iZXIucGFyc2VGbG9hdChjdXJyZW50U3BlZWQucmVwbGFjZSgnw5cnLCAnJykpKTtcbiAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHJldHVybjtcblxuICBjb25zdCBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIGRpZmY7XG4gIGlmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDw9IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgIHNlbGVjdEVsLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICBzZWxlY3RFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICB9XG59XG5cbmNvbnN0IGNsaWNrTmV4dENvbW1lbnRhcnlMaW5rID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LW5hdi1uZXh0Jyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuXG5jb25zdCBjbGlja1ByZXZDb21tZW50YXJ5TGluayA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1uYXYtcHJldicpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cbiIsImV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duRXZlbnRGb3JXb3JkVGVzdFBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjbGlja0tub3duQnV0dG9uKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgY2xpY2tVbmtub3duQnV0dG9uKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgIGNsaWNrQ29tZW50YXJ5QnV0dG9uKCk7XG4gICAgICBicmVha1xuICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgIGNsaWNrUGxheWJhY2tCdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmNvbnN0IGNsaWNrS25vd25CdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzLWtub3duJyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcblxuY29uc3QgY2xpY2tVbmtub3duQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pcy11bmtub3duJyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcblxuY29uc3QgY2xpY2tDb21lbnRhcnlCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWJ1dHRvbi1jb21wb25lbnQnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjbGlja1BsYXliYWNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVha2VyLWJ1dHRvbi1jb21wb25lbnQnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZSwgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZSB9IGZyb20gJy4vc2hvcnRjdXRfZm9yX2V4cGxhbmF0aW9uX3BhZ2UnXG5pbXBvcnQgeyBoYW5kbGVLZXlEb3duRXZlbnRGb3JXb3JkVGVzdFBhZ2UgfSBmcm9tICcuL3Nob3J0Y3V0X2Zvcl93b3JkX3Rlc3RfcGFnZSdcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9hcHAuYWJjZWVkLmNvbS9ib29rcy9zdHVkeScpKSB7XG4gICAgICBoYW5kbGVLZXlEb3duRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vcmVjb21tZW5kLXF1ZXN0aW9uL3dvcmQtdGVzdC8nKSkge1xuICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yV29yZFRlc3RQYWdlKGV2ZW50KVxuICAgIH1cbiAgfSlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vYm9va3Mvc3R1ZHknKSkge1xuICAgICAgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZShldmVudClcbiAgICB9XG4gIH0pO1xufVxuXG5tYWluKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==