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

    <h2 id="plans">Selecione o tipo de ánuncio</h2>

    <section class="plan free">
      <figure>
        <img src="../../assets/Illustrations/free.svg" alt="Plano Gratuito para Divulgar">
        <figcaption><h2>Gratuito</h2></figcaption>
      </figure>
      <h1>Exposição baixa</h1>
      <ul>
        <li>
          <img src="../../assets/Illustrations/have.svg" alt="Plans">
          <span>Exposição baixa</span>
        </li>
        <li>
          <img src="../../assets/Illustrations/have.svg" alt="Plans">
          <span>Relatórios semanais</span>
        </li>
        <li>
          <img src="../../assets/Illustrations/donthave.svg" alt="Plans">
          <span>Serviço de propaganda</span>
        </li>
      </ul>
      <h3>R$:0,00</h3>
      <p>Pelo serviço</p>
      <a>Escolher gratuito</a>
    </section>

    <section class="plan premium">
      <figure>
        <img src="../../assets/Illustrations/premium.svg" alt="Plano Premium para Divulgar">
        <figcaption><h2>Premium</h2></figcaption>
      </figure>
      <h1>Exposição máxima</h1>
      <ul>
        <li>
          <img src="../../assets/Illustrations/have.svg" alt="Plans">
          <span>Exposição máxima </span>
        </li>
        <li>
          <img src="../../assets/Illustrations/have.svg" alt="Plans">
          <span>Relatórios semanais</span>
        </li>
        <li>
          <img src="../../assets/Illustrations/have.svg" alt="Plans">
          <span>Serviço de propaganda</span>
        </li>
      </ul>
      <h3>R$:50,00</h3>
      <p>Pelo serviço</p>
      <a>Escolher premium</a>
    </section>

    <section class="pay">
      <div id="payinfo">
        <h1>Revisão pedido</h1>
        <hr>
        <div class="flexitem">
          <p>Premium</p>
          <h4>R$50,00</h4>
        </div>
        <p class="description">
          Sem juros, sem taxas e sua instituição deixando se ser fantasma e sendo encontrada por 
          quem precisa 
        </p>
        <ul>
          <li>
            <img src="../../assets/Illustrations/have.svg" alt="Plans">
            <span>Exposição máxima</span>
          </li>
          <li>
            <img src="../../assets/Illustrations/have.svg" alt="Plans">
            <span>Relatórios semanais</span>
          </li>
          <li>
            <img src="../../assets/Illustrations/have.svg" alt="Plans">
            <span>Serviço de propaganda</span>
          </li>
          <li>
            <img src="../../assets/Illustrations/have.svg" alt="Plans">
            <span>Duração 30 dias</span>
          </li>
        </ul>
      </div>
      <a>Realizar Pedido</a>
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
@import '../../../public/default.css';
@import '../../../public/normalizer.css';
@import '../../../public/reset.css';

/*Grid*/
#content-wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.title {
  grid-column: 2/13;
}

.price {
  grid-column: 2/13;
}

/*Plans Grid*/
.free{
  grid-column: 2/6;
}

.premium{
  grid-column: 6/10;
}

.pay{
  grid-column: 10/14;
  position: relative;
}

h2[id="plans"]{
  grid-column: 2/14;
}

/*Plans*/
 h2[id="plans"]{
  font-weight: 700;
  font-size: 16px;
  margin-left: 16px;
}

.plan figure{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plan{
  border: 2px solid #E1E3E2;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}

.plan h2{
  font-size: 1.3rem;
  color: #007C6B;
  margin-top: 16px;
}

.plan h1{
  font-size: 1.8rem;
  margin-top: 16px;
  color: #006154;
}

.plan ul{
  margin-top: 8px;
}

.plan ul li {
  margin: 22px 0;
  display: flex;
  align-items: center;
}

.plan ul li span{
  margin-left: 8px;
  font-size: 1.1rem;
  font-weight: 200;
}

.plan h3{
  margin-top: 12px;
  font-size: 2.5rem;
  color: #006154;
  font-weight: 500;
}

.plan p{
  margin-top: 8px;
  font-weight: 100;
  font-size: 0.8rem;
}

.plan a{
  font-weight: 600;
  color: #00A28C;
  cursor: pointer;
  margin: 32px 0 8px 0;
}


/*Pay*/
.pay #payinfo{
  border: 2px solid #E1E3E2;
  border-radius: 5px;
  padding: 16px;
}

.pay #payinfo hr {
  border: 1px solid #E1E3E2;
}

.pay #payinfo h1{
  color: #006154;
  padding: 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.flexitem{
  margin-top: 8px;
  font-size: 1.2rem;
  color: #006154;
  display: flex;
  justify-content: space-between;
}

.flexitem h4{
  font-size: 1.2rem;
  color: #00A28C;
}

.pay #payinfo  p.description {
  margin-top: 8px;
  font-weight: 100;
  text-align: left;
}

.pay #payinfo ul {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pay #payinfo ul li{
  padding: 6px 0;
  display: flex;
  align-items: center;
}

.pay #payinfo ul li span{
  margin-left: 4px;
  font-weight: 100;
  color: #006154;
}

.pay #payinfo ul li img{
  height: 0.6rem;
  width: auto;
}

.pay a{
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  margin-top: 16px;
  width: 100%;
  font-size: 1.1rem;
  padding: 13px 0;
  background-color:#C5B800;
  color: white;
  border-radius: 30px;
  text-align: center;
  
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
.title {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
}

.title h1{
  margin-bottom: 16px;
  font-weight: 700;
}

.title p{
  color:#006154;
  margin-bottom: 8px;
  font-weight: 600;
}

.title div {
  width: 75%;
}
</style>