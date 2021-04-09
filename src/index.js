
import "./styles/index.scss";

let teams = [];
let allTeamStats = [];


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

    // lopp creating seasonStats array of objects
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
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
                team["ShotsOnTarget"] += parseInt(match["HST"]);
                team["FirstHalfGoals"] += parseInt(match["HTHG"]);
                team["SecondHalfGoals"] += (parseInt(match["FTHG"]) - parseInt(match["HTHG"]));
                team["TotalGoals"] += parseInt(match["FTHG"]);
                team["GoalsAgainst"] += parseInt(match["FTAG"]);
                team["Corners"] += parseInt(match["HC"]);
                team["FoulsCommited"] += parseInt(match["HF"]);
                team["FoulsAgainst"] += parseInt(match["AF"]);
                team["YellowCards"] += parseInt(match["HY"]);
                team["RedCards"] += parseInt(match["HR"]);
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
                team["ShotsOnTarget"] += parseInt(match["AST"]);
                team["FirstHalfGoals"] += parseInt(match["HTAG"]);
                team["SecondHalfGoals"] += (parseInt(match["FTAG"]) - parseInt(match["HTAG"]));
                team["TotalGoals"] += parseInt(match["FTAG"]);
                team["GoalsAgainst"] += parseInt(match["FTHG"]);
                team["Corners"] += parseInt(match["AC"]);
                team["FoulsCommited"] += parseInt(match["AF"]);
                team["FoulsAgainst"] += parseInt(match["HF"]);
                team["YellowCards"] += parseInt(match["AY"]);
                team["RedCards"] += parseInt(match["AR"]);
            }

        }
    }
    console.log(data);
})

console.log(allTeamStats);