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
                    url: '/data?filter=sexo',
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
                    url: '/data?filter=estado_civil',
                    mimeType: 'json',
                    type : 'pie',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por estado civil"
                }
            });

            var chart = c3.generate({
                bindto: '#chart_grau_instrucao',
                data: {
                    url: '/data?filter=grau_instrucao',
                    // json: [
                    //     {name: 'www.site1.com', upload: 800, download: 500, total: 400},
                    //     {name: 'www.site2.com', upload: 600, download: 600, total: 400},
                    //     {name: 'www.site3.com', upload: 400, download: 800, total: 500},
                    //     {name: 'www.site4.com', upload: 400, download: 700, total: 500},
                    // ],
                    // keys: {
                    //     value: ['FEMININO', 'MASCULINO'],
                    // },
                    mimeType: 'json',
                    type : 'bar',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por grau de instrução"
                },
                legend: {
                    position: 'right'
                }
            });

            var chart = c3.generate({
                bindto: '#chart_partido',
                data: {
                    url: '/data?filter=partido',
                    mimeType: 'json',
                    type : 'bar',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por partido"
                },
                legend: {
                    show: false
                }
            });

            var chart = c3.generate({
                bindto: '#chart_coligacao',
                data: {
                    url: '/data?filter=coligacao',
                    mimeType: 'json',
                    type : 'bar',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por coligacao"
                },
                legend: {
                    show: false
                }
            });

            var chart = c3.generate({
                bindto: '#chart_ocupacao',
                data: {
                    url: '/data?filter=ocupacao',
                    mimeType: 'json',
                    type : 'bar',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Divisão por ocupacao"
                },
                legend: {
                    show: false
                }
            });

        }
    };

    return app;
});