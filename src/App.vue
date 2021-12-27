<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">

      <div id="backbutton">
        <img src="./assets/backarrow.svg" alt="botão voltar" />
        <span>Voltar</span>
      </div>

      <div class="title">
        <h1>CADASTRAR</h1>
      </div>

    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Breakline from "./components/breakline.vue";


export default {
  name: "App",
  components: {
    Menu,
    Breakline
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

#backbutton {
  grid-column: 2/15;
}

.title {
  grid-column: 5/15;
}

/* Back button */
#backbutton {
  padding-bottom: 32px;
}

#backbutton span {
  font-weight: 600;
  padding-left: 8px;
  color: #006154;
  font-size: 12px;
}

#backbutton span:hover {
  color: #00584d;
  cursor: pointer;
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
