let teams = [];
let allTeamStats = [];
let compareTeams = ["Liverpool", "Southampton"];
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
    "Fouls Committed", 
    "Fouls Against", 
    "Yellow Cards", 
    "Red Cards"];


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
                team["Shots On Target"] += parseInt(match["HST"]);
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
                team["Shots On Target"] += parseInt(match["AST"]);
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


    // creating the svg element for bar chart
    var margin = {top: 20, right: 20, bottom: 60, left: 50},
    width = 1100 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom

    var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



    // X-axis and data array
    var groups = d3.map(compareTeamsStats, d => {return(d.team)}).keys();

    // X-Axis
    var x = d3.scaleBand()
    .domain(X_AXIS)
    .range([0, width])
    .padding([0.2])

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(X_AXIS.length)).style("fill", "white");


    // Y-Axis
    var y = d3.scaleLinear()
    .domain([0, 600])
    .range([height, 0]);
    
    svg.append("g")
    .call(d3.axisLeft(y))
    .style("fill", "white");

    var xSubgroup = d3.scaleBand()
    .domain(compareTeams)
    .range([0, x.bandwidth()])
    .padding([0.05])

    var color = d3.scaleOrdinal()
    .domain(compareTeams)
    .range(['yellow', 'red'])


    // Bars
    svg.append("g")
    .selectAll("g")
    .data(compareTeamsStats)
    .enter()
    .append("g")
    .attr("transform", d => {})
    .selectAll("rect")
    .data(d => {return X_AXIS.map(key => {return {key: key, value: d[key]}})})
    .enter().append("rect")
    .attr("x", (d) => {return xSubgroup(d.key)})
    .attr("y", (d) => {return y(d.value)})
    .attr("width", xSubgroup.bandwidth())
    .attr("height", (d) => {return height - y(d.value)})
    .attr("fill", (d) => {return color(d.key)})
    




    console.log(compareTeamsStats);
    console.log(allTeamStats);
    console.log(data.columns.slice(1))
})

