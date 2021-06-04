
import "./styles/index.scss";

let teams = [];
let seasonPoints = {};
let seasonShots = {};
let seasonShotsOnTarget = {};
let seasonFirstHalfGoals = {};
let seasonSecondHalfGoals = {};
let seasonGoals = {};
let seasonGoalsAgainst = {};
let seasonCorners = {};
let seasonFoulsCommited = {};
let seasonFoulsAgainst = {};
let seasonYellowCards = {};
let seasonRedCards = {};
let seasonLength = [];

const X_AXIS = [
    "Points",
    "Shots", 
    "Shots on Target",
    "First Half Goals", 
    "Second Half Goals", 
    "Total Goals", 
    "Goals Against", 
    "Corners", 
    "Fouls Commited", 
    "Fouls Against", 
    "Yellow Cards", 
    "Red Cards"];


for (let i = 0; i < 39; i++) {
    seasonLength.push(i);    
}

d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/1819.csv")
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
        seasonShots[team] = [[0,0]];
        seasonShotsOnTarget[team] = [[0,0]];
        seasonFirstHalfGoals[team] = [[0,0]];
        seasonSecondHalfGoals[team] = [[0,0]];
        seasonGoals[team] = [[0,0]];
        seasonGoalsAgainst[team] = [[0,0]];
        seasonCorners[team] = [[0,0]];
        seasonFoulsCommited[team] = [[0,0]];
        seasonFoulsAgainst[team] = [[0,0]];
        seasonYellowCards[team] = [[0,0]];
        seasonRedCards[team] = [[0,0]];
        for (let j = 0; j < data.length; j++) {
            let match = data[j];
            let prevPoints = seasonPoints[team][seasonPoints[team].length - 1][1]
            let prevMatchday = seasonPoints[team][seasonPoints[team].length - 1][0]
            let prevShots = seasonShots[team][seasonPoints[team].length - 1][1]
            let prevShotsOnTarget = seasonShotsOnTarget[team][seasonPoints[team].length - 1][1]
            let prevFirstHalfGoals = seasonFirstHalfGoals[team][seasonPoints[team].length - 1][1]
            let prevSecondHalfGoals = seasonSecondHalfGoals[team][seasonPoints[team].length - 1][1]
            let prevGoals = seasonGoals[team][seasonPoints[team].length - 1][1]
            let prevGoalsAgainst = seasonGoalsAgainst[team][seasonPoints[team].length - 1][1]
            let prevCorners = seasonCorners[team][seasonPoints[team].length - 1][1]
            let prevFoulsCommited = seasonFoulsCommited[team][seasonPoints[team].length - 1][1]
            let prevFoulsAgainst = seasonFoulsAgainst[team][seasonPoints[team].length - 1][1]
            let prevYellowCards = seasonYellowCards[team][seasonPoints[team].length - 1][1]
            let prevRedCards = seasonRedCards[team][seasonPoints[team].length - 1][1]
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
    }
    
//  Line Graph
var margin = {top: 20, right: 20, bottom: 70, left: 50},
width = 660 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  // X and Y Axis

  svg.append("circle").attr("cx", 100).attr("cy", 50).attr("r", 4).style("fill", "red")
  svg.append("circle").attr("cx", 100).attr("cy", 70).attr("r", 4).style("fill", "yellow")
  svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton").attr("alignment-baseline","middle")


//  Create a dropdown button to select data output
const dropDownButton = d3.select("body").append("select")

// Create options for Dropdown
dropDownButton.selectAll('dataOptions')
.data(X_AXIS)
.enter()
.append('option')
.text(function(d) {return d})
.attr("value", d => {return d});


 
    // Y-axis label
    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left - 5)
    .attr("x", 0 - (height/2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("class", "yaxis-text")
    .text("Points")
    .attr("font-size", "22px")
    .style('fill', 'white')

      // X-axis label
      svg.append("text")
      .attr("transform", "translate (" + (width/2) + " ," + (height + margin.top + 25) + ")")
      .attr("class", "xaxis")
      .style("text-anchor", "middle")
      .text("Matchday")
      .attr("font-size", "22px")
      .style('fill', 'white')

let x = d3.scaleLinear().range([0, width]);
let xAxis = d3.axisBottom().scale(x);

svg.append("g")
.attr("transform", "translate(0," + height + ")")
.attr("class", "XAxis")
.style("fill", "white");

let y = d3.scaleLinear().range([height, 0]);
let yAxis = d3.axisLeft().scale(y);
svg.append("g")
.attr("class", "YAxis")
.style("fill", "white");

const update = (data, title) => {

 

    x.domain([0, d3.max(seasonLength)]);
    svg.selectAll(".XAxis")
    .transition()
    .duration(1000)
    .call(xAxis);

    let teamOneMax = data["Liverpool"][38][1];
    let teamTwoMax = data["Southampton"][38][1];

    teamOneMax >= teamTwoMax ? y.domain([0, teamOneMax]) : y.domain([0, teamTwoMax]); 
    
    svg.selectAll(".YAxis")
    .transition()
    .duration(1000)
    .call(yAxis)
    
    svg.select(".yaxis-text").text(title)

    


    let line1 = svg.selectAll(".line1")
    let line2 = svg.selectAll(".line2")
    
    if (line1) {svg.selectAll(".line1").remove()}
    if (line2) {svg.selectAll(".line2").remove()}

    line1 = svg.selectAll(".line1").data([data], d => d["Liverpool"])
    line2 = svg.selectAll(".line2").data([data], d => d["Southampton"])

    line1
    .enter()
    .datum(data["Liverpool"])
    .append("path")
    .attr("class", "line1")
    .merge(line1)
    .transition()
    .duration(1000)
    .attr("d", d3.line()
    .x(d => {return x(d[0]); })
    .y(d => {return y(d[1]);}))
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 2.5)

    line2.enter()
    .datum(data["Southampton"])
    .append("path")
    .attr("class", "line2")
    .merge(line2)
    .transition()
    .duration(1000)
    .attr("d", d3.line()
    .x(d => {return x(d[0]); })
    .y(d => {return y(d[1]);}))
    .attr("fill", "none")
    .attr("stroke", "yellow")
    .attr("stroke-width", 2.5)

  

   

}

update(seasonPoints, "Points");



dropDownButton.on("change", function(d) {
    let selectedOption = d3.select(this).property("value")
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
})
  

    
});




