<template>
  <el-button size="medium"><slot/></el-button>
</template>

<script>
    import { defineComponent } from 'vue'
    import { ElButton } from 'element-plus'

    export default defineComponent({
        name: 'SunButton',
        components: { ElButton }
    })
</script>