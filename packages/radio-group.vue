<template>
  <div class="ha-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'haRadioGroup',
  provide () {
    return {
      RadioGroup: this,
    }
  },
  props: {
    // ha-radio-group接收到value的值
    // 将来还需要触发 当前组件的input事件
    value: null,
  },
}
</script>

<style scoped lang="scss">

</style>
