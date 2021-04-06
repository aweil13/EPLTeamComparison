import "./styles/index.scss";

// dataset used for bars, their value is their height
const data = [30, 800, 50, 200, 70];


// this is the width/height of container and the padding between bars
const svgWidth = 500, svgHeight = 300, barPadding = 5;

// bar width is the container wd
const barWidth = (svgWidth/data.length)

 const svg = d3.select('svg')
.attr("width", svgWidth)
.attr("height", svgHeight);

 const barChart = svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("y", (d) => { return svgHeight - d})
.attr("height", (d) => {return d})        // bar height
.attr("width", barWidth - barPadding)    // bar width 
.attr("transform", (d, i) => {
    const translate = [barWidth * i, 0];
    return "translate("+ translate + ")";
})
.attr("fill", "yellow");

const text = svg.selectAll("text")
.data(data)
.enter()
.append("text")
.text((d) => {return d;})
.attr("y", (d, i) => {return svgHeight - d - 2;})
.attr("x", (d, i) => {return barWidth * i + (barWidth/3)})
.attr("fill", "red")

const yScale = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([0, svgHeight])