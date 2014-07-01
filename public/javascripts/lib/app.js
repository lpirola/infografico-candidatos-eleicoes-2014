define(['require', 'lib/chartjs/Chart'], function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');
    //var Chartjs = Chart.noConflict();

    var app = {
        xhr : {},

        init: function () {
            var options = {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero : true,

                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,

                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",

                //Number - Width of the grid lines
                scaleGridLineWidth : 1,

                //Boolean - If there is a stroke on each bar
                barShowStroke : true,

                //Number - Pixel width of the bar stroke
                barStrokeWidth : 2,

                //Number - Spacing between each of the X value sets
                barValueSpacing : 5,

                //Number - Spacing between data sets within X values
                barDatasetSpacing : 1,

                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

            };

            app.xhr = new XMLHttpRequest();
            app.xhr.onreadystatechange = app.prepareData; // Implemented elsewhere.
            app.xhr.open("GET", 'javascripts/faltou-agua.js', true);
            app.xhr.send();
        },

        prepareData : function(data) {
            var everyday = sometimes = alot = 0;
            var states = new Array;
            
            if ((app.xhr.readyState == 4) && (app.xhr.status == 200)) {
                var data = JSON.parse(app.xhr.responseText);
                
                _.each(data, function (el, idx) {

                    if (el.frequenct == 'everyday') {
                        everyday++;
                    } else if (el.frequenct == 'sometimes') {
                        sometimes++;
                    } else if (el.frequenct == 'alot') {
                        alot++;
                    }
                });
            }

            app.drawChart();
        },

        drawChart : function () {
            var data = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            var ctx = document.getElementById("myChart").getContext("2d");
            var myBarChart = new Chart(ctx).Bar(data, this.options);
        }
    };

    return app;
});