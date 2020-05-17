function generatePentagon(data) {
  let sides = data[0].length;

  console.log(data);

  // let data = [[
  //   0.7045,
  //   0.87,
  //   0.5049,
  //   0.8418,
  //   0.5450
  // ]];
  
  let el = document.getElementById("polygon-chart");
  el.style.display = "block";
  
  let chart = new PolygonChart({
    target: el,
    radius: 200,
    data: {
      data: data,
      sides: sides,
      tooltips: {
        roundTo: 2,
        percentage: true
      },
      colors: {
        normal: {
          polygonStroke: "#A54AE9",
          polygonFill: "#a54ae94f",
          pointStroke: "transparent",
          pointFill: "#A54AE9"
        },
        onHover: {
          polygonStroke: "#A54AE9",
          polygonFill: "rgba(0,0,0,0.3)",
          pointStroke: "#A54AE9",
          pointFill: "#fff"
        }
      }
    },
    polygon: {
      colors: {
        normal: {
          fill: "#231E2C",
          stroke: "#3A255E"
        },
        onHover: {
          fill: "#231E2C",
          stroke: "#993DE0"
        }
      }
    },
    levels: {
      count: 10,
      labels: {
        enabled: true,
        position: {
          spline: 1,
          quadrant: 0
        },
        colors: {
          normal: "#8B27D7",
          onHover: "#A54AE9"
        }
      }
    }
  });
  chart.init();
}
