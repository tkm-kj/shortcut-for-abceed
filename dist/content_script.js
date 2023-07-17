/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common_element.ts":
/*!*******************************!*\
  !*** ./src/common_element.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.clickBackButton = void 0;
var clickBackButton = function () {
    var el = document.querySelector('.back-button');
    if (el)
        el.click();
};
exports.clickBackButton = clickBackButton;


/***/ }),

/***/ "./src/shortcut_for_explanation_page.ts":
/*!**********************************************!*\
  !*** ./src/shortcut_for_explanation_page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.handleKeyUpEventForExplanationPage = exports.handleKeyDownEventForExplanationPage = void 0;
var common_element_1 = __webpack_require__(/*! ./common_element */ "./src/common_element.ts");
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
            case 'Escape':
                (0, common_element_1.clickBackButton)();
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.handleKeyDownEventForWordTestPage = void 0;
var common_element_1 = __webpack_require__(/*! ./common_element */ "./src/common_element.ts");
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
        case 'Escape':
            (0, common_element_1.clickBackButton)();
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
        if (/^https:\/\/app\.abceed\.com\/.*\/word-test\/.*$/.test(url)) {
            (0, shortcut_for_word_test_page_1.handleKeyDownEventForWordTestPage)(event);
        }
        else if (url.startsWith('https://app.abceed.com/books/study')) {
            (0, shortcut_for_explanation_page_1.handleKeyDownEventForExplanationPage)(event);
            // to prevent default implemented shortcut behavior of abceed
            event.stopPropagation();
        }
    }, { capture: true });
    document.addEventListener('keyup', function (event) {
        var url = window.location.href;
        if (url.startsWith('https://app.abceed.com/books/study')) {
            (0, shortcut_for_explanation_page_1.handleKeyUpEventForExplanationPage)(event);
        }
    }, { capture: true });
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxpREFBaUQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0QsbUVBQWlDLEVBQUMsS0FBSyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7WUFDL0Qsd0VBQW9DLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsNkRBQTZEO1lBQzdELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUVILENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztRQUN2QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsRUFBRTtZQUN4RCxzRUFBa0MsRUFBQyxLQUFLLENBQUM7U0FDMUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9jb21tb25fZWxlbWVudC50cyIsIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL3Nob3J0Y3V0X2Zvcl9leHBsYW5hdGlvbl9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX3dvcmRfdGVzdF9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9jb250ZW50X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xpY2tCYWNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrLWJ1dHRvbicpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cbiIsImltcG9ydCB7IGNsaWNrQmFja0J1dHRvbiB9IGZyb20gJy4vY29tbW9uX2VsZW1lbnQnO1xuXG5pbnRlcmZhY2UgUHJlc3NlZEtleVN0YXR1cyB7XG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG59XG5sZXQga2V5c1ByZXNzZWQ6IFByZXNzZWRLZXlTdGF0dXMgPSB7fVxuXG5leHBvcnQgY29uc3QgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGtleXNQcmVzc2VkW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gIGlmIChrZXlzUHJlc3NlZFsnU2hpZnQnXSkge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tQcmV2Q29tbWVudGFyeUxpbmsoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tOZXh0Q29tbWVudGFyeUxpbmsoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleXNQcmVzc2VkWydBbHQnXSkge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3goLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3goMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBjbGlja0JhY2tCdXR0b24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlVcEV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGRlbGV0ZSBrZXlzUHJlc3NlZFtldmVudC5rZXldO1xufVxuXG5jb25zdCBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291bmQtY29udHJvbGxlcl9pdGVtJylbaW5kZXhdO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cblxuY29uc3QgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCA9IChkaWZmOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc2VsZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QucGxheWJhY2stcmF0ZV9zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlbGVjdEVsLm9wdGlvbnM7XG4gIGNvbnN0IGN1cnJlbnRTcGVlZCA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXJyZW50LXJhdGUnKVswXSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0O1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBBcnJheS5mcm9tKG9wdGlvbnMpLmZpbmRJbmRleChvcHRpb24gPT4gTnVtYmVyLnBhcnNlRmxvYXQob3B0aW9uLnZhbHVlKSA9PT0gTnVtYmVyLnBhcnNlRmxvYXQoY3VycmVudFNwZWVkLnJlcGxhY2UoJ8OXJywgJycpKSk7XG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSByZXR1cm47XG5cbiAgY29uc3QgbmV3SW5kZXggPSBjdXJyZW50SW5kZXggKyBkaWZmO1xuICBpZiAobmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8PSBvcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICBzZWxlY3RFbC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgc2VsZWN0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgfVxufVxuXG5jb25zdCBjbGlja05leHRDb21tZW50YXJ5TGluayA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1uYXYtbmV4dCcpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cblxuY29uc3QgY2xpY2tQcmV2Q29tbWVudGFyeUxpbmsgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRhcnktbmF2LXByZXYnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59XG4iLCJpbXBvcnQgIHsgY2xpY2tCYWNrQnV0dG9uIH0gZnJvbSAnLi9jb21tb25fZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duRXZlbnRGb3JXb3JkVGVzdFBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjbGlja0tub3duQnV0dG9uKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgY2xpY2tVbmtub3duQnV0dG9uKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgIGNsaWNrQ29tZW50YXJ5QnV0dG9uKCk7XG4gICAgICBicmVha1xuICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgIGNsaWNrUGxheWJhY2tCdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICBjbGlja0JhY2tCdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmNvbnN0IGNsaWNrS25vd25CdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzLWtub3duJyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcblxuY29uc3QgY2xpY2tVbmtub3duQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pcy11bmtub3duJyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufTtcblxuY29uc3QgY2xpY2tDb21lbnRhcnlCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWJ1dHRvbi1jb21wb25lbnQnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjbGlja1BsYXliYWNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVha2VyLWJ1dHRvbi1jb21wb25lbnQnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZSwgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZSB9IGZyb20gJy4vc2hvcnRjdXRfZm9yX2V4cGxhbmF0aW9uX3BhZ2UnXG5pbXBvcnQgeyBoYW5kbGVLZXlEb3duRXZlbnRGb3JXb3JkVGVzdFBhZ2UgfSBmcm9tICcuL3Nob3J0Y3V0X2Zvcl93b3JkX3Rlc3RfcGFnZSdcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmICgvXmh0dHBzOlxcL1xcL2FwcFxcLmFiY2VlZFxcLmNvbVxcLy4qXFwvd29yZC10ZXN0XFwvLiokLy50ZXN0KHVybCkpIHtcbiAgICAgIGhhbmRsZUtleURvd25FdmVudEZvcldvcmRUZXN0UGFnZShldmVudClcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5JykpIHtcbiAgICAgIGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZShldmVudCk7XG4gICAgICAvLyB0byBwcmV2ZW50IGRlZmF1bHQgaW1wbGVtZW50ZWQgc2hvcnRjdXQgYmVoYXZpb3Igb2YgYWJjZWVkXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5JykpIHtcbiAgICAgIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpXG4gICAgfVxuICB9LCB7IGNhcHR1cmU6IHRydWUgfSk7XG59XG5cbm1haW4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9