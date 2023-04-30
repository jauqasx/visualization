export const radarOption = {
  backgroundColor: "transparent",
  color: ["#3D91F7", "#61BE67"],

  title: {
    text: "违法数量和类型分布",
  },
  tooltip: {},
  legend: {
    show: true,
    icon: "circle",
    bottom: 30,
    center: 0,
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 21,
    orient: "horizontal",
    data: ["超速", "压线"],
    axisLabel: {
      fontSize: 14,
      color: "#8C8C8C",
    },
  },
  radar: {
    axisName: {
      color: "#fff",
      borderRadius: 3,
      padding: [3, 5],
    },
    indicator: [
      {
        name: "超速",
      },
      {
        name: "闯红灯",
      },
      {
        name: "压线",
      },
      {
        name: "闯禁行",
      },
      {
        name: "违停",
      },
    ],
    alignTicks: false,
    splitArea: {
      // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: {
        // 分隔区域的样式设置。
        color: ["#21293d"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      },
    },
    axisLine: {
      //指向外圈文本的分隔线样式
      lineStyle: {
        color: "#E5E5E6",
      },
    },
    splitLine: {
      lineStyle: {
        color: "#E5E5E6", // 分隔线颜色
        width: 1, // 分隔线线宽
      },
    },
  },

  series: [
    {
      name: "预算 vs 开销（Budget vs spending）",
      type: "radar",

      data: [
        {
          value: [1600, 900, 1300, 1200, 2000],

          areaStyle: {
            color: "#366BAF",
          },
        },
      ],
    },
  ],
};
