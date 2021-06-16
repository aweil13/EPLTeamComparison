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
/* harmony import */ var _lineGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineGraph */ "./src/lineGraph.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");


var MARGIN = {
  top: 30,
  right: 30,
  bottom: 80,
  left: 60
},
    WIDTH = 600 - MARGIN.left - MARGIN.right,
    HEIGHT = 540 - MARGIN.top - MARGIN.bottom,
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
    removeUpdateButton();
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
  var svg = d3.select("#svg-container").append("svg").attr("width", WIDTH + MARGIN.left + MARGIN.right).attr("height", HEIGHT + MARGIN.top + MARGIN.bottom).append("g").attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  GRAPH.bar = true;
  GRAPH.line = false;
  changeGraphButton();
};

var createLineGraph = function createLineGraph(team1, season1, team2, season2) {
  d3.select("svg").remove();
  var svg = d3.select("#svg-container").append("svg").attr("width", WIDTH + MARGIN.left + MARGIN.right).attr("height", HEIGHT + MARGIN.top + MARGIN.bottom).append("g").attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  new _lineGraph__WEBPACK_IMPORTED_MODULE_0__["default"](svg, team1, season1, team2, season2);
  GRAPH.line = true;
  GRAPH.bar = false;
  changeGraphButton();
}; // function to change graph to either line graph or bar graph


var changeGraphButton = function changeGraphButton() {
  d3.select(".change-graph-type-container").selectChildren("button").remove();
  removeUpdateButton();

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

var removeUpdateButton = function removeUpdateButton() {
  d3.select(".update-button").remove();
};

/***/ }),

/***/ "./src/lineGraph.js":
/*!**************************!*\
  !*** ./src/lineGraph.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MARGIN = {
  top: 30,
  right: 30,
  bottom: 80,
  left: 60
},
    WIDTH = 600 - MARGIN.left - MARGIN.right,
    HEIGHT = 540 - MARGIN.top - MARGIN.bottom;

var LineGraph = /*#__PURE__*/function () {
  function LineGraph(svg, team1, season1, team2, season2) {
    var _this = this;

    _classCallCheck(this, LineGraph);

    this.svg = svg;
    this.team1 = team1;
    this.team2 = team2;
    this.season1 = season1;
    this.season2 = season2;
    this.seasonPoints = {};
    this.seasonShots = {};
    this.seasonShotsOnTarget = {};
    this.seasonFirstHalfGoals = {};
    this.seasonSecondHalfGoals = {};
    this.seasonGoals = {};
    this.seasonGoalsAgainst = {};
    this.seasonCorners = {};
    this.seasonFoulsCommited = {};
    this.seasonFoulsAgainst = {};
    this.seasonYellowCards = {};
    this.seasonRedCards = {};
    this.seasonPoints[this.team1] = [[0, 0]];
    this.seasonPoints[this.team2] = [[0, 0]];
    this.seasonShots[this.team1] = [[0, 0]];
    this.seasonShots[this.team2] = [[0, 0]];
    this.seasonShotsOnTarget[this.team1] = [[0, 0]];
    this.seasonShotsOnTarget[this.team2] = [[0, 0]];
    this.seasonFirstHalfGoals[this.team1] = [[0, 0]];
    this.seasonFirstHalfGoals[this.team2] = [[0, 0]];
    this.seasonSecondHalfGoals[this.team1] = [[0, 0]];
    this.seasonSecondHalfGoals[this.team2] = [[0, 0]];
    this.seasonGoals[this.team1] = [[0, 0]];
    this.seasonGoals[this.team2] = [[0, 0]];
    this.seasonGoalsAgainst[this.team1] = [[0, 0]];
    this.seasonGoalsAgainst[this.team2] = [[0, 0]];
    this.seasonCorners[this.team1] = [[0, 0]];
    this.seasonCorners[this.team2] = [[0, 0]];
    this.seasonFoulsCommited[this.team1] = [[0, 0]];
    this.seasonFoulsCommited[this.team2] = [[0, 0]];
    this.seasonFoulsAgainst[this.team1] = [[0, 0]];
    this.seasonFoulsAgainst[this.team2] = [[0, 0]];
    this.seasonYellowCards[this.team1] = [[0, 0]];
    this.seasonYellowCards[this.team2] = [[0, 0]];
    this.seasonRedCards[this.team1] = [[0, 0]];
    this.seasonRedCards[this.team2] = [[0, 0]];
    this.stats = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];
    this.seasonLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    this.update = this.update.bind(this); // Loading up data and creating graph 

    Promise.all([d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season1, ".csv")), d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season2, ".csv"))]).then(function (data) {
      // Loop to go through data and populate output data objects 
      for (var i = 0; i < data[0].length; i++) {
        // Matchday objects
        var match1 = data[0][i];
        var match2 = data[1][i]; // helper variables team 1

        var prevMatchday1 = _this.seasonPoints[_this.team1][_this.seasonPoints[_this.team1].length - 1][0];
        var prevPoints1 = _this.seasonPoints[_this.team1][_this.seasonPoints[_this.team1].length - 1][1];
        var prevShots1 = _this.seasonShots[_this.team1][_this.seasonShots[_this.team1].length - 1][1];
        var prevShotsOnTarget1 = _this.seasonShotsOnTarget[_this.team1][_this.seasonShotsOnTarget[_this.team1].length - 1][1];
        var prevFirstHalfGoals1 = _this.seasonFirstHalfGoals[_this.team1][_this.seasonFirstHalfGoals[_this.team1].length - 1][1];
        var prevSecondHalfGoals1 = _this.seasonSecondHalfGoals[_this.team1][_this.seasonSecondHalfGoals[_this.team1].length - 1][1];
        var prevGoals1 = _this.seasonGoals[_this.team1][_this.seasonGoals[_this.team1].length - 1][1];
        var prevGoalsAgainst1 = _this.seasonGoalsAgainst[_this.team1][_this.seasonGoals[_this.team1].length - 1][1];
        var prevCorners1 = _this.seasonCorners[_this.team1][_this.seasonCorners[_this.team1].length - 1][1];
        var prevFoulsCommited1 = _this.seasonFoulsCommited[_this.team1][_this.seasonFoulsCommited[_this.team1].length - 1][1];
        var prevFoulsAgainst1 = _this.seasonFoulsAgainst[_this.team1][_this.seasonFoulsAgainst[_this.team1].length - 1][1];
        var prevYellowCards1 = _this.seasonYellowCards[_this.team1][_this.seasonYellowCards[_this.team1].length - 1][1];
        var prevRedCards1 = _this.seasonRedCards[_this.team1][_this.seasonRedCards[_this.team1].length - 1][1]; // helper variables team 2

        var prevMatchday2 = _this.seasonPoints[_this.team2][_this.seasonPoints[_this.team2].length - 1][0];
        var prevPoints2 = _this.seasonPoints[_this.team2][_this.seasonPoints[_this.team2].length - 1][1];
        var prevShots2 = _this.seasonShots[_this.team2][_this.seasonShots[_this.team2].length - 1][1];
        var prevShotsOnTarget2 = _this.seasonShotsOnTarget[_this.team2][_this.seasonShotsOnTarget[_this.team2].length - 1][1];
        var prevFirstHalfGoals2 = _this.seasonFirstHalfGoals[_this.team2][_this.seasonFirstHalfGoals[_this.team2].length - 1][1];
        var prevSecondHalfGoals2 = _this.seasonSecondHalfGoals[_this.team2][_this.seasonSecondHalfGoals[_this.team2].length - 1][1];
        var prevGoals2 = _this.seasonGoals[_this.team2][_this.seasonGoals[_this.team2].length - 1][1];
        var prevGoalsAgainst2 = _this.seasonGoalsAgainst[_this.team2][_this.seasonGoals[_this.team2].length - 1][1];
        var prevCorners2 = _this.seasonCorners[_this.team2][_this.seasonCorners[_this.team2].length - 1][1];
        var prevFoulsCommited2 = _this.seasonFoulsCommited[_this.team2][_this.seasonFoulsCommited[_this.team2].length - 1][1];
        var prevFoulsAgainst2 = _this.seasonFoulsAgainst[_this.team2][_this.seasonFoulsAgainst[_this.team2].length - 1][1];
        var prevYellowCards2 = _this.seasonYellowCards[_this.team2][_this.seasonYellowCards[_this.team2].length - 1][1];
        var prevRedCards2 = _this.seasonRedCards[_this.team2][_this.seasonRedCards[_this.team2].length - 1][1]; // Conditional to populate data for first team

        if (match1["HomeTeam"] === _this.team1) {
          switch (match1["FTR"]) {
            case "H":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 3]);

              break;

            case "A":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1]);

              break;

            case "D":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShots[_this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["HS"])]);

          _this.seasonShotsOnTarget[_this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["HST"])]);

          _this.seasonFirstHalfGoals[_this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTHG"])]);

          _this.seasonSecondHalfGoals[_this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]))]);

          _this.seasonGoals[_this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTHG"])]);

          _this.seasonGoalsAgainst[_this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTAG"])]);

          _this.seasonCorners[_this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["HC"])]);

          _this.seasonFoulsCommited[_this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["HF"])]);

          _this.seasonFoulsAgainst[_this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["AF"])]);

          _this.seasonYellowCards[_this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["HY"])]);

          _this.seasonRedCards[_this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["HR"])]);
        } else if (match1["AwayTeam"] === _this.team1) {
          switch (match1["FTR"]) {
            case "A":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 3]);

              break;

            case "H":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1]);

              break;

            case "D":
              _this.seasonPoints[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShots[_this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["AS"])]);

          _this.seasonShotsOnTarget[_this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["AST"])]);

          _this.seasonFirstHalfGoals[_this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTAG"])]);

          _this.seasonSecondHalfGoals[_this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]))]);

          _this.seasonGoals[_this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTAG"])]);

          _this.seasonGoalsAgainst[_this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTHG"])]);

          _this.seasonCorners[_this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["AC"])]);

          _this.seasonFoulsCommited[_this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["AF"])]);

          _this.seasonFoulsAgainst[_this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["HF"])]);

          _this.seasonYellowCards[_this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["AY"])]);

          _this.seasonRedCards[_this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["AR"])]);
        } // Conditional for second team data


        if (match2["HomeTeam"] === _this.team2) {
          switch (match2["FTR"]) {
            case "H":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 3]);

              break;

            case "A":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2]);

              break;

            case "D":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShots[_this.team2].push([prevMatchday2 + 1, prevShots1 + parseInt(match2["HS"])]);

          _this.seasonShotsOnTarget[_this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["HST"])]);

          _this.seasonFirstHalfGoals[_this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTHG"])]);

          _this.seasonSecondHalfGoals[_this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]))]);

          _this.seasonGoals[_this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTHG"])]);

          _this.seasonGoalsAgainst[_this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTAG"])]);

          _this.seasonCorners[_this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["HC"])]);

          _this.seasonFoulsCommited[_this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["HF"])]);

          _this.seasonFoulsAgainst[_this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["AF"])]);

          _this.seasonYellowCards[_this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["HY"])]);

          _this.seasonRedCards[_this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["HR"])]);
        } else if (match2["AwayTeam"] === _this.team2) {
          switch (match2["FTR"]) {
            case "A":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 3]);

              break;

            case "H":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2]);

              break;

            case "D":
              _this.seasonPoints[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShots[_this.team2].push([prevMatchday2 + 1, prevShots2 + parseInt(match2["AS"])]);

          _this.seasonShotsOnTarget[_this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["AST"])]);

          _this.seasonFirstHalfGoals[_this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTAG"])]);

          _this.seasonSecondHalfGoals[_this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]))]);

          _this.seasonGoals[_this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTAG"])]);

          _this.seasonGoalsAgainst[_this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTHG"])]);

          _this.seasonCorners[_this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["AC"])]);

          _this.seasonFoulsCommited[_this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["AF"])]);

          _this.seasonFoulsAgainst[_this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["HF"])]);

          _this.seasonYellowCards[_this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["AY"])]);

          _this.seasonRedCards[_this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["AR"])]);
        }
      } // Graph Team Legend 


      _this.svg.append("circle").attr("cx", 100).attr("cy", 45).attr("r", 4).style("fill", "red");

      _this.svg.append("circle").attr("cx", 100).attr("cy", 65).attr("r", 4).style("fill", "green");

      _this.svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("".concat(_this.team1));

      _this.svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("".concat(_this.team2)); // Dropdown button creation to change stats


      var dropDownButton = d3.select(".update-button-container").append("select").attr("class", "update-button");
      dropDownButton.selectAll('dataOptions').data(_this.stats).enter().append("option").text(function (d) {
        return d;
      }).attr("value", function (d) {
        return d;
      }); // Y-Axis label 

      _this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - MARGIN.left - 5).attr("x", 0 - HEIGHT / 2).attr("dy", "1em").style("text-anchor", "middle").attr("class", "yaxis-text").text("Points").attr("font-size", "22px").style("fill", "white"); // X-Axis label


      _this.svg.append("text").attr("transform", "translate (" + WIDTH / 2 + " ," + (HEIGHT + MARGIN.top + 25) + ")").attr("class", "x-axis").style("text-anchor", "middle").text("Matchday").attr("font-size", "22px").style("fill", "white");

      var x = d3.scaleLinear().range([0, WIDTH]);
      var xAxis = d3.axisBottom().scale(x);

      _this.svg.append("g").attr("transform", "translate(0," + HEIGHT + ")").attr("class", "XAxis").style("fill", "white");

      var y = d3.scaleLinear().range([HEIGHT, 0]);
      var yAxis = d3.axisLeft().scale(y);

      _this.svg.append("g").attr("class", "YAxis").style("fill", "white");

      var update = function update(data, title) {
        x.domain([0, d3.max(_this.seasonLength)]);

        _this.svg.selectAll(".XAxis").transition().duration(1000).call(xAxis);

        var teamOneMax = data[_this.team1][38][1];
        var teamTwoMax = data[_this.team2][38][1];
        teamOneMax >= teamTwoMax ? y.domain([0, teamOneMax]) : y.domain([0, teamTwoMax]);

        _this.svg.selectAll(".YAxis").transition().duration(1000).call(yAxis);

        svg.select(".yaxis-text").text(title);

        var line1 = _this.svg.selectAll(".line1");

        var line2 = _this.svg.selectAll(".line2");

        if (line1) {
          _this.svg.selectAll(".line1").remove();
        }

        if (line2) {
          _this.svg.selectAll(".line2").remove();
        }

        line1 = _this.svg.selectAll(".line1").data([data], function (d) {
          return d[_this.team1];
        });
        line2 = _this.svg.selectAll(".line2").data([data], function (d) {
          return d[_this.team2];
        });
        line1.enter().datum(data[_this.team1]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
          return x(d[0]);
        }).y(function (d) {
          return y(d[1]);
        })).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 2.5);
        line2.enter().datum(data[_this.team2]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
          return x(d[0]);
        }).y(function (d) {
          return y(d[1]);
        })).attr("fill", "none").attr("stroke", "green").attr("stroke-width", 2.5);
      };

      _this.update(_this.seasonPoints, "Points", x, xAxis, y, yAxis);

      var that = _this;
      dropDownButton.on("change", function (d) {
        var selectedOption = d3.select(this).property("value");

        switch (selectedOption) {
          case "Points":
            that.update(that.seasonPoints, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots":
            that.update(that.seasonShots, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots on Target":
            that.update(that.seasonShotsOnTarget, selectedOption, x, xAxis, y, yAxis);
            break;

          case "First Half Goals":
            that.update(that.seasonFirstHalfGoals, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Second Half Goals":
            that.update(that.seasonSecondHalfGoals, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Total Goals":
            that.update(that.seasonGoals, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Goals Against":
            that.update(that.seasonGoalsAgainst, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Corners":
            that.update(that.seasonCorners, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Commited":
            that.update(that.seasonFoulsCommited, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Against":
            that.update(that.seasonFoulsAgainst, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Yellow Cards":
            that.update(that.seasonYellowCards, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Red Cards":
            that.update(that.seasonRedCards, selectedOption, x, xAxis, y, yAxis);
            break;

          default:
            break;
        }
      });
    });
  }

  _createClass(LineGraph, [{
    key: "update",
    value: function update(data, title, x, xAxis, y, yAxis) {
      var _this2 = this;

      x.domain([0, d3.max(this.seasonLength)]);
      this.svg.selectAll(".XAxis").transition().duration(1000).call(xAxis);
      var teamOneMax = data[this.team1][38][1];
      var teamTwoMax = data[this.team2][38][1];
      teamOneMax >= teamTwoMax ? y.domain([0, teamOneMax]) : y.domain([0, teamTwoMax]);
      this.svg.selectAll(".YAxis").transition().duration(1000).call(yAxis);
      this.svg.select(".yaxis-text").text(title);
      var line1 = this.svg.selectAll(".line1");
      var line2 = this.svg.selectAll(".line2");

      if (line1) {
        this.svg.selectAll(".line1").remove();
      }

      if (line2) {
        this.svg.selectAll(".line2").remove();
      }

      line1 = this.svg.selectAll(".line1").data([data], function (d) {
        return d[_this2.team1];
      });
      line2 = this.svg.selectAll(".line2").data([data], function (d) {
        return d[_this2.team2];
      });
      line1.enter().datum(data[this.team1]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
        return x(d[0]);
      }).y(function (d) {
        return y(d[1]);
      })).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 2.5);
      line2.enter().datum(data[this.team2]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
        return x(d[0]);
      }).y(function (d) {
        return y(d[1]);
      })).attr("fill", "none").attr("stroke", "green").attr("stroke-width", 2.5);
    }
  }]);

  return LineGraph;
}();

/* harmony default export */ __webpack_exports__["default"] = (LineGraph);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saW5lR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIk1BUkdJTiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIldJRFRIIiwiSEVJR0hUIiwiVEVBTVMiLCJ0ZWFtMSIsInRlYW0yIiwiU0VBU09OUyIsInNlYXNvbjEiLCJzZWFzb24yIiwiR1JBUEgiLCJsaW5lIiwiYmFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVhbU9uZVNlYXNvblNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsInRlYW1Ud29TZWFzb25TZWxlY3RvciIsImZpcnN0VGVhbVNlbGVjdG9yIiwic2Vjb25kVGVhbVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsImNvbXBhcmVCdXR0b24iLCJkMyIsInNlbGVjdCIsIm9uY2hhbmdlIiwiZXZlbnQiLCJzZWFzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZVRlYW1zRnJvbVNlYXJjaCIsInBvcHVsYXRlVGVhbVNlbGVjdG9yIiwib24iLCJkIiwic3R5bGUiLCJkaXNwbGF5IiwicmVzZXRCdXR0b24iLCJjcmVhdGVMaW5lR3JhcGgiLCJlbGVtZW50Iiwic2VsZWN0Q2hpbGRyZW4iLCJyZW1vdmUiLCJzZWxlY3RvciIsInRlYW1zIiwiY3N2IiwidGhlbiIsImRhdGEiLCJpIiwibGVuZ3RoIiwibWF0Y2hkYXkiLCJpbmNsdWRlcyIsInB1c2giLCJkcm9wRG93blRlYW0iLCJzZWxlY3RBbGwiLCJlbnRlciIsImFwcGVuZCIsInRleHQiLCJhdHRyIiwicmVtb3ZlR3JhcGgiLCJidXR0b25Db250YWluZXIiLCJyZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbiIsInJlbW92ZVVwZGF0ZUJ1dHRvbiIsImNyZWF0ZUJhckdyYXBoIiwic3ZnIiwiY2hhbmdlR3JhcGhCdXR0b24iLCJMaW5lR3JhcGgiLCJzZWFzb25Qb2ludHMiLCJzZWFzb25TaG90cyIsInNlYXNvblNob3RzT25UYXJnZXQiLCJzZWFzb25GaXJzdEhhbGZHb2FscyIsInNlYXNvblNlY29uZEhhbGZHb2FscyIsInNlYXNvbkdvYWxzIiwic2Vhc29uR29hbHNBZ2FpbnN0Iiwic2Vhc29uQ29ybmVycyIsInNlYXNvbkZvdWxzQ29tbWl0ZWQiLCJzZWFzb25Gb3Vsc0FnYWluc3QiLCJzZWFzb25ZZWxsb3dDYXJkcyIsInNlYXNvblJlZENhcmRzIiwic3RhdHMiLCJzZWFzb25MZW5ndGgiLCJ1cGRhdGUiLCJiaW5kIiwiUHJvbWlzZSIsImFsbCIsIm1hdGNoMSIsIm1hdGNoMiIsInByZXZNYXRjaGRheTEiLCJwcmV2UG9pbnRzMSIsInByZXZTaG90czEiLCJwcmV2U2hvdHNPblRhcmdldDEiLCJwcmV2Rmlyc3RIYWxmR29hbHMxIiwicHJldlNlY29uZEhhbGZHb2FsczEiLCJwcmV2R29hbHMxIiwicHJldkdvYWxzQWdhaW5zdDEiLCJwcmV2Q29ybmVyczEiLCJwcmV2Rm91bHNDb21taXRlZDEiLCJwcmV2Rm91bHNBZ2FpbnN0MSIsInByZXZZZWxsb3dDYXJkczEiLCJwcmV2UmVkQ2FyZHMxIiwicHJldk1hdGNoZGF5MiIsInByZXZQb2ludHMyIiwicHJldlNob3RzMiIsInByZXZTaG90c09uVGFyZ2V0MiIsInByZXZGaXJzdEhhbGZHb2FsczIiLCJwcmV2U2Vjb25kSGFsZkdvYWxzMiIsInByZXZHb2FsczIiLCJwcmV2R29hbHNBZ2FpbnN0MiIsInByZXZDb3JuZXJzMiIsInByZXZGb3Vsc0NvbW1pdGVkMiIsInByZXZGb3Vsc0FnYWluc3QyIiwicHJldlllbGxvd0NhcmRzMiIsInByZXZSZWRDYXJkczIiLCJwYXJzZUludCIsImRyb3BEb3duQnV0dG9uIiwieCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInkiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGl0bGUiLCJkb21haW4iLCJtYXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwidGVhbU9uZU1heCIsInRlYW1Ud29NYXgiLCJsaW5lMSIsImxpbmUyIiwiZGF0dW0iLCJtZXJnZSIsInRoYXQiLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQSxJQUFNQSxNQUFNLEdBQUc7QUFBQ0MsS0FBRyxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLEVBQWpCO0FBQXFCQyxRQUFNLEVBQUUsRUFBN0I7QUFBaUNDLE1BQUksRUFBRTtBQUF2QyxDQUFmO0FBQUEsSUFDQUMsS0FBSyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ksSUFBYixHQUFvQkosTUFBTSxDQUFDRSxLQURuQztBQUFBLElBRUFJLE1BQU0sR0FBRyxNQUFNTixNQUFNLENBQUND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QWFzQixHQWJ0QjtBQWVBMkUsV0FBSyxDQUNKOUUsS0FERCxHQUVDK0UsS0FGRCxDQUVPdkYsSUFBSSxDQUFDLEtBQUt0QyxLQUFOLENBRlgsRUFHQytDLE1BSEQsQ0FHUSxNQUhSLEVBSUNFLElBSkQsQ0FJTSxPQUpOLEVBSWUsT0FKZixFQUtDNkUsS0FMRCxDQUtPSCxLQUxQLEVBTUNMLFVBTkQsR0FPQ0MsUUFQRCxDQU9VLElBUFYsRUFRQ3RFLElBUkQsQ0FRTSxHQVJOLEVBUVdqQyxFQUFFLENBQUNYLElBQUgsR0FDVnFHLENBRFUsQ0FDUixVQUFBaEYsQ0FBQyxFQUFJO0FBQUMsZUFBT2dGLENBQUMsQ0FBQ2hGLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQURmLEVBRVZzRixDQUZVLENBRVIsVUFBQXRGLENBQUMsRUFBSTtBQUFDLGVBQU9zRixDQUFDLENBQUN0RixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBaUIsT0FGZixDQVJYLEVBV0N1QixJQVhELENBV00sTUFYTixFQVdjLE1BWGQsRUFZQ0EsSUFaRCxDQVlNLFFBWk4sRUFZZ0IsT0FaaEIsRUFhQ0EsSUFiRCxDQWFNLGNBYk4sRUFhc0IsR0FidEI7QUFpQkQ7Ozs7OztBQUlVUSx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNsY0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBMaW5lR3JhcGggZnJvbSAnLi9saW5lR3JhcGgnO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cblxuY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA2MDAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDU0MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tLFxuVEVBTVMgPSB7dGVhbTE6IFwiXCIsIHRlYW0yOiBcIlwifSxcblNFQVNPTlMgPSB7c2Vhc29uMTogXCJcIiwgc2Vhc29uMjogXCJcIn0sXG5HUkFQSCA9IHtsaW5lOiBmYWxzZSwgYmFyOiBmYWxzZX07XG5cblxuXG4vLyBEb2N1bWVudCBtYW5pcHVsYXRpb24gZm9yIG9uY2hhbmdlIGV2ZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIHNlbGVjdCBtZW51cyBmb3Igc2Vhc29uc1xuICAgIGNvbnN0IHRlYW1PbmVTZWFzb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtc2Vhc29uXCIpXG4gICAgY29uc3QgdGVhbVR3b1NlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1zZWFzb25cIik7XG5cbiAgICAvLyBzZWxlY3QgbWVudXMgZm9yIHRlYW1zXG4gICAgY29uc3QgZmlyc3RUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0xLW5hbWVcIik7XG4gICAgY29uc3Qgc2Vjb25kVGVhbVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1uYW1lXCIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VhcmNoLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBjb21wYXJlQnV0dG9uID0gZDMuc2VsZWN0KFwiLmNvbXBhcmUtYnV0dG9uXCIpXG5cbiAgICAvLyBvbiBjaGFuZ2Ugc2VsZWN0b3IgZXZlbnRzIHRvIHBvcHVsYXRlIHRlYW0gbmFtZXNcbiAgICB0ZWFtT25lU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMS1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0xLW5hbWVcIik7XG4gICAgfVxuXG4gICAgdGVhbVR3b1NlYXNvblNlbGVjdG9yLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWFzb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZW1vdmVUZWFtc0Zyb21TZWFyY2goXCIudGVhbTItbmFtZVwiKTtcbiAgICAgIHBvcHVsYXRlVGVhbVNlbGVjdG9yKHNlYXNvbiwgXCJ0ZWFtMi1uYW1lXCIpO1xuICAgIH1cblxuICAgIGNvbXBhcmVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXNldEJ1dHRvbihzZWFyY2hGb3JtKTtcbiAgICAgIFxuICAgICAgICBURUFNU1tcInRlYW0xXCJdID0gZmlyc3RUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFRFQU1TW1widGVhbTJcIl0gPSBzZWNvbmRUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24xXCJdID0gdGVhbU9uZVNlYXNvblNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IHRlYW1Ud29TZWFzb25TZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBjcmVhdGVMaW5lR3JhcGgoVEVBTVNbXCJ0ZWFtMVwiXSwgU0VBU09OU1tcInNlYXNvbjFcIl0sIFRFQU1TW1widGVhbTJcIl0sIFNFQVNPTlNbXCJzZWFzb24yXCJdKTtcbiAgICB9KVxuICAgIFxufSlcblxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgb3B0aW9ucyBmcm9tIHNlbGVjdCBkcm9wZG93blxuY29uc3QgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoID0gZWxlbWVudCA9PiB7XG4gICAgZDMuc2VsZWN0KGVsZW1lbnQpLnNlbGVjdENoaWxkcmVuKFwib3B0aW9uXCIpLnJlbW92ZSgpO1xufVxuXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSB0ZWFtIHNlbGVjdG9ycyBmb3IgZWFjaCBzZWFzb25cbmNvbnN0IHBvcHVsYXRlVGVhbVNlbGVjdG9yID0gKHNlYXNvbiwgc2VsZWN0b3IpID0+IHtcbiAgIGNvbnN0IHRlYW1zID0gW107XG4gICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3NlYXNvbn0uY3N2YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hkYXkgPSBkYXRhW2ldO1xuICAgICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSkpe1xuICAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRlYW1zLmluY2x1ZGVzKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICAgdGVhbXMucHVzaChtYXRjaGRheVtcIkF3YXlUZWFtXCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZHJvcERvd25UZWFtID0gZDMuc2VsZWN0KGAuJHtzZWxlY3Rvcn1gKTtcbiAgICAgICAgZHJvcERvd25UZWFtLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0ZWFtcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnb3B0aW9uJylcbiAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJsYWJlbFwiLCBkID0+IHtyZXR1cm4gZH0pO1xuICAgfSlcbn1cblxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHN2ZyBjaGFydFxuY29uc3QgcmVtb3ZlR3JhcGggPSAoKSA9PiB7XG4gIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbn1cblxuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSByZXNldCBidXR0b24gdG8gdGhlIERPTSB0byByZXR1cm4gdG8gdGhlIHNlYXJjaCBjb21wb25lbnRcbmNvbnN0IHJlc2V0QnV0dG9uID0gKHNlYXJjaEZvcm0pID0+IHtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkMy5zZWxlY3QoXCIucmVzZXQtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKFwiYnV0dG9uXCIpLmF0dHIoXCJjbGFzc1wiLCBcInJlc2V0LWJ1dHRvblwiKS50ZXh0KFwiUmVzZXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgcmVtb3ZlR3JhcGgoKTtcbiAgICAgICAgcmVtb3ZlQ2hhbmdlR3JhcGhCdXR0b24oKTtcbiAgICAgICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zZWxlY3RDaGlsZHJlbihcImJ1dHRvblwiKS5yZW1vdmUoKTtcbiAgICAgICAgc2VhcmNoRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBURUFNU1tcInRlYW0xXCJdID0gXCJcIjtcbiAgICAgICAgVEVBTVNbXCJ0ZWFtMlwiXSA9IFwiXCI7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24xXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjJcIl0gPSBcIlwiO1xuICAgIH0pXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBncmFwaHNcbmNvbnN0IGNyZWF0ZUJhckdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIEdSQVBILmJhciA9IHRydWU7XG4gICAgR1JBUEgubGluZSA9IGZhbHNlO1xuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG59XG5cbmNvbnN0IGNyZWF0ZUxpbmVHcmFwaCA9ICh0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpID0+IHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdmctY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEggKyBNQVJHSU4ubGVmdCArIE1BUkdJTi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBIRUlHSFQgKyBNQVJHSU4udG9wICsgTUFSR0lOLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOLmxlZnQgKyBcIixcIiArIE1BUkdJTi50b3AgKyBcIilcIik7XG5cbiAgICBuZXcgTGluZUdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEgubGluZSA9IHRydWU7XG4gICAgR1JBUEguYmFyID0gZmFsc2U7ICBcbiAgICBjaGFuZ2VHcmFwaEJ1dHRvbigpO1xuXG59XG5cblxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgZ3JhcGggdG8gZWl0aGVyIGxpbmUgZ3JhcGggb3IgYmFyIGdyYXBoXG5jb25zdCBjaGFuZ2VHcmFwaEJ1dHRvbiA9ICgpID0+IHtcbiAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgIHJlbW92ZVVwZGF0ZUJ1dHRvbigpO1xuXG4gICAgaWYgKEdSQVBILmxpbmUgPT09IHRydWUgJiYgR1JBUEguYmFyID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJCYXIgR3JhcGhcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChURUFNUy50ZWFtMSwgU0VBU09OUy5zZWFzb24xLCBURUFNUy50ZWFtMiwgU0VBU09OUy5zZWFzb24yKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChHUkFQSC5iYXIgPT09IHRydWUgJiYgR1JBUEgubGluZSA9PT0gZmFsc2Upe1xuICAgICAgZDMuc2VsZWN0KFwiLmNoYW5nZS1ncmFwaC10eXBlLWNvbnRhaW5lclwiKVxuICAgICAgLmFwcGVuZChcImJ1dHRvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYW5nZS1ncmFwaC1idXR0b25cIilcbiAgICAgIC50ZXh0KFwiTGluZSBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUxpbmVHcmFwaChURUFNUy50ZWFtMSwgU0VBU09OUy5zZWFzb24xLCBURUFNUy50ZWFtMiwgU0VBU09OUy5zZWFzb24yKTtcbiAgICB9KX1cbn1cbiBcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBjaGFuZ2UgZ3JhcGggYnV0dG9uXG5jb25zdCByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbiA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwiLmNoYW5nZS1ncmFwaC1idXR0b25cIikucmVtb3ZlKCk7XG59XG5cbmNvbnN0IHJlbW92ZVVwZGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwiLnVwZGF0ZS1idXR0b25cIikucmVtb3ZlKCk7XG59IiwiY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA2MDAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDU0MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tO1xuXG5cbiBjbGFzcyBMaW5lR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgICB0aGlzLnRlYW0xID0gdGVhbTE7XG4gICAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMjtcbiAgICAgICAgdGhpcy5zZWFzb24xID0gc2Vhc29uMTtcbiAgICAgICAgdGhpcy5zZWFzb24yID0gc2Vhc29uMjtcblxuICAgICAgICB0aGlzLnNlYXNvblBvaW50cyA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNob3RzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldCA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3QgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZCA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdCA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHMgPSB7fTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBbXG4gICAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICAgIFwiUmVkIENhcmRzXCJdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFzb25MZW5ndGggPSBbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMyxcbiAgICAgICAgICAxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNlxuICAgICAgICAgICwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF0gIFxuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMX0uY3N2YCksXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjJ9LmNzdmApXG4gICAgICAgIF0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHV0IGRhdGEgb2JqZWN0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBNYXRjaGRheSBvYmplY3RzXG4gICAgICAgICAgICAgIGxldCBtYXRjaDEgPSBkYXRhWzBdW2ldO1xuICAgICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMVxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MSA9IHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzMSA9IHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHMxID0gdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDEgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMxID0gdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzMSA9IHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMxID0gdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHNBZ2FpbnN0MSA9IHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzMSA9IHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkMSA9IHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkczEgPSB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkczEgPSB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cblxuXG5cbiAgICAgICAgICAgICAgLy8gaGVscGVyIHZhcmlhYmxlcyB0ZWFtIDJcbiAgICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheTIgPSB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgICBsZXQgcHJldlBvaW50czIgPSB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzMiA9IHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQyID0gdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZpcnN0SGFsZkdvYWxzMiA9IHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FsczIgPSB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzMiA9IHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzQWdhaW5zdDIgPSB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Q29ybmVyczIgPSB0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZDIgPSB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2WWVsbG93Q2FyZHMyID0gdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMyID0gdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCB0byBwb3B1bGF0ZSBkYXRhIGZvciBmaXJzdCB0ZWFtXG4gICAgICAgICAgICAgIGlmIChtYXRjaDFbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMSArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90czEgKyBwYXJzZUludChtYXRjaDFbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90c09uVGFyZ2V0MSArIHBhcnNlSW50KG1hdGNoMVtcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczEgKyAocGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2R29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkNvcm5lcnMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSENcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rm91bHNDb21taXRlZDEgKyBwYXJzZUludChtYXRjaDFbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2WWVsbG93Q2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlJlZENhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhSXCJdKV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYobWF0Y2gxW1wiQXdheVRlYW1cIl0gPT09IHRoaXMudGVhbTEpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gxW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMSArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHNPblRhcmdldDEgKyBwYXJzZUludChtYXRjaDFbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzMSArIHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2Fsc0FnYWluc3QxICsgcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQxICsgcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0FnYWluc3QxICsgcGFyc2VJbnQobWF0Y2gxW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZSZWRDYXJkczEgKyBwYXJzZUludChtYXRjaDFbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsIGZvciBzZWNvbmQgdGVhbSBkYXRhXG4gICAgICAgICAgICAgIGlmIChtYXRjaDJbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMil7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDJbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMl0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90czEgKyBwYXJzZUludChtYXRjaDJbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90c09uVGFyZ2V0MiArIHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczIgKyAocGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEhHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzQWdhaW5zdDIgKyBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkNvcm5lcnMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSENcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNDb21taXRlZDIgKyBwYXJzZUludChtYXRjaDJbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQWdhaW5zdDIgKyBwYXJzZUludChtYXRjaDJbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2WWVsbG93Q2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlJlZENhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkhSXCJdKV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoMltcIkF3YXlUZWFtXCJdID09PSB0aGlzLnRlYW0yKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMltcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMiArIHBhcnNlSW50KG1hdGNoMltcIkFTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzT25UYXJnZXQyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGaXJzdEhhbGZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJBQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMiArIHBhcnNlSW50KG1hdGNoMltcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UmVkQ2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVJcIl0pXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEdyYXBoIFRlYW0gTGVnZW5kIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDQ1KS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJyZWRcIikgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA2NSkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwiZ3JlZW5cIikgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDUwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KGAke3RoaXMudGVhbTF9YCkgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0yfWApICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gRHJvcGRvd24gYnV0dG9uIGNyZWF0aW9uIHRvIGNoYW5nZSBzdGF0c1xuICAgICAgICBjb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcIi51cGRhdGUtYnV0dG9uLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzZWxlY3RcIikuYXR0cihcImNsYXNzXCIsIFwidXBkYXRlLWJ1dHRvblwiKTtcbiAgICAgICAgZHJvcERvd25CdXR0b24uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRoaXMuc3RhdHMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAgICAgLy8gWS1BeGlzIGxhYmVsIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDAgLSBNQVJHSU4ubGVmdCAtIDUpXG4gICAgICAgIC5hdHRyKFwieFwiLCAwIC0gKEhFSUdIVC8yKSlcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieWF4aXMtdGV4dFwiKVxuICAgICAgICAudGV4dChcIlBvaW50c1wiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAgIFxuICAgICAgICAvLyBYLUF4aXMgbGFiZWxcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAoV0lEVEgvMikgKyBcIiAsXCIgKyAoSEVJR0hUICsgTUFSR0lOLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KFwiTWF0Y2hkYXlcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgICBsZXQgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeCk7XG5cbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgSEVJR0hUICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJYQXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW0hFSUdIVCwgMF0pO1xuICAgICAgICBsZXQgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHkpO1xuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJZQXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlID0gKGRhdGEsIHRpdGxlKSA9PiB7XG5cbiAgICAgICAgICB4LmRvbWFpbihbMCwgZDMubWF4KHRoaXMuc2Vhc29uTGVuZ3RoKV0pO1xuICAgICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5YQXhpc1wiKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICAgICAgICBsZXQgdGVhbU9uZU1heCA9IGRhdGFbdGhpcy50ZWFtMV1bMzhdWzFdO1xuICAgICAgICAgIGxldCB0ZWFtVHdvTWF4ID0gZGF0YVt0aGlzLnRlYW0yXVszOF1bMV07XG5cbiAgICAgICAgICB0ZWFtT25lTWF4ID49IHRlYW1Ud29NYXggPyB5LmRvbWFpbihbMCwgdGVhbU9uZU1heF0pIDogeS5kb21haW4oWzAsIHRlYW1Ud29NYXhdKTsgXG5cbiAgICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuWUF4aXNcIilcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgICAgICAgc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpXG5cbiAgICAgICAgICBsZXQgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIilcbiAgICAgICAgICBsZXQgbGluZTIgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcblxuICAgICAgICAgIGlmIChsaW5lMSl7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLnJlbW92ZSgpfVxuICAgICAgICAgIGlmIChsaW5lMil7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLnJlbW92ZSgpfVxuXG4gICAgICAgICAgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YV0sIGQgPT4gZFt0aGlzLnRlYW0xXSlcbiAgICAgICAgICBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW3RoaXMudGVhbTJdKVxuXG4gICAgICAgICAgbGluZTFcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5kYXR1bShkYXRhW3RoaXMudGVhbTFdKVxuICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgICAgICAgLm1lcmdlKGxpbmUxKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7IH0pKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcbiAgICAgICAgICBcbiAgICAgICAgICBsaW5lMlxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmRhdHVtKGRhdGFbdGhpcy50ZWFtMl0pXG4gICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTFcIilcbiAgICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAgICAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTsgfSkpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cblxuXG4gICAgICAgIH0gICAgXG5cbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5zZWFzb25Qb2ludHMsIFwiUG9pbnRzXCIsIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBkcm9wRG93bkJ1dHRvbi5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIik7XG4gICAgICAgICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUG9pbnRzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTsgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2hvdHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzT25UYXJnZXQsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdCwgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uQ29ybmVycywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQ29tbWl0ZWQsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQWdhaW5zdCwgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWWVsbG93IENhcmRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25ZZWxsb3dDYXJkcywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25SZWRDYXJkcywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9XG5cbiAgICAgdXBkYXRlKGRhdGEsIHRpdGxlLCB4LCB4QXhpcywgeSwgeUF4aXMpe1xuXG4gICAgICB4LmRvbWFpbihbMCwgZDMubWF4KHRoaXMuc2Vhc29uTGVuZ3RoKV0pO1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgbGV0IHRlYW1PbmVNYXggPSBkYXRhW3RoaXMudGVhbTFdWzM4XVsxXTtcbiAgICAgIGxldCB0ZWFtVHdvTWF4ID0gZGF0YVt0aGlzLnRlYW0yXVszOF1bMV07XG5cbiAgICAgIHRlYW1PbmVNYXggPj0gdGVhbVR3b01heCA/IHkuZG9tYWluKFswLCB0ZWFtT25lTWF4XSkgOiB5LmRvbWFpbihbMCwgdGVhbVR3b01heF0pOyBcblxuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLllBeGlzXCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgICAgdGhpcy5zdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgICAgbGV0IGxpbmUxID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpXG4gICAgICBsZXQgbGluZTIgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcblxuICAgICAgaWYgKGxpbmUxKXt0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgICBpZiAobGluZTIpe3RoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5yZW1vdmUoKX1cblxuICAgICAgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YV0sIGQgPT4gZFt0aGlzLnRlYW0xXSlcbiAgICAgIGxpbmUyID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLmRhdGEoW2RhdGFdLCBkID0+IGRbdGhpcy50ZWFtMl0pXG5cbiAgICAgIGxpbmUxXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmRhdHVtKGRhdGFbdGhpcy50ZWFtMV0pXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgICAubWVyZ2UobGluZTEpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgIC54KGQgPT4ge3JldHVybiB4KGRbMF0pOyB9KVxuICAgICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7IH0pKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcbiAgICAgIFxuICAgICAgbGluZTJcbiAgICAgIC5lbnRlcigpXG4gICAgICAuZGF0dW0oZGF0YVt0aGlzLnRlYW0yXSlcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTFcIilcbiAgICAgIC5tZXJnZShsaW5lMSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTsgfSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cblxuXG4gICAgfSAgICBcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUdyYXBoOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=