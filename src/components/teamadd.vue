<template>
    <div>
        <div class="wrap">
         <img v-bind:src="'data:image/png;base64,'+Base64" :alt="name">
        </div>

         <span>{{name}}</span>
    </div>
</template>

<script>
export default {
    name:"teamitem",
    props:{
        name: String,
        type: String,
        Base64: String,
    }
}
</script>

<style scoped>


div{
    margin-left: 2px;
    margin-top: 2px;
    font-weight: 100;
    color: #006154;
    display: flex;
    flex-direction: row;
    font-weight: 100;
    align-items: center;
}

div .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #006154;
    border-radius: 5px;
    height: 47px;
    width: 47px;
    margin-right: 8px;
    margin-bottom: 8px;
}

</style>