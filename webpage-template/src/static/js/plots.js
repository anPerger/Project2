document.addEventListener('DOMContentLoaded', function () {
// d3.csv("./BarChartData.csv").then(data => {
//     console.log(data);
//   });

  var barChart = Highcharts.chart('container', {
    chart: { type: 'bar'
    },
    title: {
        text: 'Correlation Between High Density Population States and Endangered Species'
    },
    xAxis: {
        categories: ['Hawaii', 'California', ' Florida', 'Texas', 'South Carolina'],
        title: {
            text: null 
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population Density (People/Squre Miles)',
            align: 'high'
        },
        labels: {
            overflow: ''
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
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
    },
    {
        name: 'Density',
        data: [219.9424, 256.3728, 410.1259, 112.8204, 173.3176]
    } ]
  });
});