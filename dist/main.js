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
      var barGraphPoints = seasonData["barGraphStats"]["seasonPoints"][team];
      seasonData["barGraphStats"]["seasonShots"][team] = 0;
      var barGraphShots = seasonData["barGraphStats"]["seasonShots"][team];
      seasonData["barGraphStats"]["seasonShotsOnTarget"][team] = 0;
      var barGraphShotsOnTarget = seasonData["barGraphStats"]["seasonShotsOnTarget"][team];
      seasonData["barGraphStats"]["seasonFirstHalfGoals"][team] = 0;
      var barGraphFirstHalfGoals = seasonData["barGraphStats"]["seasonFirstHalfGoals"][team];
      seasonData["barGraphStats"]["seasonSecondHalfGoals"][team] = 0;
      var barGraphSecondHalfGoals = seasonData["barGraphStats"]["seasonSecondHalfGoals"][team];
      seasonData["barGraphStats"]["seasonGoals"][team] = 0;
      var barGraphGoals = seasonData["barGraphStats"]["seasonGoals"][team];
      seasonData["barGraphStats"]["seasonGoalsAgainst"][team] = 0;
      var barGraphGoalsAgainst = seasonData["barGraphStats"]["seasonGoalsAgainst"][team];
      seasonData["barGraphStats"]["seasonCorners"][team] = 0;
      var barGraphCorners = seasonData["barGraphStats"]["seasonCorners"][team];
      seasonData["barGraphStats"]["seasonFoulsCommited"][team] = 0;
      var barGraphFoulsCommited = seasonData["barGraphStats"]["seasonFoulsCommited"][team];
      seasonData["barGraphStats"]["seasonFoulsAgainst"][team] = 0;
      var barGraphFoulsAgainst = seasonData["barGraphStats"]["seasonFoulsAgainst"][team];
      seasonData["barGraphStats"]["seasonYellowCards"][team] = 0;
      var barGraphYellowCards = seasonData["barGraphStats"]["seasonYellowCards"][team];
      seasonData["barGraphStats"]["seasonRedCards"][team] = 0;
      var barGraphRedCards = seasonData["barGraphStats"]["seasonRedCards"][team]; // loop to populate data objects

      for (var j = 0; j < data.length; j++) {
        // single matchday data
        var match = data[j]; // line graph helper variables

        var prevMatchday = lineGraphPoints[lineGraphPoints.length - 1][0];
        var prevPoints = lineGraphPoints[lineGraphPoints.length - 1][1];
        var prevShots = lineGraphShots[lineGraphPoints.length - 1][1];
        var prevShotsOnTarget = lineGraphShotsOnTarget[lineGraphPoints.length - 1][1];
        var prevFirstHalfGoals = lineGraphFirstHalfGoals[lineGraphPoints.length - 1][1];
        var prevSecondHalfGoals = lineGraphSecondHalfGoals[lineGraphPoints.length - 1][1];
        var prevGoals = lineGraphGoals[lineGraphPoints.length - 1][1];
        var prevGoalsAgainst = lineGraphGoalsAgainst[lineGraphPoints.length - 1][1];
        var prevCorners = lineGraphCorners[lineGraphPoints.length - 1][1];
        var prevFoulsCommited = lineGraphFoulsCommited[lineGraphPoints.length - 1][1];
        var prevFoulsAgainst = lineGraphFoulsAgainst[lineGraphPoints.length - 1][1];
        var prevYellowCards = lineGraphYellowCards[lineGraphPoints.length - 1][1];
        var prevRedCards = lineGraphRedCards[lineGraphPoints.length - 1][1];
      }
    }
  });
};

for (var _i = 0; _i < seasonArray.length; _i++) {
  _loop(_i);
}

console.log(fourteenFifteenStats["barGraphStats"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJuaW5lVGVuU3RhdHMiLCJ0ZWFtcyIsImJhckdyYXBoU3RhdHMiLCJzZWFzb25Qb2ludHMiLCJzZWFzb25TaG90cyIsInNlYXNvblNob3RzT25UYXJnZXQiLCJzZWFzb25GaXJzdEhhbGZHb2FscyIsInNlYXNvblNlY29uZEhhbGZHb2FscyIsInNlYXNvbkdvYWxzIiwic2Vhc29uR29hbHNBZ2FpbnN0Iiwic2Vhc29uQ29ybmVycyIsInNlYXNvbkZvdWxzQ29tbWl0ZWQiLCJzZWFzb25Gb3Vsc0FnYWluc3QiLCJzZWFzb25ZZWxsb3dDYXJkcyIsInNlYXNvblJlZENhcmRzIiwibGluZUdyYXBoU3RhdHMiLCJ0ZW5FbGV2ZW5TdGF0cyIsImVsZXZlblR3ZWx2ZVN0YXRzIiwidHdlbHZlVGhpcnRlZW5TdGF0cyIsInRoaXJ0ZWVuRm91cnRlZW5TdGF0cyIsImZvdXJ0ZWVuRmlmdGVlblN0YXRzIiwiZmlmdGVlblNpeHRlZW5TdGF0cyIsInNpeHRlZW5TZXZlbnRlZW5TdGF0cyIsInNldmVudGVlbkVpZ2h0ZWVuU3RhdHMiLCJlaWdodGVlbk5pbmV0ZWVuU3RhdHMiLCJBTExfVEVBTVMiLCJTVEFUUyIsInNlYXNvbkxlbmd0aCIsImkiLCJwdXNoIiwic2Vhc29uQXJyYXkiLCJzZWFzb24iLCJzZWFzb25EYXRhIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsImxlbmd0aCIsIm1hdGNoZGF5IiwiaW5jbHVkZXMiLCJ0ZWFtIiwibGluZUdyYXBoUG9pbnRzIiwibGluZUdyYXBoU2hvdHMiLCJsaW5lR3JhcGhTaG90c09uVGFyZ2V0IiwibGluZUdyYXBoRmlyc3RIYWxmR29hbHMiLCJsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMiLCJsaW5lR3JhcGhHb2FscyIsImxpbmVHcmFwaEdvYWxzQWdhaW5zdCIsImxpbmVHcmFwaENvcm5lcnMiLCJsaW5lR3JhcGhGb3Vsc0NvbW1pdGVkIiwibGluZUdyYXBoRm91bHNBZ2FpbnN0IiwibGluZUdyYXBoWWVsbG93Q2FyZHMiLCJsaW5lR3JhcGhSZWRDYXJkcyIsImJhckdyYXBoUG9pbnRzIiwiYmFyR3JhcGhTaG90cyIsImJhckdyYXBoU2hvdHNPblRhcmdldCIsImJhckdyYXBoRmlyc3RIYWxmR29hbHMiLCJiYXJHcmFwaFNlY29uZEhhbGZHb2FscyIsImJhckdyYXBoR29hbHMiLCJiYXJHcmFwaEdvYWxzQWdhaW5zdCIsImJhckdyYXBoQ29ybmVycyIsImJhckdyYXBoRm91bHNDb21taXRlZCIsImJhckdyYXBoRm91bHNBZ2FpbnN0IiwiYmFyR3JhcGhZZWxsb3dDYXJkcyIsImJhckdyYXBoUmVkQ2FyZHMiLCJqIiwibWF0Y2giLCJwcmV2TWF0Y2hkYXkiLCJwcmV2UG9pbnRzIiwicHJldlNob3RzIiwicHJldlNob3RzT25UYXJnZXQiLCJwcmV2Rmlyc3RIYWxmR29hbHMiLCJwcmV2U2Vjb25kSGFsZkdvYWxzIiwicHJldkdvYWxzIiwicHJldkdvYWxzQWdhaW5zdCIsInByZXZDb3JuZXJzIiwicHJldkZvdWxzQ29tbWl0ZWQiLCJwcmV2Rm91bHNBZ2FpbnN0IiwicHJldlllbGxvd0NhcmRzIiwicHJldlJlZENhcmRzIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJ0ZXh0IiwiZHJvcERvd25CdXR0b24iLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJ4Iiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInNjYWxlIiwieSIsInlBeGlzIiwiYXhpc0xlZnQiLCJ1cGRhdGUiLCJ0aXRsZSIsImRvbWFpbiIsIm1heCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJ0ZWFtT25lTWF4IiwidGVhbVR3b01heCIsImxpbmUxIiwibGluZTIiLCJyZW1vdmUiLCJkYXR1bSIsIm1lcmdlIiwibGluZSIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0NBSUE7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQUNDLE9BQUssRUFBRSxFQUFSO0FBQVlDLGVBQWEsRUFBRTtBQUFDQyxnQkFBWSxFQUFFLEVBQWY7QUFDaERDLGVBQVcsRUFBRSxFQURtQztBQUVoREMsdUJBQW1CLEVBQUUsRUFGMkI7QUFHaERDLHdCQUFvQixFQUFFLEVBSDBCO0FBSWhEQyx5QkFBcUIsRUFBRSxFQUp5QjtBQUtoREMsZUFBVyxFQUFFLEVBTG1DO0FBTWhEQyxzQkFBa0IsRUFBRSxFQU40QjtBQU9oREMsaUJBQWEsRUFBRSxFQVBpQztB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QUQsRUFBc0J3SCxjQUF0QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxrQkFBTDtBQUNJaEIsY0FBTSxDQUFDdkcsb0JBQUQsRUFBdUJ1SCxjQUF2QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxtQkFBTDtBQUNJaEIsY0FBTSxDQUFDdEcscUJBQUQsRUFBd0JzSCxjQUF4QixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxhQUFMO0FBQ0loQixjQUFNLENBQUNyRyxXQUFELEVBQWNxSCxjQUFkLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQ3BHLGtCQUFELEVBQXFCb0gsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJaEIsY0FBTSxDQUFDbkcsYUFBRCxFQUFnQm1ILGNBQWhCLENBQU47QUFDQTs7QUFDSixXQUFLLGdCQUFMO0FBQ0loQixjQUFNLENBQUNsRyxtQkFBRCxFQUFzQmtILGNBQXRCLENBQU47QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSWhCLGNBQU0sQ0FBQ2pHLGtCQUFELEVBQXFCaUgsY0FBckIsQ0FBTjtBQUNBOztBQUNKLFdBQUssY0FBTDtBQUNJaEIsY0FBTSxDQUFDaEcsaUJBQUQsRUFBb0JnSCxjQUFwQixDQUFOO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0loQixjQUFNLENBQUMvRixjQUFELEVBQWlCK0csY0FBakIsQ0FBTjtBQUNBOztBQUNKO0FBQ0k7QUF0Q1I7QUF3Q0gsR0ExQ0Q7QUE4Q0MsQ0F2U0QsRTs7Ozs7Ozs7Ozs7O0FDellBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuXG4vLyBEYXRhIG9iamVjdHMsIGFzIHNvb24gYXMgcGFnZSBpcyBsb2FkZWQgdGhlc2Ugb2JqZWN0cyB3aWxsIGJlIHBvcHVsYXRlZFxuY29uc3QgbmluZVRlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHRlbkVsZXZlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGVsZXZlblR3ZWx2ZVN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHR3ZWx2ZVRoaXJ0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3QgdGhpcnRlZW5Gb3VydGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGZvdXJ0ZWVuRmlmdGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IGZpZnRlZW5TaXh0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3Qgc2l4dGVlblNldmVudGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IHNldmVudGVlbkVpZ2h0ZWVuU3RhdHMgPSB7dGVhbXM6IFtdLCBiYXJHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX0sIGxpbmVHcmFwaFN0YXRzOiB7c2Vhc29uUG9pbnRzOiB7fSxcbnNlYXNvblNob3RzOiB7fSxcbnNlYXNvblNob3RzT25UYXJnZXQ6IHt9LFxuc2Vhc29uRmlyc3RIYWxmR29hbHM6IHt9LFxuc2Vhc29uU2Vjb25kSGFsZkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzOiB7fSxcbnNlYXNvbkdvYWxzQWdhaW5zdDoge30sXG5zZWFzb25Db3JuZXJzOiB7fSxcbnNlYXNvbkZvdWxzQ29tbWl0ZWQ6IHt9LFxuc2Vhc29uRm91bHNBZ2FpbnN0OiB7fSxcbnNlYXNvblllbGxvd0NhcmRzOiB7fSxcbnNlYXNvblJlZENhcmRzOiB7fX19O1xuY29uc3QgZWlnaHRlZW5OaW5ldGVlblN0YXRzID0ge3RlYW1zOiBbXSwgYmFyR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319LCBsaW5lR3JhcGhTdGF0czoge3NlYXNvblBvaW50czoge30sXG5zZWFzb25TaG90czoge30sXG5zZWFzb25TaG90c09uVGFyZ2V0OiB7fSxcbnNlYXNvbkZpcnN0SGFsZkdvYWxzOiB7fSxcbnNlYXNvblNlY29uZEhhbGZHb2Fsczoge30sXG5zZWFzb25Hb2Fsczoge30sXG5zZWFzb25Hb2Fsc0FnYWluc3Q6IHt9LFxuc2Vhc29uQ29ybmVyczoge30sXG5zZWFzb25Gb3Vsc0NvbW1pdGVkOiB7fSxcbnNlYXNvbkZvdWxzQWdhaW5zdDoge30sXG5zZWFzb25ZZWxsb3dDYXJkczoge30sXG5zZWFzb25SZWRDYXJkczoge319fTtcbmNvbnN0IEFMTF9URUFNUyA9IFtdO1xuXG4vLyBTdGF0aXN0aWNzIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBkcm9wZG93biBidXR0b24gc2VsZWN0aW9uIGFuZCBwb3B1bGF0aW5nIHRoZSBkYXRhIG9iamVjdHMgYWJvdmVcbmNvbnN0IFNUQVRTID0gW1xuICAgIFwiUG9pbnRzXCIsXG4gICAgXCJTaG90c1wiLCBcbiAgICBcIlNob3RzIG9uIFRhcmdldFwiLFxuICAgIFwiRmlyc3QgSGFsZiBHb2Fsc1wiLCBcbiAgICBcIlNlY29uZCBIYWxmIEdvYWxzXCIsIFxuICAgIFwiVG90YWwgR29hbHNcIiwgXG4gICAgXCJHb2FscyBBZ2FpbnN0XCIsIFxuICAgIFwiQ29ybmVyc1wiLCBcbiAgICBcIkZvdWxzIENvbW1pdGVkXCIsIFxuICAgIFwiRm91bHMgQWdhaW5zdFwiLCBcbiAgICBcIlllbGxvdyBDYXJkc1wiLCBcbiAgICBcIlJlZCBDYXJkc1wiXG5dO1xuXG5cbi8vIGxvb3AgdG8gY3JlYXRlIHNlYXNvbiBsZW5ndGggbnVtYmVycyBhcnJheSB0byBsb29wIHRocm91Z2ggaW4gdGhlIGZ1dHVyZVxuY29uc3Qgc2Vhc29uTGVuZ3RoID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDM5OyBpKyspIHtcbiAgICBzZWFzb25MZW5ndGgucHVzaChpKTsgICAgXG59XG5cbmxldCB0ZWFtcyA9IFtdO1xubGV0IHNlYXNvblBvaW50cyA9IHt9O1xubGV0IHNlYXNvblNob3RzID0ge307XG5sZXQgc2Vhc29uU2hvdHNPblRhcmdldCA9IHt9O1xubGV0IHNlYXNvbkZpcnN0SGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uU2Vjb25kSGFsZkdvYWxzID0ge307XG5sZXQgc2Vhc29uR29hbHMgPSB7fTtcbmxldCBzZWFzb25Hb2Fsc0FnYWluc3QgPSB7fTtcbmxldCBzZWFzb25Db3JuZXJzID0ge307XG5sZXQgc2Vhc29uRm91bHNDb21taXRlZCA9IHt9O1xubGV0IHNlYXNvbkZvdWxzQWdhaW5zdCA9IHt9O1xubGV0IHNlYXNvblllbGxvd0NhcmRzID0ge307XG5sZXQgc2Vhc29uUmVkQ2FyZHMgPSB7fTtcblxuXG4vLyBBcnJheSBmb3IgbG9vcGluZyB0aHJvdWdoIGRhdGEgdG8gcG9wdWxhdGUgb2JqZWN0c1xuY29uc3Qgc2Vhc29uQXJyYXkgPSBbXG5bXCIyMDA5LTIwMTBcIiwgbmluZVRlblN0YXRzXSwgXG5bXCIyMDEwLTIwMTFcIiwgdGVuRWxldmVuU3RhdHNdLCBcbltcIjIwMTEtMjAxMlwiLCBlbGV2ZW5Ud2VsdmVTdGF0c10sIFxuW1wiMjAxMi0yMDEzXCIsIHR3ZWx2ZVRoaXJ0ZWVuU3RhdHNdLCBcbltcIjIwMTMtMjAxNFwiLCB0aGlydGVlbkZvdXJ0ZWVuU3RhdHNdLCBcbltcIjIwMTQtMjAxNVwiLCBmb3VydGVlbkZpZnRlZW5TdGF0c10sIFxuW1wiMjAxNS0yMDE2XCIsIGZpZnRlZW5TaXh0ZWVuU3RhdHNdLCBcbltcIjIwMTYtMjAxN1wiLCBzaXh0ZWVuU2V2ZW50ZWVuU3RhdHNdLCBcbltcIjIwMTctMjAxOFwiLCBzZXZlbnRlZW5FaWdodGVlblN0YXRzXSwgXG5bXCIyMDE4LTIwMTlcIiwgZWlnaHRlZW5OaW5ldGVlblN0YXRzXVxuXVxuXG5cbi8vIExvb3AgdG8gcG9wdWxhdGUgZGF0YSBvYmplY3RzXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlYXNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2Vhc29uID0gc2Vhc29uQXJyYXlbaV1bMF07XG4gICAgY29uc3Qgc2Vhc29uRGF0YSA9IHNlYXNvbkFycmF5W2ldWzFdO1xuICAgIGQzLmNzdihgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2F3ZWlsMTMvRVBMVGVhbUNvbXBhcmlzb24vbWFpbi9kYXRhLyR7c2Vhc29ufS5jc3ZgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCB0byBwb3B1bGF0ZSBBTExfVEVBTVMgYXJyYXkgZm9yIGV2ZW50dWFsIHNlYXJjaCBiYXIgYW5kIGZvciB0aGUgdGVhbXMgYXJyYXkgZm9yIGVhY2ggc2Vhc29uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hkYXkgPSBkYXRhW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWFzb25EYXRhW1widGVhbXNcIl0uaW5jbHVkZXMobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSkpe1xuICAgICAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJ0ZWFtc1wiXS5wdXNoKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pO1xuICAgICAgICAgICAgICAgIGlmICghQUxMX1RFQU1TLmluY2x1ZGVzKG1hdGNoZGF5W1wiSG9tZVRlYW1cIl0pKSB7QUxMX1RFQU1TLnB1c2gobWF0Y2hkYXlbXCJIb21lVGVhbVwiXSl9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzZWFzb25EYXRhW1widGVhbXNcIl0uaW5jbHVkZXMobWF0Y2hkYXlbXCJBd2F5VGVhbVwiXSkpIHtcbiAgICAgICAgICAgICAgICBzZWFzb25EYXRhW1widGVhbXNcIl0ucHVzaChtYXRjaGRheVtcIkF3YXlUZWFtXCJdKTtcbiAgICAgICAgICAgICAgICBpZiAoIUFMTF9URUFNUy5pbmNsdWRlcyhtYXRjaGRheVtcIkF3YXlUZWFtXCJdKSkge0FMTF9URUFNUy5wdXNoKG1hdGNoZGF5W1wiQXdheVRlYW1cIl0pfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmVzdGVkIGxvb3AgdG8gcG9wdWxhdGUgZGF0YSBvYmplY3RzIGZvciBldmVudHVhbCBncmFwaCBvdXRwdXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFzb25EYXRhW1widGVhbXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBzZWFzb25EYXRhW1widGVhbXNcIl1baV07XG4gICAgICAgICAgICAvLyBsaW5lIGdyYXBoIGRhdGFcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvblBvaW50c1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoUG9pbnRzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICAgICAgbGV0IGxpbmVHcmFwaFNob3RzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25TaG90c09uVGFyZ2V0XCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhTaG90c09uVGFyZ2V0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNPblRhcmdldFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhGaXJzdEhhbGZHb2FscyA9IHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2Vjb25kSGFsZkdvYWxzXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhTZWNvbmRIYWxmR29hbHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoR29hbHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzQWdhaW5zdFwiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoR29hbHNBZ2FpbnN0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uR29hbHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uQ29ybmVyc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoQ29ybmVycyA9IHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25Gb3Vsc0NvbW1pdGVkXCJdW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgICAgIGxldCBsaW5lR3JhcGhGb3Vsc0NvbW1pdGVkID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNDb21taXRlZFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJsaW5lR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZvdWxzQWdhaW5zdFwiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoRm91bHNBZ2FpbnN0ID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICAgICAgbGV0IGxpbmVHcmFwaFllbGxvd0NhcmRzID0gc2Vhc29uRGF0YVtcImxpbmVHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgICAgICBsZXQgbGluZUdyYXBoUmVkQ2FyZHMgPSBzZWFzb25EYXRhW1wibGluZUdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXTtcblxuICAgICAgICAgICAgLy8gYmFyIGdyYXBoIGRhdGFcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaFBvaW50cyA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uUG9pbnRzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TaG90c1wiXVt0ZWFtXSA9IDA7XG4gICAgICAgICAgICBsZXQgYmFyR3JhcGhTaG90cyA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvblNob3RzT25UYXJnZXRcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgbGV0IGJhckdyYXBoU2hvdHNPblRhcmdldCA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uU2hvdHNPblRhcmdldFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRmlyc3RIYWxmR29hbHNcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgbGV0IGJhckdyYXBoRmlyc3RIYWxmR29hbHMgPSBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZpcnN0SGFsZkdvYWxzXCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgbGV0IGJhckdyYXBoU2Vjb25kSGFsZkdvYWxzID0gc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25TZWNvbmRIYWxmR29hbHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkdvYWxzXCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaEdvYWxzID0gc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Hb2Fsc1wiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uR29hbHNBZ2FpbnN0XCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaEdvYWxzQWdhaW5zdCA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uR29hbHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25Db3JuZXJzXCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaENvcm5lcnMgPSBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkNvcm5lcnNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvbkZvdWxzQ29tbWl0ZWRcIl1bdGVhbV0gPSAwO1xuICAgICAgICAgICAgbGV0IGJhckdyYXBoRm91bHNDb21taXRlZCA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNDb21taXRlZFwiXVt0ZWFtXTtcbiAgICAgICAgICAgIHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaEZvdWxzQWdhaW5zdCA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uRm91bHNBZ2FpbnN0XCJdW3RlYW1dO1xuICAgICAgICAgICAgc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25ZZWxsb3dDYXJkc1wiXVt0ZWFtXSA9IDA7XG4gICAgICAgICAgICBsZXQgYmFyR3JhcGhZZWxsb3dDYXJkcyA9IHNlYXNvbkRhdGFbXCJiYXJHcmFwaFN0YXRzXCJdW1wic2Vhc29uWWVsbG93Q2FyZHNcIl1bdGVhbV07XG4gICAgICAgICAgICBzZWFzb25EYXRhW1wiYmFyR3JhcGhTdGF0c1wiXVtcInNlYXNvblJlZENhcmRzXCJdW3RlYW1dID0gMDtcbiAgICAgICAgICAgIGxldCBiYXJHcmFwaFJlZENhcmRzID0gc2Vhc29uRGF0YVtcImJhckdyYXBoU3RhdHNcIl1bXCJzZWFzb25SZWRDYXJkc1wiXVt0ZWFtXTtcblxuICAgICAgICAgICAgLy8gbG9vcCB0byBwb3B1bGF0ZSBkYXRhIG9iamVjdHNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBtYXRjaGRheSBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZGF0YVtqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBsaW5lIGdyYXBoIGhlbHBlciB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5ID0gbGluZUdyYXBoUG9pbnRzW2xpbmVHcmFwaFBvaW50cy5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgICAgIGxldCBwcmV2UG9pbnRzID0gbGluZUdyYXBoUG9pbnRzW2xpbmVHcmFwaFBvaW50cy5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICAgIGxldCBwcmV2U2hvdHMgPSBsaW5lR3JhcGhTaG90c1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgICBsZXQgcHJldlNob3RzT25UYXJnZXQgPSBsaW5lR3JhcGhTaG90c09uVGFyZ2V0W2xpbmVHcmFwaFBvaW50cy5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMgPSBsaW5lR3JhcGhGaXJzdEhhbGZHb2Fsc1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgICBsZXQgcHJldlNlY29uZEhhbGZHb2FscyA9IGxpbmVHcmFwaFNlY29uZEhhbGZHb2Fsc1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgICBsZXQgcHJldkdvYWxzID0gbGluZUdyYXBoR29hbHNbbGluZUdyYXBoUG9pbnRzLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QgPSBsaW5lR3JhcGhHb2Fsc0FnYWluc3RbbGluZUdyYXBoUG9pbnRzLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICAgICAgbGV0IHByZXZDb3JuZXJzID0gbGluZUdyYXBoQ29ybmVyc1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgICBsZXQgcHJldkZvdWxzQ29tbWl0ZWQgPSBsaW5lR3JhcGhGb3Vsc0NvbW1pdGVkW2xpbmVHcmFwaFBvaW50cy5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0ID0gbGluZUdyYXBoRm91bHNBZ2FpbnN0W2xpbmVHcmFwaFBvaW50cy5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgICAgIGxldCBwcmV2WWVsbG93Q2FyZHMgPSBsaW5lR3JhcGhZZWxsb3dDYXJkc1tsaW5lR3JhcGhQb2ludHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgICAgICBsZXQgcHJldlJlZENhcmRzID0gbGluZUdyYXBoUmVkQ2FyZHNbbGluZUdyYXBoUG9pbnRzLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgXG59XG5cbmNvbnNvbGUubG9nKGZvdXJ0ZWVuRmlmdGVlblN0YXRzW1wiYmFyR3JhcGhTdGF0c1wiXSlcbmNvbnNvbGUubG9nKEFMTF9URUFNUyk7XG5cbmQzLmNzdihcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hd2VpbDEzL0VQTFRlYW1Db21wYXJpc29uL21haW4vZGF0YS8yMDE4LTIwMTkuY3N2XCIpXG4udGhlbihkYXRhID0+IHtcbiAgICAvLyBsb29wIGZvciBleHRyYWN0aW5nIHRlYW1zIGZyb20gc2Vhc29uIGludG8gdGVhbXMgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbSBwb2ludHMgZnJvbSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVhbSA9IHRlYW1zW2ldO1xuICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25TaG90c1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNob3RzT25UYXJnZXRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvbkZvdWxzQ29tbWl0ZWRbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0gPSBbWzAsMF1dO1xuICAgICAgICBzZWFzb25ZZWxsb3dDYXJkc1t0ZWFtXSA9IFtbMCwwXV07XG4gICAgICAgIHNlYXNvblJlZENhcmRzW3RlYW1dID0gW1swLDBdXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgbGV0IHByZXZQb2ludHMgPSBzZWFzb25Qb2ludHNbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldk1hdGNoZGF5ID0gc2Vhc29uUG9pbnRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVswXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90cyA9IHNlYXNvblNob3RzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZTaG90c09uVGFyZ2V0ID0gc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rmlyc3RIYWxmR29hbHMgPSBzZWFzb25GaXJzdEhhbGZHb2Fsc1t0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2U2Vjb25kSGFsZkdvYWxzID0gc2Vhc29uU2Vjb25kSGFsZkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2FscyA9IHNlYXNvbkdvYWxzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZHb2Fsc0FnYWluc3QgPSBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV1bc2Vhc29uUG9pbnRzW3RlYW1dLmxlbmd0aCAtIDFdWzFdXG4gICAgICAgICAgICBsZXQgcHJldkNvcm5lcnMgPSBzZWFzb25Db3JuZXJzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZGb3Vsc0NvbW1pdGVkID0gc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXVtzZWFzb25Qb2ludHNbdGVhbV0ubGVuZ3RoIC0gMV1bMV1cbiAgICAgICAgICAgIGxldCBwcmV2Rm91bHNBZ2FpbnN0ID0gc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZZZWxsb3dDYXJkcyA9IHNlYXNvblllbGxvd0NhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgbGV0IHByZXZSZWRDYXJkcyA9IHNlYXNvblJlZENhcmRzW3RlYW1dW3NlYXNvblBvaW50c1t0ZWFtXS5sZW5ndGggLSAxXVsxXVxuICAgICAgICAgICAgLy8gc3dpdGNoIHN0YXRlbWVudHMgZm9yIGJ1aWxkaW5nIHRlYW0gcG9pbnRzIGFycmF5XG4gICAgICAgICAgICBpZiAobWF0Y2hbXCJIb21lVGVhbVwiXSA9PT0gdGVhbSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHMgKyAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICxwcmV2UG9pbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvblBvaW50c1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxICwgcHJldlBvaW50cyArIDFdKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmlsbGluZyB1cCB0aGUgaW5kaXZpZHVhbCBzdGF0cyBvYmplY3RzL2FycmF5XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNob3RzICsgcGFyc2VJbnQobWF0Y2hbXCJIU1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TaG90c09uVGFyZ2V0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90c09uVGFyZ2V0ICsgcGFyc2VJbnQobWF0Y2hbXCJIU1RcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRmlyc3RIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZpcnN0SGFsZkdvYWxzICsgcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblNlY29uZEhhbGZHb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2Vjb25kSGFsZkdvYWxzICsgKHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUSEdcIl0pKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiRlRIR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkdvYWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Db3JuZXJzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZDb3JuZXJzICsgcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0NvbW1pdGVkW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0NvbW1pdGVkICsgcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Gb3Vsc0FnYWluc3RbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldkZvdWxzQWdhaW5zdCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uWWVsbG93Q2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlllbGxvd0NhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25SZWRDYXJkc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2UmVkQ2FyZHMgKyBwYXJzZUludChtYXRjaFtcIkhSXCJdKV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtcIkF3YXlUZWFtXCJdID09PSB0ZWFtKXtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoW1wiRlRSXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25Qb2ludHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSAscHJldlBvaW50cyArIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLHByZXZQb2ludHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uUG9pbnRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEgLCBwcmV2UG9pbnRzICsgMV0pOyAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlYXNvblNob3RzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZTaG90cyArIHBhcnNlSW50KG1hdGNoW1wiQVNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uU2hvdHNPblRhcmdldFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2U2hvdHNPblRhcmdldCArIHBhcnNlSW50KG1hdGNoW1wiQVNUXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvbkZpcnN0SGFsZkdvYWxzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGaXJzdEhhbGZHb2FscyArIHBhcnNlSW50KG1hdGNoW1wiSFRBR1wiXSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25TZWNvbmRIYWxmR29hbHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlNlY29uZEhhbGZHb2FscyArIChwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEFHXCJdKSldKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Hb2Fsc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2R29hbHMgKyBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uR29hbHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZHb2Fsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uQ29ybmVyc1t0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Q29ybmVycyArIHBhcnNlSW50KG1hdGNoW1wiQUNcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNDb21taXRlZFt0ZWFtXS5wdXNoKFtwcmV2TWF0Y2hkYXkgKyAxLCBwcmV2Rm91bHNDb21taXRlZCArIHBhcnNlSW50KG1hdGNoW1wiQUZcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uRm91bHNBZ2FpbnN0W3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZGb3Vsc0FnYWluc3QgKyBwYXJzZUludChtYXRjaFtcIkhGXCJdKV0pO1xuICAgICAgICAgICAgICAgIHNlYXNvblllbGxvd0NhcmRzW3RlYW1dLnB1c2goW3ByZXZNYXRjaGRheSArIDEsIHByZXZZZWxsb3dDYXJkcyArIHBhcnNlSW50KG1hdGNoW1wiQVlcIl0pXSk7XG4gICAgICAgICAgICAgICAgc2Vhc29uUmVkQ2FyZHNbdGVhbV0ucHVzaChbcHJldk1hdGNoZGF5ICsgMSwgcHJldlJlZENhcmRzICsgcGFyc2VJbnQobWF0Y2hbXCJBUlwiXSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbi8vICBMaW5lIEdyYXBoXG52YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiA3MCwgbGVmdDogNTB9LFxud2lkdGggPSA2NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbmhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbi5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbi5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuLmFwcGVuZChcImdcIilcbi5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cblxuXG4gIC8vIFggYW5kIFkgQXhpc1xuXG4gIHN2Zy5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcImN4XCIsIDEwMCkuYXR0cihcImN5XCIsIDUwKS5hdHRyKFwiclwiLCA0KS5zdHlsZShcImZpbGxcIiwgXCJyZWRcIilcbiAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiY3hcIiwgMTAwKS5hdHRyKFwiY3lcIiwgNzApLmF0dHIoXCJyXCIsIDQpLnN0eWxlKFwiZmlsbFwiLCBcInllbGxvd1wiKVxuICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCAxMjApLmF0dHIoXCJ5XCIsIDUwKS5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKS50ZXh0KFwiTGl2ZXJwb29sIDIwMTgtMTlcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIDEyMCkuYXR0cihcInlcIiwgNzApLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpLnRleHQoXCJTb3V0aGFtcHRvbiAyMDE4LTE5XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG5cbi8vICBDcmVhdGUgYSBkcm9wZG93biBidXR0b24gdG8gc2VsZWN0IGRhdGEgb3V0cHV0XG5jb25zdCBkcm9wRG93bkJ1dHRvbiA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic2VsZWN0XCIpXG5cbi8vIENyZWF0ZSBvcHRpb25zIGZvciBEcm9wZG93blxuZHJvcERvd25CdXR0b24uc2VsZWN0QWxsKCdkYXRhT3B0aW9ucycpXG4uZGF0YShTVEFUUylcbi5lbnRlcigpXG4uYXBwZW5kKCdvcHRpb24nKVxuLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkfSlcbi5hdHRyKFwidmFsdWVcIiwgZCA9PiB7cmV0dXJuIGR9KTtcblxuXG4gXG4gICAgLy8gWS1heGlzIGxhYmVsXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgLmF0dHIoXCJ5XCIsIDAgLSBtYXJnaW4ubGVmdCAtIDUpXG4gICAgLmF0dHIoXCJ4XCIsIDAgLSAoaGVpZ2h0LzIpKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5YXhpcy10ZXh0XCIpXG4gICAgLnRleHQoXCJQb2ludHNcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjIycHhcIilcbiAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG4gICAgICAvLyBYLWF4aXMgbGFiZWxcbiAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSAoXCIgKyAod2lkdGgvMikgKyBcIiAsXCIgKyAoaGVpZ2h0ICsgbWFyZ2luLnRvcCArIDI1KSArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJNYXRjaGRheVwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIyMnB4XCIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuXG5sZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG5sZXQgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeCk7XG5cbnN2Zy5hcHBlbmQoXCJnXCIpXG4uYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4uYXR0cihcImNsYXNzXCIsIFwiWEF4aXNcIilcbi5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKTtcbmxldCB5QXhpcyA9IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeSk7XG5zdmcuYXBwZW5kKFwiZ1wiKVxuLmF0dHIoXCJjbGFzc1wiLCBcIllBeGlzXCIpXG4uc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cbmNvbnN0IHVwZGF0ZSA9IChkYXRhLCB0aXRsZSkgPT4ge1xuXG4gXG5cbiAgICB4LmRvbWFpbihbMCwgZDMubWF4KHNlYXNvbkxlbmd0aCldKTtcbiAgICBzdmcuc2VsZWN0QWxsKFwiLlhBeGlzXCIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5jYWxsKHhBeGlzKTtcblxuICAgIGxldCB0ZWFtT25lTWF4ID0gZGF0YVtcIkxpdmVycG9vbFwiXVszOF1bMV07XG4gICAgbGV0IHRlYW1Ud29NYXggPSBkYXRhW1wiU291dGhhbXB0b25cIl1bMzhdWzFdO1xuXG4gICAgdGVhbU9uZU1heCA+PSB0ZWFtVHdvTWF4ID8geS5kb21haW4oWzAsIHRlYW1PbmVNYXhdKSA6IHkuZG9tYWluKFswLCB0ZWFtVHdvTWF4XSk7IFxuICAgIFxuICAgIHN2Zy5zZWxlY3RBbGwoXCIuWUF4aXNcIilcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgXG4gICAgc3ZnLnNlbGVjdChcIi55YXhpcy10ZXh0XCIpLnRleHQodGl0bGUpXG5cbiAgICBcblxuXG4gICAgbGV0IGxpbmUxID0gc3ZnLnNlbGVjdEFsbChcIi5saW5lMVwiKVxuICAgIGxldCBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIilcbiAgICBcbiAgICBpZiAobGluZTEpIHtzdmcuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLnJlbW92ZSgpfVxuICAgIGlmIChsaW5lMikge3N2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikucmVtb3ZlKCl9XG5cbiAgICBsaW5lMSA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTFcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIkxpdmVycG9vbFwiXSlcbiAgICBsaW5lMiA9IHN2Zy5zZWxlY3RBbGwoXCIubGluZTJcIikuZGF0YShbZGF0YV0sIGQgPT4gZFtcIlNvdXRoYW1wdG9uXCJdKVxuXG4gICAgbGluZTFcbiAgICAuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiTGl2ZXJwb29sXCJdKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmUxXCIpXG4gICAgLm1lcmdlKGxpbmUxKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgLngoZCA9PiB7cmV0dXJuIHgoZFswXSk7IH0pXG4gICAgLnkoZCA9PiB7cmV0dXJuIHkoZFsxXSk7fSkpXG4gICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMi41KVxuXG4gICAgbGluZTIuZW50ZXIoKVxuICAgIC5kYXR1bShkYXRhW1wiU291dGhhbXB0b25cIl0pXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZTJcIilcbiAgICAubWVyZ2UobGluZTIpXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAueChkID0+IHtyZXR1cm4geChkWzBdKTsgfSlcbiAgICAueShkID0+IHtyZXR1cm4geShkWzFdKTt9KSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ5ZWxsb3dcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyLjUpXG5cbiAgXG4gICAgLy8gbGV0IGxpbmUxTGVuZ3RoID0gZDMuc2VsZWN0QWxsKFwiLmxpbmUxXCIpLm5vZGUoKS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIC8vIGxldCBsaW5lMkxlbmd0aCA9IGQzLnNlbGVjdEFsbChcIi5saW5lMlwiKS5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIC8vIGQzLnNlbGVjdEFsbChcIi5saW5lMVwiKS5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBsaW5lMUxlbmd0aCArIFwiIFwiICsgbGluZTFMZW5ndGgpXG4gICAgLy8gLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCBsaW5lMUxlbmd0aClcbiAgICAvLyAudHJhbnNpdGlvbigpXG4gICAgLy8gLmR1cmF0aW9uKDIwMDApXG4gICAgLy8gLmRlbGF5KDIwMClcbiAgICAvLyAuZWFzZShkMy5lYXNlU2luKVxuICAgIC8vIC5hdHRyKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgMClcblxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cbn1cblxudXBkYXRlKHNlYXNvblBvaW50cywgXCJQb2ludHNcIik7XG5cblxuXG5kcm9wRG93bkJ1dHRvbi5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICBzd2l0Y2ggKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Qb2ludHMsIHNlbGVjdGVkT3B0aW9uKTsgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNob3RzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uU2hvdHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2hvdHMgb24gVGFyZ2V0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uU2hvdHNPblRhcmdldCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGaXJzdCBIYWxmIEdvYWxzXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRmlyc3RIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU2Vjb25kIEhhbGYgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25TZWNvbmRIYWxmR29hbHMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiVG90YWwgR29hbHNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Hb2Fscywgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJHb2FscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uR29hbHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvcm5lcnNcIjpcbiAgICAgICAgICAgIHVwZGF0ZShzZWFzb25Db3JuZXJzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZvdWxzIENvbW1pdGVkXCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRm91bHNDb21taXRlZCwgc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGb3VscyBBZ2FpbnN0XCI6XG4gICAgICAgICAgICB1cGRhdGUoc2Vhc29uRm91bHNBZ2FpbnN0LCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlllbGxvdyBDYXJkc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblllbGxvd0NhcmRzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJlZCBDYXJkc1wiOlxuICAgICAgICAgICAgdXBkYXRlKHNlYXNvblJlZENhcmRzLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pXG4gIFxuXG4gICAgXG59KTtcblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==