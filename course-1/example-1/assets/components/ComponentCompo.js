const { ref, defineProps } = Vue

export default {
  setup() {
    const count = ref(0)
    return { count }
    const props = defineProps({
      title: {
        type: String,
        required: false,
        default: "Hello"
      },
    })
  },
  template: `<div>count is {{ count }}</div>`
}