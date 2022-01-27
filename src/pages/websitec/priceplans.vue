<template>
 <div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <div>
        <p>Etapa 2 de 2</p>
        <h1>Para terminar, defina um preço aos serviços</h1>
      </div>
      <figure>
       <img src="../../assets/Illustrations/womenhelp.svg" alt="Casa de Repouso, Neto Visitando Idoso">
      </figure>
    </header>

    <section class="card price">
     <header>
     <h2>Qual o preço mensal?</h2>
     </header>
     <fieldset>    
      <span>á</span>
     </fieldset>
     <hr class="subdivision"/>
     <form id="cancelsend">
       <input type="reset" value="Cancelar">
       <a href="#">Continuar</a>
     </form>
    </section>
    
    
  </main>
 </div>
</template>

<script>
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";
export default {
 name:"priceplans",
 components:{
  Menu,
  Breakline,
 },
 data(){
    return{
     }
 }
}
</script>

<style scoped>
/*Grid*/
#content-wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.title {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  grid-column: 2/14;
}

.price {
  grid-column: 2/13;
}

.title div {
  width: 75%;
}

/*Send Reset*/
hr[class="subdivision"]{
  color: #0d0d0d41;
  margin-bottom: 32px;
}
form[id="cancelsend"]{
  float: right;
}
form[id="cancelsend"] input[type=reset], form[id="cancelsend"] a{
  color: #68B400;
  background-color: inherit;
  text-decoration: none;
  cursor: pointer;
  border: inherit;
  margin-bottom: 8px;
}
form[id="cancelsend"] a{
  margin-left: 16px;
  background-color: #68B400;
  color: white;
  border-radius: 5px;
  padding: 8px 16px;
}

/*Card - Errors*/
.card {
  border: 2px solid #0d0d0d31;
  width: 100%;
  margin-bottom:32px;
  border-radius: 5px;
  padding: 16px;
}

.card h2:first-of-type{
  font-weight: 700;
  font-size: 16px;
}

.card p:first-of-type {
  margin: 8px 0 16px 0;
  font-weight: 200;
  font-size: 16px;
}

/*Send and Reset */
.card form[class="sendreset"] hr[class="sendform"] {
  opacity: 0.5;
  margin-bottom: 16px;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"] {
  color: #0D0D0D;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #0D0D0D;
  padding: 8px 16px;
}

.card form[class="sendreset"] a[id="continue"] {
  text-decoration: none;
  border: inherit;
  background-color: #0D0D0D;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"],
.card form[class="sendreset"] a[id="continue"] {
  cursor: pointer;
  font-weight: 400;
  margin-left: 8px;
  float: right;
  align-items: center;
}

.error{
  display: inline-block;
  color: red;
  vertical-align: middle;
  margin-bottom: 8px;
}

.error i{
  margin-right: 4px;
}

/*Tittle Description */
.title h1{
  margin-bottom: 16px;
  font-weight: 700;
}

.title p{
  color:#006154;
  margin-bottom: 8px;
  font-weight: 600;
}
</style>