<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="7">
        <bo-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </bo-card>
      </el-col>
      <el-col :span="10">
        <bo-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </bo-card>
      </el-col>
      <el-col :span="7">
        <bo-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </bo-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <bo-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </bo-card>
      </el-col>
      <el-col :span="12">
        <bo-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsSale"></bar-echart>
        </bo-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import BoCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    BoCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const value: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        value.push(item.goodsCount)
      }

      return { xLabels, value }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const value: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        value.push(item.goodsFavor)
      }

      return { xLabels, value }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
