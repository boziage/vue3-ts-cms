<template>
  <div class="layout">
    <layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import layout from '@/components/layout.vue'

export default defineComponent({
  components: { layout },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
}
</style>
