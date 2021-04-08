
import "./styles/index.scss";

let teams = [];
let seasonPoints = {};

let seasonLength = [];

for (let i = 0; i < 39; i++) {
    seasonLength.push(i);    
}

d3.csv("./data/1819.csv")
.then(data => {
    // loop for extracting teams from season into teams array
    for (let i = 0; i < data.length; i++) {
        if (!teams.includes(data[i]["HomeTeam"])) {
            teams.push(data[i]["HomeTeam"])
        } else if (!teams.includes(data[i]["AwayTeam"])) {
            teams.push(data[i]["AwayTeam"])
        }
    }
    // nested loop for extracting team points from data
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
        seasonPoints[team] = [[0,0]];
        for (let j = 0; j < data.length; j++) {
            let match = data[j];
            let prevPoints = seasonPoints[team][seasonPoints[team].length - 1][1]
            let prevMatchday = seasonPoints[team][seasonPoints[team].length - 1][0]
            // switch statements for building team points array
            if (match["HomeTeam"] === team){
                switch (match["FTR"]) {
                    case "H":
                        seasonPoints[team].push([prevMatchday + 1 ,prevPoints + 3]);
                        break;
                    case "A":
                        seasonPoints[team].push([prevMatchday + 1 ,prevPoints]);
                        break;
                    case "D":
                        seasonPoints[team].push([prevMatchday + 1 , prevPoints + 1]);    
                    default:
                        break;
                }
            } else if (match["AwayTeam"] === team){
                switch (match["FTR"]) {
                    case "A":
                        seasonPoints[team].push([prevMatchday + 1 ,prevPoints + 3]);
                        break;
                    case "H":
                        seasonPoints[team].push([prevMatchday + 1 ,prevPoints]);
                        break;
                    case "D":
                        seasonPoints[team].push([prevMatchday + 1 , prevPoints + 1]);   
                    default:
                        break;
                }
            }
        }
    }
    
//  Line Graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// var valueLine1 = d3.line(seasonPoints["Liverpool"])

// var valueLine2 = d3.line(seasonPoints["Southampton"])

var lineGenerator = d3.line();
var pathData1 = lineGenerator(seasonPoints["Liverpool"])
var pathData2 = lineGenerator(seasonPoints["Southampton"])

var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

x.domain([0, d3.max(seasonLength)])
y.domain([0, d3.max(seasonPoints["Liverpool"][seasonPoints["Liverpool"].length - 1])]);



svg.append("path")
.data(seasonPoints["Liverpool"])
.attr("class", "line")
.style("stroke", "red")
.attr("d", pathData1);

svg.append("path")
.data(seasonPoints["Southampton"])
.attr("d", pathData2)
.attr("class", "line")
.style("stroke", "blue")


svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

svg.append("g").call(d3.axisLeft(y))

});

const arsenal = "Arsenal"
console.log(seasonPoints)

