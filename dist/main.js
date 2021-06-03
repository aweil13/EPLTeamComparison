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
var allTeamStats = [];
var compareTeams = ["Liverpool", "Southampton"];
var compareTeamsStats = [];
var X_AXIS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Commited", "Fouls Against", "Yellow Cards", "Red Cards"];
var X_AXIS_DATA = [{
  "Points": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Shots": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Shots on Target": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "First Half Goals": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Second Half Goals": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Total Goals": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Goals Against": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Corners": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Fouls Commited": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Fouls Against": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Yellow Cards": {
    "Liverpool": 0,
    "Southampton": 0
  }
}, {
  "Red Cards": {
    "Liverpool": 0,
    "Southampton": 0
  }
}];
var pointsArray = [];
var shotsArray = [];
var shotsOnTargetArray = [];
var firstHalfGoalsArray = [];
var secondHalfGoalsArray = [];
var totalGoalsArray = [];
var goalsAgainstArray = [];
var cornersArray = [];
var foulsCommittedArray = [];
var foulsAgainstArray = [];
var yellowCardsArray = [];
var redCardsArray = [];
d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/1819.csv").then(function (data) {
  // loop for extracting teams from season into teams array
  for (var i = 0; i < data.length; i++) {
    if (!teams.includes(data[i]["HomeTeam"])) {
      teams.push(data[i]["HomeTeam"]);
    } else if (!teams.includes(data[i]["AwayTeam"])) {
      teams.push(data[i]["AwayTeam"]);
    }
  } // loop creating seasonStats array of objects


  for (var _i = 0; _i < teams.length; _i++) {
    var team = teams[_i];
    allTeamStats.push({
      "Team": team,
      "Points": 0,
      "Shots": 0,
      "Shots on Target": 0,
      "First Half Goals": 0,
      "Second Half Goals": 0,
      "Total Goals": 0,
      "Goals Against": 0,
      "Corners": 0,
      "Fouls Commited": 0,
      "Fouls Against": 0,
      "Yellow Cards": 0,
      "Red Cards": 0
    });
  } // nested loop for extracting data and placing it inside seasonStats array of objects


  for (var _i2 = 0; _i2 < allTeamStats.length; _i2++) {
    var _team = allTeamStats[_i2];
    var teamName = _team["Team"];

    for (var j = 0; j < data.length; j++) {
      var match = data[j];

      if (teamName === match["HomeTeam"]) {
        switch (match["FTR"]) {
          case "H":
            _team["Points"] += 3;
            break;

          case "D":
            _team["Points"] += 1;
            break;

          default:
            break;
        }

        _team["Shots"] += parseInt(match["HS"]);
        _team["Shots on Target"] += parseInt(match["HST"]);
        _team["First Half Goals"] += parseInt(match["HTHG"]);
        _team["Second Half Goals"] += parseInt(match["FTHG"]) - parseInt(match["HTHG"]);
        _team["Total Goals"] += parseInt(match["FTHG"]);
        _team["Goals Against"] += parseInt(match["FTAG"]);
        _team["Corners"] += parseInt(match["HC"]);
        _team["Fouls Commited"] += parseInt(match["HF"]);
        _team["Fouls Against"] += parseInt(match["AF"]);
        _team["Yellow Cards"] += parseInt(match["HY"]);
        _team["Red Cards"] += parseInt(match["HR"]);
      } else if (teamName === match["AwayTeam"]) {
        switch (match["FTR"]) {
          case "A":
            _team["Points"] += 3;
            break;

          case "D":
            _team["Points"] += 1;

          default:
            break;
        }

        _team["Shots"] += parseInt(match["AS"]);
        _team["Shots on Target"] += parseInt(match["AST"]);
        _team["First Half Goals"] += parseInt(match["HTAG"]);
        _team["Second Half Goals"] += parseInt(match["FTAG"]) - parseInt(match["HTAG"]);
        _team["Total Goals"] += parseInt(match["FTAG"]);
        _team["Goals Against"] += parseInt(match["FTHG"]);
        _team["Corners"] += parseInt(match["AC"]);
        _team["Fouls Commited"] += parseInt(match["AF"]);
        _team["Fouls Against"] += parseInt(match["HF"]);
        _team["Yellow Cards"] += parseInt(match["AY"]);
        _team["Red Cards"] += parseInt(match["AR"]);
      }
    }
  } // Loop to populate array of teams being compared


  for (var _i3 = 0; _i3 < allTeamStats.length; _i3++) {
    switch (allTeamStats[_i3]["Team"]) {
      case "Liverpool":
        compareTeamsStats.push(allTeamStats[_i3]);
        break;

      case "Southampton":
        compareTeamsStats.push(allTeamStats[_i3]);
        break;

      default:
        break;
    }
  } //  Loop to populate bar graph array data


  for (var _i4 = 0; _i4 < compareTeamsStats.length; _i4++) {
    var _team2 = compareTeamsStats[_i4];
    var _teamName = _team2["Team"];

    for (var _j = 0; _j < X_AXIS_DATA.length; _j++) {
      var dataGroup = X_AXIS_DATA[_j];
      var key = X_AXIS[_j];

      switch (_teamName) {
        case "Liverpool":
          dataGroup[key][_teamName] += _team2[key];
          break;

        case "Southampton":
          dataGroup[key][_teamName] += _team2[key];
          break;

        default:
          break;
      }
    }
  } // loop to populate indiviual statistic arrays


  for (var _i5 = 0; _i5 < allTeamStats.length; _i5++) {
    switch (allTeamStats[_i5]["Team"]) {
      case "Liverpool":
        pointsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Points"]
        });
        shotsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Shots"]
        });
        shotsOnTargetArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Shots on Target"]
        });
        firstHalfGoalsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["First Half Goals"]
        });
        secondHalfGoalsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Second Half Goals"]
        });
        totalGoalsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Total Goals"]
        });
        goalsAgainstArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Goals Against"]
        });
        cornersArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Corners"]
        });
        foulsCommittedArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Fouls Commited"]
        });
        foulsAgainstArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Fouls Against"]
        });
        yellowCardsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Yellow Cards"]
        });
        redCardsArray.push({
          team: "Liverpool",
          value: allTeamStats[_i5]["Red Cards"]
        });
        break;

      case "Southampton":
        pointsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Points"]
        });
        shotsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Shots"]
        });
        shotsOnTargetArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Shots on Target"]
        });
        firstHalfGoalsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["First Half Goals"]
        });
        secondHalfGoalsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Second Half Goals"]
        });
        totalGoalsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Total Goals"]
        });
        goalsAgainstArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Goals Against"]
        });
        cornersArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Corners"]
        });
        foulsCommittedArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Fouls Commited"]
        });
        foulsAgainstArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Fouls Against"]
        });
        yellowCardsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Yellow Cards"]
        });
        redCardsArray.push({
          team: "Southampton",
          value: allTeamStats[_i5]["Red Cards"]
        });
        break;

      default:
        break;
    }
  } // creating the svg element for bar chart


  var margin = {
    top: 20,
    right: 20,
    bottom: 60,
    left: 50
  },
      width = 900 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;
  var svg = d3.select("body").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X-Axis initialization/creation

  var x = d3.scaleBand().range([0, width]).padding(0.2);
  var xAxis = svg.append("g").attr("transform", "translate(0, ".concat(height, ")")).attr("class", "X-axis"); // Y-Axis initialization

  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append("g").attr("class", "Y-axis"); // function to create/update the bargraph with the changing data

  var update = function update(data) {
    // update X-Axis with team names
    x.domain(data.map(function (d) {
      return d.team;
    }));
    xAxis.call(d3.axisBottom(x)); // Update Y-Axis with relevant values

    y.domain([0, d3.max(data, function (d) {
      return d.value;
    })]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y)); // Create variable for graph

    var u = svg.selectAll("rect").data(data);
    u.join("rect").transition().attr("x", function (d) {
      return x(d.team);
    }).attr("y", function (d) {
      return y(d.value);
    }).attr("width", x.bandwidth()).attr("height", function (d) {
      return height - y(d.value);
    }).attr("fill", "#69b3a2");
  };

  update(pointsArray); //  Create a dropdown button to select data output

  var dropDownButton = d3.select("body").append("select"); // Create options for Dropdown

  dropDownButton.selectAll('dataOptions').data(X_AXIS).enter().append('option').text(function (d) {
    return d;
  }).attr("value", function (d) {
    return d;
  }); // Change of value in what is selected in the dropdown to change graph output

  dropDownButton.on("change", function (d) {
    var selectedOption = d3.select(this).property("value");

    switch (selectedOption) {
      case "Points":
        update(pointsArray);
        break;

      case "Shots":
        update(shotsArray);
        break;

      case "Shots on Target":
        update(shotsOnTargetArray);
        break;

      case "First Half Goals":
        update(firstHalfGoalsArray);
        break;

      case "Second Half Goals":
        update(secondHalfGoalsArray);
        break;

      case "Total Goals":
        update(totalGoalsArray);
        break;

      case "Goals Against":
        update(goalsAgainstArray);
        break;

      case "Corners":
        update(cornersArray);
        break;

      case "Fouls Commited":
        update(foulsCommittedArray);
        break;

      case "Fouls Against":
        update(foulsAgainstArray);
        break;

      case "Yellow Cards":
        update(yellowCardsArray);
        break;

      case "Red Cards":
        update(redCardsArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsImFsbFRlYW1TdGF0cyIsImNvbXBhcmVUZWFtcyIsImNvbXBhcmVUZWFtc1N0YXRzIiwiWF9BWElTIiwiWF9BWElTX0RBVEEiLCJwb2ludHNBcnJheSIsInNob3RzQXJyYXkiLCJzaG90c09uVGFyZ2V0QXJyYXkiLCJmaXJzdEhhbGZHb2Fsc0FycmF5Iiwic2Vjb25kSGFsZkdvYWxzQXJyYXkiLCJ0b3RhbEdvYWxzQXJyYXkiLCJnb2Fsc0FnYWluc3RBcnJheSIsImNvcm5lcnNBcnJheSIsImZvdWxzQ29tbWl0dGVkQXJyYXkiLCJmb3Vsc0FnYWluc3RBcnJheSIsInllbGxvd0NhcmRzQXJyYXkiLCJyZWRDYXJkc0FycmF5IiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ0ZWFtIiwidGVhbU5hbWUiLCJqIiwibWF0Y2giLCJwYXJzZUludCIsImRhdGFHcm91cCIsImtleSIsInZhbHVlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJ1cGRhdGUiLCJkb21haW4iLCJtYXAiLCJkIiwiY2FsbCIsImF4aXNCb3R0b20iLCJtYXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInUiLCJzZWxlY3RBbGwiLCJqb2luIiwiYmFuZHdpZHRoIiwiZHJvcERvd25CdXR0b24iLCJlbnRlciIsInRleHQiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHki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RUFBWTtBQUNwQyxRQUFJZSxjQUFjLEdBQUdyRCxFQUFFLENBQUN3QixNQUFILENBQVUsSUFBVixFQUFnQjhCLFFBQWhCLENBQXlCLE9BQXpCLENBQXJCOztBQUNBLFlBQVFELGNBQVI7QUFDSSxXQUFLLFFBQUw7QUFDSWxCLGNBQU0sQ0FBQy9DLFdBQUQsQ0FBTjtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNJK0MsY0FBTSxDQUFDOUMsVUFBRCxDQUFOO0FBQ0E7O0FBQ0osV0FBSyxpQkFBTDtBQUNJOEMsY0FBTSxDQUFDN0Msa0JBQUQsQ0FBTjtBQUNBOztBQUNKLFdBQUssa0JBQUw7QUFDSTZDLGNBQU0sQ0FBQzVDLG1CQUFELENBQU47QUFDQTs7QUFDSixXQUFLLG1CQUFMO0FBQ0k0QyxjQUFNLENBQUMzQyxvQkFBRCxDQUFOO0FBQ0E7O0FBQ0osV0FBSyxhQUFMO0FBQ0kyQyxjQUFNLENBQUMxQyxlQUFELENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSTBDLGNBQU0sQ0FBQ3pDLGlCQUFELENBQU47QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSXlDLGNBQU0sQ0FBQ3hDLFlBQUQsQ0FBTjtBQUNBOztBQUNKLFdBQUssZ0JBQUw7QUFDSXdDLGNBQU0sQ0FBQ3ZDLG1CQUFELENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSXVDLGNBQU0sQ0FBQ3RDLGlCQUFELENBQU47QUFDQTs7QUFDSixXQUFLLGNBQUw7QUFDSXNDLGNBQU0sQ0FBQ3JDLGdCQUFELENBQU47QUFDQTs7QUFDSixXQUFLLFdBQUw7QUFDSXFDLGNBQU0sQ0FBQ3BDLGFBQUQsQ0FBTjtBQUNBOztBQUNKO0FBQ0k7QUF0Q1I7QUF3Q0gsR0ExQ0Q7QUE2Q0gsQ0FyUkQsRTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IGFsbFRlYW1TdGF0cyA9IFtdO1xubGV0IGNvbXBhcmVUZWFtcyA9IFtcIkxpdmVycG9vbFwiLCBcIlNvdXRoYW1wdG9uXCJdO1xubGV0IGNvbXBhcmVUZWFtc1N0YXRzID0gW107XG5jb25zdCBYX0FYSVMgPSBbXG4gICAgXCJQb2ludHNcIixcbiAgICBcIlNob3RzXCIsIFxuICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgXCJDb3JuZXJzXCIsIFxuICAgIFwiRm91bHMgQ29tbWl0ZWRcIiwgXG4gICAgXCJGb3VscyBBZ2FpbnN0XCIsIFxuICAgIFwiWWVsbG93IENhcmRzXCIsIFxuICAgIFwiUmVkIENhcmRzXCJdO1xuXG5jb25zdCBYX0FYSVNfREFUQSA9IFtcbiAgICB7XCJQb2ludHNcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LFxuICAgIHtcIlNob3RzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiU2hvdHMgb24gVGFyZ2V0XCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSxcbiAgICB7XCJGaXJzdCBIYWxmIEdvYWxzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiU2Vjb25kIEhhbGYgR29hbHNcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJUb3RhbCBHb2Fsc1wiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sIFxuICAgIHtcIkdvYWxzIEFnYWluc3RcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJDb3JuZXJzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiRm91bHMgQ29tbWl0ZWRcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJGb3VscyBBZ2FpbnN0XCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiWWVsbG93IENhcmRzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiUmVkIENhcmRzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fVxuXVxuXG5jb25zdCBwb2ludHNBcnJheSA9IFtdO1xuY29uc3Qgc2hvdHNBcnJheSA9IFtdO1xuY29uc3Qgc2hvdHNPblRhcmdldEFycmF5ID0gW107XG5jb25zdCBmaXJzdEhhbGZHb2Fsc0FycmF5ID0gW107XG5jb25zdCBzZWNvbmRIYWxmR29hbHNBcnJheSA9IFtdO1xuY29uc3QgdG90YWxHb2Fsc0FycmF5ID0gW107XG5jb25zdCBnb2Fsc0FnYWluc3RBcnJheSA9IFtdO1xuY29uc3QgY29ybmVyc0FycmF5ID0gW107XG5jb25zdCBmb3Vsc0NvbW1pdHRlZEFycmF5ID0gW107XG5jb25zdCBmb3Vsc0FnYWluc3RBcnJheSA9IFtdO1xuY29uc3QgeWVsbG93Q2FyZHNBcnJheSA9IFtdO1xuY29uc3QgcmVkQ2FyZHNBcnJheSA9IFtdO1xuXG5cblxuZDMuY3N2KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLzE4MTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcblxuICAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkhvbWVUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiSG9tZVRlYW1cIl0pXG4gICAgICAgIH0gZWxzZSBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkF3YXlUZWFtXCJdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9vcCBjcmVhdGluZyBzZWFzb25TdGF0cyBhcnJheSBvZiBvYmplY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBhbGxUZWFtU3RhdHMucHVzaCh7XG4gICAgICAgICBcIlRlYW1cIjogdGVhbSxcbiAgICAgICAgIFwiUG9pbnRzXCI6IDAsXG4gICAgICAgICBcIlNob3RzXCI6IDAsXG4gICAgICAgICBcIlNob3RzIG9uIFRhcmdldFwiOiAwLFxuICAgICAgICAgXCJGaXJzdCBIYWxmIEdvYWxzXCI6IDAsXG4gICAgICAgICBcIlNlY29uZCBIYWxmIEdvYWxzXCI6IDAsXG4gICAgICAgICBcIlRvdGFsIEdvYWxzXCI6IDAsXG4gICAgICAgICBcIkdvYWxzIEFnYWluc3RcIjogMCxcbiAgICAgICAgIFwiQ29ybmVyc1wiOiAwLFxuICAgICAgICAgXCJGb3VscyBDb21taXRlZFwiOiAwLFxuICAgICAgICAgXCJGb3VscyBBZ2FpbnN0XCI6IDAsXG4gICAgICAgICBcIlllbGxvdyBDYXJkc1wiOiAwLFxuICAgICAgICAgXCJSZWQgQ2FyZHNcIjogMCAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIG5lc3RlZCBsb29wIGZvciBleHRyYWN0aW5nIGRhdGEgYW5kIHBsYWNpbmcgaXQgaW5zaWRlIHNlYXNvblN0YXRzIGFycmF5IG9mIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRlYW1TdGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IGFsbFRlYW1TdGF0c1tpXTtcbiAgICAgICAgbGV0IHRlYW1OYW1lID0gdGVhbVtcIlRlYW1cIl07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgIGlmICh0ZWFtTmFtZSA9PT0gbWF0Y2hbXCJIb21lVGVhbVwiXSl7XG4gICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90c1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhTXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2hvdHMgb24gVGFyZ2V0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRmlyc3QgSGFsZiBHb2Fsc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTZWNvbmQgSGFsZiBHb2Fsc1wiXSArPSAocGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSkpO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJUb3RhbCBHb2Fsc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJHb2FscyBBZ2FpbnN0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkNvcm5lcnNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzIENvbW1pdGVkXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGb3VscyBBZ2FpbnN0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJZZWxsb3cgQ2FyZHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlJlZCBDYXJkc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhSXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVhbU5hbWUgPT09IG1hdGNoW1wiQXdheVRlYW1cIl0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1bXCJQb2ludHNcIl0gKz0gMyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAxXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90cyBvbiBUYXJnZXRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBU1RcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGaXJzdCBIYWxmIEdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNlY29uZCBIYWxmIEdvYWxzXCJdICs9IChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlRvdGFsIEdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkdvYWxzIEFnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiQ29ybmVyc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkFDXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRm91bHMgQ29tbWl0ZWRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzIEFnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlllbGxvdyBDYXJkc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkFZXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiUmVkIENhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMb29wIHRvIHBvcHVsYXRlIGFycmF5IG9mIHRlYW1zIGJlaW5nIGNvbXBhcmVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUZWFtU3RhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxUZWFtU3RhdHNbaV1bXCJUZWFtXCJdKSB7XG4gICAgICAgICAgICBjYXNlIFwiTGl2ZXJwb29sXCI6XG4gICAgICAgICAgICAgICAgY29tcGFyZVRlYW1zU3RhdHMucHVzaChhbGxUZWFtU3RhdHNbaV0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU291dGhhbXB0b25cIjpcbiAgICAgICAgICAgICAgICBjb21wYXJlVGVhbXNTdGF0cy5wdXNoKGFsbFRlYW1TdGF0c1tpXSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gIExvb3AgdG8gcG9wdWxhdGUgYmFyIGdyYXBoIGFycmF5IGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBhcmVUZWFtc1N0YXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlYW0gPSBjb21wYXJlVGVhbXNTdGF0c1tpXTtcbiAgICAgICAgY29uc3QgdGVhbU5hbWUgPSB0ZWFtW1wiVGVhbVwiXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBYX0FYSVNfREFUQS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZGF0YUdyb3VwID0gWF9BWElTX0RBVEFbal1cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IFhfQVhJU1tqXTtcbiAgICAgICAgICAgIHN3aXRjaCAodGVhbU5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTGl2ZXJwb29sXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGFHcm91cFtrZXldW3RlYW1OYW1lXSArPSB0ZWFtW2tleV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlNvdXRoYW1wdG9uXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGFHcm91cFtrZXldW3RlYW1OYW1lXSArPSB0ZWFtW2tleV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIHRvIHBvcHVsYXRlIGluZGl2aXVhbCBzdGF0aXN0aWMgYXJyYXlzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUZWFtU3RhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxUZWFtU3RhdHNbaV1bXCJUZWFtXCJdKSB7XG4gICAgICAgICAgICBjYXNlIFwiTGl2ZXJwb29sXCI6XG4gICAgICAgICAgICAgICAgcG9pbnRzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlBvaW50c1wiXX0pO1xuICAgICAgICAgICAgICAgIHNob3RzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlNob3RzXCJdfSk7XG4gICAgICAgICAgICAgICAgc2hvdHNPblRhcmdldEFycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTaG90cyBvbiBUYXJnZXRcIl19KTtcbiAgICAgICAgICAgICAgICBmaXJzdEhhbGZHb2Fsc0FycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJGaXJzdCBIYWxmIEdvYWxzXCJdfSk7XG4gICAgICAgICAgICAgICAgc2Vjb25kSGFsZkdvYWxzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlNlY29uZCBIYWxmIEdvYWxzXCJdfSk7XG4gICAgICAgICAgICAgICAgdG90YWxHb2Fsc0FycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJUb3RhbCBHb2Fsc1wiXX0pO1xuICAgICAgICAgICAgICAgIGdvYWxzQWdhaW5zdEFycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJHb2FscyBBZ2FpbnN0XCJdfSk7XG4gICAgICAgICAgICAgICAgY29ybmVyc0FycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJDb3JuZXJzXCJdfSk7XG4gICAgICAgICAgICAgICAgZm91bHNDb21taXR0ZWRBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQ29tbWl0ZWRcIl19KTtcbiAgICAgICAgICAgICAgICBmb3Vsc0FnYWluc3RBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQWdhaW5zdFwiXX0pO1xuICAgICAgICAgICAgICAgIHllbGxvd0NhcmRzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlllbGxvdyBDYXJkc1wiXX0pO1xuICAgICAgICAgICAgICAgIHJlZENhcmRzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlJlZCBDYXJkc1wiXX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNvdXRoYW1wdG9uXCI6XG4gICAgICAgICAgICAgICAgcG9pbnRzQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiUG9pbnRzXCJdfSk7XG4gICAgICAgICAgICAgICAgc2hvdHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTaG90c1wiXX0pO1xuICAgICAgICAgICAgICAgIHNob3RzT25UYXJnZXRBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTaG90cyBvbiBUYXJnZXRcIl19KTtcbiAgICAgICAgICAgICAgICBmaXJzdEhhbGZHb2Fsc0FycmF5LnB1c2goe3RlYW06IFwiU291dGhhbXB0b25cIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkZpcnN0IEhhbGYgR29hbHNcIl19KTtcbiAgICAgICAgICAgICAgICBzZWNvbmRIYWxmR29hbHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTZWNvbmQgSGFsZiBHb2Fsc1wiXX0pO1xuICAgICAgICAgICAgICAgIHRvdGFsR29hbHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJUb3RhbCBHb2Fsc1wiXX0pO1xuICAgICAgICAgICAgICAgIGdvYWxzQWdhaW5zdEFycmF5LnB1c2goe3RlYW06IFwiU291dGhhbXB0b25cIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkdvYWxzIEFnYWluc3RcIl19KTtcbiAgICAgICAgICAgICAgICBjb3JuZXJzQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiQ29ybmVyc1wiXX0pO1xuICAgICAgICAgICAgICAgIGZvdWxzQ29tbWl0dGVkQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQ29tbWl0ZWRcIl19KTtcbiAgICAgICAgICAgICAgICBmb3Vsc0FnYWluc3RBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJGb3VscyBBZ2FpbnN0XCJdfSk7XG4gICAgICAgICAgICAgICAgeWVsbG93Q2FyZHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJZZWxsb3cgQ2FyZHNcIl19KTtcbiAgICAgICAgICAgICAgICByZWRDYXJkc0FycmF5LnB1c2goe3RlYW06IFwiU291dGhhbXB0b25cIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlJlZCBDYXJkc1wiXX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICAvLyBjcmVhdGluZyB0aGUgc3ZnIGVsZW1lbnQgZm9yIGJhciBjaGFydFxuICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA1MH0sXG4gICAgd2lkdGggPSA5MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA3MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKVxuXG4gICAgXG4gICAgLy8gWC1BeGlzIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgLnBhZGRpbmcoMC4yKTtcbiAgICBcbiAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiWC1heGlzXCIpXG5cbiAgICAvLyBZLUF4aXMgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcIlktYXhpc1wiKTtcblxuXG5cbiAgICAvLyBmdW5jdGlvbiB0byBjcmVhdGUvdXBkYXRlIHRoZSBiYXJncmFwaCB3aXRoIHRoZSBjaGFuZ2luZyBkYXRhXG4gICAgY29uc3QgdXBkYXRlID0gZGF0YSA9PiB7XG5cbiAgICAgICAgLy8gdXBkYXRlIFgtQXhpcyB3aXRoIHRlYW0gbmFtZXNcbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZCA9PiBkLnRlYW0pKVxuICAgICAgICB4QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG5cbiAgICAgICAgLy8gVXBkYXRlIFktQXhpcyB3aXRoIHJlbGV2YW50IHZhbHVlc1xuICAgICAgICB5LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC52YWx1ZSldKTtcbiAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YXJpYWJsZSBmb3IgZ3JhcGhcblxuICAgICAgICBsZXQgdSA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgdS5qb2luKFwicmVjdFwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHgoZC50ZWFtKSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geShkLnZhbHVlKSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBkID0+IGhlaWdodCAtIHkoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcblxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUocG9pbnRzQXJyYXkpO1xuXG5cbiAgICAvLyAgQ3JlYXRlIGEgZHJvcGRvd24gYnV0dG9uIHRvIHNlbGVjdCBkYXRhIG91dHB1dFxuICAgIGNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzZWxlY3RcIilcblxuICAgIC8vIENyZWF0ZSBvcHRpb25zIGZvciBEcm9wZG93blxuICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgIC5kYXRhKFhfQVhJUylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ29wdGlvbicpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkfSlcbiAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAvLyBDaGFuZ2Ugb2YgdmFsdWUgaW4gd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24gdG8gY2hhbmdlIGdyYXBoIG91dHB1dFxuICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShwb2ludHNBcnJheSk7ICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKHNob3RzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShzaG90c09uVGFyZ2V0QXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoZmlyc3RIYWxmR29hbHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoc2Vjb25kSGFsZkdvYWxzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKHRvdGFsR29hbHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShnb2Fsc0FnYWluc3RBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShjb3JuZXJzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKGZvdWxzQ29tbWl0dGVkQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoZm91bHNBZ2FpbnN0QXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZSh5ZWxsb3dDYXJkc0FycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJSZWQgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUocmVkQ2FyZHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgXG59KVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=