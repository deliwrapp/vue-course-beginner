<script>
export default {
    name: "MyTeleportComponent",
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleModal() {
            console.log("toggleModal", this.open)
            this.open = !this.open
        }
    }
}
</script>

<template>
  <button @click="toggleModal">Open Modal</button>

  <teleport to="#chewbi">
    <p>Hello from the modal!</p>
    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #a52a2a8c;
}
</style>