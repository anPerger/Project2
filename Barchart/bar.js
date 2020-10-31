document.addEventListener('DOMContentLoaded', function () {
  var barChart = Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Correlation Between High Density Population States and Endangered Species'
    },
    // subtitle: {
    //     text: 'Source: <a href="BarChartData.cvs"></a>'
    // },
    xAxis: {
        categories: ['Hawaii', 'California', ' Florida', 'Texas', 'South Carolina'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Endengered Species',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    // tooltip: {
    //     valueSuffix: ' millions'
    // },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'White',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Bird Species',
        data: [33, 30, 23, 21, 9]
    }, {
        name: 'Plant Species',
        data: [24, 14, 9, 1, 2]
    }, ]
  });
});