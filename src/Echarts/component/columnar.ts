const yData = ["天河区", "白云区", "黄埔区", "越秀区", "荔湾区"];
const data = [100, 120, 113, 214, 125];
const color = ["#6BF1BF", "#C7F895", "#E6D349", "#F8A065", "#FF6B5F"];
const seriesData: any = [];
data.map((item, index) => {
  seriesData.push({
    name: "",
    value: item,
    itemStyle: {
      color: color[index],
      borderRadius: 12,
      fontSize: 12,
    },
  });
});
export const columnarOption = {
  backgroundColor: "transparent",
  title: [
    {
      text: "城区",
      textStyle: {
        color: "#d8dee0",
        fontSize: 16,
        align: "center",
      },
      left: "0%",
      top: "4%",
    },
    {
      text: "警力分布",
      textStyle: {
        color: "#d8dee0",
        fontSize: 16,
        align: "center",
      },
      left: "20%",
      top: "4%",
    },
  ],
  tooltip: {
    trigger: "item",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: "0%",
    right: "20%",
    bottom: "0%",
    top: "16%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  yAxis: [
    {
      type: "category",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#363e83",
        },
      },
      axisLabel: {
        inside: false,
        color: "#00FFEC",
        fontWeight: "normal",
        fontSize: 16,
      },
      data: yData,
    },
    {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      data: yData,
    },
    {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      data: yData,
    },
  ],
  series: [
    {
      name: "",
      type: "bar",
      stack: "1",
      yAxisIndex: 0,
      data: seriesData,
      color: ["#6BF1BF", "#C7F895", "#E6D349", "#F8A065", "#FF6B5F"],
      barWidth: 12,
      z: 3,
    },
    {
      name: "",
      type: "bar",
      yAxisIndex: 2,
      data: [300, 300, 300, 300, 300],
      barWidth: 12,
      itemStyle: {
        color: "#001a2b",
        borderRadius: 12,
      },
      label: {
        show: true,
        color: "#00FFEC",
        fontSize: 20,
        padding: [0, 0, 0, 20],
        position: "right",
        formatter: function (params: any) {
          return data[params.dataIndex];
        },
      },
      z: 0,
    },
  ],
};
