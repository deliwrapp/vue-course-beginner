export default {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button id="fix" @click="count++">
        You clicked me {{ count }} times.
      </button>`
  }