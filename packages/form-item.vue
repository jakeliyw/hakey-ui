<template>
    <div class="ha-form-item">
        <label class="ha-form-item_label" :style="{width: this.Form.labelWidth}">{{label}}</label>
        <div class="ha-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'haFormItem',
  props: {
    label: String,
  },
  inject: ['Form'],
}
</script>

<style lang="scss">

</style>
