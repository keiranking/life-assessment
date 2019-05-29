function randomDataset() {
  var _randomNum = function() {
    return Math.floor(Math.random() * 10);
  };
  var data = {
    "key": "Languages",
    "values": [{
      "key": "JavaScript",
      "value": _randomNum()
    }, {
      "key": "C++",
      "value": _randomNum()
    }, {
      "key": "Java",
      "value": _randomNum()
    }, {
      "key": "Ruby",
      "value": _randomNum()
    }, {
      "key": "Python",
      "value": _randomNum()
    }, {
      "key": "PHP",
      "value": _randomNum()
    }, {
      "key": "Perl",
      "value": _randomNum()
    }, {
      "key": "Basic",
      "value": _randomNum()
    }, {
      "key": "Assembly",
      "value": _randomNum()
    }]
  };
  return data;
}

var chart = d3.ez.chart.polarAreaChart().colors(d3.ez.palette.diverging(2));
var legend = d3.ez.component.legend().title('Top 10');
var title = d3.ez.component.title().mainText("Programming Languages").subText("Top 10 Languages Used By Developers");

// Create chart base
var myChart = d3.ez()
  .width(750)
  .height(400)
  .chart(chart)
  .legend(legend)
  .title(title)
  .on("customValueMouseOver", function(d, i) {
    d3.select("#message").text(d.value);
  });

// Add to page
function update() {
  var data = randomDataset();
  d3.select("#chartholder")
    .datum(data)
    .call(myChart);
}

update();
setInterval(update, 2000);
