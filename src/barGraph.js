
import "./styles/index.scss";

let teams = [];
let allTeamStats = [];
let compareTeamsStats = [];
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

const X_AXIS_DATA = [
    {"Points": {"Liverpool": 0, "Southampton": 0}},
    {"Shots": {"Liverpool": 0, "Southampton": 0}}, 
    {"Shots on Target": {"Liverpool": 0, "Southampton": 0}},
    {"First Half Goals": {"Liverpool": 0, "Southampton": 0}}, 
    {"Second Half Goals": {"Liverpool": 0, "Southampton": 0}}, 
    {"Total Goals": {"Liverpool": 0, "Southampton": 0}}, 
    {"Goals Against": {"Liverpool": 0, "Southampton": 0}}, 
    {"Corners": {"Liverpool": 0, "Southampton": 0}}, 
    {"Fouls Commited": {"Liverpool": 0, "Southampton": 0}}, 
    {"Fouls Against": {"Liverpool": 0, "Southampton": 0}}, 
    {"Yellow Cards": {"Liverpool": 0, "Southampton": 0}}, 
    {"Red Cards": {"Liverpool": 0, "Southampton": 0}}
]

const pointsArray = [];
const shotsArray = [];
const shotsOnTargetArray = [];
const firstHalfGoalsArray = [];
const secondHalfGoalsArray = [];
const totalGoalsArray = [];
const goalsAgainstArray = [];
const cornersArray = [];
const foulsCommittedArray = [];
const foulsAgainstArray = [];
const yellowCardsArray = [];
const redCardsArray = [];



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

    // loop creating seasonStats array of objects
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
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
        })
    }

    // nested loop for extracting data and placing it inside seasonStats array of objects
    for (let i = 0; i < allTeamStats.length; i++) {
        let team = allTeamStats[i];
        let teamName = team["Team"];
        for (let j = 0; j < data.length; j++) {
            let match = data[j];
            if (teamName === match["HomeTeam"]){
               switch (match["FTR"]) {
                   case "H":
                       team["Points"] += 3;
                       break;
                   case "D":
                       team["Points"] += 1;
                       break;   
                   default:
                       break;
               }
                team["Shots"] += parseInt(match["HS"]);
                team["Shots on Target"] += parseInt(match["HST"]);
                team["First Half Goals"] += parseInt(match["HTHG"]);
                team["Second Half Goals"] += (parseInt(match["FTHG"]) - parseInt(match["HTHG"]));
                team["Total Goals"] += parseInt(match["FTHG"]);
                team["Goals Against"] += parseInt(match["FTAG"]);
                team["Corners"] += parseInt(match["HC"]);
                team["Fouls Commited"] += parseInt(match["HF"]);
                team["Fouls Against"] += parseInt(match["AF"]);
                team["Yellow Cards"] += parseInt(match["HY"]);
                team["Red Cards"] += parseInt(match["HR"]);
            } else if (teamName === match["AwayTeam"]){
                switch (match["FTR"]) {
                    case "A":
                        team["Points"] += 3 
                        break;
                    case "D":
                        team["Points"] += 1
                    default:
                        break;
                }
                team["Shots"] += parseInt(match["AS"]);
                team["Shots on Target"] += parseInt(match["AST"]);
                team["First Half Goals"] += parseInt(match["HTAG"]);
                team["Second Half Goals"] += (parseInt(match["FTAG"]) - parseInt(match["HTAG"]));
                team["Total Goals"] += parseInt(match["FTAG"]);
                team["Goals Against"] += parseInt(match["FTHG"]);
                team["Corners"] += parseInt(match["AC"]);
                team["Fouls Commited"] += parseInt(match["AF"]);
                team["Fouls Against"] += parseInt(match["HF"]);
                team["Yellow Cards"] += parseInt(match["AY"]);
                team["Red Cards"] += parseInt(match["AR"]);
            }

        }
    }

    // Loop to populate array of teams being compared
    for (let i = 0; i < allTeamStats.length; i++) {
        switch (allTeamStats[i]["Team"]) {
            case "Liverpool":
                compareTeamsStats.push(allTeamStats[i])
                break;
            case "Southampton":
                compareTeamsStats.push(allTeamStats[i])
                break;
            default:
                break;
        }
        
    }

    //  Loop to populate bar graph array data
    for (let i = 0; i < compareTeamsStats.length; i++) {
        const team = compareTeamsStats[i];
        const teamName = team["Team"];
        for (let j = 0; j < X_AXIS_DATA.length; j++) {
            const dataGroup = X_AXIS_DATA[j]
            const key = X_AXIS[j];
            switch (teamName) {
                case "Liverpool":
                    dataGroup[key][teamName] += team[key]
                    break;
                case "Southampton":
                    dataGroup[key][teamName] += team[key]
                    break;
                default:
                    break;
            }
        }
    }

    // loop to populate indiviual statistic arrays
    for (let i = 0; i < allTeamStats.length; i++) {
        switch (allTeamStats[i]["Team"]) {
            case "Liverpool":
                pointsArray.push({team: "Liverpool", value: allTeamStats[i]["Points"]});
                shotsArray.push({team: "Liverpool", value: allTeamStats[i]["Shots"]});
                shotsOnTargetArray.push({team: "Liverpool", value: allTeamStats[i]["Shots on Target"]});
                firstHalfGoalsArray.push({team: "Liverpool", value: allTeamStats[i]["First Half Goals"]});
                secondHalfGoalsArray.push({team: "Liverpool", value: allTeamStats[i]["Second Half Goals"]});
                totalGoalsArray.push({team: "Liverpool", value: allTeamStats[i]["Total Goals"]});
                goalsAgainstArray.push({team: "Liverpool", value: allTeamStats[i]["Goals Against"]});
                cornersArray.push({team: "Liverpool", value: allTeamStats[i]["Corners"]});
                foulsCommittedArray.push({team: "Liverpool", value: allTeamStats[i]["Fouls Commited"]});
                foulsAgainstArray.push({team: "Liverpool", value: allTeamStats[i]["Fouls Against"]});
                yellowCardsArray.push({team: "Liverpool", value: allTeamStats[i]["Yellow Cards"]});
                redCardsArray.push({team: "Liverpool", value: allTeamStats[i]["Red Cards"]});
                break;
            case "Southampton":
                pointsArray.push({team: "Southampton", value: allTeamStats[i]["Points"]});
                shotsArray.push({team: "Southampton", value: allTeamStats[i]["Shots"]});
                shotsOnTargetArray.push({team: "Southampton", value: allTeamStats[i]["Shots on Target"]});
                firstHalfGoalsArray.push({team: "Southampton", value: allTeamStats[i]["First Half Goals"]});
                secondHalfGoalsArray.push({team: "Southampton", value: allTeamStats[i]["Second Half Goals"]});
                totalGoalsArray.push({team: "Southampton", value: allTeamStats[i]["Total Goals"]});
                goalsAgainstArray.push({team: "Southampton", value: allTeamStats[i]["Goals Against"]});
                cornersArray.push({team: "Southampton", value: allTeamStats[i]["Corners"]});
                foulsCommittedArray.push({team: "Southampton", value: allTeamStats[i]["Fouls Commited"]});
                foulsAgainstArray.push({team: "Southampton", value: allTeamStats[i]["Fouls Against"]});
                yellowCardsArray.push({team: "Southampton", value: allTeamStats[i]["Yellow Cards"]});
                redCardsArray.push({team: "Southampton", value: allTeamStats[i]["Red Cards"]});
                break;
            default:
                break;
        }
        
    }




    // creating the svg element for bar chart
    var margin = {top: 20, right: 20, bottom: 60, left: 50},
    width = 900 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom

    var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    
    // X-Axis initialization/creation
    const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);
    
    const xAxis = svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .attr("class", "X-axis")
    .style("fill", "white")

    // Y-Axis initialization
    const y = d3.scaleLinear()
    .range([height, 0]);

    const yAxis = svg.append("g")
    .attr("class", "Y-axis")
    .style("fill", "white");



    // function to create/update the bargraph with the changing data
    const update = data => {

        // update X-Axis with team names
        x.domain(data.map(d => d.team))
        xAxis.call(d3.axisBottom(x))

        // Update Y-Axis with relevant values
        y.domain([0, d3.max(data, d => d.value + (d.value/10))]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        // Create variable for graph

        let u = svg.selectAll("rect")
        .data(data)

        u.join("rect")
        .transition()
        .attr("x", d => x(d.team))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.value))
        .attr("fill", "#69b3a2")

    }
    
    update(pointsArray);


    //  Create a dropdown button to select data output
    const dropDownButton = d3.select("body").append("select")

    // Create options for Dropdown
    dropDownButton.selectAll('dataOptions')
    .data(X_AXIS)
    .enter()
    .append('option')
    .text(function(d) {return d})
    .attr("value", d => {return d});

    // Change of value in what is selected in the dropdown to change graph output
    dropDownButton.on("change", function(d) {
        let selectedOption = d3.select(this).property("value")
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
    })

   
})


