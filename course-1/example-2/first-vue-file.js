/* 
let myButton = document.querySelector("#btn")

myButton.addEventListener("click", () => {
    let color = myButton.dataset.colorAttribute;
    color = myButton.getAttribute("data-color-attribute");
    myButton.style.backgroundColor = color;
})
 */
import ButtonCounter from './ButtonCounter.js'
const { createApp, ref } = Vue;

/*   createApp({
    setup() {
      return {
        count: ref(0),
        name: "John",
        message: "Bonjour"

      }
    }
  }).mount('#app') */

const monApp= {
    components: {
        ButtonCounter
    },
    data() {
      return {
        message: 'Hello You!',
        name: "John",
        sentence: "C'est finit !",
        count: 0,
        count2: 1,
        items: [
            {
                firstname: "Johne",
                lastname: "doe"
            },
            {
                firstname: "Jane",
                lastname: "doe"
            },
            {
                firstname: "Robert",
                lastname: "doe"
            }
        ]
      }
    },
    methods: {
        increment() {
            //this.count2 = this.count2 + 1
            this.count2++
        },
        decrement() {
            //this.count2 = this.count2 - 1
            this.count2--
        }
    },
    mounted() {
        let value = 10
        this.count2 = value
        this.increment()
    },
    beforeCreated() {

    }
  }

createApp(monApp).mount('#app')


