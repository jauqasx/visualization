
import * as echarts from 'echarts/core';
export const dituOption = (ditu: any) => {
  //数据类型
  const geoCoordMap: { [key: string]: Array<number> } = {}
  const mapData = []
  const geoGpsMap = [113.280637, 23.125178];
  const { features } = ditu
  echarts.registerMap('广东省', ditu as any, {});
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
          value: dataItem.value,
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
      map: '广东省',
      zoom: 1.2,
      selectedMode: false,
      label: {
        show: false,
      },
      emphasis: false,
      itemStyle: {
        borderWidth: 2,
        borderColor: '#00f4f5',
        areaColor: '#132b40',
        opacity: '0.9',
      },
    },
    series: [
      {
        //文字和标志
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(mapData),
        symbolSize: function () {
          return 14;
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
          color: '#33c2b8',
        },
      },
      //地图？
      {
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 3, //箭头指向速度，值越小速度越快
          trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 6, //图标大小
        },
        lineStyle: {
          color: '#33c2b8',
          width: 2, //尾迹线条宽度
          opacity: 0.2, //尾迹线条透明度
          curveness: 0.3, //尾迹线条曲直度
        },
        data: convertToLineData(mapData, geoGpsMap),
      },
    ]
  }
}