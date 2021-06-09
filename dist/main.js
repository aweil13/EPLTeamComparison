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
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var tenElevenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var elevenTwelveStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var twelveThirteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var thirteenFourteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var fourteenFifteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var fifteenSixteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var sixteenSeventeenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var seventeenEighteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
};
var eighteenNineteenStats = {
  teams: [],
  barGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  },
  lineGraphStats: {
    seasonPoints: {},
    seasonShots: {},
    seasonShotsOnTarget: {},
    seasonFirstHalfGoals: {},
    seasonSecondHalfGoals: {},
    seasonGoals: {},
    seasonGoalsAgainst: {},
    seasonCorners: {},
    seasonFoulsCommited: {},
    seasonFoulsAgainst: {},
    seasonYellowCards: {},
    seasonRedCards: {}
  }
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
    } // Nested loop to populate data objects for eventual graph output


    for (var _i5 = 0; _i5 < seasonData["teams"].length; _i5++) {
      var team = seasonData["teams"][_i5]; // line graph data
      // debugger;

      seasonData["lineGraphStats"]["seasonPoints"][team] = [[0, 0]];
      var lineGraphPoints = seasonData["lineGraphStats"]["seasonPoints"][team];
      seasonData["lineGraphStats"]["seasonShots"][team] = [[0, 0]];
      var lineGraphShots = seasonData["lineGraphStats"]["seasonShots"][team];
      seasonData["lineGraphStats"]["seasonShotsOnTarget"][team] = [[0, 0]];
      var lineGraphShotsOnTarget = seasonData["lineGraphStats"]["seasonShotsOnTarget"][team];
      seasonData["lineGraphStats"]["seasonFirstHalfGoals"][team] = [[0, 0]];
      var lineGraphFirstHalfGoals = seasonData["lineGraphStats"]["seasonFirstHalfGoals"][team];
      seasonData["lineGraphStats"]["seasonSecondHalfGoals"][team] = [[0, 0]];
      var lineGraphSecondHalfGoals = seasonData["lineGraphStats"]["seasonSecondHalfGoals"][team];
      seasonData["lineGraphStats"]["seasonGoals"][team] = [[0, 0]];
      var lineGraphGoals = seasonData["lineGraphStats"]["seasonGoals"][team];
      seasonData["lineGraphStats"]["seasonGoalsAgainst"][team] = [[0, 0]];
      var lineGraphGoalsAgainst = seasonData["lineGraphStats"]["seasonGoalsAgainst"][team];
      seasonData["lineGraphStats"]["seasonCorners"][team] = [[0, 0]];
      var lineGraphCorners = seasonData["lineGraphStats"]["seasonCorners"][team];
      seasonData["lineGraphStats"]["seasonFoulsCommited"][team] = [[0, 0]];
      var lineGraphFoulsCommited = seasonData["lineGraphStats"]["seasonFoulsCommited"][team];
      seasonData["lineGraphStats"]["seasonFoulsAgainst"][team] = [[0, 0]];
      var lineGraphFoulsAgainst = seasonData["lineGraphStats"]["seasonFoulsAgainst"][team];
      seasonData["lineGraphStats"]["seasonYellowCards"][team] = [[0, 0]];
      var lineGraphYellowCards = seasonData["lineGraphStats"]["seasonYellowCards"][team];
      seasonData["lineGraphStats"]["seasonRedCards"][team] = [[0, 0]];
      var lineGraphRedCards = seasonData["lineGraphStats"]["seasonRedCards"][team]; // bar graph data

      seasonData["barGraphStats"]["seasonPoints"][team] = 0;
      seasonData["barGraphStats"]["seasonShots"][team] = 0;
      seasonData["barGraphStats"]["seasonShotsOnTarget"][team] = 0;
      seasonData["barGraphStats"]["seasonFirstHalfGoals"][team] = 0;
      seasonData["barGraphStats"]["seasonSecondHalfGoals"][team] = 0;
      seasonData["barGraphStats"]["seasonGoals"][team] = 0;
      seasonData["barGraphStats"]["seasonGoalsAgainst"][team] = 0;
      seasonData["barGraphStats"]["seasonCorners"][team] = 0;
      seasonData["barGraphStats"]["seasonFoulsCommited"][team] = 0;
      seasonData["barGraphStats"]["seasonFoulsAgainst"][team] = 0;
      seasonData["barGraphStats"]["seasonYellowCards"][team] = 0;
      seasonData["barGraphStats"]["seasonRedCards"][team] = 0; // loop to populate data objects

      for (var j = 0; j < data.length; j++) {
        // single matchday data
        var match = data[j]; // line graph helper variables

        var prevPoints = lineGraphPoints[lineGraphPoints.length - 1][1];
        var prevMatchday = lineGraphPoints[lineGraphPoints.length - 1][0];
        var prevShots = lineGraphShots[lineGraphShots.length - 1][1];
        var prevShotsOnTarget = lineGraphShotsOnTarget[lineGraphShotsOnTarget.length - 1][1];
        var prevFirstHalfGoals = lineGraphFirstHalfGoals[lineGraphFirstHalfGoals.length - 1][1];
        var prevSecondHalfGoals = lineGraphSecondHalfGoals[lineGraphSecondHalfGoals.length - 1][1];
        var prevGoals = lineGraphGoals[lineGraphGoals.length - 1][1];
        var prevGoalsAgainst = lineGraphGoalsAgainst[lineGraphGoalsAgainst.length - 1][1];
        var prevCorners = lineGraphCorners[lineGraphCorners.length - 1][1];
        var prevFoulsCommited = lineGraphFoulsCommited[lineGraphFoulsCommited.length - 1][1];
        var prevFoulsAgainst = lineGraphFoulsAgainst[lineGraphFoulsAgainst.length - 1][1];
        var prevYellowCards = lineGraphYellowCards[lineGraphYellowCards.length - 1][1];
        var prevRedCards = lineGraphRedCards[lineGraphRedCards.length - 1][1]; // conditional for populating data objects with relevant team data

        if (match["HomeTeam"] === team) {
          switch (match["FTR"]) {
            case "H":
              seasonData["barGraphStats"]["seasonPoints"][team] += 3;
              lineGraphPoints.push([prevMatchday + 1, prevPoints + 3]);
              break;

            case "D":
              seasonData["barGraphStats"]["seasonPoints"][team] += 1;
              lineGraphPoints.push([prevMatchday + 1, prevPoints + 1]);
              break;

            case "A":
              lineGraphPoints.push([prevMatchday + 1, prevPoints]);
              break;

            default:
              break;
          } // Line graph data array input for home games


          lineGraphShots.push([prevMatchday + 1, prevShots + parseInt(match["HS"])]);
          lineGraphShotsOnTarget.push([prevMatchday + 1, prevShotsOnTarget + parseInt(match["HST"])]);
          lineGraphFirstHalfGoals.push([prevMatchday + 1, prevFirstHalfGoals + parseInt(match["HTHG"])]);
          lineGraphSecondHalfGoals.push([prevMatchday + 1, prevSecondHalfGoals + (parseInt(match["FTHG"]) - parseInt(match["HTHG"]))]);
          lineGraphGoals.push([prevMatchday + 1, prevGoals + parseInt(match["FTHG"])]);
          lineGraphGoalsAgainst.push([prevMatchday + 1, prevGoalsAgainst + parseInt(match["FTAG"])]);
          lineGraphCorners.push([prevMatchday + 1, prevCorners + parseInt(match["HC"])]);
          lineGraphFoulsCommited.push([prevMatchday + 1, prevFoulsCommited + parseInt(match["HF"])]);
          lineGraphFoulsAgainst.push([prevMatchday + 1, prevFoulsAgainst + parseInt(match["AF"])]);
          lineGraphYellowCards.push([prevMatchday + 1, prevYellowCards + parseInt(match["HY"])]);
          lineGraphRedCards.push([prevMatchday + 1, prevRedCards + parseInt(match["HY"])]); // Bar Graph data array input for home games

          seasonData["barGraphStats"]["seasonPoints"][team] += parseInt(match["HS"]);
          seasonData["barGraphStats"]["seasonShotsOnTarget"][team] += parseInt(match["HST"]);
          seasonData["barGraphStats"]["seasonFirstHalfGoals"][team] += parseInt(match["HTHG"]);
          seasonData["barGraphStats"]["seasonSecondHalfGoals"][team] += parseInt(match["FTHG"]) - parseInt(match["HTHG"]);
          seasonData["barGraphStats"]["seasonGoals"][team] += parseInt(match["FTHG"]);
          seasonData["barGraphStats"]["seasonGoalsAgainst"][team] += parseInt(match["FTAG"]);
          seasonData["barGraphStats"]["seasonCorners"][team] += parseInt(match["HC"]);
          seasonData["barGraphStats"]["seasonFoulsCommited"][team] += parseInt(match["HF"]);
          seasonData["barGraphStats"]["seasonFoulsAgainst"][team] += parseInt(match["AF"]);
          seasonData["barGraphStats"]["seasonYellowCards"][team] += parseInt(match["HY"]);
          seasonData["barGraphStats"]["seasonRedCards"][team] += parseInt(match["HR"]);
        } else if (team === match["AwayTeam"]) {
          switch (match["FTR"]) {
            case "A":
              seasonData["barGraphStats"]["seasonPoints"][team] += 3;
              lineGraphPoints.push([prevMatchday + 1, prevPoints + 3]);
              break;

            case "D":
              seasonData["barGraphStats"]["seasonPoints"][team] += 1;
              lineGraphPoints.push([prevMatchday + 1, prevPoints + 1]);
              break;

            case "H":
              lineGraphPoints.push([prevMatchday + 1, prevPoints]);
              break;

            default:
              break;
          } // Line graph data array input for away games


          lineGraphShots.push([prevMatchday + 1, prevShots + parseInt(match["AS"])]);
          lineGraphShotsOnTarget.push([prevMatchday + 1, prevShotsOnTarget + parseInt(match["AST"])]);
          lineGraphFirstHalfGoals.push([prevMatchday + 1, prevFirstHalfGoals + parseInt(match["HTAG"])]);
          lineGraphSecondHalfGoals.push([prevMatchday + 1, prevSecondHalfGoals + (parseInt(match["FTAG"]) - parseInt(match["HTAG"]))]);
          lineGraphGoals.push([prevMatchday + 1, prevGoals + parseInt(match["FTAG"])]);
          lineGraphGoalsAgainst.push([prevMatchday + 1, prevGoalsAgainst + parseInt(match["FTHG"])]);
          lineGraphCorners.push([prevMatchday + 1, prevCorners + parseInt(match["AC"])]);
          lineGraphFoulsCommited.push([prevMatchday + 1, prevFoulsCommited + parseInt(match["AF"])]);
          lineGraphFoulsAgainst.push([prevMatchday + 1, prevFoulsAgainst + parseInt(match["HF"])]);
          lineGraphYellowCards.push([prevMatchday + 1, prevYellowCards + parseInt(match["AY"])]);
          lineGraphRedCards.push([prevMatchday + 1, prevRedCards + parseInt(match["AY"])]); // Bar Graph data array input for away games

          seasonData["barGraphStats"]["seasonPoints"][team] += parseInt(match["AS"]);
          seasonData["barGraphStats"]["seasonShotsOnTarget"][team] += parseInt(match["AST"]);
          seasonData["barGraphStats"]["seasonFirstHalfGoals"][team] += parseInt(match["HTAG"]);
          seasonData["barGraphStats"]["seasonSecondHalfGoals"][team] += parseInt(match["FTAG"]) - parseInt(match["HTAG"]);
          seasonData["barGraphStats"]["seasonGoals"][team] += parseInt(match["FTAG"]);
          seasonData["barGraphStats"]["seasonGoalsAgainst"][team] += parseInt(match["FTHG"]);
          seasonData["barGraphStats"]["seasonCorners"][team] += parseInt(match["AC"]);
          seasonData["barGraphStats"]["seasonFoulsCommited"][team] += parseInt(match["AF"]);
          seasonData["barGraphStats"]["seasonFoulsAgainst"][team] += parseInt(match["HF"]);
          seasonData["barGraphStats"]["seasonYellowCards"][team] += parseInt(match["AY"]);
          seasonData["barGraphStats"]["seasonRedCards"][team] += parseInt(match["AR"]);
        }
      }
    }
  });
};

for (var _i = 0; _i < seasonArray.length; _i++) {
  _loop(_i);
}

console.log(nineTenStats["lineGraphStats"]);
console.log(tenElevenStats["barGraphStats"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJuaW5lVGVuU3RhdHMiLCJ0ZWFtcyIsImJhckdyYXBoU3RhdHMiLCJzZWFzb25Qb2ludHMiLCJzZWFzb25TaG90cyIsInNlYXNvblNob3RzT25UYXJnZXQiLCJzZWFzb25GaXJzdEhhbGZHb2FscyIsInNlYXNvblNlY29uZEhhbGZHb2FscyIsInNlYXNvbkdvYWxzIiwic2Vhc29uR29hbHNBZ2FpbnN0Iiwic2Vhc29uQ29ybmVycyIsInNlYXNvbkZvdWxzQ29tbWl0ZWQiLCJzZWFzb25Gb3Vsc0FnYWluc3QiLCJzZWFzb25ZZWxsb3dDYXJkcyIsInNlYXNvblJlZENhcmRzIiwibGluZUdyYXBoU3RhdHMiLCJ0ZW5FbGV2ZW5TdGF0cyIsImVsZXZlblR3ZWx2ZVN0YXRzIiwidHdlbHZlVGhpcnRlZW5TdGF0cyIsInRoaXJ0ZWVuRm91cnRlZW5TdGF0cyIsImZvdXJ0ZWVuRmlmdGVlblN0YXRzIiwiZmlmdGVlblNpeHRlZW5TdGF0cyIsInNpeHRlZW5TZXZlbnRlZW5TdGF0cyIsInNldmVudGVlbkVpZ2h0ZWVuU3RhdHMiLCJlaWdodGVlbk5pbmV0ZWVuU3RhdHMiLCJBTExfVEVBTVMiLCJTVEFUUyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwic2Vhc29uQXJyYXkiLCJzZWFzb24iLCJzZWFzb25EYXRhIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJ0ZWFtIiwibGluZUdyYXBoUG9pbnRzIiwibGluZUdyYXBoU2hvdHMiLCJsaW5lR3JhcGhTaG90c09uVGFyZ2V0IiwibGluZUdyYXBoRmlyc3RIYWxmR29hbHMiLCJsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMiLCJsaW5lR3JhcGhHb2FscyIsImxpbmVHcmFwaEdvYWxzQWdhaW5zdCIsImxpbmVHcmFwaENvcm5lcnMiLCJsaW5lR3JhcGhGb3Vsc0NvbW1pdGVkIiwibGluZUdyYXBoRm91bHNBZ2FpbnN0IiwibGluZUdyYXBoWWVsbG93Q2FyZHMiLCJsaW5lR3JhcGhSZWRDYXJkcyIsImoiLCJtYXRjaCIsInByZXZQb2ludHMiLCJwcmV2TWF0Y2hkYXkiLCJwcmV2U2hvdHMiLCJwcmV2U2hvdHNPblRhcmdldCIsInByZXZGaXJzdEhhbGZHb2FscyIsInByZXZTZWNvbmRIYWxmR29hbHMiLCJwcmV2R29hbHMiLCJwcmV2R29hbHNBZ2FpbnN0IiwicHJldkNvcm5lcnMiLCJwcmV2Rm91bHNDb21taXRlZCIsInByZXZGb3Vsc0FnYWluc3QiLCJwcmV2WWVsbG93Q2FyZHMiLCJwcmV2UmVkQ2FyZHMiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsInRleHQiLCJkcm9wRG93bkJ1dHRvbiIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsIngiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5IiwieUF4aXMiLCJheGlzTGVmdCIsInVwZGF0ZSIsInRpdGxlIiwiZG9tYWluIiwibWF4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsInRlYW1PbmVNYXgiLCJ0ZWFtVHdvTWF4IiwibGluZTEiLCJsaW5lMiIsInJlbW92ZSIsImRhdHVtIiwibWVyZ2UiLCJsaW5lIiwib24iLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QUNBOztBQUNKLFdBQUssY0FBTDtBQUNJaEIsY0FBTSxDQUFDcEYsaUJBQUQsRUFBb0JvRyxjQUFwQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0loQixjQUFNLENBQUNuRixjQUFELEVBQWlCbUcsY0FBakIsQ0FBTjtBQUNBOztBQUNKO0FBQ0k7QUF0Q1I7QUF3Q0gsR0ExQ0Q7QUE4Q0MsQ0F2U0QsRTs7Ozs7Ozs7Ozs7O0FDcmRBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuXG4vLyBEYXRhIG9iamVjdHMsIGFzIHNvb24gYXMgcGFnZSBpcyBsb2FkZWQgdGhlc2Ugb2JqZWN0cyB3aWxsIGJlIHBvcHVsYXRlZFxuY29uc3QgbmluZVRlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHRlbkVsZXZlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGVsZXZlblR3ZWx2ZVN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHR3ZWx2ZVRoaXJ0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3QgdGhpcnRlZW5Gb3VydGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGZvdXJ0ZWVuRmlmdGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGZpZnRlZW5TaXh0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3Qgc2l4dGVlblNldmVudGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHNldmVudGVlbkVpZ2h0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3QgZWlnaHRlZW5OaW5ldGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IEFMTF9URUFNUyA9IFtdO1xuXG4vLyBTdGF0aXN0aWNzIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBkcm9wZG93biBidXR0b24gc2VsZWN0aW9uIGFuZCBwb3B1bGF0aW5nIHRoZSBkYXRhIG9iamVjdHMgYWJvdmVcbmNvbnN0IFNUQVRTID0gW1xuICAgIFwiUG9pbnRzXCIsXG4gICAgXCJTaG90c1wiLCBcbiAgICBcIlNob3RzIG9uIFRhcmdldFwiLFxuICAgIFwiRmlyc3QgSGFsZiBHb2Fsc1wiLCBcbiAgICBcIlNlY29uZCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiVG90YWwgR29hbHNcIiwgXG4gICAgXCJHb2FscyBBZ2FpbnN0XCIsIFxuICAgIFwiQ29ybmVyc1wiLCBcbiAgICBcIkZvdWxzIENvbW1pdGVkXCIsIFxuICAgIFwiRm91bHMgQWdhaW5zdFwiLCBcbiAgICBcIlllbGxvdyBDYXJkc1wiLCBcbiAgICBcIlJlZCBDYXJkc1wiXG5dO1xuXG5cbi8vIGxvb3AgdG8gY3JlYXRlIHNlYXNvbiBsZW5ndGggbnVtYmVycyBhcnJheSB0byBsb29wIHRocm91Z2ggaW4gdGhlIGZ1dHVyZVxuY29uc3Qgc2Vhc29uTGVuZ3RoID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDM5OyBpKyspIHtcbiAgICBzZWFzb25MZW5ndGgucHVzaChpKTsgICAgXG59XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IHNlYXNvblBvaW50cyA9IHt9O1xubGV0IHNlYXNvblNob3RzID0ge307XG5sZXQgc2Vhc29uU2hvdHNPblRhcmdldCA9IHt9O1xubGV0IHNlYXNvbkZpcnN0SGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uU2Vjb25kSGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uR29hbHMgPSB7fTtcbmxldCBzZWFzb25Hb2Fsc0FnYWluc3QgPSB7fTtcbmxldCBzZWFzb25Db3JuZXJzID0ge307XG5sZXQgc2Vhc29uRm91bHNDb21taXRlZCA9IHt9O1xubGV0IHNlYXNvbkZvdWxzQWdhaW5zdCA9IHt9O1xubGV0IHNlYXNvblllbGxvd0NhcmRzID0ge307XG5sZXQgc2Vhc29uUmVkQ2FyZHMgPSB7fTtcblxuXG4vLyBBcnJheSBmb3IgbG9vcGluZyB0aHJvdWdoIGRhdGEgdG8gcG9wdWxhdGUgb2JqZWN0c1xuY29uc3Qgc2Vhc29uQXJyYXkgPSBbXG5bXCIyMDA5LTIwMTBcIiwgbmluZVRlblN0YXRzXSwgXG5bXCIyMDEwLTIwMTFcIiwgdGVuRWxldmVuU3RhdHNdLCBcbltcIjIwMTEtMjAxMlwiLCBlbGV2ZW5Ud2VsdmVTdGF0c10sIFxuW1wiMjAxMi0yMDEzXCIsIHR3ZWx2ZVRoaXJ0ZWVuU3RhdHNdLCBcbltcIjIwMTMtMjAxNFwiLCB0aGlydGVlbkZvdXJ0ZWVuU3RhdHNdLCBcbltcIjIwMTQtMjAxNVwiLCBmb3VydGVlbkZpZnRlZW5TdGF0c10sIFxuW1wiMjAxNS0yMDE2XCIsIGZpZnRlZW5TaXh0ZWVuU3RhdHNdLCBcbltcIjIwMTYtMjAxN1wiLCBzaXh0ZWVuU2V2ZW50ZWVuU3RhdHNdLCBcbltcIjIwMTctMjAxOFwiLCBzZXZlbnRlZW5FaWdodGVlblN0YXRzXSwgXG5bXCIyMDE4LTIwMTlcIiwgZWlnaHRlZW5OaW5ldGVlblN0YXRzXVxuXVxuXG5cbi8vIExvb3AgdG8gcG9wdWxhdGUgZGF0YSBvYmplY3RzXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlYXNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2Vhc29uID0gc2Vhc29uQXJyYXlbaV1bMF07XG4gICAgY29uc3Qgc2Vhc29uRGF0YSA9IHNlYXNvbkFycmF5W2ldWzFdO1xuICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCB0byBwb3B1bGF0ZSBBTExfVEVBTVMgYXJyYXkgZm9yIGV2ZW50dWFsIHNlYXJjaCBiYXIgYW5kIGZvciB0aGUgdGVhbXMgYXJyYXkgZm9yIGVhY2ggc2Vhc29uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hkYXkgPSBkYXRhW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWFzb25EYXRhW1widGVhbXNcIl0uaW5jbHVkZXMobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSkpe1xuICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJ0ZWFtc1wiXS5wdXNoKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pO1xuICAgICAgICAgICAgICAgIGlmICghQUxMX1RFQU1TLmluY2x1ZGVzKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pKSB7QUxMX1RFQU1TLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSl9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzZWFzb25EYXRhW1widGVhbXNcIl0uaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1widGVhbXNcIl0ucHVzaChtYXRjaGRheVtcIkF3YXlUZWFtXCJdKTtcbiAgICAgICAgICAgICAgICBpZiAoIUFMTF9URUFNUy5pbmNsdWRlcyhtYXRjaGRheVtcIkF3YXlUZWFtXCJdKSkge0FMTF9URUFNUy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmVzdGVkIGxvb3AgdG8gcG9wdWxhdGUgZGF0YSBvYmplY3RzIGZvciBldmVudHVhbCBncmFwaCBvdXRwdXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFzb25EYXRhW1widGVhbXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ZWFtID0gc2Vhc29uRGF0YVtcInRlYW1zXCJdW2ldO1xuICAgICAgICAgICAgLy8gbGluZSBncmFwaCBkYXRhXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvblBvaW50c1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoUG9pbnRzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICAgICAgbGV0IGxpbmVHcmFwaFNob3RzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25TaG90c09uVGFyZ2V0XCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhTaG90c09uVGFyZ2V0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNPblRhcmdldFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhGaXJzdEhhbGZHb2FscyA9IHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2Vjb25kSGFsZkdvYWxzXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoR29hbHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzQWdhaW5zdFwiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoR29hbHNBZ2FpbnN0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uR29hbHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uQ29ybmVyc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoQ29ybmVycyA9IHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Gb3Vsc0NvbW1pdGVkXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhGb3Vsc0NvbW1pdGVkID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNDb21taXRlZFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZvdWxzQWdhaW5zdFwiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoRm91bHNBZ2FpbnN0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICAgICAgbGV0IGxpbmVHcmFwaFllbGxvd0NhcmRzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoUmVkQ2FyZHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXTtcblxuICAgICAgICAgICAgLy8gYmFyIGdyYXBoIGRhdGFcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TaG90c09uVGFyZ2V0XCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRmlyc3RIYWxmR29hbHNcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXSA9IDA7XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzQWdhaW5zdFwiXVt0ZWFtXSA9IDA7XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV0gPSAwOyAgICAgICAgICAgIFxuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Gb3Vsc0NvbW1pdGVkXCJdW3RlYW1dID0gMDsgICAgICAgICAgICBcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dID0gMDsgICAgICAgICAgICBcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV0gPSAwOyAgICAgICAgICAgIFxuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXSA9IDA7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gbG9vcCB0byBwb3B1bGF0ZSBkYXRhIG9iamVjdHNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBtYXRjaGRheSBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBsaW5lIGdyYXBoIGhlbHBlciB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBsZXQgcHJldlBvaW50cyA9IGxpbmVHcmFwaFBvaW50c1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV07XG4gICAgICAgICAgICAgICAgbGV0IHByZXZNYXRjaGRheSA9IGxpbmVHcmFwaFBvaW50c1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgICAgICAgbGV0IHByZXZTaG90cyA9IGxpbmVHcmFwaFNob3RzW2xpbmVHcmFwaFNob3RzLmxlbmd0aCAtIDFdWzFdO1xuICAgICAgICAgICAgICAgIGxldCBwcmV2U2hvdHNPblRhcmdldCA9IGxpbmVHcmFwaFNob3RzT25UYXJnZXRbbGluZUdyYXBoU2hvdHNPblRhcmdldC5sZW5ndGggLSAxXVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkZpcnN0SGFsZkdvYWxzID0gbGluZUdyYXBoRmlyc3RIYWxmR29hbHNbbGluZUdyYXBoRmlyc3RIYWxmR29hbHMubGVuZ3RoIC0gMV1bMV07XG4gICAgICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMgPSBsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHNbbGluZUdyYXBoU2Vjb25kSGFsZkdvYWxzLmxlbmd0aCAtIDFdWzFdO1xuICAgICAgICAgICAgICAgIGxldCBwcmV2R29hbHMgPSBsaW5lR3JhcGhHb2Fsc1tsaW5lR3JhcGhHb2Fscy5sZW5ndGggLSAxXVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzQWdhaW5zdCA9IGxpbmVHcmFwaEdvYWxzQWdhaW5zdFtsaW5lR3JhcGhHb2Fsc0FnYWluc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzID0gbGluZUdyYXBoQ29ybmVyc1tsaW5lR3JhcGhDb3JuZXJzLmxlbmd0aCAtIDFdWzFdO1xuICAgICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNDb21taXRlZCA9IGxpbmVHcmFwaEZvdWxzQ29tbWl0ZWRbbGluZUdyYXBoRm91bHNDb21taXRlZC5sZW5ndGggLSAxXVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQWdhaW5zdCA9IGxpbmVHcmFwaEZvdWxzQWdhaW5zdFtsaW5lR3JhcGhGb3Vsc0FnYWluc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkcyA9IGxpbmVHcmFwaFllbGxvd0NhcmRzW2xpbmVHcmFwaFllbGxvd0NhcmRzLmxlbmd0aCAtIDFdWzFdO1xuICAgICAgICAgICAgICAgIGxldCBwcmV2UmVkQ2FyZHMgPSBsaW5lR3JhcGhSZWRDYXJkc1tsaW5lR3JhcGhSZWRDYXJkcy5sZW5ndGggLSAxXVsxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25kaXRpb25hbCBmb3IgcG9wdWxhdGluZyBkYXRhIG9iamVjdHMgd2l0aCByZWxldmFudCB0ZWFtIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAoIG1hdGNoW1wiSG9tZVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dICs9IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhQb2ludHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlBvaW50cyArIDNdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dICs9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhQb2ludHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlBvaW50cyArIDFdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaFBvaW50cy5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UG9pbnRzXSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgLy8gTGluZSBncmFwaCBkYXRhIGFycmF5IGlucHV0IGZvciBob21lIGdhbWVzXG4gICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaFNob3RzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90cyArIHBhcnNlSW50KG1hdGNoW1wiSFNcIl0pXSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaFNob3RzT25UYXJnZXQucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzT25UYXJnZXQgKyBwYXJzZUludChtYXRjaFtcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZUdyYXBoRmlyc3RIYWxmR29hbHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNlY29uZEhhbGZHb2FscyArIChwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKSldKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZUdyYXBoR29hbHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhHb2Fsc0FnYWluc3QucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZUdyYXBoQ29ybmVycy5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Q29ybmVycyArIHBhcnNlSW50KG1hdGNoW1wiSENcIl0pXSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaEZvdWxzQ29tbWl0ZWQucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhGb3Vsc0FnYWluc3QucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaFllbGxvd0NhcmRzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZZZWxsb3dDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiSFlcIl0pXSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVHcmFwaFJlZENhcmRzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZSZWRDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiSFlcIl0pXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmFyIEdyYXBoIGRhdGEgYXJyYXkgaW5wdXQgZm9yIGhvbWUgZ2FtZXNcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Qb2ludHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIU1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNPblRhcmdldFwiXVt0ZWFtXSArPSBwYXJzZUludChtYXRjaFtcIkhTVFwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRmlyc3RIYWxmR29hbHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV0gKz0gKHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXSArPSBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pO1xuICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzQWdhaW5zdFwiXVt0ZWFtXSArPSBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNDb21taXRlZFwiXVt0ZWFtXSArPSBwYXJzZUludChtYXRjaFtcIkhGXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Gb3Vsc0FnYWluc3RcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUmVkQ2FyZHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIUlwiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZWFtID09PSBtYXRjaFtcIkF3YXlUZWFtXCJdKXtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvblBvaW50c1wiXVt0ZWFtXSArPSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUdyYXBoUG9pbnRzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZQb2ludHMgKyAzXSkgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dICs9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lR3JhcGhQb2ludHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlBvaW50cyArIDFdKSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUdyYXBoUG9pbnRzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZQb2ludHNdKSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIExpbmUgZ3JhcGggZGF0YSBhcnJheSBpbnB1dCBmb3IgYXdheSBnYW1lc1xuICAgICAgICAgICAgICAgIGxpbmVHcmFwaFNob3RzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90cyArIHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoU2hvdHNPblRhcmdldC5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHNPblRhcmdldCArIHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIGxpbmVHcmFwaEZpcnN0SGFsZkdvYWxzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGaXJzdEhhbGZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNlY29uZEhhbGZHb2FscyArIChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICBsaW5lR3JhcGhHb2Fscy5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHMgKyBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoR29hbHNBZ2FpbnN0LnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2Fsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoQ29ybmVycy5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Q29ybmVycyArIHBhcnNlSW50KG1hdGNoW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoRm91bHNDb21taXRlZC5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNDb21taXRlZCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoRm91bHNBZ2FpbnN0LnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIGxpbmVHcmFwaFllbGxvd0NhcmRzLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZZZWxsb3dDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgbGluZUdyYXBoUmVkQ2FyZHMucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlJlZENhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBWVwiXSldKTtcblxuICAgICAgICAgICAgICAgIC8vIEJhciBHcmFwaCBkYXRhIGFycmF5IGlucHV0IGZvciBhd2F5IGdhbWVzXG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Qb2ludHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBU1wiXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TaG90c09uVGFyZ2V0XCJdW3RlYW1dICs9IHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKTtcbiAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dICs9IHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV0gKz0gKHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzXCJdW3RlYW1dICs9IHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc0FnYWluc3RcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBQ1wiXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Gb3Vsc0NvbW1pdGVkXCJdW3RlYW1dICs9IHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dICs9IHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBWVwiXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXSArPSBwYXJzZUludChtYXRjaFtcIkFSXCJdKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIFxufVxuXG5jb25zb2xlLmxvZyhuaW5lVGVuU3RhdHNbXCJsaW5lR3JhcGhTdGF0c1wiXSk7XG5jb25zb2xlLmxvZyh0ZW5FbGV2ZW5TdGF0c1tcImJhckdyYXBoU3RhdHNcIl0pO1xuY29uc29sZS5sb2coQUxMX1RFQU1TKTtcblxuZDMuY3N2KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLzIwMTgtMjAxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlYW1zLmluY2x1ZGVzKGRhdGFbaV1bXCJIb21lVGVhbVwiXSkpIHtcbiAgICAgICAgICAgIHRlYW1zLnB1c2goZGF0YVtpXVtcIkhvbWVUZWFtXCJdKVxuICAgICAgICB9IGVsc2UgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiQXdheVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJBd2F5VGVhbVwiXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBuZXN0ZWQgbG9vcCBmb3IgZXh0cmFjdGluZyB0ZWFtIHBvaW50cyBmcm9tIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNob3RzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uR29hbHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZvdWxzQWdhaW5zdFt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblllbGxvd0NhcmRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uUmVkQ2FyZHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IGRhdGFbal07XG4gICAgICAgICAgICBsZXQgcHJldlBvaW50cyA9IHNlYXNvblBvaW50c1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2TWF0Y2hkYXkgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICBsZXQgcHJldlNob3RzID0gc2Vhc29uU2hvdHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQgPSBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGaXJzdEhhbGZHb2FscyA9IHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZTZWNvbmRIYWxmR29hbHMgPSBzZWFzb25TZWNvbmRIYWxmR29hbHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkdvYWxzID0gc2Vhc29uR29hbHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkdvYWxzQWdhaW5zdCA9IHNlYXNvbkdvYWxzQWdhaW5zdFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Q29ybmVycyA9IHNlYXNvbkNvcm5lcnNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQgPSBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0FnYWluc3QgPSBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlllbGxvd0NhcmRzID0gc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzID0gc2Vhc29uUmVkQ2FyZHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAvLyBzd2l0Y2ggc3RhdGVtZW50cyBmb3IgYnVpbGRpbmcgdGVhbSBwb2ludHMgYXJyYXlcbiAgICAgICAgICAgIGlmIChtYXRjaFtcIkhvbWVUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmaWxsaW5nIHVwIHRoZSBpbmRpdmlkdWFsIHN0YXRzIG9iamVjdHMvYXJyYXlcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHMgKyBwYXJzZUludChtYXRjaFtcIkhTXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNob3RzT25UYXJnZXRbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzT25UYXJnZXQgKyBwYXJzZUludChtYXRjaFtcIkhTVFwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rmlyc3RIYWxmR29hbHMgKyBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTZWNvbmRIYWxmR29hbHMgKyAocGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKSAtIHBhcnNlSW50KG1hdGNoW1wiSFRIR1wiXSkpXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzQWdhaW5zdFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHNBZ2FpbnN0ICsgcGFyc2VJbnQobWF0Y2hbXCJGVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkNvcm5lcnNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkNvcm5lcnMgKyBwYXJzZUludChtYXRjaFtcIkhDXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZvdWxzQ29tbWl0ZWRbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQ29tbWl0ZWQgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZvdWxzQWdhaW5zdFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNBZ2FpbnN0ICsgcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25ZZWxsb3dDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2WWVsbG93Q2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkhZXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblJlZENhcmRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZSZWRDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiSFJcIl0pXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoW1wiQXdheVRlYW1cIl0gPT09IHRlYW0pe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzICsgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50c10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAsIHByZXZQb2ludHMgKyAxXSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzICsgcGFyc2VJbnQobWF0Y2hbXCJBU1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90c09uVGFyZ2V0ICsgcGFyc2VJbnQobWF0Y2hbXCJBU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRmlyc3RIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzICsgKHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZDb3JuZXJzICsgcGFyc2VJbnQobWF0Y2hbXCJBQ1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkICsgcGFyc2VJbnQobWF0Y2hbXCJBRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlllbGxvd0NhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBWVwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25SZWRDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UmVkQ2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkFSXCJdKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuLy8gIExpbmUgR3JhcGhcbnZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDcwLCBsZWZ0OiA1MH0sXG53aWR0aCA9IDY2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcInN2Z1wiKVxuLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4uYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuXG5cbiAgLy8gWCBhbmQgWSBBeGlzXG5cbiAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNTApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKVxuICBzdmcuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJjeFwiLCAxMDApLmF0dHIoXCJjeVwiLCA3MCkuYXR0cihcInJcIiwgNCkuc3R5bGUoXCJmaWxsXCIsIFwieWVsbG93XCIpXG4gIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNTApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJMaXZlcnBvb2wgMjAxOC0xOVwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsXCJtaWRkbGVcIilcbiAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgMTIwKS5hdHRyKFwieVwiLCA3MCkuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIikudGV4dChcIlNvdXRoYW1wdG9uIDIwMTgtMTlcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG5cblxuLy8gIENyZWF0ZSBhIGRyb3Bkb3duIGJ1dHRvbiB0byBzZWxlY3QgZGF0YSBvdXRwdXRcbmNvbnN0IGRyb3BEb3duQnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzZWxlY3RcIilcblxuLy8gQ3JlYXRlIG9wdGlvbnMgZm9yIERyb3Bkb3duXG5kcm9wRG93bkJ1dHRvbi5zZWxlY3RBbGwoJ2RhdGFPcHRpb25zJylcbi5kYXRhKFNUQVRTKVxuLmVudGVyKClcbi5hcHBlbmQoJ29wdGlvbicpXG4udGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGR9KVxuLmF0dHIoXCJ2YWx1ZVwiLCBkID0+IHtyZXR1cm4gZH0pO1xuXG5cbiBcbiAgICAvLyBZLWF4aXMgbGFiZWxcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInlcIiwgMCAtIG1hcmdpbi5sZWZ0IC0gNSlcbiAgICAuYXR0cihcInhcIiwgMCAtIChoZWlnaHQvMikpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjFlbVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInlheGlzLXRleHRcIilcbiAgICAudGV4dChcIlBvaW50c1wiKVxuICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIFwiMjJweFwiKVxuICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbiAgICAgIC8vIFgtYXhpcyBsYWJlbFxuICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlIChcIiArICh3aWR0aC8yKSArIFwiICxcIiArIChoZWlnaHQgKyBtYXJnaW4udG9wICsgMjUpICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIk1hdGNoZGF5XCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG5cbmxldCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKTtcbmxldCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oKS5zY2FsZSh4KTtcblxuc3ZnLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi5hdHRyKFwiY2xhc3NcIiwgXCJYQXhpc1wiKVxuLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pO1xubGV0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5KTtcbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcImNsYXNzXCIsIFwiWUF4aXNcIilcbi5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuY29uc3QgdXBkYXRlID0gKGRhdGEsIHRpdGxlKSA9PiB7XG5cbiBcblxuICAgIHguZG9tYWluKFswLCBkMy5tYXgoc2Vhc29uTGVuZ3RoKV0pO1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIuWEF4aXNcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgbGV0IHRlYW1PbmVNYXggPSBkYXRhW1wiTGl2ZXJwb29sXCJdWzM4XVsxXTtcbiAgICBsZXQgdGVhbVR3b01heCA9IGRhdGFbXCJTb3V0aGFtcHRvblwiXVszOF1bMV07XG5cbiAgICB0ZWFtT25lTWF4ID49IHRlYW1Ud29NYXggPyB5LmRvbWFpbihbMCwgdGVhbU9uZU1heF0pIDogeS5kb21haW4oWzAsIHRlYW1Ud29NYXhdKTsgXG4gICAgXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5ZQXhpc1wiKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuY2FsbCh5QXhpcylcbiAgICBcbiAgICBzdmcuc2VsZWN0KFwiLnlheGlzLXRleHRcIikudGV4dCh0aXRsZSlcblxuICAgIFxuXG5cbiAgICBsZXQgbGluZTEgPSBzdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpXG4gICAgbGV0IGxpbmUyID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKVxuICAgIFxuICAgIGlmIChsaW5lMSkge3N2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikucmVtb3ZlKCl9XG4gICAgaWYgKGxpbmUyKSB7c3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5yZW1vdmUoKX1cblxuICAgIGxpbmUxID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW1wiTGl2ZXJwb29sXCJdKVxuICAgIGxpbmUyID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMlwiKS5kYXRhKFtkYXRhXSwgZCA9PiBkW1wiU291dGhhbXB0b25cIl0pXG5cbiAgICBsaW5lMVxuICAgIC5lbnRlcigpXG4gICAgLmRhdHVtKGRhdGFbXCJMaXZlcnBvb2xcIl0pXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTFcIilcbiAgICAubWVyZ2UobGluZTEpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTt9KSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cbiAgICBsaW5lMi5lbnRlcigpXG4gICAgLmRhdHVtKGRhdGFbXCJTb3V0aGFtcHRvblwiXSlcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lMlwiKVxuICAgIC5tZXJnZShsaW5lMilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgIC54KGQgPT4ge3JldHVybiB4KGRbMF0pOyB9KVxuICAgIC55KGQgPT4ge3JldHVybiB5KGRbMV0pO30pKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcInllbGxvd1wiKVxuICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIuNSlcblxuICBcbiAgICAvLyBsZXQgbGluZTFMZW5ndGggPSBkMy5zZWxlY3RBbGwoXCIubGluZTFcIikubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgLy8gbGV0IGxpbmUyTGVuZ3RoID0gZDMuc2VsZWN0QWxsKFwiLmxpbmUyXCIpLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgLy8gZDMuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIGxpbmUxTGVuZ3RoICsgXCIgXCIgKyBsaW5lMUxlbmd0aClcbiAgICAvLyAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIGxpbmUxTGVuZ3RoKVxuICAgIC8vIC50cmFuc2l0aW9uKClcbiAgICAvLyAuZHVyYXRpb24oMjAwMClcbiAgICAvLyAuZGVsYXkoMjAwKVxuICAgIC8vIC5lYXNlKGQzLmVhc2VTaW4pXG4gICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKVxuXG4gICAgXG4gICAgXG4gICAgXG4gICBcblxufVxuXG51cGRhdGUoc2Vhc29uUG9pbnRzLCBcIlBvaW50c1wiKTtcblxuXG5cbmRyb3BEb3duQnV0dG9uLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgIHN3aXRjaCAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgY2FzZSBcIlBvaW50c1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblBvaW50cywgc2VsZWN0ZWRPcHRpb24pOyAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2hvdHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TaG90cywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTaG90cyBvbiBUYXJnZXRcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TaG90c09uVGFyZ2V0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZpcnN0IEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25GaXJzdEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTZWNvbmQgSGFsZiBHb2Fsc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblNlY29uZEhhbGZHb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJUb3RhbCBHb2Fsc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkdvYWxzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdvYWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Hb2Fsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ29ybmVyc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvbkNvcm5lcnMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRm91bHMgQ29tbWl0ZWRcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Gb3Vsc0NvbW1pdGVkLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZvdWxzIEFnYWluc3RcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Gb3Vsc0FnYWluc3QsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiWWVsbG93IENhcmRzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uWWVsbG93Q2FyZHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUmVkIENhcmRzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uUmVkQ2FyZHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSlcbiAgXG5cbiAgICBcbn0pO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9