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
    } else if (TEAMS["team1"] === "" || TEAMS['team2'] === "") {
      alert("Please select two Teams!");
      d3.select('.reset-button-container').selectChildren('button').remove();
      searchForm.style.display = "block";
    } else {
      createLineGraph(TEAMS["team1"], SEASONS["season1"], TEAMS["team2"], SEASONS["season2"]);
      populateLogos(TEAMS["team1"], TEAMS["team2"]);
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
    deleteLogos();
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
}; // functions to remove change graph button and update button


var removeChangeGraphButton = function removeChangeGraphButton() {
  d3.select(".change-graph-button").remove();
};

var removeUpdateButton = function removeUpdateButton() {
  d3.select(".update-button").remove();
};

var populateLogos = function populateLogos(team1, team2) {
  var container = d3.select(".team-logos-container");
  container.append("img").attr("src", "https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/assets/team_logos/".concat(team1, ".png")).transition().duration(1000);
  container.append("text").text("VS");
  container.append("img").attr("src", "https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/assets/team_logos/".concat(team2, ".png")).transition().duration(1000);
};

var deleteLogos = function deleteLogos() {
  d3.select(".team-logos-container").selectChildren("img").remove();
  d3.select(".team-logos-container").selectChildren("text").remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGluZUdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJNQVJHSU4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJXSURUSCIsIkhFSUdIVCIsIkJhckdyYXBoIiwic3ZnIiwidGVhbTEiLCJzZWFzb24xIiwidGVhbTIiLCJzZWFzb24yIiwic2Vhc29uUG9pbnRzVGVhbU9uZSIsInNlYXNvblBvaW50c1RlYW1Ud28iLCJzZWFzb25TaG90c1RlYW1PbmUiLCJzZWFzb25TaG90c1RlYW1Ud28iLCJzZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSIsInNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lIiwic2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSIsInNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc1RlYW1PbmUiLCJzZWFzb25Hb2Fsc1RlYW1Ud28iLCJzZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lIiwic2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byIsInNlYXNvbkNvcm5lcnNUZWFtT25lIiwic2Vhc29uQ29ybmVyc1RlYW1Ud28iLCJzZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSIsInNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvIiwic2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSIsInNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28iLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUiLCJzZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28iLCJzZWFzb25SZWRDYXJkc1RlYW1PbmUiLCJzZWFzb25SZWRDYXJkc1RlYW1Ud28iLCJzdGF0cyIsInVwZGF0ZSIsImJpbmQiLCJQcm9taXNlIiwiYWxsIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXRjaDEiLCJtYXRjaDIiLCJwYXJzZUludCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsImQiLCJzdHlsZSIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwidGhhdCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSIsImRhdGFUZWFtT25lIiwiZGF0YVRlYW1Ud28iLCJ0aXRsZSIsInRlYW0xU2Vhc29uMSIsInRlYW0yU2Vhc29uMiIsImRvbWFpbiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0ZWFtIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInRlYW1zIiwidSIsImpvaW4iLCJiYW5kd2lkdGgiLCJURUFNUyIsIlNFQVNPTlMiLCJHUkFQSCIsImxpbmUiLCJiYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZWFtT25lU2Vhc29uU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidGVhbVR3b1NlYXNvblNlbGVjdG9yIiwiZmlyc3RUZWFtU2VsZWN0b3IiLCJzZWNvbmRUZWFtU2VsZWN0b3IiLCJzZWFyY2hGb3JtIiwiY29tcGFyZUJ1dHRvbiIsIm9uY2hhbmdlIiwiZXZlbnQiLCJzZWFzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZVRlYW1zRnJvbVNlYXJjaCIsInBvcHVsYXRlVGVhbVNlbGVjdG9yIiwicmVzZXRCdXR0b24iLCJkaXNwbGF5IiwiYWxlcnQiLCJzZWxlY3RDaGlsZHJlbiIsInJlbW92ZSIsImNyZWF0ZUxpbmVHcmFwaCIsInBvcHVsYXRlTG9nb3MiLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJtYXRjaGRheSIsImluY2x1ZGVzIiwicHVzaCIsImRyb3BEb3duVGVhbSIsInJlbW92ZUdyYXBoIiwiYnV0dG9uQ29udGFpbmVyIiwicmVtb3ZlQ2hhbmdlR3JhcGhCdXR0b24iLCJyZW1vdmVVcGRhdGVCdXR0b24iLCJkZWxldGVMb2dvcyIsImNyZWF0ZUJhckdyYXBoIiwiY2hhbmdlR3JhcGhCdXR0b24iLCJMaW5lR3JhcGgiLCJjb250YWluZXIiLCJzZWFzb25MZW5ndGgiLCJwcmV2TWF0Y2hkYXkxIiwicHJldlBvaW50czEiLCJwcmV2U2hvdHMxIiwicHJldlNob3RzT25UYXJnZXQxIiwicHJldkZpcnN0SGFsZkdvYWxzMSIsInByZXZTZWNvbmRIYWxmR29hbHMxIiwicHJldkdvYWxzMSIsInByZXZHb2Fsc0FnYWluc3QxIiwicHJldkNvcm5lcnMxIiwicHJldkZvdWxzQ29tbWl0ZWQxIiwicHJldkZvdWxzQWdhaW5zdDEiLCJwcmV2WWVsbG93Q2FyZHMxIiwicHJldlJlZENhcmRzMSIsInByZXZNYXRjaGRheTIiLCJwcmV2UG9pbnRzMiIsInByZXZTaG90czIiLCJwcmV2U2hvdHNPblRhcmdldDIiLCJwcmV2Rmlyc3RIYWxmR29hbHMyIiwicHJldlNlY29uZEhhbGZHb2FsczIiLCJwcmV2R29hbHMyIiwicHJldkdvYWxzQWdhaW5zdDIiLCJwcmV2Q29ybmVyczIiLCJwcmV2Rm91bHNDb21taXRlZDIiLCJwcmV2Rm91bHNBZ2FpbnN0MiIsInByZXZZZWxsb3dDYXJkczIiLCJwcmV2UmVkQ2FyZHMyIiwic2NhbGUiLCJtYXgiLCJ0ZWFtT25lTWF4IiwidGVhbVR3b01heCIsImxpbmUxIiwibGluZTIiLCJkYXR1bSIsIm1lcmdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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Q0FLT0gsS0FMUCxFQU1DakYsVUFORCxHQU9DQyxRQVBELENBT1UsSUFQVixFQVFDL0IsSUFSRCxDQVFNLEdBUk4sRUFRV1osRUFBRSxDQUFDb0QsSUFBSCxHQUNWbEMsQ0FEVSxDQUNSLFVBQUFGLENBQUMsRUFBSTtBQUFDLGVBQU9FLENBQUMsQ0FBQ0YsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFSO0FBQWlCLE9BRGYsRUFFVk8sQ0FGVSxDQUVSLFVBQUFQLENBQUMsRUFBSTtBQUFDLGVBQU9PLENBQUMsQ0FBQ1AsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFSO0FBQWlCLE9BRmYsQ0FSWCxFQVdDSixJQVhELENBV00sTUFYTixFQVdjLE1BWGQsRUFZQ0EsSUFaRCxDQVlNLFFBWk4sRUFZZ0IsT0FaaEIsRUFhQ0EsSUFiRCxDQWFNLGNBYk4sRUFhc0IsR0FidEI7QUFpQkg7Ozs7OztBQUlVOEUsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDalpBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTUFSR0lOID0ge3RvcDogMzAsIHJpZ2h0OiAzMCwgYm90dG9tOiA4MCwgbGVmdDogNjB9LFxuV0lEVEggPSA2NTAgLSBNQVJHSU4ubGVmdCAtIE1BUkdJTi5yaWdodCxcbkhFSUdIVCA9IDU5MCAtIE1BUkdJTi50b3AgLSBNQVJHSU4uYm90dG9tO1xuXG5jbGFzcyBCYXJHcmFwaHtcbiAgICBjb25zdHJ1Y3RvcihzdmcsIHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMil7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMTtcbiAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMjtcbiAgICAgIHRoaXMuc2Vhc29uMSA9IHNlYXNvbjE7XG4gICAgICB0aGlzLnNlYXNvbjIgPSBzZWFzb24yO1xuICAgICAgXG4gICAgICAvLyBEYXRhIE9iamVjdHMgdXNlZCBpbiBncmFwaCBtYWtpbmdcbiAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblNob3RzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3byA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUgPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvID0ge307XG4gICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZSA9IHt9O1xuICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28gPSB7fTtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lID0ge307XG4gICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3byA9IHt9O1xuICAgICAgICBcblxuICAgICAgLy8gSW5pdGlhbGl6aW5nIG9iamVjdHMgd2l0aCBkYXRhXG4gICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSA9IDA7XG4gICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSAwO1xuICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdID0gMDtcbiAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gMDtcblxuICAgICAgdGhpcy5zdGF0cyA9IFtcbiAgICAgICAgXCJQb2ludHNcIixcbiAgICAgICAgXCJTaG90c1wiLCBcbiAgICAgICAgXCJTaG90cyBvbiBUYXJnZXRcIixcbiAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICBcIlNlY29uZCBIYWxmIEdvYWxzXCIsIFxuICAgICAgICBcIlRvdGFsIEdvYWxzXCIsIFxuICAgICAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgICAgIFwiQ29ybmVyc1wiLCBcbiAgICAgICAgXCJGb3VscyBDb21taXRlZFwiLCBcbiAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgICAgICBcIlllbGxvdyBDYXJkc1wiLCBcbiAgICAgICAgXCJSZWQgQ2FyZHNcIl07XG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBMb2FkaW5nIHVwIGRhdGEgYW5kIGNyZWF0aW5nIGdyYXBoIHByb2Nlc3NcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24xfS5jc3ZgKSxcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMn0uY3N2YClcbiAgICAgICAgXSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAvLyBMb29wIHRvIGdvIHRocm91Z2ggZGF0YSBhbmQgcG9wdWxhdGUgb3V0cHVkIGRhdGEgb2JqZWN0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gTWF0Y2hkYXkgdmFyc1xuICAgICAgICAgICAgbGV0IG1hdGNoMSA9IGRhdGFbMF1baV07XG4gICAgICAgICAgICBsZXQgbWF0Y2gyID0gZGF0YVsxXVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGVhbSAxIGNvbmRpdGlvbmFsIGFuZCBMb2dpY1xuICAgICAgICAgICAgaWYgKHRoaXMudGVhbTEgPT09IG1hdGNoMVtcIkhvbWVUZWFtXCJdKXtcbiAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDFbJ0ZUUiddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhTXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIU1RcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IChwYXJzZUludChtYXRjaDFbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoMVtcIkhUSEdcIl0pKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiSEZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIWVwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhSXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZWFtMSA9PT0gbWF0Y2gxW1wiQXdheVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkhUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gKHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2gxW1wiSFRBR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSArPSBwYXJzZUludChtYXRjaDFbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdICs9IHBhcnNlSW50KG1hdGNoMVtcIkFZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gKz0gcGFyc2VJbnQobWF0Y2gxW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUZWFtIDIgQ29uZGl0aW9uYWwgYW5kIExvZ2ljXG4gICAgICAgICAgICBpZiAodGhpcy50ZWFtMiA9PT0gbWF0Y2gyW1wiSG9tZVRlYW1cIl0pe1xuICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMlsnRlRSJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhTVFwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhUSEdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gKHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhDXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJIRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBRlwiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhZXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFJcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRlYW0yID09PSBtYXRjaDJbXCJBd2F5VGVhbVwiXSl7XG4gICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyWydGVFInXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBU1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVNUXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSAocGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDJbXCJIVEFHXCJdKSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQUNcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkFGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdICs9IHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKTtcbiAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gKz0gcGFyc2VJbnQobWF0Y2gyW1wiQVlcIl0pO1xuICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXSArPSBwYXJzZUludChtYXRjaDJbXCJBUlwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRHJvcGRvd24gYnV0dG9uIGNyZWF0aW9uIHRvIGNoYW5nZSBzdGF0c1xuICAgICAgICAgIGNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiLnVwZGF0ZS1idXR0b24tY29udGFpbmVyXCIpLmFwcGVuZChcInNlbGVjdFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJ1cGRhdGUtYnV0dG9uXCIpO1xuICAgICAgICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgICAgICAgIC5kYXRhKHRoaXMuc3RhdHMpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KTtcblxuICAgICAgICAgIC8vIFktQXhpcyBsYWJlbFxuICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIDAgLSBNQVJHSU4ubGVmdCAtIDUpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIDAgLSAoSEVJR0hULzIpKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5YXhpcy10ZXh0XCIpXG4gICAgICAgICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICAgXG5cbiAgICAgICAgICAvLyBYLUF4aXMgTGFiZWxcbiAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUgKFwiICsgKFdJRFRILzIpICsgXCIgLFwiICsgKEhFSUdIVCArIE1BUkdJTi50b3AgKyAyNSkgKyBcIilcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAudGV4dChcIlRlYW1zXCIpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gWC9ZIGF4aXMgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnNcbiAgICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIFdJRFRIXSkucGFkZGluZygwLjIpO1xuICAgICAgICAgIGNvbnN0IHhBeGlzID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtIRUlHSFR9KWApLmF0dHIoXCJjbGFzc1wiLCBcIlgtYXhpc1wiKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuICAgICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtIRUlHSFQsIDBdKTtcbiAgICAgICAgICBjb25zdCB5QXhpcyA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiWS1heGlzXCIpLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG4gICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud28sIFwiUG9pbnRzXCIsIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG5cbiAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgZHJvcERvd25CdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJQb2ludHNcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uUG9pbnRzVGVhbU9uZSwgdGhhdC5zZWFzb25Qb2ludHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTsgICAgXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzVGVhbU9uZSwgdGhhdC5zZWFzb25TaG90c1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmUsIHRoYXQuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lLCB0aGF0LnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkNvcm5lcnNUZWFtT25lLCB0aGF0LnNlYXNvbkNvcm5lcnNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmUsIHRoYXQuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmUsIHRoYXQuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUsIHRoYXQuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblJlZENhcmRzVGVhbU9uZSwgdGhhdC5zZWFzb25SZWRDYXJkc1RlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YVRlYW1PbmUsIGRhdGFUZWFtVHdvLCB0aXRsZSwgeCwgeEF4aXMsIHksIHlBeGlzKXtcbiAgICAgIC8vIEhlbHBlciBPYmplY3RzXG4gICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICBjb25zdCB0ZWFtMVNlYXNvbjEgPSB0aGlzLnRlYW0xICsgXCIgXCIgKyB0aGlzLnNlYXNvbjE7XG4gICAgICBjb25zdCB0ZWFtMlNlYXNvbjIgPSB0aGlzLnRlYW0yICsgXCIgXCIgKyB0aGlzLnNlYXNvbjI7XG4gICAgICBkYXRhW3RlYW0xU2Vhc29uMV0gPSBkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXTtcbiAgICAgIGRhdGFbdGVhbTJTZWFzb24yXSA9IGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdO1xuXG5cbiAgICAgIC8vIFVwZGF0ZSBYLUF4aXMgd2l0aCB0ZWFtIG5hbWVzXG4gICAgICB4LmRvbWFpbihPYmplY3Qua2V5cyhkYXRhKS5tYXAodGVhbSA9PiB0ZWFtKSlcbiAgICAgIHhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBZLUF4aXMgd2l0aCByZWxldmFudCB2YWx1ZXNcbiAgICAgIGRhdGFUZWFtT25lW3RoaXMudGVhbTFdID49IGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdID8geS5kb21haW4oWzAsIGRhdGFUZWFtT25lW3RoaXMudGVhbTFdICsgKGRhdGFUZWFtT25lW3RoaXMudGVhbTFdLzEwKV0pIDogeS5kb21haW4oWzAsIGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdICsgKGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdLzEwKV0pXG4gICAgICB5QXhpcy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAgIHRoaXMuc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpO1xuICAgICAgY29uc3QgdGVhbXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgbGV0IHUgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEodGVhbXMpO1xuXG4gICAgICB1LmpvaW4oXCJyZWN0XCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB4KGQpKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4gSEVJR0hUIC0geShkYXRhW2RdKSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImJsdWVcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhckdyYXBoOyIsIlxuaW1wb3J0IExpbmVHcmFwaCBmcm9tICcuL2xpbmVHcmFwaCc7XG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnLi9iYXJHcmFwaCc7XG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuXG5jb25zdCBNQVJHSU4gPSB7dG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDgwLCBsZWZ0OiA2MH0sXG5XSURUSCA9IDY1MCAtIE1BUkdJTi5sZWZ0IC0gTUFSR0lOLnJpZ2h0LFxuSEVJR0hUID0gNTkwIC0gTUFSR0lOLnRvcCAtIE1BUkdJTi5ib3R0b20sXG5URUFNUyA9IHt0ZWFtMTogXCJcIiwgdGVhbTI6IFwiXCJ9LFxuU0VBU09OUyA9IHtzZWFzb24xOiBcIlwiLCBzZWFzb24yOiBcIlwifSxcbkdSQVBIID0ge2xpbmU6IGZhbHNlLCBiYXI6IGZhbHNlfTtcblxuXG5cbi8vIERvY3VtZW50IG1hbmlwdWxhdGlvbiBmb3Igb25jaGFuZ2UgZXZlbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gc2VsZWN0IG1lbnVzIGZvciBzZWFzb25zXG4gICAgY29uc3QgdGVhbU9uZVNlYXNvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC50ZWFtMS1zZWFzb25cIilcbiAgICBjb25zdCB0ZWFtVHdvU2Vhc29uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLXNlYXNvblwiKTtcblxuICAgIC8vIHNlbGVjdCBtZW51cyBmb3IgdGVhbXNcbiAgICBjb25zdCBmaXJzdFRlYW1TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGVhbTEtbmFtZVwiKTtcbiAgICBjb25zdCBzZWNvbmRUZWFtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRlYW0yLW5hbWVcIik7XG5cbiAgICAvLyBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zZWFyY2gtY29udGFpbmVyXCIpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGNvbXBhcmVCdXR0b24gPSBkMy5zZWxlY3QoXCIuY29tcGFyZS1idXR0b25cIilcblxuICAgIC8vIG9uIGNoYW5nZSBzZWxlY3RvciBldmVudHMgdG8gcG9wdWxhdGUgdGVhbSBuYW1lc1xuICAgIHRlYW1PbmVTZWFzb25TZWxlY3Rvci5vbmNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2Vhc29uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgcmVtb3ZlVGVhbXNGcm9tU2VhcmNoKFwiLnRlYW0xLW5hbWVcIik7XG4gICAgICBwb3B1bGF0ZVRlYW1TZWxlY3RvcihzZWFzb24sIFwidGVhbTEtbmFtZVwiKTtcbiAgICB9XG5cbiAgICB0ZWFtVHdvU2Vhc29uU2VsZWN0b3Iub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNlYXNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJlbW92ZVRlYW1zRnJvbVNlYXJjaChcIi50ZWFtMi1uYW1lXCIpO1xuICAgICAgcG9wdWxhdGVUZWFtU2VsZWN0b3Ioc2Vhc29uLCBcInRlYW0yLW5hbWVcIik7XG4gICAgfVxuXG4gICAgY29tcGFyZUJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmVzZXRCdXR0b24oc2VhcmNoRm9ybSk7XG4gICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgVEVBTVNbXCJ0ZWFtMVwiXSA9IGZpcnN0VGVhbVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gc2Vjb25kVGVhbVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMVwiXSA9IHRlYW1PbmVTZWFzb25TZWxlY3Rvci52YWx1ZTtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjJcIl0gPSB0ZWFtVHdvU2Vhc29uU2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgaWYgKFRFQU1TW1widGVhbTFcIl0gPT09IFRFQU1TW1widGVhbTJcIl0gJiYgU0VBU09OU1tcInNlYXNvbjFcIl0gPT09IFNFQVNPTlNbXCJzZWFzb24yXCJdKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBkaWZmZXJlbnQgc2Vhc29ucyBpZiB5b3Ugd2lzaCB0byBjb21wYXJlIHRoZSBzYW1lIGNsdWIhXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcucmVzZXQtYnV0dG9uLWNvbnRhaW5lcicpLnNlbGVjdENoaWxkcmVuKCdidXR0b24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIGlmIChURUFNU1tcInRlYW0xXCJdID09PSBcIlwiIHx8IFRFQU1TWyd0ZWFtMiddID09PSBcIlwiKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCB0d28gVGVhbXMhXCIpO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcucmVzZXQtYnV0dG9uLWNvbnRhaW5lcicpLnNlbGVjdENoaWxkcmVuKCdidXR0b24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcmVhdGVMaW5lR3JhcGgoVEVBTVNbXCJ0ZWFtMVwiXSwgU0VBU09OU1tcInNlYXNvbjFcIl0sIFRFQU1TW1widGVhbTJcIl0sIFNFQVNPTlNbXCJzZWFzb24yXCJdKTtcbiAgICAgICAgICBwb3B1bGF0ZUxvZ29zKFRFQU1TW1widGVhbTFcIl0sIFRFQU1TW1widGVhbTJcIl0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgXG59KVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBvcHRpb25zIGZyb20gc2VsZWN0IGRyb3Bkb3duXG5jb25zdCByZW1vdmVUZWFtc0Zyb21TZWFyY2ggPSBlbGVtZW50ID0+IHtcbiAgICBkMy5zZWxlY3QoZWxlbWVudCkuc2VsZWN0Q2hpbGRyZW4oXCJvcHRpb25cIikucmVtb3ZlKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIHRlYW0gc2VsZWN0b3JzIGZvciBlYWNoIHNlYXNvblxuY29uc3QgcG9wdWxhdGVUZWFtU2VsZWN0b3IgPSAoc2Vhc29uLCBzZWxlY3RvcikgPT4ge1xuICAgY29uc3QgdGVhbXMgPSBbXTtcbiAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgIHRlYW1zLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICB0ZWFtcy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wRG93blRlYW0gPSBkMy5zZWxlY3QoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBkcm9wRG93blRlYW0uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRlYW1zKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdvcHRpb24nKVxuICAgICAgICAudGV4dChkID0+IHtyZXR1cm4gZH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcImxhYmVsXCIsIGQgPT4ge3JldHVybiBkfSk7XG4gICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgc3ZnIGNoYXJ0XG5jb25zdCByZW1vdmVHcmFwaCA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHJlc2V0IGJ1dHRvbiB0byB0aGUgRE9NIHRvIHJldHVybiB0byB0aGUgc2VhcmNoIGNvbXBvbmVudFxuY29uc3QgcmVzZXRCdXR0b24gPSAoc2VhcmNoRm9ybSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5yZXNldC1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoXCJidXR0b25cIikuYXR0cihcImNsYXNzXCIsIFwicmVzZXQtYnV0dG9uXCIpLnRleHQoXCJSZXNldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICByZW1vdmVHcmFwaCgpO1xuICAgICAgICByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbigpO1xuICAgICAgICByZW1vdmVVcGRhdGVCdXR0b24oKTtcbiAgICAgICAgZGVsZXRlTG9nb3MoKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnNlbGVjdENoaWxkcmVuKFwiYnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIFRFQU1TW1widGVhbTFcIl0gPSBcIlwiO1xuICAgICAgICBURUFNU1tcInRlYW0yXCJdID0gXCJcIjtcbiAgICAgICAgU0VBU09OU1tcInNlYXNvbjFcIl0gPSBcIlwiO1xuICAgICAgICBTRUFTT05TW1wic2Vhc29uMlwiXSA9IFwiXCI7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGdyYXBoc1xuY29uc3QgY3JlYXRlQmFyR3JhcGggPSAodGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIICsgTUFSR0lOLmxlZnQgKyBNQVJHSU4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgSEVJR0hUICsgTUFSR0lOLnRvcCArIE1BUkdJTi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTi5sZWZ0ICsgXCIsXCIgKyBNQVJHSU4udG9wICsgXCIpXCIpO1xuXG4gICAgbmV3IEJhckdyYXBoKHN2ZywgdGVhbTEsIHNlYXNvbjEsIHRlYW0yLCBzZWFzb24yKVxuXG4gICAgR1JBUEguYmFyID0gdHJ1ZTtcbiAgICBHUkFQSC5saW5lID0gZmFsc2U7XG4gICAgY2hhbmdlR3JhcGhCdXR0b24oKTtcbn1cblxuY29uc3QgY3JlYXRlTGluZUdyYXBoID0gKHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikgPT4ge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI3N2Zy1jb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCBXSURUSCArIE1BUkdJTi5sZWZ0ICsgTUFSR0lOLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCArIE1BUkdJTi50b3AgKyBNQVJHSU4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU4ubGVmdCArIFwiLFwiICsgTUFSR0lOLnRvcCArIFwiKVwiKTtcblxuICAgIG5ldyBMaW5lR3JhcGgoc3ZnLCB0ZWFtMSwgc2Vhc29uMSwgdGVhbTIsIHNlYXNvbjIpXG5cbiAgICBHUkFQSC5saW5lID0gdHJ1ZTtcbiAgICBHUkFQSC5iYXIgPSBmYWxzZTsgIFxuICAgIGNoYW5nZUdyYXBoQnV0dG9uKCk7XG5cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBncmFwaCB0byBlaXRoZXIgbGluZSBncmFwaCBvciBiYXIgZ3JhcGhcbmNvbnN0IGNoYW5nZUdyYXBoQnV0dG9uID0gKCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJidXR0b25cIikucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVXBkYXRlQnV0dG9uKCk7XG5cbiAgICBpZiAoR1JBUEgubGluZSA9PT0gdHJ1ZSAmJiBHUkFQSC5iYXIgPT09IGZhbHNlKXtcbiAgICAgIGQzLnNlbGVjdChcIi5jaGFuZ2UtZ3JhcGgtdHlwZS1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFuZ2UtZ3JhcGgtYnV0dG9uXCIpXG4gICAgICAudGV4dChcIkJhciBHcmFwaFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKEdSQVBILmJhciA9PT0gdHJ1ZSAmJiBHUkFQSC5saW5lID09PSBmYWxzZSl7XG4gICAgICBkMy5zZWxlY3QoXCIuY2hhbmdlLWdyYXBoLXR5cGUtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbmdlLWdyYXBoLWJ1dHRvblwiKVxuICAgICAgLnRleHQoXCJMaW5lIEdyYXBoXCIpXG4gICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY3JlYXRlTGluZUdyYXBoKFRFQU1TLnRlYW0xLCBTRUFTT05TLnNlYXNvbjEsIFRFQU1TLnRlYW0yLCBTRUFTT05TLnNlYXNvbjIpO1xuICAgIH0pfVxufVxuIFxuLy8gZnVuY3Rpb25zIHRvIHJlbW92ZSBjaGFuZ2UgZ3JhcGggYnV0dG9uIGFuZCB1cGRhdGUgYnV0dG9uXG5jb25zdCByZW1vdmVDaGFuZ2VHcmFwaEJ1dHRvbiA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwiLmNoYW5nZS1ncmFwaC1idXR0b25cIikucmVtb3ZlKCk7XG59XG5cbmNvbnN0IHJlbW92ZVVwZGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwiLnVwZGF0ZS1idXR0b25cIikucmVtb3ZlKCk7XG59XG5cblxuY29uc3QgcG9wdWxhdGVMb2dvcyA9ICh0ZWFtMSwgdGVhbTIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZDMuc2VsZWN0KFwiLnRlYW0tbG9nb3MtY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKFwiaW1nXCIpLmF0dHIoXCJzcmNcIiwgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vYXNzZXRzL3RlYW1fbG9nb3MvJHt0ZWFtMX0ucG5nYCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApO1xuICBjb250YWluZXIuYXBwZW5kKFwidGV4dFwiKS50ZXh0KFwiVlNcIilcbiAgY29udGFpbmVyLmFwcGVuZChcImltZ1wiKS5hdHRyKFwic3JjXCIsIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2Fzc2V0cy90ZWFtX2xvZ29zLyR7dGVhbTJ9LnBuZ2ApLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKTtcblxufVxuXG5jb25zdCBkZWxldGVMb2dvcyA9ICgpID0+IHtcbiAgZDMuc2VsZWN0KFwiLnRlYW0tbG9nb3MtY29udGFpbmVyXCIpLnNlbGVjdENoaWxkcmVuKFwiaW1nXCIpLnJlbW92ZSgpO1xuICBkMy5zZWxlY3QoXCIudGVhbS1sb2dvcy1jb250YWluZXJcIikuc2VsZWN0Q2hpbGRyZW4oXCJ0ZXh0XCIpLnJlbW92ZSgpO1xufSIsImNvbnN0IE1BUkdJTiA9IHt0b3A6IDMwLCByaWdodDogMzAsIGJvdHRvbTogODAsIGxlZnQ6IDYwfSxcbldJRFRIID0gNjUwIC0gTUFSR0lOLmxlZnQgLSBNQVJHSU4ucmlnaHQsXG5IRUlHSFQgPSA1OTAgLSBNQVJHSU4udG9wIC0gTUFSR0lOLmJvdHRvbTtcblxuXG4gY2xhc3MgTGluZUdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihzdmcsIHRlYW0xLCBzZWFzb24xLCB0ZWFtMiwgc2Vhc29uMikge1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgICAgdGhpcy50ZWFtMSA9IHRlYW0xO1xuICAgICAgICB0aGlzLnRlYW0yID0gdGVhbTI7XG4gICAgICAgIHRoaXMuc2Vhc29uMSA9IHNlYXNvbjE7XG4gICAgICAgIHRoaXMuc2Vhc29uMiA9IHNlYXNvbjI7XG5cbiAgICAgICAgLy8gRGF0YSBPYmplY3RzIHVzZWQgaW4gZ3JhcGggbWFraW5nXG4gICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3byA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvID0ge307XG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbU9uZSA9IHt9O1xuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmUgPSB7fTtcbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud28gPSB7fTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemluZyBvYmplY3RzIHdpdGggZGF0YVxuICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lW3RoaXMudGVhbTFdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0gPSBbWzAsMF1dXG4gICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdID0gW1swLDBdXVxuICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXSA9IFtbMCwwXV1cbiAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0gPSBbWzAsMF1dXG5cbiAgICAgICAgdGhpcy5zdGF0cyA9IFtcbiAgICAgICAgICBcIlBvaW50c1wiLFxuICAgICAgICAgIFwiU2hvdHNcIiwgXG4gICAgICAgICAgXCJTaG90cyBvbiBUYXJnZXRcIixcbiAgICAgICAgICBcIkZpcnN0IEhhbGYgR29hbHNcIiwgXG4gICAgICAgICAgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiLCBcbiAgICAgICAgICBcIlRvdGFsIEdvYWxzXCIsIFxuICAgICAgICAgIFwiR29hbHMgQWdhaW5zdFwiLCBcbiAgICAgICAgICBcIkNvcm5lcnNcIiwgXG4gICAgICAgICAgXCJGb3VscyBDb21taXRlZFwiLCBcbiAgICAgICAgICBcIkZvdWxzIEFnYWluc3RcIiwgXG4gICAgICAgICAgXCJZZWxsb3cgQ2FyZHNcIiwgXG4gICAgICAgICAgXCJSZWQgQ2FyZHNcIl07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlYXNvbkxlbmd0aCA9IFswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLFxuICAgICAgICAgIDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2XG4gICAgICAgICAgLDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4XSAgXG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZGluZyB1cCBkYXRhIGFuZCBjcmVhdGluZyBncmFwaCBcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7dGhpcy5zZWFzb24xfS5jc3ZgKSxcbiAgICAgICAgICBkMy5jc3YoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8ke3RoaXMuc2Vhc29uMn0uY3N2YClcbiAgICAgICAgXSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIExvb3AgdG8gZ28gdGhyb3VnaCBkYXRhIGFuZCBwb3B1bGF0ZSBvdXRwdXQgZGF0YSBvYmplY3RzIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIC8vIE1hdGNoZGF5IHZhcnNcbiAgICAgICAgICAgICAgbGV0IG1hdGNoMSA9IGRhdGFbMF1baV07XG4gICAgICAgICAgICAgIGxldCBtYXRjaDIgPSBkYXRhWzFdW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGhlbHBlciB2YXJpYWJsZXMgdGVhbSAxXG4gICAgICAgICAgICAgIGxldCBwcmV2TWF0Y2hkYXkxID0gdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgICBsZXQgcHJldlBvaW50czEgPSB0aGlzLnNlYXNvblBvaW50c1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHMxID0gdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZTaG90c09uVGFyZ2V0MSA9IHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZpcnN0SGFsZkdvYWxzMSA9IHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzMSA9IHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2FsczEgPSB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzQWdhaW5zdDEgPSB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Q29ybmVyczEgPSB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtT25lW3RoaXMudGVhbTFdW3RoaXMuc2Vhc29uQ29ybmVyc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkMSA9IHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQWdhaW5zdDEgPSB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2WWVsbG93Q2FyZHMxID0gdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV1bdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkczEgPSB0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXVt0aGlzLnNlYXNvblJlZENhcmRzVGVhbU9uZVt0aGlzLnRlYW0xXS5sZW5ndGggLSAxXVsxXVxuXG5cblxuICAgICAgICAgICAgICAvLyBoZWxwZXIgdmFyaWFibGVzIHRlYW0gMlxuICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5MiA9IHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMF1cbiAgICAgICAgICAgICAgbGV0IHByZXZQb2ludHMyID0gdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNob3RzMiA9IHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldDIgPSB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FsczIgPSB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FsczIgPSB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2R29hbHMyID0gdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QyID0gdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMyID0gdGhpcy5zZWFzb25Db3JuZXJzVGVhbVR3b1t0aGlzLnRlYW0yXVt0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZDIgPSB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QyID0gdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzMiA9IHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdW3RoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMyID0gdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl1bdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsIHRvIHBvcHVsYXRlIGRhdGEgZm9yIGZpcnN0IHRlYW1cbiAgICAgICAgICAgICAgaWYgKG1hdGNoMVtcIkhvbWVUZWFtXCJdID09PSB0aGlzLnRlYW0xKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMSArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90czEgKyBwYXJzZUludChtYXRjaDFbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHNPblRhcmdldDEgKyBwYXJzZUludChtYXRjaDFbXCJIU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGaXJzdEhhbGZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczEgKyAocGFyc2VJbnQobWF0Y2gxW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEhHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzMSArIHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkNvcm5lcnMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSENcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQxICsgcGFyc2VJbnQobWF0Y2gxW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkFGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2WWVsbG93Q2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiSFlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZSZWRDYXJkczEgKyBwYXJzZUludChtYXRjaDFbXCJIUlwiXSldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKG1hdGNoMVtcIkF3YXlUZWFtXCJdID09PSB0aGlzLnRlYW0xKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoMVtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2UG9pbnRzMSArIDNdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlBvaW50czEgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZTaG90czEgKyBwYXJzZUludChtYXRjaDFbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2U2hvdHNPblRhcmdldDEgKyBwYXJzZUludChtYXRjaDFbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZGaXJzdEhhbGZHb2FsczEgKyBwYXJzZUludChtYXRjaDFbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldlNlY29uZEhhbGZHb2FsczEgKyAocGFyc2VJbnQobWF0Y2gxW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaDFbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkdvYWxzMSArIHBhcnNlSW50KG1hdGNoMVtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2R29hbHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Db3JuZXJzVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkNvcm5lcnMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0NvbW1pdGVkVGVhbU9uZVt0aGlzLnRlYW0xXS5wdXNoKFtwcmV2TWF0Y2hkYXkxICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQxICsgcGFyc2VJbnQobWF0Y2gxW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0MSArIHBhcnNlSW50KG1hdGNoMVtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lW3RoaXMudGVhbTFdLnB1c2goW3ByZXZNYXRjaGRheTEgKyAxLCBwcmV2WWVsbG93Q2FyZHMxICsgcGFyc2VJbnQobWF0Y2gxW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25SZWRDYXJkc1RlYW1PbmVbdGhpcy50ZWFtMV0ucHVzaChbcHJldk1hdGNoZGF5MSArIDEsIHByZXZSZWRDYXJkczEgKyBwYXJzZUludChtYXRjaDFbXCJBUlwiXSldKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENvbmRpdGlvbmFsIGZvciBzZWNvbmQgdGVhbSBkYXRhXG4gICAgICAgICAgICAgIGlmIChtYXRjaDJbXCJIb21lVGVhbVwiXSA9PT0gdGhpcy50ZWFtMil7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaDJbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUG9pbnRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlBvaW50czIgKyAzXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyXSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2hvdHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFNcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TaG90c09uVGFyZ2V0VGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzT25UYXJnZXQyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNlY29uZEhhbGZHb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMyICsgKHBhcnNlSW50KG1hdGNoMltcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2gyW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Hb2Fsc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2FsczIgKyBwYXJzZUludChtYXRjaDJbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkdvYWxzQWdhaW5zdDIgKyBwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uQ29ybmVyc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZDb3JuZXJzMiArIHBhcnNlSW50KG1hdGNoMltcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNDb21taXRlZFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0NvbW1pdGVkMiArIHBhcnNlSW50KG1hdGNoMltcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uRm91bHNBZ2FpbnN0VGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZvdWxzQWdhaW5zdDIgKyBwYXJzZUludChtYXRjaDJbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblllbGxvd0NhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlllbGxvd0NhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UmVkQ2FyZHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2gyW1wiQXdheVRlYW1cIl0gPT09IHRoaXMudGVhbTIpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gyW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZQb2ludHMyICsgM10pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMl0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFzb25Qb2ludHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2UG9pbnRzMiArIDFdKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblNob3RzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlNob3RzMiArIHBhcnNlSW50KG1hdGNoMltcIkFTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uU2hvdHNPblRhcmdldFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZTaG90c09uVGFyZ2V0MiArIHBhcnNlSW50KG1hdGNoMltcIkFTVFwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZpcnN0SGFsZkdvYWxzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzMiArIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzMiArIChwYXJzZUludChtYXRjaDJbXCJGVEFHXCJdKSAtIHBhcnNlSW50KG1hdGNoMltcIkhUQUdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vhc29uR29hbHNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2R29hbHMyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkdvYWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZHb2Fsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkNvcm5lcnNUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Q29ybmVyczIgKyBwYXJzZUludChtYXRjaDJbXCJBQ1wiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvW3RoaXMudGVhbTJdLnB1c2goW3ByZXZNYXRjaGRheTIgKyAxLCBwcmV2Rm91bHNDb21taXRlZDIgKyBwYXJzZUludChtYXRjaDJbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZGb3Vsc0FnYWluc3QyICsgcGFyc2VJbnQobWF0Y2gyW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFzb25ZZWxsb3dDYXJkc1RlYW1Ud29bdGhpcy50ZWFtMl0ucHVzaChbcHJldk1hdGNoZGF5MiArIDEsIHByZXZZZWxsb3dDYXJkczIgKyBwYXJzZUludChtYXRjaDJbXCJBWVwiXSldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXNvblJlZENhcmRzVGVhbVR3b1t0aGlzLnRlYW0yXS5wdXNoKFtwcmV2TWF0Y2hkYXkyICsgMSwgcHJldlJlZENhcmRzMiArIHBhcnNlSW50KG1hdGNoMltcIkFSXCJdKV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHcmFwaCBUZWFtIExlZ2VuZCBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA0NSkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwicmVkXCIpICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNjUpLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcImdyZWVuXCIpICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA1MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChgJHt0aGlzLnRlYW0xfSAke3RoaXMuc2Vhc29uMX1gKSAgICBcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDcwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KGAke3RoaXMudGVhbTJ9ICR7dGhpcy5zZWFzb24yfWApICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gRHJvcGRvd24gYnV0dG9uIGNyZWF0aW9uIHRvIGNoYW5nZSBzdGF0c1xuICAgICAgICBjb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcIi51cGRhdGUtYnV0dG9uLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJzZWxlY3RcIikuYXR0cihcImNsYXNzXCIsIFwidXBkYXRlLWJ1dHRvblwiKTtcbiAgICAgICAgZHJvcERvd25CdXR0b24uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4gICAgICAgIC5kYXRhKHRoaXMuc3RhdHMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLnRleHQoZCA9PiB7cmV0dXJuIGR9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAgICAgLy8gWS1BeGlzIGxhYmVsIFxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDAgLSBNQVJHSU4ubGVmdCAtIDUpXG4gICAgICAgIC5hdHRyKFwieFwiLCAwIC0gKEhFSUdIVC8yKSlcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieWF4aXMtdGV4dFwiKVxuICAgICAgICAudGV4dChcIlBvaW50c1wiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAgIFxuICAgICAgICAvLyBYLUF4aXMgbGFiZWxcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAoV0lEVEgvMikgKyBcIiAsXCIgKyAoSEVJR0hUICsgTUFSR0lOLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KFwiTWF0Y2hkYXlcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgICBsZXQgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeCk7XG5cbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgSEVJR0hUICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJYQXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW0hFSUdIVCwgMF0pO1xuICAgICAgICBsZXQgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHkpO1xuICAgICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJZQXhpc1wiKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5zZWFzb25Qb2ludHNUZWFtT25lLCB0aGlzLnNlYXNvblBvaW50c1RlYW1Ud28sIFwiUG9pbnRzXCIsIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG5cbiAgICAgICAgLy8gRHJvcGRvd24gQnV0dG9uIE9wdGlvbnMgdG8gY2hhbmdlIGRhdGEgb3V0cHV0XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgZHJvcERvd25CdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xuICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJQb2ludHNcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblBvaW50c1RlYW1PbmUsIHRoYXQuc2Vhc29uUG9pbnRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7ICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25TaG90c1RlYW1PbmUsIHRoYXQuc2Vhc29uU2hvdHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvblNob3RzT25UYXJnZXRUZWFtT25lLCB0aGF0LnNlYXNvblNob3RzT25UYXJnZXRUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25GaXJzdEhhbGZHb2Fsc1RlYW1PbmUsIHRoYXQuc2Vhc29uRmlyc3RIYWxmR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uU2Vjb25kSGFsZkdvYWxzVGVhbU9uZSwgdGhhdC5zZWFzb25TZWNvbmRIYWxmR29hbHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHNUZWFtT25lLCB0aGF0LnNlYXNvbkdvYWxzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uR29hbHNBZ2FpbnN0VGVhbU9uZSwgdGhhdC5zZWFzb25Hb2Fsc0FnYWluc3RUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Db3JuZXJzVGVhbU9uZSwgdGhhdC5zZWFzb25Db3JuZXJzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZSh0aGF0LnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtT25lLCB0aGF0LnNlYXNvbkZvdWxzQ29tbWl0ZWRUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25Gb3Vsc0FnYWluc3RUZWFtT25lLCB0aGF0LnNlYXNvbkZvdWxzQWdhaW5zdFRlYW1Ud28sIHNlbGVjdGVkT3B0aW9uLCB4LCB4QXhpcywgeSwgeUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKHRoYXQuc2Vhc29uWWVsbG93Q2FyZHNUZWFtT25lLCB0aGF0LnNlYXNvblllbGxvd0NhcmRzVGVhbVR3bywgc2VsZWN0ZWRPcHRpb24sIHgsIHhBeGlzLCB5LCB5QXhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUodGhhdC5zZWFzb25SZWRDYXJkc1RlYW1PbmUsIHRoYXQuc2Vhc29uUmVkQ2FyZHNUZWFtVHdvLCBzZWxlY3RlZE9wdGlvbiwgeCwgeEF4aXMsIHksIHlBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIFxuICAgIH1cblxuICAgICB1cGRhdGUoZGF0YVRlYW1PbmUsIGRhdGFUZWFtVHdvLCB0aXRsZSwgeCwgeEF4aXMsIHksIHlBeGlzKXtcblxuICAgICAgICB4LmRvbWFpbihbMCwgZDMubWF4KHRoaXMuc2Vhc29uTGVuZ3RoKV0pO1xuICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuWEF4aXNcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgICAgIGxldCB0ZWFtT25lTWF4ID0gZGF0YVRlYW1PbmVbdGhpcy50ZWFtMV1bMzhdWzFdO1xuICAgICAgICBsZXQgdGVhbVR3b01heCA9IGRhdGFUZWFtVHdvW3RoaXMudGVhbTJdWzM4XVsxXTtcblxuICAgICAgICB0ZWFtT25lTWF4ID49IHRlYW1Ud29NYXggPyB5LmRvbWFpbihbMCwgdGVhbU9uZU1heF0pIDogeS5kb21haW4oWzAsIHRlYW1Ud29NYXhdKTsgXG5cbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLllBeGlzXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgICAgICB0aGlzLnN2Zy5zZWxlY3QoXCIueWF4aXMtdGV4dFwiKS50ZXh0KHRpdGxlKVxuXG4gICAgICAgIGxldCBsaW5lMSA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKVxuICAgICAgICBsZXQgbGluZTIgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcblxuICAgICAgICBpZiAobGluZTEpe3RoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKS5yZW1vdmUoKX1cbiAgICAgICAgaWYgKGxpbmUyKXt0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikucmVtb3ZlKCl9XG5cbiAgICAgICAgbGluZTEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YVRlYW1PbmVdLCBkID0+IGRbdGhpcy50ZWFtMV0pXG4gICAgICAgIGxpbmUyID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLmRhdGEoW2RhdGFUZWFtVHdvXSwgZCA9PiBkW3RoaXMudGVhbTJdKVxuXG4gICAgICAgIGxpbmUxXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5kYXR1bShkYXRhVGVhbU9uZVt0aGlzLnRlYW0xXSlcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgICAgIC5tZXJnZShsaW5lMSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAgICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7IH0pKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcbiAgICAgICAgXG4gICAgICAgIGxpbmUyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5kYXR1bShkYXRhVGVhbVR3b1t0aGlzLnRlYW0yXSlcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgICAgIC5tZXJnZShsaW5lMSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAgICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7IH0pKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMi41KVxuXG5cblxuICAgIH0gICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVHcmFwaDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9