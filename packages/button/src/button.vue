<template>
  <el-button><solt/>按钮</el-button>
</template>

<script>
    import { defineComponent } from 'vue'
    import { ElButton } from 'element-plus'

    export default defineComponent({
        name: 'SunButton',
        components: { ElButton }
    })
</script>