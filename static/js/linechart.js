var ctx = document.getElementById("LineChart")
var data = {
    labels: [],
    datasets: [
        {
            label: "ACC (Roll)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            data: [],
        },
        {
             label: "ACC (Pitch)",
             fill: false,
             lineTension: 0.1,
             backgroundColor: "rgba(75,192,192,0.4)",
             borderColor : "rgba(151,187,205,1)",
             pointBorderColor : "rgba(151,187,205,1)",
             pointBackgroundColor : "#fff",
             pointBorderWidth: 1,
             data: [],
        },
        {
             label: "ACC (Yaw)",
             fill: false,
             lineTension: 0.1,
             backgroundColor : "rgba(75,192,192,0.4)",
             borderColor : "rgba(191,127,105,1)",
             pointBorderColor : "rgba(151,187,205,1)",
             pointBackgroundColor : "#fff",
             pointBorderWidth: 1,
             data: [],
        },
        {
             label: "GYRO (Roll)", 
             fill: false,
             lineTension: 0.1,
             backgroundColor: "rgba(75,192,192,0.4)", 
             borderColor : "rgba(111,147,205,1)",
             pointBorderColor : "rgba(151,187,205,1)",
             pointBackgroundColor : "#fff",
             pointBorderWidth: 1,
             data: [],
        },
        {
             label: "GYRO (Pitch)",
             fill: false,
             lineTension: 0.1,
             backgroundColor: "rgba(75,192,192,0.4)",
             borderColor : "rgba(111,237,135,1)",
             pointBorderColor : "rgba(151,187,205,1)",
             pointBackgroundColor : "#fff",
             pointBorderWidth: 1,
             data: [],
        },
        {
             label: "GYRO (Yaw)",
             fill: false,
             lineTension: 0.1,
             backgroundColor: "rgba(75,192,192,0.4)",
             borderColor : "rgba(221,117,105,1)",
             pointBorderColor : "rgba(151,187,205,1)",
             pointBackgroundColor : "#fff",
             pointBorderWidth: 1,
             data: [],
        }
]};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
});

function updateIMU(accx, accy, accz, gyrx, gyry, gyrz) {
              // Add the temperature and humidity to the chart.
              dhtChart.addData([accx, accy, accz, gyrx, gyry, gyrz],
                new Date().toLocaleTimeString());
              // Bump off the oldest chart measurement after 20 of them are taken.
              if (dhtChart.datasets[0].points.length > 30) {
                dhtChart.removeData();
              }
            }

socket.on('imu_readings_change', function(e) {
              updateIMU(e.accx, e.accy, e.accz, e.gyrx, e.gyry, e.gyrz);
            });