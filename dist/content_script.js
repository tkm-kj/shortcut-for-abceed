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
    if (el !== null)
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
var pressedKeyMap = new Map();
var handleKeyDownEventForExplanationPage = function (event) {
    pressedKeyMap.set(event.key, true);
    if (pressedKeyMap.get('Shift') !== undefined) {
        switch (event.code) {
            case 'ArrowLeft':
                clickPrevCommentaryLink();
                break;
            case 'ArrowRight':
                clickNextCommentaryLink();
                break;
        }
    }
    else if (pressedKeyMap.get('Alt') !== undefined) {
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
    pressedKeyMap["delete"](event.key);
};
exports.handleKeyUpEventForExplanationPage = handleKeyUpEventForExplanationPage;
var clickSoundControllerButton = function (index) {
    document.getElementsByClassName('sound-controller_item')[index].click();
};
var changeVoiceSpeedSelectBox = function (diff) {
    var selectEl = document.querySelector('select.playback-rate_select');
    if (selectEl === null)
        return;
    var foundSelectEl = selectEl;
    var options = foundSelectEl.options;
    var currentSpeed = document.getElementsByClassName('current-rate')[0].innerText;
    var currentIndex = Array.from(options).findIndex(function (option) {
        return Number.parseFloat(option.value) ===
            Number.parseFloat(currentSpeed.replace('×', ''));
    });
    if (currentIndex < 0)
        return;
    var newIndex = currentIndex + diff;
    if (newIndex >= 0 && newIndex <= options.length - 1) {
        foundSelectEl.selectedIndex = newIndex;
        foundSelectEl.dispatchEvent(new Event('change'));
    }
};
var clickNextCommentaryLink = function () {
    var el = document.querySelector('.commentary-nav-next');
    if (el !== null)
        el.click();
};
var clickPrevCommentaryLink = function () {
    var el = document.querySelector('.commentary-nav-prev');
    if (el !== null)
        el.click();
};


/***/ }),

/***/ "./src/shortcut_for_result_page.ts":
/*!*****************************************!*\
  !*** ./src/shortcut_for_result_page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.handleKeyDownEventForResultPage = void 0;
var common_element_1 = __webpack_require__(/*! ./common_element */ "./src/common_element.ts");
var handleKeyDownEventForResultPage = function (event) {
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
            (0, common_element_1.clickBackButton)();
            break;
    }
};
exports.handleKeyDownEventForResultPage = handleKeyDownEventForResultPage;
var clickNextTestButton = function () {
    var els = document.querySelectorAll('.footer_inner button.default-button-component.button-short.is-small.is-black');
    var el = els[els.length - 1];
    el.click();
};
var clickTryAgainButton = function () {
    var els = document.querySelectorAll('.footer_inner button.default-button-component.button-short.is-small.is-black');
    var el = els[0];
    el.click();
};
var clickQuizButton = function () {
    var el = document.querySelector('.footer_inner button.default-button-component.button-wide.is-small.is-black.is-fill');
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
    if (el !== null)
        el.click();
};
var clickUnknownButton = function () {
    var el = document.querySelector('.is-unknown');
    if (el !== null)
        el.click();
};
var clickComentaryButton = function () {
    var el = document.querySelector('.score-button-component');
    if (el !== null)
        el.click();
};
var clickPlaybackButton = function () {
    var el = document.querySelector('.speaker-button-component');
    if (el !== null)
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
var shortcut_for_result_page_1 = __webpack_require__(/*! ./shortcut_for_result_page */ "./src/shortcut_for_result_page.ts");
var shortcut_for_explanation_page_1 = __webpack_require__(/*! ./shortcut_for_explanation_page */ "./src/shortcut_for_explanation_page.ts");
var shortcut_for_word_test_page_1 = __webpack_require__(/*! ./shortcut_for_word_test_page */ "./src/shortcut_for_word_test_page.ts");
function main() {
    document.addEventListener('keydown', function (event) {
        var url = window.location.href;
        if (/^https:\/\/app\.abceed\.com\/.*\/word-test\/.*$/.test(url)) {
            (0, shortcut_for_word_test_page_1.handleKeyDownEventForWordTestPage)(event);
        }
        else if (url.startsWith('https://app.abceed.com/books/study/results')) {
            (0, shortcut_for_result_page_1.handleKeyDownEventForResultPage)(event);
        }
        else {
            (0, shortcut_for_explanation_page_1.handleKeyDownEventForExplanationPage)(event);
            // to prevent default implemented shortcut behavior of abceed
            event.stopPropagation();
        }
    }, { capture: true });
    document.addEventListener('keyup', function (event) {
        var url = window.location.href;
        if (/^https:\/\/app\.abceed\.com\/.*\/word-test\/.*$/.test(url)) {
            // noop
        }
        else if (url.startsWith('https://app.abceed.com/books/study/results')) {
            // noop
        }
        else {
            (0, shortcut_for_explanation_page_1.handleKeyUpEventForExplanationPage)(event);
        }
    }, { capture: true });
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsZUFBZSxFQUFFO1NBQ3hCO0lBQ0gsQ0FBQyxFQUNELEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUNsQjtJQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDdkIsT0FBTyxFQUNQLFVBQUMsS0FBSztRQUNKLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNoQyxJQUFJLGlEQUFpRCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvRCxPQUFPO1NBQ1I7YUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsNENBQTRDLENBQUMsRUFBRTtZQUN2RSxPQUFPO1NBQ1I7YUFBTTtZQUNMLHNFQUFrQyxFQUFDLEtBQUssQ0FBQztTQUMxQztJQUNILENBQUMsRUFDRCxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDbEI7QUFDSCxDQUFDO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9jb21tb25fZWxlbWVudC50cyIsIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkLy4vc3JjL3Nob3J0Y3V0X2Zvcl9leHBsYW5hdGlvbl9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX3Jlc3VsdF9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvc2hvcnRjdXRfZm9yX3dvcmRfdGVzdF9wYWdlLnRzIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9jb250ZW50X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xpY2tCYWNrQnV0dG9uID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrLWJ1dHRvbicpXG4gIGlmIChlbCAhPT0gbnVsbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpXG59XG4iLCJpbXBvcnQgeyBjbGlja0JhY2tCdXR0b24gfSBmcm9tICcuL2NvbW1vbl9lbGVtZW50J1xuXG5jb25zdCBwcmVzc2VkS2V5TWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KClcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICBwcmVzc2VkS2V5TWFwLnNldChldmVudC5rZXksIHRydWUpXG5cbiAgaWYgKHByZXNzZWRLZXlNYXAuZ2V0KCdTaGlmdCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNsaWNrUHJldkNvbW1lbnRhcnlMaW5rKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja05leHRDb21tZW50YXJ5TGluaygpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9IGVsc2UgaWYgKHByZXNzZWRLZXlNYXAuZ2V0KCdBbHQnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigwKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDQpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbigzKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3goLTEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94KDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDIpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBjbGlja0JhY2tCdXR0b24oKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICBwcmVzc2VkS2V5TWFwLmRlbGV0ZShldmVudC5rZXkpXG59XG5cbmNvbnN0IGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uID0gKGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdW5kLWNvbnRyb2xsZXJfaXRlbScpW2luZGV4XSBhcyBIVE1MRWxlbWVudCkuY2xpY2soKVxufVxuXG5jb25zdCBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94ID0gKGRpZmY6IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5wbGF5YmFjay1yYXRlX3NlbGVjdCcpXG4gIGlmIChzZWxlY3RFbCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgY29uc3QgZm91bmRTZWxlY3RFbCA9IHNlbGVjdEVsIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gIGNvbnN0IG9wdGlvbnMgPSBmb3VuZFNlbGVjdEVsLm9wdGlvbnNcbiAgY29uc3QgY3VycmVudFNwZWVkID0gKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1cnJlbnQtcmF0ZScpWzBdIGFzIEhUTUxFbGVtZW50XG4gICkuaW5uZXJUZXh0XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IEFycmF5LmZyb20ob3B0aW9ucykuZmluZEluZGV4KFxuICAgIChvcHRpb24pID0+XG4gICAgICBOdW1iZXIucGFyc2VGbG9hdChvcHRpb24udmFsdWUpID09PVxuICAgICAgTnVtYmVyLnBhcnNlRmxvYXQoY3VycmVudFNwZWVkLnJlcGxhY2UoJ8OXJywgJycpKVxuICApXG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSByZXR1cm5cblxuICBjb25zdCBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIGRpZmZcbiAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gb3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgZm91bmRTZWxlY3RFbC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXhcbiAgICBmb3VuZFNlbGVjdEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSlcbiAgfVxufVxuXG5jb25zdCBjbGlja05leHRDb21tZW50YXJ5TGluayA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1uYXYtbmV4dCcpXG4gIGlmIChlbCAhPT0gbnVsbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpXG59XG5cbmNvbnN0IGNsaWNrUHJldkNvbW1lbnRhcnlMaW5rID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LW5hdi1wcmV2JylcbiAgaWYgKGVsICE9PSBudWxsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKClcbn1cbiIsImltcG9ydCB7IGNsaWNrQmFja0J1dHRvbiB9IGZyb20gJy4vY29tbW9uX2VsZW1lbnQnXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duRXZlbnRGb3JSZXN1bHRQYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgY2xpY2tOZXh0VGVzdEJ1dHRvbigpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBjbGlja1RyeUFnYWluQnV0dG9uKClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnU3BhY2UnOlxuICAgICAgY2xpY2tRdWl6QnV0dG9uKClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNsaWNrQmFja0J1dHRvbigpXG4gICAgICBicmVha1xuICB9XG59XG5cbmNvbnN0IGNsaWNrTmV4dFRlc3RCdXR0b24gPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5mb290ZXJfaW5uZXIgYnV0dG9uLmRlZmF1bHQtYnV0dG9uLWNvbXBvbmVudC5idXR0b24tc2hvcnQuaXMtc21hbGwuaXMtYmxhY2snXG4gIClcbiAgY29uc3QgZWwgPSBlbHNbZWxzLmxlbmd0aCAtIDFdIGFzIEhUTUxFbGVtZW50XG4gIGVsLmNsaWNrKClcbn1cblxuY29uc3QgY2xpY2tUcnlBZ2FpbkJ1dHRvbiA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmZvb3Rlcl9pbm5lciBidXR0b24uZGVmYXVsdC1idXR0b24tY29tcG9uZW50LmJ1dHRvbi1zaG9ydC5pcy1zbWFsbC5pcy1ibGFjaydcbiAgKVxuICBjb25zdCBlbCA9IGVsc1swXSBhcyBIVE1MRWxlbWVudFxuICBlbC5jbGljaygpXG59XG5cbmNvbnN0IGNsaWNrUXVpekJ1dHRvbiA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZm9vdGVyX2lubmVyIGJ1dHRvbi5kZWZhdWx0LWJ1dHRvbi1jb21wb25lbnQuYnV0dG9uLXdpZGUuaXMtc21hbGwuaXMtYmxhY2suaXMtZmlsbCdcbiAgKSBhcyBIVE1MRWxlbWVudFxuICBlbC5jbGljaygpXG59XG4iLCJpbXBvcnQgeyBjbGlja0JhY2tCdXR0b24gfSBmcm9tICcuL2NvbW1vbl9lbGVtZW50J1xuXG5leHBvcnQgY29uc3QgaGFuZGxlS2V5RG93bkV2ZW50Rm9yV29yZFRlc3RQYWdlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgY2xpY2tLbm93bkJ1dHRvbigpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBjbGlja1Vua25vd25CdXR0b24oKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgIGNsaWNrQ29tZW50YXJ5QnV0dG9uKClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnU3BhY2UnOlxuICAgICAgY2xpY2tQbGF5YmFja0J1dHRvbigpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICBjbGlja0JhY2tCdXR0b24oKVxuICAgICAgYnJlYWtcbiAgfVxufVxuXG5jb25zdCBjbGlja0tub3duQnV0dG9uID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pcy1rbm93bicpXG4gIGlmIChlbCAhPT0gbnVsbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpXG59XG5cbmNvbnN0IGNsaWNrVW5rbm93bkJ1dHRvbiA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXMtdW5rbm93bicpXG4gIGlmIChlbCAhPT0gbnVsbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpXG59XG5cbmNvbnN0IGNsaWNrQ29tZW50YXJ5QnV0dG9uID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1idXR0b24tY29tcG9uZW50JylcbiAgaWYgKGVsICE9PSBudWxsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKClcbn1cblxuY29uc3QgY2xpY2tQbGF5YmFja0J1dHRvbiA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlYWtlci1idXR0b24tY29tcG9uZW50JylcbiAgaWYgKGVsICE9PSBudWxsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBoYW5kbGVLZXlEb3duRXZlbnRGb3JSZXN1bHRQYWdlIH0gZnJvbSAnLi9zaG9ydGN1dF9mb3JfcmVzdWx0X3BhZ2UnXG5pbXBvcnQge1xuICBoYW5kbGVLZXlEb3duRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UsXG4gIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2Vcbn0gZnJvbSAnLi9zaG9ydGN1dF9mb3JfZXhwbGFuYXRpb25fcGFnZSdcbmltcG9ydCB7IGhhbmRsZUtleURvd25FdmVudEZvcldvcmRUZXN0UGFnZSB9IGZyb20gJy4vc2hvcnRjdXRfZm9yX3dvcmRfdGVzdF9wYWdlJ1xuXG5mdW5jdGlvbiBtYWluICgpOiB2b2lkIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAna2V5ZG93bicsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgaWYgKC9eaHR0cHM6XFwvXFwvYXBwXFwuYWJjZWVkXFwuY29tXFwvLipcXC93b3JkLXRlc3RcXC8uKiQvLnRlc3QodXJsKSkge1xuICAgICAgICBoYW5kbGVLZXlEb3duRXZlbnRGb3JXb3JkVGVzdFBhZ2UoZXZlbnQpXG4gICAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5L3Jlc3VsdHMnKSkge1xuICAgICAgICBoYW5kbGVLZXlEb3duRXZlbnRGb3JSZXN1bHRQYWdlKGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlKGV2ZW50KVxuICAgICAgICAvLyB0byBwcmV2ZW50IGRlZmF1bHQgaW1wbGVtZW50ZWQgc2hvcnRjdXQgYmVoYXZpb3Igb2YgYWJjZWVkXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB9XG4gICAgfSxcbiAgICB7IGNhcHR1cmU6IHRydWUgfVxuICApXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2tleXVwJyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICBpZiAoL15odHRwczpcXC9cXC9hcHBcXC5hYmNlZWRcXC5jb21cXC8uKlxcL3dvcmQtdGVzdFxcLy4qJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vYm9va3Mvc3R1ZHkvcmVzdWx0cycpKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICB7IGNhcHR1cmU6IHRydWUgfVxuICApXG59XG5cbm1haW4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9