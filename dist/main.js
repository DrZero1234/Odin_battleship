/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/board.js":
/*!********************************!*\
  !*** ./src/functions/board.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/functions/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);


 const Board = (board = [],MISSED_SHOTS = [],) => {
    const ship_types = ["Destroyer","Submarine","Battleship","Carrier"]
    const board_size = 10;
    for (let i = 0; i < board_size;i++) {
        const row = [];
        for (let j = 0; j < board_size;j++) {
            row.push({ship_length: null, ship_type: null, was_hit: false})
        }
        board.push(row);
    }

    function placeShip(ship,row,col,) {
        if ((row < 0 || row > 9)  || (col < 0 || col > 9)) {
            throw new Error("Invalid position")
        }

        // Adjusting the col if the Ship length goes overboard
        while ((col + ship.length) > board_size) {
            col --;
        };

        // Not allowing the ship to place 2 boats on eachother
        const ship_placement = board[row].slice(col,(col+ship.length));
        if (ship_placement.filter(e => e.ship_type !== null).length > 0) {
            throw new Error("Cant place ship there")
        }

        for (let deck of ship.decks) {
            board[row][col] = deck;
            col++;
        }
    }

    
    // Works only for horizontal ships
    function getFirstDeck(ship_name){
        if (!ship_types.includes(ship_name)) {
            throw new Error("Invalid ship type")
        }
        for (let row = 0;row < board_size;row++) {
            for (let col = 0;col < board_size;col++) {
                if (board[row][col].ship_type) {
                    if (board[row][col].ship_type.toLowerCase() === ship_name.toLowerCase()) {
                        return {row, col}
                    }
            } 
            }
        }
    }

    function receiveHit(row,col) {
        if (board[row][col].was_hit) {
            throw new Error("This was already hit")
        }
        if (!board[row][col].ship_type) {
            MISSED_SHOTS.push({row,col})

        }
        this.board[row][col].was_hit = true;
        return board
    }

    function allShipSunk(board) {
        const falttened_board = board.reduce((previousValue, currentValue) =>previousValue.concat(currentValue))    
        const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
        return only_ship_list.every(({was_hit}) => was_hit)
}  

    return {
        MISSED_SHOTS,
        board,
        placeShip,
        getFirstDeck,
        receiveHit,
        allShipSunk
    }

}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/***/ }),

/***/ "./src/functions/ship.js":
/*!*******************************!*\
  !*** ./src/functions/ship.js ***!
  \*******************************/
/***/ ((module) => {



function Ship(length,sunk=false) {
    let ship_type;
    if (length > 5 || length < 2) {
        throw new Error("The ship length is between 3-5")
    }
    if (length === 2) {
        ship_type = "Destroyer";
    } else if (length === 3) {
        ship_type = "Submarine"
    } else if (length === 4) {
        ship_type = "Battleship"
    } else if (length === 5) {
        ship_type = "Carrier"
    }



    const  decks = []
    for (let i = 0;i < length;i++) {
        decks.push({ship_type, ship_length: length, was_hit: false,})
    }

     const hit = (position) => {
        if (position > decks.length-1) {
            throw new Error("The ship does not have that much decks.")
        }

        else if (decks[position].ship_type != null && decks[position].was_hit === false) {
            decks[position].was_hit = true
        } else {
            throw new Error("This place was already hit")
        }
        return decks
        
    }

    const isSunk = () => {
        return decks.every((deck_status) => {
           return deck_status.was_hit === true
        })
    }

    return {
            length,
            decks,
            sunk,
            hit,
            isSunk
        }
}

function createShips() {
    return [new Ship(2),new Ship(3),new Ship(3), new Ship(4), new Ship(5)];
};




module.exports = Ship;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/board */ "./src/functions/board.js");


const b = (0,_functions_board__WEBPACK_IMPORTED_MODULE_0__.Board)();

console.log(b.board)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDLHNCQUFzQixtREFBbUQ7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFROztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELFVBQVU7QUFDbEUsc0NBQXNDLFFBQVE7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7OztBQ2pGcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7OztBQUlBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsb0JBQW9CLGdEQUFnRDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBOzs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLFVBQVUsdURBQUs7O0FBRWYsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2JvYXJkLmpzIiwid2VicGFjazovL29kaW5fYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluX2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5fYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuIGNvbnN0IEJvYXJkID0gKGJvYXJkID0gW10sTUlTU0VEX1NIT1RTID0gW10sKSA9PiB7XG4gICAgY29uc3Qgc2hpcF90eXBlcyA9IFtcIkRlc3Ryb3llclwiLFwiU3VibWFyaW5lXCIsXCJCYXR0bGVzaGlwXCIsXCJDYXJyaWVyXCJdXG4gICAgY29uc3QgYm9hcmRfc2l6ZSA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRfc2l6ZTtpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRfc2l6ZTtqKyspIHtcbiAgICAgICAgICAgIHJvdy5wdXNoKHtzaGlwX2xlbmd0aDogbnVsbCwgc2hpcF90eXBlOiBudWxsLCB3YXNfaGl0OiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLHJvdyxjb2wsKSB7XG4gICAgICAgIGlmICgocm93IDzCoDAgfHwgcm93ID7CoDkpwqAgfHzCoChjb2wgPCAwIHx8IGNvbCA+wqA5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwb3NpdGlvblwiKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0aW5nIHRoZSBjb2wgaWYgdGhlIFNoaXAgbGVuZ3RoIGdvZXMgb3ZlcmJvYXJkXG4gICAgICAgIHdoaWxlICgoY29sICsgc2hpcC5sZW5ndGgpID7CoGJvYXJkX3NpemUpIHtcbiAgICAgICAgICAgIGNvbCAtLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBOb3QgYWxsb3dpbmcgdGhlIHNoaXAgdG8gcGxhY2UgMiBib2F0cyBvbiBlYWNob3RoZXJcbiAgICAgICAgY29uc3Qgc2hpcF9wbGFjZW1lbnQgPSBib2FyZFtyb3ddLnNsaWNlKGNvbCwoY29sK3NoaXAubGVuZ3RoKSk7XG4gICAgICAgIGlmIChzaGlwX3BsYWNlbWVudC5maWx0ZXIoZSA9PiBlLnNoaXBfdHlwZSAhPT0gbnVsbCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudCBwbGFjZSBzaGlwIHRoZXJlXCIpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBkZWNrIG9mIHNoaXAuZGVja3MpIHtcbiAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IGRlY2s7XG4gICAgICAgICAgICBjb2wrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIC8vIFdvcmtzIG9ubHkgZm9yIGhvcml6b250YWwgc2hpcHNcbiAgICBmdW5jdGlvbiBnZXRGaXJzdERlY2soc2hpcF9uYW1lKXtcbiAgICAgICAgaWYgKCFzaGlwX3R5cGVzLmluY2x1ZGVzKHNoaXBfbmFtZSkpwqB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgdHlwZVwiKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7cm93IDwgYm9hcmRfc2l6ZTtyb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDtjb2wgPCBib2FyZF9zaXplO2NvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXS5zaGlwX3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXS5zaGlwX3R5cGUudG9Mb3dlckNhc2UoKSA9PT0gc2hpcF9uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7cm93LCBjb2x9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH3CoFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUhpdChyb3csY29sKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0ud2FzX2hpdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyB3YXMgYWxyZWFkeSBoaXRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJvYXJkW3Jvd11bY29sXS5zaGlwX3R5cGUpIHtcbiAgICAgICAgICAgIE1JU1NFRF9TSE9UUy5wdXNoKHtyb3csY29sfSlcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLndhc19oaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTaGlwU3Vuayhib2FyZCkge1xuICAgICAgICBjb25zdCBmYWx0dGVuZWRfYm9hcmQgPSBib2FyZC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT5wcmV2aW91c1ZhbHVlLmNvbmNhdChjdXJyZW50VmFsdWUpKSAgICBcbiAgICAgICAgY29uc3Qgb25seV9zaGlwX2xpc3QgPSBmYWx0dGVuZWRfYm9hcmQuZmlsdGVyKCh7c2hpcF90eXBlfSkgPT4gc2hpcF90eXBlICE9IG51bGwpO1xuICAgICAgICByZXR1cm4gb25seV9zaGlwX2xpc3QuZXZlcnkoKHt3YXNfaGl0fSkgPT4gd2FzX2hpdClcbn0gIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTUlTU0VEX1NIT1RTLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBnZXRGaXJzdERlY2ssXG4gICAgICAgIHJlY2VpdmVIaXQsXG4gICAgICAgIGFsbFNoaXBTdW5rXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiLCJcblxuZnVuY3Rpb24gU2hpcChsZW5ndGgsc3Vuaz1mYWxzZSkge1xuICAgIGxldCBzaGlwX3R5cGU7XG4gICAgaWYgKGxlbmd0aCA+wqA1IHx8wqBsZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzaGlwIGxlbmd0aCBpcyBiZXR3ZWVuIDMtNVwiKVxuICAgIH1cbiAgICBpZiAobGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBfdHlwZSA9IFwiRGVzdHJveWVyXCI7XG4gICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcF90eXBlID0gXCJTdWJtYXJpbmVcIlxuICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBfdHlwZSA9IFwiQmF0dGxlc2hpcFwiXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcF90eXBlID0gXCJDYXJyaWVyXCJcbiAgICB9XG5cblxuXG4gICAgY29uc3QgIGRlY2tzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDtpIDwgbGVuZ3RoO2krKykge1xuICAgICAgICBkZWNrcy5wdXNoKHtzaGlwX3R5cGUsIHNoaXBfbGVuZ3RoOiBsZW5ndGgsIHdhc19oaXQ6IGZhbHNlLH0pXG4gICAgfVxuXG4gICAgIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24gPsKgZGVja3MubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzaGlwIGRvZXMgbm90IGhhdmUgdGhhdCBtdWNoIGRlY2tzLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZGVja3NbcG9zaXRpb25dLnNoaXBfdHlwZSAhPSBudWxsICYmIGRlY2tzW3Bvc2l0aW9uXS53YXNfaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVja3NbcG9zaXRpb25dLndhc19oaXQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHBsYWNlIHdhcyBhbHJlYWR5IGhpdFwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNrc1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZWNrcy5ldmVyeSgoZGVja19zdGF0dXMpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIGRlY2tfc3RhdHVzLndhc19oaXQgPT09IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgZGVja3MsXG4gICAgICAgICAgICBzdW5rLFxuICAgICAgICAgICAgaGl0LFxuICAgICAgICAgICAgaXNTdW5rXG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcHMoKSB7XG4gICAgcmV0dXJuIFtuZXcgU2hpcCgyKSxuZXcgU2hpcCgzKSxuZXcgU2hpcCgzKSwgbmV3IFNoaXAoNCksIG5ldyBTaGlwKDUpXTtcbn07XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4vZnVuY3Rpb25zL2JvYXJkXCI7XG5cbmNvbnN0IGIgPSBCb2FyZCgpO1xuXG5jb25zb2xlLmxvZyhiLmJvYXJkKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==