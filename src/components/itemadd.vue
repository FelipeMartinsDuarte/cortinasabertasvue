<template>
    <div>
         <img v-bind:src="'data:image/png;base64,'+Base64">
         <span>{{name}}</span>
    </div>
</template>

<script>
export default {
    name:"Teamitem",
    props:{
        name: String,
        type: String,
        Base64: String,
    }
}
</script>

<style scoped>


div{
    font-weight: 100;
    color: #006154;
    display: flex;
    flex-direction: row;
    font-weight: 100;
    align-items: center;
}

div img{
    padding-right: 8px;
}

</style>