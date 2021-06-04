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
var X_AXIS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];

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
        }

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
  svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool").attr("alignment-baseline", "middle");
  svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton").attr("alignment-baseline", "middle"); //  Create a dropdown button to select data output

  var dropDownButton = d3.select("body").append("select"); // Create options for Dropdown

  dropDownButton.selectAll('dataOptions').data(X_AXIS).enter().append('option').text(function (d) {
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
    })).attr("fill", "none").attr("stroke", "yellow").attr("stroke-width", 2.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsInNlYXNvblBvaW50cyIsInNlYXNvblNob3RzIiwic2Vhc29uU2hvdHNPblRhcmdldCIsInNlYXNvbkZpcnN0SGFsZkdvYWxzIiwic2Vhc29uU2Vjb25kSGFsZkdvYWxzIiwic2Vhc29uR29hbHMiLCJzZWFzb25Hb2Fsc0FnYWluc3QiLCJzZWFzb25Db3JuZXJzIiwic2Vhc29uRm91bHNDb21taXRlZCIsInNlYXNvbkZvdWxzQWdhaW5zdCIsInNlYXNvblllbGxvd0NhcmRzIiwic2Vhc29uUmVkQ2FyZHMiLCJzZWFzb25MZW5ndGgiLCJYX0FYSVMiLCJpIiwicHVzaCIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInRlYW0iLCJqIiwibWF0Y2giLCJwcmV2UG9pbnRzIiwicHJldk1hdGNoZGF5IiwicHJldlNob3RzIiwicHJldlNob3RzT25UYXJnZXQiLCJwcmV2Rmlyc3RIYWxmR29hbHMiLCJwcmV2U2Vjb25kSGFsZkdvYWxzIiwicHJldkdvYWxzIiwicHJldkdvYWxzQWdhaW5zdCIsInByZXZDb3JuZXJzIiwicHJldkZvdWxzQ29tbWl0ZWQiLCJwcmV2Rm91bHNBZ2FpbnN0IiwicHJldlllbGxvd0NhcmRzIiwicHJldlJlZENhcmRzIiwicGFyc2VJbnQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsInRleHQiLCJkcm9wRG93bkJ1dHRvbiIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsIngiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5IiwieUF4aXMiLCJheGlzTGVmdCIsInVwZGF0ZSIsInRpdGxlIiwiZG9tYWluIiwibWF4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsInRlYW1PbmVNYXgiLCJ0ZWFtVHdvTWF4IiwibGluZTEiLCJsaW5lMiIsInJlbW92ZSIsImRhdHVtIiwibWVyZ2UiLCJsaW5lIiwib24iLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsRUFBMUI7QUFDQSxJQUFJQyxvQkFBb0IsR0FBRyxFQUEzQjtBQUNBLElBQUlDLHFCQUFxQixHQUFHLEVBQTVCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsRUFBekI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxFQUExQjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLEVBQXpCO0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxJQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FDWCxRQURXLEVBRVgsT0FGVyxFQUdYLGlCQUhXLEVBSVgsa0JBSlcsRUFLWCxtQkFMVyxFQU1YLGFBTlcsRUFPWCxlQVBXLEVBUVgsU0FSVyxFQVNYLGdCQVRXLEVBVVgsZUFWVyxFQVdYLGNBWFcsRUFZWCxXQVpXLENBQWY7O0FBZUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCRixjQUFZLENBQUNHLElBQWIsQ0FBa0JELENBQWxCO0FBQ0g7O0FBRURFLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLGdGQUFQLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxJQUFJLEVBQUk7QUFDVjtBQUNBLE9BQUssSUFBSUwsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0ssSUFBSSxDQUFDQyxNQUF6QixFQUFpQ04sRUFBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJLENBQUNmLEtBQUssQ0FBQ3NCLFFBQU4sQ0FBZUYsSUFBSSxDQUFDTCxFQUFELENBQUosQ0FBUSxVQUFSLENBQWYsQ0FBTCxFQUEwQztBQUN0Q2YsV0FBSyxDQUFDZ0IsSUFBTixDQUFXSSxJQUFJLENBQUNMLEVBQUQsQ0FBSixDQUFRLFVBQVIsQ0FBWDtBQUNILEtBRkQsTUFFTyxJQUFJLENBQUNmLEtBQUssQ0FBQ3NCLFFBQU4sQ0FBZUYsSUFBSSxDQUFDTCxFQUFELENBQUosQ0FBUSxVQUFSLENBQWYsQ0FBTCxFQUEwQztBQUM3Q2YsV0FBSyxDQUFDZ0IsSUFBTixDQUFXSSxJQUFJLENBQUNMLEVBQUQsQ0FBSixDQUFRLFVBQVIsQ0FBWDtBQUNIO0FBQ0osR0FSUyxDQVNWOzs7QUFDQSxPQUFLLElBQUlBLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdmLEtBQUssQ0FBQ3FCLE1BQTFCLEVBQWtDTixHQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFFBQUlRLElBQUksR0FBR3ZCLEtBQUssQ0FBQ2UsR0FBRCxDQUFoQjtBQUNBZCxnQkFBWSxDQUFDc0IsSUFBRCxDQUFaLEdBQXFCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQXJCO0FBQ0FyQixlQUFXLENBQUNxQixJQUFELENBQVgsR0FBb0IsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBcEI7QUFDQXBCLHVCQUFtQixDQUFDb0IsSUFBRCxDQUFuQixHQUE0QixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUE1QjtBQUNBbkIsd0JBQW9CLENBQUNtQixJQUFELENBQXBCLEdBQTZCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTdCO0FBQ0FsQix5QkFBcUIsQ0FBQ2tCLElBQUQsQ0FBckIsR0FBOEIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBOUI7QUFDQWpCLGVBQVcsQ0FBQ2lCLElBQUQsQ0FBWCxHQUFvQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUFwQjtBQUNBaEIsc0JBQWtCLENBQUNnQixJQUFELENBQWxCLEdBQTJCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELENBQTNCO0FBQ0FmLGlCQUFhLENBQUNlLElBQUQsQ0FBYixHQUFzQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUF0QjtBQUNBZCx1QkFBbUIsQ0FBQ2MsSUFBRCxDQUFuQixHQUE0QixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUE1QjtBQUNBYixzQkFBa0IsQ0FBQ2EsSUFBRCxDQUFsQixHQUEyQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUEzQjtBQUNBWixxQkFBaUIsQ0FBQ1ksSUFBRCxDQUFqQixHQUEwQixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUExQjtBQUNBWCxrQkFBYyxDQUFDVyxJQUFELENBQWQsR0FBdUIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsQ0FBdkI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixJQUFJLENBQUNDLE1BQXpCLEVBQWlDRyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFVBQUlDLEtBQUssR0FBR0wsSUFBSSxDQUFDSSxDQUFELENBQWhCO0FBQ0EsVUFBSUUsVUFBVSxHQUFHekIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUEvQyxFQUFrRCxDQUFsRCxDQUFqQjtBQUNBLFVBQUlNLFlBQVksR0FBRzFCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBL0MsRUFBa0QsQ0FBbEQsQ0FBbkI7QUFDQSxVQUFJTyxTQUFTLEdBQUcxQixXQUFXLENBQUNxQixJQUFELENBQVgsQ0FBa0J0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQTlDLEVBQWlELENBQWpELENBQWhCO0FBQ0EsVUFBSVEsaUJBQWlCLEdBQUcxQixtQkFBbUIsQ0FBQ29CLElBQUQsQ0FBbkIsQ0FBMEJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXRELEVBQXlELENBQXpELENBQXhCO0FBQ0EsVUFBSVMsa0JBQWtCLEdBQUcxQixvQkFBb0IsQ0FBQ21CLElBQUQsQ0FBcEIsQ0FBMkJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXZELEVBQTBELENBQTFELENBQXpCO0FBQ0EsVUFBSVUsbUJBQW1CLEdBQUcxQixxQkFBcUIsQ0FBQ2tCLElBQUQsQ0FBckIsQ0FBNEJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXhELEVBQTJELENBQTNELENBQTFCO0FBQ0EsVUFBSVcsU0FBUyxHQUFHMUIsV0FBVyxDQUFDaUIsSUFBRCxDQUFYLENBQWtCdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUE5QyxFQUFpRCxDQUFqRCxDQUFoQjtBQUNBLFVBQUlZLGdCQUFnQixHQUFHMUIsa0JBQWtCLENBQUNnQixJQUFELENBQWxCLENBQXlCdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUFyRCxFQUF3RCxDQUF4RCxDQUF2QjtBQUNBLFVBQUlhLFdBQVcsR0FBRzFCLGFBQWEsQ0FBQ2UsSUFBRCxDQUFiLENBQW9CdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUFoRCxFQUFtRCxDQUFuRCxDQUFsQjtBQUNBLFVBQUljLGlCQUFpQixHQUFHMUIsbUJBQW1CLENBQUNjLElBQUQsQ0FBbkIsQ0FBMEJ0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXRELEVBQXlELENBQXpELENBQXhCO0FBQ0EsVUFBSWUsZ0JBQWdCLEdBQUcxQixrQkFBa0IsQ0FBQ2EsSUFBRCxDQUFsQixDQUF5QnRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQkYsTUFBbkIsR0FBNEIsQ0FBckQsRUFBd0QsQ0FBeEQsQ0FBdkI7QUFDQSxVQUFJZ0IsZUFBZSxHQUFHMUIsaUJBQWlCLENBQUNZLElBQUQsQ0FBakIsQ0FBd0J0QixZQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJGLE1BQW5CLEdBQTRCLENBQXBELEVBQXVELENBQXZELENBQXRCO0FBQ0EsVUFBSWlCLFlBQVksR0FBRzFCLGNBQWMsQ0FBQ1csSUFBRCxDQUFkLENBQXFCdEIsWUFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CRixNQUFuQixHQUE0QixDQUFqRCxFQUFvRCxDQUFwRCxDQUFuQixDQWRrQyxDQWVsQzs7QUFDQSxVQUFJSSxLQUFLLENBQUMsVUFBRCxDQUFMLEtBQXNCRixJQUExQixFQUErQjtBQUMzQixnQkFBUUUsS0FBSyxDQUFDLEtBQUQsQ0FBYjtBQUNJLGVBQUssR0FBTDtBQUNJeEIsd0JBQVksQ0FBQ3NCLElBQUQsQ0FBWixDQUFtQlAsSUFBbkIsQ0FBd0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CRCxVQUFVLEdBQUcsQ0FBaEMsQ0FBeEI7QUFDQTs7QUFDSixlQUFLLEdBQUw7QUFDSXpCLHdCQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJQLElBQW5CLENBQXdCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkQsVUFBbkIsQ0FBeEI7QUFDQTs7QUFDSixlQUFLLEdBQUw7QUFDSXpCLHdCQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJQLElBQW5CLENBQXdCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFvQkQsVUFBVSxHQUFHLENBQWpDLENBQXhCOztBQUNKO0FBQ0k7QUFWUjs7QUFZQXhCLG1CQUFXLENBQUNxQixJQUFELENBQVgsQ0FBa0JQLElBQWxCLENBQXVCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkMsU0FBUyxHQUFHVyxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBdkMsQ0FBdkI7QUFDQXRCLDJCQUFtQixDQUFDb0IsSUFBRCxDQUFuQixDQUEwQlAsSUFBMUIsQ0FBK0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CRSxpQkFBaUIsR0FBR1UsUUFBUSxDQUFDZCxLQUFLLENBQUMsS0FBRCxDQUFOLENBQS9DLENBQS9CO0FBQ0FyQiw0QkFBb0IsQ0FBQ21CLElBQUQsQ0FBcEIsQ0FBMkJQLElBQTNCLENBQWdDLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkcsa0JBQWtCLEdBQUdTLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFoRCxDQUFoQztBQUNBcEIsNkJBQXFCLENBQUNrQixJQUFELENBQXJCLENBQTRCUCxJQUE1QixDQUFpQyxDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJJLG1CQUFtQixJQUFJUSxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBUixHQUEwQmMsUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQXRDLENBQXRDLENBQWpDO0FBQ0FuQixtQkFBVyxDQUFDaUIsSUFBRCxDQUFYLENBQWtCUCxJQUFsQixDQUF1QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJLLFNBQVMsR0FBR08sUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQXZDLENBQXZCO0FBQ0FsQiwwQkFBa0IsQ0FBQ2dCLElBQUQsQ0FBbEIsQ0FBeUJQLElBQXpCLENBQThCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQk0sZ0JBQWdCLEdBQUdNLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUE5QyxDQUE5QjtBQUNBakIscUJBQWEsQ0FBQ2UsSUFBRCxDQUFiLENBQW9CUCxJQUFwQixDQUF5QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJPLFdBQVcsR0FBR0ssUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQXpDLENBQXpCO0FBQ0FoQiwyQkFBbUIsQ0FBQ2MsSUFBRCxDQUFuQixDQUEwQlAsSUFBMUIsQ0FBK0IsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CUSxpQkFBaUIsR0FBR0ksUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQS9DLENBQS9CO0FBQ0FmLDBCQUFrQixDQUFDYSxJQUFELENBQWxCLENBQXlCUCxJQUF6QixDQUE4QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJTLGdCQUFnQixHQUFHRyxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBOUMsQ0FBOUI7QUFDQWQseUJBQWlCLENBQUNZLElBQUQsQ0FBakIsQ0FBd0JQLElBQXhCLENBQTZCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQlUsZUFBZSxHQUFHRSxRQUFRLENBQUNkLEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBN0MsQ0FBN0I7QUFDQWIsc0JBQWMsQ0FBQ1csSUFBRCxDQUFkLENBQXFCUCxJQUFyQixDQUEwQixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJXLFlBQVksR0FBR0MsUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTFDLENBQTFCO0FBQ0gsT0F4QkQsTUF3Qk8sSUFBSUEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxLQUFzQkYsSUFBMUIsRUFBK0I7QUFDbEMsZ0JBQVFFLEtBQUssQ0FBQyxLQUFELENBQWI7QUFDSSxlQUFLLEdBQUw7QUFDSXhCLHdCQUFZLENBQUNzQixJQUFELENBQVosQ0FBbUJQLElBQW5CLENBQXdCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkQsVUFBVSxHQUFHLENBQWhDLENBQXhCO0FBQ0E7O0FBQ0osZUFBSyxHQUFMO0FBQ0l6Qix3QkFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CUCxJQUFuQixDQUF3QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJELFVBQW5CLENBQXhCO0FBQ0E7O0FBQ0osZUFBSyxHQUFMO0FBQ0l6Qix3QkFBWSxDQUFDc0IsSUFBRCxDQUFaLENBQW1CUCxJQUFuQixDQUF3QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBb0JELFVBQVUsR0FBRyxDQUFqQyxDQUF4Qjs7QUFDSjtBQUNJO0FBVlI7O0FBWUF4QixtQkFBVyxDQUFDcUIsSUFBRCxDQUFYLENBQWtCUCxJQUFsQixDQUF1QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJDLFNBQVMsR0FBR1csUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQXZDLENBQXZCO0FBQ0F0QiwyQkFBbUIsQ0FBQ29CLElBQUQsQ0FBbkIsQ0FBMEJQLElBQTFCLENBQStCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQkUsaUJBQWlCLEdBQUdVLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLEtBQUQsQ0FBTixDQUEvQyxDQUEvQjtBQUNBckIsNEJBQW9CLENBQUNtQixJQUFELENBQXBCLENBQTJCUCxJQUEzQixDQUFnQyxDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJHLGtCQUFrQixHQUFHUyxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBaEQsQ0FBaEM7QUFDQXBCLDZCQUFxQixDQUFDa0IsSUFBRCxDQUFyQixDQUE0QlAsSUFBNUIsQ0FBaUMsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CSSxtQkFBbUIsSUFBSVEsUUFBUSxDQUFDZCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQVIsR0FBMEJjLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUF0QyxDQUF0QyxDQUFqQztBQUNBbkIsbUJBQVcsQ0FBQ2lCLElBQUQsQ0FBWCxDQUFrQlAsSUFBbEIsQ0FBdUIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CSyxTQUFTLEdBQUdPLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUF2QyxDQUF2QjtBQUNBbEIsMEJBQWtCLENBQUNnQixJQUFELENBQWxCLENBQXlCUCxJQUF6QixDQUE4QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJNLGdCQUFnQixHQUFHTSxRQUFRLENBQUNkLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBOUMsQ0FBOUI7QUFDQWpCLHFCQUFhLENBQUNlLElBQUQsQ0FBYixDQUFvQlAsSUFBcEIsQ0FBeUIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CTyxXQUFXLEdBQUdLLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUF6QyxDQUF6QjtBQUNBaEIsMkJBQW1CLENBQUNjLElBQUQsQ0FBbkIsQ0FBMEJQLElBQTFCLENBQStCLENBQUNXLFlBQVksR0FBRyxDQUFoQixFQUFtQlEsaUJBQWlCLEdBQUdJLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUEvQyxDQUEvQjtBQUNBZiwwQkFBa0IsQ0FBQ2EsSUFBRCxDQUFsQixDQUF5QlAsSUFBekIsQ0FBOEIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CUyxnQkFBZ0IsR0FBR0csUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTlDLENBQTlCO0FBQ0FkLHlCQUFpQixDQUFDWSxJQUFELENBQWpCLENBQXdCUCxJQUF4QixDQUE2QixDQUFDVyxZQUFZLEdBQUcsQ0FBaEIsRUFBbUJVLGVBQWUsR0FBR0UsUUFBUSxDQUFDZCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTdDLENBQTdCO0FBQ0FiLHNCQUFjLENBQUNXLElBQUQsQ0FBZCxDQUFxQlAsSUFBckIsQ0FBMEIsQ0FBQ1csWUFBWSxHQUFHLENBQWhCLEVBQW1CVyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ2QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUExQyxDQUExQjtBQUNIO0FBQ0o7QUFDSixHQTFGUyxDQTRGZDs7O0FBQ0EsTUFBSWUsTUFBTSxHQUFHO0FBQUNDLE9BQUcsRUFBRSxFQUFOO0FBQVVDLFNBQUssRUFBRSxFQUFqQjtBQUFxQkMsVUFBTSxFQUFFLEVBQTdCO0FBQWlDQyxRQUFJLEVBQUU7QUFBdkMsR0FBYjtBQUFBLE1BQ0FDLEtBQUssR0FBRyxNQUFNTCxNQUFNLENBQUNJLElBQWIsR0FBb0JKLE1BQU0sQ0FBQ0UsS0FEbkM7QUFBQSxNQUVBSSxNQUFNLEdBQUcsTUFBTU4sTUFBTSxDQUFDQyxHQUFiLEdBQW1CRCxNQUFNLENBQUNHLE1BRm5DO0FBSUEsTUFBSUksR0FBRyxHQUFHOUIsRUFBRSxDQUFDK0IsTUFBSCxDQUFVLE1BQVYsRUFBa0JDLE1BQWxCLENBQXlCLEtBQXpCLEVBQ1RDLElBRFMsQ0FDSixPQURJLEVBQ0tMLEtBQUssR0FBR0wsTUFBTSxDQUFDSSxJQUFmLEdBQXNCSixNQUFNLENBQUNFLEtBRGxDLEVBRVRRLElBRlMsQ0FFSixRQUZJLEVBRU1KLE1BQU0sR0FBR04sTUFBTSxDQUFDQyxHQUFoQixHQUFzQkQsTUFBTSxDQUFDRyxNQUZuQyxFQUdUTSxNQUhTLENBR0YsR0FIRSxFQUlUQyxJQUpTLENBSUosV0FKSSxFQUlTLGVBQWVWLE1BQU0sQ0FBQ0ksSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNKLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FKekQsQ0FBVixDQWpHYyxDQXlHWjs7QUFFQU0sS0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUNBLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQW9EQSxJQUFwRCxDQUF5RCxHQUF6RCxFQUE4RCxDQUE5RCxFQUFpRUMsS0FBakUsQ0FBdUUsTUFBdkUsRUFBK0UsS0FBL0U7QUFDQUosS0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxFQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUNBLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQW9EQSxJQUFwRCxDQUF5RCxHQUF6RCxFQUE4RCxDQUE5RCxFQUFpRUMsS0FBakUsQ0FBdUUsTUFBdkUsRUFBK0UsUUFBL0U7QUFDQUosS0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0NBLElBQWxDLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDLEVBQWdEQyxLQUFoRCxDQUFzRCxNQUF0RCxFQUE4RCxPQUE5RCxFQUF1RUMsSUFBdkUsQ0FBNEUsV0FBNUUsRUFBeUZGLElBQXpGLENBQThGLG9CQUE5RixFQUFtSCxRQUFuSDtBQUNBSCxLQUFHLENBQUNFLE1BQUosQ0FBVyxNQUFYLEVBQW1CQyxJQUFuQixDQUF3QixHQUF4QixFQUE2QixHQUE3QixFQUFrQ0EsSUFBbEMsQ0FBdUMsR0FBdkMsRUFBNEMsRUFBNUMsRUFBZ0RDLEtBQWhELENBQXNELE1BQXRELEVBQThELE9BQTlELEVBQXVFQyxJQUF2RSxDQUE0RSxhQUE1RSxFQUEyRkYsSUFBM0YsQ0FBZ0csb0JBQWhHLEVBQXFILFFBQXJILEVBOUdZLENBaUhkOztBQUNBLE1BQU1HLGNBQWMsR0FBR3BDLEVBQUUsQ0FBQytCLE1BQUgsQ0FBVSxNQUFWLEVBQWtCQyxNQUFsQixDQUF5QixRQUF6QixDQUF2QixDQWxIYyxDQW9IZDs7QUFDQUksZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QixhQUF6QixFQUNDbEMsSUFERCxDQUNNTixNQUROLEVBRUN5QyxLQUZELEdBR0NOLE1BSEQsQ0FHUSxRQUhSLEVBSUNHLElBSkQsQ0FJTSxVQUFTSSxDQUFULEVBQVk7QUFBQyxXQUFPQSxDQUFQO0FBQVMsR0FKNUIsRUFLQ04sSUFMRCxDQUtNLE9BTE4sRUFLZSxVQUFBTSxDQUFDLEVBQUk7QUFBQyxXQUFPQSxDQUFQO0FBQVMsR0FMOUIsRUFySGMsQ0E4SFY7O0FBQ0FULEtBQUcsQ0FBQ0UsTUFBSixDQUFXLE1BQVgsRUFDQ0MsSUFERCxDQUNNLFdBRE4sRUFDbUIsYUFEbkIsRUFFQ0EsSUFGRCxDQUVNLEdBRk4sRUFFVyxJQUFJVixNQUFNLENBQUNJLElBQVgsR0FBa0IsQ0FGN0IsRUFHQ00sSUFIRCxDQUdNLEdBSE4sRUFHVyxJQUFLSixNQUFNLEdBQUMsQ0FIdkIsRUFJQ0ksSUFKRCxDQUlNLElBSk4sRUFJWSxLQUpaLEVBS0NDLEtBTEQsQ0FLTyxhQUxQLEVBS3NCLFFBTHRCLEVBTUNELElBTkQsQ0FNTSxPQU5OLEVBTWUsWUFOZixFQU9DRSxJQVBELENBT00sUUFQTixFQVFDRixJQVJELENBUU0sV0FSTixFQVFtQixNQVJuQixFQVNDQyxLQVRELENBU08sTUFUUCxFQVNlLE9BVGYsRUEvSFUsQ0EwSVI7O0FBQ0FKLEtBQUcsQ0FBQ0UsTUFBSixDQUFXLE1BQVgsRUFDQ0MsSUFERCxDQUNNLFdBRE4sRUFDbUIsZ0JBQWlCTCxLQUFLLEdBQUMsQ0FBdkIsR0FBNEIsSUFBNUIsSUFBb0NDLE1BQU0sR0FBR04sTUFBTSxDQUFDQyxHQUFoQixHQUFzQixFQUExRCxJQUFnRSxHQURuRixFQUVDUyxJQUZELENBRU0sT0FGTixFQUVlLE9BRmYsRUFHQ0MsS0FIRCxDQUdPLGFBSFAsRUFHc0IsUUFIdEIsRUFJQ0MsSUFKRCxDQUlNLFVBSk4sRUFLQ0YsSUFMRCxDQUtNLFdBTE4sRUFLbUIsTUFMbkIsRUFNQ0MsS0FORCxDQU1PLE1BTlAsRUFNZSxPQU5mO0FBUU4sTUFBSU0sQ0FBQyxHQUFHeEMsRUFBRSxDQUFDeUMsV0FBSCxHQUFpQkMsS0FBakIsQ0FBdUIsQ0FBQyxDQUFELEVBQUlkLEtBQUosQ0FBdkIsQ0FBUjtBQUNBLE1BQUllLEtBQUssR0FBRzNDLEVBQUUsQ0FBQzRDLFVBQUgsR0FBZ0JDLEtBQWhCLENBQXNCTCxDQUF0QixDQUFaO0FBRUFWLEtBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFDQ0MsSUFERCxDQUNNLFdBRE4sRUFDbUIsaUJBQWlCSixNQUFqQixHQUEwQixHQUQ3QyxFQUVDSSxJQUZELENBRU0sT0FGTixFQUVlLE9BRmYsRUFHQ0MsS0FIRCxDQUdPLE1BSFAsRUFHZSxPQUhmO0FBS0EsTUFBSVksQ0FBQyxHQUFHOUMsRUFBRSxDQUFDeUMsV0FBSCxHQUFpQkMsS0FBakIsQ0FBdUIsQ0FBQ2IsTUFBRCxFQUFTLENBQVQsQ0FBdkIsQ0FBUjtBQUNBLE1BQUlrQixLQUFLLEdBQUcvQyxFQUFFLENBQUNnRCxRQUFILEdBQWNILEtBQWQsQ0FBb0JDLENBQXBCLENBQVo7QUFDQWhCLEtBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFDQ0MsSUFERCxDQUNNLE9BRE4sRUFDZSxPQURmLEVBRUNDLEtBRkQsQ0FFTyxNQUZQLEVBRWUsT0FGZjs7QUFJQSxNQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDOUMsSUFBRCxFQUFPK0MsS0FBUCxFQUFpQjtBQUk1QlYsS0FBQyxDQUFDVyxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUluRCxFQUFFLENBQUNvRCxHQUFILENBQU94RCxZQUFQLENBQUosQ0FBVDtBQUNBa0MsT0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUNDZ0IsVUFERCxHQUVDQyxRQUZELENBRVUsSUFGVixFQUdDQyxJQUhELENBR01aLEtBSE47QUFLQSxRQUFJYSxVQUFVLEdBQUdyRCxJQUFJLENBQUMsV0FBRCxDQUFKLENBQWtCLEVBQWxCLEVBQXNCLENBQXRCLENBQWpCO0FBQ0EsUUFBSXNELFVBQVUsR0FBR3RELElBQUksQ0FBQyxhQUFELENBQUosQ0FBb0IsRUFBcEIsRUFBd0IsQ0FBeEIsQ0FBakI7QUFFQXFELGNBQVUsSUFBSUMsVUFBZCxHQUEyQlgsQ0FBQyxDQUFDSyxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUlLLFVBQUosQ0FBVCxDQUEzQixHQUF1RFYsQ0FBQyxDQUFDSyxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUlNLFVBQUosQ0FBVCxDQUF2RDtBQUVBM0IsT0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUNDZ0IsVUFERCxHQUVDQyxRQUZELENBRVUsSUFGVixFQUdDQyxJQUhELENBR01SLEtBSE47QUFLQWpCLE9BQUcsQ0FBQ0MsTUFBSixDQUFXLGFBQVgsRUFBMEJJLElBQTFCLENBQStCZSxLQUEvQjtBQUtBLFFBQUlRLEtBQUssR0FBRzVCLEdBQUcsQ0FBQ08sU0FBSixDQUFjLFFBQWQsQ0FBWjtBQUNBLFFBQUlzQixLQUFLLEdBQUc3QixHQUFHLENBQUNPLFNBQUosQ0FBYyxRQUFkLENBQVo7O0FBRUEsUUFBSXFCLEtBQUosRUFBVztBQUFDNUIsU0FBRyxDQUFDTyxTQUFKLENBQWMsUUFBZCxFQUF3QnVCLE1BQXhCO0FBQWlDOztBQUM3QyxRQUFJRCxLQUFKLEVBQVc7QUFBQzdCLFNBQUcsQ0FBQ08sU0FBSixDQUFjLFFBQWQsRUFBd0J1QixNQUF4QjtBQUFpQzs7QUFFN0NGLFNBQUssR0FBRzVCLEdBQUcsQ0FBQ08sU0FBSixDQUFjLFFBQWQsRUFBd0JsQyxJQUF4QixDQUE2QixDQUFDQSxJQUFELENBQTdCLEVBQXFDLFVBQUFvQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDLFdBQUQsQ0FBTDtBQUFBLEtBQXRDLENBQVI7QUFDQW9CLFNBQUssR0FBRzdCLEdBQUcsQ0FBQ08sU0FBSixDQUFjLFFBQWQsRUFBd0JsQyxJQUF4QixDQUE2QixDQUFDQSxJQUFELENBQTdCLEVBQXFDLFVBQUFvQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDLGFBQUQsQ0FBTDtBQUFBLEtBQXRDLENBQVI7QUFFQW1CLFNBQUssQ0FDSnBCLEtBREQsR0FFQ3VCLEtBRkQsQ0FFTzFELElBQUksQ0FBQyxXQUFELENBRlgsRUFHQzZCLE1BSEQsQ0FHUSxNQUhSLEVBSUNDLElBSkQsQ0FJTSxPQUpOLEVBSWUsT0FKZixFQUtDNkIsS0FMRCxDQUtPSixLQUxQLEVBTUNMLFVBTkQsR0FPQ0MsUUFQRCxDQU9VLElBUFYsRUFRQ3JCLElBUkQsQ0FRTSxHQVJOLEVBUVdqQyxFQUFFLENBQUMrRCxJQUFILEdBQ1Z2QixDQURVLENBQ1IsVUFBQUQsQ0FBQyxFQUFJO0FBQUMsYUFBT0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBaUIsS0FEZixFQUVWTyxDQUZVLENBRVIsVUFBQVAsQ0FBQyxFQUFJO0FBQUMsYUFBT08sQ0FBQyxDQUFDUCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVI7QUFBZ0IsS0FGZCxDQVJYLEVBV0NOLElBWEQsQ0FXTSxNQVhOLEVBV2MsTUFYZCxFQVlDQSxJQVpELENBWU0sUUFaTixFQVlnQixLQVpoQixFQWFDQSxJQWJELENBYU0sY0FiTixFQWFzQixHQWJ0QjtBQWVBMEIsU0FBSyxDQUFDckIsS0FBTixHQUNDdUIsS0FERCxDQUNPMUQsSUFBSSxDQUFDLGFBQUQsQ0FEWCxFQUVDNkIsTUFGRCxDQUVRLE1BRlIsRUFHQ0MsSUFIRCxDQUdNLE9BSE4sRUFHZSxPQUhmLEVBSUM2QixLQUpELENBSU9ILEtBSlAsRUFLQ04sVUFMRCxHQU1DQyxRQU5ELENBTVUsSUFOVixFQU9DckIsSUFQRCxDQU9NLEdBUE4sRUFPV2pDLEVBQUUsQ0FBQytELElBQUgsR0FDVnZCLENBRFUsQ0FDUixVQUFBRCxDQUFDLEVBQUk7QUFBQyxhQUFPQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFpQixLQURmLEVBRVZPLENBRlUsQ0FFUixVQUFBUCxDQUFDLEVBQUk7QUFBQyxhQUFPTyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBUjtBQUFnQixLQUZkLENBUFgsRUFVQ04sSUFWRCxDQVVNLE1BVk4sRUFVYyxNQVZkLEVBV0NBLElBWEQsQ0FXTSxRQVhOLEVBV2dCLFFBWGhCLEVBWUNBLElBWkQsQ0FZTSxjQVpOLEVBWXNCLEdBWnRCO0FBa0JILEdBbkVEOztBQXFFQWdCLFFBQU0sQ0FBQ2pFLFlBQUQsRUFBZSxRQUFmLENBQU47QUFJQW9ELGdCQUFjLENBQUM0QixFQUFmLENBQWtCLFFBQWxCLEVBQTRCLFVBQVN6QixDQUFULEVBQVk7QUFDcEMsUUFBSTBCLGNBQWMsR0FBR2pFLEVBQUUsQ0FBQytCLE1BQUgsQ0FBVSxJQUFWLEVBQWdCbUMsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7O0FBQ0EsWUFBUUQsY0FBUjtBQUNJLFdBQUssUUFBTDtBQUNJaEIsY0FBTSxDQUFDakUsWUFBRCxFQUFlaUYsY0FBZixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0loQixjQUFNLENBQUNoRSxXQUFELEVBQWNnRixjQUFkLENBQU47QUFDQTs7QUFDSixXQUFLLGlCQUFMO0FBQ0loQixjQUFNLENBQUMvRCxtQkFBRCxFQUFzQitFLGNBQXRCLENBQU47QUFDQTs7QUFDSixXQUFLLGtCQUFMO0FBQ0loQixjQUFNLENBQUM5RCxvQkFBRCxFQUF1QjhFLGNBQXZCLENBQU47QUFDQTs7QUFDSixXQUFLLG1CQUFMO0FBQ0loQixjQUFNLENBQUM3RCxxQkFBRCxFQUF3QjZFLGNBQXhCLENBQU47QUFDQTs7QUFDSixXQUFLLGFBQUw7QUFDSWhCLGNBQU0sQ0FBQzVELFdBQUQsRUFBYzRFLGNBQWQsQ0FBTjtBQUNBOztBQUNKLFdBQUssZUFBTDtBQUNJaEIsY0FBTSxDQUFDM0Qsa0JBQUQsRUFBcUIyRSxjQUFyQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0loQixjQUFNLENBQUMxRCxhQUFELEVBQWdCMEUsY0FBaEIsQ0FBTjtBQUNBOztBQUNKLFdBQUssZ0JBQUw7QUFDSWhCLGNBQU0sQ0FBQ3pELG1CQUFELEVBQXNCeUUsY0FBdEIsQ0FBTjtBQUNBOztBQUNKLFdBQUssZUFBTDtBQUNJaEIsY0FBTSxDQUFDeEQsa0JBQUQsRUFBcUJ3RSxjQUFyQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxjQUFMO0FBQ0loQixjQUFNLENBQUN2RCxpQkFBRCxFQUFvQnVFLGNBQXBCLENBQU47QUFDQTs7QUFDSixXQUFLLFdBQUw7QUFDSWhCLGNBQU0sQ0FBQ3RELGNBQUQsRUFBaUJzRSxjQUFqQixDQUFOO0FBQ0E7O0FBQ0o7QUFDSTtBQXRDUjtBQXdDSCxHQTFDRDtBQThDQyxDQXpSRCxFOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxubGV0IHRlYW1zID0gW107XG5sZXQgc2Vhc29uUG9pbnRzID0ge307XG5sZXQgc2Vhc29uU2hvdHMgPSB7fTtcbmxldCBzZWFzb25TaG90c09uVGFyZ2V0ID0ge307XG5sZXQgc2Vhc29uRmlyc3RIYWxmR29hbHMgPSB7fTtcbmxldCBzZWFzb25TZWNvbmRIYWxmR29hbHMgPSB7fTtcbmxldCBzZWFzb25Hb2FscyA9IHt9O1xubGV0IHNlYXNvbkdvYWxzQWdhaW5zdCA9IHt9O1xubGV0IHNlYXNvbkNvcm5lcnMgPSB7fTtcbmxldCBzZWFzb25Gb3Vsc0NvbW1pdGVkID0ge307XG5sZXQgc2Vhc29uRm91bHNBZ2FpbnN0ID0ge307XG5sZXQgc2Vhc29uWWVsbG93Q2FyZHMgPSB7fTtcbmxldCBzZWFzb25SZWRDYXJkcyA9IHt9O1xubGV0IHNlYXNvbkxlbmd0aCA9IFtdO1xuXG5jb25zdCBYX0FYSVMgPSBbXG4gICAgXCJQb2ludHNcIixcbiAgICBcIlNob3RzXCIsIFxuICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgXCJDb3JuZXJzXCIsIFxuICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgIFwiUmVkIENhcmRzXCJdO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzk7IGkrKykge1xuICAgIHNlYXNvbkxlbmd0aC5wdXNoKGkpOyAgICBcbn1cblxuZDMuY3N2KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLzE4MTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcbiAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbSBwb2ludHMgZnJvbSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25TaG90c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNob3RzT25UYXJnZXRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZvdWxzQ29tbWl0ZWRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25ZZWxsb3dDYXJkc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblJlZENhcmRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgbGV0IHByZXZQb2ludHMgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5ID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90cyA9IHNlYXNvblNob3RzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90c09uVGFyZ2V0ID0gc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMgPSBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzID0gc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2FscyA9IHNlYXNvbkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QgPSBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMgPSBzZWFzb25Db3JuZXJzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkID0gc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0ID0gc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkcyA9IHNlYXNvblllbGxvd0NhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkcyA9IHNlYXNvblJlZENhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgLy8gc3dpdGNoIHN0YXRlbWVudHMgZm9yIGJ1aWxkaW5nIHRlYW0gcG9pbnRzIGFycmF5XG4gICAgICAgICAgICBpZiAobWF0Y2hbXCJIb21lVGVhbVwiXSA9PT0gdGVhbSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHMgKyAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICwgcHJldlBvaW50cyArIDFdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzICsgcGFyc2VJbnQobWF0Y2hbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90c09uVGFyZ2V0ICsgcGFyc2VJbnQobWF0Y2hbXCJIU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRmlyc3RIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzICsgKHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZDb3JuZXJzICsgcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkICsgcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlllbGxvd0NhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25SZWRDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UmVkQ2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkhSXCJdKV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlYXNvblNob3RzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90cyArIHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHNPblRhcmdldCArIHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGaXJzdEhhbGZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TZWNvbmRIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNlY29uZEhhbGZHb2FscyArIChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHMgKyBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2Fsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Q29ybmVycyArIHBhcnNlSW50KG1hdGNoW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNDb21taXRlZCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblllbGxvd0NhcmRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZZZWxsb3dDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uUmVkQ2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlJlZENhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBUlwiXSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbi8vICBMaW5lIEdyYXBoXG52YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiA3MCwgbGVmdDogNTB9LFxud2lkdGggPSA2NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbmhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbi5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbi5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cblxuXG4gIC8vIFggYW5kIFkgQXhpc1xuXG4gIHN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDUwKS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJyZWRcIilcbiAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNzApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInllbGxvd1wiKVxuICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDUwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KFwiTGl2ZXJwb29sXCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDcwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KFwiU291dGhhbXB0b25cIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG5cblxuLy8gIENyZWF0ZSBhIGRyb3Bkb3duIGJ1dHRvbiB0byBzZWxlY3QgZGF0YSBvdXRwdXRcbmNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzZWxlY3RcIilcblxuLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIERyb3Bkb3duXG5kcm9wRG93bkJ1dHRvbi5zZWxlY3RBbGwoJ2RhdGFPcHRpb25zJylcbi5kYXRhKFhfQVhJUylcbi5lbnRlcigpXG4uYXBwZW5kKCdvcHRpb24nKVxuLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkfSlcbi5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KTtcblxuXG4gXG4gICAgLy8gWS1heGlzIGxhYmVsXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgLmF0dHIoXCJ5XCIsIDAgLSBtYXJnaW4ubGVmdCAtIDUpXG4gICAgLmF0dHIoXCJ4XCIsIDAgLSAoaGVpZ2h0LzIpKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5YXhpcy10ZXh0XCIpXG4gICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG4gICAgICAvLyBYLWF4aXMgbGFiZWxcbiAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAod2lkdGgvMikgKyBcIiAsXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJNYXRjaGRheVwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG5sZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG5sZXQgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeCk7XG5cbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4uYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbi5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcbmxldCB5QXhpcyA9IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeSk7XG5zdmcuYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJjbGFzc1wiLCBcIllBeGlzXCIpXG4uc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmNvbnN0IHVwZGF0ZSA9IChkYXRhLCB0aXRsZSkgPT4ge1xuXG4gXG5cbiAgICB4LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvbkxlbmd0aCldKTtcbiAgICBzdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5jYWxsKHhBeGlzKTtcblxuICAgIGxldCB0ZWFtT25lTWF4ID0gZGF0YVtcIkxpdmVycG9vbFwiXVszOF1bMV07XG4gICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhW1wiU291dGhhbXB0b25cIl1bMzhdWzFdO1xuXG4gICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuICAgIFxuICAgIHN2Zy5zZWxlY3RBbGwoXCIuWUF4aXNcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgXG4gICAgc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpXG5cbiAgICBcblxuXG4gICAgbGV0IGxpbmUxID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKVxuICAgIGxldCBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcbiAgICBcbiAgICBpZiAobGluZTEpIHtzdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLnJlbW92ZSgpfVxuICAgIGlmIChsaW5lMikge3N2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikucmVtb3ZlKCl9XG5cbiAgICBsaW5lMSA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIkxpdmVycG9vbFwiXSlcbiAgICBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIlNvdXRoYW1wdG9uXCJdKVxuXG4gICAgbGluZTFcbiAgICAuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiTGl2ZXJwb29sXCJdKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgLm1lcmdlKGxpbmUxKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7fSkpXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMi41KVxuXG4gICAgbGluZTIuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiU291dGhhbXB0b25cIl0pXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTJcIilcbiAgICAubWVyZ2UobGluZTIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTt9KSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ5ZWxsb3dcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cbiAgXG5cbiAgIFxuXG59XG5cbnVwZGF0ZShzZWFzb25Qb2ludHMsIFwiUG9pbnRzXCIpO1xuXG5cblxuZHJvcERvd25CdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpXG4gICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICBjYXNlIFwiUG9pbnRzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uUG9pbnRzLCBzZWxlY3RlZE9wdGlvbik7ICAgIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTaG90c1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblNob3RzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblNob3RzT25UYXJnZXQsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRmlyc3QgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkZpcnN0SGFsZkdvYWxzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNlY29uZCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uU2Vjb25kSGFsZkdvYWxzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uR29hbHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkdvYWxzQWdhaW5zdCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDb3JuZXJzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uQ29ybmVycywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGb3VscyBDb21taXRlZFwiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkZvdWxzQ29tbWl0ZWQsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRm91bHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkZvdWxzQWdhaW5zdCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25ZZWxsb3dDYXJkcywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJSZWQgQ2FyZHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25SZWRDYXJkcywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KVxuICBcblxuICAgIFxufSk7XG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=