<template>
  <header>
    <div class="container">
      <img src="../assets/logo.svg" alt="logomarca cortinas abertas" />
      </div>
  </header>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>

header{
    display: grid;
    grid-template-columns: 37px 74px 74px 74px 74px;
    grid-gap: 10px;
}

.container {
  grid-column:2/4;
  width: 100vw;
  height: 36px;
}

.container img {
  width: auto;
  height: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
}

</style>
