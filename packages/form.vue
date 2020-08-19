<template>
    <div class="ha-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'haForm',
  props: {
    model: {
      type: Object,
      require: true,
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  provide () {
    return {
      Form: this,
    }
  },
}
</script>

<style lang="scss">
.ha-form-item {
    margin-bottom: 25px;

    .ha-form-item_label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .ha-form-item_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
