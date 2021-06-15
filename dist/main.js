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

var MARGIN = {
  top: 30,
  right: 30,
  bottom: 80,
  left: 60
},
    WIDTH = 700 - MARGIN.left - MARGIN.right,
    HEIGHT = 640 - MARGIN.top - MARGIN.bottom,
    TEAMS = {
  team1: "",
  team2: ""
},
    SEASONS = {
  season1: "",
  season2: ""
},
    GRAPH = {
  line: false,
  bar: false
}; // Document manipulation for onchange events

document.addEventListener("DOMContentLoaded", function () {
  // select menus for seasons
  var teamOneSeasonSelector = document.querySelector("select.team1-season");
  var teamTwoSeasonSelector = document.querySelector("select.team2-season"); // select menus for teams

  var firstTeamSelector = document.querySelector("select.team1-name");
  var secondTeamSelector = document.querySelector("select.team2-name"); // form element

  var searchForm = document.querySelector("div.search-container"); // submit button

  var compareButton = d3.select(".compare-button"); // on change selector events to populate team names

  teamOneSeasonSelector.onchange = function (event) {
    var season = event.target.value;
    removeTeamsFromSearch(".team1-name");
    populateTeamSelector(season, "team1-name");
  };

  teamTwoSeasonSelector.onchange = function (event) {
    var season = event.target.value;
    removeTeamsFromSearch(".team2-name");
    populateTeamSelector(season, "team2-name");
  };

  compareButton.on("click", function (d) {
    searchForm.style.display = "none";
    resetButton(searchForm);
    TEAMS["team1"] = firstTeamSelector.value;
    TEAMS["team2"] = secondTeamSelector.value;
    SEASONS["season1"] = teamOneSeasonSelector.value;
    SEASONS["season2"] = teamTwoSeasonSelector.value;
    createLineGraph(TEAMS["team1"], SEASONS["season1"], TEAMS["team2"], SEASONS["season2"]);
  });
}); // function to remove options from select dropdown

var removeTeamsFromSearch = function removeTeamsFromSearch(element) {
  d3.select(element).selectChildren("option").remove();
}; // function to populate team selectors for each season


var populateTeamSelector = function populateTeamSelector(season, selector) {
  var teams = [];
  d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(season, ".csv")).then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var matchday = data[i];

      if (!teams.includes(matchday["HomeTeam"])) {
        teams.push(matchday["HomeTeam"]);
      } else if (!teams.includes(matchday["AwayTeam"])) {
        teams.push(matchday["AwayTeam"]);
      }
    }

    var dropDownTeam = d3.select(".".concat(selector));
    dropDownTeam.selectAll('dataOptions').data(teams).enter().append('option').text(function (d) {
      return d;
    }).attr("value", function (d) {
      return d;
    }).attr("label", function (d) {
      return d;
    });
  });
}; // function to remove the svg chart


var removeGraph = function removeGraph() {
  d3.select("svg").remove();
}; // Function to add a reset button to the DOM to return to the search component


var resetButton = function resetButton(searchForm) {
  var buttonContainer = d3.select(".reset-button-container");
  buttonContainer.append("button").attr("class", "reset-button").text("Reset").on("click", function (d) {
    removeGraph();
    removeChangeGraphButton();
    buttonContainer.selectChildren("button").remove();
    searchForm.style.display = "block";
    TEAMS["team1"] = "";
    TEAMS["team2"] = "";
    SEASONS["season1"] = "";
    SEASONS["season2"] = "";
  });
}; // function to create graphs


var createBarGraph = function createBarGraph(team1, season1, team2, season2) {
  d3.select("svg").remove();
  d3.select("#svg-container").append("svg").attr("width", WIDTH + MARGIN.left + MARGIN.right).attr("height", HEIGHT + MARGIN.top + MARGIN.bottom).append("g").attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  GRAPH.bar = true;
  GRAPH.line = false;
  changeGraphButton();
};

var createLineGraph = function createLineGraph(team1, season1, team2, season2) {
  d3.select("svg").remove();
  d3.select("#svg-container").append("svg").attr("width", WIDTH + MARGIN.left + MARGIN.right).attr("height", HEIGHT + MARGIN.top + MARGIN.bottom).append("g").attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  GRAPH.line = true;
  GRAPH.bar = false;
  changeGraphButton();
}; // function to change graph to either line graph or bar graph


var changeGraphButton = function changeGraphButton() {
  d3.select(".change-graph-type-container").selectChildren("button").remove();

  if (GRAPH.line === true && GRAPH.bar === false) {
    d3.select(".change-graph-type-container").append("button").attr("class", "change-graph-button").text("Bar Graph").on("click", function (d) {
      createBarGraph(TEAMS.team1, SEASONS.season1, TEAMS.team2, SEASONS.season2);
    });
  } else if (GRAPH.bar === true && GRAPH.line === false) {
    d3.select(".change-graph-type-container").append("button").attr("class", "change-graph-button").text("Line Graph").on("click", function (d) {
      createLineGraph(TEAMS.team1, SEASONS.season1, TEAMS.team2, SEASONS.season2);
    });
  }
}; // function to remove change graph button


var removeChangeGraphButton = function removeChangeGraphButton() {
  d3.select(".change-graph-button").remove();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIlRFQU1TIiwidGVhbTEiLCJ0ZWFtMiIsIlNFQVNPTlMiLCJzZWFzb24xIiwic2Vhc29uMiIsIkdSQVBIIiwibGluZSIsImJhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlYW1PbmVTZWFzb25TZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZWFtVHdvU2Vhc29uU2VsZWN0b3IiLCJmaXJzdFRlYW1TZWxlY3RvciIsInNlY29uZFRlYW1TZWxlY3RvciIsInNlYXJjaEZvcm0iLCJjb21wYXJlQnV0dG9uIiwiZDMiLCJzZWxlY3QiLCJvbmNoYW5nZSIsImV2ZW50Iiwic2Vhc29uIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1vdmVUZWFtc0Zyb21TZWFyY2giLCJwb3B1bGF0ZVRlYW1TZWxlY3RvciIsIm9uIiwiZCIsInN0eWxlIiwiZGlzcGxheSIsInJlc2V0QnV0dG9uIiwiY3JlYXRlTGluZUdyYXBoIiwiZWxlbWVudCIsInNlbGVjdENoaWxkcmVuIiwicmVtb3ZlIiwic2VsZWN0b3IiLCJ0ZWFtcyIsImNzdiIsInRoZW4iLCJkYXRhIiwiaSIsImxlbmd0aCIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJwdXNoIiwiZHJvcERvd25UZWFtIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhcHBlbmQiLCJ0ZXh0IiwiYXR0ciIsInJlbW92ZUdyYXBoIiwiYnV0dG9uQ29udGFpbmVyIiwicmVtb3ZlQ2hhbmdlR3JhcGhCdXR0b24iLCJjcmVhdGVCYXJHcmFwaCIsImNoYW5nZUdyYXBoQnV0dG9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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USxRQURSLEVBRUNFLElBRkQsQ0FFTSxPQUZOLEVBRWUscUJBRmYsRUFHQ0QsSUFIRCxDQUdNLFdBSE4sRUFJQ3ZCLEVBSkQsQ0FJSSxPQUpKLEVBSWEsVUFBU0MsQ0FBVCxFQUFXO0FBQ3RCMkIsb0JBQWMsQ0FBQ3ZELEtBQUssQ0FBQ0MsS0FBUCxFQUFjRSxPQUFPLENBQUNDLE9BQXRCLEVBQStCSixLQUFLLENBQUNFLEtBQXJDLEVBQTRDQyxPQUFPLENBQUNFLE9BQXBELENBQWQ7QUFDRCxLQU5EO0FBT0QsR0FSRCxNQVFPLElBQUlDLEtBQUssQ0FBQ0UsR0FBTixLQUFjLElBQWQsSUFBc0JGLEtBQUssQ0FBQ0MsSUFBTixLQUFlLEtBQXpDLEVBQStDO0FBQ3BEVyxNQUFFLENBQUNDLE1BQUgsQ0FBVSw4QkFBVixFQUNDOEIsTUFERCxDQUNRLFFBRFIsRUFFQ0UsSUFGRCxDQUVNLE9BRk4sRUFFZSxxQkFGZixFQUdDRCxJQUhELENBR00sWUFITixFQUlDdkIsRUFKRCxDQUlJLE9BSkosRUFJYSxVQUFTQyxDQUFULEVBQVc7QUFDdEJJLHFCQUFlLENBQUNoQyxLQUFLLENBQUNDLEtBQVAsRUFBY0UsT0FBTyxDQUFDQyxPQUF0QixFQUErQkosS0FBSyxDQUFDRSxLQUFyQyxFQUE0Q0MsT0FBTyxDQUFDRSxPQUFwRCxDQUFmO0FBQ0gsS0FOQztBQU1DO0FBQ04sQ0FuQkQsQyxDQXFCQTs7O0FBQ0EsSUFBTWlELHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNwQ3BDLElBQUUsQ0FBQ0MsTUFBSCxDQUFVLHNCQUFWLEVBQWtDZ0IsTUFBbEM7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7OztBQzlKQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA3MDAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDY0MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tLFxuVEVBTVMgPSB7dGVhbTE6IFwiXCIsIHRlYW0yOiBcIlwifSxcblNFQVNPTlMgPSB7c2Vhc29uMTogXCJcIiwgc2Vhc29uMjogXCJcIn0sXG5HUkFQSCA9IHtsaW5lOiBmYWxzZSwgYmFyOiBmYWxzZX07XG5cblxuXG4vLyBEb2N1bWVudCBtYW5pcHVsYXRpb24gZm9yIG9uY2hhbmdlIGV2ZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIHNlbGVjdCBtZW51cyBmb3Igc2Vhc29uc1xuICAgIGNvbnN0IHRlYW1PbmVTZWFzb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtc2Vhc29uXCIpXG4gICAgY29uc3QgdGVhbVR3b1NlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1zZWFzb25cIik7XG5cbiAgICAvLyBzZWxlY3QgbWVudXMgZm9yIHRlYW1zXG4gICAgY29uc3QgZmlyc3RUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0xLW5hbWVcIik7XG4gICAgY29uc3Qgc2Vjb25kVGVhbVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1uYW1lXCIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VhcmNoLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBjb21wYXJlQnV0dG9uID0gZDMuc2VsZWN0KFwiLmNvbXBhcmUtYnV0dG9uXCIpXG5cbiAgICAvLyBvbiBjaGFuZ2Ugc2VsZWN0b3IgZXZlbnRzIHRvIHBvcHVsYXRlIHRlYW0gbmFtZXNcbiAgICB0ZWFtT25lU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMS1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0xLW5hbWVcIik7XG4gICAgfVxuXG4gICAgdGVhbVR3b1NlYXNvblNlbGVjdG9yLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWFzb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZW1vdmVUZWFtc0Zyb21TZWFyY2goXCIudGVhbTItbmFtZVwiKTtcbiAgICAgIHBvcHVsYXRlVGVhbVNlbGVjdG9yKHNlYXNvbiwgXCJ0ZWFtMi1uYW1lXCIpO1xuICAgIH1cblxuICAgIGNvbXBhcmVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXNldEJ1dHRvbihzZWFyY2hGb3JtKTtcbiAgICAgIFxuICAgICAgICBURUFNU1tcInRlYW0xXCJdID0gZmlyc3RUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFRFQU1TW1widGVhbTJcIl0gPSBzZWNvbmRUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24xXCJdID0gdGVhbU9uZVNlYXNvblNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IHRlYW1Ud29TZWFzb25TZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjcmVhdGVMaW5lR3JhcGgoVEVBTVNbXCJ0ZWFtMVwiXSwgU0VBU09OU1tcInNlYXNvbjFcIl0sIFRFQU1TW1widGVhbTJcIl0sIFNFQVNPTlNbXCJzZWFzb24yXCJdKTtcbiAgICB9KVxuICAgIFxufSlcblxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgb3B0aW9ucyBmcm9tIHNlbGVjdCBkcm9wZG93blxuY29uc3QgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoID0gZWxlbWVudCA9PiB7XG4gICAgZDMuc2VsZWN0KGVsZW1lbnQpLnNlbGVjdENoaWxkcmVuKFwib3B0aW9uXCIpLnJlbW92ZSgpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSB0ZWFtIHNlbGVjdG9ycyBmb3IgZWFjaCBzZWFzb25cbmNvbnN0IHBvcHVsYXRlVGVhbVNlbGVjdG9yID0gKHNlYXNvbiwgc2VsZWN0b3IpID0+IHtcbiAgIGNvbnN0IHRlYW1zID0gW107XG4gICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3NlYXNvbn0uY3N2YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hkYXkgPSBkYXRhW2ldO1xuICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSkpe1xuICAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRlYW1zLmluY2x1ZGVzKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICAgdGVhbXMucHVzaChtYXRjaGRheVtcIkF3YXlUZWFtXCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZHJvcERvd25UZWFtID0gZDMuc2VsZWN0KGAuJHtzZWxlY3Rvcn1gKTtcbiAgICAgICAgZHJvcERvd25UZWFtLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0ZWFtcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnb3B0aW9uJylcbiAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJsYWJlbFwiLCBkID0+IHtyZXR1cm4gZH0pO1xuICAgfSlcbn1cblxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHN2ZyBjaGFydFxuY29uc3QgcmVtb3ZlR3JhcGggPSAoKSA9PiB7XG4gIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbn1cblxuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSByZXNldCBidXR0b24gdG8gdGhlIERPTSB0byByZXR1cm4gdG8gdGhlIHNlYXJjaCBjb21wb25lbnRcbmNvbnN0IHJlc2V0QnV0dG9uID0gKHNlYXJjaEZvcm0pID0+IHtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkMy5zZWxlY3QoXCIucmVzZXQtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKFwiYnV0dG9uXCIpLmF0dHIoXCJjbGFzc1wiLCBcInJlc2V0LWJ1dHRvblwiKS50ZXh0KFwiUmVzZXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgcmVtb3ZlR3JhcGgoKTtcbiAgICAgICAgcmVtb3ZlQ2hhbmdlR3JhcGhCdXR0b24oKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGQzLnNlbGVjdChcIiNzdmctY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU4ubGVmdCArIE1BUkdJTi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU4udG9wICsgTUFSR0lOLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOLmxlZnQgKyBcIixcIiArIE1BUkdJTi50b3AgKyBcIilcIik7XG5cbiAgICBHUkFQSC5iYXIgPSB0cnVlO1xuICAgIEdSQVBILmxpbmUgPSBmYWxzZTtcbiAgICBjaGFuZ2VHcmFwaEJ1dHRvbigpO1xufVxuXG5jb25zdCBjcmVhdGVMaW5lR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGQzLnNlbGVjdChcIiNzdmctY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU4ubGVmdCArIE1BUkdJTi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU4udG9wICsgTUFSR0lOLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOLmxlZnQgKyBcIixcIiArIE1BUkdJTi50b3AgKyBcIilcIik7XG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgXG4gICAgaWYgKEdSQVBILmxpbmUgPT09IHRydWUgJiYgR1JBUEguYmFyID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJCYXIgR3JhcGhcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChURUFNUy50ZWFtMSwgU0VBU09OUy5zZWFzb24xLCBURUFNUy50ZWFtMiwgU0VBU09OUy5zZWFzb24yKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChHUkFQSC5iYXIgPT09IHRydWUgJiYgR1JBUEgubGluZSA9PT0gZmFsc2Upe1xuICAgICAgZDMuc2VsZWN0KFwiLmNoYW5nZS1ncmFwaC10eXBlLWNvbnRhaW5lclwiKVxuICAgICAgLmFwcGVuZChcImJ1dHRvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYW5nZS1ncmFwaC1idXR0b25cIilcbiAgICAgIC50ZXh0KFwiTGluZSBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUxpbmVHcmFwaChURUFNUy50ZWFtMSwgU0VBU09OUy5zZWFzb24xLCBURUFNUy50ZWFtMiwgU0VBU09OUy5zZWFzb24yKTtcbiAgICB9KX1cbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGNoYW5nZSBncmFwaCBidXR0b25cbmNvbnN0IHJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9