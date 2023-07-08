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
function main() {
    document.addEventListener('keydown', function (event) {
        var url = window.location.href;
        if (url.startsWith('https://app.abceed.com/books/study')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRjdXQtZm9yLWFiY2VlZC8uL3NyYy9zaG9ydGN1dF9mb3JfZXhwbGFuYXRpb25fcGFnZS50cyIsIndlYnBhY2s6Ly9zaG9ydGN1dC1mb3ItYWJjZWVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nob3J0Y3V0LWZvci1hYmNlZWQvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByZXNzZWRLZXlTdGF0dXMge1xuICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xufVxubGV0IGtleXNQcmVzc2VkOiBQcmVzc2VkS2V5U3RhdHVzID0ge31cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICBrZXlzUHJlc3NlZFtldmVudC5rZXldID0gdHJ1ZTtcblxuICBpZiAoa2V5c1ByZXNzZWRbJ1NoaWZ0J10pIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNsaWNrUHJldkNvbW1lbnRhcnlMaW5rKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNsaWNrTmV4dENvbW1lbnRhcnlMaW5rKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXlzUHJlc3NlZFsnQWx0J10pIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjbGlja1NvdW5kQ29udHJvbGxlckJ1dHRvbig0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNsaWNrU291bmRDb250cm9sbGVyQnV0dG9uKDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94KC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjaGFuZ2VWb2ljZVNwZWVkU2VsZWN0Qm94KDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24oMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICBkZWxldGUga2V5c1ByZXNzZWRbZXZlbnQua2V5XTtcbn1cblxuY29uc3QgY2xpY2tTb3VuZENvbnRyb2xsZXJCdXR0b24gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdW5kLWNvbnRyb2xsZXJfaXRlbScpW2luZGV4XTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59XG5cbmNvbnN0IGNoYW5nZVZvaWNlU3BlZWRTZWxlY3RCb3ggPSAoZGlmZjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNlbGVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0LnBsYXliYWNrLXJhdGVfc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGNvbnN0IG9wdGlvbnMgPSBzZWxlY3RFbC5vcHRpb25zO1xuICBjb25zdCBjdXJyZW50U3BlZWQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VycmVudC1yYXRlJylbMF0gYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dDtcbiAgY29uc3QgY3VycmVudEluZGV4ID0gQXJyYXkuZnJvbShvcHRpb25zKS5maW5kSW5kZXgob3B0aW9uID0+IE51bWJlci5wYXJzZUZsb2F0KG9wdGlvbi52YWx1ZSkgPT09IE51bWJlci5wYXJzZUZsb2F0KGN1cnJlbnRTcGVlZC5yZXBsYWNlKCfDlycsICcnKSkpO1xuICBpZiAoY3VycmVudEluZGV4IDwgMCkgcmV0dXJuO1xuXG4gIGNvbnN0IG5ld0luZGV4ID0gY3VycmVudEluZGV4ICsgZGlmZjtcbiAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPD0gb3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgc2VsZWN0RWwuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIHNlbGVjdEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gIH1cbn1cblxuY29uc3QgY2xpY2tOZXh0Q29tbWVudGFyeUxpbmsgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRhcnktbmF2LW5leHQnKTtcbiAgaWYgKGVsKSAoZWwgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG59XG5cbmNvbnN0IGNsaWNrUHJldkNvbW1lbnRhcnlMaW5rID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LW5hdi1wcmV2Jyk7XG4gIGlmIChlbCkgKGVsIGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGhhbmRsZUtleURvd25FdmVudEZvckV4cGxhbmF0aW9uUGFnZSwgaGFuZGxlS2V5VXBFdmVudEZvckV4cGxhbmF0aW9uUGFnZSB9IGZyb20gJy4vc2hvcnRjdXRfZm9yX2V4cGxhbmF0aW9uX3BhZ2UnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vYXBwLmFiY2VlZC5jb20vYm9va3Mvc3R1ZHknKSkge1xuICAgICAgaGFuZGxlS2V5RG93bkV2ZW50Rm9yRXhwbGFuYXRpb25QYWdlKGV2ZW50KTtcbiAgICB9XG4gIH0pXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwczovL2FwcC5hYmNlZWQuY29tL2Jvb2tzL3N0dWR5JykpIHtcbiAgICAgIGhhbmRsZUtleVVwRXZlbnRGb3JFeHBsYW5hdGlvblBhZ2UoZXZlbnQpXG4gICAgfVxuICB9KTtcbn1cblxubWFpbigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=