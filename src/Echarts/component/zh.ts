
import * as echarts from 'echarts/core';
export const zhOption = (ditu: any) => {
  //数据类型
  const geoCoordMap: { [key: string]: Array<number> } = {}
  const mapData = []
  const geoGpsMap = [113.280637, 23.125178];
  const { features } = ditu
  echarts.registerMap('中华人民共和国', ditu as any, {});
  features.forEach((item: any) => {
    const { properties } = item
    geoCoordMap[properties.name] = properties.center
  })
  for (const key in geoCoordMap) {
    mapData.push({
      name: key,
      value: geoCoordMap[key]
    })
  }
  const convertData = (data: any) => {
    const res: Array<any> = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  };
  const convertToLineData = function (data: any, gps: any) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const toCoord = geoCoordMap[dataItem.name];
      const fromCoord = gps;
      res.push([
        {
          coord: fromCoord,
        },
        {
          coord: toCoord,
        },
      ]);
    }
    return res;
  };
  return {
    backgroundColor: 'transparent',
    geo: {
      type: 'map',
      map: '中华人民共和国',
      zoom: 2.5,
      selectedMode: false,
      label: {
        show: false,
      },
      emphasis: false,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#404a59',
        areaColor: 'transparent',
      },
    },
    series: [
      {
        //文字和标志
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(mapData),
        symbolSize: function () {
          return 6;
        },
        emphasis: {
          show: true,
          label: {
            formatter: "{b}",
            position: "right",
            show: true,

          },
        },

        itemStyle: {
          color: '#d09339',
        },
      },
      //地图？
      {
        type: "lines",
        zlevel: 2,
        effect: {
          color: '#669b97',
          show: true,
          period: 6, //箭头指向速度，值越小速度越快
          trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 6, //图标大小
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: '#cb9e33'
            },
            {
              offset: 1,
              color: '#2e4f58'
            }
          ]),//线条渐变色

          width: 1, //尾迹线条宽度
          opacity: 0.8, //尾迹线条透明度
          curveness: 0.2, //尾迹线条曲直度

        },
        data: convertToLineData(mapData, geoGpsMap).splice(0, convertToLineData(mapData, geoGpsMap).length - 1),
      },
    ]
  }
}


