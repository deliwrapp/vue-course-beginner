<script>
import MyTeleportComponent from '../components/Content/MyTeleportComponent.vue';
export default { 
    name: "HomePage",
    components: {
        MyTeleportComponent
    }
}
</script>

<template>
    <section>
        <h1>I'm Home</h1>
        <my-teleport-component/>
    </section>
</template>