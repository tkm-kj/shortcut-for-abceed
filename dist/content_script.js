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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxpREFBaUQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0QsbUVBQWlDLEVBQUMsS0FBSyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7WUFDL0Qsd0VBQW9DLEVBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDLENBQUM7SUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztRQUN2QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsRUFBRTtZQUN4RCxzRUFBa0MsRUFBQyxLQUFLLENBQUM7U0FDMUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL2NvbW1vbl9lbGVtZW50LnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX2V4cGxhbmF0aW9uX3BhZ2UudHMiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9zaG9ydGN1dF9mb3Jfd29yZF90ZXN0X3BhZ2UudHMiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjbGlja0JhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnV0dG9uJyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuIiwiaW1wb3J0IHsgY2xpY2tCYWNrQnV0dG9uIH0gZnJvbSAnLi9jb21tb25fZWxlbWVudCc7XG5cbmludGVyZmFjZSBQcmVzc2VkS2V5U3RhdHVzIHtcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbn1cbmxldCBrZXlzUHJlc3NlZDogUHJlc3NlZEtleVN0YXR1cyA9IHt9XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAga2V5c1ByZXNzZWRbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgaWYgKGtleXNQcmVzc2VkWydTaGlmdCddKSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1ByZXZDb21tZW50YXJ5TGluaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja05leHRDb21tZW50YXJ5TGluaygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5c1ByZXNzZWRbJ0FsdCddKSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oNCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2hhbmdlVm9pY2VTcGVlZFNlbGVjdEJveCgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGNsaWNrQmFja0J1dHRvbigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgZGVsZXRlIGtleXNQcmVzc2VkW2V2ZW50LmtleV07XG59XG5cbmNvbnN0IGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3VuZC1jb250cm9sbGVyX2l0ZW0nKVtpbmRleF07XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuXG5jb25zdCBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94ID0gKGRpZmY6IG51bWJlcikgPT4ge1xuICBjb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5wbGF5YmFjay1yYXRlX3NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdCBvcHRpb25zID0gc2VsZWN0RWwub3B0aW9ucztcbiAgY29uc3QgY3VycmVudFNwZWVkID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1cnJlbnQtcmF0ZScpWzBdIGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IEFycmF5LmZyb20ob3B0aW9ucykuZmluZEluZGV4KG9wdGlvbiA9PiBOdW1iZXIucGFyc2VGbG9hdChvcHRpb24udmFsdWUpID09PSBOdW1iZXIucGFyc2VGbG9hdChjdXJyZW50U3BlZWQucmVwbGFjZSgnw5cnLCAnJykpKTtcbiAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHJldHVybjtcblxuICBjb25zdCBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIGRpZmY7XG4gIGlmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDw9IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgIHNlbGVjdEVsLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICBzZWxlY3RFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICB9XG59XG5cbmNvbnN0IGNsaWNrTmV4dENvbW1lbnRhcnlMaW5rID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LW5hdi1uZXh0Jyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuXG5jb25zdCBjbGlja1ByZXZDb21tZW50YXJ5TGluayA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1uYXYtcHJldicpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn1cbiIsImltcG9ydCAgeyBjbGlja0JhY2tCdXR0b24gfSBmcm9tICcuL2NvbW1vbl9lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleURvd25FdmVudEZvcldvcmRUZXN0UGFnZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgIGNsaWNrS25vd25CdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBjbGlja1Vua25vd25CdXR0b24oKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgY2xpY2tDb21lbnRhcnlCdXR0b24oKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnU3BhY2UnOlxuICAgICAgY2xpY2tQbGF5YmFja0J1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNsaWNrQmFja0J1dHRvbigpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuY29uc3QgY2xpY2tLbm93bkJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXMta25vd24nKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjbGlja1Vua25vd25CdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzLXVua25vd24nKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjbGlja0NvbWVudGFyeUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtYnV0dG9uLWNvbXBvbmVudCcpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn07XG5cbmNvbnN0IGNsaWNrUGxheWJhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWFrZXItYnV0dG9uLWNvbXBvbmVudCcpO1xuICBpZiAoZWwpIChlbCBhcyBIVE1MRWxlbWVudCkuY2xpY2soKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlLCBoYW5kbGVLZXlVcEV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlIH0gZnJvbSAnLi9zaG9ydGN1dF9mb3JfZXhwbGFuYXRpb25fcGFnZSdcbmltcG9ydCB7IGhhbmRsZUtleURvd25FdmVudEZvcldvcmRUZXN0UGFnZSB9IGZyb20gJy4vc2hvcnRjdXRfZm9yX3dvcmRfdGVzdF9wYWdlJ1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgaWYgKC9eaHR0cHM6XFwvXFwvYXBwXFwuYWJjZWVkXFwuY29tXFwvLipcXC93b3JkLXRlc3RcXC8uKiQvLnRlc3QodXJsKSkge1xuICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yV29yZFRlc3RQYWdlKGV2ZW50KVxuICAgIH0gZWxzZSBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vYm9va3Mvc3R1ZHknKSkge1xuICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlKGV2ZW50KTtcbiAgICB9XG4gIH0pXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5JykpIHtcbiAgICAgIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpXG4gICAgfVxuICB9KTtcbn1cblxubWFpbigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=