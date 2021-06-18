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

    if (TEAMS["team1"] === TEAMS["team2"] && SEASONS["season1"] === SEASONS["season2"]) {
      alert("Please select different seasons if you wish to compare the same club!");
    } else {
      createLineGraph(TEAMS["team1"], SEASONS["season1"], TEAMS["team2"], SEASONS["season2"]);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIkJhckdyYXBoIiwic3ZnIiwidGVhbTEiLCJzZWFzb24xIiwidGVhbTIiLCJzZWFzb24yIiwic2Vhc29uUG9pbnRzVGVhbU9uZSIsInNlYXNvblBvaW50c1RlYW1Ud28iLCJzZWFzb25TaG90c1RlYW1PbmUiLCJzZWFzb25TaG90c1RlYW1Ud28iLCJzZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSIsInNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSIsInNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc1RlYW1PbmUiLCJzZWFzb25Hb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lIiwic2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byIsInNlYXNvbkNvcm5lcnNUZWFtT25lIiwic2Vhc29uQ29ybmVyc1RlYW1Ud28iLCJzZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSIsInNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvIiwic2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSIsInNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28iLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUiLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28iLCJzZWFzb25SZWRDYXJkc1RlYW1PbmUiLCJzZWFzb25SZWRDYXJkc1RlYW1Ud28iLCJzdGF0cyIsInVwZGF0ZSIsImJpbmQiLCJQcm9taXNlIiwiYWxsIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXRjaDEiLCJtYXRjaDIiLCJwYXJzZUludCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsImQiLCJzdHlsZSIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwidGhhdCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSIsImRhdGFUZWFtT25lIiwiZGF0YVRlYW1Ud28iLCJ0aXRsZSIsInRlYW0xU2Vhc29uMSIsInRlYW0yU2Vhc29uMiIsImRvbWFpbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0ZWFtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInRlYW1zIiwidSIsImpvaW4iLCJiYW5kd2lkdGgiLCJURUFNUyIsIlNFQVNPTlMiLCJHUkFQSCIsImxpbmUiLCJiYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZWFtT25lU2Vhc29uU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidGVhbVR3b1NlYXNvblNlbGVjdG9yIiwiZmlyc3RUZWFtU2VsZWN0b3IiLCJzZWNvbmRUZWFtU2VsZWN0b3IiLCJzZWFyY2hGb3JtIiwiY29tcGFyZUJ1dHRvbiIsIm9uY2hhbmdlIiwiZXZlbnQiLCJzZWFzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZVRlYW1zRnJvbVNlYXJjaCIsInBvcHVsYXRlVGVhbVNlbGVjdG9yIiwiZGlzcGxheSIsInJlc2V0QnV0dG9uIiwiYWxlcnQiLCJjcmVhdGVMaW5lR3JhcGgiLCJlbGVtZW50Iiwic2VsZWN0Q2hpbGRyZW4iLCJyZW1vdmUiLCJzZWxlY3RvciIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJwdXNoIiwiZHJvcERvd25UZWFtIiwicmVtb3ZlR3JhcGgiLCJidXR0b25Db250YWluZXIiLCJyZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbiIsInJlbW92ZVVwZGF0ZUJ1dHRvbiIsImNyZWF0ZUJhckdyYXBoIiwiY2hhbmdlR3JhcGhCdXR0b24iLCJMaW5lR3JhcGgiLCJzZWFzb25MZW5ndGgiLCJwcmV2TWF0Y2hkYXkxIiwicHJldlBvaW50czEiLCJwcmV2U2hvdHMxIiwicHJldlNob3RzT25UYXJnZXQxIiwicHJldkZpcnN0SGFsZkdvYWxzMSIsInByZXZTZWNvbmRIYWxmR29hbHMxIiwicHJldkdvYWxzMSIsInByZXZHb2Fsc0FnYWluc3QxIiwicHJldkNvcm5lcnMxIiwicHJldkZvdWxzQ29tbWl0ZWQxIiwicHJldkZvdWxzQWdhaW5zdDEiLCJwcmV2WWVsbG93Q2FyZHMxIiwicHJldlJlZENhcmRzMSIsInByZXZNYXRjaGRheTIiLCJwcmV2UG9pbnRzMiIsInByZXZTaG90czIiLCJwcmV2U2hvdHNPblRhcmdldDIiLCJwcmV2Rmlyc3RIYWxmR29hbHMyIiwicHJldlNlY29uZEhhbGZHb2FsczIiLCJwcmV2R29hbHMyIiwicHJldkdvYWxzQWdhaW5zdDIiLCJwcmV2Q29ybmVyczIiLCJwcmV2Rm91bHNDb21taXRlZDIiLCJwcmV2Rm91bHNBZ2FpbnN0MiIsInByZXZZZWxsb3dDYXJkczIiLCJwcmV2UmVkQ2FyZHMyIiwic2NhbGUiLCJtYXgiLCJ0ZWFtT25lTWF4IiwidGVhbVR3b01heCIsImxpbmUxIiwibGluZTIiLCJkYXR1bSIsIm1lcmdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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TyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixPQUZmLENBUlgsRUFXQ0osSUFYRCxDQVdNLE1BWE4sRUFXYyxNQVhkLEVBWUNBLElBWkQsQ0FZTSxRQVpOLEVBWWdCLE9BWmhCLEVBYUNBLElBYkQsQ0FhTSxjQWJOLEVBYXNCLEdBYnRCO0FBaUJIOzs7Ozs7QUFJVTRFLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2paQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IE1BUkdJTiA9IHt0b3A6IDMwLCByaWdodDogMzAsIGJvdHRvbTogODAsIGxlZnQ6IDYwfSxcbldJRFRIID0gNjUwIC0gTUFSR0lOLmxlZnQgLSBNQVJHSU4ucmlnaHQsXG5IRUlHSFQgPSA1OTAgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbTtcblxuY2xhc3MgQmFyR3JhcGh7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpe1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnRlYW0xID0gdGVhbTE7XG4gICAgICB0aGlzLnRlYW0yID0gdGVhbTI7XG4gICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgdGhpcy5zZWFzb24yID0gc2Vhc29uMjtcbiAgICAgIFxuICAgICAgLy8gRGF0YSBPYmplY3RzIHVzZWQgaW4gZ3JhcGggbWFraW5nXG4gICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgXG5cbiAgICAgIC8vIEluaXRpYWxpemluZyBvYmplY3RzIHdpdGggZGF0YVxuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNob3RzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG5cbiAgICAgIHRoaXMuc3RhdHMgPSBbXG4gICAgICAgIFwiUG9pbnRzXCIsXG4gICAgICAgIFwiU2hvdHNcIiwgXG4gICAgICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgICAgIFwiRmlyc3QgSGFsZiBHb2Fsc1wiLCBcbiAgICAgICAgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiLCBcbiAgICAgICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICAgICAgXCJHb2FscyBBZ2FpbnN0XCIsIFxuICAgICAgICBcIkNvcm5lcnNcIiwgXG4gICAgICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgICAgIFwiRm91bHMgQWdhaW5zdFwiLCBcbiAgICAgICAgXCJZZWxsb3cgQ2FyZHNcIiwgXG4gICAgICAgIFwiUmVkIENhcmRzXCJdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gTG9hZGluZyB1cCBkYXRhIGFuZCBjcmVhdGluZyBncmFwaCBwcm9jZXNzXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMX0uY3N2YCksXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjJ9LmNzdmApXG4gICAgICAgIF0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgLy8gTG9vcCB0byBnbyB0aHJvdWdoIGRhdGEgYW5kIHBvcHVsYXRlIG91dHB1ZCBkYXRhIG9iamVjdHNcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIE1hdGNoZGF5IHZhcnNcbiAgICAgICAgICAgIGxldCBtYXRjaDEgPSBkYXRhWzBdW2ldO1xuICAgICAgICAgICAgbGV0IG1hdGNoMiA9IGRhdGFbMV1baV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFRlYW0gMSBjb25kaXRpb25hbCBhbmQgTG9naWNcbiAgICAgICAgICAgIGlmICh0aGlzLnRlYW0xID09PSBtYXRjaDFbXCJIb21lVGVhbVwiXSl7XG4gICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gxWydGVFInXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIU1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAocGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSENcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFlcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIUlwiXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGVhbTEgPT09IG1hdGNoMVtcIkF3YXlUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBU1RcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IChwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMVtcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSEZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFSXCJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGVhbSAyIENvbmRpdGlvbmFsIGFuZCBMb2dpY1xuICAgICAgICAgICAgaWYgKHRoaXMudGVhbTIgPT09IG1hdGNoMltcIkhvbWVUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDJbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIU1RcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IChwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSEZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhSXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZWFtMiA9PT0gbWF0Y2gyW1wiQXdheVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMlsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gKHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRBR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgICBjb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcIi51cGRhdGUtYnV0dG9uLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzZWxlY3RcIikuYXR0cihcImNsYXNzXCIsIFwidXBkYXRlLWJ1dHRvblwiKTtcbiAgICAgICAgICBkcm9wRG93bkJ1dHRvbi5zZWxlY3RBbGwoJ2RhdGFPcHRpb25zJylcbiAgICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAgICAgICAvLyBZLUF4aXMgbGFiZWxcbiAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCAwIC0gKEhFSUdIVC8yKSlcbiAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMWVtXCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieWF4aXMtdGV4dFwiKVxuICAgICAgICAgIC50ZXh0KFwiUG9pbnRzXCIpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgIFxuXG4gICAgICAgICAgLy8gWC1BeGlzIExhYmVsXG4gICAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlIChcIiArIChXSURUSC8yKSArIFwiICxcIiArIChIRUlHSFQgKyBNQVJHSU4udG9wICsgMjUpICsgXCIpXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLnRleHQoXCJUZWFtc1wiKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuIFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFgvWSBheGlzIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zXG4gICAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCBXSURUSF0pLnBhZGRpbmcoMC4yKTtcbiAgICAgICAgICBjb25zdCB4QXhpcyA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7SEVJR0hUfSlgKS5hdHRyKFwiY2xhc3NcIiwgXCJYLWF4aXNcIikuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbSEVJR0hULCAwXSk7XG4gICAgICAgICAgY29uc3QgeUF4aXMgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcIlktYXhpc1wiKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblBvaW50c1RlYW1PbmUsIHRoYXQuc2Vhc29uUG9pbnRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7ICAgIFxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c1RlYW1PbmUsIHRoYXQuc2Vhc29uU2hvdHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Db3JuZXJzVGVhbU9uZSwgdGhhdC5zZWFzb25Db3JuZXJzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lLCB0aGF0LnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lLCB0aGF0LnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25SZWRDYXJkc1RlYW1PbmUsIHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgfSkgXG4gICAgfVxuXG4gICAgdXBkYXRlKGRhdGFUZWFtT25lLCBkYXRhVGVhbVR3bywgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG4gICAgICAvLyBIZWxwZXIgT2JqZWN0c1xuICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgY29uc3QgdGVhbTFTZWFzb24xID0gdGhpcy50ZWFtMSArIFwiIFwiICsgdGhpcy5zZWFzb24xO1xuICAgICAgY29uc3QgdGVhbTJTZWFzb24yID0gdGhpcy50ZWFtMiArIFwiIFwiICsgdGhpcy5zZWFzb24yO1xuICAgICAgZGF0YVt0ZWFtMVNlYXNvbjFdID0gZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV07XG4gICAgICBkYXRhW3RlYW0yU2Vhc29uMl0gPSBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXTtcblxuXG4gICAgICAvLyBVcGRhdGUgWC1BeGlzIHdpdGggdGVhbSBuYW1lc1xuICAgICAgeC5kb21haW4oT2JqZWN0LmtleXMoZGF0YSkubWFwKHRlYW0gPT4gdGVhbSkpXG4gICAgICB4QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgICAvLyBVcGRhdGUgWS1BeGlzIHdpdGggcmVsZXZhbnQgdmFsdWVzXG4gICAgICBkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXSA+PSBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXSA/IHkuZG9tYWluKFswLCBkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXSArIChkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXS8xMCldKSA6IHkuZG9tYWluKFswLCBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXSArIChkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXS8xMCldKVxuICAgICAgeUF4aXMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgICB0aGlzLnN2Zy5zZWxlY3QoXCIueWF4aXMtdGV4dFwiKS50ZXh0KHRpdGxlKTtcbiAgICAgIGNvbnN0IHRlYW1zID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGxldCB1ID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwicmVjdFwiKS5kYXRhKHRlYW1zKTtcblxuICAgICAgdS5qb2luKFwicmVjdFwiKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geChkKSlcbiAgICAgIC5hdHRyKFwieVwiLCBkID0+IHkoZGF0YVtkXSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBkID0+IEhFSUdIVCAtIHkoZGF0YVtkXSkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJibHVlXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJHcmFwaDsiLCJcbmltcG9ydCBMaW5lR3JhcGggZnJvbSAnLi9saW5lR3JhcGgnO1xuaW1wb3J0IEJhckdyYXBoIGZyb20gJy4vYmFyR3JhcGgnO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cblxuY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA2NTAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDU5MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tLFxuVEVBTVMgPSB7dGVhbTE6IFwiXCIsIHRlYW0yOiBcIlwifSxcblNFQVNPTlMgPSB7c2Vhc29uMTogXCJcIiwgc2Vhc29uMjogXCJcIn0sXG5HUkFQSCA9IHtsaW5lOiBmYWxzZSwgYmFyOiBmYWxzZX07XG5cblxuXG4vLyBEb2N1bWVudCBtYW5pcHVsYXRpb24gZm9yIG9uY2hhbmdlIGV2ZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIHNlbGVjdCBtZW51cyBmb3Igc2Vhc29uc1xuICAgIGNvbnN0IHRlYW1PbmVTZWFzb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtc2Vhc29uXCIpXG4gICAgY29uc3QgdGVhbVR3b1NlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1zZWFzb25cIik7XG5cbiAgICAvLyBzZWxlY3QgbWVudXMgZm9yIHRlYW1zXG4gICAgY29uc3QgZmlyc3RUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0xLW5hbWVcIik7XG4gICAgY29uc3Qgc2Vjb25kVGVhbVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMi1uYW1lXCIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50XG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VhcmNoLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBjb21wYXJlQnV0dG9uID0gZDMuc2VsZWN0KFwiLmNvbXBhcmUtYnV0dG9uXCIpXG5cbiAgICAvLyBvbiBjaGFuZ2Ugc2VsZWN0b3IgZXZlbnRzIHRvIHBvcHVsYXRlIHRlYW0gbmFtZXNcbiAgICB0ZWFtT25lU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMS1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0xLW5hbWVcIik7XG4gICAgfVxuXG4gICAgdGVhbVR3b1NlYXNvblNlbGVjdG9yLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWFzb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZW1vdmVUZWFtc0Zyb21TZWFyY2goXCIudGVhbTItbmFtZVwiKTtcbiAgICAgIHBvcHVsYXRlVGVhbVNlbGVjdG9yKHNlYXNvbiwgXCJ0ZWFtMi1uYW1lXCIpO1xuICAgIH1cblxuICAgIGNvbXBhcmVCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXNldEJ1dHRvbihzZWFyY2hGb3JtKTtcbiAgICAgIFxuICAgICAgICBURUFNU1tcInRlYW0xXCJdID0gZmlyc3RUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFRFQU1TW1widGVhbTJcIl0gPSBzZWNvbmRUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24xXCJdID0gdGVhbU9uZVNlYXNvblNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IHRlYW1Ud29TZWFzb25TZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBpZiAoVEVBTVNbXCJ0ZWFtMVwiXSA9PT0gVEVBTVNbXCJ0ZWFtMlwiXSAmJiBTRUFTT05TW1wic2Vhc29uMVwiXSA9PT0gU0VBU09OU1tcInNlYXNvbjJcIl0pe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGRpZmZlcmVudCBzZWFzb25zIGlmIHlvdSB3aXNoIHRvIGNvbXBhcmUgdGhlIHNhbWUgY2x1YiFcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TW1widGVhbTFcIl0sIFNFQVNPTlNbXCJzZWFzb24xXCJdLCBURUFNU1tcInRlYW0yXCJdLCBTRUFTT05TW1wic2Vhc29uMlwiXSk7fVxuICAgIH0pXG4gICAgXG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBvcHRpb25zIGZyb20gc2VsZWN0IGRyb3Bkb3duXG5jb25zdCByZW1vdmVUZWFtc0Zyb21TZWFyY2ggPSBlbGVtZW50ID0+IHtcbiAgICBkMy5zZWxlY3QoZWxlbWVudCkuc2VsZWN0Q2hpbGRyZW4oXCJvcHRpb25cIikucmVtb3ZlKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRlYW0gc2VsZWN0b3JzIGZvciBlYWNoIHNlYXNvblxuY29uc3QgcG9wdWxhdGVUZWFtU2VsZWN0b3IgPSAoc2Vhc29uLCBzZWxlY3RvcikgPT4ge1xuICAgY29uc3QgdGVhbXMgPSBbXTtcbiAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgIHRlYW1zLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wRG93blRlYW0gPSBkMy5zZWxlY3QoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBkcm9wRG93blRlYW0uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRlYW1zKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdvcHRpb24nKVxuICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcImxhYmVsXCIsIGQgPT4ge3JldHVybiBkfSk7XG4gICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgc3ZnIGNoYXJ0XG5jb25zdCByZW1vdmVHcmFwaCA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHJlc2V0IGJ1dHRvbiB0byB0aGUgRE9NIHRvIHJldHVybiB0byB0aGUgc2VhcmNoIGNvbXBvbmVudFxuY29uc3QgcmVzZXRCdXR0b24gPSAoc2VhcmNoRm9ybSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5yZXNldC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoXCJidXR0b25cIikuYXR0cihcImNsYXNzXCIsIFwicmVzZXQtYnV0dG9uXCIpLnRleHQoXCJSZXNldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZW1vdmVHcmFwaCgpO1xuICAgICAgICByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbigpO1xuICAgICAgICByZW1vdmVVcGRhdGVCdXR0b24oKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOLmxlZnQgKyBNQVJHSU4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOLnRvcCArIE1BUkdJTi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTi5sZWZ0ICsgXCIsXCIgKyBNQVJHSU4udG9wICsgXCIpXCIpO1xuXG4gICAgbmV3IEJhckdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEguYmFyID0gdHJ1ZTtcbiAgICBHUkFQSC5saW5lID0gZmFsc2U7XG4gICAgY2hhbmdlR3JhcGhCdXR0b24oKTtcbn1cblxuY29uc3QgY3JlYXRlTGluZUdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIG5ldyBMaW5lR3JhcGgoc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpXG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG5cbiAgICBpZiAoR1JBUEgubGluZSA9PT0gdHJ1ZSAmJiBHUkFQSC5iYXIgPT09IGZhbHNlKXtcbiAgICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFuZ2UtZ3JhcGgtYnV0dG9uXCIpXG4gICAgICAudGV4dChcIkJhciBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKEdSQVBILmJhciA9PT0gdHJ1ZSAmJiBHUkFQSC5saW5lID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJMaW5lIEdyYXBoXCIpXG4gICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgIH0pfVxufVxuIFxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGNoYW5nZSBncmFwaCBidXR0b25cbmNvbnN0IHJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn1cblxuY29uc3QgcmVtb3ZlVXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn0iLCJjb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cblxuIGNsYXNzIExpbmVHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yO1xuICAgICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuXG4gICAgICAgIC8vIERhdGEgT2JqZWN0cyB1c2VkIGluIGdyYXBoIG1ha2luZ1xuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsaXppbmcgb2JqZWN0cyB3aXRoIGRhdGFcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBbXG4gICAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICAgIFwiUmVkIENhcmRzXCJdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFzb25MZW5ndGggPSBbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMyxcbiAgICAgICAgICAxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNlxuICAgICAgICAgICwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF0gIFxuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMX0uY3N2YCksXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjJ9LmNzdmApXG4gICAgICAgIF0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHV0IGRhdGEgb2JqZWN0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBNYXRjaGRheSB2YXJzXG4gICAgICAgICAgICAgIGxldCBtYXRjaDEgPSBkYXRhWzBdW2ldO1xuICAgICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMVxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MSA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgICAgbGV0IHByZXZQb2ludHMxID0gdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzMSA9IHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDEgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMxID0gdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMxID0gdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZDEgPSB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzMSA9IHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMxID0gdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cblxuXG5cbiAgICAgICAgICAgICAgLy8gaGVscGVyIHZhcmlhYmxlcyB0ZWFtIDJcbiAgICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheTIgPSB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzMiA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90czIgPSB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQyID0gdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMyID0gdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMyID0gdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzMiA9IHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzMiA9IHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQyID0gdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkczIgPSB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzMiA9IHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCB0byBwb3B1bGF0ZSBkYXRhIGZvciBmaXJzdCB0ZWFtXG4gICAgICAgICAgICAgIGlmIChtYXRjaDFbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaDFbXCJBd2F5VGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCBmb3Igc2Vjb25kIHRlYW0gZGF0YVxuICAgICAgICAgICAgICBpZiAobWF0Y2gyW1wiSG9tZVRlYW1cIl0gPT09IHRoaXMudGVhbTIpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMl0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMiArIHBhcnNlSW50KG1hdGNoMltcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90c09uVGFyZ2V0MiArIHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2Fsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNDb21taXRlZDIgKyBwYXJzZUludChtYXRjaDJbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlJlZENhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkhSXCJdKV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoMltcIkF3YXlUZWFtXCJdID09PSB0aGlzLnRlYW0yKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMltcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czJdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90czIgKyBwYXJzZUludChtYXRjaDJbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHNPblRhcmdldDIgKyBwYXJzZUludChtYXRjaDJbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGaXJzdEhhbGZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczIgKyAocGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkNvcm5lcnMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2WWVsbG93Q2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZSZWRDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhcGggVGVhbSBMZWdlbmQgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNDUpLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDY1KS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJncmVlblwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoYCR7dGhpcy50ZWFtMX0gJHt0aGlzLnNlYXNvbjF9YCkgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0yfSAke3RoaXMuc2Vhc29uMn1gKSAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvbi1jb250YWluZXJcIikuYXBwZW5kKFwic2VsZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInVwZGF0ZS1idXR0b25cIik7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG4gICAgICAgIC8vIFktQXhpcyBsYWJlbCBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAuYXR0cihcInhcIiwgMCAtIChIRUlHSFQvMikpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICBcbiAgICAgICAgLy8gWC1BeGlzIGxhYmVsXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgICAgbGV0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHgpO1xuXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIEhFSUdIVCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgbGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgIC8vIERyb3Bkb3duIEJ1dHRvbiBPcHRpb25zIHRvIGNoYW5nZSBkYXRhIG91dHB1dFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGF0LnNlYXNvblBvaW50c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpOyAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1PbmUsIHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblJlZENhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9XG5cbiAgICAgdXBkYXRlKGRhdGFUZWFtT25lLCBkYXRhVGVhbVR3bywgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG5cbiAgICAgICAgeC5kb21haW4oWzAsIGQzLm1heCh0aGlzLnNlYXNvbkxlbmd0aCldKTtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgICBsZXQgdGVhbU9uZU1heCA9IGRhdGFUZWFtT25lW3RoaXMudGVhbTFdWzM4XVsxXTtcbiAgICAgICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXVszOF1bMV07XG5cbiAgICAgICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuXG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5ZQXhpc1wiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgICAgICBsZXQgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIilcbiAgICAgICAgbGV0IGxpbmUyID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpXG5cbiAgICAgICAgaWYgKGxpbmUxKXt0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgICAgIGlmIChsaW5lMil7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLnJlbW92ZSgpfVxuXG4gICAgICAgIGxpbmUxID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLmRhdGEoW2RhdGFUZWFtT25lXSwgZCA9PiBkW3RoaXMudGVhbTFdKVxuICAgICAgICBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhVGVhbVR3b10sIGQgPT4gZFt0aGlzLnRlYW0yXSlcblxuICAgICAgICBsaW5lMVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG4gICAgICAgIFxuICAgICAgICBsaW5lMlxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuXG5cbiAgICB9ICAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==