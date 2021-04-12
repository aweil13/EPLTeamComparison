let teams = [];
let seasonPoints = {};

let seasonLength = [];

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
var margin = {top: 20, right: 20, bottom: 70, left: 50},
width = 660 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  // X and Y Axis
  
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

x.domain([0, d3.max(seasonLength)]);
y.domain([0, 100]);


svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x)).style("fill", "white")

svg.append("g").call(d3.axisLeft(y)).style("fill", "white")

    // Lines and animation

    svg.append("path")
    .datum(seasonPoints["Liverpool"])
    .attr("class", "line")
    .attr("id", "line0")
    .style("stroke", "red")
    .attr("d", d3.line().x(d => { return x(d[0])})
    .y(d => {return y(d[1])})
    )
    
    svg.append("path")
    .datum(seasonPoints["Southampton"])
    .attr("class", "line")
    .attr("id", "line1")
    .style("stroke", "yellow")
    .attr("d", d3.line().x(d => { return x(d[0]) })
    .y(d => {return y(d[1]) })
    )
    

    // line animations

    d3.selectAll(".line").each((d, i) => {
        var totalLength = d3.select("#line" + i).node().getTotalLength();
        
        d3.selectAll("#line" + i).attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(2500)
        .delay(100*i)
        .ease(d3.easeSin)
        .attr("stroke-dashoffset", 0)
    })
  

  
  
    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left - 5)
    .attr("x", 0 - (height/2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("class", "yaxis")
    .text("Points")
    .attr("font-size", "22px")
    .style('fill', 'white')

    svg.append("text")
    .attr("transform", "translate (" + (width/2) + " ," + (height + margin.top + 25) + ")")
    .attr("class", "xaxis")
    .style("text-anchor", "middle")
    .text("Matchday")
    .attr("font-size", "22px")
    .style('fill', 'white')

    svg.append("circle").attr("cx", 100).attr("cy", 50).attr("r", 4).style("fill", "red")
    svg.append("circle").attr("cx", 100).attr("cy", 70).attr("r", 4).style("fill", "yellow")
    svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text("Liverpool").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text("Southampton").attr("alignment-baseline","middle")

  

});

console.log(seasonPoints)
