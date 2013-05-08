---
---
    var margin = {top: 20, right: 100, bottom: 30, left: 50};
    var width = 800 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    function linePlot(fileName, container, xMin, xMax) {
    
var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.size); })
    .y(function(d) { return y(d.time); });

var svg = d3.select(container).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("{{ site.baseurl }}/resources/dat/" + fileName, function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "size"; }));

  var systems = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {size: d.size, time: +d[name]};
      })
    };
  });

  x.domain([xMin, xMax]);

  y.domain([
    d3.min(systems, function(c) { return d3.min(c.values, function(v) { return v.time; }); }),
    d3.max(systems, function(c) { return d3.max(c.values, function(v) { return v.time; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Time [ms]");

  var system = svg.selectAll(".system")
      .data(systems)
    .enter().append("g")
      .attr("class", "system");

  system.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return color(d.name); });

  system.append("text")
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
        .attr("transform", function(d) { return "translate(" + x(d.value.size) + "," + y(d.value.time) + ")"; })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });
});
}

// ================================================================

    function lineMemPlot(fileName, container, xMin, xMax) {
    
var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.size); })
    .y(function(d) { return y(d.mem); });

var svg = d3.select(container).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("{{ site.baseurl }}/resources/dat/" + fileName, function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "size"; }));

  var systems = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {size: d.size, mem: +d[name]};
      })
    };
  });

  x.domain([xMin, xMax]);

  y.domain([
    d3.min(systems, function(c) { return d3.min(c.values, function(v) { return v.mem; }); }),
    d3.max(systems, function(c) { return d3.max(c.values, function(v) { return v.mem; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Free Memory [MB]");

  var system = svg.selectAll(".system")
      .data(systems)
    .enter().append("g")
      .attr("class", "system");

  system.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return color(d.name); });

  system.append("text")
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
        .attr("transform", function(d) { return "translate(" + x(d.value.size) + "," + y(d.value.mem) + ")"; })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });
});
}

// ================================================================

    function lineSizePlot(fileName, container, xMin, xMax) {
    
var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.size); })
    .y(function(d) { return y(d.mem); });

var svg = d3.select(container).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("{{ site.baseurl }}/resources/dat/" + fileName, function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "size"; }));

  var systems = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {size: d.size, mem: +d[name]};
      })
    };
  });

  x.domain([xMin, xMax]);

  y.domain([
    d3.min(systems, function(c) { return d3.min(c.values, function(v) { return v.mem; }); }),
    d3.max(systems, function(c) { return d3.max(c.values, function(v) { return v.mem; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Pickle Size [KB]");

  var system = svg.selectAll(".system")
      .data(systems)
    .enter().append("g")
      .attr("class", "system");

  system.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return color(d.name); });

  system.append("text")
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
        .attr("transform", function(d) { return "translate(" + x(d.value.size) + "," + y(d.value.mem) + ")"; })
        .attr("x", 3)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });
});
}
