const MARGIN = {top: 30, right: 30, bottom: 80, left: 60},
WIDTH = 650 - MARGIN.left - MARGIN.right,
HEIGHT = 590 - MARGIN.top - MARGIN.bottom;


 class LineGraph {
    constructor(svg, team1, season1, team2, season2) {
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
        

        this.seasonPoints[this.team1] = [[0,0]]
        this.seasonPoints[this.team2] = [[0,0]]
        this.seasonShots[this.team1] = [[0,0]]
        this.seasonShots[this.team2] = [[0,0]]
        this.seasonShotsOnTarget[this.team1] = [[0,0]]
        this.seasonShotsOnTarget[this.team2] = [[0,0]]
        this.seasonFirstHalfGoals[this.team1] = [[0,0]]
        this.seasonFirstHalfGoals[this.team2] = [[0,0]]
        this.seasonSecondHalfGoals[this.team1] = [[0,0]]
        this.seasonSecondHalfGoals[this.team2] = [[0,0]]
        this.seasonGoals[this.team1] = [[0,0]]
        this.seasonGoals[this.team2] = [[0,0]]
        this.seasonGoalsAgainst[this.team1] = [[0,0]]
        this.seasonGoalsAgainst[this.team2] = [[0,0]]
        this.seasonCorners[this.team1] = [[0,0]]
        this.seasonCorners[this.team2] = [[0,0]]
        this.seasonFoulsCommited[this.team1] = [[0,0]]
        this.seasonFoulsCommited[this.team2] = [[0,0]]
        this.seasonFoulsAgainst[this.team1] = [[0,0]]
        this.seasonFoulsAgainst[this.team2] = [[0,0]]
        this.seasonYellowCards[this.team1] = [[0,0]]
        this.seasonYellowCards[this.team2] = [[0,0]]
        this.seasonRedCards[this.team1] = [[0,0]]
        this.seasonRedCards[this.team2] = [[0,0]]

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
        
        this.seasonLength = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,
          14,15,16,17,18,19,20,21,22,23,24,25,26
          ,27,28,29,30,31,32,33,34,35,36,37,38]  

        this.update = this.update.bind(this);
        
        // Loading up data and creating graph 
        Promise.all([
          d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${this.season1}.csv`),
          d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${this.season2}.csv`)
        ]).then(data => {
            // Loop to go through data and populate output data objects 
            for (let i = 0; i < data[0].length; i++) {
              // Matchday vars
              let match1 = data[0][i];
              let match2 = data[1][i];
            
              // helper variables team 1
              let prevMatchday1 = this.seasonPoints[this.team1][this.seasonPoints[this.team1].length - 1][0]
              let prevPoints1 = this.seasonPoints[this.team1][this.seasonPoints[this.team1].length - 1][1]
              let prevShots1 = this.seasonShots[this.team1][this.seasonShots[this.team1].length - 1][1]
              let prevShotsOnTarget1 = this.seasonShotsOnTarget[this.team1][this.seasonShotsOnTarget[this.team1].length - 1][1]
              let prevFirstHalfGoals1 = this.seasonFirstHalfGoals[this.team1][this.seasonFirstHalfGoals[this.team1].length - 1][1]
              let prevSecondHalfGoals1 = this.seasonSecondHalfGoals[this.team1][this.seasonSecondHalfGoals[this.team1].length - 1][1]
              let prevGoals1 = this.seasonGoals[this.team1][this.seasonGoals[this.team1].length - 1][1]
              let prevGoalsAgainst1 = this.seasonGoalsAgainst[this.team1][this.seasonGoals[this.team1].length - 1][1]
              let prevCorners1 = this.seasonCorners[this.team1][this.seasonCorners[this.team1].length - 1][1]
              let prevFoulsCommited1 = this.seasonFoulsCommited[this.team1][this.seasonFoulsCommited[this.team1].length - 1][1]
              let prevFoulsAgainst1 = this.seasonFoulsAgainst[this.team1][this.seasonFoulsAgainst[this.team1].length - 1][1]
              let prevYellowCards1 = this.seasonYellowCards[this.team1][this.seasonYellowCards[this.team1].length - 1][1]
              let prevRedCards1 = this.seasonRedCards[this.team1][this.seasonRedCards[this.team1].length - 1][1]



              // helper variables team 2
              let prevMatchday2 = this.seasonPoints[this.team2][this.seasonPoints[this.team2].length - 1][0]
              let prevPoints2 = this.seasonPoints[this.team2][this.seasonPoints[this.team2].length - 1][1]
              let prevShots2 = this.seasonShots[this.team2][this.seasonShots[this.team2].length - 1][1]
              let prevShotsOnTarget2 = this.seasonShotsOnTarget[this.team2][this.seasonShotsOnTarget[this.team2].length - 1][1]
              let prevFirstHalfGoals2 = this.seasonFirstHalfGoals[this.team2][this.seasonFirstHalfGoals[this.team2].length - 1][1]
              let prevSecondHalfGoals2 = this.seasonSecondHalfGoals[this.team2][this.seasonSecondHalfGoals[this.team2].length - 1][1]
              let prevGoals2 = this.seasonGoals[this.team2][this.seasonGoals[this.team2].length - 1][1]
              let prevGoalsAgainst2 = this.seasonGoalsAgainst[this.team2][this.seasonGoals[this.team2].length - 1][1]
              let prevCorners2 = this.seasonCorners[this.team2][this.seasonCorners[this.team2].length - 1][1]
              let prevFoulsCommited2 = this.seasonFoulsCommited[this.team2][this.seasonFoulsCommited[this.team2].length - 1][1]
              let prevFoulsAgainst2 = this.seasonFoulsAgainst[this.team2][this.seasonFoulsAgainst[this.team2].length - 1][1]
              let prevYellowCards2 = this.seasonYellowCards[this.team2][this.seasonYellowCards[this.team2].length - 1][1]
              let prevRedCards2 = this.seasonRedCards[this.team2][this.seasonRedCards[this.team2].length - 1][1]
              
              // Conditional to populate data for first team
              if (match1["HomeTeam"] === this.team1){
                switch (match1["FTR"]) {
                  case "H":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1 + 3])
                    break;
                  case "A":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1])
                    break;
                  case "D":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1 + 1])
                    break;
                  default:
                    break;
                }
                this.seasonShots[this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["HS"])]);
                this.seasonShotsOnTarget[this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["HST"])]);
                this.seasonFirstHalfGoals[this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTHG"])]);
                this.seasonSecondHalfGoals[this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTHG"]) - parseInt(match1["HTHG"]))]);
                this.seasonGoals[this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTHG"])]);
                this.seasonGoalsAgainst[this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTAG"])]);
                this.seasonCorners[this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["HC"])]);
                this.seasonFoulsCommited[this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["HF"])]);
                this.seasonFoulsAgainst[this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["AF"])]);
                this.seasonYellowCards[this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["HY"])]);
                this.seasonRedCards[this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["HR"])]);
              } else if(match1["AwayTeam"] === this.team1){
                switch (match1["FTR"]) {
                  case "A":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1 + 3])
                    break;
                  case "H":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1])
                    break;
                  case "D":
                    this.seasonPoints[this.team1].push([prevMatchday1 + 1, prevPoints1 + 1])
                    break;
                  default:
                    break;
                }
                this.seasonShots[this.team1].push([prevMatchday1 + 1, prevShots1 + parseInt(match1["AS"])]);
                this.seasonShotsOnTarget[this.team1].push([prevMatchday1 + 1, prevShotsOnTarget1 + parseInt(match1["AST"])]);
                this.seasonFirstHalfGoals[this.team1].push([prevMatchday1 + 1, prevFirstHalfGoals1 + parseInt(match1["HTAG"])]);
                this.seasonSecondHalfGoals[this.team1].push([prevMatchday1 + 1, prevSecondHalfGoals1 + (parseInt(match1["FTAG"]) - parseInt(match1["HTAG"]))]);
                this.seasonGoals[this.team1].push([prevMatchday1 + 1, prevGoals1 + parseInt(match1["FTAG"])]);
                this.seasonGoalsAgainst[this.team1].push([prevMatchday1 + 1, prevGoalsAgainst1 + parseInt(match1["FTHG"])]);
                this.seasonCorners[this.team1].push([prevMatchday1 + 1, prevCorners1 + parseInt(match1["AC"])]);
                this.seasonFoulsCommited[this.team1].push([prevMatchday1 + 1, prevFoulsCommited1 + parseInt(match1["AF"])]);
                this.seasonFoulsAgainst[this.team1].push([prevMatchday1 + 1, prevFoulsAgainst1 + parseInt(match1["HF"])]);
                this.seasonYellowCards[this.team1].push([prevMatchday1 + 1, prevYellowCards1 + parseInt(match1["AY"])]);
                this.seasonRedCards[this.team1].push([prevMatchday1 + 1, prevRedCards1 + parseInt(match1["AR"])]);
              }

              // Conditional for second team data
              if (match2["HomeTeam"] === this.team2){
                switch (match2["FTR"]) {
                  case "H":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2 + 3])
                    break;
                  case "A":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2])
                    break;
                  case "D":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2 + 1])
                    break;
                  default:
                    break;
                }
                this.seasonShots[this.team2].push([prevMatchday2 + 1, prevShots1 + parseInt(match2["HS"])]);
                this.seasonShotsOnTarget[this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["HST"])]);
                this.seasonFirstHalfGoals[this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTHG"])]);
                this.seasonSecondHalfGoals[this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTHG"]) - parseInt(match2["HTHG"]))]);
                this.seasonGoals[this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTHG"])]);
                this.seasonGoalsAgainst[this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTAG"])]);
                this.seasonCorners[this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["HC"])]);
                this.seasonFoulsCommited[this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["HF"])]);
                this.seasonFoulsAgainst[this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["AF"])]);
                this.seasonYellowCards[this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["HY"])]);
                this.seasonRedCards[this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["HR"])]);
              } else if (match2["AwayTeam"] === this.team2){
                switch (match2["FTR"]) {
                  case "A":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2 + 3])
                    break;
                  case "H":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2])
                    break;
                  case "D":
                    this.seasonPoints[this.team2].push([prevMatchday2 + 1, prevPoints2 + 1])
                    break;
                  default:
                    break;
                }
                this.seasonShots[this.team2].push([prevMatchday2 + 1, prevShots2 + parseInt(match2["AS"])]);
                this.seasonShotsOnTarget[this.team2].push([prevMatchday2 + 1, prevShotsOnTarget2 + parseInt(match2["AST"])]);
                this.seasonFirstHalfGoals[this.team2].push([prevMatchday2 + 1, prevFirstHalfGoals2 + parseInt(match2["HTAG"])]);
                this.seasonSecondHalfGoals[this.team2].push([prevMatchday2 + 1, prevSecondHalfGoals2 + (parseInt(match2["FTAG"]) - parseInt(match2["HTAG"]))]);
                this.seasonGoals[this.team2].push([prevMatchday2 + 1, prevGoals2 + parseInt(match2["FTAG"])]);
                this.seasonGoalsAgainst[this.team2].push([prevMatchday2 + 1, prevGoalsAgainst2 + parseInt(match2["FTHG"])]);
                this.seasonCorners[this.team2].push([prevMatchday2 + 1, prevCorners2 + parseInt(match2["AC"])]);
                this.seasonFoulsCommited[this.team2].push([prevMatchday2 + 1, prevFoulsCommited2 + parseInt(match2["AF"])]);
                this.seasonFoulsAgainst[this.team2].push([prevMatchday2 + 1, prevFoulsAgainst2 + parseInt(match2["HF"])]);
                this.seasonYellowCards[this.team2].push([prevMatchday2 + 1, prevYellowCards2 + parseInt(match2["AY"])]);
                this.seasonRedCards[this.team2].push([prevMatchday2 + 1, prevRedCards2 + parseInt(match2["AR"])]);
              }
            }
        
        // Graph Team Legend 
        this.svg.append("circle").attr("cx", 100).attr("cy", 45).attr("r", 4).style("fill", "red")            
        this.svg.append("circle").attr("cx", 100).attr("cy", 65).attr("r", 4).style("fill", "green")            
        this.svg.append("text").attr("x", 120).attr("y", 50).style("fill", "white").text(`${this.team1} ${this.season1}`)    
        this.svg.append("text").attr("x", 120).attr("y", 70).style("fill", "white").text(`${this.team2} ${this.season2}`)    
        
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
        
        // X-Axis label
        this.svg.append("text")
        .attr("transform", "translate (" + (WIDTH/2) + " ," + (HEIGHT + MARGIN.top + 25) + ")")
        .attr("class", "x-axis")
        .style("text-anchor", "middle")
        .text("Matchday")
        .attr("font-size", "22px")
        .style("fill", "white")

        let x = d3.scaleLinear().range([0, WIDTH])
        let xAxis = d3.axisBottom().scale(x);

        this.svg.append("g")
        .attr("transform", "translate(0," + HEIGHT + ")")
        .attr("class", "XAxis")
        .style("fill", "white")

        let y = d3.scaleLinear().range([HEIGHT, 0]);
        let yAxis = d3.axisLeft().scale(y);
        this.svg.append("g")
        .attr("class", "YAxis")
        .style("fill", "white");

        this.update(this.seasonPoints, "Points", x, xAxis, y, yAxis);

        // Dropdown Button Options to change data output
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

        x.domain([0, d3.max(this.seasonLength)]);
        this.svg.selectAll(".XAxis")
        .transition()
        .duration(1000)
        .call(xAxis);

        let teamOneMax = data[this.team1][38][1];
        let teamTwoMax = data[this.team2][38][1];

        teamOneMax >= teamTwoMax ? y.domain([0, teamOneMax]) : y.domain([0, teamTwoMax]); 

        this.svg.selectAll(".YAxis")
        .transition()
        .duration(1000)
        .call(yAxis);

        this.svg.select(".yaxis-text").text(title)

        let line1 = this.svg.selectAll(".line1")
        let line2 = this.svg.selectAll(".line2")

        if (line1){this.svg.selectAll(".line1").remove()}
        if (line2){this.svg.selectAll(".line2").remove()}

        line1 = this.svg.selectAll(".line1").data([data], d => d[this.team1])
        line2 = this.svg.selectAll(".line2").data([data], d => d[this.team2])

        line1
        .enter()
        .datum(data[this.team1])
        .append("path")
        .attr("class", "line1")
        .merge(line1)
        .transition()
        .duration(1000)
        .attr("d", d3.line()
        .x(d => {return x(d[0]); })
        .y(d => {return y(d[1]); }))
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 2.5)
        
        line2
        .enter()
        .datum(data[this.team2])
        .append("path")
        .attr("class", "line1")
        .merge(line1)
        .transition()
        .duration(1000)
        .attr("d", d3.line()
        .x(d => {return x(d[0]); })
        .y(d => {return y(d[1]); }))
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 2.5)



    }    
    
}

export default LineGraph;