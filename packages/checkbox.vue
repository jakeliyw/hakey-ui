<template>
    <label class="ha-checkbox" :class="{'is-checked' : model}">
    <span class="ha-checkbox_input">
      <span class="ha-checkbox_inner"></span>
      <input type="checkbox"
             class="ha-checkbox_original"
             :name="name"
             v-model="model"
             :value="label"
      >
    </span>
        <span class="ha-checkbox_label">
      <slot></slot>
            <template v-if="!$slots.default">
                {{label}}
            </template>
    </span>
    </label>
</template>

<script>
export default {
  name: 'haCheckBox',
  inject: {
    CheckboxGroup: {
      default: '',
    },
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      },
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ha-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;

    .ha-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .ha-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);

            &:after {
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }

        .ha-checkbox__original {
            opacity: 0;
            outline: none;
            position: absolute;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }

    .ha-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}

// 选中的样式
.ha-checkbox.is-checked {
    .ha-checkbox_input {
        .ha-checkbox_inner {
            background-color: #409eff;
            border-color: #409eff;
        }

        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }

    .ha-checkbox_label {
        color: #409eff;
    }
}
</style>
