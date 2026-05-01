import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'UiLoadingIndicator',
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2000
    },
    height: {
      type: Number,
      default: 4
    },
    color: {
      type: [String, Boolean],
      default: 'bg-primary'
    },
    errorColor: {
      type: String,
      default: 'bg-error'
    },
    estimatedProgress: {
      type: Function as unknown as () => (
        duration: number,
        elapsed: number
      ) => number,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } =
      useLoadingIndicator({
        duration: props.duration,
        throttle: props.throttle,
        estimatedProgress: props.estimatedProgress
      })

    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    })

    return () =>
      h(
        'div',
        {
          class: [
            'absolute bottom-0 left-0 right-0',
            error.value ? props.errorColor : props.color,
            {
              'opacity-100': isLoading.value,
              'opacity-0': !isLoading.value
            }
          ],
          style: {
            pointerEvents: 'none',
            width: 'auto',
            height: `${props.height}px`,
            backgroundSize: `${(100 / progress.value) * 100}% auto`,
            transform: `scaleX(${progress.value}%)`,
            transformOrigin: 'left',
            transition: 'transform 0.1s, height 0.4s, opacity 0.4s',
            zIndex: 999999
          }
        },
        slots
      )
  }
})
