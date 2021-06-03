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
var X_AXIS = ["Points", "Shots", "Shots on Target", "First Half Goals", "Second Half Goals", "Total Goals", "Goals Against", "Corners", "Fouls Committed", "Fouls Against", "Yellow Cards", "Red Cards"];
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
  "Fouls Committed": {
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
      "Shots On Target": 0,
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
        _team["Shots On Target"] += parseInt(match["HST"]);
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
        _team["Shots On Target"] += parseInt(match["AST"]);
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
          value: allTeamStats[_i5]["Fouls Committed"]
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
          value: allTeamStats[_i5]["Fouls Committed"]
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
  var xAxis = svg.append("g").attr("transform", "translate(0, ".concat(height, ")")); // Y-Axis initialization

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

      case "Fouls Committed":
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
  console.log(compareTeamsStats);
  console.log(allTeamStats);
  console.log(data.columns.slice(1));
  console.log(X_AXIS_DATA);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsImFsbFRlYW1TdGF0cyIsImNvbXBhcmVUZWFtcyIsImNvbXBhcmVUZWFtc1N0YXRzIiwiWF9BWElTIiwiWF9BWElTX0RBVEEiLCJwb2ludHNBcnJheSIsInNob3RzQXJyYXkiLCJzaG90c09uVGFyZ2V0QXJyYXkiLCJmaXJzdEhhbGZHb2Fsc0FycmF5Iiwic2Vjb25kSGFsZkdvYWxzQXJyYXkiLCJ0b3RhbEdvYWxzQXJyYXkiLCJnb2Fsc0FnYWluc3RBcnJheSIsImNvcm5lcnNBcnJheSIsImZvdWxzQ29tbWl0dGVkQXJyYXkiLCJmb3Vsc0FnYWluc3RBcnJheSIsInllbGxvd0NhcmRzQXJyYXkiLCJyZWRDYXJkc0FycmF5IiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ0ZWFtIiwidGVhbU5hbWUiLCJqIiwibWF0Y2giLCJwYXJzZUludCIsImRhdGFHcm91cCIsImtleSIsInZhbHVlIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJ1cGRhdGUiLCJkb21haW4iLCJtYXAiLCJkIiwiY2FsbCIsImF4aXNCb3R0b20iLCJtYXgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJheGlzTGVmdCIsInUiLCJzZWxlY3RBbGwiLCJqb2luIiwiYmFuZHdpZHRoIiwiZHJvcERvd25CdXR0b24iLCJlbnRlciIsInRleHQiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHki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U0FBTyxDQUFDQyxHQUFSLENBQVlyRSxXQUFaO0FBQ0gsQ0F2UkQsRTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IGFsbFRlYW1TdGF0cyA9IFtdO1xubGV0IGNvbXBhcmVUZWFtcyA9IFtcIkxpdmVycG9vbFwiLCBcIlNvdXRoYW1wdG9uXCJdO1xubGV0IGNvbXBhcmVUZWFtc1N0YXRzID0gW107XG5jb25zdCBYX0FYSVMgPSBbXG4gICAgXCJQb2ludHNcIixcbiAgICBcIlNob3RzXCIsIFxuICAgIFwiU2hvdHMgb24gVGFyZ2V0XCIsXG4gICAgXCJGaXJzdCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIiwgXG4gICAgXCJUb3RhbCBHb2Fsc1wiLCBcbiAgICBcIkdvYWxzIEFnYWluc3RcIiwgXG4gICAgXCJDb3JuZXJzXCIsIFxuICAgIFwiRm91bHMgQ29tbWl0dGVkXCIsIFxuICAgIFwiRm91bHMgQWdhaW5zdFwiLCBcbiAgICBcIlllbGxvdyBDYXJkc1wiLCBcbiAgICBcIlJlZCBDYXJkc1wiXTtcblxuY29uc3QgWF9BWElTX0RBVEEgPSBbXG4gICAge1wiUG9pbnRzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSxcbiAgICB7XCJTaG90c1wiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sIFxuICAgIHtcIlNob3RzIG9uIFRhcmdldFwiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sXG4gICAge1wiRmlyc3QgSGFsZiBHb2Fsc1wiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sIFxuICAgIHtcIlNlY29uZCBIYWxmIEdvYWxzXCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiVG90YWwgR29hbHNcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJHb2FscyBBZ2FpbnN0XCI6IHtcIkxpdmVycG9vbFwiOiAwLCBcIlNvdXRoYW1wdG9uXCI6IDB9fSwgXG4gICAge1wiQ29ybmVyc1wiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sIFxuICAgIHtcIkZvdWxzIENvbW1pdHRlZFwiOiB7XCJMaXZlcnBvb2xcIjogMCwgXCJTb3V0aGFtcHRvblwiOiAwfX0sIFxuICAgIHtcIkZvdWxzIEFnYWluc3RcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJZZWxsb3cgQ2FyZHNcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19LCBcbiAgICB7XCJSZWQgQ2FyZHNcIjoge1wiTGl2ZXJwb29sXCI6IDAsIFwiU291dGhhbXB0b25cIjogMH19XG5dXG5cbmNvbnN0IHBvaW50c0FycmF5ID0gW107XG5jb25zdCBzaG90c0FycmF5ID0gW107XG5jb25zdCBzaG90c09uVGFyZ2V0QXJyYXkgPSBbXTtcbmNvbnN0IGZpcnN0SGFsZkdvYWxzQXJyYXkgPSBbXTtcbmNvbnN0IHNlY29uZEhhbGZHb2Fsc0FycmF5ID0gW107XG5jb25zdCB0b3RhbEdvYWxzQXJyYXkgPSBbXTtcbmNvbnN0IGdvYWxzQWdhaW5zdEFycmF5ID0gW107XG5jb25zdCBjb3JuZXJzQXJyYXkgPSBbXTtcbmNvbnN0IGZvdWxzQ29tbWl0dGVkQXJyYXkgPSBbXTtcbmNvbnN0IGZvdWxzQWdhaW5zdEFycmF5ID0gW107XG5jb25zdCB5ZWxsb3dDYXJkc0FycmF5ID0gW107XG5jb25zdCByZWRDYXJkc0FycmF5ID0gW107XG5cblxuXG5kMy5jc3YoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvMTgxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuXG4gICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIGNyZWF0aW5nIHNlYXNvblN0YXRzIGFycmF5IG9mIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIGFsbFRlYW1TdGF0cy5wdXNoKHtcbiAgICAgICAgIFwiVGVhbVwiOiB0ZWFtLFxuICAgICAgICAgXCJQb2ludHNcIjogMCxcbiAgICAgICAgIFwiU2hvdHNcIjogMCxcbiAgICAgICAgIFwiU2hvdHMgT24gVGFyZ2V0XCI6IDAsXG4gICAgICAgICBcIkZpcnN0IEhhbGYgR29hbHNcIjogMCxcbiAgICAgICAgIFwiU2Vjb25kIEhhbGYgR29hbHNcIjogMCxcbiAgICAgICAgIFwiVG90YWwgR29hbHNcIjogMCxcbiAgICAgICAgIFwiR29hbHMgQWdhaW5zdFwiOiAwLFxuICAgICAgICAgXCJDb3JuZXJzXCI6IDAsXG4gICAgICAgICBcIkZvdWxzIENvbW1pdGVkXCI6IDAsXG4gICAgICAgICBcIkZvdWxzIEFnYWluc3RcIjogMCxcbiAgICAgICAgIFwiWWVsbG93IENhcmRzXCI6IDAsXG4gICAgICAgICBcIlJlZCBDYXJkc1wiOiAwICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgZGF0YSBhbmQgcGxhY2luZyBpdCBpbnNpZGUgc2Vhc29uU3RhdHMgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGVhbVN0YXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gYWxsVGVhbVN0YXRzW2ldO1xuICAgICAgICBsZXQgdGVhbU5hbWUgPSB0ZWFtW1wiVGVhbVwiXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgaWYgKHRlYW1OYW1lID09PSBtYXRjaFtcIkhvbWVUZWFtXCJdKXtcbiAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgIHRlYW1bXCJQb2ludHNcIl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFNcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90cyBPbiBUYXJnZXRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIU1RcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGaXJzdCBIYWxmIEdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNlY29uZCBIYWxmIEdvYWxzXCJdICs9IChwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlRvdGFsIEdvYWxzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkdvYWxzIEFnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiQ29ybmVyc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhDXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRm91bHMgQ29tbWl0ZWRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzIEFnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlllbGxvdyBDYXJkc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhZXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiUmVkIENhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFJcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZWFtTmFtZSA9PT0gbWF0Y2hbXCJBd2F5VGVhbVwiXSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAzIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDFcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2hvdHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBU1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzIE9uIFRhcmdldFwiXSArPSBwYXJzZUludChtYXRjaFtcIkFTVFwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZpcnN0IEhhbGYgR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2Vjb25kIEhhbGYgR29hbHNcIl0gKz0gKHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiVG90YWwgR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEFHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiR29hbHMgQWdhaW5zdFwiXSArPSBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJDb3JuZXJzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQUNcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGb3VscyBDb21taXRlZFwiXSArPSBwYXJzZUludChtYXRjaFtcIkFGXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRm91bHMgQWdhaW5zdFwiXSArPSBwYXJzZUludChtYXRjaFtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiWWVsbG93IENhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiQVlcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJSZWQgQ2FyZHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBUlwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdG8gcG9wdWxhdGUgYXJyYXkgb2YgdGVhbXMgYmVpbmcgY29tcGFyZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRlYW1TdGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFRlYW1TdGF0c1tpXVtcIlRlYW1cIl0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJMaXZlcnBvb2xcIjpcbiAgICAgICAgICAgICAgICBjb21wYXJlVGVhbXNTdGF0cy5wdXNoKGFsbFRlYW1TdGF0c1tpXSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTb3V0aGFtcHRvblwiOlxuICAgICAgICAgICAgICAgIGNvbXBhcmVUZWFtc1N0YXRzLnB1c2goYWxsVGVhbVN0YXRzW2ldKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyAgTG9vcCB0byBwb3B1bGF0ZSBiYXIgZ3JhcGggYXJyYXkgZGF0YVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFyZVRlYW1zU3RhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVhbSA9IGNvbXBhcmVUZWFtc1N0YXRzW2ldO1xuICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IHRlYW1bXCJUZWFtXCJdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFhfQVhJU19EQVRBLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhR3JvdXAgPSBYX0FYSVNfREFUQVtqXVxuICAgICAgICAgICAgY29uc3Qga2V5ID0gWF9BWElTW2pdO1xuICAgICAgICAgICAgc3dpdGNoICh0ZWFtTmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJMaXZlcnBvb2xcIjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YUdyb3VwW2tleV1bdGVhbU5hbWVdICs9IHRlYW1ba2V5XVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiU291dGhhbXB0b25cIjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YUdyb3VwW2tleV1bdGVhbU5hbWVdICs9IHRlYW1ba2V5XVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdG8gcG9wdWxhdGUgaW5kaXZpdWFsIHN0YXRpc3RpYyBhcnJheXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRlYW1TdGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFRlYW1TdGF0c1tpXVtcIlRlYW1cIl0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJMaXZlcnBvb2xcIjpcbiAgICAgICAgICAgICAgICBwb2ludHNBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiUG9pbnRzXCJdfSk7XG4gICAgICAgICAgICAgICAgc2hvdHNBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiU2hvdHNcIl19KTtcbiAgICAgICAgICAgICAgICBzaG90c09uVGFyZ2V0QXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlNob3RzIG9uIFRhcmdldFwiXX0pO1xuICAgICAgICAgICAgICAgIGZpcnN0SGFsZkdvYWxzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkZpcnN0IEhhbGYgR29hbHNcIl19KTtcbiAgICAgICAgICAgICAgICBzZWNvbmRIYWxmR29hbHNBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiU2Vjb25kIEhhbGYgR29hbHNcIl19KTtcbiAgICAgICAgICAgICAgICB0b3RhbEdvYWxzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlRvdGFsIEdvYWxzXCJdfSk7XG4gICAgICAgICAgICAgICAgZ29hbHNBZ2FpbnN0QXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkdvYWxzIEFnYWluc3RcIl19KTtcbiAgICAgICAgICAgICAgICBjb3JuZXJzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkNvcm5lcnNcIl19KTtcbiAgICAgICAgICAgICAgICBmb3Vsc0NvbW1pdHRlZEFycmF5LnB1c2goe3RlYW06IFwiTGl2ZXJwb29sXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJGb3VscyBDb21taXR0ZWRcIl19KTtcbiAgICAgICAgICAgICAgICBmb3Vsc0FnYWluc3RBcnJheS5wdXNoKHt0ZWFtOiBcIkxpdmVycG9vbFwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQWdhaW5zdFwiXX0pO1xuICAgICAgICAgICAgICAgIHllbGxvd0NhcmRzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlllbGxvdyBDYXJkc1wiXX0pO1xuICAgICAgICAgICAgICAgIHJlZENhcmRzQXJyYXkucHVzaCh7dGVhbTogXCJMaXZlcnBvb2xcIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIlJlZCBDYXJkc1wiXX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNvdXRoYW1wdG9uXCI6XG4gICAgICAgICAgICAgICAgcG9pbnRzQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiUG9pbnRzXCJdfSk7XG4gICAgICAgICAgICAgICAgc2hvdHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTaG90c1wiXX0pO1xuICAgICAgICAgICAgICAgIHNob3RzT25UYXJnZXRBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTaG90cyBvbiBUYXJnZXRcIl19KTtcbiAgICAgICAgICAgICAgICBmaXJzdEhhbGZHb2Fsc0FycmF5LnB1c2goe3RlYW06IFwiU291dGhhbXB0b25cIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkZpcnN0IEhhbGYgR29hbHNcIl19KTtcbiAgICAgICAgICAgICAgICBzZWNvbmRIYWxmR29hbHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJTZWNvbmQgSGFsZiBHb2Fsc1wiXX0pO1xuICAgICAgICAgICAgICAgIHRvdGFsR29hbHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJUb3RhbCBHb2Fsc1wiXX0pO1xuICAgICAgICAgICAgICAgIGdvYWxzQWdhaW5zdEFycmF5LnB1c2goe3RlYW06IFwiU291dGhhbXB0b25cIiwgdmFsdWU6IGFsbFRlYW1TdGF0c1tpXVtcIkdvYWxzIEFnYWluc3RcIl19KTtcbiAgICAgICAgICAgICAgICBjb3JuZXJzQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiQ29ybmVyc1wiXX0pO1xuICAgICAgICAgICAgICAgIGZvdWxzQ29tbWl0dGVkQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQ29tbWl0dGVkXCJdfSk7XG4gICAgICAgICAgICAgICAgZm91bHNBZ2FpbnN0QXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiRm91bHMgQWdhaW5zdFwiXX0pO1xuICAgICAgICAgICAgICAgIHllbGxvd0NhcmRzQXJyYXkucHVzaCh7dGVhbTogXCJTb3V0aGFtcHRvblwiLCB2YWx1ZTogYWxsVGVhbVN0YXRzW2ldW1wiWWVsbG93IENhcmRzXCJdfSk7XG4gICAgICAgICAgICAgICAgcmVkQ2FyZHNBcnJheS5wdXNoKHt0ZWFtOiBcIlNvdXRoYW1wdG9uXCIsIHZhbHVlOiBhbGxUZWFtU3RhdHNbaV1bXCJSZWQgQ2FyZHNcIl19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICAgLy8gY3JlYXRpbmcgdGhlIHN2ZyBlbGVtZW50IGZvciBiYXIgY2hhcnRcbiAgICB2YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiA2MCwgbGVmdDogNTB9LFxuICAgIHdpZHRoID0gOTAwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNzAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b21cblxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcblxuICAgIFxuICAgIC8vIFgtQXhpcyBpbml0aWFsaXphdGlvbi9jcmVhdGlvblxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgIC5wYWRkaW5nKDAuMik7XG4gICAgXG4gICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG5cbiAgICAvLyBZLUF4aXMgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcIlktYXhpc1wiKTtcblxuXG5cbiAgICAvLyBmdW5jdGlvbiB0byBjcmVhdGUvdXBkYXRlIHRoZSBiYXJncmFwaCB3aXRoIHRoZSBjaGFuZ2luZyBkYXRhXG4gICAgY29uc3QgdXBkYXRlID0gZGF0YSA9PiB7XG5cbiAgICAgICAgLy8gdXBkYXRlIFgtQXhpcyB3aXRoIHRlYW0gbmFtZXNcbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZCA9PiBkLnRlYW0pKVxuICAgICAgICB4QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG5cbiAgICAgICAgLy8gVXBkYXRlIFktQXhpcyB3aXRoIHJlbGV2YW50IHZhbHVlc1xuICAgICAgICB5LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC52YWx1ZSldKTtcbiAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YXJpYWJsZSBmb3IgZ3JhcGhcblxuICAgICAgICBsZXQgdSA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgdS5qb2luKFwicmVjdFwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHgoZC50ZWFtKSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geShkLnZhbHVlKSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBkID0+IGhlaWdodCAtIHkoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcblxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUocG9pbnRzQXJyYXkpO1xuXG5cbiAgICAvLyAgQ3JlYXRlIGEgZHJvcGRvd24gYnV0dG9uIHRvIHNlbGVjdCBkYXRhIG91dHB1dFxuICAgIGNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzZWxlY3RcIilcblxuICAgIC8vIENyZWF0ZSBvcHRpb25zIGZvciBEcm9wZG93blxuICAgIGRyb3BEb3duQnV0dG9uLnNlbGVjdEFsbCgnZGF0YU9wdGlvbnMnKVxuICAgIC5kYXRhKFhfQVhJUylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoJ29wdGlvbicpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkfSlcbiAgICAuYXR0cihcInZhbHVlXCIsIGQgPT4ge3JldHVybiBkfSk7XG5cbiAgICAvLyBDaGFuZ2Ugb2YgdmFsdWUgaW4gd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24gdG8gY2hhbmdlIGdyYXBoIG91dHB1dFxuICAgIGRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShwb2ludHNBcnJheSk7ICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKHNob3RzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNob3RzIG9uIFRhcmdldFwiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShzaG90c09uVGFyZ2V0QXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoZmlyc3RIYWxmR29hbHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoc2Vjb25kSGFsZkdvYWxzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlRvdGFsIEdvYWxzXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKHRvdGFsR29hbHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR29hbHMgQWdhaW5zdFwiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShnb2Fsc0FnYWluc3RBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShjb3JuZXJzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdHRlZFwiOlxuICAgICAgICAgICAgICAgIHVwZGF0ZShmb3Vsc0NvbW1pdHRlZEFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKGZvdWxzQWdhaW5zdEFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZZWxsb3cgQ2FyZHNcIjpcbiAgICAgICAgICAgICAgICB1cGRhdGUoeWVsbG93Q2FyZHNBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICAgICAgdXBkYXRlKHJlZENhcmRzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhjb21wYXJlVGVhbXNTdGF0cyk7XG4gICAgY29uc29sZS5sb2coYWxsVGVhbVN0YXRzKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmNvbHVtbnMuc2xpY2UoMSkpXG4gICAgY29uc29sZS5sb2coWF9BWElTX0RBVEEpO1xufSlcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9