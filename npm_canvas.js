
// Data
var barData = {
  labels: ["A", "B", "C", "D", "E", "F"],
  datasets: [
    {
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ],
      backgroundColor: [
        "#f79546",
        "#9bba57",
        "#4f81bb",
        "#5f497a",
        "#a94069",
        "#2B9093",
      ],
      borderWidth: 0,
      label: "학생들의 성적 점수",
    },
  ],
};

var Chart = require('chart.js')
var ChartDataLabels = require('chartjs-plugin-datalabels')
Chart.plugins.unregister(ChartDataLabels);
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(480, 480)
const ctx = canvas.getContext('2d')
var myChart = new Chart(ctx, {
  plugins: [ChartDataLabels],
  type: "horizontalBar", // bar: Vertical / horizontalBar: Horizontal
  data: barData,
  options: {
    responsive: false,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 0,
        fontColor: "#111",
        padding: 15,
      },
    },
    animation: {
      duration: 0
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value > 10 ? "left" : "right";
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderRadius: 4,
        clip: true,
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: function (value) {
          return value.y;
        },
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            stepSize: 10,
            max: 100,
            min: 0,
          },
        },
      ],
    },
  },
});
 
// // Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)
 
// // Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()
 
// Save to File
const fs = require('fs')
const out = fs.createWriteStream('test.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', ()=> console.log('The PNG file was created'))