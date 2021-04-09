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

d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/1819.csv").then(function (data) {
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
      width = 500 - margin.left - margin.right,
      height = 460 - margin.top - margin.bottom;
  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X and Y Axis

  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  x.domain([0, d3.max(seasonLength)]);
  y.domain([0, d3.max(seasonPoints["Liverpool"][seasonPoints["Liverpool"].length - 1])]);
  svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));
  svg.append("path").datum(seasonPoints["Liverpool"]).attr("class", "line").style("stroke", "red").attr("d", d3.line().x(function (d) {
    return x(d[0]);
  }).y(function (d) {
    return y(d[1]);
  }));
  svg.append("path").datum(seasonPoints["Southampton"]).attr("class", "line").style("stroke", "yellow").attr("d", d3.line().x(function (d) {
    return x(d[0]);
  }).y(function (d) {
    return y(d[1]);
  }));
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsImluY2x1ZGVzIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInkiLCJkb21haW4iLCJtYXgiLCJjYWxsIiwiYXhpc0JvdHRvbSIsImF4aXNMZWZ0IiwiZGF0dW0iLCJzdHlsZSIsImxpbmUiLCJkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVB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QyxZQUFZLENBQUMsV0FBRCxDQURuQixFQUVDeUIsSUFGRCxDQUVNLE9BRk4sRUFFZSxNQUZmLEVBR0NXLEtBSEQsQ0FHTyxRQUhQLEVBR2lCLEtBSGpCLEVBSUNYLElBSkQsQ0FJTSxHQUpOLEVBSVdyQixFQUFFLENBQUNpQyxJQUFILEdBQVVYLENBQVYsQ0FBWSxVQUFBWSxDQUFDLEVBQUk7QUFBRSxXQUFPWixDQUFDLENBQUNZLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFlLEdBQWxDLEVBQ1ZULENBRFUsQ0FDUixVQUFBUyxDQUFDLEVBQUk7QUFBQyxXQUFPVCxDQUFDLENBQUNTLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFlLEdBRGIsQ0FKWDtBQVFBaEIsS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUNDVyxLQURELENBQ09uQyxZQUFZLENBQUMsYUFBRCxDQURuQixFQUVDeUIsSUFGRCxDQUVNLE9BRk4sRUFFZSxNQUZmLEVBR0NXLEtBSEQsQ0FHTyxRQUhQLEVBR2lCLFFBSGpCLEVBSUNYLElBSkQsQ0FJTSxHQUpOLEVBSVdyQixFQUFFLENBQUNpQyxJQUFILEdBQVVYLENBQVYsQ0FBWSxVQUFBWSxDQUFDLEVBQUk7QUFBRSxXQUFPWixDQUFDLENBQUNZLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFnQixHQUFuQyxFQUNWVCxDQURVLENBQ1IsVUFBQVMsQ0FBQyxFQUFJO0FBQUMsV0FBT1QsQ0FBQyxDQUFDUyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBZ0IsR0FEZCxDQUpYO0FBVUgsQ0FoR0Q7QUFrR0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsWUFBWixFOzs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxubGV0IHRlYW1zID0gW107XG5sZXQgc2Vhc29uUG9pbnRzID0ge307XG5cbmxldCBzZWFzb25MZW5ndGggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOTsgaSsrKSB7XG4gICAgc2Vhc29uTGVuZ3RoLnB1c2goaSk7ICAgIFxufVxuXG5kMy5jc3YoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvMTgxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJIb21lVGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkhvbWVUZWFtXCJdKVxuICAgICAgICB9IGVsc2UgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBuZXN0ZWQgbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtIHBvaW50cyBmcm9tIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheSA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgIC8vIHN3aXRjaCBzdGF0ZW1lbnRzIGZvciBidWlsZGluZyB0ZWFtIHBvaW50cyBhcnJheVxuICAgICAgICAgICAgaWYgKG1hdGNoW1wiSG9tZVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuLy8gIExpbmUgR3JhcGhcbnZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA1MH0sXG53aWR0aCA9IDUwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuaGVpZ2h0ID0gNDYwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXG5cbiAgLy8gWCBhbmQgWSBBeGlzXG4gIFxudmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xudmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxueC5kb21haW4oWzAsIGQzLm1heChzZWFzb25MZW5ndGgpXSk7XG55LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXVtzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0ubGVuZ3RoIC0gMV0pXSk7XG5cblxuc3ZnLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG5zdmcuYXBwZW5kKFwiZ1wiKS5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgXG4gICAgc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAuZGF0dW0oc2Vhc29uUG9pbnRzW1wiTGl2ZXJwb29sXCJdKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKS54KGQgPT4geyByZXR1cm4geChkWzBdKX0pXG4gICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSl9KVxuICAgIClcbiAgICBcbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5kYXR1bShzZWFzb25Qb2ludHNbXCJTb3V0aGFtcHRvblwiXSlcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInllbGxvd1wiKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKCkueChkID0+IHsgcmV0dXJuIHgoZFswXSkgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKSB9KVxuICAgIClcbiAgXG5cblxufSk7XG5cbmNvbnNvbGUubG9nKHNlYXNvblBvaW50cylcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==