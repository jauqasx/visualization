import * as echarts from 'echarts'
export const pieOption = {
  backgroundColor: "transparent",
  title: [
    {
      top: "0%",
      text: "车辆总数",
      textStyle: {
        color: "#01bbda",
        fontSize: 16,
        align: "center",
      },
      left: "6%",
    },
    {
      top: "0%",
      text: "今日上线",
      textStyle: {
        color: "#dce86c",
        fontSize: 16,
        align: "center",
      },
      left: "41%",
    },
    {
      top: "0%",
      text: "今日报警",
      textStyle: {
        color: "#cc482f",
        fontSize: 16,
        align: "center",
      },
      left: "76%",
    },
  ],
  series: [
    {
      name: '车辆总数',
      type: "pie",
      radius: ["50%", "70%"],
      center: ["15%", "60%"],
      startAngle: 225,
      color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#07a4c6",
          },
          {
            offset: 1,
            color: "#1c5985",
          },
        ]),
        "transparent",
      ],
      labelLine: {
        show: false,
      },
      label: {
        position: "center",
      },
      data: [
        {
          value: 70,
          name: "车辆总数",
          label: {
            formatter: '75',
            color: "#fff",
            fontSize: 20,
          },
        },
        {
          value: 25,
          name: "%",
          label: {
            formatter: "\n\n35",
            color: "#007ac6",
            fontSize: 20,
          },
        },

      ],
    },
    {
      name: "今日上线",
      type: "pie",
      radius: ["50%", "70%"],
      center: ["50%", "60%"],
      startAngle: 225,
      labelLine: {
        show: false,
      },
      color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#6d967b",
          },
          {
            offset: 1,
            color: "#8faf77",
          },
        ]),
        "transparent",
      ],
      label: {
        position: "center",
      },
      data: [
        {
          value: 40,
          name: "今日上线",
          label: {
            formatter: "40",
            axisLabel: {
              color: "#fff",
              fontSize: 20,
            },
          },
        },
        {
          value: 25,
          name: "%",
          label: {
            formatter: "\n\n3534",
            color: "#f125ff",
            fontSize: 20,
          },
        },
      ],
    },
    {
      name: "报警次数",
      type: "pie",
      radius: ["50%", "70%"],
      center: ["85%", "60%"],
      startAngle: 225,
      labelLine: {
        show: false,
      },
      label: {
        position: "center",
      },
      data: [
        {
          value: 75,
          name: "报警次数",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#645261",
              },
              {
                offset: 1,
                color: "#814f53",
              },
            ]),
          },
          label: {
            formatter: "75",
            color: "#fff",
            fontSize: 20,
          },
        },
        {
          value: 25,
          name: "%",
          label: {
            formatter: "\n\n3534",
            color: "#f125ff",
            fontSize: 30,
          },
        },
      ],
    },
  ],
};
