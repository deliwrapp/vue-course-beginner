const { createApp } = Vue
import ComponentOption from './components/ComponentOption.js'

createApp({
  components: {
    ComponentOption
  },
  data() {
    return {
      message: "Hello",
      name: "OPTION",
      superTitle: "Bouuuhh",
      count: 0,
    }
  },
  methods: {
    plus() {
      this.count++
    },
    moins() {
      this.count--
    }
  },
  computed: {
    now() {
      return Date.now()
    },
    checkNumber() {
      return this.count > 5 ? true : false 
    }
  }
}).mount('#app')
