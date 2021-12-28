<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">


      <div class="title">
        <h2>Vamos identificar sua instituição</h2>
      </div>

      <div class="card-name">
        <h3>Nome Completo</h3>
        <p>Coloque seu nome para vincularmos a esta conta e garantirmos segurança</p>
        <form >
        <input type="text" name="name" placeholder="Nome Sobrenome"><br/>
        <input type="submit" value="Continuar">
        <input type="reset" value="Cancelar">
        </form>
        

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

.title {
   grid-column: 2/15;
}

.card-name {
   grid-column: 2/13;
}

/*Card-Name*/


.card-name input[type="text"]{
  border: inherit;
  outline: none;
  border-bottom: 2px solid #0d0d0d;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 32px;
  color: #0d0d0d;
  width: 38vmax;
  margin-bottom: 64px;
}

.card-name input[type="text"]:focus {
  border-bottom: 2px solid #00A28C;
  color: #00A28C;
}

.card-name{
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}

.card-name p{
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}


.card-name input[type="submit"], .card-name input[type="reset"]{
  cursor:pointer;
  font-weight: 400;
  padding: 8px 16px;
  margin-left: 8px;
  float: right;
}

.card-name input[type="submit"]:hover{
  background-color: #549900;
}

.card-name input[type="reset"]:hover{
  background-color: #54990007;
}

.card-name input[type="submit"]{
  border: inherit;
  background-color: #68B400;
  color: white;
  border-radius: 5px;
  margin-right: 32px;
}

.card-name input[type="reset"]{
  color:#68B400 ;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68B400;


}

/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}

</style>
