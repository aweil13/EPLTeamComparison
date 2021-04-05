# EPLTeamComparison

## Background and Overview

### Background
* I'm a big fan of the english premier league(EPL) and have always been curious as to how the game has changed over the years. I wanted to create a website where users can compare two teams from any year in which they participated in the EPL. A lot of websites have team comparison graphs and charts but I have yet to find one that compares teams across different years. 

### High Level Overview
* The EPL Team Comparison renders data by season for two individual teams selected by team name and by season of the EPL. Users will select two teams by name and then by season of EPL in which the teams participated in, can be different years by the teams. Site will render a graph for each team, or one big graph for both, comparing the teams in key stats such as points, goals scored, goals against, goals per minute, yellow cards, red cards, etc.

## Functionality and MVP's

### Users will be able to:
* Search for specific teams that have at least one year participated in EPL.
* Sort the team selected by specific season(year).
* Do the same for a second team to compare against first team selected.
* View data rendered and debate which team is the best/worst/middling of the entire existence of the EPL.

## Architecture and Technology
* Vanilla Javascript for most code structure and creating search bar.
* D3 library for rendering statistics in desired format( graphs to be determined).
* Maybe? R to sort csv files.
* Webpack to bundle scripts into a single source.

## Implementation Timeline
* Day 1: Learn D3 library and figure out how to render data using it.
* Day 2: Implement data obtained from http://www.football-data.co.uk/englandm.php intp rendering using D3.
* Day 3: Comparison graph and how to pick 2 teams based on user input.
* Day 4: Search bar.
* Day5: Finishing touches.
