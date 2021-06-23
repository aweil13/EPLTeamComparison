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
      
      // Data Objects used in graph making
      this.seasonPointsTeamOne = {};
      this.seasonPointsTeamTwo = {};
      this.seasonShotsTeamOne = {};
      this.seasonShotsTeamTwo = {};
      this.seasonShotsOnTargetTeamOne = {};
      this.seasonShotsOnTargetTeamTwo = {};
      this.seasonFirstHalfGoalsTeamOne = {};
      this.seasonFirstHalfGoalsTeamTwo = {};
      this.seasonSecondHalfGoalsTeamOne = {};
      this.seasonSecondHalfGoalsTeamTwo = {};
      this.seasonGoalsTeamOne = {};
      this.seasonGoalsTeamTwo = {};
      this.seasonGoalsAgainstTeamOne = {};
      this.seasonGoalsAgainstTeamTwo = {};
      this.seasonCornersTeamOne = {};
      this.seasonCornersTeamTwo = {};
      this.seasonFoulsCommitedTeamOne = {};
      this.seasonFoulsCommitedTeamTwo = {};
      this.seasonFoulsAgainstTeamOne = {};
      this.seasonFoulsAgainstTeamTwo = {};
      this.seasonYellowCardsTeamOne = {};
      this.seasonYellowCardsTeamTwo = {};
      this.seasonRedCardsTeamOne = {};
      this.seasonRedCardsTeamTwo = {};
        

      // Initializing objects with data
      this.seasonPointsTeamOne[this.team1] = 0;
      this.seasonPointsTeamTwo[this.team2] = 0;
      this.seasonShotsTeamOne[this.team1] = 0;
      this.seasonShotsTeamTwo[this.team2] = 0;
      this.seasonShotsOnTargetTeamOne[this.team1] = 0;
      this.seasonShotsOnTargetTeamTwo[this.team2] = 0;
      this.seasonFirstHalfGoalsTeamOne[this.team1] = 0;
      this.seasonFirstHalfGoalsTeamTwo[this.team2] = 0;
      this.seasonSecondHalfGoalsTeamOne[this.team1] = 0;
      this.seasonSecondHalfGoalsTeamTwo[this.team2] = 0;
      this.seasonGoalsTeamOne[this.team1] = 0;
      this.seasonGoalsTeamTwo[this.team2] = 0;
      this.seasonGoalsAgainstTeamOne[this.team1] = 0;
      this.seasonGoalsAgainstTeamTwo[this.team2] = 0;
      this.seasonCornersTeamOne[this.team1] = 0;
      this.seasonCornersTeamTwo[this.team2] = 0;
      this.seasonFoulsCommitedTeamOne[this.team1] = 0;
      this.seasonFoulsCommitedTeamTwo[this.team2] = 0;
      this.seasonFoulsAgainstTeamOne[this.team1] = 0;
      this.seasonFoulsAgainstTeamTwo[this.team2] = 0;
      this.seasonYellowCardsTeamOne[this.team1] = 0;
      this.seasonYellowCardsTeamTwo[this.team2] = 0;
      this.seasonRedCardsTeamOne[this.team1] = 0;
      this.seasonRedCardsTeamTwo[this.team2] = 0;

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
                  this.seasonPointsTeamOne[this.team1] += 3;
                  break;
                case "D":
                  this.seasonPointsTeamOne[this.team1] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShotsTeamOne[this.team1] += parseInt(match1["HS"]);
              this.seasonShotsOnTargetTeamOne[this.team1] += parseInt(match1["HST"]);
              this.seasonFirstHalfGoalsTeamOne[this.team1] += parseInt(match1["HTHG"]);
              this.seasonSecondHalfGoalsTeamOne[this.team1] += (parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]));
              this.seasonGoalsTeamOne[this.team1] += parseInt(match1["FTHG"]);
              this.seasonGoalsAgainstTeamOne[this.team1] += parseInt(match1["FTAG"]);
              this.seasonCornersTeamOne[this.team1] += parseInt(match1["HC"]);
              this.seasonFoulsCommitedTeamOne[this.team1] += parseInt(match1["HF"]);
              this.seasonFoulsAgainstTeamOne[this.team1] += parseInt(match1["AF"]);
              this.seasonYellowCardsTeamOne[this.team1] += parseInt(match1["HY"]);
              this.seasonRedCardsTeamOne[this.team1] += parseInt(match1["HR"]);
            } else if (this.team1 === match1["AwayTeam"]){
              switch (match1['FTR']) {
                case "A":
                  this.seasonPointsTeamOne[this.team1] += 3;
                  break;
                case "D":
                  this.seasonPointsTeamOne[this.team1] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShotsTeamOne[this.team1] += parseInt(match1["AS"]);
              this.seasonShotsOnTargetTeamOne[this.team1] += parseInt(match1["AST"]);
              this.seasonFirstHalfGoalsTeamOne[this.team1] += parseInt(match1["HTAG"]);
              this.seasonSecondHalfGoalsTeamOne[this.team1] += (parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]));
              this.seasonGoalsTeamOne[this.team1] += parseInt(match1["FTAG"]);
              this.seasonGoalsAgainstTeamOne[this.team1] += parseInt(match1["FTHG"]);
              this.seasonCornersTeamOne[this.team1] += parseInt(match1["AC"]);
              this.seasonFoulsCommitedTeamOne[this.team1] += parseInt(match1["AF"]);
              this.seasonFoulsAgainstTeamOne[this.team1] += parseInt(match1["HF"]);
              this.seasonYellowCardsTeamOne[this.team1] += parseInt(match1["AY"]);
              this.seasonRedCardsTeamOne[this.team1] += parseInt(match1["AR"]);
            }

            // Team 2 Conditional and Logic
            if (this.team2 === match2["HomeTeam"]){
              switch (match2['FTR']) {
                case "H":
                  this.seasonPointsTeamTwo[this.team2] += 3;
                  break;
                case "D":
                  this.seasonPointsTeamTwo[this.team2] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShotsTeamTwo[this.team2] += parseInt(match2["HS"]);
              this.seasonShotsOnTargetTeamTwo[this.team2] += parseInt(match2["HST"]);
              this.seasonFirstHalfGoalsTeamTwo[this.team2] += parseInt(match2["HTHG"]);
              this.seasonSecondHalfGoalsTeamTwo[this.team2] += (parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]));
              this.seasonGoalsTeamTwo[this.team2] += parseInt(match2["FTHG"]);
              this.seasonGoalsAgainstTeamTwo[this.team2] += parseInt(match2["FTAG"]);
              this.seasonCornersTeamTwo[this.team2] += parseInt(match2["HC"]);
              this.seasonFoulsCommitedTeamTwo[this.team2] += parseInt(match2["HF"]);
              this.seasonFoulsAgainstTeamTwo[this.team2] += parseInt(match2["AF"]);
              this.seasonYellowCardsTeamTwo[this.team2] += parseInt(match2["HY"]);
              this.seasonRedCardsTeamTwo[this.team2] += parseInt(match2["HR"]);
            } else if (this.team2 === match2["AwayTeam"]){
              switch (match2['FTR']) {
                case "A":
                  this.seasonPointsTeamTwo[this.team2] += 3;
                  break;
                case "D":
                  this.seasonPointsTeamTwo[this.team2] += 1;
                  break;
                default:
                  break;
              }
              this.seasonShotsTeamTwo[this.team2] += parseInt(match2["AS"]);
              this.seasonShotsOnTargetTeamTwo[this.team2] += parseInt(match2["AST"]);
              this.seasonFirstHalfGoalsTeamTwo[this.team2] += parseInt(match2["HTAG"]);
              this.seasonSecondHalfGoalsTeamTwo[this.team2] += (parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]));
              this.seasonGoalsTeamTwo[this.team2] += parseInt(match2["FTAG"]);
              this.seasonGoalsAgainstTeamTwo[this.team2] += parseInt(match2["FTHG"]);
              this.seasonCornersTeamTwo[this.team2] += parseInt(match2["AC"]);
              this.seasonFoulsCommitedTeamTwo[this.team2] += parseInt(match2["AF"]);
              this.seasonFoulsAgainstTeamTwo[this.team2] += parseInt(match2["HF"]);
              this.seasonYellowCardsTeamTwo[this.team2] += parseInt(match2["AY"]);
              this.seasonRedCardsTeamTwo[this.team2] += parseInt(match2["AR"]);
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

          this.update(this.seasonPointsTeamOne, this.seasonPointsTeamTwo, "Points", x, xAxis, y, yAxis);

          // Dropdown button used for switching between statistics based on option selected
          let that = this;
          dropDownButton.on("change", function(d) {
            let selectedOption = d3.select(this).property("value");
            switch (selectedOption) {
              case "Points":
                  that.update(that.seasonPointsTeamOne, that.seasonPointsTeamTwo, selectedOption, x, xAxis, y, yAxis);    
                  break;
              case "Shots":
                  that.update(that.seasonShotsTeamOne, that.seasonShotsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Shots on Target":
                  that.update(that.seasonShotsOnTargetTeamOne, that.seasonShotsOnTargetTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "First Half Goals":
                  that.update(that.seasonFirstHalfGoalsTeamOne, that.seasonFirstHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Second Half Goals":
                  that.update(that.seasonSecondHalfGoalsTeamOne, that.seasonSecondHalfGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Total Goals":
                  that.update(that.seasonGoalsTeamOne, that.seasonGoalsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Goals Against":
                  that.update(that.seasonGoalsAgainstTeamOne, that.seasonGoalsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Corners":
                  that.update(that.seasonCornersTeamOne, that.seasonCornersTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Fouls Commited":
                  that.update(that.seasonFoulsCommitedTeamOne, that.seasonFoulsCommitedTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Fouls Against":
                  that.update(that.seasonFoulsAgainstTeamOne, that.seasonFoulsAgainstTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Yellow Cards":
                  that.update(that.seasonYellowCardsTeamOne, that.seasonYellowCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              case "Red Cards":
                  that.update(that.seasonRedCardsTeamOne, that.seasonRedCardsTeamTwo, selectedOption, x, xAxis, y, yAxis);
                  break;
              default:
                  break;
            }
        })

        }) 
    }

    update(dataTeamOne, dataTeamTwo, title, x, xAxis, y, yAxis){
      // Helper Objects
      const data = {};
      const team1Season1 = this.team1 + " " + this.season1;
      const team2Season2 = this.team2 + " " + this.season2;
      data[team1Season1] = dataTeamOne[this.team1];
      data[team2Season2] = dataTeamTwo[this.team2];


      // Update X-Axis with team names
      x.domain(Object.keys(data).map(team => team))
      xAxis.call(d3.axisBottom(x));

      // Update Y-Axis with relevant values
      dataTeamOne[this.team1] >= dataTeamTwo[this.team2] ? y.domain([0, dataTeamOne[this.team1] + (dataTeamOne[this.team1]/10)]) : y.domain([0, dataTeamTwo[this.team2] + (dataTeamTwo[this.team2]/10)])
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