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
var seasonRedCards = {};
var seasonLength = [];
var STATS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];

for (var i = 0; i < 39; i++) {
  seasonLength.push(i);
}

d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/2018-2019.csv").then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvblNob3RzIiwic2Vhc29uU2hvdHNPblRhcmdldCIsInNlYXNvbkZpcnN0SGFsZkdvYWxzIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzIiwic2Vhc29uR29hbHMiLCJzZWFzb25Hb2Fsc0FnYWluc3QiLCJzZWFzb25Db3JuZXJzIiwic2Vhc29uRm91bHNDb21taXRlZCIsInNlYXNvbkZvdWxzQWdhaW5zdCIsInNlYXNvblllbGxvd0NhcmRzIiwic2Vhc29uUmVkQ2FyZHMiLCJzZWFzb25MZW5ndGgiLCJTVEFUUyIsImkiLCJwdXNoIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsImluY2x1ZGVzIiwidGVhbSIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJwcmV2U2hvdHMiLCJwcmV2U2hvdHNPblRhcmdldCIsInByZXZGaXJzdEhhbGZHb2FscyIsInByZXZTZWNvbmRIYWxmR29hbHMiLCJwcmV2R29hbHMiLCJwcmV2R29hbHNBZ2FpbnN0IiwicHJldkNvcm5lcnMiLCJwcmV2Rm91bHNDb21taXRlZCIsInByZXZGb3Vsc0FnYWluc3QiLCJwcmV2WWVsbG93Q2FyZHMiLCJwcmV2UmVkQ2FyZHMiLCJwYXJzZUludCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwidGV4dCIsImRyb3BEb3duQnV0dG9uIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJkIiwieCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInkiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidXBkYXRlIiwidGl0bGUiLCJkb21haW4iLCJtYXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwidGVhbU9uZU1heCIsInRlYW1Ud29NYXgiLCJsaW5lMSIsImxpbmUyIiwicmVtb3ZlIiwiZGF0dW0iLCJtZXJnZSIsImxpbmUiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxFQUExQjtBQUNBLElBQUlDLG9CQUFvQixHQUFHLEVBQTNCO0FBQ0EsSUFBSUMscUJBQXFCLEdBQUcsRUFBNUI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxFQUF6QjtBQUNBLElBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLEVBQTFCO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsRUFBekI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUNWLFFBRFUsRUFFVixPQUZVLEVBR1YsaUJBSFUsRUFJVixrQkFKVSxFQUtWLG1CQUxVLEVBTVYsYUFOVSxFQU9WLGVBUFUsRUFRVixTQVJVLEVBU1YsZ0JBVFUsRUFVVixlQVZVLEVBV1YsY0FYVSxFQVlWLFdBWlUsQ0FBZDs7QUFlQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekJGLGNBQVksQ0FBQ0csSUFBYixDQUFrQkQsQ0FBbEI7QUFDSDs7QUFFREUsRUFBRSxDQUFDQyxHQUFILENBQU8scUZBQVAsRUFDQ0MsSUFERCxDQUNNLFVBQUFDLElBQUksRUFBSTtBQUNWO0FBQ0EsT0FBSyxJQUFJTCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHSyxJQUFJLENBQUNDLE1BQXpCLEVBQWlDTixFQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUksQ0FBQ2YsS0FBSyxDQUFDc0IsUUFBTixDQUFlRixJQUFJLENBQUNMLEVBQUQsQ0FBSixDQUFRLFVBQVIsQ0FBZixDQUFMLEVBQTBDO0FBQ3RDZixXQUFLLENBQUNnQixJQUFOLENBQVdJLElBQUksQ0FBQ0wsRUFBRCxDQUFKLENBQVEsVUFBUixDQUFYO0FBQ0gsS0FGRCxNQUVPLElBQUksQ0FBQ2YsS0FBSyxDQUFDc0IsUUFBTixDQUFlRixJQUFJLENBQUNMLEVBQUQsQ0FBSixDQUFRLFVBQVIsQ0FBZixDQUFMLEVBQTBDO0FBQzdDZixXQUFLLENBQUNnQixJQUFOLENBQVdJLElBQUksQ0FBQ0wsRUFBRCxDQUFKLENBQVEsVUFBUixDQUFYO0FBQ0g7QUFDSixHQVJTLENBU1Y7OztBQUNBLE9BQUssSUFBSUEsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR2YsS0FBSyxDQUFDcUIsTUFBMUIsRUFBa0NOLEdBQUMsRUFBbkMsRUFBdUM7QUFDbkMsUUFBSVEsSUFBSSxHQUFHdkIsS0FBSyxDQUFDZSxHQUFELENBQWhCO0FBQ0FkLGdCQUFZLENBQUNzQixJQUFELENBQVosR0FBcUIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBckI7QUFDQXJCLGVBQVcsQ0FBQ3FCLElBQUQsQ0FBWCxHQUFvQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUFwQjtBQUNBcEIsdUJBQW1CLENBQUNvQixJQUFELENBQW5CLEdBQTRCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTVCO0FBQ0FuQix3QkFBb0IsQ0FBQ21CLElBQUQsQ0FBcEIsR0FBNkIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBN0I7QUFDQWxCLHlCQUFxQixDQUFDa0IsSUFBRCxDQUFyQixHQUE4QixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUE5QjtBQUNBakIsZUFBVyxDQUFDaUIsSUFBRCxDQUFYLEdBQW9CLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXBCO0FBQ0FoQixzQkFBa0IsQ0FBQ2dCLElBQUQsQ0FBbEIsR0FBMkIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBM0I7QUFDQWYsaUJBQWEsQ0FBQ2UsSUFBRCxDQUFiLEdBQXNCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXRCO0FBQ0FkLHVCQUFtQixDQUFDYyxJQUFELENBQW5CLEdBQTRCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTVCO0FBQ0FiLHNCQUFrQixDQUFDYSxJQUFELENBQWxCLEdBQTJCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTNCO0FBQ0FaLHFCQUFpQixDQUFDWSxJQUFELENBQWpCLEdBQTBCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTFCO0FBQ0FYLGtCQUFjLENBQUNXLElBQUQsQ0FBZCxHQUF1QixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF2Qjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsTUFBekIsRUFBaUNHLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsVUFBSUMsS0FBSyxHQUFHTCxJQUFJLENBQUNJLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxVQUFVLEdBQUd6QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQS9DLEVBQWtELENBQWxELENBQWpCO0FBQ0EsVUFBSU0sWUFBWSxHQUFHMUIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUEvQyxFQUFrRCxDQUFsRCxDQUFuQjtBQUNBLFVBQUlPLFNBQVMsR0FBRzFCLFdBQVcsQ0FBQ3FCLElBQUQsQ0FBWCxDQUFrQnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBOUMsRUFBaUQsQ0FBakQsQ0FBaEI7QUFDQSxVQUFJUSxpQkFBaUIsR0FBRzFCLG1CQUFtQixDQUFDb0IsSUFBRCxDQUFuQixDQUEwQnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBdEQsRUFBeUQsQ0FBekQsQ0FBeEI7QUFDQSxVQUFJUyxrQkFBa0IsR0FBRzFCLG9CQUFvQixDQUFDbUIsSUFBRCxDQUFwQixDQUEyQnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBdkQsRUFBMEQsQ0FBMUQsQ0FBekI7QUFDQSxVQUFJVSxtQkFBbUIsR0FBRzFCLHFCQUFxQixDQUFDa0IsSUFBRCxDQUFyQixDQUE0QnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBeEQsRUFBMkQsQ0FBM0QsQ0FBMUI7QUFDQSxVQUFJVyxTQUFTLEdBQUcxQixXQUFXLENBQUNpQixJQUFELENBQVgsQ0FBa0J0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQTlDLEVBQWlELENBQWpELENBQWhCO0FBQ0EsVUFBSVksZ0JBQWdCLEdBQUcxQixrQkFBa0IsQ0FBQ2dCLElBQUQsQ0FBbEIsQ0FBeUJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXJELEVBQXdELENBQXhELENBQXZCO0FBQ0EsVUFBSWEsV0FBVyxHQUFHMUIsYUFBYSxDQUFDZSxJQUFELENBQWIsQ0FBb0J0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQWhELEVBQW1ELENBQW5ELENBQWxCO0FBQ0EsVUFBSWMsaUJBQWlCLEdBQUcxQixtQkFBbUIsQ0FBQ2MsSUFBRCxDQUFuQixDQUEwQnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBdEQsRUFBeUQsQ0FBekQsQ0FBeEI7QUFDQSxVQUFJZSxnQkFBZ0IsR0FBRzFCLGtCQUFrQixDQUFDYSxJQUFELENBQWxCLENBQXlCdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUFyRCxFQUF3RCxDQUF4RCxDQUF2QjtBQUNBLFVBQUlnQixlQUFlLEdBQUcxQixpQkFBaUIsQ0FBQ1ksSUFBRCxDQUFqQixDQUF3QnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBcEQsRUFBdUQsQ0FBdkQsQ0FBdEI7QUFDQSxVQUFJaUIsWUFBWSxHQUFHMUIsY0FBYyxDQUFDVyxJQUFELENBQWQsQ0FBcUJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQWpELEVBQW9ELENBQXBELENBQW5CLENBZGtDLENBZWxDOztBQUNBLFVBQUlJLEtBQUssQ0FBQyxVQUFELENBQUwsS0FBc0JGLElBQTFCLEVBQStCO0FBQzNCLGdCQUFRRSxLQUFLLENBQUMsS0FBRCxDQUFiO0FBQ0ksZUFBSyxHQUFMO0FBQ0l4Qix3QkFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CUCxJQUFuQixDQUF3QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJELFVBQVUsR0FBRyxDQUFoQyxDQUF4QjtBQUNBOztBQUNKLGVBQUssR0FBTDtBQUNJekIsd0JBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQlAsSUFBbkIsQ0FBd0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CRCxVQUFuQixDQUF4QjtBQUNBOztBQUNKLGVBQUssR0FBTDtBQUNJekIsd0JBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQlAsSUFBbkIsQ0FBd0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW9CRCxVQUFVLEdBQUcsQ0FBakMsQ0FBeEI7O0FBQ0o7QUFDSTtBQVZSLFNBRDJCLENBYTNCOzs7QUFDQXhCLG1CQUFXLENBQUNxQixJQUFELENBQVgsQ0FBa0JQLElBQWxCLENBQXVCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkMsU0FBUyxHQUFHVyxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBdkMsQ0FBdkI7QUFDQXRCLDJCQUFtQixDQUFDb0IsSUFBRCxDQUFuQixDQUEwQlAsSUFBMUIsQ0FBK0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CRSxpQkFBaUIsR0FBR1UsUUFBUSxDQUFDZCxLQUFLLENBQUMsS0FBRCxDQUFOLENBQS9DLENBQS9CO0FBQ0FyQiw0QkFBb0IsQ0FBQ21CLElBQUQsQ0FBcEIsQ0FBMkJQLElBQTNCLENBQWdDLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkcsa0JBQWtCLEdBQUdTLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFoRCxDQUFoQztBQUNBcEIsNkJBQXFCLENBQUNrQixJQUFELENBQXJCLENBQTRCUCxJQUE1QixDQUFpQyxDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJJLG1CQUFtQixJQUFJUSxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBUixHQUEwQmMsUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQXRDLENBQXRDLENBQWpDO0FBQ0FuQixtQkFBVyxDQUFDaUIsSUFBRCxDQUFYLENBQWtCUCxJQUFsQixDQUF1QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJLLFNBQVMsR0FBR08sUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQXZDLENBQXZCO0FBQ0FsQiwwQkFBa0IsQ0FBQ2dCLElBQUQsQ0FBbEIsQ0FBeUJQLElBQXpCLENBQThCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQk0sZ0JBQWdCLEdBQUdNLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUE5QyxDQUE5QjtBQUNBakIscUJBQWEsQ0FBQ2UsSUFBRCxDQUFiLENBQW9CUCxJQUFwQixDQUF5QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJPLFdBQVcsR0FBR0ssUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQXpDLENBQXpCO0FBQ0FoQiwyQkFBbUIsQ0FBQ2MsSUFBRCxDQUFuQixDQUEwQlAsSUFBMUIsQ0FBK0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CUSxpQkFBaUIsR0FBR0ksUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQS9DLENBQS9CO0FBQ0FmLDBCQUFrQixDQUFDYSxJQUFELENBQWxCLENBQXlCUCxJQUF6QixDQUE4QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJTLGdCQUFnQixHQUFHRyxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBOUMsQ0FBOUI7QUFDQWQseUJBQWlCLENBQUNZLElBQUQsQ0FBakIsQ0FBd0JQLElBQXhCLENBQTZCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQlUsZUFBZSxHQUFHRSxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBN0MsQ0FBN0I7QUFDQWIsc0JBQWMsQ0FBQ1csSUFBRCxDQUFkLENBQXFCUCxJQUFyQixDQUEwQixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJXLFlBQVksR0FBR0MsUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTFDLENBQTFCO0FBQ0gsT0F6QkQsTUF5Qk8sSUFBSUEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxLQUFzQkYsSUFBMUIsRUFBK0I7QUFDbEMsZ0JBQVFFLEtBQUssQ0FBQyxLQUFELENBQWI7QUFDSSxlQUFLLEdBQUw7QUFDSXhCLHdCQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJQLElBQW5CLENBQXdCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkQsVUFBVSxHQUFHLENBQWhDLENBQXhCO0FBQ0E7O0FBQ0osZUFBSyxHQUFMO0FBQ0l6Qix3QkFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CUCxJQUFuQixDQUF3QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJELFVBQW5CLENBQXhCO0FBQ0E7O0FBQ0osZUFBSyxHQUFMO0FBQ0l6Qix3QkFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CUCxJQUFuQixDQUF3QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBb0JELFVBQVUsR0FBRyxDQUFqQyxDQUF4Qjs7QUFDSjtBQUNJO0FBVlI7O0FBWUF4QixtQkFBVyxDQUFDcUIsSUFBRCxDQUFYLENBQWtCUCxJQUFsQixDQUF1QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJDLFNBQVMsR0FBR1csUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQXZDLENBQXZCO0FBQ0F0QiwyQkFBbUIsQ0FBQ29CLElBQUQsQ0FBbkIsQ0FBMEJQLElBQTFCLENBQStCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkUsaUJBQWlCLEdBQUdVLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLEtBQUQsQ0FBTixDQUEvQyxDQUEvQjtBQUNBckIsNEJBQW9CLENBQUNtQixJQUFELENBQXBCLENBQTJCUCxJQUEzQixDQUFnQyxDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJHLGtCQUFrQixHQUFHUyxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBaEQsQ0FBaEM7QUFDQXBCLDZCQUFxQixDQUFDa0IsSUFBRCxDQUFyQixDQUE0QlAsSUFBNUIsQ0FBaUMsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CSSxtQkFBbUIsSUFBSVEsUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQVIsR0FBMEJjLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUF0QyxDQUF0QyxDQUFqQztBQUNBbkIsbUJBQVcsQ0FBQ2lCLElBQUQsQ0FBWCxDQUFrQlAsSUFBbEIsQ0FBdUIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CSyxTQUFTLEdBQUdPLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUF2QyxDQUF2QjtBQUNBbEIsMEJBQWtCLENBQUNnQixJQUFELENBQWxCLENBQXlCUCxJQUF6QixDQUE4QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJNLGdCQUFnQixHQUFHTSxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBOUMsQ0FBOUI7QUFDQWpCLHFCQUFhLENBQUNlLElBQUQsQ0FBYixDQUFvQlAsSUFBcEIsQ0FBeUIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CTyxXQUFXLEdBQUdLLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUF6QyxDQUF6QjtBQUNBaEIsMkJBQW1CLENBQUNjLElBQUQsQ0FBbkIsQ0FBMEJQLElBQTFCLENBQStCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQlEsaUJBQWlCLEdBQUdJLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUEvQyxDQUEvQjtBQUNBZiwwQkFBa0IsQ0FBQ2EsSUFBRCxDQUFsQixDQUF5QlAsSUFBekIsQ0FBOEIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CUyxnQkFBZ0IsR0FBR0csUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTlDLENBQTlCO0FBQ0FkLHlCQUFpQixDQUFDWSxJQUFELENBQWpCLENBQXdCUCxJQUF4QixDQUE2QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJVLGVBQWUsR0FBR0UsUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTdDLENBQTdCO0FBQ0FiLHNCQUFjLENBQUNXLElBQUQsQ0FBZCxDQUFxQlAsSUFBckIsQ0FBMEIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CVyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUExQyxDQUExQjtBQUNIO0FBQ0o7QUFDSixHQTNGUyxDQTZGZDs7O0FBQ0EsTUFBSWUsTUFBTSxHQUFHO0FBQUNDLE9BQUcsRUFBRSxFQUFOO0FBQVVDLFNBQUssRUFBRSxFQUFqQjtBQUFxQkMsVUFBTSxFQUFFLEVBQTdCO0FBQWlDQyxRQUFJLEVBQUU7QUFBdkMsR0FBYjtBQUFBLE1BQ0FDLEtBQUssR0FBRyxNQUFNTCxNQUFNLENBQUNJLElBQWIsR0FBb0JKLE1BQU0sQ0FBQ0UsS0FEbkM7QUFBQSxNQUVBSSxNQUFNLEdBQUcsTUFBTU4sTUFBTSxDQUFDQyxHQUFiLEdBQW1CRCxNQUFNLENBQUNHLE1BRm5DO0FBSUEsTUFBSUksR0FBRyxHQUFHOUIsRUFBRSxDQUFDK0IsTUFBSCxDQUFVLE1BQVYsRUFBa0JDLE1BQWxCLENBQXlCLEtBQXpCLEVBQ1RDLElBRFMsQ0FDSixPQURJLEVBQ0tMLEtBQUssR0FBR0wsTUFBTSxDQUFDSSxJQUFmLEdBQXNCSixNQUFNLENBQUNFLEtBRGxDLEVBRVRRLElBRlMsQ0FFSixRQUZJLEVBRU1KLE1BQU0sR0FBR04sTUFBTSxDQUFDQyxHQUFoQixHQUFzQkQsTUFBTSxDQUFDRyxNQUZuQyxFQUdUTSxNQUhTLENBR0YsR0FIRSxFQUlUQyxJQUpTLENBSUosV0FKSSxFQUlTLGVBQWVWLE1BQU0sQ0FBQ0ksSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNKLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FKekQsQ0FBVixDQWxHYyxDQTBHWjs7QUFFQU0sS0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUNBLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQW9EQSxJQUFwRCxDQUF5RCxHQUF6RCxFQUE4RCxDQUE5RCxFQUFpRUMsS0FBakUsQ0FBdUUsTUFBdkUsRUFBK0UsS0FBL0U7QUFDQUosS0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUNBLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQW9EQSxJQUFwRCxDQUF5RCxHQUF6RCxFQUE4RCxDQUE5RCxFQUFpRUMsS0FBakUsQ0FBdUUsTUFBdkUsRUFBK0UsUUFBL0U7QUFDQUosS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0NBLElBQWxDLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDLEVBQWdEQyxLQUFoRCxDQUFzRCxNQUF0RCxFQUE4RCxPQUE5RCxFQUF1RUMsSUFBdkUsQ0FBNEUsbUJBQTVFLEVBQWlHRixJQUFqRyxDQUFzRyxvQkFBdEcsRUFBMkgsUUFBM0g7QUFDQUgsS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0NBLElBQWxDLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDLEVBQWdEQyxLQUFoRCxDQUFzRCxNQUF0RCxFQUE4RCxPQUE5RCxFQUF1RUMsSUFBdkUsQ0FBNEUscUJBQTVFLEVBQW1HRixJQUFuRyxDQUF3RyxvQkFBeEcsRUFBNkgsUUFBN0gsRUEvR1ksQ0FrSGQ7O0FBQ0EsTUFBTUcsY0FBYyxHQUFHcEMsRUFBRSxDQUFDK0IsTUFBSCxDQUFVLE1BQVYsRUFBa0JDLE1BQWxCLENBQXlCLFFBQXpCLENBQXZCLENBbkhjLENBcUhkOztBQUNBSSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCLGFBQXpCLEVBQ0NsQyxJQURELENBQ01OLEtBRE4sRUFFQ3lDLEtBRkQsR0FHQ04sTUFIRCxDQUdRLFFBSFIsRUFJQ0csSUFKRCxDQUlNLFVBQVNJLENBQVQsRUFBWTtBQUFDLFdBQU9BLENBQVA7QUFBUyxHQUo1QixFQUtDTixJQUxELENBS00sT0FMTixFQUtlLFVBQUFNLENBQUMsRUFBSTtBQUFDLFdBQU9BLENBQVA7QUFBUyxHQUw5QixFQXRIYyxDQStIVjs7QUFDQVQsS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixhQURuQixFQUVDQSxJQUZELENBRU0sR0FGTixFQUVXLElBQUlWLE1BQU0sQ0FBQ0ksSUFBWCxHQUFrQixDQUY3QixFQUdDTSxJQUhELENBR00sR0FITixFQUdXLElBQUtKLE1BQU0sR0FBQyxDQUh2QixFQUlDSSxJQUpELENBSU0sSUFKTixFQUlZLEtBSlosRUFLQ0MsS0FMRCxDQUtPLGFBTFAsRUFLc0IsUUFMdEIsRUFNQ0QsSUFORCxDQU1NLE9BTk4sRUFNZSxZQU5mLEVBT0NFLElBUEQsQ0FPTSxRQVBOLEVBUUNGLElBUkQsQ0FRTSxXQVJOLEVBUW1CLE1BUm5CLEVBU0NDLEtBVEQsQ0FTTyxNQVRQLEVBU2UsT0FUZixFQWhJVSxDQTJJUjs7QUFDQUosS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixnQkFBaUJMLEtBQUssR0FBQyxDQUF2QixHQUE0QixJQUE1QixJQUFvQ0MsTUFBTSxHQUFHTixNQUFNLENBQUNDLEdBQWhCLEdBQXNCLEVBQTFELElBQWdFLEdBRG5GLEVBRUNTLElBRkQsQ0FFTSxPQUZOLEVBRWUsT0FGZixFQUdDQyxLQUhELENBR08sYUFIUCxFQUdzQixRQUh0QixFQUlDQyxJQUpELENBSU0sVUFKTixFQUtDRixJQUxELENBS00sV0FMTixFQUttQixNQUxuQixFQU1DQyxLQU5ELENBTU8sTUFOUCxFQU1lLE9BTmY7QUFRTixNQUFJTSxDQUFDLEdBQUd4QyxFQUFFLENBQUN5QyxXQUFILEdBQWlCQyxLQUFqQixDQUF1QixDQUFDLENBQUQsRUFBSWQsS0FBSixDQUF2QixDQUFSO0FBQ0EsTUFBSWUsS0FBSyxHQUFHM0MsRUFBRSxDQUFDNEMsVUFBSCxHQUFnQkMsS0FBaEIsQ0FBc0JMLENBQXRCLENBQVo7QUFFQVYsS0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixpQkFBaUJKLE1BQWpCLEdBQTBCLEdBRDdDLEVBRUNJLElBRkQsQ0FFTSxPQUZOLEVBRWUsT0FGZixFQUdDQyxLQUhELENBR08sTUFIUCxFQUdlLE9BSGY7QUFLQSxNQUFJWSxDQUFDLEdBQUc5QyxFQUFFLENBQUN5QyxXQUFILEdBQWlCQyxLQUFqQixDQUF1QixDQUFDYixNQUFELEVBQVMsQ0FBVCxDQUF2QixDQUFSO0FBQ0EsTUFBSWtCLEtBQUssR0FBRy9DLEVBQUUsQ0FBQ2dELFFBQUgsR0FBY0gsS0FBZCxDQUFvQkMsQ0FBcEIsQ0FBWjtBQUNBaEIsS0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUNDQyxJQURELENBQ00sT0FETixFQUNlLE9BRGYsRUFFQ0MsS0FGRCxDQUVPLE1BRlAsRUFFZSxPQUZmOztBQUlBLE1BQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUM5QyxJQUFELEVBQU8rQyxLQUFQLEVBQWlCO0FBSTVCVixLQUFDLENBQUNXLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSW5ELEVBQUUsQ0FBQ29ELEdBQUgsQ0FBT3hELFlBQVAsQ0FBSixDQUFUO0FBQ0FrQyxPQUFHLENBQUNPLFNBQUosQ0FBYyxRQUFkLEVBQ0NnQixVQURELEdBRUNDLFFBRkQsQ0FFVSxJQUZWLEVBR0NDLElBSEQsQ0FHTVosS0FITjtBQUtBLFFBQUlhLFVBQVUsR0FBR3JELElBQUksQ0FBQyxXQUFELENBQUosQ0FBa0IsRUFBbEIsRUFBc0IsQ0FBdEIsQ0FBakI7QUFDQSxRQUFJc0QsVUFBVSxHQUFHdEQsSUFBSSxDQUFDLGFBQUQsQ0FBSixDQUFvQixFQUFwQixFQUF3QixDQUF4QixDQUFqQjtBQUVBcUQsY0FBVSxJQUFJQyxVQUFkLEdBQTJCWCxDQUFDLENBQUNLLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSUssVUFBSixDQUFULENBQTNCLEdBQXVEVixDQUFDLENBQUNLLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSU0sVUFBSixDQUFULENBQXZEO0FBRUEzQixPQUFHLENBQUNPLFNBQUosQ0FBYyxRQUFkLEVBQ0NnQixVQURELEdBRUNDLFFBRkQsQ0FFVSxJQUZWLEVBR0NDLElBSEQsQ0FHTVIsS0FITjtBQUtBakIsT0FBRyxDQUFDQyxNQUFKLENBQVcsYUFBWCxFQUEwQkksSUFBMUIsQ0FBK0JlLEtBQS9CO0FBS0EsUUFBSVEsS0FBSyxHQUFHNUIsR0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxDQUFaO0FBQ0EsUUFBSXNCLEtBQUssR0FBRzdCLEdBQUcsQ0FBQ08sU0FBSixDQUFjLFFBQWQsQ0FBWjs7QUFFQSxRQUFJcUIsS0FBSixFQUFXO0FBQUM1QixTQUFHLENBQUNPLFNBQUosQ0FBYyxRQUFkLEVBQXdCdUIsTUFBeEI7QUFBaUM7O0FBQzdDLFFBQUlELEtBQUosRUFBVztBQUFDN0IsU0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUF3QnVCLE1BQXhCO0FBQWlDOztBQUU3Q0YsU0FBSyxHQUFHNUIsR0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUF3QmxDLElBQXhCLENBQTZCLENBQUNBLElBQUQsQ0FBN0IsRUFBcUMsVUFBQW9DLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUMsV0FBRCxDQUFMO0FBQUEsS0FBdEMsQ0FBUjtBQUNBb0IsU0FBSyxHQUFHN0IsR0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUF3QmxDLElBQXhCLENBQTZCLENBQUNBLElBQUQsQ0FBN0IsRUFBcUMsVUFBQW9DLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUMsYUFBRCxDQUFMO0FBQUEsS0FBdEMsQ0FBUjtBQUVBbUIsU0FBSyxDQUNKcEIsS0FERCxHQUVDdUIsS0FGRCxDQUVPMUQsSUFBSSxDQUFDLFdBQUQsQ0FGWCxFQUdDNkIsTUFIRCxDQUdRLE1BSFIsRUFJQ0MsSUFKRCxDQUlNLE9BSk4sRUFJZSxPQUpmLEVBS0M2QixLQUxELENBS09KLEtBTFAsRUFNQ0wsVUFORCxHQU9DQyxRQVBELENBT1UsSUFQVixFQVFDckIsSUFSRCxDQVFNLEdBUk4sRUFRV2pDLEVBQUUsQ0FBQytELElBQUgsR0FDVnZCLENBRFUsQ0FDUixVQUFBRCxDQUFDLEVBQUk7QUFBQyxhQUFPQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixLQURmLEVBRVZPLENBRlUsQ0FFUixVQUFBUCxDQUFDLEVBQUk7QUFBQyxhQUFPTyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFnQixLQUZkLENBUlgsRUFXQ04sSUFYRCxDQVdNLE1BWE4sRUFXYyxNQVhkLEVBWUNBLElBWkQsQ0FZTSxRQVpOLEVBWWdCLEtBWmhCLEVBYUNBLElBYkQsQ0FhTSxjQWJOLEVBYXNCLEdBYnRCO0FBZUEwQixTQUFLLENBQUNyQixLQUFOLEdBQ0N1QixLQURELENBQ08xRCxJQUFJLENBQUMsYUFBRCxDQURYLEVBRUM2QixNQUZELENBRVEsTUFGUixFQUdDQyxJQUhELENBR00sT0FITixFQUdlLE9BSGYsRUFJQzZCLEtBSkQsQ0FJT0gsS0FKUCxFQUtDTixVQUxELEdBTUNDLFFBTkQsQ0FNVSxJQU5WLEVBT0NyQixJQVBELENBT00sR0FQTixFQU9XakMsRUFBRSxDQUFDK0QsSUFBSCxHQUNWdkIsQ0FEVSxDQUNSLFVBQUFELENBQUMsRUFBSTtBQUFDLGFBQU9DLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFSO0FBQWlCLEtBRGYsRUFFVk8sQ0FGVSxDQUVSLFVBQUFQLENBQUMsRUFBSTtBQUFDLGFBQU9PLENBQUMsQ0FBQ1AsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFSO0FBQWdCLEtBRmQsQ0FQWCxFQVVDTixJQVZELENBVU0sTUFWTixFQVVjLE1BVmQsRUFXQ0EsSUFYRCxDQVdNLFFBWE4sRUFXZ0IsUUFYaEIsRUFZQ0EsSUFaRCxDQVlNLGNBWk4sRUFZc0IsR0FadEIsRUFqRDRCLENBZ0U1QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPSCxHQWhGRDs7QUFrRkFnQixRQUFNLENBQUNqRSxZQUFELEVBQWUsUUFBZixDQUFOO0FBSUFvRCxnQkFBYyxDQUFDNEIsRUFBZixDQUFrQixRQUFsQixFQUE0QixVQUFTekIsQ0FBVCxFQUFZO0FBQ3BDLFFBQUkwQixjQUFjLEdBQUdqRSxFQUFFLENBQUMrQixNQUFILENBQVUsSUFBVixFQUFnQm1DLFFBQWhCLENBQXlCLE9BQXpCLENBQXJCOztBQUNBLFlBQVFELGNBQVI7QUFDSSxXQUFLLFFBQUw7QUFDSWhCLGNBQU0sQ0FBQ2pFLFlBQUQsRUFBZWlGLGNBQWYsQ0FBTjtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNJaEIsY0FBTSxDQUFDaEUsV0FBRCxFQUFjZ0YsY0FBZCxDQUFOO0FBQ0E7O0FBQ0osV0FBSyxpQkFBTDtBQUNJaEIsY0FBTSxDQUFDL0QsbUJBQUQsRUFBc0IrRSxjQUF0QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxrQkFBTDtBQUNJaEIsY0FBTSxDQUFDOUQsb0JBQUQsRUFBdUI4RSxjQUF2QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxtQkFBTDtBQUNJaEIsY0FBTSxDQUFDN0QscUJBQUQsRUFBd0I2RSxjQUF4QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxhQUFMO0FBQ0loQixjQUFNLENBQUM1RCxXQUFELEVBQWM0RSxjQUFkLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQzNELGtCQUFELEVBQXFCMkUsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJaEIsY0FBTSxDQUFDMUQsYUFBRCxFQUFnQjBFLGNBQWhCLENBQU47QUFDQTs7QUFDSixXQUFLLGdCQUFMO0FBQ0loQixjQUFNLENBQUN6RCxtQkFBRCxFQUFzQnlFLGNBQXRCLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQ3hELGtCQUFELEVBQXFCd0UsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssY0FBTDtBQUNJaEIsY0FBTSxDQUFDdkQsaUJBQUQsRUFBb0J1RSxjQUFwQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0loQixjQUFNLENBQUN0RCxjQUFELEVBQWlCc0UsY0FBakIsQ0FBTjtBQUNBOztBQUNKO0FBQ0k7QUF0Q1I7QUF3Q0gsR0ExQ0Q7QUE4Q0MsQ0F2U0QsRTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IHNlYXNvblBvaW50cyA9IHt9O1xubGV0IHNlYXNvblNob3RzID0ge307XG5sZXQgc2Vhc29uU2hvdHNPblRhcmdldCA9IHt9O1xubGV0IHNlYXNvbkZpcnN0SGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uU2Vjb25kSGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uR29hbHMgPSB7fTtcbmxldCBzZWFzb25Hb2Fsc0FnYWluc3QgPSB7fTtcbmxldCBzZWFzb25Db3JuZXJzID0ge307XG5sZXQgc2Vhc29uRm91bHNDb21taXRlZCA9IHt9O1xubGV0IHNlYXNvbkZvdWxzQWdhaW5zdCA9IHt9O1xubGV0IHNlYXNvblllbGxvd0NhcmRzID0ge307XG5sZXQgc2Vhc29uUmVkQ2FyZHMgPSB7fTtcbmxldCBzZWFzb25MZW5ndGggPSBbXTtcblxuY29uc3QgU1RBVFMgPSBbXG4gICAgXCJQb2ludHNcIixcbiAgICBcIlNob3RzXCIsIFxuICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgXCJDb3JuZXJzXCIsIFxuICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgIFwiUmVkIENhcmRzXCJdO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzk7IGkrKykge1xuICAgIHNlYXNvbkxlbmd0aC5wdXNoKGkpOyAgICBcbn1cblxuZDMuY3N2KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLzIwMTgtMjAxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJIb21lVGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkhvbWVUZWFtXCJdKVxuICAgICAgICB9IGVsc2UgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBuZXN0ZWQgbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtIHBvaW50cyBmcm9tIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNob3RzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uR29hbHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZvdWxzQWdhaW5zdFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblllbGxvd0NhcmRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uUmVkQ2FyZHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IGRhdGFbal07XG4gICAgICAgICAgICBsZXQgcHJldlBvaW50cyA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2TWF0Y2hkYXkgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICBsZXQgcHJldlNob3RzID0gc2Vhc29uU2hvdHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQgPSBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FscyA9IHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMgPSBzZWFzb25TZWNvbmRIYWxmR29hbHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkdvYWxzID0gc2Vhc29uR29hbHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkdvYWxzQWdhaW5zdCA9IHNlYXNvbkdvYWxzQWdhaW5zdFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Q29ybmVycyA9IHNlYXNvbkNvcm5lcnNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQgPSBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QgPSBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzID0gc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzID0gc2Vhc29uUmVkQ2FyZHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAvLyBzd2l0Y2ggc3RhdGVtZW50cyBmb3IgYnVpbGRpbmcgdGVhbSBwb2ludHMgYXJyYXlcbiAgICAgICAgICAgIGlmIChtYXRjaFtcIkhvbWVUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmaWxsaW5nIHVwIHRoZSBpbmRpdmlkdWFsIHN0YXRzIG9iamVjdHMvYXJyYXlcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHMgKyBwYXJzZUludChtYXRjaFtcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNob3RzT25UYXJnZXRbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzT25UYXJnZXQgKyBwYXJzZUludChtYXRjaFtcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMgKyBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMgKyAocGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzQWdhaW5zdFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHNBZ2FpbnN0ICsgcGFyc2VJbnQobWF0Y2hbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkNvcm5lcnNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkNvcm5lcnMgKyBwYXJzZUludChtYXRjaFtcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZvdWxzQ29tbWl0ZWRbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZvdWxzQWdhaW5zdFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0ICsgcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25ZZWxsb3dDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2WWVsbG93Q2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblJlZENhcmRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZSZWRDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoW1wiQXdheVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzICsgcGFyc2VJbnQobWF0Y2hbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90c09uVGFyZ2V0ICsgcGFyc2VJbnQobWF0Y2hbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRmlyc3RIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzICsgKHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZDb3JuZXJzICsgcGFyc2VJbnQobWF0Y2hbXCJBQ1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkICsgcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlllbGxvd0NhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBWVwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25SZWRDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UmVkQ2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkFSXCJdKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuLy8gIExpbmUgR3JhcGhcbnZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDcwLCBsZWZ0OiA1MH0sXG53aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXG5cbiAgLy8gWCBhbmQgWSBBeGlzXG5cbiAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNTApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKVxuICBzdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA3MCkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwieWVsbG93XCIpXG4gIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJMaXZlcnBvb2wgMjAxOC0xOVwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsXCJtaWRkbGVcIilcbiAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChcIlNvdXRoYW1wdG9uIDIwMTgtMTlcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG5cblxuLy8gIENyZWF0ZSBhIGRyb3Bkb3duIGJ1dHRvbiB0byBzZWxlY3QgZGF0YSBvdXRwdXRcbmNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzZWxlY3RcIilcblxuLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIERyb3Bkb3duXG5kcm9wRG93bkJ1dHRvbi5zZWxlY3RBbGwoJ2RhdGFPcHRpb25zJylcbi5kYXRhKFNUQVRTKVxuLmVudGVyKClcbi5hcHBlbmQoJ29wdGlvbicpXG4udGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGR9KVxuLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG5cbiBcbiAgICAvLyBZLWF4aXMgbGFiZWxcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgMCAtIG1hcmdpbi5sZWZ0IC0gNSlcbiAgICAuYXR0cihcInhcIiwgMCAtIChoZWlnaHQvMikpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAudGV4dChcIlBvaW50c1wiKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbiAgICAgIC8vIFgtYXhpcyBsYWJlbFxuICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlIChcIiArICh3aWR0aC8yKSArIFwiICxcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgMjUpICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbmxldCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKTtcbmxldCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oKS5zY2FsZSh4KTtcblxuc3ZnLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi5hdHRyKFwiY2xhc3NcIiwgXCJYQXhpc1wiKVxuLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pO1xubGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbi5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuY29uc3QgdXBkYXRlID0gKGRhdGEsIHRpdGxlKSA9PiB7XG5cbiBcblxuICAgIHguZG9tYWluKFswLCBkMy5tYXgoc2Vhc29uTGVuZ3RoKV0pO1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIuWEF4aXNcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgbGV0IHRlYW1PbmVNYXggPSBkYXRhW1wiTGl2ZXJwb29sXCJdWzM4XVsxXTtcbiAgICBsZXQgdGVhbVR3b01heCA9IGRhdGFbXCJTb3V0aGFtcHRvblwiXVszOF1bMV07XG5cbiAgICB0ZWFtT25lTWF4ID49IHRlYW1Ud29NYXggPyB5LmRvbWFpbihbMCwgdGVhbU9uZU1heF0pIDogeS5kb21haW4oWzAsIHRlYW1Ud29NYXhdKTsgXG4gICAgXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5ZQXhpc1wiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuY2FsbCh5QXhpcylcbiAgICBcbiAgICBzdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgIFxuXG5cbiAgICBsZXQgbGluZTEgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpXG4gICAgbGV0IGxpbmUyID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKVxuICAgIFxuICAgIGlmIChsaW5lMSkge3N2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgaWYgKGxpbmUyKSB7c3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5yZW1vdmUoKX1cblxuICAgIGxpbmUxID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW1wiTGl2ZXJwb29sXCJdKVxuICAgIGxpbmUyID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW1wiU291dGhhbXB0b25cIl0pXG5cbiAgICBsaW5lMVxuICAgIC5lbnRlcigpXG4gICAgLmRhdHVtKGRhdGFbXCJMaXZlcnBvb2xcIl0pXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTFcIilcbiAgICAubWVyZ2UobGluZTEpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTt9KSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cbiAgICBsaW5lMi5lbnRlcigpXG4gICAgLmRhdHVtKGRhdGFbXCJTb3V0aGFtcHRvblwiXSlcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMlwiKVxuICAgIC5tZXJnZShsaW5lMilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgIC54KGQgPT4ge3JldHVybiB4KGRbMF0pOyB9KVxuICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pO30pKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcInllbGxvd1wiKVxuICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuICBcbiAgICAvLyBsZXQgbGluZTFMZW5ndGggPSBkMy5zZWxlY3RBbGwoXCIubGluZTFcIikubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgLy8gbGV0IGxpbmUyTGVuZ3RoID0gZDMuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgLy8gZDMuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIGxpbmUxTGVuZ3RoICsgXCIgXCIgKyBsaW5lMUxlbmd0aClcbiAgICAvLyAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIGxpbmUxTGVuZ3RoKVxuICAgIC8vIC50cmFuc2l0aW9uKClcbiAgICAvLyAuZHVyYXRpb24oMjAwMClcbiAgICAvLyAuZGVsYXkoMjAwKVxuICAgIC8vIC5lYXNlKGQzLmVhc2VTaW4pXG4gICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKVxuXG4gICAgXG4gICAgXG4gICAgXG4gICBcblxufVxuXG51cGRhdGUoc2Vhc29uUG9pbnRzLCBcIlBvaW50c1wiKTtcblxuXG5cbmRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgIHN3aXRjaCAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblBvaW50cywgc2VsZWN0ZWRPcHRpb24pOyAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2hvdHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TaG90cywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TaG90c09uVGFyZ2V0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25GaXJzdEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblNlY29uZEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkdvYWxzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Hb2Fsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkNvcm5lcnMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Gb3Vsc0NvbW1pdGVkLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZvdWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Gb3Vsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiWWVsbG93IENhcmRzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uWWVsbG93Q2FyZHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uUmVkQ2FyZHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSlcbiAgXG5cbiAgICBcbn0pO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9