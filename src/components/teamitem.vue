<template>
    <div>
         <img v-bind:src="'data:image/png;base64,'+Base64">
         <h4>{{name}}</h4>
    </div>
</template>

<script>
export default {
    name:"teamitem",
    props:{
        name: String,
        type: String,
        Base64: String
    }
}
</script>

<style scoped>

</style>