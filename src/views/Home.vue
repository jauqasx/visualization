<script setup lang='ts'>
import { myEcharts, histogramOption, linechartOption, dituOption, pieOption, radarOption, zhOption, columnarOption } from '@/Echarts/idnex'
import { BorderBox1, BorderBox7, BorderBox8 } from '@kjgl77/datav-vue3'
import { LegendComponent, DataZoomComponent, GeoComponent, TimelineComponent, VisualMapComponent } from 'echarts/components';
import { MapChart, LinesChart, ScatterChart, PieChart } from 'echarts/charts';
import zh from '@/Echarts/zh.json'
import ditu from '@/Echarts/ditu.json'
import * as echarts from 'echarts/core'
import { reactive } from 'vue';
import img1 from '@/assets/pic/1.png'
import img2 from '@/assets/pic/2.png'
import img3 from '@/assets/pic/3.png'
echarts.use([LegendComponent, DataZoomComponent, GeoComponent, MapChart, LinesChart, TimelineComponent, VisualMapComponent, ScatterChart, PieChart]);
let app = {
  currentIndex: -1,
};
const callback = (myChart: echarts.ECharts | undefined) => {
  if (!myChart) return
  setInterval(() => {
    let dataLen = linechartOption.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: -1,
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
  }, 5000);

}
const listmeth = reactive([
  { title: '航空运输', img: img1, k: '4347.2万人', h: "1427.2万吨" },
  { title: '水路运输', img: img2, k: '2147.2万人', h: "327.2万吨" },
  { title: '铁路运输', img: img3, k: '7557.2万人', h: "7557.2万人" }
])
const listcati = reactive(['广州市', '东莞市', '韶关市', '深圳市', '珠海市', '江门市', '梅州市', '汕头市', '河源市'])
</script>

<template>
  <div class="Home" v-resize="[1920, 954]">
    <div class="bigScreen">
      <div class="headerTab">
        <p>交通云实时数据监控平台</p>
      </div>
      <div class="content">
        <div class="container contentLeft">
          <div class="borderOne ">
            <BorderBox1 style="overflow: hidden;">
              <div class="boxtrafficRoutes">
                <myEcharts width="100%" height="100%" :option="histogramOption"></myEcharts>
              </div>
            </BorderBox1>
          </div>
          <div class="borderOne trafficTools">
            <BorderBox1 style="overflow: hidden;">
              <div class="boxtrafficRoutes">
                <myEcharts width="100%" height="100%" :option="linechartOption" :callback="callback"></myEcharts>
              </div>
            </BorderBox1>
          </div>
          <div class="borderOne trafficTools">
            <BorderBox1 style="overflow: hidden;">
              <div class="boxtrafficRoutes">
                <div class="title">
                  <p class="way">运输方式</p>
                  <p class="passengerTraffic">客运量</p>
                  <p class="freight">货运量</p>
                </div>
                <ul class="title-ul">
                  <li v-for="item in listmeth" :key="item.img">
                    <p class="way">
                      <img :src="item.img" alt="">
                      <span>{{ item.title }}</span>
                    </p>
                    <p class="passengerTraffic">
                      <BorderBox7 :color="['#0a5e81']" backgroundColor="#0e253c">
                        <span>{{ item.k }}</span>
                      </BorderBox7>
                    </p>
                    <p class="freight">
                      <BorderBox7 :color="['#0a5e81']" backgroundColor="#0e253c" style="line-height: 100%;">
                        <span>{{ item.h }}</span>
                      </BorderBox7>
                    </p>
                  </li>
                </ul>
              </div>
            </BorderBox1>
          </div>
        </div>
        <div class="container contentCenter">
          <div class="borderOne recordNumberTab">
            <BorderBox8 style="overflow: hidden;">
              <h3 class="title lineOne">广东省交通数据情况</h3>
              <ul class="recordNumber">
                <li>
                  <p style="color: #347ef7;">67</p>
                  <h3>当前警情数(起)</h3>
                </li>
                <li>
                  <p style="color: #e8393a;">1.9</p>
                  <h3>区域拥堵指数</h3>
                </li>
                <li>
                  <p>1525</p>
                  <h3>当月违章数(次)</h3>
                </li>
              </ul>
            </BorderBox8>
          </div>
          <div class="Map">
            <div class="boxtrafficRoutes">
              <myEcharts width="100%" height="100%" :option="dituOption(ditu as any)"></myEcharts>
            </div>
          </div>
          <div class="realTimeDataCard">
            <div class="cardLeft">
              <h3>今日实时数据</h3>
              <p>全省数据</p>
              <ul>
                <li v-for="item, index in listcati" :key='item' :class="{ 'active': index === 0 }">{{ item }}</li>
              </ul>
            </div>
            <div class="cardRight">
              <myEcharts width="100%" height="100%" :option="pieOption"></myEcharts>
            </div>
          </div>
        </div>
        <div class="container contentRight">
          <div class="borderOne lllegalData">
            <BorderBox1>
              <div class="boxtrafficRoutes">
                <myEcharts width="100%" height="100%" :option="radarOption"></myEcharts>
              </div>
            </BorderBox1>
          </div>
          <div class="interProvincialData">
            <div class="boxtrafficRoutes">
              <myEcharts width="100%" height="100%" :option="zhOption(zh as any)"></myEcharts>
            </div>
          </div>
          <div class="borderOne interProvincialData">
            <BorderBox1>
              <div class="boxtrafficRoutes">
                <myEcharts width="100%" height="100%" :option="columnarOption"></myEcharts>
              </div>
            </BorderBox1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.Home {
  width: 1920px;
  height: 960px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
  padding: 20px;

  .title {
    display: flex;
    align-items: center;
    width: 100%;
    color: #fff;

    p {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .bigScreen {
    width: 100%;
    height: 100%;
    background-image: url(@/assets/pic/bg.png);
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .headerTab {
      width: 100%;
      height: 9%;
      background-image: url(@/assets/pic/headerBg.png);
      background-size: cover;
      background-position: center center;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      color: #a5ccf2;
    }

    .content {
      display: flex;
      justify-content: space-between;
      height: 90%;
      padding: 10px;

      .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }



      .contentRight {
        width: 28%;
      }

      .contentLeft {
        width: 28%;



        .way {
          width: 20%;
        }

        .passengerTraffic {
          width: 35%;

          span {
            color: #08baa1;
            font-weight: 600;
          }
        }

        .freight {
          width: 35%;

          span {
            color: #e3e20d;
            font-weight: 600;
          }
        }

        .title-ul {
          display: flex;
          flex-direction: column;
          width: 100%;

          li {
            width: 100%;
            height: 50px;
            background-color: #0828454d;
            border: 1px solid #0e406e;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
              width: 25px;
              height: 25px;
              display: block;
              margin-right: 3px;
            }

            p {
              display: flex;
              align-items: center;
              height: 100%;

            }
          }

          :deep(.border-box-content) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .borderOne {
        position: relative;
        width: 100%;
        height: 33%;
      }

      .boxtrafficRoutes {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .contentCenter {
        width: 42%;


        .recordNumberTab {
          position: relative;
          width: 100%;
          height: 15%;
          background-size: 100% 100%;
          text-align: center;
          background-color: #152131;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          .recordNumber {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 96%;
            background-color: #141e2b;

            li {
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              align-items: center;
              width: 32%;
              height: 80px;

              &:nth-child(1):after,
              &:nth-child(2):after {
                display: block;
                content: "";
                position: absolute;
                right: 0;
                width: 2px;
                height: 45px;
                background-image: linear-gradient(rgba(39, 126, 188, 0), #277ebc, rgba(39, 126, 188, 0));
              }


              p {
                font-size: 22px;
                color: #3adfc2;
                margin-bottom: 10px;
                font-family: newNum;
              }

              h3 {
                font-size: 15px;
                color: #c5c8cc;
              }
            }
          }



          :deep(.border-box-content) {
            text-align: center;
            padding: 10px;

            .title {
              justify-content: center;
              position: relative;

              &::before {
                display: block;
                content: "";
                position: absolute;
                right: 185px;
                bottom: 50%;
                transform: translateY(50%) rotate(180deg);
                width: 97px;
                height: 3px;
                background-image: url('@/assets/pic/5.png');
              }

              &::after {
                display: block;
                content: "";
                position: absolute;
                left: 185px;
                bottom: 50%;
                transform: translateY(50%);
                width: 97px;
                height: 3px;
                background-image: url('@/assets/pic/5.png');
              }
            }
          }

        }
      }
    }
  }

  .Map {
    position: relative;
    width: 100%;
    height: 83%;
    background: linear-gradient(to left, #06aae3, #06aae3) left top no-repeat,
      linear-gradient(to bottom, #06aae3, #06aae3) left top no-repeat,
      linear-gradient(to left, #06aae3, #06aae3) right top no-repeat,
      linear-gradient(to bottom, #06aae3, #06aae3) right top no-repeat,
      linear-gradient(to left, #06aae3, #06aae3) left bottom no-repeat,
      linear-gradient(to bottom, #06aae3, #06aae3) left bottom no-repeat,
      linear-gradient(to left, #06aae3, #06aae3) right bottom no-repeat,
      linear-gradient(to left, #06aae3, #06aae3) right bottom no-repeat;
    background-size: 2px 40px, 40px 2px, 2px 40px, 40px 2px, 2px 40px, 40px 2px, 2px 40px, 40px 2px;
  }

  .realTimeDataCard {
    position: absolute;
    bottom: 1px;
    left: 1px;
    width: 99.5%;
    height: 20%;
    border: 1px solid #23426b;
    background-color: #25406a66;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cardLeft {
      width: 45%;
      height: 100%;
      color: #fff;
      padding: 20px 40px;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        li {
          width: 33%;
          font-size: 15px;
          margin-top: 8px;
        }

        .active {
          color: #01dbe3;
        }
      }
    }

    .cardRight {
      width: 55%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
    }


  }

  .interProvincialData {
    position: relative;
    width: 100%;
    height: 33%;
  }
}
</style>