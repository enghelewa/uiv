import {mergeData} from 'vue-functional-data-merge'

export default {
  functional: true,
  render (h, {props, data}) {
    return h(
      'div',
      mergeData(data, {
        class: {
          'progress-bar': true,
          'progress-bar-striped': props.striped,
          'active': props.striped && props.active,
          [`progress-bar-${props.type}`]: Boolean(props.type)
        },
        style: {
          minWidth: props.minWidth ? '2em' : null,
          width: `${props.value}%`
        },
        attrs: {
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuenow': props.value,
          'aria-valuemax': 100
        }
      }),
      props.label ? (props.labelText ? `<span>${props.labelText}</span>` : `<span>${props.value}%</span>`) : null
    )
  },
  props: {
    value: {
      type: Number,
      required: true,
      validator (value) {
        return value >= 0 && value <= 100
      }
    },
    labelText: String,
    type: String,
    label: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
