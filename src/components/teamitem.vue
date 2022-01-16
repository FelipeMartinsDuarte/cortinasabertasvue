<template>
    <figure>
         <img v-bind:src="'data:image/png;base64,'+Base64">
         <figcaption><span>{{name}}</span></figcaption>
    </figure>
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


figure{
    width: 100%;
    position: relative;
    font-weight: 100;
    color: #006154;
    display: flex;
    flex-direction: row;
    font-weight: 100;
    align-items: center;
}

figure img{
    padding-right: 8px;
}

figure::after{
  content: "";
  position: absolute;
  z-index: 1;
  background: url(../assets/selecticon.svg) no-repeat center center;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  background-size: 8px;
  height: 100%;
  width: 8px;
}

</style>