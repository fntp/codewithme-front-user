<!-- 
/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */
 -->


<template>
  <div>
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
  import request from '../api/service/userService'
  // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
  import * as echarts from 'echarts/core'
  // 引入柱状图图表，图表后缀都为 Chart
  import { BarChart } from 'echarts/charts'
  // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
  } from 'echarts/components'
  // 标签自动布局，全局过渡动画等特性
  import { LabelLayout, UniversalTransition } from 'echarts/features'
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
  import { CanvasRenderer } from 'echarts/renderers'
  import { onMounted } from 'vue'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    setup() {
      onMounted(() => {
        //需要获取到element,所以是onMounted的Hook
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '总用户量' },
          tooltip: {},
          xAxis: {
            data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8'],
          },
          yAxis: {},
          series: [
            {
              name: '用户量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        })
        window.onresize = function () {
          //自适应大小
          myChart.resize()
        }
      })
      var promiseData = request.getLeetcodeUserRecentlyExercisesInfo({
        userSlug: 'stickpoint',
      })
      console.log(promiseData)
    },
  }
</script>

<style scoped lang="scss"></style>
