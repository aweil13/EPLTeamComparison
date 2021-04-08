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
var seasonPoints = {};
var seasonLength = [];

for (var i = 0; i < 39; i++) {
  seasonLength.push(i);
}

d3.csv("./data/1819.csv").then(function (data) {
  // loop for extracting teams from season into teams array
  for (var _i = 0; _i < data.length; _i++) {
    if (!teams.includes(data[_i]["HomeTeam"])) {
      teams.push(data[_i]["HomeTeam"]);
    } else if (!teams.includes(data[_i]["AwayTeam"])) {
      teams.push(data[_i]["AwayTeam"]);
    }
  } // nested loop for extracting team points from data


  for (var _i2 = 0; _i2 < teams.length; _i2++) {
    var team = teams[_i2];
    seasonPoints[team] = [[0, 0]];

    for (var j = 0; j < data.length; j++) {
      var match = data[j];
      var prevPoints = seasonPoints[team][seasonPoints[team].length - 1][1];
      var prevMatchday = seasonPoints[team][seasonPoints[team].length - 1][0]; // switch statements for building team points array

      if (match["HomeTeam"] === team) {
        switch (match["FTR"]) {
          case "H":
            seasonPoints[team].push([prevMatchday + 1, prevPoints + 3]);
            break;

          case "A":
            seasonPoints[team].push([prevMatchday + 1, prevPoints]);
            break;

          case "D":
            seasonPoints[team].push([prevMatchday + 1, prevPoints + 1]);

          default:
            break;
        }
      } else if (match["AwayTeam"] === team) {
        switch (match["FTR"]) {
          case "A":
            seasonPoints[team].push([prevMatchday + 1, prevPoints + 3]);
            break;

          case "H":
            seasonPoints[team].push([prevMatchday + 1, prevPoints]);
            break;

          case "D":
            seasonPoints[team].push([prevMatchday + 1, prevPoints + 1]);

          default:
            break;
        }
      }
    }
  } //  Line Graph


  var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]); // var valueLine1 = d3.line(seasonPoints["Liverpool"])
  // var valueLine2 = d3.line(seasonPoints["Southampton"])

  var lineGenerator = d3.line();
  var pathData1 = lineGenerator(seasonPoints["Liverpool"]);
  var pathData2 = lineGenerator(seasonPoints["Southampton"]);
  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  x.domain([0, d3.max(seasonLength)]);
  y.domain([0, d3.max(seasonPoints["Liverpool"][seasonPoints["Liverpool"].length - 1])]);
  svg.append("path").data(seasonPoints["Liverpool"]).attr("class", "line").style("stroke", "red").attr("d", pathData1);
  svg.append("path").data(seasonPoints["Southampton"]).attr("d", pathData2).attr("class", "line").style("stroke", "blue");
  svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));
});
var arsenal = "Arsenal";
console.log(seasonPoints);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsImluY2x1ZGVzIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwicGF0aERhdGExIiwicGF0aERhdGEyIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImRvbWFpbiIsIm1heCIsInN0eWxlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsImFyc2VuYWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUMsV0FBRCxDQURsQixFQUVDaUMsSUFGRCxDQUVNLE9BRk4sRUFFZSxNQUZmLEVBR0NHLEtBSEQsQ0FHTyxRQUhQLEVBR2lCLEtBSGpCLEVBSUNILElBSkQsQ0FJTSxHQUpOLEVBSVdMLFNBSlg7QUFNQUUsS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUNDekIsSUFERCxDQUNNUCxZQUFZLENBQUMsYUFBRCxDQURsQixFQUVDaUMsSUFGRCxDQUVNLEdBRk4sRUFFV0osU0FGWCxFQUdDSSxJQUhELENBR00sT0FITixFQUdlLE1BSGYsRUFJQ0csS0FKRCxDQUlPLFFBSlAsRUFJaUIsTUFKakI7QUFPQU4sS0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixpQkFBaUJaLE1BQWpCLEdBQTBCLEdBRDdDLEVBRUNnQixJQUZELENBRU1qQyxFQUFFLENBQUNrQyxVQUFILENBQWNoQixDQUFkLENBRk47QUFJQVEsS0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUJqQyxFQUFFLENBQUNtQyxRQUFILENBQVlkLENBQVosQ0FBckI7QUFFQyxDQS9GRDtBQWlHQSxJQUFNZSxPQUFPLEdBQUcsU0FBaEI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVkxQyxZQUFaLEU7Ozs7Ozs7Ozs7OztBQzlHQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5sZXQgdGVhbXMgPSBbXTtcbmxldCBzZWFzb25Qb2ludHMgPSB7fTtcblxubGV0IHNlYXNvbkxlbmd0aCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDM5OyBpKyspIHtcbiAgICBzZWFzb25MZW5ndGgucHVzaChpKTsgICAgXG59XG5cbmQzLmNzdihcIi4vZGF0YS8xODE5LmNzdlwiKVxuLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtcyBmcm9tIHNlYXNvbiBpbnRvIHRlYW1zIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkhvbWVUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiSG9tZVRlYW1cIl0pXG4gICAgICAgIH0gZWxzZSBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkF3YXlUZWFtXCJdKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG5lc3RlZCBsb29wIGZvciBleHRyYWN0aW5nIHRlYW0gcG9pbnRzIGZyb20gZGF0YVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRlYW0gPSB0ZWFtc1tpXTtcbiAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgbGV0IHByZXZQb2ludHMgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5ID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgLy8gc3dpdGNoIHN0YXRlbWVudHMgZm9yIGJ1aWxkaW5nIHRlYW0gcG9pbnRzIGFycmF5XG4gICAgICAgICAgICBpZiAobWF0Y2hbXCJIb21lVGVhbVwiXSA9PT0gdGVhbSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHMgKyAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICwgcHJldlBvaW50cyArIDFdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoW1wiQXdheVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4vLyAgTGluZSBHcmFwaFxuICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA1MH0sXG4gICAgd2lkdGggPSA5NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxudmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xudmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxuLy8gdmFyIHZhbHVlTGluZTEgPSBkMy5saW5lKHNlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXSlcblxuLy8gdmFyIHZhbHVlTGluZTIgPSBkMy5saW5lKHNlYXNvblBvaW50c1tcIlNvdXRoYW1wdG9uXCJdKVxuXG52YXIgbGluZUdlbmVyYXRvciA9IGQzLmxpbmUoKTtcbnZhciBwYXRoRGF0YTEgPSBsaW5lR2VuZXJhdG9yKHNlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXSlcbnZhciBwYXRoRGF0YTIgPSBsaW5lR2VuZXJhdG9yKHNlYXNvblBvaW50c1tcIlNvdXRoYW1wdG9uXCJdKVxuXG52YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbi5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbi5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbnguZG9tYWluKFswLCBkMy5tYXgoc2Vhc29uTGVuZ3RoKV0pXG55LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXVtzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0ubGVuZ3RoIC0gMV0pXSk7XG5cblxuXG5zdmcuYXBwZW5kKFwicGF0aFwiKVxuLmRhdGEoc2Vhc29uUG9pbnRzW1wiTGl2ZXJwb29sXCJdKVxuLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbi5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKVxuLmF0dHIoXCJkXCIsIHBhdGhEYXRhMSk7XG5cbnN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4uZGF0YShzZWFzb25Qb2ludHNbXCJTb3V0aGFtcHRvblwiXSlcbi5hdHRyKFwiZFwiLCBwYXRoRGF0YTIpXG4uYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmx1ZVwiKVxuXG5cbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4uY2FsbChkMy5heGlzQm90dG9tKHgpKTtcblxuc3ZnLmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5KSlcblxufSk7XG5cbmNvbnN0IGFyc2VuYWwgPSBcIkFyc2VuYWxcIlxuY29uc29sZS5sb2coc2Vhc29uUG9pbnRzKVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9