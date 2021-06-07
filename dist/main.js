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
 // Data objects, as soon as page is loaded these objects will be populated

var nineTenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var tenElevenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var elevenTwelveStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var twelveThirteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var thirteenFourteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var fourteenFifteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var fifteenSixteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var sixteenSeventeenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var seventeenEighteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var eighteenNineteenStats = {
  teams: [],
  barGraphStats: {},
  lineGraphStats: {}
};
var ALL_TEAMS = []; // Statistics that will be used in the dropdown button selection and populating the data objects above

var STATS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"]; // loop to create season length numbers array to loop through in the future

var seasonLength = [];

for (var i = 0; i < 39; i++) {
  seasonLength.push(i);
}

var teams = [];
var seasonPoints = {};
var seasonShots = {};
var seasonShotsOnTarget = {};
var seasonFirstHalfGoals = {};
var seasonSecondHalfGoals = {};
var seasonGoals = {};
var seasonGoalsAgainst = {};
var seasonCorners = {};
var seasonFoulsCommited = {};
var seasonFoulsAgainst = {};
var seasonYellowCards = {};
var seasonRedCards = {}; // Array for looping through data to populate objects

var seasonArray = [["2009-2010", nineTenStats], ["2010-2011", tenElevenStats], ["2011-2012", elevenTwelveStats], ["2012-2013", twelveThirteenStats], ["2013-2014", thirteenFourteenStats], ["2014-2015", fourteenFifteenStats], ["2015-2016", fifteenSixteenStats], ["2016-2017", sixteenSeventeenStats], ["2017-2018", seventeenEighteenStats], ["2018-2019", eighteenNineteenStats]]; // Loop to populate data objects

var _loop = function _loop(_i) {
  var season = seasonArray[_i][0];
  var seasonData = seasonArray[_i][1];
  d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/".concat(season, ".csv")).then(function (data) {
    // Loop to populate ALL_TEAMS array for eventual search bar and for the teams array for each season
    for (var _i4 = 0; _i4 < data.length; _i4++) {
      var matchday = data[_i4];

      if (!seasonData["teams"].includes(matchday["HomeTeam"])) {
        seasonData["teams"].push(matchday["HomeTeam"]);

        if (!ALL_TEAMS.includes(matchday["HomeTeam"])) {
          ALL_TEAMS.push(matchday["HomeTeam"]);
        }
      } else if (!seasonData["teams"].includes(matchday["AwayTeam"])) {
        seasonData["teams"].push(matchday["AwayTeam"]);

        if (!ALL_TEAMS.includes(matchday["AwayTeam"])) {
          ALL_TEAMS.push(matchday["AwayTeam"]);
        }
      }
    }
  });
};

for (var _i = 0; _i < seasonArray.length; _i++) {
  _loop(_i);
}

console.log(thirteenFourteenStats["teams"]);
console.log(ALL_TEAMS);
d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/2018-2019.csv").then(function (data) {
  // loop for extracting teams from season into teams array
  for (var _i2 = 0; _i2 < data.length; _i2++) {
    if (!teams.includes(data[_i2]["HomeTeam"])) {
      teams.push(data[_i2]["HomeTeam"]);
    } else if (!teams.includes(data[_i2]["AwayTeam"])) {
      teams.push(data[_i2]["AwayTeam"]);
    }
  } // nested loop for extracting team points from data


  for (var _i3 = 0; _i3 < teams.length; _i3++) {
    var team = teams[_i3];
    seasonPoints[team] = [[0, 0]];
    seasonShots[team] = [[0, 0]];
    seasonShotsOnTarget[team] = [[0, 0]];
    seasonFirstHalfGoals[team] = [[0, 0]];
    seasonSecondHalfGoals[team] = [[0, 0]];
    seasonGoals[team] = [[0, 0]];
    seasonGoalsAgainst[team] = [[0, 0]];
    seasonCorners[team] = [[0, 0]];
    seasonFoulsCommited[team] = [[0, 0]];
    seasonFoulsAgainst[team] = [[0, 0]];
    seasonYellowCards[team] = [[0, 0]];
    seasonRedCards[team] = [[0, 0]];

    for (var j = 0; j < data.length; j++) {
      var match = data[j];
      var prevPoints = seasonPoints[team][seasonPoints[team].length - 1][1];
      var prevMatchday = seasonPoints[team][seasonPoints[team].length - 1][0];
      var prevShots = seasonShots[team][seasonPoints[team].length - 1][1];
      var prevShotsOnTarget = seasonShotsOnTarget[team][seasonPoints[team].length - 1][1];
      var prevFirstHalfGoals = seasonFirstHalfGoals[team][seasonPoints[team].length - 1][1];
      var prevSecondHalfGoals = seasonSecondHalfGoals[team][seasonPoints[team].length - 1][1];
      var prevGoals = seasonGoals[team][seasonPoints[team].length - 1][1];
      var prevGoalsAgainst = seasonGoalsAgainst[team][seasonPoints[team].length - 1][1];
      var prevCorners = seasonCorners[team][seasonPoints[team].length - 1][1];
      var prevFoulsCommited = seasonFoulsCommited[team][seasonPoints[team].length - 1][1];
      var prevFoulsAgainst = seasonFoulsAgainst[team][seasonPoints[team].length - 1][1];
      var prevYellowCards = seasonYellowCards[team][seasonPoints[team].length - 1][1];
      var prevRedCards = seasonRedCards[team][seasonPoints[team].length - 1][1]; // switch statements for building team points array

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
        } // filling up the individual stats objects/array


        seasonShots[team].push([prevMatchday + 1, prevShots + parseInt(match["HS"])]);
        seasonShotsOnTarget[team].push([prevMatchday + 1, prevShotsOnTarget + parseInt(match["HST"])]);
        seasonFirstHalfGoals[team].push([prevMatchday + 1, prevFirstHalfGoals + parseInt(match["HTHG"])]);
        seasonSecondHalfGoals[team].push([prevMatchday + 1, prevSecondHalfGoals + (parseInt(match["FTHG"]) - parseInt(match["HTHG"]))]);
        seasonGoals[team].push([prevMatchday + 1, prevGoals + parseInt(match["FTHG"])]);
        seasonGoalsAgainst[team].push([prevMatchday + 1, prevGoalsAgainst + parseInt(match["FTAG"])]);
        seasonCorners[team].push([prevMatchday + 1, prevCorners + parseInt(match["HC"])]);
        seasonFoulsCommited[team].push([prevMatchday + 1, prevFoulsCommited + parseInt(match["HF"])]);
        seasonFoulsAgainst[team].push([prevMatchday + 1, prevFoulsAgainst + parseInt(match["AF"])]);
        seasonYellowCards[team].push([prevMatchday + 1, prevYellowCards + parseInt(match["HY"])]);
        seasonRedCards[team].push([prevMatchday + 1, prevRedCards + parseInt(match["HR"])]);
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

        seasonShots[team].push([prevMatchday + 1, prevShots + parseInt(match["AS"])]);
        seasonShotsOnTarget[team].push([prevMatchday + 1, prevShotsOnTarget + parseInt(match["AST"])]);
        seasonFirstHalfGoals[team].push([prevMatchday + 1, prevFirstHalfGoals + parseInt(match["HTAG"])]);
        seasonSecondHalfGoals[team].push([prevMatchday + 1, prevSecondHalfGoals + (parseInt(match["FTAG"]) - parseInt(match["HTAG"]))]);
        seasonGoals[team].push([prevMatchday + 1, prevGoals + parseInt(match["FTAG"])]);
        seasonGoalsAgainst[team].push([prevMatchday + 1, prevGoalsAgainst + parseInt(match["FTHG"])]);
        seasonCorners[team].push([prevMatchday + 1, prevCorners + parseInt(match["AC"])]);
        seasonFoulsCommited[team].push([prevMatchday + 1, prevFoulsCommited + parseInt(match["AF"])]);
        seasonFoulsAgainst[team].push([prevMatchday + 1, prevFoulsAgainst + parseInt(match["HF"])]);
        seasonYellowCards[team].push([prevMatchday + 1, prevYellowCards + parseInt(match["AY"])]);
        seasonRedCards[team].push([prevMatchday + 1, prevRedCards + parseInt(match["AR"])]);
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

  svg.append("circle").attr("cx", 100).attr("cy", 50).attr("r", 4).style("fill", "red");
  svg.append("circle").attr("cx", 100).attr("cy", 70).attr("r", 4).style("fill", "yellow");
  svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool 2018-19").attr("alignment-baseline", "middle");
  svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton 2018-19").attr("alignment-baseline", "middle"); //  Create a dropdown button to select data output

  var dropDownButton = d3.select("body").append("select"); // Create options for Dropdown

  dropDownButton.selectAll('dataOptions').data(STATS).enter().append('option').text(function (d) {
    return d;
  }).attr("value", function (d) {
    return d;
  }); // Y-axis label

  svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left - 5).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").attr("class", "yaxis-text").text("Points").attr("font-size", "22px").style('fill', 'white'); // X-axis label

  svg.append("text").attr("transform", "translate (" + width / 2 + " ," + (height + margin.top + 25) + ")").attr("class", "xaxis").style("text-anchor", "middle").text("Matchday").attr("font-size", "22px").style('fill', 'white');
  var x = d3.scaleLinear().range([0, width]);
  var xAxis = d3.axisBottom().scale(x);
  svg.append("g").attr("transform", "translate(0," + height + ")").attr("class", "XAxis").style("fill", "white");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = d3.axisLeft().scale(y);
  svg.append("g").attr("class", "YAxis").style("fill", "white");

  var update = function update(data, title) {
    x.domain([0, d3.max(seasonLength)]);
    svg.selectAll(".XAxis").transition().duration(1000).call(xAxis);
    var teamOneMax = data["Liverpool"][38][1];
    var teamTwoMax = data["Southampton"][38][1];
    teamOneMax >= teamTwoMax ? y.domain([0, teamOneMax]) : y.domain([0, teamTwoMax]);
    svg.selectAll(".YAxis").transition().duration(1000).call(yAxis);
    svg.select(".yaxis-text").text(title);
    var line1 = svg.selectAll(".line1");
    var line2 = svg.selectAll(".line2");

    if (line1) {
      svg.selectAll(".line1").remove();
    }

    if (line2) {
      svg.selectAll(".line2").remove();
    }

    line1 = svg.selectAll(".line1").data([data], function (d) {
      return d["Liverpool"];
    });
    line2 = svg.selectAll(".line2").data([data], function (d) {
      return d["Southampton"];
    });
    line1.enter().datum(data["Liverpool"]).append("path").attr("class", "line1").merge(line1).transition().duration(1000).attr("d", d3.line().x(function (d) {
      return x(d[0]);
    }).y(function (d) {
      return y(d[1]);
    })).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 2.5);
    line2.enter().datum(data["Southampton"]).append("path").attr("class", "line2").merge(line2).transition().duration(1000).attr("d", d3.line().x(function (d) {
      return x(d[0]);
    }).y(function (d) {
      return y(d[1]);
    })).attr("fill", "none").attr("stroke", "yellow").attr("stroke-width", 2.5); // let line1Length = d3.selectAll(".line1").node().getTotalLength();
    // let line2Length = d3.selectAll(".line2").node().getTotalLength();
    // d3.selectAll(".line1").attr("stroke-dasharray", line1Length + " " + line1Length)
    // .attr("stroke-dashoffset", line1Length)
    // .transition()
    // .duration(2000)
    // .delay(200)
    // .ease(d3.easeSin)
    // .attr("stroke-dashoffset", 0)
  };

  update(seasonPoints, "Points");
  dropDownButton.on("change", function (d) {
    var selectedOption = d3.select(this).property("value");

    switch (selectedOption) {
      case "Points":
        update(seasonPoints, selectedOption);
        break;

      case "Shots":
        update(seasonShots, selectedOption);
        break;

      case "Shots on Target":
        update(seasonShotsOnTarget, selectedOption);
        break;

      case "First Half Goals":
        update(seasonFirstHalfGoals, selectedOption);
        break;

      case "Second Half Goals":
        update(seasonSecondHalfGoals, selectedOption);
        break;

      case "Total Goals":
        update(seasonGoals, selectedOption);
        break;

      case "Goals Against":
        update(seasonGoalsAgainst, selectedOption);
        break;

      case "Corners":
        update(seasonCorners, selectedOption);
        break;

      case "Fouls Commited":
        update(seasonFoulsCommited, selectedOption);
        break;

      case "Fouls Against":
        update(seasonFoulsAgainst, selectedOption);
        break;

      case "Yellow Cards":
        update(seasonYellowCards, selectedOption);
        break;

      case "Red Cards":
        update(seasonRedCards, selectedOption);
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJuaW5lVGVuU3RhdHMiLCJ0ZWFtcyIsImJhckdyYXBoU3RhdHMiLCJsaW5lR3JhcGhTdGF0cyIsInRlbkVsZXZlblN0YXRzIiwiZWxldmVuVHdlbHZlU3RhdHMiLCJ0d2VsdmVUaGlydGVlblN0YXRzIiwidGhpcnRlZW5Gb3VydGVlblN0YXRzIiwiZm91cnRlZW5GaWZ0ZWVuU3RhdHMiLCJmaWZ0ZWVuU2l4dGVlblN0YXRzIiwic2l4dGVlblNldmVudGVlblN0YXRzIiwic2V2ZW50ZWVuRWlnaHRlZW5TdGF0cyIsImVpZ2h0ZWVuTmluZXRlZW5TdGF0cyIsIkFMTF9URUFNUyIsIlNUQVRTIiwic2Vhc29uTGVuZ3RoIiwiaSIsInB1c2giLCJzZWFzb25Qb2ludHMiLCJzZWFzb25TaG90cyIsInNlYXNvblNob3RzT25UYXJnZXQiLCJzZWFzb25GaXJzdEhhbGZHb2FscyIsInNlYXNvblNlY29uZEhhbGZHb2FscyIsInNlYXNvbkdvYWxzIiwic2Vhc29uR29hbHNBZ2FpbnN0Iiwic2Vhc29uQ29ybmVycyIsInNlYXNvbkZvdWxzQ29tbWl0ZWQiLCJzZWFzb25Gb3Vsc0FnYWluc3QiLCJzZWFzb25ZZWxsb3dDYXJkcyIsInNlYXNvblJlZENhcmRzIiwic2Vhc29uQXJyYXkiLCJzZWFzb24iLCJzZWFzb25EYXRhIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJwcmV2U2hvdHMiLCJwcmV2U2hvdHNPblRhcmdldCIsInByZXZGaXJzdEhhbGZHb2FscyIsInByZXZTZWNvbmRIYWxmR29hbHMiLCJwcmV2R29hbHMiLCJwcmV2R29hbHNBZ2FpbnN0IiwicHJldkNvcm5lcnMiLCJwcmV2Rm91bHNDb21taXRlZCIsInByZXZGb3Vsc0FnYWluc3QiLCJwcmV2WWVsbG93Q2FyZHMiLCJwcmV2UmVkQ2FyZHMiLCJwYXJzZUludCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwidGV4dCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJkIiwieCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInkiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidXBkYXRlIiwidGl0bGUiLCJkb21haW4iLCJtYXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwidGVhbU9uZU1heCIsInRlYW1Ud29NYXgiLCJsaW5lMSIsImxpbmUyIiwicmVtb3ZlIiwiZGF0dW0iLCJtZXJnZSIsImxpbmUiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFOO0FBQ0E7O0FBQ0osV0FBSyxpQkFBTDtBQUNJaEIsY0FBTSxDQUFDakUsbUJBQUQsRUFBc0JpRixjQUF0QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxrQkFBTDtBQUNJaEIsY0FBTSxDQUFDaEUsb0JBQUQsRUFBdUJnRixjQUF2QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxtQkFBTDtBQUNJaEIsY0FBTSxDQUFDL0QscUJBQUQsRUFBd0IrRSxjQUF4QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxhQUFMO0FBQ0loQixjQUFNLENBQUM5RCxXQUFELEVBQWM4RSxjQUFkLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQzdELGtCQUFELEVBQXFCNkUsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJaEIsY0FBTSxDQUFDNUQsYUFBRCxFQUFnQjRFLGNBQWhCLENBQU47QUFDQTs7QUFDSixXQUFLLGdCQUFMO0FBQ0loQixjQUFNLENBQUMzRCxtQkFBRCxFQUFzQjJFLGNBQXRCLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQzFELGtCQUFELEVBQXFCMEUsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssY0FBTDtBQUNJaEIsY0FBTSxDQUFDekQsaUJBQUQsRUFBb0J5RSxjQUFwQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0loQixjQUFNLENBQUN4RCxjQUFELEVBQWlCd0UsY0FBakIsQ0FBTjtBQUNBOztBQUNKO0FBQ0k7QUF0Q1I7QUF3Q0gsR0ExQ0Q7QUE4Q0MsQ0F2U0QsRTs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuLy8gRGF0YSBvYmplY3RzLCBhcyBzb29uIGFzIHBhZ2UgaXMgbG9hZGVkIHRoZXNlIG9iamVjdHMgd2lsbCBiZSBwb3B1bGF0ZWRcbmNvbnN0IG5pbmVUZW5TdGF0cyA9IHt0ZWFtczogW10sIGJhckdyYXBoU3RhdHM6IHt9LCBsaW5lR3JhcGhTdGF0czoge319O1xuY29uc3QgdGVuRWxldmVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7fSwgbGluZUdyYXBoU3RhdHM6IHt9fTtcbmNvbnN0IGVsZXZlblR3ZWx2ZVN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge30sIGxpbmVHcmFwaFN0YXRzOiB7fX07XG5jb25zdCB0d2VsdmVUaGlydGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge30sIGxpbmVHcmFwaFN0YXRzOiB7fX07XG5jb25zdCB0aGlydGVlbkZvdXJ0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7fSwgbGluZUdyYXBoU3RhdHM6IHt9fTtcbmNvbnN0IGZvdXJ0ZWVuRmlmdGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge30sIGxpbmVHcmFwaFN0YXRzOiB7fX07XG5jb25zdCBmaWZ0ZWVuU2l4dGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge30sIGxpbmVHcmFwaFN0YXRzOiB7fX07XG5jb25zdCBzaXh0ZWVuU2V2ZW50ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7fSwgbGluZUdyYXBoU3RhdHM6IHt9fTtcbmNvbnN0IHNldmVudGVlbkVpZ2h0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7fSwgbGluZUdyYXBoU3RhdHM6IHt9fTtcbmNvbnN0IGVpZ2h0ZWVuTmluZXRlZW5TdGF0cyA9IHt0ZWFtczogW10sIGJhckdyYXBoU3RhdHM6IHt9LCBsaW5lR3JhcGhTdGF0czoge319O1xuY29uc3QgQUxMX1RFQU1TID0gW107XG5cbi8vIFN0YXRpc3RpY3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGRyb3Bkb3duIGJ1dHRvbiBzZWxlY3Rpb24gYW5kIHBvcHVsYXRpbmcgdGhlIGRhdGEgb2JqZWN0cyBhYm92ZVxuY29uc3QgU1RBVFMgPSBbXG4gICAgXCJQb2ludHNcIixcbiAgICBcIlNob3RzXCIsIFxuICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgXCJDb3JuZXJzXCIsIFxuICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgIFwiUmVkIENhcmRzXCJcbl07XG5cblxuLy8gbG9vcCB0byBjcmVhdGUgc2Vhc29uIGxlbmd0aCBudW1iZXJzIGFycmF5IHRvIGxvb3AgdGhyb3VnaCBpbiB0aGUgZnV0dXJlXG5jb25zdCBzZWFzb25MZW5ndGggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMzk7IGkrKykge1xuICAgIHNlYXNvbkxlbmd0aC5wdXNoKGkpOyAgICBcbn1cblxubGV0IHRlYW1zID0gW107XG5sZXQgc2Vhc29uUG9pbnRzID0ge307XG5sZXQgc2Vhc29uU2hvdHMgPSB7fTtcbmxldCBzZWFzb25TaG90c09uVGFyZ2V0ID0ge307XG5sZXQgc2Vhc29uRmlyc3RIYWxmR29hbHMgPSB7fTtcbmxldCBzZWFzb25TZWNvbmRIYWxmR29hbHMgPSB7fTtcbmxldCBzZWFzb25Hb2FscyA9IHt9O1xubGV0IHNlYXNvbkdvYWxzQWdhaW5zdCA9IHt9O1xubGV0IHNlYXNvbkNvcm5lcnMgPSB7fTtcbmxldCBzZWFzb25Gb3Vsc0NvbW1pdGVkID0ge307XG5sZXQgc2Vhc29uRm91bHNBZ2FpbnN0ID0ge307XG5sZXQgc2Vhc29uWWVsbG93Q2FyZHMgPSB7fTtcbmxldCBzZWFzb25SZWRDYXJkcyA9IHt9O1xuXG5cbi8vIEFycmF5IGZvciBsb29waW5nIHRocm91Z2ggZGF0YSB0byBwb3B1bGF0ZSBvYmplY3RzXG5jb25zdCBzZWFzb25BcnJheSA9IFtcbltcIjIwMDktMjAxMFwiLCBuaW5lVGVuU3RhdHNdLCBcbltcIjIwMTAtMjAxMVwiLCB0ZW5FbGV2ZW5TdGF0c10sIFxuW1wiMjAxMS0yMDEyXCIsIGVsZXZlblR3ZWx2ZVN0YXRzXSwgXG5bXCIyMDEyLTIwMTNcIiwgdHdlbHZlVGhpcnRlZW5TdGF0c10sIFxuW1wiMjAxMy0yMDE0XCIsIHRoaXJ0ZWVuRm91cnRlZW5TdGF0c10sIFxuW1wiMjAxNC0yMDE1XCIsIGZvdXJ0ZWVuRmlmdGVlblN0YXRzXSwgXG5bXCIyMDE1LTIwMTZcIiwgZmlmdGVlblNpeHRlZW5TdGF0c10sIFxuW1wiMjAxNi0yMDE3XCIsIHNpeHRlZW5TZXZlbnRlZW5TdGF0c10sIFxuW1wiMjAxNy0yMDE4XCIsIHNldmVudGVlbkVpZ2h0ZWVuU3RhdHNdLCBcbltcIjIwMTgtMjAxOVwiLCBlaWdodGVlbk5pbmV0ZWVuU3RhdHNdXG5dXG5cblxuLy8gTG9vcCB0byBwb3B1bGF0ZSBkYXRhIG9iamVjdHNcbmZvciAobGV0IGkgPSAwOyBpIDwgc2Vhc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzZWFzb24gPSBzZWFzb25BcnJheVtpXVswXTtcbiAgICBjb25zdCBzZWFzb25EYXRhID0gc2Vhc29uQXJyYXlbaV1bMV07XG4gICAgZDMuY3N2KGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvJHtzZWFzb259LmNzdmApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyBMb29wIHRvIHBvcHVsYXRlIEFMTF9URUFNUyBhcnJheSBmb3IgZXZlbnR1YWwgc2VhcmNoIGJhciBhbmQgZm9yIHRoZSB0ZWFtcyBhcnJheSBmb3IgZWFjaCBzZWFzb25cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGRheSA9IGRhdGFbaV07XG4gICAgICAgICAgICBpZiAoIXNlYXNvbkRhdGFbXCJ0ZWFtc1wiXS5pbmNsdWRlcyhtYXRjaGRheVtcIkhvbWVUZWFtXCJdKSl7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcInRlYW1zXCJdLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFBTExfVEVBTVMuaW5jbHVkZXMobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSkpIHtBTExfVEVBTVMucHVzaChtYXRjaGRheVtcIkhvbWVUZWFtXCJdKX1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNlYXNvbkRhdGFbXCJ0ZWFtc1wiXS5pbmNsdWRlcyhtYXRjaGRheVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJ0ZWFtc1wiXS5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pO1xuICAgICAgICAgICAgICAgIGlmICghQUxMX1RFQU1TLmluY2x1ZGVzKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pKSB7QUxMX1RFQU1TLnB1c2gobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSl9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxufVxuXG5jb25zb2xlLmxvZyh0aGlydGVlbkZvdXJ0ZWVuU3RhdHNbXCJ0ZWFtc1wiXSlcbmNvbnNvbGUubG9nKEFMTF9URUFNUyk7XG5cbmQzLmNzdihcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8yMDE4LTIwMTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcbiAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbSBwb2ludHMgZnJvbSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25TaG90c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNob3RzT25UYXJnZXRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZvdWxzQ29tbWl0ZWRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25ZZWxsb3dDYXJkc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblJlZENhcmRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgbGV0IHByZXZQb2ludHMgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5ID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90cyA9IHNlYXNvblNob3RzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90c09uVGFyZ2V0ID0gc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMgPSBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzID0gc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2FscyA9IHNlYXNvbkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QgPSBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMgPSBzZWFzb25Db3JuZXJzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkID0gc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0ID0gc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkcyA9IHNlYXNvblllbGxvd0NhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkcyA9IHNlYXNvblJlZENhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgLy8gc3dpdGNoIHN0YXRlbWVudHMgZm9yIGJ1aWxkaW5nIHRlYW0gcG9pbnRzIGFycmF5XG4gICAgICAgICAgICBpZiAobWF0Y2hbXCJIb21lVGVhbVwiXSA9PT0gdGVhbSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHMgKyAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICwgcHJldlBvaW50cyArIDFdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmlsbGluZyB1cCB0aGUgaW5kaXZpZHVhbCBzdGF0cyBvYmplY3RzL2FycmF5XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzICsgcGFyc2VJbnQobWF0Y2hbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90c09uVGFyZ2V0ICsgcGFyc2VJbnQobWF0Y2hbXCJIU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRmlyc3RIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzICsgKHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZDb3JuZXJzICsgcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkICsgcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlllbGxvd0NhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25SZWRDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UmVkQ2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkhSXCJdKV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlYXNvblNob3RzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90cyArIHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHNPblRhcmdldCArIHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGaXJzdEhhbGZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TZWNvbmRIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNlY29uZEhhbGZHb2FscyArIChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHMgKyBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2Fsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Q29ybmVycyArIHBhcnNlSW50KG1hdGNoW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNDb21taXRlZCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblllbGxvd0NhcmRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZZZWxsb3dDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uUmVkQ2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlJlZENhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBUlwiXSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbi8vICBMaW5lIEdyYXBoXG52YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiA3MCwgbGVmdDogNTB9LFxud2lkdGggPSA2NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbmhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbi5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbi5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cblxuXG4gIC8vIFggYW5kIFkgQXhpc1xuXG4gIHN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDUwKS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJyZWRcIilcbiAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNzApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInllbGxvd1wiKVxuICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDUwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KFwiTGl2ZXJwb29sIDIwMTgtMTlcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNzApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJTb3V0aGFtcHRvbiAyMDE4LTE5XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG5cbi8vICBDcmVhdGUgYSBkcm9wZG93biBidXR0b24gdG8gc2VsZWN0IGRhdGEgb3V0cHV0XG5jb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic2VsZWN0XCIpXG5cbi8vIENyZWF0ZSBvcHRpb25zIGZvciBEcm9wZG93blxuZHJvcERvd25CdXR0b24uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4uZGF0YShTVEFUUylcbi5lbnRlcigpXG4uYXBwZW5kKCdvcHRpb24nKVxuLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkfSlcbi5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KTtcblxuXG4gXG4gICAgLy8gWS1heGlzIGxhYmVsXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgLmF0dHIoXCJ5XCIsIDAgLSBtYXJnaW4ubGVmdCAtIDUpXG4gICAgLmF0dHIoXCJ4XCIsIDAgLSAoaGVpZ2h0LzIpKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5YXhpcy10ZXh0XCIpXG4gICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG4gICAgICAvLyBYLWF4aXMgbGFiZWxcbiAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAod2lkdGgvMikgKyBcIiAsXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJNYXRjaGRheVwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG5sZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG5sZXQgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeCk7XG5cbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4uYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbi5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcbmxldCB5QXhpcyA9IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeSk7XG5zdmcuYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJjbGFzc1wiLCBcIllBeGlzXCIpXG4uc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmNvbnN0IHVwZGF0ZSA9IChkYXRhLCB0aXRsZSkgPT4ge1xuXG4gXG5cbiAgICB4LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvbkxlbmd0aCldKTtcbiAgICBzdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5jYWxsKHhBeGlzKTtcblxuICAgIGxldCB0ZWFtT25lTWF4ID0gZGF0YVtcIkxpdmVycG9vbFwiXVszOF1bMV07XG4gICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhW1wiU291dGhhbXB0b25cIl1bMzhdWzFdO1xuXG4gICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuICAgIFxuICAgIHN2Zy5zZWxlY3RBbGwoXCIuWUF4aXNcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgXG4gICAgc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpXG5cbiAgICBcblxuXG4gICAgbGV0IGxpbmUxID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKVxuICAgIGxldCBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcbiAgICBcbiAgICBpZiAobGluZTEpIHtzdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLnJlbW92ZSgpfVxuICAgIGlmIChsaW5lMikge3N2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikucmVtb3ZlKCl9XG5cbiAgICBsaW5lMSA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIkxpdmVycG9vbFwiXSlcbiAgICBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIlNvdXRoYW1wdG9uXCJdKVxuXG4gICAgbGluZTFcbiAgICAuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiTGl2ZXJwb29sXCJdKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgLm1lcmdlKGxpbmUxKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7fSkpXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMi41KVxuXG4gICAgbGluZTIuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiU291dGhhbXB0b25cIl0pXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTJcIilcbiAgICAubWVyZ2UobGluZTIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTt9KSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ5ZWxsb3dcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cbiAgXG4gICAgLy8gbGV0IGxpbmUxTGVuZ3RoID0gZDMuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIC8vIGxldCBsaW5lMkxlbmd0aCA9IGQzLnNlbGVjdEFsbChcIi5saW5lMlwiKS5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIC8vIGQzLnNlbGVjdEFsbChcIi5saW5lMVwiKS5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBsaW5lMUxlbmd0aCArIFwiIFwiICsgbGluZTFMZW5ndGgpXG4gICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCBsaW5lMUxlbmd0aClcbiAgICAvLyAudHJhbnNpdGlvbigpXG4gICAgLy8gLmR1cmF0aW9uKDIwMDApXG4gICAgLy8gLmRlbGF5KDIwMClcbiAgICAvLyAuZWFzZShkMy5lYXNlU2luKVxuICAgIC8vIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMClcblxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cbn1cblxudXBkYXRlKHNlYXNvblBvaW50cywgXCJQb2ludHNcIik7XG5cblxuXG5kcm9wRG93bkJ1dHRvbi5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Qb2ludHMsIHNlbGVjdGVkT3B0aW9uKTsgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uU2hvdHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uU2hvdHNPblRhcmdldCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGaXJzdCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRmlyc3RIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TZWNvbmRIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Hb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJHb2FscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uR29hbHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvcm5lcnNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Db3JuZXJzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRm91bHNDb21taXRlZCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRm91bHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblllbGxvd0NhcmRzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblJlZENhcmRzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pXG4gIFxuXG4gICAgXG59KTtcblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==