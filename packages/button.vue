<template>
    <!--        将配置对象映射到标签，控制类名达到效果-->
    <button class="ha-button" :class="[`ha-button--${type}`,{
    'is-plain': plain,
    'is-round': round,
    'is-circle':circle,
    'is-disabled':disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
    >
        <i v-if="icon" :class="icon"></i>
        <!--        如果没有传入任何的内容-->
        <span v-if="$slots.default">
          <slot></slot>
    </span>
    </button>
</template>

<script>
export default {
  name: 'haButton',
  props: {
    type: {
      // 数据类型校验
      type: String,
      // 默认校验 ，不传类型默认default
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style scoped lang="scss">
.ha-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }

    &--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;

        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }

        &.is-plain {
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;

            &:hover,
            &:focus {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
            }
        }
    }

    &--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;

        &:hover,
        &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }

        &.is-plain {
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;

            &:hover,
            &:focus {
                background: #67c23a;
                border-color: #67c23a;
                color: #fff;
            }
        }
    }

    &--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;

        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }

        &.is-plain {
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6;

            &:hover,
            &:focus {
                background: #909399;
                border-color: #909399;
                color: #fff;
            }
        }
    }

    &--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;

        &:hover,
        &:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }

        &.is-plain {
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1;

            &:hover,
            &:focus {
                background: #e6a23c;
                border-color: #e6a23c;
                color: #fff;
            }
        }
    }

    &--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;

        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }

        &.is-plain {
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4;

            &:hover,
            &:focus {
                background: #f56c6c;
                border-color: #f56c6c;
                color: #fff;
            }
        }
    }

    // 朴素按钮样式
    .my-button.is-plain {
        &:hover,
        &:focus {
            background: #fff;
            border-color: #489eff;
            color: #409eff;
        }
    }

    .my-button-primary.is-plain {
        color: #409eff;
        background: #ecf5ff;

        &:hover,
        &:focus {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }

    .my-button-success.is-plain {
        color: #67c23a;
        background: #c2e7b0;

        &:hover,
        &:focus {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }

    .my-button-info.is-plain {
        color: #909399;
        background: #d3d4d6;

        &:hover,
        &:focus {
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }

    .my-button-warning.is-plain {
        color: #e6a23c;
        background: #f5dab1;

        &:hover,
        &:focus {
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff;
        }
    }

    .my-button-danger.is-plain {
        color: #f56c6c;
        background: #fbc4c4;

        &:hover,
        &:focus {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }

    &.is-round {
        border-radius: 20px;
        padding: 12px 23px;
    }

    &.is-circle {
        border-radius: 50%;
        padding: 12px;
    }

    // icon配套样式
    .my-button [class*=my-icon-] + span {
        margin-left: 5px;
    }

    // disabled属性
    .my-button.is-disabled {
        cursor: no-drop;
    }

}
</style>
