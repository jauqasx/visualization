<script setup lang='ts'>
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  LineChart
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import type { TitleComponentOption, TooltipComponentOption, GridComponentOption, DatasetComponentOption, } from 'echarts/components'
import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts'
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted, ref, watch } from 'vue';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型ex
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const prosp = withDefaults(defineProps<{
  width?: string
  height?: string
  option?: ECOption | any
  callback?: (myChart: echarts.ECharts | undefined) => void
}>(), {
  width: '500px',
  height: '500px',
  option: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
})


const myechart = ref<HTMLDivElement>()
let myChart: echarts.ECharts
const myChartinit = () => {
  if (!myechart.value) return
  myChart = echarts.init(myechart.value)
  prosp.option && myChart.setOption(prosp.option, true);

  if (prosp.callback) {
    prosp.callback(myChart)
  }
}
onMounted(() => {
  myChartinit()
})

watch(prosp, () => {
  myChartinit()
}, {
  deep: true
})
</script>

<template>
  <div ref="myechart" :style="{ width, height }" class="myechart">

  </div>
</template>

<style lang='less' scoped>
.myechart {
  position: relative;
  width: 100%;
  height: 33%;
}
</style>