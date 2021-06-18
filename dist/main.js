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
    this.season2 = season2; // Data Objects used in graph making

    this.seasonPointsTeamOne = {};
    this.seasonPointsTeamTwo = {};
    this.seasonShotsTeamOne = {};
    this.seasonShotsTeamTwo = {};
    this.seasonShotsOnTargetTeamOne = {};
    this.seasonShotsOnTargetTeamTwo = {};
    this.seasonFirstHalfGoalsTeamOne = {};
    this.seasonFirstHalfGoalsTeamTwo = {};
    this.seasonSecondHalfGoalsTeamOne = {};
    this.seasonSecondHalfGoalsTeamTwo = {};
    this.seasonGoalsTeamOne = {};
    this.seasonGoalsTeamTwo = {};
    this.seasonGoalsAgainstTeamOne = {};
    this.seasonGoalsAgainstTeamTwo = {};
    this.seasonCornersTeamOne = {};
    this.seasonCornersTeamTwo = {};
    this.seasonFoulsCommitedTeamOne = {};
    this.seasonFoulsCommitedTeamTwo = {};
    this.seasonFoulsAgainstTeamOne = {};
    this.seasonFoulsAgainstTeamTwo = {};
    this.seasonYellowCardsTeamOne = {};
    this.seasonYellowCardsTeamTwo = {};
    this.seasonRedCardsTeamOne = {};
    this.seasonRedCardsTeamTwo = {}; // Initializing objects with data

    this.seasonPointsTeamOne[this.team1] = 0;
    this.seasonPointsTeamTwo[this.team2] = 0;
    this.seasonShotsTeamOne[this.team1] = 0;
    this.seasonShotsTeamTwo[this.team2] = 0;
    this.seasonShotsOnTargetTeamOne[this.team1] = 0;
    this.seasonShotsOnTargetTeamTwo[this.team2] = 0;
    this.seasonFirstHalfGoalsTeamOne[this.team1] = 0;
    this.seasonFirstHalfGoalsTeamTwo[this.team2] = 0;
    this.seasonSecondHalfGoalsTeamOne[this.team1] = 0;
    this.seasonSecondHalfGoalsTeamTwo[this.team2] = 0;
    this.seasonGoalsTeamOne[this.team1] = 0;
    this.seasonGoalsTeamTwo[this.team2] = 0;
    this.seasonGoalsAgainstTeamOne[this.team1] = 0;
    this.seasonGoalsAgainstTeamTwo[this.team2] = 0;
    this.seasonCornersTeamOne[this.team1] = 0;
    this.seasonCornersTeamTwo[this.team2] = 0;
    this.seasonFoulsCommitedTeamOne[this.team1] = 0;
    this.seasonFoulsCommitedTeamTwo[this.team2] = 0;
    this.seasonFoulsAgainstTeamOne[this.team1] = 0;
    this.seasonFoulsAgainstTeamTwo[this.team2] = 0;
    this.seasonYellowCardsTeamOne[this.team1] = 0;
    this.seasonYellowCardsTeamTwo[this.team2] = 0;
    this.seasonRedCardsTeamOne[this.team1] = 0;
    this.seasonRedCardsTeamTwo[this.team2] = 0;
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
              _this.seasonPointsTeamOne[_this.team1] += 3;
              break;

            case "D":
              _this.seasonPointsTeamOne[_this.team1] += 1;
              break;

            default:
              break;
          }

          _this.seasonShotsTeamOne[_this.team1] += parseInt(match1["HS"]);
          _this.seasonShotsOnTargetTeamOne[_this.team1] += parseInt(match1["HST"]);
          _this.seasonFirstHalfGoalsTeamOne[_this.team1] += parseInt(match1["HTHG"]);
          _this.seasonSecondHalfGoalsTeamOne[_this.team1] += parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]);
          _this.seasonGoalsTeamOne[_this.team1] += parseInt(match1["FTHG"]);
          _this.seasonGoalsAgainstTeamOne[_this.team1] += parseInt(match1["FTAG"]);
          _this.seasonCornersTeamOne[_this.team1] += parseInt(match1["HC"]);
          _this.seasonFoulsCommitedTeamOne[_this.team1] += parseInt(match1["HF"]);
          _this.seasonFoulsAgainstTeamOne[_this.team1] += parseInt(match1["AF"]);
          _this.seasonYellowCardsTeamOne[_this.team1] += parseInt(match1["HY"]);
          _this.seasonRedCardsTeamOne[_this.team1] += parseInt(match1["HR"]);
        } else if (_this.team1 === match1["AwayTeam"]) {
          switch (match1['FTR']) {
            case "A":
              _this.seasonPointsTeamOne[_this.team1] += 3;
              break;

            case "D":
              _this.seasonPointsTeamOne[_this.team1] += 1;
              break;

            default:
              break;
          }

          _this.seasonShotsTeamOne[_this.team1] += parseInt(match1["AS"]);
          _this.seasonShotsOnTargetTeamOne[_this.team1] += parseInt(match1["AST"]);
          _this.seasonFirstHalfGoalsTeamOne[_this.team1] += parseInt(match1["HTAG"]);
          _this.seasonSecondHalfGoalsTeamOne[_this.team1] += parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]);
          _this.seasonGoalsTeamOne[_this.team1] += parseInt(match1["FTAG"]);
          _this.seasonGoalsAgainstTeamOne[_this.team1] += parseInt(match1["FTHG"]);
          _this.seasonCornersTeamOne[_this.team1] += parseInt(match1["AC"]);
          _this.seasonFoulsCommitedTeamOne[_this.team1] += parseInt(match1["AF"]);
          _this.seasonFoulsAgainstTeamOne[_this.team1] += parseInt(match1["HF"]);
          _this.seasonYellowCardsTeamOne[_this.team1] += parseInt(match1["AY"]);
          _this.seasonRedCardsTeamOne[_this.team1] += parseInt(match1["AR"]);
        } // Team 2 Conditional and Logic


        if (_this.team2 === match2["HomeTeam"]) {
          switch (match2['FTR']) {
            case "H":
              _this.seasonPointsTeamTwo[_this.team2] += 3;
              break;

            case "D":
              _this.seasonPointsTeamTwo[_this.team2] += 1;
              break;

            default:
              break;
          }

          _this.seasonShotsTeamTwo[_this.team2] += parseInt(match2["HS"]);
          _this.seasonShotsOnTargetTeamTwo[_this.team2] += parseInt(match2["HST"]);
          _this.seasonFirstHalfGoalsTeamTwo[_this.team2] += parseInt(match2["HTHG"]);
          _this.seasonSecondHalfGoalsTeamTwo[_this.team2] += parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]);
          _this.seasonGoalsTeamTwo[_this.team2] += parseInt(match2["FTHG"]);
          _this.seasonGoalsAgainstTeamTwo[_this.team2] += parseInt(match2["FTAG"]);
          _this.seasonCornersTeamTwo[_this.team2] += parseInt(match2["HC"]);
          _this.seasonFoulsCommitedTeamTwo[_this.team2] += parseInt(match2["HF"]);
          _this.seasonFoulsAgainstTeamTwo[_this.team2] += parseInt(match2["AF"]);
          _this.seasonYellowCardsTeamTwo[_this.team2] += parseInt(match2["HY"]);
          _this.seasonRedCardsTeamTwo[_this.team2] += parseInt(match2["HR"]);
        } else if (_this.team2 === match2["AwayTeam"]) {
          switch (match2['FTR']) {
            case "A":
              _this.seasonPointsTeamTwo[_this.team2] += 3;
              break;

            case "D":
              _this.seasonPointsTeamTwo[_this.team2] += 1;
              break;

            default:
              break;
          }

          _this.seasonShotsTeamTwo[_this.team2] += parseInt(match2["AS"]);
          _this.seasonShotsOnTargetTeamTwo[_this.team2] += parseInt(match2["AST"]);
          _this.seasonFirstHalfGoalsTeamTwo[_this.team2] += parseInt(match2["HTAG"]);
          _this.seasonSecondHalfGoalsTeamTwo[_this.team2] += parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]);
          _this.seasonGoalsTeamTwo[_this.team2] += parseInt(match2["FTAG"]);
          _this.seasonGoalsAgainstTeamTwo[_this.team2] += parseInt(match2["FTHG"]);
          _this.seasonCornersTeamTwo[_this.team2] += parseInt(match2["AC"]);
          _this.seasonFoulsCommitedTeamTwo[_this.team2] += parseInt(match2["AF"]);
          _this.seasonFoulsAgainstTeamTwo[_this.team2] += parseInt(match2["HF"]);
          _this.seasonYellowCardsTeamTwo[_this.team2] += parseInt(match2["AY"]);
          _this.seasonRedCardsTeamTwo[_this.team2] += parseInt(match2["AR"]);
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

      _this.update(_this.seasonPointsTeamOne, _this.seasonPointsTeamTwo, "Points", x, xAxis, y, yAxis);

      var that = _this;
      dropDownButton.on("change", function (d) {
        var selectedOption = d3.select(this).property("value");

        switch (selectedOption) {
          case "Points":
            that.update(that.seasonPointsTeamOne, that.seasonPointsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots":
            that.update(that.seasonShotsTeamOne, that.seasonShotsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots on Target":
            that.update(that.seasonShotsOnTargetTeamOne, that.seasonShotsOnTargetTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "First Half Goals":
            that.update(that.seasonFirstHalfGoalsTeamOne, that.seasonFirstHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Second Half Goals":
            that.update(that.seasonSecondHalfGoalsTeamOne, that.seasonSecondHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Total Goals":
            that.update(that.seasonGoalsTeamOne, that.seasonGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Goals Against":
            that.update(that.seasonGoalsAgainstTeamOne, that.seasonGoalsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Corners":
            that.update(that.seasonCornersTeamOne, that.seasonCornersTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Commited":
            that.update(that.seasonFoulsCommitedTeamOne, that.seasonFoulsCommitedTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Against":
            that.update(that.seasonFoulsAgainstTeamOne, that.seasonFoulsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Yellow Cards":
            that.update(that.seasonYellowCardsTeamOne, that.seasonYellowCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Red Cards":
            that.update(that.seasonRedCardsTeamOne, that.seasonRedCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          default:
            break;
        }
      });
    });
  }

  _createClass(BarGraph, [{
    key: "update",
    value: function update(dataTeamOne, dataTeamTwo, title, x, xAxis, y, yAxis) {
      // Helper Objects
      var data = {};
      var team1Season1 = this.team1 + " " + this.season1;
      var team2Season2 = this.team2 + " " + this.season2;
      data[team1Season1] = dataTeamOne[this.team1];
      data[team2Season2] = dataTeamTwo[this.team2]; // Update X-Axis with team names

      x.domain(Object.keys(data).map(function (team) {
        return team;
      }));
      xAxis.call(d3.axisBottom(x)); // Update Y-Axis with relevant values

      dataTeamOne[this.team1] >= dataTeamTwo[this.team2] ? y.domain([0, dataTeamOne[this.team1] + dataTeamOne[this.team1] / 10]) : y.domain([0, dataTeamTwo[this.team2] + dataTeamTwo[this.team2] / 10]);
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
    this.season2 = season2; // Data Objects used in graph making

    this.seasonPointsTeamOne = {};
    this.seasonPointsTeamTwo = {};
    this.seasonShotsTeamOne = {};
    this.seasonShotsTeamTwo = {};
    this.seasonShotsOnTargetTeamOne = {};
    this.seasonShotsOnTargetTeamTwo = {};
    this.seasonFirstHalfGoalsTeamOne = {};
    this.seasonFirstHalfGoalsTeamTwo = {};
    this.seasonSecondHalfGoalsTeamOne = {};
    this.seasonSecondHalfGoalsTeamTwo = {};
    this.seasonGoalsTeamOne = {};
    this.seasonGoalsTeamTwo = {};
    this.seasonGoalsAgainstTeamOne = {};
    this.seasonGoalsAgainstTeamTwo = {};
    this.seasonCornersTeamOne = {};
    this.seasonCornersTeamTwo = {};
    this.seasonFoulsCommitedTeamOne = {};
    this.seasonFoulsCommitedTeamTwo = {};
    this.seasonFoulsAgainstTeamOne = {};
    this.seasonFoulsAgainstTeamTwo = {};
    this.seasonYellowCardsTeamOne = {};
    this.seasonYellowCardsTeamTwo = {};
    this.seasonRedCardsTeamOne = {};
    this.seasonRedCardsTeamTwo = {}; // Initializing objects with data

    this.seasonPointsTeamOne[this.team1] = [[0, 0]];
    this.seasonPointsTeamTwo[this.team2] = [[0, 0]];
    this.seasonShotsTeamOne[this.team1] = [[0, 0]];
    this.seasonShotsTeamTwo[this.team2] = [[0, 0]];
    this.seasonShotsOnTargetTeamOne[this.team1] = [[0, 0]];
    this.seasonShotsOnTargetTeamTwo[this.team2] = [[0, 0]];
    this.seasonFirstHalfGoalsTeamOne[this.team1] = [[0, 0]];
    this.seasonFirstHalfGoalsTeamTwo[this.team2] = [[0, 0]];
    this.seasonSecondHalfGoalsTeamOne[this.team1] = [[0, 0]];
    this.seasonSecondHalfGoalsTeamTwo[this.team2] = [[0, 0]];
    this.seasonGoalsTeamOne[this.team1] = [[0, 0]];
    this.seasonGoalsTeamTwo[this.team2] = [[0, 0]];
    this.seasonGoalsAgainstTeamOne[this.team1] = [[0, 0]];
    this.seasonGoalsAgainstTeamTwo[this.team2] = [[0, 0]];
    this.seasonCornersTeamOne[this.team1] = [[0, 0]];
    this.seasonCornersTeamTwo[this.team2] = [[0, 0]];
    this.seasonFoulsCommitedTeamOne[this.team1] = [[0, 0]];
    this.seasonFoulsCommitedTeamTwo[this.team2] = [[0, 0]];
    this.seasonFoulsAgainstTeamOne[this.team1] = [[0, 0]];
    this.seasonFoulsAgainstTeamTwo[this.team2] = [[0, 0]];
    this.seasonYellowCardsTeamOne[this.team1] = [[0, 0]];
    this.seasonYellowCardsTeamTwo[this.team2] = [[0, 0]];
    this.seasonRedCardsTeamOne[this.team1] = [[0, 0]];
    this.seasonRedCardsTeamTwo[this.team2] = [[0, 0]];
    this.stats = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];
    this.seasonLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    this.update = this.update.bind(this); // Loading up data and creating graph 

    Promise.all([d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season1, ".csv")), d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(this.season2, ".csv"))]).then(function (data) {
      // Loop to go through data and populate output data objects 
      for (var i = 0; i < data[0].length; i++) {
        // Matchday vars
        var match1 = data[0][i];
        var match2 = data[1][i]; // helper variables team 1

        var prevMatchday1 = _this.seasonPointsTeamOne[_this.team1][_this.seasonPointsTeamOne[_this.team1].length - 1][0];
        var prevPoints1 = _this.seasonPointsTeamOne[_this.team1][_this.seasonPointsTeamOne[_this.team1].length - 1][1];
        var prevShots1 = _this.seasonShotsTeamOne[_this.team1][_this.seasonShotsTeamOne[_this.team1].length - 1][1];
        var prevShotsOnTarget1 = _this.seasonShotsOnTargetTeamOne[_this.team1][_this.seasonShotsOnTargetTeamOne[_this.team1].length - 1][1];
        var prevFirstHalfGoals1 = _this.seasonFirstHalfGoalsTeamOne[_this.team1][_this.seasonFirstHalfGoalsTeamOne[_this.team1].length - 1][1];
        var prevSecondHalfGoals1 = _this.seasonSecondHalfGoalsTeamOne[_this.team1][_this.seasonSecondHalfGoalsTeamOne[_this.team1].length - 1][1];
        var prevGoals1 = _this.seasonGoalsTeamOne[_this.team1][_this.seasonGoalsTeamOne[_this.team1].length - 1][1];
        var prevGoalsAgainst1 = _this.seasonGoalsAgainstTeamOne[_this.team1][_this.seasonGoalsAgainstTeamOne[_this.team1].length - 1][1];
        var prevCorners1 = _this.seasonCornersTeamOne[_this.team1][_this.seasonCornersTeamOne[_this.team1].length - 1][1];
        var prevFoulsCommited1 = _this.seasonFoulsCommitedTeamOne[_this.team1][_this.seasonFoulsCommitedTeamOne[_this.team1].length - 1][1];
        var prevFoulsAgainst1 = _this.seasonFoulsAgainstTeamOne[_this.team1][_this.seasonFoulsAgainstTeamOne[_this.team1].length - 1][1];
        var prevYellowCards1 = _this.seasonYellowCardsTeamOne[_this.team1][_this.seasonYellowCardsTeamOne[_this.team1].length - 1][1];
        var prevRedCards1 = _this.seasonRedCardsTeamOne[_this.team1][_this.seasonRedCardsTeamOne[_this.team1].length - 1][1]; // helper variables team 2

        var prevMatchday2 = _this.seasonPointsTeamTwo[_this.team2][_this.seasonPointsTeamTwo[_this.team2].length - 1][0];
        var prevPoints2 = _this.seasonPointsTeamTwo[_this.team2][_this.seasonPointsTeamTwo[_this.team2].length - 1][1];
        var prevShots2 = _this.seasonShotsTeamTwo[_this.team2][_this.seasonShotsTeamTwo[_this.team2].length - 1][1];
        var prevShotsOnTarget2 = _this.seasonShotsOnTargetTeamTwo[_this.team2][_this.seasonShotsOnTargetTeamTwo[_this.team2].length - 1][1];
        var prevFirstHalfGoals2 = _this.seasonFirstHalfGoalsTeamTwo[_this.team2][_this.seasonFirstHalfGoalsTeamTwo[_this.team2].length - 1][1];
        var prevSecondHalfGoals2 = _this.seasonSecondHalfGoalsTeamTwo[_this.team2][_this.seasonSecondHalfGoalsTeamTwo[_this.team2].length - 1][1];
        var prevGoals2 = _this.seasonGoalsTeamTwo[_this.team2][_this.seasonGoalsTeamTwo[_this.team2].length - 1][1];
        var prevGoalsAgainst2 = _this.seasonGoalsAgainstTeamTwo[_this.team2][_this.seasonGoalsAgainstTeamTwo[_this.team2].length - 1][1];
        var prevCorners2 = _this.seasonCornersTeamTwo[_this.team2][_this.seasonCornersTeamTwo[_this.team2].length - 1][1];
        var prevFoulsCommited2 = _this.seasonFoulsCommitedTeamTwo[_this.team2][_this.seasonFoulsCommitedTeamTwo[_this.team2].length - 1][1];
        var prevFoulsAgainst2 = _this.seasonFoulsAgainstTeamTwo[_this.team2][_this.seasonFoulsAgainstTeamTwo[_this.team2].length - 1][1];
        var prevYellowCards2 = _this.seasonYellowCardsTeamTwo[_this.team2][_this.seasonYellowCardsTeamTwo[_this.team2].length - 1][1];
        var prevRedCards2 = _this.seasonRedCardsTeamTwo[_this.team2][_this.seasonRedCardsTeamTwo[_this.team2].length - 1][1]; // Conditional to populate data for first team

        if (match1["HomeTeam"] === _this.team1) {
          switch (match1["FTR"]) {
            case "H":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 3]);

              break;

            case "A":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1]);

              break;

            case "D":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShotsTeamOne[_this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["HS"])]);

          _this.seasonShotsOnTargetTeamOne[_this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["HST"])]);

          _this.seasonFirstHalfGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTHG"])]);

          _this.seasonSecondHalfGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]))]);

          _this.seasonGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTHG"])]);

          _this.seasonGoalsAgainstTeamOne[_this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTAG"])]);

          _this.seasonCornersTeamOne[_this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["HC"])]);

          _this.seasonFoulsCommitedTeamOne[_this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["HF"])]);

          _this.seasonFoulsAgainstTeamOne[_this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["AF"])]);

          _this.seasonYellowCardsTeamOne[_this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["HY"])]);

          _this.seasonRedCardsTeamOne[_this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["HR"])]);
        } else if (match1["AwayTeam"] === _this.team1) {
          switch (match1["FTR"]) {
            case "A":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 3]);

              break;

            case "H":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1]);

              break;

            case "D":
              _this.seasonPointsTeamOne[_this.team1].push([prevMatchday1 + 1, prevPoints1 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShotsTeamOne[_this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["AS"])]);

          _this.seasonShotsOnTargetTeamOne[_this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["AST"])]);

          _this.seasonFirstHalfGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTAG"])]);

          _this.seasonSecondHalfGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]))]);

          _this.seasonGoalsTeamOne[_this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTAG"])]);

          _this.seasonGoalsAgainstTeamOne[_this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTHG"])]);

          _this.seasonCornersTeamOne[_this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["AC"])]);

          _this.seasonFoulsCommitedTeamOne[_this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["AF"])]);

          _this.seasonFoulsAgainstTeamOne[_this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["HF"])]);

          _this.seasonYellowCardsTeamOne[_this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["AY"])]);

          _this.seasonRedCardsTeamOne[_this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["AR"])]);
        } // Conditional for second team data


        if (match2["HomeTeam"] === _this.team2) {
          switch (match2["FTR"]) {
            case "H":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 3]);

              break;

            case "A":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2]);

              break;

            case "D":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShotsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevShots2 + parseInt(match2["HS"])]);

          _this.seasonShotsOnTargetTeamTwo[_this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["HST"])]);

          _this.seasonFirstHalfGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTHG"])]);

          _this.seasonSecondHalfGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]))]);

          _this.seasonGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTHG"])]);

          _this.seasonGoalsAgainstTeamTwo[_this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTAG"])]);

          _this.seasonCornersTeamTwo[_this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["HC"])]);

          _this.seasonFoulsCommitedTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["HF"])]);

          _this.seasonFoulsAgainstTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["AF"])]);

          _this.seasonYellowCardsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["HY"])]);

          _this.seasonRedCardsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["HR"])]);
        } else if (match2["AwayTeam"] === _this.team2) {
          switch (match2["FTR"]) {
            case "A":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 3]);

              break;

            case "H":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2]);

              break;

            case "D":
              _this.seasonPointsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevPoints2 + 1]);

              break;

            default:
              break;
          }

          _this.seasonShotsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevShots2 + parseInt(match2["AS"])]);

          _this.seasonShotsOnTargetTeamTwo[_this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["AST"])]);

          _this.seasonFirstHalfGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTAG"])]);

          _this.seasonSecondHalfGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]))]);

          _this.seasonGoalsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTAG"])]);

          _this.seasonGoalsAgainstTeamTwo[_this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTHG"])]);

          _this.seasonCornersTeamTwo[_this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["AC"])]);

          _this.seasonFoulsCommitedTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["AF"])]);

          _this.seasonFoulsAgainstTeamTwo[_this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["HF"])]);

          _this.seasonYellowCardsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["AY"])]);

          _this.seasonRedCardsTeamTwo[_this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["AR"])]);
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

      _this.update(_this.seasonPointsTeamOne, _this.seasonPointsTeamTwo, "Points", x, xAxis, y, yAxis); // Dropdown Button Options to change data output


      var that = _this;
      dropDownButton.on("change", function (d) {
        var selectedOption = d3.select(this).property("value");

        switch (selectedOption) {
          case "Points":
            that.update(that.seasonPointsTeamOne, that.seasonPointsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots":
            that.update(that.seasonShotsTeamOne, that.seasonShotsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Shots on Target":
            that.update(that.seasonShotsOnTargetTeamOne, that.seasonShotsOnTargetTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "First Half Goals":
            that.update(that.seasonFirstHalfGoalsTeamOne, that.seasonFirstHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Second Half Goals":
            that.update(that.seasonSecondHalfGoalsTeamOne, that.seasonSecondHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Total Goals":
            that.update(that.seasonGoalsTeamOne, that.seasonGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Goals Against":
            that.update(that.seasonGoalsAgainstTeamOne, that.seasonGoalsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Corners":
            that.update(that.seasonCornersTeamOne, that.seasonCornersTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Commited":
            that.update(that.seasonFoulsCommitedTeamOne, that.seasonFoulsCommitedTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Fouls Against":
            that.update(that.seasonFoulsAgainstTeamOne, that.seasonFoulsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Yellow Cards":
            that.update(that.seasonYellowCardsTeamOne, that.seasonYellowCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          case "Red Cards":
            that.update(that.seasonRedCardsTeamOne, that.seasonRedCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
            break;

          default:
            break;
        }
      });
    });
  }

  _createClass(LineGraph, [{
    key: "update",
    value: function update(dataTeamOne, dataTeamTwo, title, x, xAxis, y, yAxis) {
      var _this2 = this;

      x.domain([0, d3.max(this.seasonLength)]);
      this.svg.selectAll(".XAxis").transition().duration(1000).call(xAxis);
      var teamOneMax = dataTeamOne[this.team1][38][1];
      var teamTwoMax = dataTeamTwo[this.team2][38][1];
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

      line1 = this.svg.selectAll(".line1").data([dataTeamOne], function (d) {
        return d[_this2.team1];
      });
      line2 = this.svg.selectAll(".line2").data([dataTeamTwo], function (d) {
        return d[_this2.team2];
      });
      line1.enter().datum(dataTeamOne[this.team1]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
        return x(d[0]);
      }).y(function (d) {
        return y(d[1]);
      })).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 2.5);
      line2.enter().datum(dataTeamTwo[this.team2]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIkJhckdyYXBoIiwic3ZnIiwidGVhbTEiLCJzZWFzb24xIiwidGVhbTIiLCJzZWFzb24yIiwic2Vhc29uUG9pbnRzVGVhbU9uZSIsInNlYXNvblBvaW50c1RlYW1Ud28iLCJzZWFzb25TaG90c1RlYW1PbmUiLCJzZWFzb25TaG90c1RlYW1Ud28iLCJzZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSIsInNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSIsInNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc1RlYW1PbmUiLCJzZWFzb25Hb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lIiwic2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byIsInNlYXNvbkNvcm5lcnNUZWFtT25lIiwic2Vhc29uQ29ybmVyc1RlYW1Ud28iLCJzZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSIsInNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvIiwic2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSIsInNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28iLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUiLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28iLCJzZWFzb25SZWRDYXJkc1RlYW1PbmUiLCJzZWFzb25SZWRDYXJkc1RlYW1Ud28iLCJzdGF0cyIsInVwZGF0ZSIsImJpbmQiLCJQcm9taXNlIiwiYWxsIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXRjaDEiLCJtYXRjaDIiLCJwYXJzZUludCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsImQiLCJzdHlsZSIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwidGhhdCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSIsImRhdGFUZWFtT25lIiwiZGF0YVRlYW1Ud28iLCJ0aXRsZSIsInRlYW0xU2Vhc29uMSIsInRlYW0yU2Vhc29uMiIsImRvbWFpbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0ZWFtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInRlYW1zIiwidSIsImpvaW4iLCJiYW5kd2lkdGgiLCJURUFNUyIsIlNFQVNPTlMiLCJHUkFQSCIsImxpbmUiLCJiYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZWFtT25lU2Vhc29uU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidGVhbVR3b1NlYXNvblNlbGVjdG9yIiwiZmlyc3RUZWFtU2VsZWN0b3IiLCJzZWNvbmRUZWFtU2VsZWN0b3IiLCJzZWFyY2hGb3JtIiwiY29tcGFyZUJ1dHRvbiIsIm9uY2hhbmdlIiwiZXZlbnQiLCJzZWFzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZVRlYW1zRnJvbVNlYXJjaCIsInBvcHVsYXRlVGVhbVNlbGVjdG9yIiwiZGlzcGxheSIsInJlc2V0QnV0dG9uIiwiY3JlYXRlTGluZUdyYXBoIiwiZWxlbWVudCIsInNlbGVjdENoaWxkcmVuIiwicmVtb3ZlIiwic2VsZWN0b3IiLCJtYXRjaGRheSIsImluY2x1ZGVzIiwicHVzaCIsImRyb3BEb3duVGVhbSIsInJlbW92ZUdyYXBoIiwiYnV0dG9uQ29udGFpbmVyIiwicmVtb3ZlQ2hhbmdlR3JhcGhCdXR0b24iLCJyZW1vdmVVcGRhdGVCdXR0b24iLCJjcmVhdGVCYXJHcmFwaCIsImNoYW5nZUdyYXBoQnV0dG9uIiwiTGluZUdyYXBoIiwic2Vhc29uTGVuZ3RoIiwicHJldk1hdGNoZGF5MSIsInByZXZQb2ludHMxIiwicHJldlNob3RzMSIsInByZXZTaG90c09uVGFyZ2V0MSIsInByZXZGaXJzdEhhbGZHb2FsczEiLCJwcmV2U2Vjb25kSGFsZkdvYWxzMSIsInByZXZHb2FsczEiLCJwcmV2R29hbHNBZ2FpbnN0MSIsInByZXZDb3JuZXJzMSIsInByZXZGb3Vsc0NvbW1pdGVkMSIsInByZXZGb3Vsc0FnYWluc3QxIiwicHJldlllbGxvd0NhcmRzMSIsInByZXZSZWRDYXJkczEiLCJwcmV2TWF0Y2hkYXkyIiwicHJldlBvaW50czIiLCJwcmV2U2hvdHMyIiwicHJldlNob3RzT25UYXJnZXQyIiwicHJldkZpcnN0SGFsZkdvYWxzMiIsInByZXZTZWNvbmRIYWxmR29hbHMyIiwicHJldkdvYWxzMiIsInByZXZHb2Fsc0FnYWluc3QyIiwicHJldkNvcm5lcnMyIiwicHJldkZvdWxzQ29tbWl0ZWQyIiwicHJldkZvdWxzQWdhaW5zdDIiLCJwcmV2WWVsbG93Q2FyZHMyIiwicHJldlJlZENhcmRzMiIsInNjYWxlIiwibWF4IiwidGVhbU9uZU1heCIsInRlYW1Ud29NYXgiLCJsaW5lMSIsImxpbmUyIiwiZGF0dW0iLCJtZXJnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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Ozs7Ozs7O0FDalpBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA2NTAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDU5MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tO1xuXG5jbGFzcyBCYXJHcmFwaHtcbiAgICBjb25zdHJ1Y3RvcihzdmcsIHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMil7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMjtcbiAgICAgIHRoaXMuc2Vhc29uMSA9IHNlYXNvbjE7XG4gICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuICAgICAgXG4gICAgICAvLyBEYXRhIE9iamVjdHMgdXNlZCBpbiBncmFwaCBtYWtpbmdcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblNob3RzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3byA9IHt9O1xuICAgICAgICBcblxuICAgICAgLy8gSW5pdGlhbGl6aW5nIG9iamVjdHMgd2l0aCBkYXRhXG4gICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcblxuICAgICAgdGhpcy5zdGF0cyA9IFtcbiAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgXCJTaG90c1wiLCBcbiAgICAgICAgXCJTaG90cyBvbiBUYXJnZXRcIixcbiAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICBcIlNlY29uZCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICBcIlRvdGFsIEdvYWxzXCIsIFxuICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgIFwiQ29ybmVyc1wiLCBcbiAgICAgICAgXCJGb3VscyBDb21taXRlZFwiLCBcbiAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICBcIlllbGxvdyBDYXJkc1wiLCBcbiAgICAgICAgXCJSZWQgQ2FyZHNcIl07XG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBMb2FkaW5nIHVwIGRhdGEgYW5kIGNyZWF0aW5nIGdyYXBoIHByb2Nlc3NcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24xfS5jc3ZgKSxcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMn0uY3N2YClcbiAgICAgICAgXSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHVkIGRhdGEgb2JqZWN0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gTWF0Y2hkYXkgdmFyc1xuICAgICAgICAgICAgbGV0IG1hdGNoMSA9IGRhdGFbMF1baV07XG4gICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGVhbSAxIGNvbmRpdGlvbmFsIGFuZCBMb2dpY1xuICAgICAgICAgICAgaWYgKHRoaXMudGVhbTEgPT09IG1hdGNoMVtcIkhvbWVUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIU1RcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IChwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMVtcIkhUSEdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSEZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhSXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZWFtMSA9PT0gbWF0Y2gxW1wiQXdheVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUZWFtIDIgQ29uZGl0aW9uYWwgYW5kIExvZ2ljXG4gICAgICAgICAgICBpZiAodGhpcy50ZWFtMiA9PT0gbWF0Y2gyW1wiSG9tZVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMlsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gKHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFJcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlYW0yID09PSBtYXRjaDJbXCJBd2F5VGVhbVwiXSl7XG4gICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyWydGVFInXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBU1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAocGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQUNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVlcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBUlwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRHJvcGRvd24gYnV0dG9uIGNyZWF0aW9uIHRvIGNoYW5nZSBzdGF0c1xuICAgICAgICAgIGNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiLnVwZGF0ZS1idXR0b24tY29udGFpbmVyXCIpLmFwcGVuZChcInNlbGVjdFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJ1cGRhdGUtYnV0dG9uXCIpO1xuICAgICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAgIC5kYXRhKHRoaXMuc3RhdHMpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KTtcblxuICAgICAgICAgIC8vIFktQXhpcyBsYWJlbFxuICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIDAgLSBNQVJHSU4ubGVmdCAtIDUpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIDAgLSAoSEVJR0hULzIpKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5YXhpcy10ZXh0XCIpXG4gICAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICAgXG5cbiAgICAgICAgICAvLyBYLUF4aXMgTGFiZWxcbiAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAudGV4dChcIlRlYW1zXCIpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gWC9ZIGF4aXMgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnNcbiAgICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIFdJRFRIXSkucGFkZGluZygwLjIpO1xuICAgICAgICAgIGNvbnN0IHhBeGlzID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApLmF0dHIoXCJjbGFzc1wiLCBcIlgtYXhpc1wiKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuICAgICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiWS1heGlzXCIpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud28sIFwiUG9pbnRzXCIsIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG5cbiAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgZHJvcERvd25CdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJQb2ludHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhhdC5zZWFzb25Qb2ludHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTsgICAgXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzVGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUsIHRoYXQuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lLCB0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkNvcm5lcnNUZWFtT25lLCB0aGF0LnNlYXNvbkNvcm5lcnNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUsIHRoYXQuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUsIHRoYXQuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblJlZENhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25SZWRDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YVRlYW1PbmUsIGRhdGFUZWFtVHdvLCB0aXRsZSwgeCwgeEF4aXMsIHksIHlBeGlzKXtcbiAgICAgIC8vIEhlbHBlciBPYmplY3RzXG4gICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICBjb25zdCB0ZWFtMVNlYXNvbjEgPSB0aGlzLnRlYW0xICsgXCIgXCIgKyB0aGlzLnNlYXNvbjE7XG4gICAgICBjb25zdCB0ZWFtMlNlYXNvbjIgPSB0aGlzLnRlYW0yICsgXCIgXCIgKyB0aGlzLnNlYXNvbjI7XG4gICAgICBkYXRhW3RlYW0xU2Vhc29uMV0gPSBkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXTtcbiAgICAgIGRhdGFbdGVhbTJTZWFzb24yXSA9IGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdO1xuXG5cbiAgICAgIC8vIFVwZGF0ZSBYLUF4aXMgd2l0aCB0ZWFtIG5hbWVzXG4gICAgICB4LmRvbWFpbihPYmplY3Qua2V5cyhkYXRhKS5tYXAodGVhbSA9PiB0ZWFtKSlcbiAgICAgIHhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBZLUF4aXMgd2l0aCByZWxldmFudCB2YWx1ZXNcbiAgICAgIGRhdGFUZWFtT25lW3RoaXMudGVhbTFdID49IGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdID8geS5kb21haW4oWzAsIGRhdGFUZWFtT25lW3RoaXMudGVhbTFdICsgKGRhdGFUZWFtT25lW3RoaXMudGVhbTFdLzEwKV0pIDogeS5kb21haW4oWzAsIGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdICsgKGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdLzEwKV0pXG4gICAgICB5QXhpcy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAgIHRoaXMuc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpO1xuICAgICAgY29uc3QgdGVhbXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgbGV0IHUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEodGVhbXMpO1xuXG4gICAgICB1LmpvaW4oXCJyZWN0XCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB4KGQpKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4gSEVJR0hUIC0geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImJsdWVcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhckdyYXBoOyIsIlxuaW1wb3J0IExpbmVHcmFwaCBmcm9tICcuL2xpbmVHcmFwaCc7XG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi9iYXJHcmFwaCc7XG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuXG5jb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b20sXG5URUFNUyA9IHt0ZWFtMTogXCJcIiwgdGVhbTI6IFwiXCJ9LFxuU0VBU09OUyA9IHtzZWFzb24xOiBcIlwiLCBzZWFzb24yOiBcIlwifSxcbkdSQVBIID0ge2xpbmU6IGZhbHNlLCBiYXI6IGZhbHNlfTtcblxuXG5cbi8vIERvY3VtZW50IG1hbmlwdWxhdGlvbiBmb3Igb25jaGFuZ2UgZXZlbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gc2VsZWN0IG1lbnVzIGZvciBzZWFzb25zXG4gICAgY29uc3QgdGVhbU9uZVNlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMS1zZWFzb25cIilcbiAgICBjb25zdCB0ZWFtVHdvU2Vhc29uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLXNlYXNvblwiKTtcblxuICAgIC8vIHNlbGVjdCBtZW51cyBmb3IgdGVhbXNcbiAgICBjb25zdCBmaXJzdFRlYW1TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtbmFtZVwiKTtcbiAgICBjb25zdCBzZWNvbmRUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLW5hbWVcIik7XG5cbiAgICAvLyBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zZWFyY2gtY29udGFpbmVyXCIpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGNvbXBhcmVCdXR0b24gPSBkMy5zZWxlY3QoXCIuY29tcGFyZS1idXR0b25cIilcblxuICAgIC8vIG9uIGNoYW5nZSBzZWxlY3RvciBldmVudHMgdG8gcG9wdWxhdGUgdGVhbSBuYW1lc1xuICAgIHRlYW1PbmVTZWFzb25TZWxlY3Rvci5vbmNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2Vhc29uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoKFwiLnRlYW0xLW5hbWVcIik7XG4gICAgICBwb3B1bGF0ZVRlYW1TZWxlY3RvcihzZWFzb24sIFwidGVhbTEtbmFtZVwiKTtcbiAgICB9XG5cbiAgICB0ZWFtVHdvU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMi1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0yLW5hbWVcIik7XG4gICAgfVxuXG4gICAgY29tcGFyZUJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgc2VhcmNoRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlc2V0QnV0dG9uKHNlYXJjaEZvcm0pO1xuICAgICAgXG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBmaXJzdFRlYW1TZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgVEVBTVNbXCJ0ZWFtMlwiXSA9IHNlY29uZFRlYW1TZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSB0ZWFtT25lU2Vhc29uU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24yXCJdID0gdGVhbVR3b1NlYXNvblNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgIGNyZWF0ZUxpbmVHcmFwaChURUFNU1tcInRlYW0xXCJdLCBTRUFTT05TW1wic2Vhc29uMVwiXSwgVEVBTVNbXCJ0ZWFtMlwiXSwgU0VBU09OU1tcInNlYXNvbjJcIl0pO1xuICAgIH0pXG4gICAgXG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBvcHRpb25zIGZyb20gc2VsZWN0IGRyb3Bkb3duXG5jb25zdCByZW1vdmVUZWFtc0Zyb21TZWFyY2ggPSBlbGVtZW50ID0+IHtcbiAgICBkMy5zZWxlY3QoZWxlbWVudCkuc2VsZWN0Q2hpbGRyZW4oXCJvcHRpb25cIikucmVtb3ZlKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRlYW0gc2VsZWN0b3JzIGZvciBlYWNoIHNlYXNvblxuY29uc3QgcG9wdWxhdGVUZWFtU2VsZWN0b3IgPSAoc2Vhc29uLCBzZWxlY3RvcikgPT4ge1xuICAgY29uc3QgdGVhbXMgPSBbXTtcbiAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgIHRlYW1zLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wRG93blRlYW0gPSBkMy5zZWxlY3QoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBkcm9wRG93blRlYW0uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRlYW1zKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdvcHRpb24nKVxuICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcImxhYmVsXCIsIGQgPT4ge3JldHVybiBkfSk7XG4gICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgc3ZnIGNoYXJ0XG5jb25zdCByZW1vdmVHcmFwaCA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHJlc2V0IGJ1dHRvbiB0byB0aGUgRE9NIHRvIHJldHVybiB0byB0aGUgc2VhcmNoIGNvbXBvbmVudFxuY29uc3QgcmVzZXRCdXR0b24gPSAoc2VhcmNoRm9ybSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5yZXNldC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoXCJidXR0b25cIikuYXR0cihcImNsYXNzXCIsIFwicmVzZXQtYnV0dG9uXCIpLnRleHQoXCJSZXNldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZW1vdmVHcmFwaCgpO1xuICAgICAgICByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbigpO1xuICAgICAgICByZW1vdmVVcGRhdGVCdXR0b24oKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOLmxlZnQgKyBNQVJHSU4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOLnRvcCArIE1BUkdJTi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTi5sZWZ0ICsgXCIsXCIgKyBNQVJHSU4udG9wICsgXCIpXCIpO1xuXG4gICAgbmV3IEJhckdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEguYmFyID0gdHJ1ZTtcbiAgICBHUkFQSC5saW5lID0gZmFsc2U7XG4gICAgY2hhbmdlR3JhcGhCdXR0b24oKTtcbn1cblxuY29uc3QgY3JlYXRlTGluZUdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIG5ldyBMaW5lR3JhcGgoc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpXG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG5cbiAgICBpZiAoR1JBUEgubGluZSA9PT0gdHJ1ZSAmJiBHUkFQSC5iYXIgPT09IGZhbHNlKXtcbiAgICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFuZ2UtZ3JhcGgtYnV0dG9uXCIpXG4gICAgICAudGV4dChcIkJhciBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKEdSQVBILmJhciA9PT0gdHJ1ZSAmJiBHUkFQSC5saW5lID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJMaW5lIEdyYXBoXCIpXG4gICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgIH0pfVxufVxuIFxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGNoYW5nZSBncmFwaCBidXR0b25cbmNvbnN0IHJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn1cblxuY29uc3QgcmVtb3ZlVXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn0iLCJjb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cblxuIGNsYXNzIExpbmVHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yO1xuICAgICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuXG4gICAgICAgIC8vIERhdGEgT2JqZWN0cyB1c2VkIGluIGdyYXBoIG1ha2luZ1xuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsaXppbmcgb2JqZWN0cyB3aXRoIGRhdGFcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBbXG4gICAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICAgIFwiUmVkIENhcmRzXCJdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFzb25MZW5ndGggPSBbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMyxcbiAgICAgICAgICAxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNlxuICAgICAgICAgICwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF0gIFxuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMX0uY3N2YCksXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjJ9LmNzdmApXG4gICAgICAgIF0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHV0IGRhdGEgb2JqZWN0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBNYXRjaGRheSB2YXJzXG4gICAgICAgICAgICAgIGxldCBtYXRjaDEgPSBkYXRhWzBdW2ldO1xuICAgICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMVxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MSA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgICAgbGV0IHByZXZQb2ludHMxID0gdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzMSA9IHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDEgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMxID0gdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMxID0gdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZDEgPSB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzMSA9IHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMxID0gdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cblxuXG5cbiAgICAgICAgICAgICAgLy8gaGVscGVyIHZhcmlhYmxlcyB0ZWFtIDJcbiAgICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheTIgPSB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzMiA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90czIgPSB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQyID0gdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMyID0gdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMyID0gdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzMiA9IHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzMiA9IHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQyID0gdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkczIgPSB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzMiA9IHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCB0byBwb3B1bGF0ZSBkYXRhIGZvciBmaXJzdCB0ZWFtXG4gICAgICAgICAgICAgIGlmIChtYXRjaDFbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaDFbXCJBd2F5VGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCBmb3Igc2Vjb25kIHRlYW0gZGF0YVxuICAgICAgICAgICAgICBpZiAobWF0Y2gyW1wiSG9tZVRlYW1cIl0gPT09IHRoaXMudGVhbTIpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMl0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMiArIHBhcnNlSW50KG1hdGNoMltcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90c09uVGFyZ2V0MiArIHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2Fsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNDb21taXRlZDIgKyBwYXJzZUludChtYXRjaDJbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlJlZENhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkhSXCJdKV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoMltcIkF3YXlUZWFtXCJdID09PSB0aGlzLnRlYW0yKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMltcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czJdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90czIgKyBwYXJzZUludChtYXRjaDJbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHNPblRhcmdldDIgKyBwYXJzZUludChtYXRjaDJbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGaXJzdEhhbGZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczIgKyAocGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkNvcm5lcnMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2WWVsbG93Q2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZSZWRDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhcGggVGVhbSBMZWdlbmQgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNDUpLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDY1KS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJncmVlblwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoYCR7dGhpcy50ZWFtMX0gJHt0aGlzLnNlYXNvbjF9YCkgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0yfSAke3RoaXMuc2Vhc29uMn1gKSAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvbi1jb250YWluZXJcIikuYXBwZW5kKFwic2VsZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInVwZGF0ZS1idXR0b25cIik7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG4gICAgICAgIC8vIFktQXhpcyBsYWJlbCBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAuYXR0cihcInhcIiwgMCAtIChIRUlHSFQvMikpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICBcbiAgICAgICAgLy8gWC1BeGlzIGxhYmVsXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgICAgbGV0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHgpO1xuXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIEhFSUdIVCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgbGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgIC8vIERyb3Bkb3duIEJ1dHRvbiBPcHRpb25zIHRvIGNoYW5nZSBkYXRhIG91dHB1dFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGF0LnNlYXNvblBvaW50c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpOyAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1PbmUsIHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblJlZENhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9XG5cbiAgICAgdXBkYXRlKGRhdGFUZWFtT25lLCBkYXRhVGVhbVR3bywgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG5cbiAgICAgICAgeC5kb21haW4oWzAsIGQzLm1heCh0aGlzLnNlYXNvbkxlbmd0aCldKTtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgICBsZXQgdGVhbU9uZU1heCA9IGRhdGFUZWFtT25lW3RoaXMudGVhbTFdWzM4XVsxXTtcbiAgICAgICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXVszOF1bMV07XG5cbiAgICAgICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuXG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5ZQXhpc1wiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgICAgICBsZXQgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIilcbiAgICAgICAgbGV0IGxpbmUyID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpXG5cbiAgICAgICAgaWYgKGxpbmUxKXt0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgICAgIGlmIChsaW5lMil7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLnJlbW92ZSgpfVxuXG4gICAgICAgIGxpbmUxID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLmRhdGEoW2RhdGFUZWFtT25lXSwgZCA9PiBkW3RoaXMudGVhbTFdKVxuICAgICAgICBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhVGVhbVR3b10sIGQgPT4gZFt0aGlzLnRlYW0yXSlcblxuICAgICAgICBsaW5lMVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG4gICAgICAgIFxuICAgICAgICBsaW5lMlxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuXG5cbiAgICB9ICAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==