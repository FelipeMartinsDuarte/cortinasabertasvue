<template>
    <div>
        <div class="wrap">
         <img v-bind:src="'data:image/png;base64,'+Base64" :alt="name">
        </div>
        <div class="column">
        <span>{{name}}</span>
        <input type="text" placeholder="1">
        </div>
    </div>
</template>

<script>
export default {
    name:"quantityitem",
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
}

div .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #006154;
    height: 59px;
    width: 59px;
    margin-right: 8px;
    margin-bottom: 8px;
}

div .column{
    display: flex;
    flex-direction: column;
}

div .column {
    width: 65%
}

.column input[type="text"]{
  background-color: inherit;
  margin-right: 8px;
  border: inherit;
  outline: none;
  border-bottom: 1px solid #0d0d0d70;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  color: #0d0d0d;
  width: 33vmax;
  margin-bottom: 32px;
}

.column input[type="text"]:focus {
  border-bottom: 1px solid #00a28c83;
  color: #00a28c;
}

.column input[type="text"]{
  width: 4vmax;
}

</style>