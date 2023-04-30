import * as echarts from 'echarts/core';
export const histogramOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: "2%",
    right: "4%",
    bottom: "4%",
    top: "16%",
    containLabel: true,
  },
  legend: {
    data: ["高速公路", "城镇公路"],
    right: 10,
    top: 0,
    textStyle: {
      color: "#fff",
    },
    itemWidth: 12,
    itemHeight: 10,
    // itemGap: 35
  },
  xAxis: {
    type: "category",
    data: ["2015", '2016', '2017', '2018', '2019', '2020', '2021'],
    axisLine: {
      lineStyle: {
        color: "#fff",
      },
    },

  },

  yAxis: {
    type: "value",
    max: "1200",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {

      },
    },
  },
  series: [
    {
      name: "高速公路",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#129d9f",
          },
          {
            offset: 1,
            color: "#4d4f98",
          },
        ]),
        borderRadius: 11,
      },
      data: [900, 400, 300, 300, 300, 1000, 400, 400, 300],
    },
    {
      name: "城镇公路",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#e97b05",
          },
          {
            offset: 1,
            color: "#6a3412",
          },
        ]),
        borderRadius: 11,
      },
      data: [400, 500, 800, 800, 500, 400, 400, 500, 1100],
    },
  ],
};

const app = {
  currentIndex: -1,
};
