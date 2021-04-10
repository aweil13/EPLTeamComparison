/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var teams = [];
var allTeamStats = [];
var X_AXIS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Committed", "Fouls Against", "Yellow Cards", "Red Cards"];
d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/1819.csv").then(function (data) {
  // loop for extracting teams from season into teams array
  for (var i = 0; i < data.length; i++) {
    if (!teams.includes(data[i]["HomeTeam"])) {
      teams.push(data[i]["HomeTeam"]);
    } else if (!teams.includes(data[i]["AwayTeam"])) {
      teams.push(data[i]["AwayTeam"]);
    }
  } // loop creating seasonStats array of objects


  for (var _i = 0; _i < teams.length; _i++) {
    var team = teams[_i];
    allTeamStats.push({
      "Team": team,
      "Points": 0,
      "Shots": 0,
      "ShotsOnTarget": 0,
      "FirstHalfGoals": 0,
      "SecondHalfGoals": 0,
      "TotalGoals": 0,
      "GoalsAgainst": 0,
      "Corners": 0,
      "FoulsCommited": 0,
      "FoulsAgainst": 0,
      "YellowCards": 0,
      "RedCards": 0
    });
  } // nested loop for extracting data and placing it inside seasonStats array of objects


  for (var _i2 = 0; _i2 < allTeamStats.length; _i2++) {
    var _team = allTeamStats[_i2];
    var teamName = _team["Team"];

    for (var j = 0; j < data.length; j++) {
      var match = data[j];

      if (teamName === match["HomeTeam"]) {
        switch (match["FTR"]) {
          case "H":
            _team["Points"] += 3;
            break;

          case "D":
            _team["Points"] += 1;
            break;

          default:
            break;
        }

        _team["Shots"] += parseInt(match["HS"]);
        _team["ShotsOnTarget"] += parseInt(match["HST"]);
        _team["FirstHalfGoals"] += parseInt(match["HTHG"]);
        _team["SecondHalfGoals"] += parseInt(match["FTHG"]) - parseInt(match["HTHG"]);
        _team["TotalGoals"] += parseInt(match["FTHG"]);
        _team["GoalsAgainst"] += parseInt(match["FTAG"]);
        _team["Corners"] += parseInt(match["HC"]);
        _team["FoulsCommited"] += parseInt(match["HF"]);
        _team["FoulsAgainst"] += parseInt(match["AF"]);
        _team["YellowCards"] += parseInt(match["HY"]);
        _team["RedCards"] += parseInt(match["HR"]);
      } else if (teamName === match["AwayTeam"]) {
        switch (match["FTR"]) {
          case "A":
            _team["Points"] += 3;
            break;

          case "D":
            _team["Points"] += 1;

          default:
            break;
        }

        _team["Shots"] += parseInt(match["AS"]);
        _team["ShotsOnTarget"] += parseInt(match["AST"]);
        _team["FirstHalfGoals"] += parseInt(match["HTAG"]);
        _team["SecondHalfGoals"] += parseInt(match["FTAG"]) - parseInt(match["HTAG"]);
        _team["TotalGoals"] += parseInt(match["FTAG"]);
        _team["GoalsAgainst"] += parseInt(match["FTHG"]);
        _team["Corners"] += parseInt(match["AC"]);
        _team["FoulsCommited"] += parseInt(match["AF"]);
        _team["FoulsAgainst"] += parseInt(match["HF"]);
        _team["YellowCards"] += parseInt(match["AY"]);
        _team["RedCards"] += parseInt(match["AR"]);
      }
    }
  }

  console.log(data);
});
console.log(allTeamStats);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsImFsbFRlYW1TdGF0cyIsIlhfQVhJUyIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwidGVhbSIsInRlYW1OYW1lIiwiaiIsIm1hdGNoIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsaUJBQXBC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aW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5sZXQgdGVhbXMgPSBbXTtcbmxldCBhbGxUZWFtU3RhdHMgPSBbXTtcbmNvbnN0IFhfQVhJUyA9IFtcIlBvaW50c1wiLCBcIlNob3RzXCIsIFwiU2hvdHMgb24gVGFyZ2V0XCIsIFwiRmlyc3QgSGFsZiBHb2Fsc1wiLCBcIlNlY29uZCBIYWxmIEdvYWxzXCIsIFwiVG90YWwgR29hbHNcIiwgXCJHb2FscyBBZ2FpbnN0XCIsIFwiQ29ybmVyc1wiLCBcIkZvdWxzIENvbW1pdHRlZFwiLCBcIkZvdWxzIEFnYWluc3RcIiwgXCJZZWxsb3cgQ2FyZHNcIiwgXCJSZWQgQ2FyZHNcIl1cblxuZDMuY3N2KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLzE4MTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcblxuICAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkhvbWVUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiSG9tZVRlYW1cIl0pXG4gICAgICAgIH0gZWxzZSBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkF3YXlUZWFtXCJdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9vcCBjcmVhdGluZyBzZWFzb25TdGF0cyBhcnJheSBvZiBvYmplY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBhbGxUZWFtU3RhdHMucHVzaCh7XG4gICAgICAgICBcIlRlYW1cIjogdGVhbSxcbiAgICAgICAgIFwiUG9pbnRzXCI6IDAsXG4gICAgICAgICBcIlNob3RzXCI6IDAsXG4gICAgICAgICBcIlNob3RzT25UYXJnZXRcIjogMCxcbiAgICAgICAgIFwiRmlyc3RIYWxmR29hbHNcIjogMCxcbiAgICAgICAgIFwiU2Vjb25kSGFsZkdvYWxzXCI6IDAsXG4gICAgICAgICBcIlRvdGFsR29hbHNcIjogMCxcbiAgICAgICAgIFwiR29hbHNBZ2FpbnN0XCI6IDAsXG4gICAgICAgICBcIkNvcm5lcnNcIjogMCxcbiAgICAgICAgIFwiRm91bHNDb21taXRlZFwiOiAwLFxuICAgICAgICAgXCJGb3Vsc0FnYWluc3RcIjogMCxcbiAgICAgICAgIFwiWWVsbG93Q2FyZHNcIjogMCxcbiAgICAgICAgIFwiUmVkQ2FyZHNcIjogMCAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIG5lc3RlZCBsb29wIGZvciBleHRyYWN0aW5nIGRhdGEgYW5kIHBsYWNpbmcgaXQgaW5zaWRlIHNlYXNvblN0YXRzIGFycmF5IG9mIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRlYW1TdGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IGFsbFRlYW1TdGF0c1tpXTtcbiAgICAgICAgbGV0IHRlYW1OYW1lID0gdGVhbVtcIlRlYW1cIl07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgIGlmICh0ZWFtTmFtZSA9PT0gbWF0Y2hbXCJIb21lVGVhbVwiXSl7XG4gICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90c1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhTXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2hvdHNPblRhcmdldFwiXSArPSBwYXJzZUludChtYXRjaFtcIkhTVFwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZpcnN0SGFsZkdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNlY29uZEhhbGZHb2Fsc1wiXSArPSAocGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJUb3RhbEdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkdvYWxzQWdhaW5zdFwiXSArPSBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJDb3JuZXJzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSENcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGb3Vsc0NvbW1pdGVkXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGb3Vsc0FnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlllbGxvd0NhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFlcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJSZWRDYXJkc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhSXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVhbU5hbWUgPT09IG1hdGNoW1wiQXdheVRlYW1cIl0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1bXCJQb2ludHNcIl0gKz0gMyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAxXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90c09uVGFyZ2V0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRmlyc3RIYWxmR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2Vjb25kSGFsZkdvYWxzXCJdICs9IChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlRvdGFsR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiR29hbHNBZ2FpbnN0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkNvcm5lcnNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzQ29tbWl0ZWRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzQWdhaW5zdFwiXSArPSBwYXJzZUludChtYXRjaFtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiWWVsbG93Q2FyZHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBWVwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlJlZENhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG59KVxuXG5jb25zb2xlLmxvZyhhbGxUZWFtU3RhdHMpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=