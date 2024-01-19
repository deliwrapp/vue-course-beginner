const { createApp, ref } = Vue
import ComponentCompo from "./components/ComponentCompo.js"

createApp({
  setup() {
    const message = ref('Hello')
    console.log(message.value)
    const count = ref(0)
    const name = ref("COMPOSITION")
    return {
      message,
      name,
      count,
    }
  },
  components: {
    ComponentCompo
  },
}).mount('#app-compo')