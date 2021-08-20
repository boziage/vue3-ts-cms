<template>
  <div class="user">
    <div class="search">
      <bo-form v-bind="searchFormconfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoForm from '@/base-ui/form'
import { searchFormconfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    BoForm
  },
  setup() {
    return {
      searchFormconfig
    }
  }
})
</script>

<style scoped></style>
