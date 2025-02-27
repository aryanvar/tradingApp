/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

import React from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const series = [
    {
      data: [
        [1734422620809, 106812.549956933],
        [1734426232257, 107385.085396796],
        [1734429682808, 107262.93880857],
        [1734433228758, 107057.821141953],
        [1734437032384, 106759.84150362],
        [1734440630432, 107144.069682933],
        [1734444151896, 107257.650756549],
        [1734447824566, 108134.703955388],
        [1734451420742, 106535.294948918],
        [1734455041256, 106955.087677547],
        [1734458409610, 107473.874028861],
        [1734462233037, 106620.368592256],
        [1734465760683, 106495.851999691],
        [1734469258374, 106867.016361596],
        [1734472859227, 106437.506543884],
        [1734476605541, 105991.357251276],
        [1734480057453, 106034.913402645],
        [1734483827203, 106149.113400295],
        [1734487422698, 105190.792068245],
        [1734490966066, 105319.256782724],
        [1734494622486, 104741.062915471],
        [1734498219007, 103848.148629144],
        [1734501831833, 103581.164917386],
        [1734505433351, 103745.293900757],
        [1734509302837, 104220.262628561],
        [1734512625912, 103784.927218399],
        [1734516221902, 104018.510392272],
        [1734519828452, 104503.224036199],
        [1734523329044, 105037.057303081],
        [1734527032431, 104983.481291607],
        [1734530866894, 104661.925494947],
        [1734534234033, 103821.249178899],
        [1734537676381, 104432.307228023],
        [1734541245402, 104094.33900138],
        [1734544833096, 104678.011449326],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      strokeDashArray: 0,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  return (
    <div>
      <div id="chart-timeline">
        <ReactApexChart options={options} series={series} />
      </div>
    </div>
  );
};

export default StockChart;
