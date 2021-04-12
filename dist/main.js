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
    bottom: 70,
    left: 50
  },
      width = 660 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X and Y Axis

  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  x.domain([0, d3.max(seasonLength)]);
  y.domain([0, 100]);
  svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).style("fill", "white");
  svg.append("g").call(d3.axisLeft(y)).style("fill", "white"); // Lines and animation

  svg.append("path").datum(seasonPoints["Liverpool"]).attr("class", "line").attr("id", "line0").style("stroke", "red").attr("d", d3.line().x(function (d) {
    return x(d[0]);
  }).y(function (d) {
    return y(d[1]);
  }));
  svg.append("path").datum(seasonPoints["Southampton"]).attr("class", "line").attr("id", "line1").style("stroke", "yellow").attr("d", d3.line().x(function (d) {
    return x(d[0]);
  }).y(function (d) {
    return y(d[1]);
  })); // line animations

  d3.selectAll(".line").each(function (d, i) {
    var totalLength = d3.select("#line" + i).node().getTotalLength();
    d3.selectAll("#line" + i).attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(2500).delay(100 * i).ease(d3.easeSin).attr("stroke-dashoffset", 0);
  });
  svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left - 5).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").attr("class", "yaxis").text("Points").attr("font-size", "22px").style('fill', 'white');
  svg.append("text").attr("transform", "translate (" + width / 2 + " ," + (height + margin.top + 25) + ")").attr("class", "xaxis").style("text-anchor", "middle").text("Matchday").attr("font-size", "22px").style('fill', 'white');
  svg.append("circle").attr("cx", 100).attr("cy", 50).attr("r", 4).style("fill", "red");
  svg.append("circle").attr("cx", 100).attr("cy", 70).attr("r", 4).style("fill", "yellow");
  svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool").attr("alignment-baseline", "middle");
  svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton").attr("alignment-baseline", "middle");
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsImluY2x1ZGVzIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInkiLCJkb21haW4iLCJtYXgiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInN0eWxlIiwiYXhpc0xlZnQiLCJkYXR1bSIsImxpbmUiLCJkIiwic2VsZWN0QWxsIiwiZWFjaCIsInRvdGFsTGVuZ3RoIiwibm9kZSIsImdldFRvdGFsTGVuZ3RoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwiZWFzZVNpbiIsInRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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SUFBM0YsQ0FBZ0csb0JBQWhHLEVBQXFILFFBQXJIO0FBSUgsQ0E3SUQsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxubGV0IHRlYW1zID0gW107XG5sZXQgc2Vhc29uUG9pbnRzID0ge307XG5cbmxldCBzZWFzb25MZW5ndGggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOTsgaSsrKSB7XG4gICAgc2Vhc29uTGVuZ3RoLnB1c2goaSk7ICAgIFxufVxuXG5kMy5jc3YoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvMTgxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJIb21lVGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkhvbWVUZWFtXCJdKVxuICAgICAgICB9IGVsc2UgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBuZXN0ZWQgbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtIHBvaW50cyBmcm9tIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheSA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgIC8vIHN3aXRjaCBzdGF0ZW1lbnRzIGZvciBidWlsZGluZyB0ZWFtIHBvaW50cyBhcnJheVxuICAgICAgICAgICAgaWYgKG1hdGNoW1wiSG9tZVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuLy8gIExpbmUgR3JhcGhcbnZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDcwLCBsZWZ0OiA1MH0sXG53aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXG5cbiAgLy8gWCBhbmQgWSBBeGlzXG4gIFxudmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xudmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxueC5kb21haW4oWzAsIGQzLm1heChzZWFzb25MZW5ndGgpXSk7XG55LmRvbWFpbihbMCwgMTAwXSk7XG5cblxuc3ZnLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi5jYWxsKGQzLmF4aXNCb3R0b20oeCkpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbnN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAvLyBMaW5lcyBhbmQgYW5pbWF0aW9uXG5cbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5kYXR1bShzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0pXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcImlkXCIsIFwibGluZTBcIilcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpLngoZCA9PiB7IHJldHVybiB4KGRbMF0pfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKX0pXG4gICAgKVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmRhdHVtKHNlYXNvblBvaW50c1tcIlNvdXRoYW1wdG9uXCJdKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImxpbmUxXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwieWVsbG93XCIpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKS54KGQgPT4geyByZXR1cm4geChkWzBdKSB9KVxuICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pIH0pXG4gICAgKVxuICAgIFxuXG4gICAgLy8gbGluZSBhbmltYXRpb25zXG5cbiAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5lYWNoKChkLCBpKSA9PiB7XG4gICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGQzLnNlbGVjdChcIiNsaW5lXCIgKyBpKS5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICAgXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIiNsaW5lXCIgKyBpKS5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDI1MDApXG4gICAgICAgIC5kZWxheSgxMDAqaSlcbiAgICAgICAgLmVhc2UoZDMuZWFzZVNpbilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKVxuICAgIH0pXG4gIFxuXG4gIFxuICBcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgMCAtIG1hcmdpbi5sZWZ0IC0gNSlcbiAgICAuYXR0cihcInhcIiwgMCAtIChoZWlnaHQvMikpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzXCIpXG4gICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAod2lkdGgvMikgKyBcIiAsXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIDI1KSArIFwiKVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4YXhpc1wiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJNYXRjaGRheVwiKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbiAgICBzdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA1MCkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwicmVkXCIpXG4gICAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNzApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInllbGxvd1wiKVxuICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJMaXZlcnBvb2xcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChcIlNvdXRoYW1wdG9uXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG4gIFxuXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9