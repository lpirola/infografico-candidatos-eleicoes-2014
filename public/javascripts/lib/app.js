define(['d3', 'c3'], function (d3, c3) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');
    //var Chartjs = Chart.noConflict();

    var app = {
        init: function () {
            var chart = c3.generate({
                bindto: '#chart_genero',
                data: {
                    url: '/data/sexo',
                    mimeType: 'json',
                    type : 'donut',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão em gêneros"
                }
            });

            var chart = c3.generate({
                bindto: '#chart_estado_civil',
                data: {
                    url: '/data/estado_civil',
                    mimeType: 'json',
                    type : 'donut',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por estado civil"
                }
            });
        }
    };

    return app;
});