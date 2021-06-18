
import LineGraph from './lineGraph';
import BarGraph from './barGraph';
import "./styles/index.scss";



const MARGIN = {top: 30, right: 30, bottom: 80, left: 60},
WIDTH = 650 - MARGIN.left - MARGIN.right,
HEIGHT = 590 - MARGIN.top - MARGIN.bottom,
TEAMS = {team1: "", team2: ""},
SEASONS = {season1: "", season2: ""},
GRAPH = {line: false, bar: false};



// Document manipulation for onchange events
document.addEventListener("DOMContentLoaded", () => {
    // select menus for seasons
    const teamOneSeasonSelector = document.querySelector("select.team1-season")
    const teamTwoSeasonSelector = document.querySelector("select.team2-season");

    // select menus for teams
    const firstTeamSelector = document.querySelector("select.team1-name");
    const secondTeamSelector = document.querySelector("select.team2-name");

    // form element
    const searchForm = document.querySelector("div.search-container");

    // submit button
    const compareButton = d3.select(".compare-button")

    // on change selector events to populate team names
    teamOneSeasonSelector.onchange = (event) => {
      const season = event.target.value;
      removeTeamsFromSearch(".team1-name");
      populateTeamSelector(season, "team1-name");
    }

    teamTwoSeasonSelector.onchange = (event) => {
      const season = event.target.value;
      removeTeamsFromSearch(".team2-name");
      populateTeamSelector(season, "team2-name");
    }

    compareButton.on("click", function(d) {
        resetButton(searchForm);
        searchForm.style.display = "none";
        
        TEAMS["team1"] = firstTeamSelector.value;
        TEAMS["team2"] = secondTeamSelector.value;
        SEASONS["season1"] = teamOneSeasonSelector.value;
        SEASONS["season2"] = teamTwoSeasonSelector.value;

        if (TEAMS["team1"] === TEAMS["team2"] && SEASONS["season1"] === SEASONS["season2"]){
            alert("Please select different seasons if you wish to compare the same club!");
            d3.select('.reset-button-container').selectChildren('button').remove();
            searchForm.style.display = "block";
        } else {
          createLineGraph(TEAMS["team1"], SEASONS["season1"], TEAMS["team2"], SEASONS["season2"]);
          populateLogos(TEAMS["team1"], TEAMS["team2"]);
      }
    })
    
})


// function to remove options from select dropdown
const removeTeamsFromSearch = element => {
    d3.select(element).selectChildren("option").remove();
}

// function to populate team selectors for each season
const populateTeamSelector = (season, selector) => {
   const teams = [];
   d3.csv(`https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/data/${season}.csv`).then(data => {
        for (let i = 0; i < data.length; i++) {
          const matchday = data[i];
          if (!teams.includes(matchday["HomeTeam"])){
              teams.push(matchday["HomeTeam"]);
          } else if (!teams.includes(matchday["AwayTeam"])) {
             teams.push(matchday["AwayTeam"]);
          }
        }
        const dropDownTeam = d3.select(`.${selector}`);
        dropDownTeam.selectAll('dataOptions')
        .data(teams)
        .enter()
        .append('option')
        .text(d => {return d})
        .attr("value", d => {return d})
        .attr("label", d => {return d});
   })
}


// function to remove the svg chart
const removeGraph = () => {
  d3.select("svg").remove();
}


// Function to add a reset button to the DOM to return to the search component
const resetButton = (searchForm) => {
    const buttonContainer = d3.select(".reset-button-container");
    buttonContainer.append("button").attr("class", "reset-button").text("Reset").on("click", function(d){
        removeGraph();
        removeChangeGraphButton();
        removeUpdateButton();
        deleteLogos();
        buttonContainer.selectChildren("button").remove();
        searchForm.style.display = "block";
        TEAMS["team1"] = "";
        TEAMS["team2"] = "";
        SEASONS["season1"] = "";
        SEASONS["season2"] = "";
    })
}

// function to create graphs
const createBarGraph = (team1, season1, team2, season2) => {
    d3.select("svg").remove();
    let svg = d3.select("#svg-container").append("svg")
    .attr("width", WIDTH + MARGIN.left + MARGIN.right)
    .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
    .append("g")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

    new BarGraph(svg, team1, season1, team2, season2)

    GRAPH.bar = true;
    GRAPH.line = false;
    changeGraphButton();
}

const createLineGraph = (team1, season1, team2, season2) => {
    d3.select("svg").remove();
    let svg = d3.select("#svg-container").append("svg")
    .attr("width", WIDTH + MARGIN.left + MARGIN.right)
    .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
    .append("g")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

    new LineGraph(svg, team1, season1, team2, season2)

    GRAPH.line = true;
    GRAPH.bar = false;  
    changeGraphButton();

}



// function to change graph to either line graph or bar graph
const changeGraphButton = () => {
    d3.select(".change-graph-type-container").selectChildren("button").remove();
    removeUpdateButton();

    if (GRAPH.line === true && GRAPH.bar === false){
      d3.select(".change-graph-type-container")
      .append("button")
      .attr("class", "change-graph-button")
      .text("Bar Graph")
      .on("click", function(d){
        createBarGraph(TEAMS.team1, SEASONS.season1, TEAMS.team2, SEASONS.season2);
      })
    } else if (GRAPH.bar === true && GRAPH.line === false){
      d3.select(".change-graph-type-container")
      .append("button")
      .attr("class", "change-graph-button")
      .text("Line Graph")
      .on("click", function(d){
        createLineGraph(TEAMS.team1, SEASONS.season1, TEAMS.team2, SEASONS.season2);
    })}
}
 
// functions to remove change graph button and update button
const removeChangeGraphButton = () => {
  d3.select(".change-graph-button").remove();
}

const removeUpdateButton = () => {
  d3.select(".update-button").remove();
}


const populateLogos = (team1, team2) => {
  const container = d3.select(".team-logos-container");
  container.append("img").attr("src", `https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/assets/team_logos/${team1}.png`).transition().duration(1500);
  container.append("text").text("VS")
  container.append("img").attr("src", `https://raw.githubusercontent.com/aweil13/EPLTeamComparison/main/assets/team_logos/${team2}.png`).transition().duration(1500);

}

const deleteLogos = () => {
  d3.select(".team-logos-container").selectChildren("img").remove();
  d3.select(".team-logos-container").selectChildren("text").remove();
}