<template>
<div class="wrap">
<div id="breakline"></div>
</div>
</template>

<script>
export default {
    name:"breakliine"
}
</script>

<style scoped>
    #wrap {
    display: grid;
    grid-template-columns: 21% repeat(12, 1fr) 21%;
    gap: 20px;
    }

    #breakline {
    grid-column: 1/15;
    }


 #breakline {
  margin-top: 16px;
  margin-bottom: 32px;
  -webkit-box-shadow: 0px 3px 6px #8a8a8a7c;
  -moz-box-shadow: 0px 3px 6px #8a8a8a7c;
  box-shadow: 0px 3px 6px #8a8a8a7c;
  border-bottom: 1px solid transparent;
}
</style>