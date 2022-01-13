<template>
    <div>
        <div class="wrap">
         <img v-if="imgUrl == 0" v-bind:src="'data:image/png;base64,'+Base64" :alt="name">
         <img v-if="imgUrl != 0" v-bind:src="imgUrl" :alt="name" class="uploadimage">
         <img src="" alt="" srcset="">
        </div>
         
    </div>
</template>

<script>
export default {
    name:"spotitem",
    props:{
        name: String,
        type: String,
        Base64: String,
        imgUrl: [String,Number],
    }
}
</script>

<style scoped>


div{
    margin-left: 2px;
    margin-top: 2px;
    display: flex;
    flex-direction: row;
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

div .wrap img[class="uploadimage"]{
    border-radius: 5px;
    width: 100%;
    height: 100%;
}



</style>