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
    resetButton(searchForm);
    searchForm.style.display = "none";
    TEAMS["team1"] = firstTeamSelector.value;
    TEAMS["team2"] = secondTeamSelector.value;
    SEASONS["season1"] = teamOneSeasonSelector.value;
    SEASONS["season2"] = teamTwoSeasonSelector.value;

    if (TEAMS["team1"] === TEAMS["team2"] && SEASONS["season1"] === SEASONS["season2"]) {
      alert("Please select different seasons if you wish to compare the same club!");
      d3.select('.reset-button-container').selectChildren('button').remove();
      searchForm.style.display = "block";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIkJhckdyYXBoIiwic3ZnIiwidGVhbTEiLCJzZWFzb24xIiwidGVhbTIiLCJzZWFzb24yIiwic2Vhc29uUG9pbnRzVGVhbU9uZSIsInNlYXNvblBvaW50c1RlYW1Ud28iLCJzZWFzb25TaG90c1RlYW1PbmUiLCJzZWFzb25TaG90c1RlYW1Ud28iLCJzZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSIsInNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSIsInNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc1RlYW1PbmUiLCJzZWFzb25Hb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lIiwic2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byIsInNlYXNvbkNvcm5lcnNUZWFtT25lIiwic2Vhc29uQ29ybmVyc1RlYW1Ud28iLCJzZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSIsInNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvIiwic2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSIsInNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28iLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUiLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28iLCJzZWFzb25SZWRDYXJkc1RlYW1PbmUiLCJzZWFzb25SZWRDYXJkc1RlYW1Ud28iLCJzdGF0cyIsInVwZGF0ZSIsImJpbmQiLCJQcm9taXNlIiwiYWxsIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXRjaDEiLCJtYXRjaDIiLCJwYXJzZUludCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsImQiLCJzdHlsZSIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwidGhhdCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSIsImRhdGFUZWFtT25lIiwiZGF0YVRlYW1Ud28iLCJ0aXRsZSIsInRlYW0xU2Vhc29uMSIsInRlYW0yU2Vhc29uMiIsImRvbWFpbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0ZWFtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInRlYW1zIiwidSIsImpvaW4iLCJiYW5kd2lkdGgiLCJURUFNUyIsIlNFQVNPTlMiLCJHUkFQSCIsImxpbmUiLCJiYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZWFtT25lU2Vhc29uU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidGVhbVR3b1NlYXNvblNlbGVjdG9yIiwiZmlyc3RUZWFtU2VsZWN0b3IiLCJzZWNvbmRUZWFtU2VsZWN0b3IiLCJzZWFyY2hGb3JtIiwiY29tcGFyZUJ1dHRvbiIsIm9uY2hhbmdlIiwiZXZlbnQiLCJzZWFzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZVRlYW1zRnJvbVNlYXJjaCIsInBvcHVsYXRlVGVhbVNlbGVjdG9yIiwicmVzZXRCdXR0b24iLCJkaXNwbGF5IiwiYWxlcnQiLCJzZWxlY3RDaGlsZHJlbiIsInJlbW92ZSIsImNyZWF0ZUxpbmVHcmFwaCIsImVsZW1lbnQiLCJzZWxlY3RvciIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJwdXNoIiwiZHJvcERvd25UZWFtIiwicmVtb3ZlR3JhcGgiLCJidXR0b25Db250YWluZXIiLCJyZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbiIsInJlbW92ZVVwZGF0ZUJ1dHRvbiIsImNyZWF0ZUJhckdyYXBoIiwiY2hhbmdlR3JhcGhCdXR0b24iLCJMaW5lR3JhcGgiLCJzZWFzb25MZW5ndGgiLCJwcmV2TWF0Y2hkYXkxIiwicHJldlBvaW50czEiLCJwcmV2U2hvdHMxIiwicHJldlNob3RzT25UYXJnZXQxIiwicHJldkZpcnN0SGFsZkdvYWxzMSIsInByZXZTZWNvbmRIYWxmR29hbHMxIiwicHJldkdvYWxzMSIsInByZXZHb2Fsc0FnYWluc3QxIiwicHJldkNvcm5lcnMxIiwicHJldkZvdWxzQ29tbWl0ZWQxIiwicHJldkZvdWxzQWdhaW5zdDEiLCJwcmV2WWVsbG93Q2FyZHMxIiwicHJldlJlZENhcmRzMSIsInByZXZNYXRjaGRheTIiLCJwcmV2UG9pbnRzMiIsInByZXZTaG90czIiLCJwcmV2U2hvdHNPblRhcmdldDIiLCJwcmV2Rmlyc3RIYWxmR29hbHMyIiwicHJldlNlY29uZEhhbGZHb2FsczIiLCJwcmV2R29hbHMyIiwicHJldkdvYWxzQWdhaW5zdDIiLCJwcmV2Q29ybmVyczIiLCJwcmV2Rm91bHNDb21taXRlZDIiLCJwcmV2Rm91bHNBZ2FpbnN0MiIsInByZXZZZWxsb3dDYXJkczIiLCJwcmV2UmVkQ2FyZHMyIiwic2NhbGUiLCJtYXgiLCJ0ZWFtT25lTWF4IiwidGVhbVR3b01heCIsImxpbmUxIiwibGluZTIiLCJkYXR1bSIsIm1lcmdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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QURVLENBQ1IsVUFBQUYsQ0FBQyxFQUFJO0FBQUMsZUFBT0UsQ0FBQyxDQUFDRixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBaUIsT0FEZixFQUVWTyxDQUZVLENBRVIsVUFBQVAsQ0FBQyxFQUFJO0FBQUMsZUFBT08sQ0FBQyxDQUFDUCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBaUIsT0FGZixDQVJYLEVBV0NKLElBWEQsQ0FXTSxNQVhOLEVBV2MsTUFYZCxFQVlDQSxJQVpELENBWU0sUUFaTixFQVlnQixPQVpoQixFQWFDQSxJQWJELENBYU0sY0FiTixFQWFzQixHQWJ0QjtBQWlCSDs7Ozs7O0FBSVU0RSx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNqWkE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cbmNsYXNzIEJhckdyYXBoe1xuICAgIGNvbnN0cnVjdG9yKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKXtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy50ZWFtMSA9IHRlYW0xO1xuICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yO1xuICAgICAgdGhpcy5zZWFzb24xID0gc2Vhc29uMTtcbiAgICAgIHRoaXMuc2Vhc29uMiA9IHNlYXNvbjI7XG4gICAgICBcbiAgICAgIC8vIERhdGEgT2JqZWN0cyB1c2VkIGluIGdyYXBoIG1ha2luZ1xuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIFxuXG4gICAgICAvLyBJbml0aWFsaXppbmcgb2JqZWN0cyB3aXRoIGRhdGFcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuXG4gICAgICB0aGlzLnN0YXRzID0gW1xuICAgICAgICBcIlBvaW50c1wiLFxuICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICBcIlNob3RzIG9uIFRhcmdldFwiLFxuICAgICAgICBcIkZpcnN0IEhhbGYgR29hbHNcIiwgXG4gICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgIFwiVG90YWwgR29hbHNcIiwgXG4gICAgICAgIFwiR29hbHMgQWdhaW5zdFwiLCBcbiAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICBcIkZvdWxzIENvbW1pdGVkXCIsIFxuICAgICAgICBcIkZvdWxzIEFnYWluc3RcIiwgXG4gICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICBcIlJlZCBDYXJkc1wiXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggcHJvY2Vzc1xuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjF9LmNzdmApLFxuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24yfS5jc3ZgKVxuICAgICAgICBdKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIC8vIExvb3AgdG8gZ28gdGhyb3VnaCBkYXRhIGFuZCBwb3B1bGF0ZSBvdXRwdWQgZGF0YSBvYmplY3RzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBNYXRjaGRheSB2YXJzXG4gICAgICAgICAgICBsZXQgbWF0Y2gxID0gZGF0YVswXVtpXTtcbiAgICAgICAgICAgIGxldCBtYXRjaDIgPSBkYXRhWzFdW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUZWFtIDEgY29uZGl0aW9uYWwgYW5kIExvZ2ljXG4gICAgICAgICAgICBpZiAodGhpcy50ZWFtMSA9PT0gbWF0Y2gxW1wiSG9tZVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gKHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFJcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlYW0xID09PSBtYXRjaDFbXCJBd2F5VGVhbVwiXSl7XG4gICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gxWydGVFInXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBU1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAocGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEFHXCJdKSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQUNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVlcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBUlwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRlYW0gMiBDb25kaXRpb25hbCBhbmQgTG9naWNcbiAgICAgICAgICAgIGlmICh0aGlzLnRlYW0yID09PSBtYXRjaDJbXCJIb21lVGVhbVwiXSl7XG4gICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyWydGVFInXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIU1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAocGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEhHXCJdKSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSENcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFlcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIUlwiXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGVhbTIgPT09IG1hdGNoMltcIkF3YXlUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDJbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBU1RcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IChwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSEZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFSXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEcm9wZG93biBidXR0b24gY3JlYXRpb24gdG8gY2hhbmdlIHN0YXRzXG4gICAgICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvbi1jb250YWluZXJcIikuYXBwZW5kKFwic2VsZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInVwZGF0ZS1idXR0b25cIik7XG4gICAgICAgICAgZHJvcERvd25CdXR0b24uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgICAgLmRhdGEodGhpcy5zdGF0cylcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG4gICAgICAgICAgLy8gWS1BeGlzIGxhYmVsXG4gICAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgMCAtIE1BUkdJTi5sZWZ0IC0gNSlcbiAgICAgICAgICAuYXR0cihcInhcIiwgMCAtIChIRUlHSFQvMikpXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAgICAgICAudGV4dChcIlBvaW50c1wiKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgICBcblxuICAgICAgICAgIC8vIFgtQXhpcyBMYWJlbFxuICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAoV0lEVEgvMikgKyBcIiAsXCIgKyAoSEVJR0hUICsgTUFSR0lOLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC50ZXh0KFwiVGVhbXNcIilcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcbiBcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBYL1kgYXhpcyB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9uc1xuICAgICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgV0lEVEhdKS5wYWRkaW5nKDAuMik7XG4gICAgICAgICAgY29uc3QgeEF4aXMgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke0hFSUdIVH0pYCkuYXR0cihcImNsYXNzXCIsIFwiWC1heGlzXCIpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW0hFSUdIVCwgMF0pO1xuICAgICAgICAgIGNvbnN0IHlBeGlzID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJZLWF4aXNcIikuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNlYXNvblBvaW50c1RlYW1PbmUsIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3bywgXCJQb2ludHNcIiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcblxuICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICBkcm9wRG93bkJ1dHRvbi5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGF0LnNlYXNvblBvaW50c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpOyAgICBcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU2hvdHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNlY29uZCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJHb2FscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkNvcm5lcnNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1PbmUsIHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGb3VscyBDb21taXRlZFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkZvdWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiWWVsbG93IENhcmRzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJSZWQgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblJlZENhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhVGVhbU9uZSwgZGF0YVRlYW1Ud28sIHRpdGxlLCB4LCB4QXhpcywgeSwgeUF4aXMpe1xuICAgICAgLy8gSGVscGVyIE9iamVjdHNcbiAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgIGNvbnN0IHRlYW0xU2Vhc29uMSA9IHRoaXMudGVhbTEgKyBcIiBcIiArIHRoaXMuc2Vhc29uMTtcbiAgICAgIGNvbnN0IHRlYW0yU2Vhc29uMiA9IHRoaXMudGVhbTIgKyBcIiBcIiArIHRoaXMuc2Vhc29uMjtcbiAgICAgIGRhdGFbdGVhbTFTZWFzb24xXSA9IGRhdGFUZWFtT25lW3RoaXMudGVhbTFdO1xuICAgICAgZGF0YVt0ZWFtMlNlYXNvbjJdID0gZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl07XG5cblxuICAgICAgLy8gVXBkYXRlIFgtQXhpcyB3aXRoIHRlYW0gbmFtZXNcbiAgICAgIHguZG9tYWluKE9iamVjdC5rZXlzKGRhdGEpLm1hcCh0ZWFtID0+IHRlYW0pKVxuICAgICAgeEF4aXMuY2FsbChkMy5heGlzQm90dG9tKHgpKTtcblxuICAgICAgLy8gVXBkYXRlIFktQXhpcyB3aXRoIHJlbGV2YW50IHZhbHVlc1xuICAgICAgZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0gPj0gZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0gPyB5LmRvbWFpbihbMCwgZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0gKyAoZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0vMTApXSkgOiB5LmRvbWFpbihbMCwgZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0gKyAoZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0vMTApXSlcbiAgICAgIHlBeGlzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuICAgICAgdGhpcy5zdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSk7XG4gICAgICBjb25zdCB0ZWFtcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBsZXQgdSA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YSh0ZWFtcyk7XG5cbiAgICAgIHUuam9pbihcInJlY3RcIilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHgoZCkpXG4gICAgICAuYXR0cihcInlcIiwgZCA9PiB5KGRhdGFbZF0pKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiBIRUlHSFQgLSB5KGRhdGFbZF0pKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiYmx1ZVwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFyR3JhcGg7IiwiXG5pbXBvcnQgTGluZUdyYXBoIGZyb20gJy4vbGluZUdyYXBoJztcbmltcG9ydCBCYXJHcmFwaCBmcm9tICcuL2JhckdyYXBoJztcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuXG5cbmNvbnN0IE1BUkdJTiA9IHt0b3A6IDMwLCByaWdodDogMzAsIGJvdHRvbTogODAsIGxlZnQ6IDYwfSxcbldJRFRIID0gNjUwIC0gTUFSR0lOLmxlZnQgLSBNQVJHSU4ucmlnaHQsXG5IRUlHSFQgPSA1OTAgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbSxcblRFQU1TID0ge3RlYW0xOiBcIlwiLCB0ZWFtMjogXCJcIn0sXG5TRUFTT05TID0ge3NlYXNvbjE6IFwiXCIsIHNlYXNvbjI6IFwiXCJ9LFxuR1JBUEggPSB7bGluZTogZmFsc2UsIGJhcjogZmFsc2V9O1xuXG5cblxuLy8gRG9jdW1lbnQgbWFuaXB1bGF0aW9uIGZvciBvbmNoYW5nZSBldmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBzZWxlY3QgbWVudXMgZm9yIHNlYXNvbnNcbiAgICBjb25zdCB0ZWFtT25lU2Vhc29uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0xLXNlYXNvblwiKVxuICAgIGNvbnN0IHRlYW1Ud29TZWFzb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTItc2Vhc29uXCIpO1xuXG4gICAgLy8gc2VsZWN0IG1lbnVzIGZvciB0ZWFtc1xuICAgIGNvbnN0IGZpcnN0VGVhbVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMS1uYW1lXCIpO1xuICAgIGNvbnN0IHNlY29uZFRlYW1TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTItbmFtZVwiKTtcblxuICAgIC8vIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNlYXJjaC1jb250YWluZXJcIik7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgY29tcGFyZUJ1dHRvbiA9IGQzLnNlbGVjdChcIi5jb21wYXJlLWJ1dHRvblwiKVxuXG4gICAgLy8gb24gY2hhbmdlIHNlbGVjdG9yIGV2ZW50cyB0byBwb3B1bGF0ZSB0ZWFtIG5hbWVzXG4gICAgdGVhbU9uZVNlYXNvblNlbGVjdG9yLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWFzb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZW1vdmVUZWFtc0Zyb21TZWFyY2goXCIudGVhbTEtbmFtZVwiKTtcbiAgICAgIHBvcHVsYXRlVGVhbVNlbGVjdG9yKHNlYXNvbiwgXCJ0ZWFtMS1uYW1lXCIpO1xuICAgIH1cblxuICAgIHRlYW1Ud29TZWFzb25TZWxlY3Rvci5vbmNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2Vhc29uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoKFwiLnRlYW0yLW5hbWVcIik7XG4gICAgICBwb3B1bGF0ZVRlYW1TZWxlY3RvcihzZWFzb24sIFwidGVhbTItbmFtZVwiKTtcbiAgICB9XG5cbiAgICBjb21wYXJlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXNldEJ1dHRvbihzZWFyY2hGb3JtKTtcbiAgICAgICAgc2VhcmNoRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIFxuICAgICAgICBURUFNU1tcInRlYW0xXCJdID0gZmlyc3RUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFRFQU1TW1widGVhbTJcIl0gPSBzZWNvbmRUZWFtU2VsZWN0b3IudmFsdWU7XG4gICAgICAgIFNFQVNPTlNbXCJzZWFzb24xXCJdID0gdGVhbU9uZVNlYXNvblNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IHRlYW1Ud29TZWFzb25TZWxlY3Rvci52YWx1ZTtcblxuICAgICAgICBpZiAoVEVBTVNbXCJ0ZWFtMVwiXSA9PT0gVEVBTVNbXCJ0ZWFtMlwiXSAmJiBTRUFTT05TW1wic2Vhc29uMVwiXSA9PT0gU0VBU09OU1tcInNlYXNvbjJcIl0pe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGRpZmZlcmVudCBzZWFzb25zIGlmIHlvdSB3aXNoIHRvIGNvbXBhcmUgdGhlIHNhbWUgY2x1YiFcIik7XG4gICAgICAgICAgICBkMy5zZWxlY3QoJy5yZXNldC1idXR0b24tY29udGFpbmVyJykuc2VsZWN0Q2hpbGRyZW4oJ2J1dHRvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc2VhcmNoRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyZWF0ZUxpbmVHcmFwaChURUFNU1tcInRlYW0xXCJdLCBTRUFTT05TW1wic2Vhc29uMVwiXSwgVEVBTVNbXCJ0ZWFtMlwiXSwgU0VBU09OU1tcInNlYXNvbjJcIl0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgXG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBvcHRpb25zIGZyb20gc2VsZWN0IGRyb3Bkb3duXG5jb25zdCByZW1vdmVUZWFtc0Zyb21TZWFyY2ggPSBlbGVtZW50ID0+IHtcbiAgICBkMy5zZWxlY3QoZWxlbWVudCkuc2VsZWN0Q2hpbGRyZW4oXCJvcHRpb25cIikucmVtb3ZlKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRlYW0gc2VsZWN0b3JzIGZvciBlYWNoIHNlYXNvblxuY29uc3QgcG9wdWxhdGVUZWFtU2VsZWN0b3IgPSAoc2Vhc29uLCBzZWxlY3RvcikgPT4ge1xuICAgY29uc3QgdGVhbXMgPSBbXTtcbiAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgIHRlYW1zLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wRG93blRlYW0gPSBkMy5zZWxlY3QoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBkcm9wRG93blRlYW0uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRlYW1zKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdvcHRpb24nKVxuICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcImxhYmVsXCIsIGQgPT4ge3JldHVybiBkfSk7XG4gICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgc3ZnIGNoYXJ0XG5jb25zdCByZW1vdmVHcmFwaCA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHJlc2V0IGJ1dHRvbiB0byB0aGUgRE9NIHRvIHJldHVybiB0byB0aGUgc2VhcmNoIGNvbXBvbmVudFxuY29uc3QgcmVzZXRCdXR0b24gPSAoc2VhcmNoRm9ybSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5yZXNldC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoXCJidXR0b25cIikuYXR0cihcImNsYXNzXCIsIFwicmVzZXQtYnV0dG9uXCIpLnRleHQoXCJSZXNldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZW1vdmVHcmFwaCgpO1xuICAgICAgICByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbigpO1xuICAgICAgICByZW1vdmVVcGRhdGVCdXR0b24oKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOLmxlZnQgKyBNQVJHSU4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOLnRvcCArIE1BUkdJTi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTi5sZWZ0ICsgXCIsXCIgKyBNQVJHSU4udG9wICsgXCIpXCIpO1xuXG4gICAgbmV3IEJhckdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEguYmFyID0gdHJ1ZTtcbiAgICBHUkFQSC5saW5lID0gZmFsc2U7XG4gICAgY2hhbmdlR3JhcGhCdXR0b24oKTtcbn1cblxuY29uc3QgY3JlYXRlTGluZUdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIG5ldyBMaW5lR3JhcGgoc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpXG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG5cbiAgICBpZiAoR1JBUEgubGluZSA9PT0gdHJ1ZSAmJiBHUkFQSC5iYXIgPT09IGZhbHNlKXtcbiAgICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFuZ2UtZ3JhcGgtYnV0dG9uXCIpXG4gICAgICAudGV4dChcIkJhciBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKEdSQVBILmJhciA9PT0gdHJ1ZSAmJiBHUkFQSC5saW5lID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJMaW5lIEdyYXBoXCIpXG4gICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgIH0pfVxufVxuIFxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGNoYW5nZSBncmFwaCBidXR0b25cbmNvbnN0IHJlbW92ZUNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn1cblxuY29uc3QgcmVtb3ZlVXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvblwiKS5yZW1vdmUoKTtcbn0iLCJjb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b207XG5cblxuIGNsYXNzIExpbmVHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpIHtcbiAgICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yO1xuICAgICAgICB0aGlzLnNlYXNvbjEgPSBzZWFzb24xO1xuICAgICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuXG4gICAgICAgIC8vIERhdGEgT2JqZWN0cyB1c2VkIGluIGdyYXBoIG1ha2luZ1xuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsaXppbmcgb2JqZWN0cyB3aXRoIGRhdGFcbiAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBbXG4gICAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgICBcIlNob3RzXCIsIFxuICAgICAgICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJDb3JuZXJzXCIsIFxuICAgICAgICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgICAgICAgIFwiUmVkIENhcmRzXCJdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFzb25MZW5ndGggPSBbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMyxcbiAgICAgICAgICAxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNlxuICAgICAgICAgICwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF0gIFxuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWRpbmcgdXAgZGF0YSBhbmQgY3JlYXRpbmcgZ3JhcGggXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMX0uY3N2YCksXG4gICAgICAgICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHt0aGlzLnNlYXNvbjJ9LmNzdmApXG4gICAgICAgIF0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHV0IGRhdGEgb2JqZWN0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAvLyBNYXRjaGRheSB2YXJzXG4gICAgICAgICAgICAgIGxldCBtYXRjaDEgPSBkYXRhWzBdW2ldO1xuICAgICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMVxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MSA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgICAgbGV0IHByZXZQb2ludHMxID0gdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzMSA9IHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDEgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FsczEgPSB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMxID0gdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMxID0gdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZDEgPSB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QxID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzMSA9IHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMxID0gdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cblxuXG5cbiAgICAgICAgICAgICAgLy8gaGVscGVyIHZhcmlhYmxlcyB0ZWFtIDJcbiAgICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheTIgPSB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzMiA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90czIgPSB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQyID0gdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMyID0gdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMyID0gdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzMiA9IHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzMiA9IHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQyID0gdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0MiA9IHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkczIgPSB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzMiA9IHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCB0byBwb3B1bGF0ZSBkYXRhIGZvciBmaXJzdCB0ZWFtXG4gICAgICAgICAgICAgIGlmIChtYXRjaDFbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaDFbXCJBd2F5VGVhbVwiXSA9PT0gdGhpcy50ZWFtMSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZQb2ludHMxICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNob3RzT25UYXJnZXQxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMxICsgKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZDb3JuZXJzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMSArIHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQWdhaW5zdDEgKyBwYXJzZUludChtYXRjaDFbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlllbGxvd0NhcmRzMSArIHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UmVkQ2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBDb25kaXRpb25hbCBmb3Igc2Vjb25kIHRlYW0gZGF0YVxuICAgICAgICAgICAgICBpZiAobWF0Y2gyW1wiSG9tZVRlYW1cIl0gPT09IHRoaXMudGVhbTIpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMl0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMiArIHBhcnNlSW50KG1hdGNoMltcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90c09uVGFyZ2V0MiArIHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2Fsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNDb21taXRlZDIgKyBwYXJzZUludChtYXRjaDJbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlJlZENhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkhSXCJdKV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoMltcIkF3YXlUZWFtXCJdID09PSB0aGlzLnRlYW0yKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMltcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czJdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90czIgKyBwYXJzZUludChtYXRjaDJbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHNPblRhcmdldDIgKyBwYXJzZUludChtYXRjaDJbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGaXJzdEhhbGZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczIgKyAocGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkNvcm5lcnMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQyICsgcGFyc2VJbnQobWF0Y2gyW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2WWVsbG93Q2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZSZWRDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhcGggVGVhbSBMZWdlbmQgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNDUpLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDY1KS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJncmVlblwiKSAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoYCR7dGhpcy50ZWFtMX0gJHt0aGlzLnNlYXNvbjF9YCkgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0yfSAke3RoaXMuc2Vhc29uMn1gKSAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbiBjcmVhdGlvbiB0byBjaGFuZ2Ugc3RhdHNcbiAgICAgICAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkMy5zZWxlY3QoXCIudXBkYXRlLWJ1dHRvbi1jb250YWluZXJcIikuYXBwZW5kKFwic2VsZWN0XCIpLmF0dHIoXCJjbGFzc1wiLCBcInVwZGF0ZS1idXR0b25cIik7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAuZGF0YSh0aGlzLnN0YXRzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGQgPT4ge3JldHVybiBkfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG4gICAgICAgIC8vIFktQXhpcyBsYWJlbCBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAwIC0gTUFSR0lOLmxlZnQgLSA1KVxuICAgICAgICAuYXR0cihcInhcIiwgMCAtIChIRUlHSFQvMikpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICBcbiAgICAgICAgLy8gWC1BeGlzIGxhYmVsXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIFdJRFRIXSlcbiAgICAgICAgbGV0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHgpO1xuXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIEhFSUdIVCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgbGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvLCBcIlBvaW50c1wiLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuXG4gICAgICAgIC8vIERyb3Bkb3duIEJ1dHRvbiBPcHRpb25zIHRvIGNoYW5nZSBkYXRhIG91dHB1dFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGF0LnNlYXNvblBvaW50c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpOyAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1PbmUsIHRoYXQuc2Vhc29uQ29ybmVyc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblJlZENhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9XG5cbiAgICAgdXBkYXRlKGRhdGFUZWFtT25lLCBkYXRhVGVhbVR3bywgdGl0bGUsIHgsIHhBeGlzLCB5LCB5QXhpcyl7XG5cbiAgICAgICAgeC5kb21haW4oWzAsIGQzLm1heCh0aGlzLnNlYXNvbkxlbmd0aCldKTtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgICBsZXQgdGVhbU9uZU1heCA9IGRhdGFUZWFtT25lW3RoaXMudGVhbTFdWzM4XVsxXTtcbiAgICAgICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXVszOF1bMV07XG5cbiAgICAgICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuXG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5ZQXhpc1wiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgICAgICBsZXQgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIilcbiAgICAgICAgbGV0IGxpbmUyID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpXG5cbiAgICAgICAgaWYgKGxpbmUxKXt0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgICAgIGlmIChsaW5lMil7dGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLnJlbW92ZSgpfVxuXG4gICAgICAgIGxpbmUxID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLmRhdGEoW2RhdGFUZWFtT25lXSwgZCA9PiBkW3RoaXMudGVhbTFdKVxuICAgICAgICBsaW5lMiA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhVGVhbVR3b10sIGQgPT4gZFt0aGlzLnRlYW0yXSlcblxuICAgICAgICBsaW5lMVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG4gICAgICAgIFxuICAgICAgICBsaW5lMlxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuZGF0dW0oZGF0YVRlYW1Ud29bdGhpcy50ZWFtMl0pXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMVwiKVxuICAgICAgICAubWVyZ2UobGluZTEpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pOyB9KSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuXG5cbiAgICB9ICAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==