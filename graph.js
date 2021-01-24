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

var ctx = document.getElementById("barGraph").getContext("2d");
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

var ctx2 = document.getElementById("lineGraph").getContext("2d");
var myChart = new Chart(ctx2, {
  plugins: [ChartDataLabels],
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        lineTension: 0, // 기본이 곡선인데 직선그래프를 원하면 해당 문구 추가.
        label: "# of Votes",
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      datalabels: {
        anchor: "end",
        align: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return index > 0 ? "220" : "right";
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderRadius: 4,
        clip: true,
        color: "black",
        font: {
          weight: "bold",
        },
        formatter: function (value) {
          return value.y;
        },
      },
    },
  },
});

var ctx3 = document.getElementById("radarGraph").getContext("2d");
var myChart = new Chart(ctx3, {
  plugins: [ChartDataLabels],
  type: "radar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ],
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(123,0,200,0.6)",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: false,
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  },
});

var num = Math.random();
var data = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [
    {
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ],
      backgroundColor: ["#f79546", "#9bba57", "#4f81bb", "#5f497a", "#a94069"],
      borderWidth: 0,
      label: "Dataset 1",
    },
  ],
};

var ctx4 = document.getElementById("pieGraph").getContext("2d");
var myChart = new Chart(ctx4, {
  plugins: [ChartDataLabels],
  type: "pie", // doughnut or pie
  data: data,
  options: {
    responsive: false,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 20,
        fontColor: "#111",
        padding: 15,
      },
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
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
  },
});

var multiData = {
  labels: ["2014", "2015", "2016", "2017", "2018"],
  datasets: [
    {
      label: "심장수술(관상동맥우회수술제외)",
      data: [22589, 25119, 26946, 28323, 32144],
      yAxisID: "bigData",
      backgroundColor: "#5087CB",
      order: 1,
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
    {
      label: "관상동맥우회수술",
      data: [22802, 24906, 26567, 27377, 29981],
      yAxisID: "bigData",
      backgroundColor: "#F67653",
      order: 1,
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
    {
      label: "뇌기저부수술",
      data: [11985, 13635, 14750, 14754, 17132],
      yAxisID: "bigData",
      backgroundColor: "#FCB75E",
      order: 1,
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
    {
      type: "line",
      label: "계(33개 주요수술)",
      // data: [
      //   Math.floor(Math.random() * 10000),
      //   Math.floor(Math.random() * 10000),
      //   Math.floor(Math.random() * 10000),
      //   Math.floor(Math.random() * 10000),
      //   Math.floor(Math.random() * 10000),
      // ],
      data: [2428, 2600, 2746, 2867, 3152],
      fill: false,
      yAxisID: "smallData",
      borderColor: "#656565",
      backgroundColor: "#656565",
      order: 0,
      datalabels: {
        display: true,
        align: "center",
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#656565",
        borderRadius: 10,
        padding: {
          right: 20,
          left: 20,
        },
        formatter: function (value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
  ],
};

var ctx5 = document.getElementById("multiGraph").getContext("2d");
var myChart = new Chart(ctx5, {
  plugins: [ChartDataLabels],
  type: "bar",
  data: multiData,
  options: {
    cornerRadius: 15,
    title: {
      fontSize: 20,
      position: "top",
      display: true,
      text: "▪︎ 건당 수술비용 추이",
    },
    legend: {
      position: "bottom",
      reverse: true,
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.8,
          categoryPercentage: 1.0,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 5000,
            stepSize: 10000,
          },
          display: false,
          position: "left",
          type: "linear",
          scaleLabel: {
            display: true,
            labelString: "USD",
            beginAtZero: true,
          },
          //yAxisID: "id1"
          id: "bigData", // incorrect property name.
        },
        {
          ticks: {
            min: 1000,
            max: 5000,
            stepSize: 1000,
          },
          scaleLabel: {
            display: false,
            labelString: "Commissions",
            beginAtZero: true,
          },
          //display: false,
          display: false, // Hopefully don't have to explain this one.
          position: "right",

          gridLines: {
            display: false,
          },
          //yAxisID: "id2"
          id: "smallData", // incorrect property name.
        },
      ],
    },
    responsive: false,
    plugins: {
      datalabels: {
        display: false,
      },
    },
  },
});

download_image = function (el, type) {
  var graph = document.getElementById(type);
  alert("그래프 종류: " + type + "를 사진으로 저장합니다.");
  var image = graph.toDataURL("image/png");
  el.href = image;
};

// {
//   labels: ["Kim", "Park", "Won", "Lee", "Kang", "Ha"],
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: [
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//         Math.floor(Math.random() * 100),
//       ],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// },
