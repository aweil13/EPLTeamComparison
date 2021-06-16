const MARGIN = {top: 30, right: 30, bottom: 80, left: 60},
WIDTH = 650 - MARGIN.left - MARGIN.right,
HEIGHT = 590 - MARGIN.top - MARGIN.bottom;

class BarGraph{
    constructor(svg, team1, season1, team2, season2){
      this.svg = svg;
      this.team1 = team1;
      this.team2 = team2;
      this.season1 = season1;
      this.season2 = season2;
      
      this.seasonPoints = {};
      this.seasonShots = {};
      this.seasonShotsOnTarget = {};
      this.seasonFirstHalfGoals = {};
      this.seasonSecondHalfGoals = {};
      this.seasonGoals = {};
      this.seasonGoalsAgainst = {};
      this.seasonCorners = {};
      this.seasonFoulsCommited = {};
      this.seasonFoulsAgainst = {};
      this.seasonYellowCards = {};
      this.seasonRedCards = {};
        

      this.seasonPoints[this.team1] = 0;
      this.seasonPoints[this.team2] = 0;
      this.seasonShots[this.team1] = 0;
      this.seasonShots[this.team2] = 0;
      this.seasonShotsOnTarget[this.team1] = 0;
      this.seasonShotsOnTarget[this.team2] = 0;
      this.seasonFirstHalfGoals[this.team1] = 0;
      this.seasonFirstHalfGoals[this.team2] = 0;
      this.seasonSecondHalfGoals[this.team1] = 0;
      this.seasonSecondHalfGoals[this.team2] = 0;
      this.seasonGoals[this.team1] = 0;
      this.seasonGoals[this.team2] = 0;
      this.seasonGoalsAgainst[this.team1] = 0;
      this.seasonGoalsAgainst[this.team2] = 0;
      this.seasonCorners[this.team1] = 0;
      this.seasonCorners[this.team2] = 0;
      this.seasonFoulsCommited[this.team1] = 0;
      this.seasonFoulsCommited[this.team2] = 0;
      this.seasonFoulsAgainst[this.team1] = 0;
      this.seasonFoulsAgainst[this.team2] = 0;
      this.seasonYellowCards[this.team1] = 0;
      this.seasonYellowCards[this.team2] = 0;
      this.seasonRedCards[this.team1] = 0;
      this.seasonRedCards[this.team2] = 0;

      this.stats = [
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

        this.update = this.update.bind(this);
        // Loading up data and creating graph process
        Promise.all([
          d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${this.season1}.csv`),
          d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${this.season2}.csv`)
        ]).then(data => {
          // Loop to go through data and populate outpud data objects
          for (let i = 0; i < data[0].length; i++) {
            // Matchday vars
            let match1 = data[0][i];
            let match2 = data[1][i];
            
            // Team 1 conditional and Logic
            if (this.team1 === match1["HomeTeam"]){
              switch (match1['FTR']) {
                case "H":
                  this.seasonPoints[this.team1] += 3;
                  break;
                case "D":
                  this.seasonPoints[this.team1] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShots[this.team1] += parseInt(match1["HS"]);
              this.seasonShotsOnTarget[this.team1] += parseInt(match1["HST"]);
              this.seasonFirstHalfGoals[this.team1] += parseInt(match1["HTHG"]);
              this.seasonSecondHalfGoals[this.team1] += (parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]));
              this.seasonGoals[this.team1] += parseInt(match1["FTHG"]);
              this.seasonGoalsAgainst[this.team1] += parseInt(match1["FTAG"]);
              this.seasonCorners[this.team1] += parseInt(match1["HC"]);
              this.seasonFoulsCommited[this.team1] += parseInt(match1["HF"]);
              this.seasonFoulsAgainst[this.team1] += parseInt(match1["AF"]);
              this.seasonYellowCards[this.team1] += parseInt(match1["HY"]);
              this.seasonRedCards[this.team1] += parseInt(match1["HR"]);
            } else if (this.team1 === match1["AwayTeam"]){
              switch (match1['FTR']) {
                case "A":
                  this.seasonPoints[this.team1] += 3;
                  break;
                case "D":
                  this.seasonPoints[this.team1] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShots[this.team1] += parseInt(match1["AS"]);
              this.seasonShotsOnTarget[this.team1] += parseInt(match1["AST"]);
              this.seasonFirstHalfGoals[this.team1] += parseInt(match1["HTAG"]);
              this.seasonSecondHalfGoals[this.team1] += (parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]));
              this.seasonGoals[this.team1] += parseInt(match1["FTAG"]);
              this.seasonGoalsAgainst[this.team1] += parseInt(match1["FTHG"]);
              this.seasonCorners[this.team1] += parseInt(match1["AC"]);
              this.seasonFoulsCommited[this.team1] += parseInt(match1["AF"]);
              this.seasonFoulsAgainst[this.team1] += parseInt(match1["HF"]);
              this.seasonYellowCards[this.team1] += parseInt(match1["AY"]);
              this.seasonRedCards[this.team1] += parseInt(match1["AR"]);
            }

            // Team 2 Conditional and Logic
            if (this.team2 === match2["HomeTeam"]){
              switch (match2['FTR']) {
                case "H":
                  this.seasonPoints[this.team2] += 3;
                  break;
                case "D":
                  this.seasonPoints[this.team2] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShots[this.team2] += parseInt(match2["HS"]);
              this.seasonShotsOnTarget[this.team2] += parseInt(match2["HST"]);
              this.seasonFirstHalfGoals[this.team2] += parseInt(match2["HTHG"]);
              this.seasonSecondHalfGoals[this.team2] += (parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]));
              this.seasonGoals[this.team2] += parseInt(match2["FTHG"]);
              this.seasonGoalsAgainst[this.team2] += parseInt(match2["FTAG"]);
              this.seasonCorners[this.team2] += parseInt(match2["HC"]);
              this.seasonFoulsCommited[this.team2] += parseInt(match2["HF"]);
              this.seasonFoulsAgainst[this.team2] += parseInt(match2["AF"]);
              this.seasonYellowCards[this.team2] += parseInt(match2["HY"]);
              this.seasonRedCards[this.team2] += parseInt(match2["HR"]);
            } else if (this.team2 === match2["AwayTeam"]){
              switch (match2['FTR']) {
                case "A":
                  this.seasonPoints[this.team2] += 3;
                  break;
                case "D":
                  this.seasonPoints[this.team2] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShots[this.team2] += parseInt(match2["AS"]);
              this.seasonShotsOnTarget[this.team2] += parseInt(match2["AST"]);
              this.seasonFirstHalfGoals[this.team2] += parseInt(match2["HTAG"]);
              this.seasonSecondHalfGoals[this.team2] += (parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]));
              this.seasonGoals[this.team2] += parseInt(match2["FTAG"]);
              this.seasonGoalsAgainst[this.team2] += parseInt(match2["FTHG"]);
              this.seasonCorners[this.team2] += parseInt(match2["AC"]);
              this.seasonFoulsCommited[this.team2] += parseInt(match2["AF"]);
              this.seasonFoulsAgainst[this.team2] += parseInt(match2["HF"]);
              this.seasonYellowCards[this.team2] += parseInt(match2["AY"]);
              this.seasonRedCards[this.team2] += parseInt(match2["AR"]);
            }
          }

          // Dropdown button creation to change stats
          const dropDownButton = d3.select(".update-button-container").append("select").attr("class", "update-button");
          dropDownButton.selectAll('dataOptions')
          .data(this.stats)
          .enter()
          .append("option")
          .text(d => {return d})
          .attr("value", d => {return d});

          // Y-Axis label
          this.svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - MARGIN.left - 5)
          .attr("x", 0 - (HEIGHT/2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .attr("class", "yaxis-text")
          .text("Points")
          .attr("font-size", "22px")
          .style("fill", "white")

         

          // X-Axis Label
          this.svg.append("text")
          .attr("transform", "translate (" + (WIDTH/2) + " ," + (HEIGHT + MARGIN.top + 25) + ")")
          .attr("class", "x-axis")
          .style("text-anchor", "middle")
          .text("Teams")
          .attr("font-size", "22px")
          .style("fill", "white")
 
          
          // X/Y axis variables and functions
          const x = d3.scaleBand().range([0, WIDTH]).padding(0.2);
          const xAxis = this.svg.append("g").attr("transform", `translate(0, ${HEIGHT})`).attr("class", "X-axis").style("fill", "white");

          const y = d3.scaleLinear().range([HEIGHT, 0]);
          const yAxis = this.svg.append("g").attr("class", "Y-axis").style("fill", "white");

          this.update(this.seasonPoints, "Points", x, xAxis, y, yAxis);

          let that = this;
          dropDownButton.on("change", function(d) {
            let selectedOption = d3.select(this).property("value");
            switch (selectedOption) {
              case "Points":
                  that.update(that.seasonPoints, selectedOption, x, xAxis, y, yAxis);    
                  break;
              case "Shots":
                  that.update(that.seasonShots, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Shots on Target":
                  that.update(that.seasonShotsOnTarget, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "First Half Goals":
                  that.update(that.seasonFirstHalfGoals, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Second Half Goals":
                  that.update(that.seasonSecondHalfGoals, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Total Goals":
                  that.update(that.seasonGoals, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Goals Against":
                  that.update(that.seasonGoalsAgainst, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Corners":
                  that.update(that.seasonCorners, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Fouls Commited":
                  that.update(that.seasonFoulsCommited, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Fouls Against":
                  that.update(that.seasonFoulsAgainst, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Yellow Cards":
                  that.update(that.seasonYellowCards, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Red Cards":
                  that.update(that.seasonRedCards, selectedOption, x, xAxis, y, yAxis);
                  break;
              default:
                  break;
            }
        })

        }) 
    }

    update(data, title, x, xAxis, y, yAxis){
      
      // Update X-Axis with team names
      x.domain(Object.keys(data).map(team => team))
      xAxis.call(d3.axisBottom(x));

      // Update Y-Axis with relevant values
      data[this.team1] >= data[this.team2] ? y.domain([0, data[this.team1] + (data[this.team1]/10)]) : y.domain([0, data[this.team2] + (data[this.team2]/10)])
      yAxis.transition().duration(1000).call(d3.axisLeft(y));

      this.svg.select(".yaxis-text").text(title);
      const teams = Object.keys(data);

      let u = this.svg.selectAll("rect").data(teams);

      u.join("rect")
      .transition()
      .attr("x", d => x(d))
      .attr("y", d => y(data[d]))
      .attr("width", x.bandwidth())
      .attr("height", d => HEIGHT - y(data[d]))
      .attr("fill", "blue")
    }
}

export default BarGraph;