<template>
  <div id="app">
    <Menu />
    <Breakline />
    <Backbutton />

    <div id="content-wrap">


      <div class="title">
        <h1>CADASTRAR</h1>
      </div>

    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Breakline from "./components/breakline.vue";
import Backbutton from "./components/backbutton.vue";

export default {
  name: "App",
  components: {
    Menu,
    Breakline,
    Backbutton
  },
};
</script>

<style>
/*Grid*/
#content-wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.title {
  grid-column: 5/15;
}

/*Tittle Description */
.title {
  width: 26vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

</style>
