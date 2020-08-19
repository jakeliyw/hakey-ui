<template>
  <label class="ha-radio" :class="{'is-checked': label === model}">
        <span class="ha-radio_input">
            <span class="ha-radio_inner"></span>
            <input
              type="radio"
              class="ha-radio__original"
              :value="label"
              :name="name"
              v-model="model"
            >
        </span>
    <span class="ha-radio_label">
            <slot></slot>
      <!--            如果没有传内容，我们就把label当成内容-->
            <template v-if="!$slots.default">
                {{label}}
            </template>
        </span>
  </label>
</template>

<script>
export default {
  name: 'haRadio',
  inject: {
    RadioGroup: {
      default: '',
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    value: null,
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的input事件
        this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      },
    },
    isGroup () {
      return !!this.RadioGroup
    },
  },
}
</script>

<style lang="scss">
.ha-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .ha-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .ha-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }

    .ha-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .ha-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.ha-radio.is-checked {
  .ha-radio_input {
    .ha-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .ha-radio_label {
    color: #409eff;
  }
}
</style>
