
import "./styles/index.scss";


// Data objects, as soon as page is loaded these objects will be populated
const nineTenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const tenElevenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const elevenTwelveStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const twelveThirteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const thirteenFourteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const fourteenFifteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const fifteenSixteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const sixteenSeventeenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const seventeenEighteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const eighteenNineteenStats = {teams: [], barGraphStats: {}, lineGraphStats: {}};
const ALL_TEAMS = [];

// Statistics that will be used in the dropdown button selection and populating the data objects above
const STATS = [
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
    "Red Cards"
];


// loop to create season length numbers array to loop through in the future
const seasonLength = [];
for (let i = 0; i < 39; i++) {
    seasonLength.push(i);    
}

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


// Array for looping through data to populate objects
const seasonArray = [
["2009-2010", nineTenStats], 
["2010-2011", tenElevenStats], 
["2011-2012", elevenTwelveStats], 
["2012-2013", twelveThirteenStats], 
["2013-2014", thirteenFourteenStats], 
["2014-2015", fourteenFifteenStats], 
["2015-2016", fifteenSixteenStats], 
["2016-2017", sixteenSeventeenStats], 
["2017-2018", seventeenEighteenStats], 
["2018-2019", eighteenNineteenStats]
]


// Loop to populate data objects
for (let i = 0; i < seasonArray.length; i++) {
    const season = seasonArray[i][0];
    const seasonData = seasonArray[i][1];
    d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${season}.csv`).then(data => {
        
        // Loop to populate ALL_TEAMS array for eventual search bar and for the teams array for each season
        for (let i = 0; i < data.length; i++) {
            const matchday = data[i];
            if (!seasonData["teams"].includes(matchday["HomeTeam"])){
                seasonData["teams"].push(matchday["HomeTeam"]);
                if (!ALL_TEAMS.includes(matchday["HomeTeam"])) {ALL_TEAMS.push(matchday["HomeTeam"])}
            } else if (!seasonData["teams"].includes(matchday["AwayTeam"])) {
                seasonData["teams"].push(matchday["AwayTeam"]);
                if (!ALL_TEAMS.includes(matchday["AwayTeam"])) {ALL_TEAMS.push(matchday["AwayTeam"])}
            }
        }
    })
    
}

console.log(thirteenFourteenStats["teams"])
console.log(ALL_TEAMS);

d3.csv("https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/2018-2019.csv")
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
                // filling up the individual stats objects/array
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
  svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool 2018-19").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton 2018-19").attr("alignment-baseline","middle")


//  Create a dropdown button to select data output
const dropDownButton = d3.select("body").append("select")

// Create options for Dropdown
dropDownButton.selectAll('dataOptions')
.data(STATS)
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

  
    // let line1Length = d3.selectAll(".line1").node().getTotalLength();
    // let line2Length = d3.selectAll(".line2").node().getTotalLength();

    // d3.selectAll(".line1").attr("stroke-dasharray", line1Length + " " + line1Length)
    // .attr("stroke-dashoffset", line1Length)
    // .transition()
    // .duration(2000)
    // .delay(200)
    // .ease(d3.easeSin)
    // .attr("stroke-dashoffset", 0)

    
    
    
   

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




