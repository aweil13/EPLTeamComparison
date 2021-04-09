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
d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/1819.csv").then(function (data) {
  // loop for extracting teams from season into teams array
  for (var i = 0; i < data.length; i++) {
    if (!teams.includes(data[i]["HomeTeam"])) {
      teams.push(data[i]["HomeTeam"]);
    } else if (!teams.includes(data[i]["AwayTeam"])) {
      teams.push(data[i]["AwayTeam"]);
    }
  } // lopp creating seasonStats array of objects


  for (var _i = 0; _i < teams.length; _i++) {
    var team = teams[_i];
    allTeamStats.push({
      "Team": team,
      "Points": 0,
      "Shots": 0,
      "ShotsOnTarget": 0,
      "FirstHalfGoals": 0,
      "SecondHalfGoals": 0,
      "TotalGoals": 0,
      "GoalsAgainst": 0,
      "Corners": 0,
      "FoulsCommited": 0,
      "FoulsAgainst": 0,
      "YellowCards": 0,
      "RedCards": 0
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
        _team["ShotsOnTarget"] += parseInt(match["HST"]);
        _team["FirstHalfGoals"] += parseInt(match["HTHG"]);
        _team["SecondHalfGoals"] += parseInt(match["FTHG"]) - parseInt(match["HTHG"]);
        _team["TotalGoals"] += parseInt(match["FTHG"]);
        _team["GoalsAgainst"] += parseInt(match["FTAG"]);
        _team["Corners"] += parseInt(match["HC"]);
        _team["FoulsCommited"] += parseInt(match["HF"]);
        _team["FoulsAgainst"] += parseInt(match["AF"]);
        _team["YellowCards"] += parseInt(match["HY"]);
        _team["RedCards"] += parseInt(match["HR"]);
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
        _team["ShotsOnTarget"] += parseInt(match["AST"]);
        _team["FirstHalfGoals"] += parseInt(match["HTAG"]);
        _team["SecondHalfGoals"] += parseInt(match["FTAG"]) - parseInt(match["HTAG"]);
        _team["TotalGoals"] += parseInt(match["FTAG"]);
        _team["GoalsAgainst"] += parseInt(match["FTHG"]);
        _team["Corners"] += parseInt(match["AC"]);
        _team["FoulsCommited"] += parseInt(match["AF"]);
        _team["FoulsAgainst"] += parseInt(match["HF"]);
        _team["YellowCards"] += parseInt(match["AY"]);
        _team["RedCards"] += parseInt(match["AR"]);
      }
    }
  }

  console.log(data);
});
console.log(allTeamStats);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ0ZWFtcyIsImFsbFRlYW1TdGF0cyIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwidGVhbSIsInRlYW1OYW1lIiwiaiIsIm1hdGNoIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUVBLElBQUlBLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBR0FDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLGdGQUFQLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxJQUFJLEVBQUk7QUFFVDtBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNuQyxRQUFJLENBQUNOLEtBQUssQ0FBQ1EsUUFBTixDQUFlSCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRLFVBQVIsQ0FBZixDQUFMLEVBQTBDO0FBQ3RDTixXQUFLLENBQUNTLElBQU4sQ0FBV0osSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUSxVQUFSLENBQVg7QUFDSCxLQUZELE1BRU8sSUFBSSxDQUFDTixLQUFLLENBQUNRLFFBQU4sQ0FBZUgsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUSxVQUFSLENBQWYsQ0FBTCxFQUEwQztBQUM3Q04sV0FBSyxDQUFDUyxJQUFOLENBQVdKLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVEsVUFBUixDQUFYO0FBQ0g7QUFDSixHQVRTLENBV1Y7OztBQUNBLE9BQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR04sS0FBSyxDQUFDTyxNQUExQixFQUFrQ0QsRUFBQyxFQUFuQyxFQUF1QztBQUNuQyxRQUFJSSxJQUFJLEdBQUdWLEtBQUssQ0FBQ00sRUFBRCxDQUFoQjtBQUNBTCxnQkFBWSxDQUFDUSxJQUFiLENBQWtCO0FBQ2pCLGNBQVFDLElBRFM7QUFFakIsZ0JBQVUsQ0FGTztBQUdqQixlQUFTLENBSFE7QUFJakIsdUJBQWlCLENBSkE7QUFLakIsd0JBQWtCLENBTEQ7QUFNakIseUJBQW1CLENBTkY7QUFPakIsb0JBQWMsQ0FQRztBQVFqQixzQkFBZ0IsQ0FSQztBQVNqQixpQkFBVyxDQVRNO0FBVWpCLHVCQUFpQixDQVZBO0FBV2pCLHNCQUFnQixDQVhDO0FBWWpCLHFCQUFlLENBWkU7QUFhakIsa0JBQVk7QUFiSyxLQUFsQjtBQWVILEdBN0JTLENBK0JWOzs7QUFDQSxPQUFLLElBQUlKLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdMLFlBQVksQ0FBQ00sTUFBakMsRUFBeUNELEdBQUMsRUFBMUMsRUFBOEM7QUFDMUMsUUFBSUksS0FBSSxHQUFHVCxZQUFZLENBQUNLLEdBQUQsQ0FBdkI7QUFDQSxRQUFJSyxRQUFRLEdBQUdELEtBQUksQ0FBQyxNQUFELENBQW5COztBQUNBLFNBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0ssQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxVQUFJQyxLQUFLLEdBQUdSLElBQUksQ0FBQ08sQ0FBRCxDQUFoQjs7QUFDQSxVQUFJRCxRQUFRLEtBQUtFLEtBQUssQ0FBQyxVQUFELENBQXRCLEVBQW1DO0FBQ2hDLGdCQUFRQSxLQUFLLENBQUMsS0FBRCxDQUFiO0FBQ0ksZUFBSyxHQUFMO0FBQ0lILGlCQUFJLENBQUMsUUFBRCxDQUFKLElBQWtCLENBQWxCO0FBQ0E7O0FBQ0osZUFBSyxHQUFMO0FBQ0lBLGlCQUFJLENBQUMsUUFBRCxDQUFKLElBQWtCLENBQWxCO0FBQ0E7O0FBQ0o7QUFDSTtBQVJSOztBQVVDQSxhQUFJLENBQUMsT0FBRCxDQUFKLElBQWlCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBekI7QUFDQUgsYUFBSSxDQUFDLGVBQUQsQ0FBSixJQUF5QkksUUFBUSxDQUFDRCxLQUFLLENBQUMsS0FBRCxDQUFOLENBQWpDO0FBQ0FILGFBQUksQ0FBQyxnQkFBRCxDQUFKLElBQTBCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBbEM7QUFDQUgsYUFBSSxDQUFDLGlCQUFELENBQUosSUFBNEJJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFSLEdBQTBCQyxRQUFRLENBQUNELEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBOUQ7QUFDQUgsYUFBSSxDQUFDLFlBQUQsQ0FBSixJQUFzQkksUUFBUSxDQUFDRCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQTlCO0FBQ0FILGFBQUksQ0FBQyxjQUFELENBQUosSUFBd0JJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFoQztBQUNBSCxhQUFJLENBQUMsU0FBRCxDQUFKLElBQW1CSSxRQUFRLENBQUNELEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBM0I7QUFDQUgsYUFBSSxDQUFDLGVBQUQsQ0FBSixJQUF5QkksUUFBUSxDQUFDRCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQWpDO0FBQ0FILGFBQUksQ0FBQyxjQUFELENBQUosSUFBd0JJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUFoQztBQUNBSCxhQUFJLENBQUMsYUFBRCxDQUFKLElBQXVCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBL0I7QUFDQUgsYUFBSSxDQUFDLFVBQUQsQ0FBSixJQUFvQkksUUFBUSxDQUFDRCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQTVCO0FBQ0gsT0F0QkQsTUFzQk8sSUFBSUYsUUFBUSxLQUFLRSxLQUFLLENBQUMsVUFBRCxDQUF0QixFQUFtQztBQUN0QyxnQkFBUUEsS0FBSyxDQUFDLEtBQUQsQ0FBYjtBQUNJLGVBQUssR0FBTDtBQUNJSCxpQkFBSSxDQUFDLFFBQUQsQ0FBSixJQUFrQixDQUFsQjtBQUNBOztBQUNKLGVBQUssR0FBTDtBQUNJQSxpQkFBSSxDQUFDLFFBQUQsQ0FBSixJQUFrQixDQUFsQjs7QUFDSjtBQUNJO0FBUFI7O0FBU0FBLGFBQUksQ0FBQyxPQUFELENBQUosSUFBaUJJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUF6QjtBQUNBSCxhQUFJLENBQUMsZUFBRCxDQUFKLElBQXlCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxLQUFELENBQU4sQ0FBakM7QUFDQUgsYUFBSSxDQUFDLGdCQUFELENBQUosSUFBMEJJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFsQztBQUNBSCxhQUFJLENBQUMsaUJBQUQsQ0FBSixJQUE0QkksUUFBUSxDQUFDRCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQVIsR0FBMEJDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUE5RDtBQUNBSCxhQUFJLENBQUMsWUFBRCxDQUFKLElBQXNCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBOUI7QUFDQUgsYUFBSSxDQUFDLGNBQUQsQ0FBSixJQUF3QkksUUFBUSxDQUFDRCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQWhDO0FBQ0FILGFBQUksQ0FBQyxTQUFELENBQUosSUFBbUJJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUEzQjtBQUNBSCxhQUFJLENBQUMsZUFBRCxDQUFKLElBQXlCSSxRQUFRLENBQUNELEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBakM7QUFDQUgsYUFBSSxDQUFDLGNBQUQsQ0FBSixJQUF3QkksUUFBUSxDQUFDRCxLQUFLLENBQUMsSUFBRCxDQUFOLENBQWhDO0FBQ0FILGFBQUksQ0FBQyxhQUFELENBQUosSUFBdUJJLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLElBQUQsQ0FBTixDQUEvQjtBQUNBSCxhQUFJLENBQUMsVUFBRCxDQUFKLElBQW9CSSxRQUFRLENBQUNELEtBQUssQ0FBQyxJQUFELENBQU4sQ0FBNUI7QUFDSDtBQUVKO0FBQ0o7O0FBQ0RFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaO0FBQ0gsQ0F0RkQ7QUF3RkFVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZixZQUFaLEU7Ozs7Ozs7Ozs7OztBQy9GQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5sZXQgdGVhbXMgPSBbXTtcbmxldCBhbGxUZWFtU3RhdHMgPSBbXTtcblxuXG5kMy5jc3YoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXdlaWwxMy9FUExUZWFtQ29tcGFyaXNvbi9tYWluL2RhdGEvMTgxOS5jc3ZcIilcbi50aGVuKGRhdGEgPT4ge1xuXG4gICAgIC8vIGxvb3AgZm9yIGV4dHJhY3RpbmcgdGVhbXMgZnJvbSBzZWFzb24gaW50byB0ZWFtcyBhcnJheVxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZWFtcy5pbmNsdWRlcyhkYXRhW2ldW1wiSG9tZVRlYW1cIl0pKSB7XG4gICAgICAgICAgICB0ZWFtcy5wdXNoKGRhdGFbaV1bXCJIb21lVGVhbVwiXSlcbiAgICAgICAgfSBlbHNlIGlmICghdGVhbXMuaW5jbHVkZXMoZGF0YVtpXVtcIkF3YXlUZWFtXCJdKSkge1xuICAgICAgICAgICAgdGVhbXMucHVzaChkYXRhW2ldW1wiQXdheVRlYW1cIl0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb3BwIGNyZWF0aW5nIHNlYXNvblN0YXRzIGFycmF5IG9mIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gdGVhbXNbaV07XG4gICAgICAgIGFsbFRlYW1TdGF0cy5wdXNoKHtcbiAgICAgICAgIFwiVGVhbVwiOiB0ZWFtLFxuICAgICAgICAgXCJQb2ludHNcIjogMCxcbiAgICAgICAgIFwiU2hvdHNcIjogMCxcbiAgICAgICAgIFwiU2hvdHNPblRhcmdldFwiOiAwLFxuICAgICAgICAgXCJGaXJzdEhhbGZHb2Fsc1wiOiAwLFxuICAgICAgICAgXCJTZWNvbmRIYWxmR29hbHNcIjogMCxcbiAgICAgICAgIFwiVG90YWxHb2Fsc1wiOiAwLFxuICAgICAgICAgXCJHb2Fsc0FnYWluc3RcIjogMCxcbiAgICAgICAgIFwiQ29ybmVyc1wiOiAwLFxuICAgICAgICAgXCJGb3Vsc0NvbW1pdGVkXCI6IDAsXG4gICAgICAgICBcIkZvdWxzQWdhaW5zdFwiOiAwLFxuICAgICAgICAgXCJZZWxsb3dDYXJkc1wiOiAwLFxuICAgICAgICAgXCJSZWRDYXJkc1wiOiAwICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbmVzdGVkIGxvb3AgZm9yIGV4dHJhY3RpbmcgZGF0YSBhbmQgcGxhY2luZyBpdCBpbnNpZGUgc2Vhc29uU3RhdHMgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGVhbVN0YXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZWFtID0gYWxsVGVhbVN0YXRzW2ldO1xuICAgICAgICBsZXQgdGVhbU5hbWUgPSB0ZWFtW1wiVGVhbVwiXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBkYXRhW2pdO1xuICAgICAgICAgICAgaWYgKHRlYW1OYW1lID09PSBtYXRjaFtcIkhvbWVUZWFtXCJdKXtcbiAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbXCJGVFJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgIHRlYW1bXCJQb2ludHNcIl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFNcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTaG90c09uVGFyZ2V0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFNUXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRmlyc3RIYWxmR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2Vjb25kSGFsZkdvYWxzXCJdICs9IChwYXJzZUludChtYXRjaFtcIkZUSEdcIl0pIC0gcGFyc2VJbnQobWF0Y2hbXCJIVEhHXCJdKSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlRvdGFsR29hbHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiR29hbHNBZ2FpbnN0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkNvcm5lcnNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIQ1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzQ29tbWl0ZWRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIRlwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIkZvdWxzQWdhaW5zdFwiXSArPSBwYXJzZUludChtYXRjaFtcIkFGXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiWWVsbG93Q2FyZHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJIWVwiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlJlZENhcmRzXCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSFJcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZWFtTmFtZSA9PT0gbWF0Y2hbXCJBd2F5VGVhbVwiXSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXRjaFtcIkZUUlwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVtcIlBvaW50c1wiXSArPSAzIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtW1wiUG9pbnRzXCJdICs9IDFcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZWFtW1wiU2hvdHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBU1wiXSk7XG4gICAgICAgICAgICAgICAgdGVhbVtcIlNob3RzT25UYXJnZXRcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBU1RcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJGaXJzdEhhbGZHb2Fsc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJTZWNvbmRIYWxmR29hbHNcIl0gKz0gKHBhcnNlSW50KG1hdGNoW1wiRlRBR1wiXSkgLSBwYXJzZUludChtYXRjaFtcIkhUQUdcIl0pKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiVG90YWxHb2Fsc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkZUQUdcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJHb2Fsc0FnYWluc3RcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJGVEhHXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiQ29ybmVyc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkFDXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRm91bHNDb21taXRlZFwiXSArPSBwYXJzZUludChtYXRjaFtcIkFGXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiRm91bHNBZ2FpbnN0XCJdICs9IHBhcnNlSW50KG1hdGNoW1wiSEZcIl0pO1xuICAgICAgICAgICAgICAgIHRlYW1bXCJZZWxsb3dDYXJkc1wiXSArPSBwYXJzZUludChtYXRjaFtcIkFZXCJdKTtcbiAgICAgICAgICAgICAgICB0ZWFtW1wiUmVkQ2FyZHNcIl0gKz0gcGFyc2VJbnQobWF0Y2hbXCJBUlwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pXG5cbmNvbnNvbGUubG9nKGFsbFRlYW1TdGF0cyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==