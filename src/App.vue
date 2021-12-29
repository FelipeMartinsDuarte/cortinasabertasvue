<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">


      <div class="title">
        <h3>Vamos identificar sua instituição</h3>
      </div>

      <div class="card-name">
        <h4>Nome Completo</h4>
        <p>Clique e Coloque seu nome para que possamos proteger e vincular-lo a sua conta </p>
        <form >
        <input type="text" name="name" placeholder="Nome Sobrenome"><br/>
        <a href="#card-cnpj">Continuar</a>
        <input type="reset" value="Cancelar">
        </form>
      </div>

      <div class="card-cnpj" id="card-cnpj">
        <h4>Coloque CNPJ constituído ou CPF</h4>
        <p>Coloque a documentação para garantimos a autenticidade e a legalização perante a Vigilância Sanitária</p>
        <form >
        <input type="text" name="name" placeholder="00.00.00/000-00"><br/>
        <a href="#card-nursinghomename">Continuar</a>
        <input type="reset" value="Cancelar">
        </form>
      </div>

      <div class="card-nhn" id="card-nursinghomename">
        <h4>Coloque o nome da instituição</h4>
        <p>Coloque o nome cujo a instituição será mostrada pelo site ao cliente</p>
        <form >
        <input type="text" name="name" placeholder="Nome da Clinica" maxlength="30" v-on:keyup="countdown"
        v-model="message"><br/>
        <div id="the-count">
          <span id="current" v-bind:class="{'text-danger': hasError }">{{remainingCount}}</span>
          <span id="maximum">/ 30</span>
        </div>
        <a href="#">Continuar</a>
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
  data (){
    return{
    maxCount: 30,
    remainingCount: 30,
    message: '',
    hasError: false
    }
  },
  methods:{
      countdown: function() {
      this.remainingCount = this.maxCount - this.message.length;
      this.hasError = this.remainingCount < 0;
    }
  }
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

.card-cnpj {
   grid-column: 2/13;
}
.card-nhn {
   grid-column: 2/13;

}

/*Card-Name*/
.card-name input[type="text"], .card-cnpj input[type="text"], .card-nhn input[type="text"]{
  border: inherit;
  outline: none;
  border-bottom: 2px solid #0d0d0d;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  color: #0d0d0d;
  width: 38vmax;
  margin-bottom: 32px;
}

.card-name input[type="text"]:focus {
  border-bottom: 2px solid #00A28C;
  color: #00A28C;
}

.card-name, .card-cnpj, .card-nhn{
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}

.card-name p, .card-cnpj p, .card-nhn p:first-of-type{
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}


.card-name a, .card-name input[type="reset"], .card-cnpj a, .card-cnpj input[type="reset"],.card-nhn a, .card-nhn input[type="reset"]{
  cursor:pointer;
  font-weight: 400;
  padding: 8px 16px;
  margin-left: 8px;
  float: right;
}

.card-name a:hover{
  background-color: #549900;
}

.card-name input[type="reset"]:hover{
  background-color: #54990007;
}


.card-name a, .card-cnpj a, .card-nhn a{
  text-decoration: none;
  border: inherit;
  background-color: #68B400;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

.card-name input[type="reset"], .card-cnpj input[type="reset"], .card-nhn input[type="reset"]{
  color:#68B400 ;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68B400;


}

/*card-cnpj*/

.card-cnpj{
  margin-top: 48px;
}

.card-cnpj input[type="text"]:focus {
  border-bottom: 2px solid #00A28C;
  color: #00A28C;
}

.card-cnpj a:hover{
  background-color: #549900;
}

.card-cnpj input[type="reset"]:hover{
  background-color: #54990007;
}

/*Card nursing home name */

.card-nhn{
  margin-top: 48px;
}

.card-nhn input[type="text"]:focus {
  border-bottom: 2px solid #00A28C;
  color: #00A28C;
}

.card-nhn a:hover{
  background-color: #549900;
}

.card-nhn input[type="reset"]:hover{
  background-color: #54990007;
}

.card-nhn #the-count {
  width:38vmax ;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.1rem 0 0 0;
  margin-right: 19%;
  font-size: 0.875rem;
  margin-bottom: 32px;
}

.card-nhn input[type="text"]{
  margin-bottom: 4px;
}

/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}

</style>
