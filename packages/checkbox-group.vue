<template>
    <div class="ha-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'haCheckboxGroup',
  props: {
    value: {
      type: Array,
    },
  },
  provide () {
    return {
      CheckboxGroup: this,
    }
  },
  isChecked () {
    // 如果是group包裹，label是否再model中
    // 如果没有group包裹，直接使用model
    return this.isGroup ? this.model.includes(this.label) : this.model
  },
}
</script>

<style scoped>

</style>
