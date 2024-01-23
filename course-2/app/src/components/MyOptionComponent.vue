<!-- Ce composant est en mode OPTION API -->

<script >
  import SubComponent from './SubComponent.vue';
  export default {
    name: "MyOptionComponent",
    components: {
      SubComponent
    },
    props: {
      msg: String
    }
  }
</script>

<template>
  <section>
    <h2>Hello</h2>
    <p>{{msg}}</p>
    <SubComponent/>
  </section>
</template>
