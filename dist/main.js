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

/***/ "./src/barGraph.js":
/*!*************************!*\
  !*** ./src/barGraph.js ***!
  \*************************/
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
    WIDTH = 650 - MARGIN.left - MARGIN.right,
    HEIGHT = 590 - MARGIN.top - MARGIN.bottom;

var BarGraph = /*#__PURE__*/function () {
  function BarGraph(svg, team1, season1, team2, season2) {
    var _this = this;

    _classCallCheck(this, BarGraph);

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
    this.seasonPoints[this.team1] = 0;
    this.seasonPoints[this.team2] = 0;
    this.seasonShots[this.team1] = 0;
    this.seasonShots[this.team2] = 0;
    this.seasonShotsOnTarget[this.team1] = 0;
    this.seasonShotsOnTarget[this.team2] = 0;
    this.seasonFirstHalfGoals[this.team1] = 0;
    this.seasonFirstHalfGoals[this.team2] = 0;
    this.seasonSecondHalfGoals[this.team1] = 0;
    this.seasonSecondHalfGoals[this.team2] = 0;
    this.seasonGoals[this.team1] = 0;
    this.seasonGoals[this.team2] = 0;
    this.seasonGoalsAgainst[this.team1] = 0;
    this.seasonGoalsAgainst[this.team2] = 0;
    this.seasonCorners[this.team1] = 0;
    this.seasonCorners[this.team2] = 0;
    this.seasonFoulsCommited[this.team1] = 0;
    this.seasonFoulsCommited[this.team2] = 0;
    this.seasonFoulsAgainst[this.team1] = 0;
    this.seasonFoulsAgainst[this.team2] = 0;
    this.seasonYellowCards[this.team1] = 0;
    this.seasonYellowCards[this.team2] = 0;
    this.seasonRedCards[this.team1] = 0;
    this.seasonRedCards[this.team2] = 0;
    this.stats = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];
    this.update = this.update.bind(this); // Loading up data and creating graph process

    Promise.all([d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season1, ".csv")), d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season2, ".csv"))]).then(function (data) {
      // Loop to go through data and populate outpud data objects
      for (var i = 0; i < data[0].length; i++) {
        // Matchday vars
        var match1 = data[0][i];
        var match2 = data[1][i]; // Team 1 conditional and Logic

        if (_this.team1 === match1["HomeTeam"]) {
          switch (match1['FTR']) {
            case "H":
              _this.seasonPoints[_this.team1] += 3;
              break;

            case "D":
              _this.seasonPoints[_this.team1] += 1;
              break;

            default:
              break;
          }

          _this.seasonShots[_this.team1] += parseInt(match1["HS"]);
          _this.seasonShotsOnTarget[_this.team1] += parseInt(match1["HST"]);
          _this.seasonFirstHalfGoals[_this.team1] += parseInt(match1["HTHG"]);
          _this.seasonSecondHalfGoals[_this.team1] += parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]);
          _this.seasonGoals[_this.team1] += parseInt(match1["FTHG"]);
          _this.seasonGoalsAgainst[_this.team1] += parseInt(match1["FTAG"]);
          _this.seasonCorners[_this.team1] += parseInt(match1["HC"]);
          _this.seasonFoulsCommited[_this.team1] += parseInt(match1["HF"]);
          _this.seasonFoulsAgainst[_this.team1] += parseInt(match1["AF"]);
          _this.seasonYellowCards[_this.team1] += parseInt(match1["HY"]);
          _this.seasonRedCards[_this.team1] += parseInt(match1["HR"]);
        } else if (_this.team1 === match1["AwayTeam"]) {
          switch (match1['FTR']) {
            case "A":
              _this.seasonPoints[_this.team1] += 3;
              break;

            case "D":
              _this.seasonPoints[_this.team1] += 1;
              break;

            default:
              break;
          }

          _this.seasonShots[_this.team1] += parseInt(match1["AS"]);
          _this.seasonShotsOnTarget[_this.team1] += parseInt(match1["AST"]);
          _this.seasonFirstHalfGoals[_this.team1] += parseInt(match1["HTAG"]);
          _this.seasonSecondHalfGoals[_this.team1] += parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]);
          _this.seasonGoals[_this.team1] += parseInt(match1["FTAG"]);
          _this.seasonGoalsAgainst[_this.team1] += parseInt(match1["FTHG"]);
          _this.seasonCorners[_this.team1] += parseInt(match1["AC"]);
          _this.seasonFoulsCommited[_this.team1] += parseInt(match1["AF"]);
          _this.seasonFoulsAgainst[_this.team1] += parseInt(match1["HF"]);
          _this.seasonYellowCards[_this.team1] += parseInt(match1["AY"]);
          _this.seasonRedCards[_this.team1] += parseInt(match1["AR"]);
        } // Team 2 Conditional and Logic


        if (_this.team2 === match2["HomeTeam"]) {
          switch (match2['FTR']) {
            case "H":
              _this.seasonPoints[_this.team2] += 3;
              break;

            case "D":
              _this.seasonPoints[_this.team2] += 1;
              break;

            default:
              break;
          }

          _this.seasonShots[_this.team2] += parseInt(match2["HS"]);
          _this.seasonShotsOnTarget[_this.team2] += parseInt(match2["HST"]);
          _this.seasonFirstHalfGoals[_this.team2] += parseInt(match2["HTHG"]);
          _this.seasonSecondHalfGoals[_this.team2] += parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]);
          _this.seasonGoals[_this.team2] += parseInt(match2["FTHG"]);
          _this.seasonGoalsAgainst[_this.team2] += parseInt(match2["FTAG"]);
          _this.seasonCorners[_this.team2] += parseInt(match2["HC"]);
          _this.seasonFoulsCommited[_this.team2] += parseInt(match2["HF"]);
          _this.seasonFoulsAgainst[_this.team2] += parseInt(match2["AF"]);
          _this.seasonYellowCards[_this.team2] += parseInt(match2["HY"]);
          _this.seasonRedCards[_this.team2] += parseInt(match2["HR"]);
        } else if (_this.team2 === match2["AwayTeam"]) {
          switch (match2['FTR']) {
            case "A":
              _this.seasonPoints[_this.team2] += 3;
              break;

            case "D":
              _this.seasonPoints[_this.team2] += 1;
              break;

            default:
              break;
          }

          _this.seasonShots[_this.team2] += parseInt(match2["AS"]);
          _this.seasonShotsOnTarget[_this.team2] += parseInt(match2["AST"]);
          _this.seasonFirstHalfGoals[_this.team2] += parseInt(match2["HTAG"]);
          _this.seasonSecondHalfGoals[_this.team2] += parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]);
          _this.seasonGoals[_this.team2] += parseInt(match2["FTAG"]);
          _this.seasonGoalsAgainst[_this.team2] += parseInt(match2["FTHG"]);
          _this.seasonCorners[_this.team2] += parseInt(match2["AC"]);
          _this.seasonFoulsCommited[_this.team2] += parseInt(match2["AF"]);
          _this.seasonFoulsAgainst[_this.team2] += parseInt(match2["HF"]);
          _this.seasonYellowCards[_this.team2] += parseInt(match2["AY"]);
          _this.seasonRedCards[_this.team2] += parseInt(match2["AR"]);
        }
      } // Dropdown button creation to change stats


      var dropDownButton = d3.select(".update-button-container").append("select").attr("class", "update-button");
      dropDownButton.selectAll('dataOptions').data(_this.stats).enter().append("option").text(function (d) {
        return d;
      }).attr("value", function (d) {
        return d;
      }); // Y-Axis label

      _this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - MARGIN.left - 5).attr("x", 0 - HEIGHT / 2).attr("dy", "1em").style("text-anchor", "middle").attr("class", "yaxis-text").text("Points").attr("font-size", "22px").style("fill", "white"); // X-Axis Label


      _this.svg.append("text").attr("transform", "translate (" + WIDTH / 2 + " ," + (HEIGHT + MARGIN.top + 25) + ")").attr("class", "x-axis").style("text-anchor", "middle").text("Teams").attr("font-size", "22px").style("fill", "white"); // X/Y axis variables and functions


      var x = d3.scaleBand().range([0, WIDTH]).padding(0.2);

      var xAxis = _this.svg.append("g").attr("transform", "translate(0, ".concat(HEIGHT, ")")).attr("class", "X-axis").style("fill", "white");

      var y = d3.scaleLinear().range([HEIGHT, 0]);

      var yAxis = _this.svg.append("g").attr("class", "Y-axis").style("fill", "white");

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

  _createClass(BarGraph, [{
    key: "update",
    value: function update(data, title, x, xAxis, y, yAxis) {
      // Update X-Axis with team names
      x.domain(Object.keys(data).map(function (team) {
        return team;
      }));
      xAxis.call(d3.axisBottom(x)); // Update Y-Axis with relevant values

      data[this.team1] >= data[this.team2] ? y.domain([0, data[this.team1] + data[this.team1] / 10]) : y.domain([0, data[this.team2] + data[this.team2] / 10]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      this.svg.select(".yaxis-text").text(title);
      var teams = Object.keys(data);
      var u = this.svg.selectAll("rect").data(teams);
      u.join("rect").transition().attr("x", function (d) {
        return x(d);
      }).attr("y", function (d) {
        return y(data[d]);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return HEIGHT - y(data[d]);
      }).attr("fill", "blue");
    }
  }]);

  return BarGraph;
}();

/* harmony default export */ __webpack_exports__["default"] = (BarGraph);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lineGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineGraph */ "./src/lineGraph.js");
/* harmony import */ var _barGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barGraph */ "./src/barGraph.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");



var MARGIN = {
  top: 30,
  right: 30,
  bottom: 80,
  left: 60
},
    WIDTH = 650 - MARGIN.left - MARGIN.right,
    HEIGHT = 590 - MARGIN.top - MARGIN.bottom,
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
  new _barGraph__WEBPACK_IMPORTED_MODULE_1__["default"](svg, team1, season1, team2, season2);
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
    WIDTH = 650 - MARGIN.left - MARGIN.right,
    HEIGHT = 590 - MARGIN.top - MARGIN.bottom;

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
        // Matchday vars
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

      _this.svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("".concat(_this.team1, " ").concat(_this.season1));

      _this.svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("".concat(_this.team2, " ").concat(_this.season2)); // Dropdown button creation to change stats


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

      _this.update(_this.seasonPoints, "Points", x, xAxis, y, yAxis); // Dropdown Button Options to change data output


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIkJhckdyYXBoIiwic3ZnIiwidGVhbTEiLCJzZWFzb24xIiwidGVhbTIiLCJzZWFzb24yIiwic2Vhc29uUG9pbnRzIiwic2Vhc29uU2hvdHMiLCJzZWFzb25TaG90c09uVGFyZ2V0Iiwic2Vhc29uRmlyc3RIYWxmR29hbHMiLCJzZWFzb25TZWNvbmRIYWxmR29hbHMiLCJzZWFzb25Hb2FscyIsInNlYXNvbkdvYWxzQWdhaW5zdCIsInNlYXNvbkNvcm5lcnMiLCJzZWFzb25Gb3Vsc0NvbW1pdGVkIiwic2Vhc29uRm91bHNBZ2FpbnN0Iiwic2Vhc29uWWVsbG93Q2FyZHMiLCJzZWFzb25SZWRDYXJkcyIsInN0YXRzIiwidXBkYXRlIiwiYmluZCIsIlByb21pc2UiLCJhbGwiLCJkMyIsImNzdiIsInRoZW4iLCJkYXRhIiwiaSIsImxlbmd0aCIsIm1hdGNoMSIsIm1hdGNoMiIsInBhcnNlSW50IiwiZHJvcERvd25CdXR0b24iLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJ0ZXh0IiwiZCIsInN0eWxlIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJ0aGF0Iiwib24iLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5IiwidGl0bGUiLCJkb21haW4iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidGVhbSIsImNhbGwiLCJheGlzQm90dG9tIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXhpc0xlZnQiLCJ0ZWFtcyIsInUiLCJqb2luIiwiYmFuZHdpZHRoIiwiVEVBTVMiLCJTRUFTT05TIiwiR1JBUEgiLCJsaW5lIiwiYmFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVhbU9uZVNlYXNvblNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsInRlYW1Ud29TZWFzb25TZWxlY3RvciIsImZpcnN0VGVhbVNlbGVjdG9yIiwic2Vjb25kVGVhbVNlbGVjdG9yIiwic2VhcmNoRm9ybSIsImNvbXBhcmVCdXR0b24iLCJvbmNoYW5nZSIsImV2ZW50Iiwic2Vhc29uIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1vdmVUZWFtc0Zyb21TZWFyY2giLCJwb3B1bGF0ZVRlYW1TZWxlY3RvciIsImRpc3BsYXkiLCJyZXNldEJ1dHRvbiIsImNyZWF0ZUxpbmVHcmFwaCIsImVsZW1lbnQiLCJzZWxlY3RDaGlsZHJlbiIsInJlbW92ZSIsInNlbGVjdG9yIiwibWF0Y2hkYXkiLCJpbmNsdWRlcyIsInB1c2giLCJkcm9wRG93blRlYW0iLCJyZW1vdmVHcmFwaCIsImJ1dHRvbkNvbnRhaW5lciIsInJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uIiwicmVtb3ZlVXBkYXRlQnV0dG9uIiwiY3JlYXRlQmFyR3JhcGgiLCJjaGFuZ2VHcmFwaEJ1dHRvbiIsIkxpbmVHcmFwaCIsInNlYXNvbkxlbmd0aCIsInByZXZNYXRjaGRheTEiLCJwcmV2UG9pbnRzMSIsInByZXZTaG90czEiLCJwcmV2U2hvdHNPblRhcmdldDEiLCJwcmV2Rmlyc3RIYWxmR29hbHMxIiwicHJldlNlY29uZEhhbGZHb2FsczEiLCJwcmV2R29hbHMxIiwicHJldkdvYWxzQWdhaW5zdDEiLCJwcmV2Q29ybmVyczEiLCJwcmV2Rm91bHNDb21taXRlZDEiLCJwcmV2Rm91bHNBZ2FpbnN0MSIsInByZXZZZWxsb3dDYXJkczEiLCJwcmV2UmVkQ2FyZHMxIiwicHJldk1hdGNoZGF5MiIsInByZXZQb2ludHMyIiwicHJldlNob3RzMiIsInByZXZTaG90c09uVGFyZ2V0MiIsInByZXZGaXJzdEhhbGZHb2FsczIiLCJwcmV2U2Vjb25kSGFsZkdvYWxzMiIsInByZXZHb2FsczIiLCJwcmV2R29hbHNBZ2FpbnN0MiIsInByZXZDb3JuZXJzMiIsInByZXZGb3Vsc0NvbW1pdGVkMiIsInByZXZGb3Vsc0FnYWluc3QyIiwicHJldlllbGxvd0NhcmRzMiIsInByZXZSZWRDYXJkczIiLCJzY2FsZSIsIm1heCIsInRlYW1PbmVNYXgiLCJ0ZWFtVHdvTWF4IiwibGluZTEiLCJsaW5lMiIsImRhdHVtIiwibWVyZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLE1BQU0sR0FBRztBQUFDQyxLQUFHLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsRUFBakI7QUFBcUJDLFFBQU0sRUFBRSxFQUE3QjtBQUFpQ0MsTUFBSSxFQUFFO0FBQXZDLENBQWY7QUFBQSxJQUNBQyxLQUFLLEdBQUcsTUFBTUwsTUFBTSxDQUFDSSxJQUFiLEdBQW9CSixNQUFNLENBQUNFLEtBRG5DO0FBQUEsSUFFQUksTUFBTSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ0MsR0FBYixHQUFtQkQsTUFBTSxDQUFDRyxNQUZuQzs7SUFJTUksUTtBQUNGLG9CQUFZQyxHQUFaLEVBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLEtBQWpDLEVBQXdDQyxPQUF4QyxFQUFnRDtBQUFBOztBQUFBOztBQUM5QyxTQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFFQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsRUFBNUI7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QixFQUE3QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixFQUEzQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBR0EsU0FBS1gsWUFBTCxDQUFrQixLQUFLSixLQUF2QixJQUFnQyxDQUFoQztBQUNBLFNBQUtJLFlBQUwsQ0FBa0IsS0FBS0YsS0FBdkIsSUFBZ0MsQ0FBaEM7QUFDQSxTQUFLRyxXQUFMLENBQWlCLEtBQUtMLEtBQXRCLElBQStCLENBQS9CO0FBQ0EsU0FBS0ssV0FBTCxDQUFpQixLQUFLSCxLQUF0QixJQUErQixDQUEvQjtBQUNBLFNBQUtJLG1CQUFMLENBQXlCLEtBQUtOLEtBQTlCLElBQXVDLENBQXZDO0FBQ0EsU0FBS00sbUJBQUwsQ0FBeUIsS0FBS0osS0FBOUIsSUFBdUMsQ0FBdkM7QUFDQSxTQUFLSyxvQkFBTCxDQUEwQixLQUFLUCxLQUEvQixJQUF3QyxDQUF4QztBQUNBLFNBQUtPLG9CQUFMLENBQTBCLEtBQUtMLEtBQS9CLElBQXdDLENBQXhDO0FBQ0EsU0FBS00scUJBQUwsQ0FBMkIsS0FBS1IsS0FBaEMsSUFBeUMsQ0FBekM7QUFDQSxTQUFLUSxxQkFBTCxDQUEyQixLQUFLTixLQUFoQyxJQUF5QyxDQUF6QztBQUNBLFNBQUtPLFdBQUwsQ0FBaUIsS0FBS1QsS0FBdEIsSUFBK0IsQ0FBL0I7QUFDQSxTQUFLUyxXQUFMLENBQWlCLEtBQUtQLEtBQXRCLElBQStCLENBQS9CO0FBQ0EsU0FBS1Esa0JBQUwsQ0FBd0IsS0FBS1YsS0FBN0IsSUFBc0MsQ0FBdEM7QUFDQSxTQUFLVSxrQkFBTCxDQUF3QixLQUFLUixLQUE3QixJQUFzQyxDQUF0QztBQUNBLFNBQUtTLGFBQUwsQ0FBbUIsS0FBS1gsS0FBeEIsSUFBaUMsQ0FBakM7QUFDQSxTQUFLVyxhQUFMLENBQW1CLEtBQUtULEtBQXhCLElBQWlDLENBQWpDO0FBQ0EsU0FBS1UsbUJBQUwsQ0FBeUIsS0FBS1osS0FBOUIsSUFBdUMsQ0FBdkM7QUFDQSxTQUFLWSxtQkFBTCxDQUF5QixLQUFLVixLQUE5QixJQUF1QyxDQUF2QztBQUNBLFNBQUtXLGtCQUFMLENBQXdCLEtBQUtiLEtBQTdCLElBQXNDLENBQXRDO0FBQ0EsU0FBS2Esa0JBQUwsQ0FBd0IsS0FBS1gsS0FBN0IsSUFBc0MsQ0FBdEM7QUFDQSxTQUFLWSxpQkFBTCxDQUF1QixLQUFLZCxLQUE1QixJQUFxQyxDQUFyQztBQUNBLFNBQUtjLGlCQUFMLENBQXVCLEtBQUtaLEtBQTVCLElBQXFDLENBQXJDO0FBQ0EsU0FBS2EsY0FBTCxDQUFvQixLQUFLZixLQUF6QixJQUFrQyxDQUFsQztBQUNBLFNBQUtlLGNBQUwsQ0FBb0IsS0FBS2IsS0FBekIsSUFBa0MsQ0FBbEM7QUFFQSxTQUFLYyxLQUFMLEdBQWEsQ0FDWCxRQURXLEVBRVgsT0FGVyxFQUdYLGlCQUhXLEVBSVgsa0JBSlcsRUFLWCxtQkFMVyxFQU1YLGFBTlcsRUFPWCxlQVBXLEVBUVgsU0FSVyxFQVNYLGdCQVRXLEVBVVgsZUFWVyxFQVdYLGNBWFcsRUFZWCxXQVpXLENBQWI7QUFjRSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQsQ0E1RDRDLENBNkQ1Qzs7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDVkMsRUFBRSxDQUFDQyxHQUFILGlGQUFnRixLQUFLckIsT0FBckYsVUFEVSxFQUVWb0IsRUFBRSxDQUFDQyxHQUFILGlGQUFnRixLQUFLbkIsT0FBckYsVUFGVSxDQUFaLEVBR0dvQixJQUhILENBR1EsVUFBQUMsSUFBSSxFQUFJO0FBQ2Q7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDdkM7QUFDQSxZQUFJRSxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsQ0FBUixDQUFiO0FBQ0EsWUFBSUcsTUFBTSxHQUFHSixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLENBQVIsQ0FBYixDQUh1QyxDQUt2Qzs7QUFDQSxZQUFJLEtBQUksQ0FBQ3pCLEtBQUwsS0FBZTJCLE1BQU0sQ0FBQyxVQUFELENBQXpCLEVBQXNDO0FBQ3BDLGtCQUFRQSxNQUFNLENBQUMsS0FBRCxDQUFkO0FBQ0UsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUN2QixZQUFMLENBQWtCLEtBQUksQ0FBQ0osS0FBdkIsS0FBaUMsQ0FBakM7QUFDQTs7QUFDRixpQkFBSyxHQUFMO0FBQ0UsbUJBQUksQ0FBQ0ksWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEtBQWlDLENBQWpDO0FBQ0E7O0FBQ0Y7QUFDRTtBQVJKOztBQVVBLGVBQUksQ0FBQ0ssV0FBTCxDQUFpQixLQUFJLENBQUNMLEtBQXRCLEtBQWdDNkIsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQXhDO0FBQ0EsZUFBSSxDQUFDckIsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDTixLQUE5QixLQUF3QzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLEtBQUQsQ0FBUCxDQUFoRDtBQUNBLGVBQUksQ0FBQ3BCLG9CQUFMLENBQTBCLEtBQUksQ0FBQ1AsS0FBL0IsS0FBeUM2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBakQ7QUFDQSxlQUFJLENBQUNuQixxQkFBTCxDQUEyQixLQUFJLENBQUNSLEtBQWhDLEtBQTJDNkIsUUFBUSxDQUFDRixNQUFNLENBQUMsTUFBRCxDQUFQLENBQVIsR0FBMkJFLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUE5RTtBQUNBLGVBQUksQ0FBQ2xCLFdBQUwsQ0FBaUIsS0FBSSxDQUFDVCxLQUF0QixLQUFnQzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUF4QztBQUNBLGVBQUksQ0FBQ2pCLGtCQUFMLENBQXdCLEtBQUksQ0FBQ1YsS0FBN0IsS0FBdUM2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBL0M7QUFDQSxlQUFJLENBQUNoQixhQUFMLENBQW1CLEtBQUksQ0FBQ1gsS0FBeEIsS0FBa0M2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBMUM7QUFDQSxlQUFJLENBQUNmLG1CQUFMLENBQXlCLEtBQUksQ0FBQ1osS0FBOUIsS0FBd0M2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBaEQ7QUFDQSxlQUFJLENBQUNkLGtCQUFMLENBQXdCLEtBQUksQ0FBQ2IsS0FBN0IsS0FBdUM2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBL0M7QUFDQSxlQUFJLENBQUNiLGlCQUFMLENBQXVCLEtBQUksQ0FBQ2QsS0FBNUIsS0FBc0M2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBOUM7QUFDQSxlQUFJLENBQUNaLGNBQUwsQ0FBb0IsS0FBSSxDQUFDZixLQUF6QixLQUFtQzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEzQztBQUNELFNBdEJELE1Bc0JPLElBQUksS0FBSSxDQUFDM0IsS0FBTCxLQUFlMkIsTUFBTSxDQUFDLFVBQUQsQ0FBekIsRUFBc0M7QUFDM0Msa0JBQVFBLE1BQU0sQ0FBQyxLQUFELENBQWQ7QUFDRSxpQkFBSyxHQUFMO0FBQ0UsbUJBQUksQ0FBQ3ZCLFlBQUwsQ0FBa0IsS0FBSSxDQUFDSixLQUF2QixLQUFpQyxDQUFqQztBQUNBOztBQUNGLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDSSxZQUFMLENBQWtCLEtBQUksQ0FBQ0osS0FBdkIsS0FBaUMsQ0FBakM7QUFDQTs7QUFDRjtBQUNFO0FBUko7O0FBVUEsZUFBSSxDQUFDSyxXQUFMLENBQWlCLEtBQUksQ0FBQ0wsS0FBdEIsS0FBZ0M2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBeEM7QUFDQSxlQUFJLENBQUNyQixtQkFBTCxDQUF5QixLQUFJLENBQUNOLEtBQTlCLEtBQXdDNkIsUUFBUSxDQUFDRixNQUFNLENBQUMsS0FBRCxDQUFQLENBQWhEO0FBQ0EsZUFBSSxDQUFDcEIsb0JBQUwsQ0FBMEIsS0FBSSxDQUFDUCxLQUEvQixLQUF5QzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFqRDtBQUNBLGVBQUksQ0FBQ25CLHFCQUFMLENBQTJCLEtBQUksQ0FBQ1IsS0FBaEMsS0FBMkM2QixRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBUixHQUEyQkUsUUFBUSxDQUFDRixNQUFNLENBQUMsTUFBRCxDQUFQLENBQTlFO0FBQ0EsZUFBSSxDQUFDbEIsV0FBTCxDQUFpQixLQUFJLENBQUNULEtBQXRCLEtBQWdDNkIsUUFBUSxDQUFDRixNQUFNLENBQUMsTUFBRCxDQUFQLENBQXhDO0FBQ0EsZUFBSSxDQUFDakIsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDVixLQUE3QixLQUF1QzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUEvQztBQUNBLGVBQUksQ0FBQ2hCLGFBQUwsQ0FBbUIsS0FBSSxDQUFDWCxLQUF4QixLQUFrQzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUExQztBQUNBLGVBQUksQ0FBQ2YsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDWixLQUE5QixLQUF3QzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUFoRDtBQUNBLGVBQUksQ0FBQ2Qsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDYixLQUE3QixLQUF1QzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEvQztBQUNBLGVBQUksQ0FBQ2IsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDZCxLQUE1QixLQUFzQzZCLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUE5QztBQUNBLGVBQUksQ0FBQ1osY0FBTCxDQUFvQixLQUFJLENBQUNmLEtBQXpCLEtBQW1DNkIsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQTNDO0FBQ0QsU0FsRHNDLENBb0R2Qzs7O0FBQ0EsWUFBSSxLQUFJLENBQUN6QixLQUFMLEtBQWUwQixNQUFNLENBQUMsVUFBRCxDQUF6QixFQUFzQztBQUNwQyxrQkFBUUEsTUFBTSxDQUFDLEtBQUQsQ0FBZDtBQUNFLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDeEIsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEtBQWlDLENBQWpDO0FBQ0E7O0FBQ0YsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUNFLFlBQUwsQ0FBa0IsS0FBSSxDQUFDRixLQUF2QixLQUFpQyxDQUFqQztBQUNBOztBQUNGO0FBQ0U7QUFSSjs7QUFVQSxlQUFJLENBQUNHLFdBQUwsQ0FBaUIsS0FBSSxDQUFDSCxLQUF0QixLQUFnQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUF4QztBQUNBLGVBQUksQ0FBQ3RCLG1CQUFMLENBQXlCLEtBQUksQ0FBQ0osS0FBOUIsS0FBd0MyQixRQUFRLENBQUNELE1BQU0sQ0FBQyxLQUFELENBQVAsQ0FBaEQ7QUFDQSxlQUFJLENBQUNyQixvQkFBTCxDQUEwQixLQUFJLENBQUNMLEtBQS9CLEtBQXlDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQWpEO0FBQ0EsZUFBSSxDQUFDcEIscUJBQUwsQ0FBMkIsS0FBSSxDQUFDTixLQUFoQyxLQUEyQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFSLEdBQTJCQyxRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBOUU7QUFDQSxlQUFJLENBQUNuQixXQUFMLENBQWlCLEtBQUksQ0FBQ1AsS0FBdEIsS0FBZ0MyQixRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBeEM7QUFDQSxlQUFJLENBQUNsQixrQkFBTCxDQUF3QixLQUFJLENBQUNSLEtBQTdCLEtBQXVDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQS9DO0FBQ0EsZUFBSSxDQUFDakIsYUFBTCxDQUFtQixLQUFJLENBQUNULEtBQXhCLEtBQWtDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTFDO0FBQ0EsZUFBSSxDQUFDaEIsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDVixLQUE5QixLQUF3QzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUFoRDtBQUNBLGVBQUksQ0FBQ2Ysa0JBQUwsQ0FBd0IsS0FBSSxDQUFDWCxLQUE3QixLQUF1QzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEvQztBQUNBLGVBQUksQ0FBQ2QsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDWixLQUE1QixLQUFzQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUE5QztBQUNBLGVBQUksQ0FBQ2IsY0FBTCxDQUFvQixLQUFJLENBQUNiLEtBQXpCLEtBQW1DMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTNDO0FBQ0QsU0F0QkQsTUFzQk8sSUFBSSxLQUFJLENBQUMxQixLQUFMLEtBQWUwQixNQUFNLENBQUMsVUFBRCxDQUF6QixFQUFzQztBQUMzQyxrQkFBUUEsTUFBTSxDQUFDLEtBQUQsQ0FBZDtBQUNFLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDeEIsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEtBQWlDLENBQWpDO0FBQ0E7O0FBQ0YsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUNFLFlBQUwsQ0FBa0IsS0FBSSxDQUFDRixLQUF2QixLQUFpQyxDQUFqQztBQUNBOztBQUNGO0FBQ0U7QUFSSjs7QUFVQSxlQUFJLENBQUNHLFdBQUwsQ0FBaUIsS0FBSSxDQUFDSCxLQUF0QixLQUFnQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUF4QztBQUNBLGVBQUksQ0FBQ3RCLG1CQUFMLENBQXlCLEtBQUksQ0FBQ0osS0FBOUIsS0FBd0MyQixRQUFRLENBQUNELE1BQU0sQ0FBQyxLQUFELENBQVAsQ0FBaEQ7QUFDQSxlQUFJLENBQUNyQixvQkFBTCxDQUEwQixLQUFJLENBQUNMLEtBQS9CLEtBQXlDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQWpEO0FBQ0EsZUFBSSxDQUFDcEIscUJBQUwsQ0FBMkIsS0FBSSxDQUFDTixLQUFoQyxLQUEyQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFSLEdBQTJCQyxRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBOUU7QUFDQSxlQUFJLENBQUNuQixXQUFMLENBQWlCLEtBQUksQ0FBQ1AsS0FBdEIsS0FBZ0MyQixRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBeEM7QUFDQSxlQUFJLENBQUNsQixrQkFBTCxDQUF3QixLQUFJLENBQUNSLEtBQTdCLEtBQXVDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQS9DO0FBQ0EsZUFBSSxDQUFDakIsYUFBTCxDQUFtQixLQUFJLENBQUNULEtBQXhCLEtBQWtDMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTFDO0FBQ0EsZUFBSSxDQUFDaEIsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDVixLQUE5QixLQUF3QzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUFoRDtBQUNBLGVBQUksQ0FBQ2Ysa0JBQUwsQ0FBd0IsS0FBSSxDQUFDWCxLQUE3QixLQUF1QzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEvQztBQUNBLGVBQUksQ0FBQ2QsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDWixLQUE1QixLQUFzQzJCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUE5QztBQUNBLGVBQUksQ0FBQ2IsY0FBTCxDQUFvQixLQUFJLENBQUNiLEtBQXpCLEtBQW1DMkIsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTNDO0FBQ0Q7QUFDRixPQXBHYSxDQXNHZDs7O0FBQ0EsVUFBTUUsY0FBYyxHQUFHVCxFQUFFLENBQUNVLE1BQUgsQ0FBVSwwQkFBVixFQUFzQ0MsTUFBdEMsQ0FBNkMsUUFBN0MsRUFBdURDLElBQXZELENBQTRELE9BQTVELEVBQXFFLGVBQXJFLENBQXZCO0FBQ0FILG9CQUFjLENBQUNJLFNBQWYsQ0FBeUIsYUFBekIsRUFDQ1YsSUFERCxDQUNNLEtBQUksQ0FBQ1IsS0FEWCxFQUVDbUIsS0FGRCxHQUdDSCxNQUhELENBR1EsUUFIUixFQUlDSSxJQUpELENBSU0sVUFBQUMsQ0FBQyxFQUFJO0FBQUMsZUFBT0EsQ0FBUDtBQUFTLE9BSnJCLEVBS0NKLElBTEQsQ0FLTSxPQUxOLEVBS2UsVUFBQUksQ0FBQyxFQUFJO0FBQUMsZUFBT0EsQ0FBUDtBQUFTLE9BTDlCLEVBeEdjLENBK0dkOztBQUNBLFdBQUksQ0FBQ3RDLEdBQUwsQ0FBU2lDLE1BQVQsQ0FBZ0IsTUFBaEIsRUFDQ0MsSUFERCxDQUNNLFdBRE4sRUFDbUIsYUFEbkIsRUFFQ0EsSUFGRCxDQUVNLEdBRk4sRUFFVyxJQUFJMUMsTUFBTSxDQUFDSSxJQUFYLEdBQWtCLENBRjdCLEVBR0NzQyxJQUhELENBR00sR0FITixFQUdXLElBQUtwQyxNQUFNLEdBQUMsQ0FIdkIsRUFJQ29DLElBSkQsQ0FJTSxJQUpOLEVBSVksS0FKWixFQUtDSyxLQUxELENBS08sYUFMUCxFQUtzQixRQUx0QixFQU1DTCxJQU5ELENBTU0sT0FOTixFQU1lLFlBTmYsRUFPQ0csSUFQRCxDQU9NLFFBUE4sRUFRQ0gsSUFSRCxDQVFNLFdBUk4sRUFRbUIsTUFSbkIsRUFTQ0ssS0FURCxDQVNPLE1BVFAsRUFTZSxPQVRmLEVBaEhjLENBNkhkOzs7QUFDQSxXQUFJLENBQUN2QyxHQUFMLENBQVNpQyxNQUFULENBQWdCLE1BQWhCLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CLGdCQUFpQnJDLEtBQUssR0FBQyxDQUF2QixHQUE0QixJQUE1QixJQUFvQ0MsTUFBTSxHQUFHTixNQUFNLENBQUNDLEdBQWhCLEdBQXNCLEVBQTFELElBQWdFLEdBRG5GLEVBRUN5QyxJQUZELENBRU0sT0FGTixFQUVlLFFBRmYsRUFHQ0ssS0FIRCxDQUdPLGFBSFAsRUFHc0IsUUFIdEIsRUFJQ0YsSUFKRCxDQUlNLE9BSk4sRUFLQ0gsSUFMRCxDQUtNLFdBTE4sRUFLbUIsTUFMbkIsRUFNQ0ssS0FORCxDQU1PLE1BTlAsRUFNZSxPQU5mLEVBOUhjLENBdUlkOzs7QUFDQSxVQUFNQyxDQUFDLEdBQUdsQixFQUFFLENBQUNtQixTQUFILEdBQWVDLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUk3QyxLQUFKLENBQXJCLEVBQWlDOEMsT0FBakMsQ0FBeUMsR0FBekMsQ0FBVjs7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBSSxDQUFDNUMsR0FBTCxDQUFTaUMsTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEIsV0FBMUIseUJBQXVEcEMsTUFBdkQsUUFBa0VvQyxJQUFsRSxDQUF1RSxPQUF2RSxFQUFnRixRQUFoRixFQUEwRkssS0FBMUYsQ0FBZ0csTUFBaEcsRUFBd0csT0FBeEcsQ0FBZDs7QUFFQSxVQUFNTSxDQUFDLEdBQUd2QixFQUFFLENBQUN3QixXQUFILEdBQWlCSixLQUFqQixDQUF1QixDQUFDNUMsTUFBRCxFQUFTLENBQVQsQ0FBdkIsQ0FBVjs7QUFDQSxVQUFNaUQsS0FBSyxHQUFHLEtBQUksQ0FBQy9DLEdBQUwsQ0FBU2lDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLEVBQTZDSyxLQUE3QyxDQUFtRCxNQUFuRCxFQUEyRCxPQUEzRCxDQUFkOztBQUVBLFdBQUksQ0FBQ3JCLE1BQUwsQ0FBWSxLQUFJLENBQUNiLFlBQWpCLEVBQStCLFFBQS9CLEVBQXlDbUMsQ0FBekMsRUFBNENJLEtBQTVDLEVBQW1EQyxDQUFuRCxFQUFzREUsS0FBdEQ7O0FBRUEsVUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFDQWpCLG9CQUFjLENBQUNrQixFQUFmLENBQWtCLFFBQWxCLEVBQTRCLFVBQVNYLENBQVQsRUFBWTtBQUN0QyxZQUFJWSxjQUFjLEdBQUc1QixFQUFFLENBQUNVLE1BQUgsQ0FBVSxJQUFWLEVBQWdCbUIsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7O0FBQ0EsZ0JBQVFELGNBQVI7QUFDRSxlQUFLLFFBQUw7QUFDSUYsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQzNDLFlBQWpCLEVBQStCNkMsY0FBL0IsRUFBK0NWLENBQS9DLEVBQWtESSxLQUFsRCxFQUF5REMsQ0FBekQsRUFBNERFLEtBQTVEO0FBQ0E7O0FBQ0osZUFBSyxPQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUMxQyxXQUFqQixFQUE4QjRDLGNBQTlCLEVBQThDVixDQUE5QyxFQUFpREksS0FBakQsRUFBd0RDLENBQXhELEVBQTJERSxLQUEzRDtBQUNBOztBQUNKLGVBQUssaUJBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ3pDLG1CQUFqQixFQUFzQzJDLGNBQXRDLEVBQXNEVixDQUF0RCxFQUF5REksS0FBekQsRUFBZ0VDLENBQWhFLEVBQW1FRSxLQUFuRTtBQUNBOztBQUNKLGVBQUssa0JBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ3hDLG9CQUFqQixFQUF1QzBDLGNBQXZDLEVBQXVEVixDQUF2RCxFQUEwREksS0FBMUQsRUFBaUVDLENBQWpFLEVBQW9FRSxLQUFwRTtBQUNBOztBQUNKLGVBQUssbUJBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ3ZDLHFCQUFqQixFQUF3Q3lDLGNBQXhDLEVBQXdEVixDQUF4RCxFQUEyREksS0FBM0QsRUFBa0VDLENBQWxFLEVBQXFFRSxLQUFyRTtBQUNBOztBQUNKLGVBQUssYUFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDdEMsV0FBakIsRUFBOEJ3QyxjQUE5QixFQUE4Q1YsQ0FBOUMsRUFBaURJLEtBQWpELEVBQXdEQyxDQUF4RCxFQUEyREUsS0FBM0Q7QUFDQTs7QUFDSixlQUFLLGVBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ3JDLGtCQUFqQixFQUFxQ3VDLGNBQXJDLEVBQXFEVixDQUFyRCxFQUF3REksS0FBeEQsRUFBK0RDLENBQS9ELEVBQWtFRSxLQUFsRTtBQUNBOztBQUNKLGVBQUssU0FBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDcEMsYUFBakIsRUFBZ0NzQyxjQUFoQyxFQUFnRFYsQ0FBaEQsRUFBbURJLEtBQW5ELEVBQTBEQyxDQUExRCxFQUE2REUsS0FBN0Q7QUFDQTs7QUFDSixlQUFLLGdCQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUNuQyxtQkFBakIsRUFBc0NxQyxjQUF0QyxFQUFzRFYsQ0FBdEQsRUFBeURJLEtBQXpELEVBQWdFQyxDQUFoRSxFQUFtRUUsS0FBbkU7QUFDQTs7QUFDSixlQUFLLGVBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ2xDLGtCQUFqQixFQUFxQ29DLGNBQXJDLEVBQXFEVixDQUFyRCxFQUF3REksS0FBeEQsRUFBK0RDLENBQS9ELEVBQWtFRSxLQUFsRTtBQUNBOztBQUNKLGVBQUssY0FBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDakMsaUJBQWpCLEVBQW9DbUMsY0FBcEMsRUFBb0RWLENBQXBELEVBQXVESSxLQUF2RCxFQUE4REMsQ0FBOUQsRUFBaUVFLEtBQWpFO0FBQ0E7O0FBQ0osZUFBSyxXQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUNoQyxjQUFqQixFQUFpQ2tDLGNBQWpDLEVBQWlEVixDQUFqRCxFQUFvREksS0FBcEQsRUFBMkRDLENBQTNELEVBQThERSxLQUE5RDtBQUNBOztBQUNKO0FBQ0k7QUF0Q047QUF3Q0gsT0ExQ0M7QUE0Q0QsS0FoTUQ7QUFpTUg7Ozs7V0FFRCxnQkFBT3RCLElBQVAsRUFBYTJCLEtBQWIsRUFBb0JaLENBQXBCLEVBQXVCSSxLQUF2QixFQUE4QkMsQ0FBOUIsRUFBaUNFLEtBQWpDLEVBQXVDO0FBRXJDO0FBQ0FQLE9BQUMsQ0FBQ2EsTUFBRixDQUFTQyxNQUFNLENBQUNDLElBQVAsQ0FBWTlCLElBQVosRUFBa0IrQixHQUFsQixDQUFzQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSjtBQUFBLE9BQTFCLENBQVQ7QUFDQWIsV0FBSyxDQUFDYyxJQUFOLENBQVdwQyxFQUFFLENBQUNxQyxVQUFILENBQWNuQixDQUFkLENBQVgsRUFKcUMsQ0FNckM7O0FBQ0FmLFVBQUksQ0FBQyxLQUFLeEIsS0FBTixDQUFKLElBQW9Cd0IsSUFBSSxDQUFDLEtBQUt0QixLQUFOLENBQXhCLEdBQXVDMEMsQ0FBQyxDQUFDUSxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUk1QixJQUFJLENBQUMsS0FBS3hCLEtBQU4sQ0FBSixHQUFvQndCLElBQUksQ0FBQyxLQUFLeEIsS0FBTixDQUFKLEdBQWlCLEVBQXpDLENBQVQsQ0FBdkMsR0FBaUc0QyxDQUFDLENBQUNRLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSTVCLElBQUksQ0FBQyxLQUFLdEIsS0FBTixDQUFKLEdBQW9Cc0IsSUFBSSxDQUFDLEtBQUt0QixLQUFOLENBQUosR0FBaUIsRUFBekMsQ0FBVCxDQUFqRztBQUNBNEMsV0FBSyxDQUFDYSxVQUFOLEdBQW1CQyxRQUFuQixDQUE0QixJQUE1QixFQUFrQ0gsSUFBbEMsQ0FBdUNwQyxFQUFFLENBQUN3QyxRQUFILENBQVlqQixDQUFaLENBQXZDO0FBRUEsV0FBSzdDLEdBQUwsQ0FBU2dDLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0JLLElBQS9CLENBQW9DZSxLQUFwQztBQUNBLFVBQU1XLEtBQUssR0FBR1QsTUFBTSxDQUFDQyxJQUFQLENBQVk5QixJQUFaLENBQWQ7QUFFQSxVQUFJdUMsQ0FBQyxHQUFHLEtBQUtoRSxHQUFMLENBQVNtQyxTQUFULENBQW1CLE1BQW5CLEVBQTJCVixJQUEzQixDQUFnQ3NDLEtBQWhDLENBQVI7QUFFQUMsT0FBQyxDQUFDQyxJQUFGLENBQU8sTUFBUCxFQUNDTCxVQURELEdBRUMxQixJQUZELENBRU0sR0FGTixFQUVXLFVBQUFJLENBQUM7QUFBQSxlQUFJRSxDQUFDLENBQUNGLENBQUQsQ0FBTDtBQUFBLE9BRlosRUFHQ0osSUFIRCxDQUdNLEdBSE4sRUFHVyxVQUFBSSxDQUFDO0FBQUEsZUFBSU8sQ0FBQyxDQUFDcEIsSUFBSSxDQUFDYSxDQUFELENBQUwsQ0FBTDtBQUFBLE9BSFosRUFJQ0osSUFKRCxDQUlNLE9BSk4sRUFJZU0sQ0FBQyxDQUFDMEIsU0FBRixFQUpmLEVBS0NoQyxJQUxELENBS00sUUFMTixFQUtnQixVQUFBSSxDQUFDO0FBQUEsZUFBSXhDLE1BQU0sR0FBRytDLENBQUMsQ0FBQ3BCLElBQUksQ0FBQ2EsQ0FBRCxDQUFMLENBQWQ7QUFBQSxPQUxqQixFQU1DSixJQU5ELENBTU0sTUFOTixFQU1jLE1BTmQ7QUFPRDs7Ozs7O0FBR1VuQyx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUM5UkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQSxJQUFNUCxNQUFNLEdBQUc7QUFBQ0MsS0FBRyxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLEVBQWpCO0FBQXFCQyxRQUFNLEVBQUUsRUFBN0I7QUFBaUNDLE1BQUksRUFBRTtBQUF2QyxDQUFmO0FBQUEsSUFDQUMsS0FBSyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ksSUFBYixHQUFvQkosTUFBTSxDQUFDRSxLQURuQztBQUFBLElBRUFJLE1BQU0sR0FBRyxNQUFNTixNQUFNLENBQUNDLEdBQWIsR0FBbUJELE1BQU0sQ0FBQ0csTUFGbkM7QUFBQSxJQUdBd0UsS0FBSyxHQUFHO0FBQUNsRSxPQUFLLEVBQUUsRUFBUjtBQUFZRSxPQUFLLEVBQUU7QUFBbkIsQ0FIUjtBQUFBLElBSUFpRSxPQUFPLEdBQUc7QUFBQ2xFLFNBQU8sRUFBRSxFQUFWO0FBQWNFLFNBQU8sRUFBRTtBQUF2QixDQUpWO0FBQUEsSUFLQWlFLEtBQUssR0FBRztBQUFDQyxNQUFJLEVBQUUsS0FBUDtBQUFjQyxLQUFHLEVBQUU7QUFBbkIsQ0FMUixDLENBU0E7O0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQ7QUFDQSxNQUFNQyxxQkFBcUIsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLHFCQUF2QixDQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIscUJBQXZCLENBQTlCLENBSGdELENBS2hEOztBQUNBLE1BQU1FLGlCQUFpQixHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsbUJBQXZCLENBQTFCO0FBQ0EsTUFBTUcsa0JBQWtCLEdBQUdOLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixtQkFBdkIsQ0FBM0IsQ0FQZ0QsQ0FTaEQ7O0FBQ0EsTUFBTUksVUFBVSxHQUFHUCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsc0JBQXZCLENBQW5CLENBVmdELENBWWhEOztBQUNBLE1BQU1LLGFBQWEsR0FBRzFELEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLGlCQUFWLENBQXRCLENBYmdELENBZWhEOztBQUNBMEMsdUJBQXFCLENBQUNPLFFBQXRCLEdBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUMxQyxRQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUE1QjtBQUNBQyx5QkFBcUIsQ0FBQyxhQUFELENBQXJCO0FBQ0FDLHdCQUFvQixDQUFDSixNQUFELEVBQVMsWUFBVCxDQUFwQjtBQUNELEdBSkQ7O0FBTUFQLHVCQUFxQixDQUFDSyxRQUF0QixHQUFpQyxVQUFDQyxLQUFELEVBQVc7QUFDMUMsUUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBNUI7QUFDQUMseUJBQXFCLENBQUMsYUFBRCxDQUFyQjtBQUNBQyx3QkFBb0IsQ0FBQ0osTUFBRCxFQUFTLFlBQVQsQ0FBcEI7QUFDRCxHQUpEOztBQU1BSCxlQUFhLENBQUMvQixFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQVNYLENBQVQsRUFBWTtBQUNsQ3lDLGNBQVUsQ0FBQ3hDLEtBQVgsQ0FBaUJpRCxPQUFqQixHQUEyQixNQUEzQjtBQUNBQyxlQUFXLENBQUNWLFVBQUQsQ0FBWDtBQUVBWixTQUFLLENBQUMsT0FBRCxDQUFMLEdBQWlCVSxpQkFBaUIsQ0FBQ1EsS0FBbkM7QUFDQWxCLFNBQUssQ0FBQyxPQUFELENBQUwsR0FBaUJXLGtCQUFrQixDQUFDTyxLQUFwQztBQUNBakIsV0FBTyxDQUFDLFNBQUQsQ0FBUCxHQUFxQk0scUJBQXFCLENBQUNXLEtBQTNDO0FBQ0FqQixXQUFPLENBQUMsU0FBRCxDQUFQLEdBQXFCUSxxQkFBcUIsQ0FBQ1MsS0FBM0M7QUFFQUssbUJBQWUsQ0FBQ3ZCLEtBQUssQ0FBQyxPQUFELENBQU4sRUFBaUJDLE9BQU8sQ0FBQyxTQUFELENBQXhCLEVBQXFDRCxLQUFLLENBQUMsT0FBRCxDQUExQyxFQUFxREMsT0FBTyxDQUFDLFNBQUQsQ0FBNUQsQ0FBZjtBQUNILEdBVkQ7QUFZSCxDQXhDRCxFLENBMkNBOztBQUNBLElBQU1rQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFLLE9BQU8sRUFBSTtBQUNyQ3JFLElBQUUsQ0FBQ1UsTUFBSCxDQUFVMkQsT0FBVixFQUFtQkMsY0FBbkIsQ0FBa0MsUUFBbEMsRUFBNENDLE1BQTVDO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1OLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0osTUFBRCxFQUFTVyxRQUFULEVBQXNCO0FBQ2hELE1BQU0vQixLQUFLLEdBQUcsRUFBZDtBQUNBekMsSUFBRSxDQUFDQyxHQUFILGlGQUFnRjRELE1BQWhGLFdBQThGM0QsSUFBOUYsQ0FBbUcsVUFBQUMsSUFBSSxFQUFJO0FBQ3RHLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxVQUFNcUUsUUFBUSxHQUFHdEUsSUFBSSxDQUFDQyxDQUFELENBQXJCOztBQUNBLFVBQUksQ0FBQ3FDLEtBQUssQ0FBQ2lDLFFBQU4sQ0FBZUQsUUFBUSxDQUFDLFVBQUQsQ0FBdkIsQ0FBTCxFQUEwQztBQUN0Q2hDLGFBQUssQ0FBQ2tDLElBQU4sQ0FBV0YsUUFBUSxDQUFDLFVBQUQsQ0FBbkI7QUFDSCxPQUZELE1BRU8sSUFBSSxDQUFDaEMsS0FBSyxDQUFDaUMsUUFBTixDQUFlRCxRQUFRLENBQUMsVUFBRCxDQUF2QixDQUFMLEVBQTJDO0FBQy9DaEMsYUFBSyxDQUFDa0MsSUFBTixDQUFXRixRQUFRLENBQUMsVUFBRCxDQUFuQjtBQUNGO0FBQ0Y7O0FBQ0QsUUFBTUcsWUFBWSxHQUFHNUUsRUFBRSxDQUFDVSxNQUFILFlBQWM4RCxRQUFkLEVBQXJCO0FBQ0FJLGdCQUFZLENBQUMvRCxTQUFiLENBQXVCLGFBQXZCLEVBQ0NWLElBREQsQ0FDTXNDLEtBRE4sRUFFQzNCLEtBRkQsR0FHQ0gsTUFIRCxDQUdRLFFBSFIsRUFJQ0ksSUFKRCxDQUlNLFVBQUFDLENBQUMsRUFBSTtBQUFDLGFBQU9BLENBQVA7QUFBUyxLQUpyQixFQUtDSixJQUxELENBS00sT0FMTixFQUtlLFVBQUFJLENBQUMsRUFBSTtBQUFDLGFBQU9BLENBQVA7QUFBUyxLQUw5QixFQU1DSixJQU5ELENBTU0sT0FOTixFQU1lLFVBQUFJLENBQUMsRUFBSTtBQUFDLGFBQU9BLENBQVA7QUFBUyxLQU45QjtBQU9KLEdBakJEO0FBa0JGLENBcEJELEMsQ0F1QkE7OztBQUNBLElBQU02RCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCN0UsSUFBRSxDQUFDVSxNQUFILENBQVUsS0FBVixFQUFpQjZELE1BQWpCO0FBQ0QsQ0FGRCxDLENBS0E7OztBQUNBLElBQU1KLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLFVBQUQsRUFBZ0I7QUFDaEMsTUFBTXFCLGVBQWUsR0FBRzlFLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLHlCQUFWLENBQXhCO0FBQ0FvRSxpQkFBZSxDQUFDbkUsTUFBaEIsQ0FBdUIsUUFBdkIsRUFBaUNDLElBQWpDLENBQXNDLE9BQXRDLEVBQStDLGNBQS9DLEVBQStERyxJQUEvRCxDQUFvRSxPQUFwRSxFQUE2RVksRUFBN0UsQ0FBZ0YsT0FBaEYsRUFBeUYsVUFBU1gsQ0FBVCxFQUFXO0FBQ2hHNkQsZUFBVztBQUNYRSwyQkFBdUI7QUFDdkJDLHNCQUFrQjtBQUNsQkYsbUJBQWUsQ0FBQ1IsY0FBaEIsQ0FBK0IsUUFBL0IsRUFBeUNDLE1BQXpDO0FBQ0FkLGNBQVUsQ0FBQ3hDLEtBQVgsQ0FBaUJpRCxPQUFqQixHQUEyQixPQUEzQjtBQUNBckIsU0FBSyxDQUFDLE9BQUQsQ0FBTCxHQUFpQixFQUFqQjtBQUNBQSxTQUFLLENBQUMsT0FBRCxDQUFMLEdBQWlCLEVBQWpCO0FBQ0FDLFdBQU8sQ0FBQyxTQUFELENBQVAsR0FBcUIsRUFBckI7QUFDQUEsV0FBTyxDQUFDLFNBQUQsQ0FBUCxHQUFxQixFQUFyQjtBQUNILEdBVkQ7QUFXSCxDQWJELEMsQ0FlQTs7O0FBQ0EsSUFBTW1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3RHLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsS0FBakIsRUFBd0JDLE9BQXhCLEVBQW9DO0FBQ3ZEa0IsSUFBRSxDQUFDVSxNQUFILENBQVUsS0FBVixFQUFpQjZELE1BQWpCO0FBQ0EsTUFBSTdGLEdBQUcsR0FBR3NCLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLGdCQUFWLEVBQTRCQyxNQUE1QixDQUFtQyxLQUFuQyxFQUNUQyxJQURTLENBQ0osT0FESSxFQUNLckMsS0FBSyxHQUFHTCxNQUFNLENBQUNJLElBQWYsR0FBc0JKLE1BQU0sQ0FBQ0UsS0FEbEMsRUFFVHdDLElBRlMsQ0FFSixRQUZJLEVBRU1wQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ0MsR0FBaEIsR0FBc0JELE1BQU0sQ0FBQ0csTUFGbkMsRUFHVHNDLE1BSFMsQ0FHRixHQUhFLEVBSVRDLElBSlMsQ0FJSixXQUpJLEVBSVMsZUFBZTFDLE1BQU0sQ0FBQ0ksSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNKLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FKekQsQ0FBVjtBQU1BLE1BQUlNLGlEQUFKLENBQWFDLEdBQWIsRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQ0MsS0FBbEMsRUFBeUNDLE9BQXpDO0FBRUFpRSxPQUFLLENBQUNFLEdBQU4sR0FBWSxJQUFaO0FBQ0FGLE9BQUssQ0FBQ0MsSUFBTixHQUFhLEtBQWI7QUFDQWtDLG1CQUFpQjtBQUNwQixDQWJEOztBQWVBLElBQU1kLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3pGLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsS0FBakIsRUFBd0JDLE9BQXhCLEVBQW9DO0FBQ3hEa0IsSUFBRSxDQUFDVSxNQUFILENBQVUsS0FBVixFQUFpQjZELE1BQWpCO0FBQ0EsTUFBSTdGLEdBQUcsR0FBR3NCLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLGdCQUFWLEVBQTRCQyxNQUE1QixDQUFtQyxLQUFuQyxFQUNUQyxJQURTLENBQ0osT0FESSxFQUNLckMsS0FBSyxHQUFHTCxNQUFNLENBQUNJLElBQWYsR0FBc0JKLE1BQU0sQ0FBQ0UsS0FEbEMsRUFFVHdDLElBRlMsQ0FFSixRQUZJLEVBRU1wQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ0MsR0FBaEIsR0FBc0JELE1BQU0sQ0FBQ0csTUFGbkMsRUFHVHNDLE1BSFMsQ0FHRixHQUhFLEVBSVRDLElBSlMsQ0FJSixXQUpJLEVBSVMsZUFBZTFDLE1BQU0sQ0FBQ0ksSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNKLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FKekQsQ0FBVjtBQU1BLE1BQUlnSCxrREFBSixDQUFjekcsR0FBZCxFQUFtQkMsS0FBbkIsRUFBMEJDLE9BQTFCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsT0FBMUM7QUFFQWlFLE9BQUssQ0FBQ0MsSUFBTixHQUFhLElBQWI7QUFDQUQsT0FBSyxDQUFDRSxHQUFOLEdBQVksS0FBWjtBQUNBaUMsbUJBQWlCO0FBRXBCLENBZEQsQyxDQWtCQTs7O0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCbEYsSUFBRSxDQUFDVSxNQUFILENBQVUsOEJBQVYsRUFBMEM0RCxjQUExQyxDQUF5RCxRQUF6RCxFQUFtRUMsTUFBbkU7QUFDQVMsb0JBQWtCOztBQUVsQixNQUFJakMsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBZixJQUF1QkQsS0FBSyxDQUFDRSxHQUFOLEtBQWMsS0FBekMsRUFBK0M7QUFDN0NqRCxNQUFFLENBQUNVLE1BQUgsQ0FBVSw4QkFBVixFQUNDQyxNQURELENBQ1EsUUFEUixFQUVDQyxJQUZELENBRU0sT0FGTixFQUVlLHFCQUZmLEVBR0NHLElBSEQsQ0FHTSxXQUhOLEVBSUNZLEVBSkQsQ0FJSSxPQUpKLEVBSWEsVUFBU1gsQ0FBVCxFQUFXO0FBQ3RCaUUsb0JBQWMsQ0FBQ3BDLEtBQUssQ0FBQ2xFLEtBQVAsRUFBY21FLE9BQU8sQ0FBQ2xFLE9BQXRCLEVBQStCaUUsS0FBSyxDQUFDaEUsS0FBckMsRUFBNENpRSxPQUFPLENBQUNoRSxPQUFwRCxDQUFkO0FBQ0QsS0FORDtBQU9ELEdBUkQsTUFRTyxJQUFJaUUsS0FBSyxDQUFDRSxHQUFOLEtBQWMsSUFBZCxJQUFzQkYsS0FBSyxDQUFDQyxJQUFOLEtBQWUsS0FBekMsRUFBK0M7QUFDcERoRCxNQUFFLENBQUNVLE1BQUgsQ0FBVSw4QkFBVixFQUNDQyxNQURELENBQ1EsUUFEUixFQUVDQyxJQUZELENBRU0sT0FGTixFQUVlLHFCQUZmLEVBR0NHLElBSEQsQ0FHTSxZQUhOLEVBSUNZLEVBSkQsQ0FJSSxPQUpKLEVBSWEsVUFBU1gsQ0FBVCxFQUFXO0FBQ3RCb0QscUJBQWUsQ0FBQ3ZCLEtBQUssQ0FBQ2xFLEtBQVAsRUFBY21FLE9BQU8sQ0FBQ2xFLE9BQXRCLEVBQStCaUUsS0FBSyxDQUFDaEUsS0FBckMsRUFBNENpRSxPQUFPLENBQUNoRSxPQUFwRCxDQUFmO0FBQ0gsS0FOQztBQU1DO0FBQ04sQ0FwQkQsQyxDQXNCQTs7O0FBQ0EsSUFBTWlHLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNwQy9FLElBQUUsQ0FBQ1UsTUFBSCxDQUFVLHNCQUFWLEVBQWtDNkQsTUFBbEM7QUFDRCxDQUZEOztBQUlBLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQmhGLElBQUUsQ0FBQ1UsTUFBSCxDQUFVLGdCQUFWLEVBQTRCNkQsTUFBNUI7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0EsSUFBTXJHLE1BQU0sR0FBRztBQUFDQyxLQUFHLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsRUFBakI7QUFBcUJDLFFBQU0sRUFBRSxFQUE3QjtBQUFpQ0MsTUFBSSxFQUFFO0FBQXZDLENBQWY7QUFBQSxJQUNBQyxLQUFLLEdBQUcsTUFBTUwsTUFBTSxDQUFDSSxJQUFiLEdBQW9CSixNQUFNLENBQUNFLEtBRG5DO0FBQUEsSUFFQUksTUFBTSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ0MsR0FBYixHQUFtQkQsTUFBTSxDQUFDRyxNQUZuQzs7SUFLTzhHLFM7QUFDSCxxQkFBWXpHLEdBQVosRUFBaUJDLEtBQWpCLEVBQXdCQyxPQUF4QixFQUFpQ0MsS0FBakMsRUFBd0NDLE9BQXhDLEVBQWlEO0FBQUE7O0FBQUE7O0FBQzdDLFNBQUtKLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCLEVBQTdCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFHQSxTQUFLWCxZQUFMLENBQWtCLEtBQUtKLEtBQXZCLElBQWdDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQWhDO0FBQ0EsU0FBS0ksWUFBTCxDQUFrQixLQUFLRixLQUF2QixJQUFnQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUFoQztBQUNBLFNBQUtHLFdBQUwsQ0FBaUIsS0FBS0wsS0FBdEIsSUFBK0IsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBL0I7QUFDQSxTQUFLSyxXQUFMLENBQWlCLEtBQUtILEtBQXRCLElBQStCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQS9CO0FBQ0EsU0FBS0ksbUJBQUwsQ0FBeUIsS0FBS04sS0FBOUIsSUFBdUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBdkM7QUFDQSxTQUFLTSxtQkFBTCxDQUF5QixLQUFLSixLQUE5QixJQUF1QyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF2QztBQUNBLFNBQUtLLG9CQUFMLENBQTBCLEtBQUtQLEtBQS9CLElBQXdDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXhDO0FBQ0EsU0FBS08sb0JBQUwsQ0FBMEIsS0FBS0wsS0FBL0IsSUFBd0MsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBeEM7QUFDQSxTQUFLTSxxQkFBTCxDQUEyQixLQUFLUixLQUFoQyxJQUF5QyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF6QztBQUNBLFNBQUtRLHFCQUFMLENBQTJCLEtBQUtOLEtBQWhDLElBQXlDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXpDO0FBQ0EsU0FBS08sV0FBTCxDQUFpQixLQUFLVCxLQUF0QixJQUErQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUEvQjtBQUNBLFNBQUtTLFdBQUwsQ0FBaUIsS0FBS1AsS0FBdEIsSUFBK0IsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBL0I7QUFDQSxTQUFLUSxrQkFBTCxDQUF3QixLQUFLVixLQUE3QixJQUFzQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF0QztBQUNBLFNBQUtVLGtCQUFMLENBQXdCLEtBQUtSLEtBQTdCLElBQXNDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXRDO0FBQ0EsU0FBS1MsYUFBTCxDQUFtQixLQUFLWCxLQUF4QixJQUFpQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUFqQztBQUNBLFNBQUtXLGFBQUwsQ0FBbUIsS0FBS1QsS0FBeEIsSUFBaUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBakM7QUFDQSxTQUFLVSxtQkFBTCxDQUF5QixLQUFLWixLQUE5QixJQUF1QyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF2QztBQUNBLFNBQUtZLG1CQUFMLENBQXlCLEtBQUtWLEtBQTlCLElBQXVDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXZDO0FBQ0EsU0FBS1csa0JBQUwsQ0FBd0IsS0FBS2IsS0FBN0IsSUFBc0MsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBdEM7QUFDQSxTQUFLYSxrQkFBTCxDQUF3QixLQUFLWCxLQUE3QixJQUFzQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF0QztBQUNBLFNBQUtZLGlCQUFMLENBQXVCLEtBQUtkLEtBQTVCLElBQXFDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXJDO0FBQ0EsU0FBS2MsaUJBQUwsQ0FBdUIsS0FBS1osS0FBNUIsSUFBcUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBckM7QUFDQSxTQUFLYSxjQUFMLENBQW9CLEtBQUtmLEtBQXpCLElBQWtDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQWxDO0FBQ0EsU0FBS2UsY0FBTCxDQUFvQixLQUFLYixLQUF6QixJQUFrQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUFsQztBQUVBLFNBQUtjLEtBQUwsR0FBYSxDQUNYLFFBRFcsRUFFWCxPQUZXLEVBR1gsaUJBSFcsRUFJWCxrQkFKVyxFQUtYLG1CQUxXLEVBTVgsYUFOVyxFQU9YLGVBUFcsRUFRWCxTQVJXLEVBU1gsZ0JBVFcsRUFVWCxlQVZXLEVBV1gsY0FYVyxFQVlYLFdBWlcsQ0FBYjtBQWNBLFNBQUt5RixZQUFMLEdBQW9CLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsRUFBckIsRUFBd0IsRUFBeEIsRUFBMkIsRUFBM0IsRUFBOEIsRUFBOUIsRUFDbEIsRUFEa0IsRUFDZixFQURlLEVBQ1osRUFEWSxFQUNULEVBRFMsRUFDTixFQURNLEVBQ0gsRUFERyxFQUNBLEVBREEsRUFDRyxFQURILEVBQ00sRUFETixFQUNTLEVBRFQsRUFDWSxFQURaLEVBQ2UsRUFEZixFQUNrQixFQURsQixFQUVqQixFQUZpQixFQUVkLEVBRmMsRUFFWCxFQUZXLEVBRVIsRUFGUSxFQUVMLEVBRkssRUFFRixFQUZFLEVBRUMsRUFGRCxFQUVJLEVBRkosRUFFTyxFQUZQLEVBRVUsRUFGVixFQUVhLEVBRmIsRUFFZ0IsRUFGaEIsQ0FBcEI7QUFJQSxTQUFLeEYsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFkLENBaEU2QyxDQWtFN0M7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ1ZDLEVBQUUsQ0FBQ0MsR0FBSCxpRkFBZ0YsS0FBS3JCLE9BQXJGLFVBRFUsRUFFVm9CLEVBQUUsQ0FBQ0MsR0FBSCxpRkFBZ0YsS0FBS25CLE9BQXJGLFVBRlUsQ0FBWixFQUdHb0IsSUFISCxDQUdRLFVBQUFDLElBQUksRUFBSTtBQUNaO0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDO0FBQ0EsWUFBSUUsTUFBTSxHQUFHSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLENBQVIsQ0FBYjtBQUNBLFlBQUlHLE1BQU0sR0FBR0osSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxDQUFSLENBQWIsQ0FIdUMsQ0FLdkM7O0FBQ0EsWUFBSWlGLGFBQWEsR0FBRyxLQUFJLENBQUN0RyxZQUFMLENBQWtCLEtBQUksQ0FBQ0osS0FBdkIsRUFBOEIsS0FBSSxDQUFDSSxZQUFMLENBQWtCLEtBQUksQ0FBQ0osS0FBdkIsRUFBOEIwQixNQUE5QixHQUF1QyxDQUFyRSxFQUF3RSxDQUF4RSxDQUFwQjtBQUNBLFlBQUlpRixXQUFXLEdBQUcsS0FBSSxDQUFDdkcsWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEVBQThCLEtBQUksQ0FBQ0ksWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEVBQThCMEIsTUFBOUIsR0FBdUMsQ0FBckUsRUFBd0UsQ0FBeEUsQ0FBbEI7QUFDQSxZQUFJa0YsVUFBVSxHQUFHLEtBQUksQ0FBQ3ZHLFdBQUwsQ0FBaUIsS0FBSSxDQUFDTCxLQUF0QixFQUE2QixLQUFJLENBQUNLLFdBQUwsQ0FBaUIsS0FBSSxDQUFDTCxLQUF0QixFQUE2QjBCLE1BQTdCLEdBQXNDLENBQW5FLEVBQXNFLENBQXRFLENBQWpCO0FBQ0EsWUFBSW1GLGtCQUFrQixHQUFHLEtBQUksQ0FBQ3ZHLG1CQUFMLENBQXlCLEtBQUksQ0FBQ04sS0FBOUIsRUFBcUMsS0FBSSxDQUFDTSxtQkFBTCxDQUF5QixLQUFJLENBQUNOLEtBQTlCLEVBQXFDMEIsTUFBckMsR0FBOEMsQ0FBbkYsRUFBc0YsQ0FBdEYsQ0FBekI7QUFDQSxZQUFJb0YsbUJBQW1CLEdBQUcsS0FBSSxDQUFDdkcsb0JBQUwsQ0FBMEIsS0FBSSxDQUFDUCxLQUEvQixFQUFzQyxLQUFJLENBQUNPLG9CQUFMLENBQTBCLEtBQUksQ0FBQ1AsS0FBL0IsRUFBc0MwQixNQUF0QyxHQUErQyxDQUFyRixFQUF3RixDQUF4RixDQUExQjtBQUNBLFlBQUlxRixvQkFBb0IsR0FBRyxLQUFJLENBQUN2RyxxQkFBTCxDQUEyQixLQUFJLENBQUNSLEtBQWhDLEVBQXVDLEtBQUksQ0FBQ1EscUJBQUwsQ0FBMkIsS0FBSSxDQUFDUixLQUFoQyxFQUF1QzBCLE1BQXZDLEdBQWdELENBQXZGLEVBQTBGLENBQTFGLENBQTNCO0FBQ0EsWUFBSXNGLFVBQVUsR0FBRyxLQUFJLENBQUN2RyxXQUFMLENBQWlCLEtBQUksQ0FBQ1QsS0FBdEIsRUFBNkIsS0FBSSxDQUFDUyxXQUFMLENBQWlCLEtBQUksQ0FBQ1QsS0FBdEIsRUFBNkIwQixNQUE3QixHQUFzQyxDQUFuRSxFQUFzRSxDQUF0RSxDQUFqQjtBQUNBLFlBQUl1RixpQkFBaUIsR0FBRyxLQUFJLENBQUN2RyxrQkFBTCxDQUF3QixLQUFJLENBQUNWLEtBQTdCLEVBQW9DLEtBQUksQ0FBQ1MsV0FBTCxDQUFpQixLQUFJLENBQUNULEtBQXRCLEVBQTZCMEIsTUFBN0IsR0FBc0MsQ0FBMUUsRUFBNkUsQ0FBN0UsQ0FBeEI7QUFDQSxZQUFJd0YsWUFBWSxHQUFHLEtBQUksQ0FBQ3ZHLGFBQUwsQ0FBbUIsS0FBSSxDQUFDWCxLQUF4QixFQUErQixLQUFJLENBQUNXLGFBQUwsQ0FBbUIsS0FBSSxDQUFDWCxLQUF4QixFQUErQjBCLE1BQS9CLEdBQXdDLENBQXZFLEVBQTBFLENBQTFFLENBQW5CO0FBQ0EsWUFBSXlGLGtCQUFrQixHQUFHLEtBQUksQ0FBQ3ZHLG1CQUFMLENBQXlCLEtBQUksQ0FBQ1osS0FBOUIsRUFBcUMsS0FBSSxDQUFDWSxtQkFBTCxDQUF5QixLQUFJLENBQUNaLEtBQTlCLEVBQXFDMEIsTUFBckMsR0FBOEMsQ0FBbkYsRUFBc0YsQ0FBdEYsQ0FBekI7QUFDQSxZQUFJMEYsaUJBQWlCLEdBQUcsS0FBSSxDQUFDdkcsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDYixLQUE3QixFQUFvQyxLQUFJLENBQUNhLGtCQUFMLENBQXdCLEtBQUksQ0FBQ2IsS0FBN0IsRUFBb0MwQixNQUFwQyxHQUE2QyxDQUFqRixFQUFvRixDQUFwRixDQUF4QjtBQUNBLFlBQUkyRixnQkFBZ0IsR0FBRyxLQUFJLENBQUN2RyxpQkFBTCxDQUF1QixLQUFJLENBQUNkLEtBQTVCLEVBQW1DLEtBQUksQ0FBQ2MsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDZCxLQUE1QixFQUFtQzBCLE1BQW5DLEdBQTRDLENBQS9FLEVBQWtGLENBQWxGLENBQXZCO0FBQ0EsWUFBSTRGLGFBQWEsR0FBRyxLQUFJLENBQUN2RyxjQUFMLENBQW9CLEtBQUksQ0FBQ2YsS0FBekIsRUFBZ0MsS0FBSSxDQUFDZSxjQUFMLENBQW9CLEtBQUksQ0FBQ2YsS0FBekIsRUFBZ0MwQixNQUFoQyxHQUF5QyxDQUF6RSxFQUE0RSxDQUE1RSxDQUFwQixDQWxCdUMsQ0FzQnZDOztBQUNBLFlBQUk2RixhQUFhLEdBQUcsS0FBSSxDQUFDbkgsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEVBQThCLEtBQUksQ0FBQ0UsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEVBQThCd0IsTUFBOUIsR0FBdUMsQ0FBckUsRUFBd0UsQ0FBeEUsQ0FBcEI7QUFDQSxZQUFJOEYsV0FBVyxHQUFHLEtBQUksQ0FBQ3BILFlBQUwsQ0FBa0IsS0FBSSxDQUFDRixLQUF2QixFQUE4QixLQUFJLENBQUNFLFlBQUwsQ0FBa0IsS0FBSSxDQUFDRixLQUF2QixFQUE4QndCLE1BQTlCLEdBQXVDLENBQXJFLEVBQXdFLENBQXhFLENBQWxCO0FBQ0EsWUFBSStGLFVBQVUsR0FBRyxLQUFJLENBQUNwSCxXQUFMLENBQWlCLEtBQUksQ0FBQ0gsS0FBdEIsRUFBNkIsS0FBSSxDQUFDRyxXQUFMLENBQWlCLEtBQUksQ0FBQ0gsS0FBdEIsRUFBNkJ3QixNQUE3QixHQUFzQyxDQUFuRSxFQUFzRSxDQUF0RSxDQUFqQjtBQUNBLFlBQUlnRyxrQkFBa0IsR0FBRyxLQUFJLENBQUNwSCxtQkFBTCxDQUF5QixLQUFJLENBQUNKLEtBQTlCLEVBQXFDLEtBQUksQ0FBQ0ksbUJBQUwsQ0FBeUIsS0FBSSxDQUFDSixLQUE5QixFQUFxQ3dCLE1BQXJDLEdBQThDLENBQW5GLEVBQXNGLENBQXRGLENBQXpCO0FBQ0EsWUFBSWlHLG1CQUFtQixHQUFHLEtBQUksQ0FBQ3BILG9CQUFMLENBQTBCLEtBQUksQ0FBQ0wsS0FBL0IsRUFBc0MsS0FBSSxDQUFDSyxvQkFBTCxDQUEwQixLQUFJLENBQUNMLEtBQS9CLEVBQXNDd0IsTUFBdEMsR0FBK0MsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBMUI7QUFDQSxZQUFJa0csb0JBQW9CLEdBQUcsS0FBSSxDQUFDcEgscUJBQUwsQ0FBMkIsS0FBSSxDQUFDTixLQUFoQyxFQUF1QyxLQUFJLENBQUNNLHFCQUFMLENBQTJCLEtBQUksQ0FBQ04sS0FBaEMsRUFBdUN3QixNQUF2QyxHQUFnRCxDQUF2RixFQUEwRixDQUExRixDQUEzQjtBQUNBLFlBQUltRyxVQUFVLEdBQUcsS0FBSSxDQUFDcEgsV0FBTCxDQUFpQixLQUFJLENBQUNQLEtBQXRCLEVBQTZCLEtBQUksQ0FBQ08sV0FBTCxDQUFpQixLQUFJLENBQUNQLEtBQXRCLEVBQTZCd0IsTUFBN0IsR0FBc0MsQ0FBbkUsRUFBc0UsQ0FBdEUsQ0FBakI7QUFDQSxZQUFJb0csaUJBQWlCLEdBQUcsS0FBSSxDQUFDcEgsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDUixLQUE3QixFQUFvQyxLQUFJLENBQUNPLFdBQUwsQ0FBaUIsS0FBSSxDQUFDUCxLQUF0QixFQUE2QndCLE1BQTdCLEdBQXNDLENBQTFFLEVBQTZFLENBQTdFLENBQXhCO0FBQ0EsWUFBSXFHLFlBQVksR0FBRyxLQUFJLENBQUNwSCxhQUFMLENBQW1CLEtBQUksQ0FBQ1QsS0FBeEIsRUFBK0IsS0FBSSxDQUFDUyxhQUFMLENBQW1CLEtBQUksQ0FBQ1QsS0FBeEIsRUFBK0J3QixNQUEvQixHQUF3QyxDQUF2RSxFQUEwRSxDQUExRSxDQUFuQjtBQUNBLFlBQUlzRyxrQkFBa0IsR0FBRyxLQUFJLENBQUNwSCxtQkFBTCxDQUF5QixLQUFJLENBQUNWLEtBQTlCLEVBQXFDLEtBQUksQ0FBQ1UsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDVixLQUE5QixFQUFxQ3dCLE1BQXJDLEdBQThDLENBQW5GLEVBQXNGLENBQXRGLENBQXpCO0FBQ0EsWUFBSXVHLGlCQUFpQixHQUFHLEtBQUksQ0FBQ3BILGtCQUFMLENBQXdCLEtBQUksQ0FBQ1gsS0FBN0IsRUFBb0MsS0FBSSxDQUFDVyxrQkFBTCxDQUF3QixLQUFJLENBQUNYLEtBQTdCLEVBQW9Dd0IsTUFBcEMsR0FBNkMsQ0FBakYsRUFBb0YsQ0FBcEYsQ0FBeEI7QUFDQSxZQUFJd0csZ0JBQWdCLEdBQUcsS0FBSSxDQUFDcEgsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDWixLQUE1QixFQUFtQyxLQUFJLENBQUNZLGlCQUFMLENBQXVCLEtBQUksQ0FBQ1osS0FBNUIsRUFBbUN3QixNQUFuQyxHQUE0QyxDQUEvRSxFQUFrRixDQUFsRixDQUF2QjtBQUNBLFlBQUl5RyxhQUFhLEdBQUcsS0FBSSxDQUFDcEgsY0FBTCxDQUFvQixLQUFJLENBQUNiLEtBQXpCLEVBQWdDLEtBQUksQ0FBQ2EsY0FBTCxDQUFvQixLQUFJLENBQUNiLEtBQXpCLEVBQWdDd0IsTUFBaEMsR0FBeUMsQ0FBekUsRUFBNEUsQ0FBNUUsQ0FBcEIsQ0FuQ3VDLENBcUN2Qzs7QUFDQSxZQUFJQyxNQUFNLENBQUMsVUFBRCxDQUFOLEtBQXVCLEtBQUksQ0FBQzNCLEtBQWhDLEVBQXNDO0FBQ3BDLGtCQUFRMkIsTUFBTSxDQUFDLEtBQUQsQ0FBZDtBQUNFLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDdkIsWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEVBQThCZ0csSUFBOUIsQ0FBbUMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFXLEdBQUcsQ0FBbEMsQ0FBbkM7O0FBQ0E7O0FBQ0YsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUN2RyxZQUFMLENBQWtCLEtBQUksQ0FBQ0osS0FBdkIsRUFBOEJnRyxJQUE5QixDQUFtQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JDLFdBQXBCLENBQW5DOztBQUNBOztBQUNGLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDdkcsWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEVBQThCZ0csSUFBOUIsQ0FBbUMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFXLEdBQUcsQ0FBbEMsQ0FBbkM7O0FBQ0E7O0FBQ0Y7QUFDRTtBQVhKOztBQWFBLGVBQUksQ0FBQ3RHLFdBQUwsQ0FBaUIsS0FBSSxDQUFDTCxLQUF0QixFQUE2QmdHLElBQTdCLENBQWtDLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQkUsVUFBVSxHQUFHL0UsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQXpDLENBQWxDOztBQUNBLGVBQUksQ0FBQ3JCLG1CQUFMLENBQXlCLEtBQUksQ0FBQ04sS0FBOUIsRUFBcUNnRyxJQUFyQyxDQUEwQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JHLGtCQUFrQixHQUFHaEYsUUFBUSxDQUFDRixNQUFNLENBQUMsS0FBRCxDQUFQLENBQWpELENBQTFDOztBQUNBLGVBQUksQ0FBQ3BCLG9CQUFMLENBQTBCLEtBQUksQ0FBQ1AsS0FBL0IsRUFBc0NnRyxJQUF0QyxDQUEyQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JJLG1CQUFtQixHQUFHakYsUUFBUSxDQUFDRixNQUFNLENBQUMsTUFBRCxDQUFQLENBQWxELENBQTNDOztBQUNBLGVBQUksQ0FBQ25CLHFCQUFMLENBQTJCLEtBQUksQ0FBQ1IsS0FBaEMsRUFBdUNnRyxJQUF2QyxDQUE0QyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JLLG9CQUFvQixJQUFJbEYsUUFBUSxDQUFDRixNQUFNLENBQUMsTUFBRCxDQUFQLENBQVIsR0FBMkJFLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUF2QyxDQUF4QyxDQUE1Qzs7QUFDQSxlQUFJLENBQUNsQixXQUFMLENBQWlCLEtBQUksQ0FBQ1QsS0FBdEIsRUFBNkJnRyxJQUE3QixDQUFrQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JNLFVBQVUsR0FBR25GLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUF6QyxDQUFsQzs7QUFDQSxlQUFJLENBQUNqQixrQkFBTCxDQUF3QixLQUFJLENBQUNWLEtBQTdCLEVBQW9DZ0csSUFBcEMsQ0FBeUMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CTyxpQkFBaUIsR0FBR3BGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFoRCxDQUF6Qzs7QUFDQSxlQUFJLENBQUNoQixhQUFMLENBQW1CLEtBQUksQ0FBQ1gsS0FBeEIsRUFBK0JnRyxJQUEvQixDQUFvQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JRLFlBQVksR0FBR3JGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEzQyxDQUFwQzs7QUFDQSxlQUFJLENBQUNmLG1CQUFMLENBQXlCLEtBQUksQ0FBQ1osS0FBOUIsRUFBcUNnRyxJQUFyQyxDQUEwQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JTLGtCQUFrQixHQUFHdEYsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQWpELENBQTFDOztBQUNBLGVBQUksQ0FBQ2Qsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDYixLQUE3QixFQUFvQ2dHLElBQXBDLENBQXlDLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQlUsaUJBQWlCLEdBQUd2RixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBaEQsQ0FBekM7O0FBQ0EsZUFBSSxDQUFDYixpQkFBTCxDQUF1QixLQUFJLENBQUNkLEtBQTVCLEVBQW1DZ0csSUFBbkMsQ0FBd0MsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CVyxnQkFBZ0IsR0FBR3hGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEvQyxDQUF4Qzs7QUFDQSxlQUFJLENBQUNaLGNBQUwsQ0FBb0IsS0FBSSxDQUFDZixLQUF6QixFQUFnQ2dHLElBQWhDLENBQXFDLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQlksYUFBYSxHQUFHekYsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQTVDLENBQXJDO0FBQ0QsU0F6QkQsTUF5Qk8sSUFBR0EsTUFBTSxDQUFDLFVBQUQsQ0FBTixLQUF1QixLQUFJLENBQUMzQixLQUEvQixFQUFxQztBQUMxQyxrQkFBUTJCLE1BQU0sQ0FBQyxLQUFELENBQWQ7QUFDRSxpQkFBSyxHQUFMO0FBQ0UsbUJBQUksQ0FBQ3ZCLFlBQUwsQ0FBa0IsS0FBSSxDQUFDSixLQUF2QixFQUE4QmdHLElBQTlCLENBQW1DLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQkMsV0FBVyxHQUFHLENBQWxDLENBQW5DOztBQUNBOztBQUNGLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDdkcsWUFBTCxDQUFrQixLQUFJLENBQUNKLEtBQXZCLEVBQThCZ0csSUFBOUIsQ0FBbUMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFwQixDQUFuQzs7QUFDQTs7QUFDRixpQkFBSyxHQUFMO0FBQ0UsbUJBQUksQ0FBQ3ZHLFlBQUwsQ0FBa0IsS0FBSSxDQUFDSixLQUF2QixFQUE4QmdHLElBQTlCLENBQW1DLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQkMsV0FBVyxHQUFHLENBQWxDLENBQW5DOztBQUNBOztBQUNGO0FBQ0U7QUFYSjs7QUFhQSxlQUFJLENBQUN0RyxXQUFMLENBQWlCLEtBQUksQ0FBQ0wsS0FBdEIsRUFBNkJnRyxJQUE3QixDQUFrQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JFLFVBQVUsR0FBRy9FLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUF6QyxDQUFsQzs7QUFDQSxlQUFJLENBQUNyQixtQkFBTCxDQUF5QixLQUFJLENBQUNOLEtBQTlCLEVBQXFDZ0csSUFBckMsQ0FBMEMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CRyxrQkFBa0IsR0FBR2hGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLEtBQUQsQ0FBUCxDQUFqRCxDQUExQzs7QUFDQSxlQUFJLENBQUNwQixvQkFBTCxDQUEwQixLQUFJLENBQUNQLEtBQS9CLEVBQXNDZ0csSUFBdEMsQ0FBMkMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CSSxtQkFBbUIsR0FBR2pGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFsRCxDQUEzQzs7QUFDQSxlQUFJLENBQUNuQixxQkFBTCxDQUEyQixLQUFJLENBQUNSLEtBQWhDLEVBQXVDZ0csSUFBdkMsQ0FBNEMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CSyxvQkFBb0IsSUFBSWxGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFSLEdBQTJCRSxRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBdkMsQ0FBeEMsQ0FBNUM7O0FBQ0EsZUFBSSxDQUFDbEIsV0FBTCxDQUFpQixLQUFJLENBQUNULEtBQXRCLEVBQTZCZ0csSUFBN0IsQ0FBa0MsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CTSxVQUFVLEdBQUduRixRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBekMsQ0FBbEM7O0FBQ0EsZUFBSSxDQUFDakIsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDVixLQUE3QixFQUFvQ2dHLElBQXBDLENBQXlDLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQk8saUJBQWlCLEdBQUdwRixRQUFRLENBQUNGLE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBaEQsQ0FBekM7O0FBQ0EsZUFBSSxDQUFDaEIsYUFBTCxDQUFtQixLQUFJLENBQUNYLEtBQXhCLEVBQStCZ0csSUFBL0IsQ0FBb0MsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CUSxZQUFZLEdBQUdyRixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBM0MsQ0FBcEM7O0FBQ0EsZUFBSSxDQUFDZixtQkFBTCxDQUF5QixLQUFJLENBQUNaLEtBQTlCLEVBQXFDZ0csSUFBckMsQ0FBMEMsQ0FBQ1UsYUFBYSxHQUFHLENBQWpCLEVBQW9CUyxrQkFBa0IsR0FBR3RGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUFqRCxDQUExQzs7QUFDQSxlQUFJLENBQUNkLGtCQUFMLENBQXdCLEtBQUksQ0FBQ2IsS0FBN0IsRUFBb0NnRyxJQUFwQyxDQUF5QyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JVLGlCQUFpQixHQUFHdkYsUUFBUSxDQUFDRixNQUFNLENBQUMsSUFBRCxDQUFQLENBQWhELENBQXpDOztBQUNBLGVBQUksQ0FBQ2IsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDZCxLQUE1QixFQUFtQ2dHLElBQW5DLENBQXdDLENBQUNVLGFBQWEsR0FBRyxDQUFqQixFQUFvQlcsZ0JBQWdCLEdBQUd4RixRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBL0MsQ0FBeEM7O0FBQ0EsZUFBSSxDQUFDWixjQUFMLENBQW9CLEtBQUksQ0FBQ2YsS0FBekIsRUFBZ0NnRyxJQUFoQyxDQUFxQyxDQUFDVSxhQUFhLEdBQUcsQ0FBakIsRUFBb0JZLGFBQWEsR0FBR3pGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUE1QyxDQUFyQztBQUNELFNBeEZzQyxDQTBGdkM7OztBQUNBLFlBQUlDLE1BQU0sQ0FBQyxVQUFELENBQU4sS0FBdUIsS0FBSSxDQUFDMUIsS0FBaEMsRUFBc0M7QUFDcEMsa0JBQVEwQixNQUFNLENBQUMsS0FBRCxDQUFkO0FBQ0UsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUN4QixZQUFMLENBQWtCLEtBQUksQ0FBQ0YsS0FBdkIsRUFBOEI4RixJQUE5QixDQUFtQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFXLEdBQUcsQ0FBbEMsQ0FBbkM7O0FBQ0E7O0FBQ0YsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUNwSCxZQUFMLENBQWtCLEtBQUksQ0FBQ0YsS0FBdkIsRUFBOEI4RixJQUE5QixDQUFtQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFwQixDQUFuQzs7QUFDQTs7QUFDRixpQkFBSyxHQUFMO0FBQ0UsbUJBQUksQ0FBQ3BILFlBQUwsQ0FBa0IsS0FBSSxDQUFDRixLQUF2QixFQUE4QjhGLElBQTlCLENBQW1DLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JDLFdBQVcsR0FBRyxDQUFsQyxDQUFuQzs7QUFDQTs7QUFDRjtBQUNFO0FBWEo7O0FBYUEsZUFBSSxDQUFDbkgsV0FBTCxDQUFpQixLQUFJLENBQUNILEtBQXRCLEVBQTZCOEYsSUFBN0IsQ0FBa0MsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQlgsVUFBVSxHQUFHL0UsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQXpDLENBQWxDOztBQUNBLGVBQUksQ0FBQ3RCLG1CQUFMLENBQXlCLEtBQUksQ0FBQ0osS0FBOUIsRUFBcUM4RixJQUFyQyxDQUEwQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CRyxrQkFBa0IsR0FBRzdGLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLEtBQUQsQ0FBUCxDQUFqRCxDQUExQzs7QUFDQSxlQUFJLENBQUNyQixvQkFBTCxDQUEwQixLQUFJLENBQUNMLEtBQS9CLEVBQXNDOEYsSUFBdEMsQ0FBMkMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQkksbUJBQW1CLEdBQUc5RixRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBbEQsQ0FBM0M7O0FBQ0EsZUFBSSxDQUFDcEIscUJBQUwsQ0FBMkIsS0FBSSxDQUFDTixLQUFoQyxFQUF1QzhGLElBQXZDLENBQTRDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JLLG9CQUFvQixJQUFJL0YsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQVIsR0FBMkJDLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUF2QyxDQUF4QyxDQUE1Qzs7QUFDQSxlQUFJLENBQUNuQixXQUFMLENBQWlCLEtBQUksQ0FBQ1AsS0FBdEIsRUFBNkI4RixJQUE3QixDQUFrQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CTSxVQUFVLEdBQUdoRyxRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBekMsQ0FBbEM7O0FBQ0EsZUFBSSxDQUFDbEIsa0JBQUwsQ0FBd0IsS0FBSSxDQUFDUixLQUE3QixFQUFvQzhGLElBQXBDLENBQXlDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JPLGlCQUFpQixHQUFHakcsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQWhELENBQXpDOztBQUNBLGVBQUksQ0FBQ2pCLGFBQUwsQ0FBbUIsS0FBSSxDQUFDVCxLQUF4QixFQUErQjhGLElBQS9CLENBQW9DLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JRLFlBQVksR0FBR2xHLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUEzQyxDQUFwQzs7QUFDQSxlQUFJLENBQUNoQixtQkFBTCxDQUF5QixLQUFJLENBQUNWLEtBQTlCLEVBQXFDOEYsSUFBckMsQ0FBMEMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQlMsa0JBQWtCLEdBQUduRyxRQUFRLENBQUNELE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBakQsQ0FBMUM7O0FBQ0EsZUFBSSxDQUFDZixrQkFBTCxDQUF3QixLQUFJLENBQUNYLEtBQTdCLEVBQW9DOEYsSUFBcEMsQ0FBeUMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQlUsaUJBQWlCLEdBQUdwRyxRQUFRLENBQUNELE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBaEQsQ0FBekM7O0FBQ0EsZUFBSSxDQUFDZCxpQkFBTCxDQUF1QixLQUFJLENBQUNaLEtBQTVCLEVBQW1DOEYsSUFBbkMsQ0FBd0MsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQlcsZ0JBQWdCLEdBQUdyRyxRQUFRLENBQUNELE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBL0MsQ0FBeEM7O0FBQ0EsZUFBSSxDQUFDYixjQUFMLENBQW9CLEtBQUksQ0FBQ2IsS0FBekIsRUFBZ0M4RixJQUFoQyxDQUFxQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CWSxhQUFhLEdBQUd0RyxRQUFRLENBQUNELE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBNUMsQ0FBckM7QUFDRCxTQXpCRCxNQXlCTyxJQUFJQSxNQUFNLENBQUMsVUFBRCxDQUFOLEtBQXVCLEtBQUksQ0FBQzFCLEtBQWhDLEVBQXNDO0FBQzNDLGtCQUFRMEIsTUFBTSxDQUFDLEtBQUQsQ0FBZDtBQUNFLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDeEIsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEVBQThCOEYsSUFBOUIsQ0FBbUMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQkMsV0FBVyxHQUFHLENBQWxDLENBQW5DOztBQUNBOztBQUNGLGlCQUFLLEdBQUw7QUFDRSxtQkFBSSxDQUFDcEgsWUFBTCxDQUFrQixLQUFJLENBQUNGLEtBQXZCLEVBQThCOEYsSUFBOUIsQ0FBbUMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQkMsV0FBcEIsQ0FBbkM7O0FBQ0E7O0FBQ0YsaUJBQUssR0FBTDtBQUNFLG1CQUFJLENBQUNwSCxZQUFMLENBQWtCLEtBQUksQ0FBQ0YsS0FBdkIsRUFBOEI4RixJQUE5QixDQUFtQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CQyxXQUFXLEdBQUcsQ0FBbEMsQ0FBbkM7O0FBQ0E7O0FBQ0Y7QUFDRTtBQVhKOztBQWFBLGVBQUksQ0FBQ25ILFdBQUwsQ0FBaUIsS0FBSSxDQUFDSCxLQUF0QixFQUE2QjhGLElBQTdCLENBQWtDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JFLFVBQVUsR0FBRzVGLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLElBQUQsQ0FBUCxDQUF6QyxDQUFsQzs7QUFDQSxlQUFJLENBQUN0QixtQkFBTCxDQUF5QixLQUFJLENBQUNKLEtBQTlCLEVBQXFDOEYsSUFBckMsQ0FBMEMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQkcsa0JBQWtCLEdBQUc3RixRQUFRLENBQUNELE1BQU0sQ0FBQyxLQUFELENBQVAsQ0FBakQsQ0FBMUM7O0FBQ0EsZUFBSSxDQUFDckIsb0JBQUwsQ0FBMEIsS0FBSSxDQUFDTCxLQUEvQixFQUFzQzhGLElBQXRDLENBQTJDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JJLG1CQUFtQixHQUFHOUYsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQWxELENBQTNDOztBQUNBLGVBQUksQ0FBQ3BCLHFCQUFMLENBQTJCLEtBQUksQ0FBQ04sS0FBaEMsRUFBdUM4RixJQUF2QyxDQUE0QyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CSyxvQkFBb0IsSUFBSS9GLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFSLEdBQTJCQyxRQUFRLENBQUNELE1BQU0sQ0FBQyxNQUFELENBQVAsQ0FBdkMsQ0FBeEMsQ0FBNUM7O0FBQ0EsZUFBSSxDQUFDbkIsV0FBTCxDQUFpQixLQUFJLENBQUNQLEtBQXRCLEVBQTZCOEYsSUFBN0IsQ0FBa0MsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQk0sVUFBVSxHQUFHaEcsUUFBUSxDQUFDRCxNQUFNLENBQUMsTUFBRCxDQUFQLENBQXpDLENBQWxDOztBQUNBLGVBQUksQ0FBQ2xCLGtCQUFMLENBQXdCLEtBQUksQ0FBQ1IsS0FBN0IsRUFBb0M4RixJQUFwQyxDQUF5QyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CTyxpQkFBaUIsR0FBR2pHLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLE1BQUQsQ0FBUCxDQUFoRCxDQUF6Qzs7QUFDQSxlQUFJLENBQUNqQixhQUFMLENBQW1CLEtBQUksQ0FBQ1QsS0FBeEIsRUFBK0I4RixJQUEvQixDQUFvQyxDQUFDdUIsYUFBYSxHQUFHLENBQWpCLEVBQW9CUSxZQUFZLEdBQUdsRyxRQUFRLENBQUNELE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBM0MsQ0FBcEM7O0FBQ0EsZUFBSSxDQUFDaEIsbUJBQUwsQ0FBeUIsS0FBSSxDQUFDVixLQUE5QixFQUFxQzhGLElBQXJDLENBQTBDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JTLGtCQUFrQixHQUFHbkcsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQWpELENBQTFDOztBQUNBLGVBQUksQ0FBQ2Ysa0JBQUwsQ0FBd0IsS0FBSSxDQUFDWCxLQUE3QixFQUFvQzhGLElBQXBDLENBQXlDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JVLGlCQUFpQixHQUFHcEcsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQWhELENBQXpDOztBQUNBLGVBQUksQ0FBQ2QsaUJBQUwsQ0FBdUIsS0FBSSxDQUFDWixLQUE1QixFQUFtQzhGLElBQW5DLENBQXdDLENBQUN1QixhQUFhLEdBQUcsQ0FBakIsRUFBb0JXLGdCQUFnQixHQUFHckcsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQS9DLENBQXhDOztBQUNBLGVBQUksQ0FBQ2IsY0FBTCxDQUFvQixLQUFJLENBQUNiLEtBQXpCLEVBQWdDOEYsSUFBaEMsQ0FBcUMsQ0FBQ3VCLGFBQWEsR0FBRyxDQUFqQixFQUFvQlksYUFBYSxHQUFHdEcsUUFBUSxDQUFDRCxNQUFNLENBQUMsSUFBRCxDQUFQLENBQTVDLENBQXJDO0FBQ0Q7QUFDRixPQWhKVyxDQWtKaEI7OztBQUNBLFdBQUksQ0FBQzdCLEdBQUwsQ0FBU2lDLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJDLElBQTFCLENBQStCLElBQS9CLEVBQXFDLEdBQXJDLEVBQTBDQSxJQUExQyxDQUErQyxJQUEvQyxFQUFxRCxFQUFyRCxFQUF5REEsSUFBekQsQ0FBOEQsR0FBOUQsRUFBbUUsQ0FBbkUsRUFBc0VLLEtBQXRFLENBQTRFLE1BQTVFLEVBQW9GLEtBQXBGOztBQUNBLFdBQUksQ0FBQ3ZDLEdBQUwsQ0FBU2lDLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJDLElBQTFCLENBQStCLElBQS9CLEVBQXFDLEdBQXJDLEVBQTBDQSxJQUExQyxDQUErQyxJQUEvQyxFQUFxRCxFQUFyRCxFQUF5REEsSUFBekQsQ0FBOEQsR0FBOUQsRUFBbUUsQ0FBbkUsRUFBc0VLLEtBQXRFLENBQTRFLE1BQTVFLEVBQW9GLE9BQXBGOztBQUNBLFdBQUksQ0FBQ3ZDLEdBQUwsQ0FBU2lDLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JDLElBQXhCLENBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXVDQSxJQUF2QyxDQUE0QyxHQUE1QyxFQUFpRCxFQUFqRCxFQUFxREssS0FBckQsQ0FBMkQsTUFBM0QsRUFBbUUsT0FBbkUsRUFBNEVGLElBQTVFLFdBQW9GLEtBQUksQ0FBQ3BDLEtBQXpGLGNBQWtHLEtBQUksQ0FBQ0MsT0FBdkc7O0FBQ0EsV0FBSSxDQUFDRixHQUFMLENBQVNpQyxNQUFULENBQWdCLE1BQWhCLEVBQXdCQyxJQUF4QixDQUE2QixHQUE3QixFQUFrQyxHQUFsQyxFQUF1Q0EsSUFBdkMsQ0FBNEMsR0FBNUMsRUFBaUQsRUFBakQsRUFBcURLLEtBQXJELENBQTJELE1BQTNELEVBQW1FLE9BQW5FLEVBQTRFRixJQUE1RSxXQUFvRixLQUFJLENBQUNsQyxLQUF6RixjQUFrRyxLQUFJLENBQUNDLE9BQXZHLEdBdEpnQixDQXdKaEI7OztBQUNBLFVBQU0yQixjQUFjLEdBQUdULEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLDBCQUFWLEVBQXNDQyxNQUF0QyxDQUE2QyxRQUE3QyxFQUF1REMsSUFBdkQsQ0FBNEQsT0FBNUQsRUFBcUUsZUFBckUsQ0FBdkI7QUFDQUgsb0JBQWMsQ0FBQ0ksU0FBZixDQUF5QixhQUF6QixFQUNDVixJQURELENBQ00sS0FBSSxDQUFDUixLQURYLEVBRUNtQixLQUZELEdBR0NILE1BSEQsQ0FHUSxRQUhSLEVBSUNJLElBSkQsQ0FJTSxVQUFBQyxDQUFDLEVBQUk7QUFBQyxlQUFPQSxDQUFQO0FBQVMsT0FKckIsRUFLQ0osSUFMRCxDQUtNLE9BTE4sRUFLZSxVQUFBSSxDQUFDLEVBQUk7QUFBQyxlQUFPQSxDQUFQO0FBQVMsT0FMOUIsRUExSmdCLENBaUtoQjs7QUFDQSxXQUFJLENBQUN0QyxHQUFMLENBQVNpQyxNQUFULENBQWdCLE1BQWhCLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CLGFBRG5CLEVBRUNBLElBRkQsQ0FFTSxHQUZOLEVBRVcsSUFBSTFDLE1BQU0sQ0FBQ0ksSUFBWCxHQUFrQixDQUY3QixFQUdDc0MsSUFIRCxDQUdNLEdBSE4sRUFHVyxJQUFLcEMsTUFBTSxHQUFDLENBSHZCLEVBSUNvQyxJQUpELENBSU0sSUFKTixFQUlZLEtBSlosRUFLQ0ssS0FMRCxDQUtPLGFBTFAsRUFLc0IsUUFMdEIsRUFNQ0wsSUFORCxDQU1NLE9BTk4sRUFNZSxZQU5mLEVBT0NHLElBUEQsQ0FPTSxRQVBOLEVBUUNILElBUkQsQ0FRTSxXQVJOLEVBUW1CLE1BUm5CLEVBU0NLLEtBVEQsQ0FTTyxNQVRQLEVBU2UsT0FUZixFQWxLZ0IsQ0E2S2hCOzs7QUFDQSxXQUFJLENBQUN2QyxHQUFMLENBQVNpQyxNQUFULENBQWdCLE1BQWhCLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CLGdCQUFpQnJDLEtBQUssR0FBQyxDQUF2QixHQUE0QixJQUE1QixJQUFvQ0MsTUFBTSxHQUFHTixNQUFNLENBQUNDLEdBQWhCLEdBQXNCLEVBQTFELElBQWdFLEdBRG5GLEVBRUN5QyxJQUZELENBRU0sT0FGTixFQUVlLFFBRmYsRUFHQ0ssS0FIRCxDQUdPLGFBSFAsRUFHc0IsUUFIdEIsRUFJQ0YsSUFKRCxDQUlNLFVBSk4sRUFLQ0gsSUFMRCxDQUtNLFdBTE4sRUFLbUIsTUFMbkIsRUFNQ0ssS0FORCxDQU1PLE1BTlAsRUFNZSxPQU5mOztBQVFBLFVBQUlDLENBQUMsR0FBR2xCLEVBQUUsQ0FBQ3dCLFdBQUgsR0FBaUJKLEtBQWpCLENBQXVCLENBQUMsQ0FBRCxFQUFJN0MsS0FBSixDQUF2QixDQUFSO0FBQ0EsVUFBSStDLEtBQUssR0FBR3RCLEVBQUUsQ0FBQ3FDLFVBQUgsR0FBZ0IwRSxLQUFoQixDQUFzQjdGLENBQXRCLENBQVo7O0FBRUEsV0FBSSxDQUFDeEMsR0FBTCxDQUFTaUMsTUFBVCxDQUFnQixHQUFoQixFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixpQkFBaUJwQyxNQUFqQixHQUEwQixHQUQ3QyxFQUVDb0MsSUFGRCxDQUVNLE9BRk4sRUFFZSxPQUZmLEVBR0NLLEtBSEQsQ0FHTyxNQUhQLEVBR2UsT0FIZjs7QUFLQSxVQUFJTSxDQUFDLEdBQUd2QixFQUFFLENBQUN3QixXQUFILEdBQWlCSixLQUFqQixDQUF1QixDQUFDNUMsTUFBRCxFQUFTLENBQVQsQ0FBdkIsQ0FBUjtBQUNBLFVBQUlpRCxLQUFLLEdBQUd6QixFQUFFLENBQUN3QyxRQUFILEdBQWN1RSxLQUFkLENBQW9CeEYsQ0FBcEIsQ0FBWjs7QUFDQSxXQUFJLENBQUM3QyxHQUFMLENBQVNpQyxNQUFULENBQWdCLEdBQWhCLEVBQ0NDLElBREQsQ0FDTSxPQUROLEVBQ2UsT0FEZixFQUVDSyxLQUZELENBRU8sTUFGUCxFQUVlLE9BRmY7O0FBSUEsV0FBSSxDQUFDckIsTUFBTCxDQUFZLEtBQUksQ0FBQ2IsWUFBakIsRUFBK0IsUUFBL0IsRUFBeUNtQyxDQUF6QyxFQUE0Q0ksS0FBNUMsRUFBbURDLENBQW5ELEVBQXNERSxLQUF0RCxFQXBNZ0IsQ0FzTWhCOzs7QUFDQSxVQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUNBakIsb0JBQWMsQ0FBQ2tCLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsVUFBU1gsQ0FBVCxFQUFZO0FBQ3RDLFlBQUlZLGNBQWMsR0FBRzVCLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLElBQVYsRUFBZ0JtQixRQUFoQixDQUF5QixPQUF6QixDQUFyQjs7QUFDQSxnQkFBUUQsY0FBUjtBQUNFLGVBQUssUUFBTDtBQUNJRixnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDM0MsWUFBakIsRUFBK0I2QyxjQUEvQixFQUErQ1YsQ0FBL0MsRUFBa0RJLEtBQWxELEVBQXlEQyxDQUF6RCxFQUE0REUsS0FBNUQ7QUFDQTs7QUFDSixlQUFLLE9BQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQzFDLFdBQWpCLEVBQThCNEMsY0FBOUIsRUFBOENWLENBQTlDLEVBQWlESSxLQUFqRCxFQUF3REMsQ0FBeEQsRUFBMkRFLEtBQTNEO0FBQ0E7O0FBQ0osZUFBSyxpQkFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDekMsbUJBQWpCLEVBQXNDMkMsY0FBdEMsRUFBc0RWLENBQXRELEVBQXlESSxLQUF6RCxFQUFnRUMsQ0FBaEUsRUFBbUVFLEtBQW5FO0FBQ0E7O0FBQ0osZUFBSyxrQkFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDeEMsb0JBQWpCLEVBQXVDMEMsY0FBdkMsRUFBdURWLENBQXZELEVBQTBESSxLQUExRCxFQUFpRUMsQ0FBakUsRUFBb0VFLEtBQXBFO0FBQ0E7O0FBQ0osZUFBSyxtQkFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDdkMscUJBQWpCLEVBQXdDeUMsY0FBeEMsRUFBd0RWLENBQXhELEVBQTJESSxLQUEzRCxFQUFrRUMsQ0FBbEUsRUFBcUVFLEtBQXJFO0FBQ0E7O0FBQ0osZUFBSyxhQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUN0QyxXQUFqQixFQUE4QndDLGNBQTlCLEVBQThDVixDQUE5QyxFQUFpREksS0FBakQsRUFBd0RDLENBQXhELEVBQTJERSxLQUEzRDtBQUNBOztBQUNKLGVBQUssZUFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDckMsa0JBQWpCLEVBQXFDdUMsY0FBckMsRUFBcURWLENBQXJELEVBQXdESSxLQUF4RCxFQUErREMsQ0FBL0QsRUFBa0VFLEtBQWxFO0FBQ0E7O0FBQ0osZUFBSyxTQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUNwQyxhQUFqQixFQUFnQ3NDLGNBQWhDLEVBQWdEVixDQUFoRCxFQUFtREksS0FBbkQsRUFBMERDLENBQTFELEVBQTZERSxLQUE3RDtBQUNBOztBQUNKLGVBQUssZ0JBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ25DLG1CQUFqQixFQUFzQ3FDLGNBQXRDLEVBQXNEVixDQUF0RCxFQUF5REksS0FBekQsRUFBZ0VDLENBQWhFLEVBQW1FRSxLQUFuRTtBQUNBOztBQUNKLGVBQUssZUFBTDtBQUNJQyxnQkFBSSxDQUFDOUIsTUFBTCxDQUFZOEIsSUFBSSxDQUFDbEMsa0JBQWpCLEVBQXFDb0MsY0FBckMsRUFBcURWLENBQXJELEVBQXdESSxLQUF4RCxFQUErREMsQ0FBL0QsRUFBa0VFLEtBQWxFO0FBQ0E7O0FBQ0osZUFBSyxjQUFMO0FBQ0lDLGdCQUFJLENBQUM5QixNQUFMLENBQVk4QixJQUFJLENBQUNqQyxpQkFBakIsRUFBb0NtQyxjQUFwQyxFQUFvRFYsQ0FBcEQsRUFBdURJLEtBQXZELEVBQThEQyxDQUE5RCxFQUFpRUUsS0FBakU7QUFDQTs7QUFDSixlQUFLLFdBQUw7QUFDSUMsZ0JBQUksQ0FBQzlCLE1BQUwsQ0FBWThCLElBQUksQ0FBQ2hDLGNBQWpCLEVBQWlDa0MsY0FBakMsRUFBaURWLENBQWpELEVBQW9ESSxLQUFwRCxFQUEyREMsQ0FBM0QsRUFBOERFLEtBQTlEO0FBQ0E7O0FBQ0o7QUFDSTtBQXRDTjtBQXdDRCxPQTFDRDtBQTJDRCxLQXRQQztBQXdQSDs7OztXQUVBLGdCQUFPdEIsSUFBUCxFQUFhMkIsS0FBYixFQUFvQlosQ0FBcEIsRUFBdUJJLEtBQXZCLEVBQThCQyxDQUE5QixFQUFpQ0UsS0FBakMsRUFBdUM7QUFBQTs7QUFFcENQLE9BQUMsQ0FBQ2EsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFJL0IsRUFBRSxDQUFDZ0gsR0FBSCxDQUFPLEtBQUs1QixZQUFaLENBQUosQ0FBVDtBQUNBLFdBQUsxRyxHQUFMLENBQVNtQyxTQUFULENBQW1CLFFBQW5CLEVBQ0N5QixVQURELEdBRUNDLFFBRkQsQ0FFVSxJQUZWLEVBR0NILElBSEQsQ0FHTWQsS0FITjtBQUtBLFVBQUkyRixVQUFVLEdBQUc5RyxJQUFJLENBQUMsS0FBS3hCLEtBQU4sQ0FBSixDQUFpQixFQUFqQixFQUFxQixDQUFyQixDQUFqQjtBQUNBLFVBQUl1SSxVQUFVLEdBQUcvRyxJQUFJLENBQUMsS0FBS3RCLEtBQU4sQ0FBSixDQUFpQixFQUFqQixFQUFxQixDQUFyQixDQUFqQjtBQUVBb0ksZ0JBQVUsSUFBSUMsVUFBZCxHQUEyQjNGLENBQUMsQ0FBQ1EsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFJa0YsVUFBSixDQUFULENBQTNCLEdBQXVEMUYsQ0FBQyxDQUFDUSxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUltRixVQUFKLENBQVQsQ0FBdkQ7QUFFQSxXQUFLeEksR0FBTCxDQUFTbUMsU0FBVCxDQUFtQixRQUFuQixFQUNDeUIsVUFERCxHQUVDQyxRQUZELENBRVUsSUFGVixFQUdDSCxJQUhELENBR01YLEtBSE47QUFLQSxXQUFLL0MsR0FBTCxDQUFTZ0MsTUFBVCxDQUFnQixhQUFoQixFQUErQkssSUFBL0IsQ0FBb0NlLEtBQXBDO0FBRUEsVUFBSXFGLEtBQUssR0FBRyxLQUFLekksR0FBTCxDQUFTbUMsU0FBVCxDQUFtQixRQUFuQixDQUFaO0FBQ0EsVUFBSXVHLEtBQUssR0FBRyxLQUFLMUksR0FBTCxDQUFTbUMsU0FBVCxDQUFtQixRQUFuQixDQUFaOztBQUVBLFVBQUlzRyxLQUFKLEVBQVU7QUFBQyxhQUFLekksR0FBTCxDQUFTbUMsU0FBVCxDQUFtQixRQUFuQixFQUE2QjBELE1BQTdCO0FBQXNDOztBQUNqRCxVQUFJNkMsS0FBSixFQUFVO0FBQUMsYUFBSzFJLEdBQUwsQ0FBU21DLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIwRCxNQUE3QjtBQUFzQzs7QUFFakQ0QyxXQUFLLEdBQUcsS0FBS3pJLEdBQUwsQ0FBU21DLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkJWLElBQTdCLENBQWtDLENBQUNBLElBQUQsQ0FBbEMsRUFBMEMsVUFBQWEsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQyxNQUFJLENBQUNyQyxLQUFOLENBQUw7QUFBQSxPQUEzQyxDQUFSO0FBQ0F5SSxXQUFLLEdBQUcsS0FBSzFJLEdBQUwsQ0FBU21DLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkJWLElBQTdCLENBQWtDLENBQUNBLElBQUQsQ0FBbEMsRUFBMEMsVUFBQWEsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQyxNQUFJLENBQUNuQyxLQUFOLENBQUw7QUFBQSxPQUEzQyxDQUFSO0FBRUFzSSxXQUFLLENBQ0pyRyxLQURELEdBRUN1RyxLQUZELENBRU9sSCxJQUFJLENBQUMsS0FBS3hCLEtBQU4sQ0FGWCxFQUdDZ0MsTUFIRCxDQUdRLE1BSFIsRUFJQ0MsSUFKRCxDQUlNLE9BSk4sRUFJZSxPQUpmLEVBS0MwRyxLQUxELENBS09ILEtBTFAsRUFNQzdFLFVBTkQsR0FPQ0MsUUFQRCxDQU9VLElBUFYsRUFRQzNCLElBUkQsQ0FRTSxHQVJOLEVBUVdaLEVBQUUsQ0FBQ2dELElBQUgsR0FDVjlCLENBRFUsQ0FDUixVQUFBRixDQUFDLEVBQUk7QUFBQyxlQUFPRSxDQUFDLENBQUNGLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQURmLEVBRVZPLENBRlUsQ0FFUixVQUFBUCxDQUFDLEVBQUk7QUFBQyxlQUFPTyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQUZmLENBUlgsRUFXQ0osSUFYRCxDQVdNLE1BWE4sRUFXYyxNQVhkLEVBWUNBLElBWkQsQ0FZTSxRQVpOLEVBWWdCLEtBWmhCLEVBYUNBLElBYkQsQ0FhTSxjQWJOLEVBYXNCLEdBYnRCO0FBZUF3RyxXQUFLLENBQ0p0RyxLQURELEdBRUN1RyxLQUZELENBRU9sSCxJQUFJLENBQUMsS0FBS3RCLEtBQU4sQ0FGWCxFQUdDOEIsTUFIRCxDQUdRLE1BSFIsRUFJQ0MsSUFKRCxDQUlNLE9BSk4sRUFJZSxPQUpmLEVBS0MwRyxLQUxELENBS09ILEtBTFAsRUFNQzdFLFVBTkQsR0FPQ0MsUUFQRCxDQU9VLElBUFYsRUFRQzNCLElBUkQsQ0FRTSxHQVJOLEVBUVdaLEVBQUUsQ0FBQ2dELElBQUgsR0FDVjlCLENBRFUsQ0FDUixVQUFBRixDQUFDLEVBQUk7QUFBQyxlQUFPRSxDQUFDLENBQUNGLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQURmLEVBRVZPLENBRlUsQ0FFUixVQUFBUCxDQUFDLEVBQUk7QUFBQyxlQUFPTyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQUZmLENBUlgsRUFXQ0osSUFYRCxDQVdNLE1BWE4sRUFXYyxNQVhkLEVBWUNBLElBWkQsQ0FZTSxRQVpOLEVBWWdCLE9BWmhCLEVBYUNBLElBYkQsQ0FhTSxjQWJOLEVBYXNCLEdBYnRCO0FBaUJIOzs7Ozs7QUFJVXVFLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BZQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IE1BUkdJTiA9IHt0b3A6IDMwLCByaWdodDogMzAsIGJvdHRvbTogODAsIGxlZnQ6IDYwfSxcbldJRFRIID0gNjUwIC0gTUFSR0lOLmxlZnQgLSBNQVJHSU4ucmlnaHQsXG5IRUlHSFQgPSA1OTAgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbTtcblxuY2xhc3MgQmFyR3JhcGh7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpe1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnRlYW0xID0gdGVhbTE7XG4gICAgICB0aGlzLnRlYW0yID0gdGVhbTI7XG4gICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgdGhpcy5zZWFzb24yID0gc2Vhc29uMjtcbiAgICAgIFxuICAgICAgdGhpcy5zZWFzb25Qb2ludHMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldCA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2FscyA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0ID0ge307XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZCA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3QgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHMgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHMgPSB7fTtcbiAgICAgICAgXG5cbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMl0gPSAwO1xuXG4gICAgICB0aGlzLnN0YXRzID0gW1xuICAgICAgICBcIlBvaW50c1wiLFxuICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICBcIlNob3RzIG9uIFRhcmdldFwiLFxuICAgICAgICBcIkZpcnN0IEhhbGYgR29hbHNcIiwgXG4gICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgIFwiVG90YWwgR29hbHNcIiwgXG4gICAgICAgIFwiR29hbHMgQWdhaW5zdFwiLCBcbiAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICBcIkZvdWxzIENvbW1pdGVkXCIsIFxuICAgICAgICBcIkZvdWxzIEFnYWluc3RcIiwgXG4gICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICBcIlJlZCBDYXJkc1wiXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggcHJvY2Vzc1xuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjF9LmNzdmApLFxuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24yfS5jc3ZgKVxuICAgICAgICBdKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIC8vIExvb3AgdG8gZ28gdGhyb3VnaCBkYXRhIGFuZCBwb3B1bGF0ZSBvdXRwdWQgZGF0YSBvYmplY3RzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBNYXRjaGRheSB2YXJzXG4gICAgICAgICAgICBsZXQgbWF0Y2gxID0gZGF0YVswXVtpXTtcbiAgICAgICAgICAgIGxldCBtYXRjaDIgPSBkYXRhWzFdW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUZWFtIDEgY29uZGl0aW9uYWwgYW5kIExvZ2ljXG4gICAgICAgICAgICBpZiAodGhpcy50ZWFtMSA9PT0gbWF0Y2gxW1wiSG9tZVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0xXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMV0gKz0gKHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIUlwiXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGVhbTEgPT09IG1hdGNoMVtcIkF3YXlUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTFdICs9IChwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMVtcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUZWFtIDIgQ29uZGl0aW9uYWwgYW5kIExvZ2ljXG4gICAgICAgICAgICBpZiAodGhpcy50ZWFtMiA9PT0gbWF0Y2gyW1wiSG9tZVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMlsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMl0gKz0gKHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIUlwiXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGVhbTIgPT09IG1hdGNoMltcIkF3YXlUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDJbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdICs9IChwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgICBjb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcIi51cGRhdGUtYnV0dG9uLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzZWxlY3RcIikuYXR0cihcImNsYXNzXCIsIFwidXBkYXRlLWJ1dHRvblwiKTtcbiAgICAgICAgICBkcm9wRG93bkJ1dHRvbi5zZWxlY3RBbGwoJ2RhdGFPcHRpb25zJylcbiAgICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAgICAgICAvLyBZLUF4aXMgbGFiZWxcbiAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCAwIC0gKEhFSUdIVC8yKSlcbiAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieWF4aXMtdGV4dFwiKVxuICAgICAgICAgIC50ZXh0KFwiUG9pbnRzXCIpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgIFxuXG4gICAgICAgICAgLy8gWC1BeGlzIExhYmVsXG4gICAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlIChcIiArIChXSURUSC8yKSArIFwiICxcIiArIChIRUlHSFQgKyBNQVJHSU4udG9wICsgMjUpICsgXCIpXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLnRleHQoXCJUZWFtc1wiKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuIFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFgvWSBheGlzIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zXG4gICAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCBXSURUSF0pLnBhZGRpbmcoMC4yKTtcbiAgICAgICAgICBjb25zdCB4QXhpcyA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKS5hdHRyKFwiY2xhc3NcIiwgXCJYLWF4aXNcIikuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbSEVJR0hULCAwXSk7XG4gICAgICAgICAgY29uc3QgeUF4aXMgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIlktYXhpc1wiKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblBvaW50cywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7ICAgIFxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90cywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c09uVGFyZ2V0LCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25GaXJzdEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNlY29uZCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkNvcm5lcnMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGb3VscyBDb21taXRlZFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uWWVsbG93Q2FyZHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJSZWQgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUmVkQ2FyZHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YSwgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG4gICAgICBcbiAgICAgIC8vIFVwZGF0ZSBYLUF4aXMgd2l0aCB0ZWFtIG5hbWVzXG4gICAgICB4LmRvbWFpbihPYmplY3Qua2V5cyhkYXRhKS5tYXAodGVhbSA9PiB0ZWFtKSlcbiAgICAgIHhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBZLUF4aXMgd2l0aCByZWxldmFudCB2YWx1ZXNcbiAgICAgIGRhdGFbdGhpcy50ZWFtMV0gPj0gZGF0YVt0aGlzLnRlYW0yXSA/IHkuZG9tYWluKFswLCBkYXRhW3RoaXMudGVhbTFdICsgKGRhdGFbdGhpcy50ZWFtMV0vMTApXSkgOiB5LmRvbWFpbihbMCwgZGF0YVt0aGlzLnRlYW0yXSArIChkYXRhW3RoaXMudGVhbTJdLzEwKV0pXG4gICAgICB5QXhpcy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAgIHRoaXMuc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpO1xuICAgICAgY29uc3QgdGVhbXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgbGV0IHUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEodGVhbXMpO1xuXG4gICAgICB1LmpvaW4oXCJyZWN0XCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB4KGQpKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4gSEVJR0hUIC0geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImJsdWVcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhckdyYXBoOyIsIlxuaW1wb3J0IExpbmVHcmFwaCBmcm9tICcuL2xpbmVHcmFwaCc7XG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi9iYXJHcmFwaCc7XG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuXG5jb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b20sXG5URUFNUyA9IHt0ZWFtMTogXCJcIiwgdGVhbTI6IFwiXCJ9LFxuU0VBU09OUyA9IHtzZWFzb24xOiBcIlwiLCBzZWFzb24yOiBcIlwifSxcbkdSQVBIID0ge2xpbmU6IGZhbHNlLCBiYXI6IGZhbHNlfTtcblxuXG5cbi8vIERvY3VtZW50IG1hbmlwdWxhdGlvbiBmb3Igb25jaGFuZ2UgZXZlbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gc2VsZWN0IG1lbnVzIGZvciBzZWFzb25zXG4gICAgY29uc3QgdGVhbU9uZVNlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMS1zZWFzb25cIilcbiAgICBjb25zdCB0ZWFtVHdvU2Vhc29uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLXNlYXNvblwiKTtcblxuICAgIC8vIHNlbGVjdCBtZW51cyBmb3IgdGVhbXNcbiAgICBjb25zdCBmaXJzdFRlYW1TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtbmFtZVwiKTtcbiAgICBjb25zdCBzZWNvbmRUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLW5hbWVcIik7XG5cbiAgICAvLyBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zZWFyY2gtY29udGFpbmVyXCIpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGNvbXBhcmVCdXR0b24gPSBkMy5zZWxlY3QoXCIuY29tcGFyZS1idXR0b25cIilcblxuICAgIC8vIG9uIGNoYW5nZSBzZWxlY3RvciBldmVudHMgdG8gcG9wdWxhdGUgdGVhbSBuYW1lc1xuICAgIHRlYW1PbmVTZWFzb25TZWxlY3Rvci5vbmNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2Vhc29uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoKFwiLnRlYW0xLW5hbWVcIik7XG4gICAgICBwb3B1bGF0ZVRlYW1TZWxlY3RvcihzZWFzb24sIFwidGVhbTEtbmFtZVwiKTtcbiAgICB9XG5cbiAgICB0ZWFtVHdvU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMi1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0yLW5hbWVcIik7XG4gICAgfVxuXG4gICAgY29tcGFyZUJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgc2VhcmNoRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlc2V0QnV0dG9uKHNlYXJjaEZvcm0pO1xuICAgICAgXG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBmaXJzdFRlYW1TZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgVEVBTVNbXCJ0ZWFtMlwiXSA9IHNlY29uZFRlYW1TZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSB0ZWFtT25lU2Vhc29uU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24yXCJdID0gdGVhbVR3b1NlYXNvblNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgIGNyZWF0ZUxpbmVHcmFwaChURUFNU1tcInRlYW0xXCJdLCBTRUFTT05TW1wic2Vhc29uMVwiXSwgVEVBTVNbXCJ0ZWFtMlwiXSwgU0VBU09OU1tcInNlYXNvbjJcIl0pO1xuICAgIH0pXG4gICAgXG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBvcHRpb25zIGZyb20gc2VsZWN0IGRyb3Bkb3duXG5jb25zdCByZW1vdmVUZWFtc0Zyb21TZWFyY2ggPSBlbGVtZW50ID0+IHtcbiAgICBkMy5zZWxlY3QoZWxlbWVudCkuc2VsZWN0Q2hpbGRyZW4oXCJvcHRpb25cIikucmVtb3ZlKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRlYW0gc2VsZWN0b3JzIGZvciBlYWNoIHNlYXNvblxuY29uc3QgcG9wdWxhdGVUZWFtU2VsZWN0b3IgPSAoc2Vhc29uLCBzZWxlY3RvcikgPT4ge1xuICAgY29uc3QgdGVhbXMgPSBbXTtcbiAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgIHRlYW1zLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wRG93blRlYW0gPSBkMy5zZWxlY3QoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBkcm9wRG93blRlYW0uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRlYW1zKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdvcHRpb24nKVxuICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcImxhYmVsXCIsIGQgPT4ge3JldHVybiBkfSk7XG4gICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgc3ZnIGNoYXJ0XG5jb25zdCByZW1vdmVHcmFwaCA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHJlc2V0IGJ1dHRvbiB0byB0aGUgRE9NIHRvIHJldHVybiB0byB0aGUgc2VhcmNoIGNvbXBvbmVudFxuY29uc3QgcmVzZXRCdXR0b24gPSAoc2VhcmNoRm9ybSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5yZXNldC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoXCJidXR0b25cIikuYXR0cihcImNsYXNzXCIsIFwicmVzZXQtYnV0dG9uXCIpLnRleHQoXCJSZXNldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZW1vdmVHcmFwaCgpO1xuICAgICAgICByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbigpO1xuICAgICAgICByZW1vdmVVcGRhdGVCdXR0b24oKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOLmxlZnQgKyBNQVJHSU4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOLnRvcCArIE1BUkdJTi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTi5sZWZ0ICsgXCIsXCIgKyBNQVJHSU4udG9wICsgXCIpXCIpO1xuXG4gICAgbmV3IEJhckdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEguYmFyID0gdHJ1ZTtcbiAgICBHUkFQSC5saW5lID0gZmFsc2U7XG4gICAgY2hhbmdlR3JhcGhCdXR0b24oKTtcbn1cblxuY29uc3QgY3JlYXRlTGluZUdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIG5ldyBMaW5lR3JhcGgoc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpXG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG5cbiAgICBpZiAoR1JBUEgubGluZSA9PT0gdHJ1ZSAmJiBHUkFQSC5iYXIgPT09IGZhbHNlKXtcbiAgICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFuZ2UtZ3JhcGgtYnV0dG9uXCIpXG4gICAgICAudGV4dChcIkJhciBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKEdSQVBILmJhciA9PT0gdHJ1ZSAmJiBHUkFQSC5saW5lID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJMaW5lIEdyYXBoXCIpXG4gICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgIH0pfVxufVxuIFxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGNoYW5nZSBncmFwaCBidXR0b25cbmNvbnN0IHJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn1cblxuY29uc3QgcmVtb3ZlVXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn0iLCJjb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cblxuIGNsYXNzIExpbmVHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yO1xuICAgICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuXG4gICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0ID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Hb2FscyA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdCA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0ID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkcyA9IHt9O1xuICAgICAgICBcblxuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG5cbiAgICAgICAgdGhpcy5zdGF0cyA9IFtcbiAgICAgICAgICBcIlBvaW50c1wiLFxuICAgICAgICAgIFwiU2hvdHNcIiwgXG4gICAgICAgICAgXCJTaG90cyBvbiBUYXJnZXRcIixcbiAgICAgICAgICBcIkZpcnN0IEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiLCBcbiAgICAgICAgICBcIlRvdGFsIEdvYWxzXCIsIFxuICAgICAgICAgIFwiR29hbHMgQWdhaW5zdFwiLCBcbiAgICAgICAgICBcIkNvcm5lcnNcIiwgXG4gICAgICAgICAgXCJGb3VscyBDb21taXRlZFwiLCBcbiAgICAgICAgICBcIkZvdWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJZZWxsb3cgQ2FyZHNcIiwgXG4gICAgICAgICAgXCJSZWQgQ2FyZHNcIl07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlYXNvbkxlbmd0aCA9IFswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLFxuICAgICAgICAgIDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2XG4gICAgICAgICAgLDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4XSAgXG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZGluZyB1cCBkYXRhIGFuZCBjcmVhdGluZyBncmFwaCBcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24xfS5jc3ZgKSxcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMn0uY3N2YClcbiAgICAgICAgXSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIExvb3AgdG8gZ28gdGhyb3VnaCBkYXRhIGFuZCBwb3B1bGF0ZSBvdXRwdXQgZGF0YSBvYmplY3RzIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIC8vIE1hdGNoZGF5IHZhcnNcbiAgICAgICAgICAgICAgbGV0IG1hdGNoMSA9IGRhdGFbMF1baV07XG4gICAgICAgICAgICAgIGxldCBtYXRjaDIgPSBkYXRhWzFdW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGhlbHBlciB2YXJpYWJsZXMgdGVhbSAxXG4gICAgICAgICAgICAgIGxldCBwcmV2TWF0Y2hkYXkxID0gdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgICAgbGV0IHByZXZQb2ludHMxID0gdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90czEgPSB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90c09uVGFyZ2V0MSA9IHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMxID0gdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2FsczEgPSB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMxID0gdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQxID0gdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQWdhaW5zdDEgPSB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzMSA9IHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzMSA9IHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuXG5cblxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMlxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MiA9IHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzMiA9IHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHMyID0gdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDIgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMyID0gdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzMiA9IHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMyID0gdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzMiA9IHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkMiA9IHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QyID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkczIgPSB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkczIgPSB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsIHRvIHBvcHVsYXRlIGRhdGEgZm9yIGZpcnN0IHRlYW1cbiAgICAgICAgICAgICAgaWYgKG1hdGNoMVtcIkhvbWVUZWFtXCJdID09PSB0aGlzLnRlYW0xKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGaXJzdEhhbGZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMSArIChwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMVtcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Q29ybmVyczEgKyBwYXJzZUludChtYXRjaDFbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZZZWxsb3dDYXJkczEgKyBwYXJzZUludChtYXRjaDFbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaDFbXCJBd2F5VGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMSArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90czEgKyBwYXJzZUludChtYXRjaDFbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90c09uVGFyZ2V0MSArIHBhcnNlSW50KG1hdGNoMVtcIkFTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczEgKyAocGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2R29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkNvcm5lcnMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rm91bHNDb21taXRlZDEgKyBwYXJzZUludChtYXRjaDFbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2WWVsbG93Q2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1t0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlJlZENhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFSXCJdKV0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uYWwgZm9yIHNlY29uZCB0ZWFtIGRhdGFcbiAgICAgICAgICAgICAgaWYgKG1hdGNoMltcIkhvbWVUZWFtXCJdID09PSB0aGlzLnRlYW0yKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMltcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMSArIHBhcnNlSW50KG1hdGNoMltcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFt0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzT25UYXJnZXQyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGaXJzdEhhbGZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0W3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0W3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UmVkQ2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2gyW1wiQXdheVRlYW1cIl0gPT09IHRoaXMudGVhbTIpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czJdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0W3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHNPblRhcmdldDIgKyBwYXJzZUludChtYXRjaDJbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMyICsgKHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRBR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2Fsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZDb3JuZXJzMiArIHBhcnNlSW50KG1hdGNoMltcIkFDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFt0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlllbGxvd0NhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkFZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNbdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZSZWRDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhcGggVGVhbSBMZWdlbmQgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNDUpLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDY1KS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJncmVlblwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoYCR7dGhpcy50ZWFtMX0gJHt0aGlzLnNlYXNvbjF9YCkgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0yfSAke3RoaXMuc2Vhc29uMn1gKSAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvbi1jb250YWluZXJcIikuYXBwZW5kKFwic2VsZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInVwZGF0ZS1idXR0b25cIik7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG4gICAgICAgIC8vIFktQXhpcyBsYWJlbCBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAuYXR0cihcInhcIiwgMCAtIChIRUlHSFQvMikpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICBcbiAgICAgICAgLy8gWC1BeGlzIGxhYmVsXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgICAgbGV0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHgpO1xuXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIEhFSUdIVCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgbGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgIC8vIERyb3Bkb3duIEJ1dHRvbiBPcHRpb25zIHRvIGNoYW5nZSBkYXRhIG91dHB1dFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Qb2ludHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpOyAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNPblRhcmdldCwgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNlY29uZCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TZWNvbmRIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fscywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Db3JuZXJzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGb3VscyBDb21taXRlZFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNDb21taXRlZCwgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblllbGxvd0NhcmRzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJSZWQgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblJlZENhcmRzLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIFxuICAgIH1cblxuICAgICB1cGRhdGUoZGF0YSwgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG5cbiAgICAgICAgeC5kb21haW4oWzAsIGQzLm1heCh0aGlzLnNlYXNvbkxlbmd0aCldKTtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgICBsZXQgdGVhbU9uZU1heCA9IGRhdGFbdGhpcy50ZWFtMV1bMzhdWzFdO1xuICAgICAgICBsZXQgdGVhbVR3b01heCA9IGRhdGFbdGhpcy50ZWFtMl1bMzhdWzFdO1xuXG4gICAgICAgIHRlYW1PbmVNYXggPj0gdGVhbVR3b01heCA/IHkuZG9tYWluKFswLCB0ZWFtT25lTWF4XSkgOiB5LmRvbWFpbihbMCwgdGVhbVR3b01heF0pOyBcblxuICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuWUF4aXNcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpXG5cbiAgICAgICAgbGV0IGxpbmUxID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpXG4gICAgICAgIGxldCBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKVxuXG4gICAgICAgIGlmIChsaW5lMSl7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLnJlbW92ZSgpfVxuICAgICAgICBpZiAobGluZTIpe3RoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5yZW1vdmUoKX1cblxuICAgICAgICBsaW5lMSA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW3RoaXMudGVhbTFdKVxuICAgICAgICBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW3RoaXMudGVhbTJdKVxuXG4gICAgICAgIGxpbmUxXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5kYXR1bShkYXRhW3RoaXMudGVhbTFdKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTFcIilcbiAgICAgICAgLm1lcmdlKGxpbmUxKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgIC54KGQgPT4ge3JldHVybiB4KGRbMF0pOyB9KVxuICAgICAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTsgfSkpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMi41KVxuICAgICAgICBcbiAgICAgICAgbGluZTJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmRhdHVtKGRhdGFbdGhpcy50ZWFtMl0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuXG5cbiAgICB9ICAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==