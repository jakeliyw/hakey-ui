<template>
    <div class="ha-input" :class="{'ha-input--suffix': showSuffix}">
<!--        双重判断-->
        <input
                class="ha-input__inner"
                :class="{'is-disabled':disabled}"
                :placeholder="placeholder"
                :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
                :disabled="disabled"
                :value="value"
                @input="handleInput"
        >
        <span class="ha-input__suffix" v-if="showSuffix">
            <i class="el-input__icon el-icon-circle-close" v-if="clearable && value" @click="clear"></i>
            <i class="el-input__icon el-icon-view"
               v-if="showPassword"
               :class="{'ha-icon-view-active': passwordVisible}"
               @click="handlePassword"
            ></i>
        </span>
    </div>
</template>

<script>
export default {
  name: 'haInput',
  data () {
    return {
      // 用于控制是否显示文本
      passwordVisible: false,
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    },
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 将内容清空
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
  },
}
</script>

<style lang="scss">
.ha-input {
    width: 180px;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .ha-input__inner {
        cursor: pointer;
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #000;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

.ha-input--suffix {
    .ha-input__inner {
        padding-right: 30px;
    }

    .ha-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }

        .ha-icon-view-active {
            color: blue;
        }
    }
}
</style>
