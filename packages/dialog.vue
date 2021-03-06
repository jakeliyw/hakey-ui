<template>
    <!--    对话框遮罩-->
    <transition name="dialog-fade">
        <div class="ha-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <div class="ha-dialog" :style="{width,marginTop:top}">
                <div class="ha-dialog__header">
                    <slot name="title">
                        <span class="ha-dialog__title">{{title}}</span>
                    </slot>
                    <button class="ha-dialog__headerbtn" @click="handleClose">
                        <i class="el-icon-close"></i>
                    </button>
                </div>
                <div class="ha-dialog__body">
                    <!--                默认插槽-->
                    <slot></slot>
                </div>
                <div class="ha-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'haDialog',
  props: {
    // title可以双向绑定到标签上
    title: {
      type: String,
      // 看你传啥，不传默认为提示
      default: '提示',
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '15vh',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
// scoped会给当前组件的模板中的所有元素都添加一个随机的属性
// scoped会给当前组件中所有样式，都会在元素后面添加一个对应的属性选择器
// ::v-deep原理就是加了穿透，当前元素后面就不会出现属性选择器
.ha-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, .5);

    .ha-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        box-sizing: border-box;
        width: 30%;

        &__header {
            padding: 20px 20px 10px;

            .ha-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .ha-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .el-icon-close {
                    color: #909399;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            // 深度选择器scss ::v-deep less /deep/ css >>>
            ::v-deep .ha-button:first-child {
                margin-right: 20px;
            }
        }
    }
}

.dialog-fade-enter-active {
    animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
    animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
    0% {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes dialog-fade-out {
    0% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
    100% {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
    }
}

// 代表动画进入
.dialog-fade-enter-active {
    animation: fade 3s;
}
.dialog-fade-leave-active{
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
