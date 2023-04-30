import * as echarts from 'echarts/core';
export const linechartOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    icon: "rect",
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ["公路营运客车", "铁路营运客车", "水路营运客车"],
    right: "4%",
    textStyle: {
      fontSize: 12,
      color: "#F1F1F3",
    },
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      data: [
        "13:00",
        "13:05",
        "13:10",
        "13:15",
        "13:20",
        "13:25",
        "13:30",
        "13:35",
        "13:40",
        "13:45",
        "13:50",
        "13:55",
      ],
    },
    {
      axisPointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisTick: {
        show: false,
      },

      position: "bottom",
      offset: 20,
      data: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
          value: "周六",
          textStyle: {
            align: "left",
          },
        },
        "周日",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "单位（次）",
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        margin: 10,
        axisLabel: {
          fontSize: 14,
          color: "#fff"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
  ],
  series: [
    {
      name: "公路营运客车",
      type: "line",
      smooth: true,
      symbol: "circle",
      stack: 'Total',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
          [
            {
              offset: 0,
              color: "rgba(137, 189, 27, 1)",
            },
            {
              offset: 0.8,
              color: "rgba(137, 189, 27, 0.4)",
            },
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
      emphasis: {
        focus: 'series'
      },

      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
    },
    {
      name: "铁路营运客车",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
          [
            {
              offset: 0,
              color: "rgba(0, 136, 212, 1)",
            },
            {
              offset: 0.8,
              color: "rgba(0, 136, 212, 0.4)",
            },
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
      itemStyle: {
        color: "rgb(0,136,212)",
        borderColor: "rgba(0,136,212,0.2)",
        borderWidth: 12,
      },
      data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
    },
    {
      name: "水路营运客车",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
          [
            {
              offset: 0,
              color: "rgba(219, 50, 51, 1)",
            },
            {
              offset: 0.8,
              color: "rgba(219, 50, 51, 0.4)",
            },
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
      itemStyle: {
        color: "rgb(219,50,51)",
        borderColor: "rgba(219,50,51,0.2)",
        borderWidth: 12,
      },
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    },
  ],


}