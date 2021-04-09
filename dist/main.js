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

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath

  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function (x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function () {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function (x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function (x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function (x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        } // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
  },
  arc: function (x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      } // Is this arc empty? We’re done.


    if (!r) return; // Does the angle go the wrong way? Flip the direction.

    if (da < 0) da = da % tau + tau; // Is this a complete circle? Draw two arcs to complete the circle.

    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
  },
  rect: function (x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function () {
    return this._;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (path);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");


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
  y.domain([0, d3.max(seasonPoints["Liverpool"][seasonPoints["Liverpool"].length - 1])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXBhdGgvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1wYXRoL3NyYy9wYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsidGVhbXMiLCJzZWFzb25Qb2ludHMiLCJzZWFzb25MZW5ndGgiLCJpIiwicHVzaCIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInRlYW0iLCJqIiwibWF0Y2giLCJwcmV2UG9pbnRzIiwicHJldk1hdGNoZGF5IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ5IiwiZG9tYWluIiwibWF4IiwiY2FsbCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImF4aXNMZWZ0IiwiZGF0dW0iLCJsaW5lIiwiZCIsInNlbGVjdEFsbCIsImVhY2giLCJ0b3RhbExlbmd0aCIsIm5vZGUiLCJnZXRUb3RhbExlbmd0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSIsImVhc2VTaW4iLCJ0ZXh0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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dUVlLElBQXZFLENBQTRFLGFBQTVFLEVBQTJGeEIsSUFBM0YsQ0FBZ0csb0JBQWhHLEVBQXFILFFBQXJIO0FBSUgsQ0E3SUQ7QUErSUF5QixPQUFPLENBQUNDLEdBQVIsQ0FBWW5ELFlBQVosRTs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoIH0gZnJvbSBcIi4vcGF0aC5qc1wiOyIsImNvbnN0IHBpID0gTWF0aC5QSSxcbiAgICAgIHRhdSA9IDIgKiBwaSxcbiAgICAgIGVwc2lsb24gPSAxZS02LFxuICAgICAgdGF1RXBzaWxvbiA9IHRhdSAtIGVwc2lsb247XG5cbmZ1bmN0aW9uIFBhdGgoKSB7XG4gIHRoaXMuX3gwID0gdGhpcy5feTAgPSAvLyBzdGFydCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGw7IC8vIGVuZCBvZiBjdXJyZW50IHN1YnBhdGhcblxuICB0aGlzLl8gPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBwYXRoKCkge1xuICByZXR1cm4gbmV3IFBhdGgoKTtcbn1cblxuUGF0aC5wcm90b3R5cGUgPSBwYXRoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFBhdGgsXG4gIG1vdmVUbzogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJNXCIgKyAodGhpcy5feDAgPSB0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kwID0gdGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGNsb3NlUGF0aDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl94MSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MDtcbiAgICAgIHRoaXMuXyArPSBcIlpcIjtcbiAgICB9XG4gIH0sXG4gIGxpbmVUbzogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgcXVhZHJhdGljQ3VydmVUbzogZnVuY3Rpb24gKHgxLCB5MSwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIlFcIiArICt4MSArIFwiLFwiICsgK3kxICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYmV6aWVyQ3VydmVUbzogZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiQ1wiICsgK3gxICsgXCIsXCIgKyAreTEgKyBcIixcIiArICt4MiArIFwiLFwiICsgK3kyICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYXJjVG86IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Miwgcikge1xuICAgIHgxID0gK3gxLCB5MSA9ICt5MSwgeDIgPSAreDIsIHkyID0gK3kyLCByID0gK3I7XG4gICAgdmFyIHgwID0gdGhpcy5feDEsXG4gICAgICAgIHkwID0gdGhpcy5feTEsXG4gICAgICAgIHgyMSA9IHgyIC0geDEsXG4gICAgICAgIHkyMSA9IHkyIC0geTEsXG4gICAgICAgIHgwMSA9IHgwIC0geDEsXG4gICAgICAgIHkwMSA9IHkwIC0geTEsXG4gICAgICAgIGwwMV8yID0geDAxICogeDAxICsgeTAxICogeTAxOyAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cblxuICAgIGlmIChyIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwibmVnYXRpdmUgcmFkaXVzOiBcIiArIHIpOyAvLyBJcyB0aGlzIHBhdGggZW1wdHk/IE1vdmUgdG8gKHgxLHkxKS5cblxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfSAvLyBPciwgaXMgKHgxLHkxKSBjb2luY2lkZW50IHdpdGggKHgwLHkwKT8gRG8gbm90aGluZy5cbiAgICBlbHNlIGlmICghKGwwMV8yID4gZXBzaWxvbikpIDsgLy8gT3IsIGFyZSAoeDAseTApLCAoeDEseTEpIGFuZCAoeDIseTIpIGNvbGxpbmVhcj9cbiAgICAgIC8vIEVxdWl2YWxlbnRseSwgaXMgKHgxLHkxKSBjb2luY2lkZW50IHdpdGggKHgyLHkyKT9cbiAgICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICAgIGVsc2UgaWYgKCEoTWF0aC5hYnMoeTAxICogeDIxIC0geTIxICogeDAxKSA+IGVwc2lsb24pIHx8ICFyKSB7XG4gICAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeDIwID0geDIgLSB4MCxcbiAgICAgICAgICAgICAgICB5MjAgPSB5MiAtIHkwLFxuICAgICAgICAgICAgICAgIGwyMV8yID0geDIxICogeDIxICsgeTIxICogeTIxLFxuICAgICAgICAgICAgICAgIGwyMF8yID0geDIwICogeDIwICsgeTIwICogeTIwLFxuICAgICAgICAgICAgICAgIGwyMSA9IE1hdGguc3FydChsMjFfMiksXG4gICAgICAgICAgICAgICAgbDAxID0gTWF0aC5zcXJ0KGwwMV8yKSxcbiAgICAgICAgICAgICAgICBsID0gciAqIE1hdGgudGFuKChwaSAtIE1hdGguYWNvcygobDIxXzIgKyBsMDFfMiAtIGwyMF8yKSAvICgyICogbDIxICogbDAxKSkpIC8gMiksXG4gICAgICAgICAgICAgICAgdDAxID0gbCAvIGwwMSxcbiAgICAgICAgICAgICAgICB0MjEgPSBsIC8gbDIxOyAvLyBJZiB0aGUgc3RhcnQgdGFuZ2VudCBpcyBub3QgY29pbmNpZGVudCB3aXRoICh4MCx5MCksIGxpbmUgdG8uXG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICsoeTAxICogeDIwID4geDAxICogeTIwKSArIFwiLFwiICsgKHRoaXMuX3gxID0geDEgKyB0MjEgKiB4MjEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSArIHQyMSAqIHkyMSk7XG4gICAgICAgICAgfVxuICB9LFxuICBhcmM6IGZ1bmN0aW9uICh4LCB5LCByLCBhMCwgYTEsIGNjdykge1xuICAgIHggPSAreCwgeSA9ICt5LCByID0gK3IsIGNjdyA9ICEhY2N3O1xuICAgIHZhciBkeCA9IHIgKiBNYXRoLmNvcyhhMCksXG4gICAgICAgIGR5ID0gciAqIE1hdGguc2luKGEwKSxcbiAgICAgICAgeDAgPSB4ICsgZHgsXG4gICAgICAgIHkwID0geSArIGR5LFxuICAgICAgICBjdyA9IDEgXiBjY3csXG4gICAgICAgIGRhID0gY2N3ID8gYTAgLSBhMSA6IGExIC0gYTA7IC8vIElzIHRoZSByYWRpdXMgbmVnYXRpdmU/IEVycm9yLlxuXG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgcik7IC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDAseTApLlxuXG4gICAgaWYgKHRoaXMuX3gxID09PSBudWxsKSB7XG4gICAgICB0aGlzLl8gKz0gXCJNXCIgKyB4MCArIFwiLFwiICsgeTA7XG4gICAgfSAvLyBPciwgaXMgKHgwLHkwKSBub3QgY29pbmNpZGVudCB3aXRoIHRoZSBwcmV2aW91cyBwb2ludD8gTGluZSB0byAoeDAseTApLlxuICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuX3gxIC0geDApID4gZXBzaWxvbiB8fCBNYXRoLmFicyh0aGlzLl95MSAtIHkwKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgICAgfSAvLyBJcyB0aGlzIGFyYyBlbXB0eT8gV2XigJlyZSBkb25lLlxuXG5cbiAgICBpZiAoIXIpIHJldHVybjsgLy8gRG9lcyB0aGUgYW5nbGUgZ28gdGhlIHdyb25nIHdheT8gRmxpcCB0aGUgZGlyZWN0aW9uLlxuXG4gICAgaWYgKGRhIDwgMCkgZGEgPSBkYSAlIHRhdSArIHRhdTsgLy8gSXMgdGhpcyBhIGNvbXBsZXRlIGNpcmNsZT8gRHJhdyB0d28gYXJjcyB0byBjb21wbGV0ZSB0aGUgY2lyY2xlLlxuXG4gICAgaWYgKGRhID4gdGF1RXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAoeCAtIGR4KSArIFwiLFwiICsgKHkgLSBkeSkgKyBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLDEsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geDApICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MCk7XG4gICAgfSAvLyBJcyB0aGlzIGFyYyBub24tZW1wdHk/IERyYXcgYW4gYXJjIVxuICAgIGVsc2UgaWYgKGRhID4gZXBzaWxvbikge1xuICAgICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCxcIiArICsoZGEgPj0gcGkpICsgXCIsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geCArIHIgKiBNYXRoLmNvcyhhMSkpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5ICsgciAqIE1hdGguc2luKGExKSk7XG4gICAgICB9XG4gIH0sXG4gIHJlY3Q6IGZ1bmN0aW9uICh4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpICsgXCJoXCIgKyArdyArIFwidlwiICsgK2ggKyBcImhcIiArIC13ICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuXztcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHBhdGg7IiwiXG5pbXBvcnQgeyBwYXRoIH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxubGV0IHRlYW1zID0gW107XG5sZXQgc2Vhc29uUG9pbnRzID0ge307XG5cbmxldCBzZWFzb25MZW5ndGggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOTsgaSsrKSB7XG4gICAgc2Vhc29uTGVuZ3RoLnB1c2goaSk7ICAgIFxufVxuXG5kMy5jc3YoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvMTgxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJIb21lVGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkhvbWVUZWFtXCJdKVxuICAgICAgICB9IGVsc2UgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBuZXN0ZWQgbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtIHBvaW50cyBmcm9tIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheSA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgIC8vIHN3aXRjaCBzdGF0ZW1lbnRzIGZvciBidWlsZGluZyB0ZWFtIHBvaW50cyBhcnJheVxuICAgICAgICAgICAgaWYgKG1hdGNoW1wiSG9tZVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuLy8gIExpbmUgR3JhcGhcbnZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDcwLCBsZWZ0OiA1MH0sXG53aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXG5cbiAgLy8gWCBhbmQgWSBBeGlzXG4gIFxudmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xudmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxueC5kb21haW4oWzAsIGQzLm1heChzZWFzb25MZW5ndGgpXSk7XG55LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvblBvaW50c1tcIkxpdmVycG9vbFwiXVtzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0ubGVuZ3RoIC0gMV0pXSk7XG5cblxuc3ZnLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi5jYWxsKGQzLmF4aXNCb3R0b20oeCkpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbnN2Zy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeSkpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAvLyBMaW5lcyBhbmQgYW5pbWF0aW9uXG5cbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5kYXR1bShzZWFzb25Qb2ludHNbXCJMaXZlcnBvb2xcIl0pXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAuYXR0cihcImlkXCIsIFwibGluZTBcIilcbiAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpLngoZCA9PiB7IHJldHVybiB4KGRbMF0pfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKX0pXG4gICAgKVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmRhdHVtKHNlYXNvblBvaW50c1tcIlNvdXRoYW1wdG9uXCJdKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBcImxpbmUxXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwieWVsbG93XCIpXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKS54KGQgPT4geyByZXR1cm4geChkWzBdKSB9KVxuICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pIH0pXG4gICAgKVxuICAgIFxuXG4gICAgLy8gbGluZSBhbmltYXRpb25zXG5cbiAgICBkMy5zZWxlY3RBbGwoXCIubGluZVwiKS5lYWNoKChkLCBpKSA9PiB7XG4gICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGQzLnNlbGVjdChcIiNsaW5lXCIgKyBpKS5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICAgXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIiNsaW5lXCIgKyBpKS5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgdG90YWxMZW5ndGgpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDI1MDApXG4gICAgICAgIC5kZWxheSgxMDAqaSlcbiAgICAgICAgLmVhc2UoZDMuZWFzZVNpbilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKVxuICAgIH0pXG4gIFxuXG4gIFxuICBcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgMCAtIG1hcmdpbi5sZWZ0IC0gNSlcbiAgICAuYXR0cihcInhcIiwgMCAtIChoZWlnaHQvMikpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzXCIpXG4gICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAod2lkdGgvMikgKyBcIiAsXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIDI1KSArIFwiKVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4YXhpc1wiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJNYXRjaGRheVwiKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbiAgICBzdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA1MCkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwicmVkXCIpXG4gICAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNzApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInllbGxvd1wiKVxuICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJMaXZlcnBvb2xcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChcIlNvdXRoYW1wdG9uXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG4gIFxuXG59KTtcblxuY29uc29sZS5sb2coc2Vhc29uUG9pbnRzKVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9