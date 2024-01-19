export default {
    data() {
      return { count: 10 }
    },
    props: {
        title: {
            type: String,
            required: false,
            default: "Hello"
        },
        likes: Number
    },
    template: `
    <div>count is {{ count }}</div>
    <div>The title is {{ title }}</div>
    `
}