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
  svg.append("path").data(seasonPoints["Southampton"]).attr("d", pathData2).attr("class", "line").style("stroke", "yellow");
  svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsImluY2x1ZGVzIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwicGF0aERhdGExIiwicGF0aERhdGEyIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImRvbWFpbiIsIm1heCIsInN0eWxlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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RGxCLEVBRUNpQyxJQUZELENBRU0sT0FGTixFQUVlLE1BRmYsRUFHQ0csS0FIRCxDQUdPLFFBSFAsRUFHaUIsS0FIakIsRUFJQ0gsSUFKRCxDQUlNLEdBSk4sRUFJV0wsU0FKWDtBQU1BRSxLQUFHLENBQUNFLE1BQUosQ0FBVyxNQUFYLEVBQ0N6QixJQURELENBQ01QLFlBQVksQ0FBQyxhQUFELENBRGxCLEVBRUNpQyxJQUZELENBRU0sR0FGTixFQUVXSixTQUZYLEVBR0NJLElBSEQsQ0FHTSxPQUhOLEVBR2UsTUFIZixFQUlDRyxLQUpELENBSU8sUUFKUCxFQUlpQixRQUpqQjtBQU9BTixLQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CLGlCQUFpQlosTUFBakIsR0FBMEIsR0FEN0MsRUFFQ2dCLElBRkQsQ0FFTWpDLEVBQUUsQ0FBQ2tDLFVBQUgsQ0FBY2hCLENBQWQsQ0FGTjtBQUlBUSxLQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQmpDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWWQsQ0FBWixDQUFyQjtBQUVDLENBL0ZEO0FBaUdBZSxPQUFPLENBQUNDLEdBQVIsQ0FBWXpDLFlBQVosRTs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IHNlYXNvblBvaW50cyA9IHt9O1xuXG5sZXQgc2Vhc29uTGVuZ3RoID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzk7IGkrKykge1xuICAgIHNlYXNvbkxlbmd0aC5wdXNoKGkpOyAgICBcbn1cblxuZDMuY3N2KFwiLi9kYXRhLzE4MTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcbiAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbSBwb2ludHMgZnJvbSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IGRhdGFbal07XG4gICAgICAgICAgICBsZXQgcHJldlBvaW50cyA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2TWF0Y2hkYXkgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAvLyBzd2l0Y2ggc3RhdGVtZW50cyBmb3IgYnVpbGRpbmcgdGVhbSBwb2ludHMgYXJyYXlcbiAgICAgICAgICAgIGlmIChtYXRjaFtcIkhvbWVUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbXCJBd2F5VGVhbVwiXSA9PT0gdGVhbSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHMgKyAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICwgcHJldlBvaW50cyArIDFdKTsgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbi8vICBMaW5lIEdyYXBoXG4gICAgdmFyIG1hcmdpbiA9IHt0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDUwfSxcbiAgICB3aWR0aCA9IDk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG52YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG52YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4vLyB2YXIgdmFsdWVMaW5lMSA9IGQzLmxpbmUoc2Vhc29uUG9pbnRzW1wiTGl2ZXJwb29sXCJdKVxuXG4vLyB2YXIgdmFsdWVMaW5lMiA9IGQzLmxpbmUoc2Vhc29uUG9pbnRzW1wiU291dGhhbXB0b25cIl0pXG5cbnZhciBsaW5lR2VuZXJhdG9yID0gZDMubGluZSgpO1xudmFyIHBhdGhEYXRhMSA9IGxpbmVHZW5lcmF0b3Ioc2Vhc29uUG9pbnRzW1wiTGl2ZXJwb29sXCJdKVxudmFyIHBhdGhEYXRhMiA9IGxpbmVHZW5lcmF0b3Ioc2Vhc29uUG9pbnRzW1wiU291dGhhbXB0b25cIl0pXG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxueC5kb21haW4oWzAsIGQzLm1heChzZWFzb25MZW5ndGgpXSlcbnkuZG9tYWluKFswLCBkMy5tYXgoc2Vhc29uUG9pbnRzW1wiTGl2ZXJwb29sXCJdW3NlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXS5sZW5ndGggLSAxXSldKTtcblxuXG5cbnN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4uZGF0YShzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0pXG4uYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4uYXR0cihcImRcIiwgcGF0aERhdGExKTtcblxuc3ZnLmFwcGVuZChcInBhdGhcIilcbi5kYXRhKHNlYXNvblBvaW50c1tcIlNvdXRoYW1wdG9uXCJdKVxuLmF0dHIoXCJkXCIsIHBhdGhEYXRhMilcbi5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4uc3R5bGUoXCJzdHJva2VcIiwgXCJ5ZWxsb3dcIilcblxuXG5zdmcuYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbnN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbn0pO1xuXG5jb25zb2xlLmxvZyhzZWFzb25Qb2ludHMpXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=