<template>
<div class="wrap">
  <Menu />
  <Breakline />
  <main >
      <header class="pr">
        <h1>Vamos identificar sua instituição</h1>
      </header>

      <section class="card cnpj">
        <header>
          <h2>Coloque CNPJ constituído</h2>
          <p>
            Coloque a documentação para garantimos a autenticidade e a legalização
            perante a Vigilância Sanitária
          </p>
        </header>
        <fieldset>
          <TheMask mask="##.###.###/####-##" v-model="cnpj" type="text" name="cnpj" id="cnpj"/>
          <form class="sendreset">
            <a href="#" id="continue" @click="autocomplete">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
      </section>

      <section class="card nhn">
        <header>
          <h2>Coloque o nome da instituição</h2>
          <p>
            Coloque o nome cujo a instituição será mostrada pelo site ao cliente
          </p>
        </header>
        <fieldset>
          <label for="nameclinic">
            <input type="text" name="nameclinic" maxlength="30" id="nameclinic" @keyup="countdown" v-model="nomeinst"/>
            <div id="count">
              <span id="current">{{remainingCount}}</span>
              <span id="maximum">/ 30</span>
            </div>
          </label>
          <form class="sendreset">
            <a href="#" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
      </section>

      <section class="card cep" id="card-cep">
        <header>
        <h2>Digite o CEP</h2>
          <p>
            Coloque o CEP no qual a intuição está estabelecida para localizarmos o
            endereço
          </p>
        </header>
        <fieldset>
          <TheMask mask="#####-###" v-model="cep" type="text" name="cep" id="cnpj"/>
          <form class="sendreset">
            <a href="#" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
      </section>

      <section class="card endereco" id="card-endereco">
        <header>
          <h2>Endereço</h2>
          <p>
            Faça revisão do endereço colocado e preencha as informações não coletadas
          </p>
        </header>
        <fieldset class="wrap">
          <label for="rua" class="column1">
            <span>Endereço</span>
            <input type="text" id="rua" name="rua" :value="endereco"/>
          </label>
          <label for="num" class="column2">
            <span>Número</span>
            <input type="number" id="num" name="number" :value="num"/>
          </label>
          <label for="bairro" class="column3">
            <span>Bairro</span>
            <input type="text" id="bairro" name="bairro" :value="bairro"/>
          </label>
          <label for="estado" class="column4">
            <span>Estado</span>
            <select name="estado" id="estado" :value="estado">
              <option selected disabled></option>
              <option v-for="(item,index) in statelist" :key="index" :value="item.sigla">{{item.sigla}}</option>
            </select>
          </label>
          <label for="cidade" class="column5">
            <span>Cidade</span>
            <input type="text" id="municipio" name="municipio" :value="cidade"/>
          </label>
        </fieldset>

        <form class="sendreset">
            <a href="#" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
      </section>
  </main>
</div>
</template>

<script>
import axios from "axios";
import Menu from "../components/menu.vue";
import Breakline from "../components/breakline.vue";
import {TheMask} from "vue-the-mask";

export default {
  name: "verification",
  components:{
    Menu,
    Breakline,
    TheMask
  },
  data() {
    return {
      maxCount: 30,
      remainingCount: 30,
      hasError: false,

      valid:"",
      cnpj:"",
      nomeinst:"",
      cep:"",
      endereco:"",
      num:"",
      bairro:"",
      estado:"",
      cidade:"",

      statelist: [],
    };
  },
  created: function(){
    axios
    .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{
      this.statelist = res.data;
    })
    .catch((err)=>{
      if(err){
        console.log(err);
      }
    })
  },
  methods: {
    countdown: function () {
      this.remainingCount = this.maxCount - this.nomeinst.length;
      this.hasError = this.remainingCount < 0;
    },
    autocomplete: function(){
      axios
      .get('https://publica.cnpj.ws/cnpj/'+this.cnpj)
      .then((res)=>{
        let name = res.data.estabelecimento.nome_fantasia += " ";
        this.cep = res.data.estabelecimento.cep;
        this.endereco = res.data.estabelecimento.tipo_logradouro + " " + res.data.estabelecimento.logradouro;
        this.num = res.data.estabelecimento.numero;
        this.bairro = res.data.estabelecimento.bairro;
        this.estado = res.data.estabelecimento.estado.sigla;
        this.cidade = res.data.estabelecimento.cidade.nome;

        var trimmedString = name.substr(0, this.maxCount);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        this.nomeinst = trimmedString;
        this.remainingCount = this.maxCount - this.nomeinst.length;
      })
      .catch((err)=>{
        if(err){
          console.log(err);
        }
      })

    },
  }
}
</script>

<style>
@import '../../public/default.css';
@import '../../public/normalizer.css';
@import '../../public/reset.css';

/*Grid*/
main {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

main header[class="pr"]{
  display: flex;
  grid-column: 2/14;
  align-items: baseline;
  margin-bottom: 32px;
  justify-content: space-between;
}

main header[class="pr"] img{
  margin-right: 16px;
}
.name {
  grid-column: 2/13;
}
.cnpj {
  grid-column: 2/13;
}
.nhn {
  grid-column: 2/13;
}
.cep {
  grid-column: 2/13;
}
.endereco {
  grid-column: 2/13;
}


/*Main*/

main header[class="pr"] h1{
  font-size: 32px;
  font-weight: 700;
}



.nhn input[type="text"], .cep input[type="text"], .cnpj input[type="text"]{
  width: 40vw;
  outline: 0;
  border: 0;
  border-bottom: 2px solid black;
  font-size: 22px;
  text-indent: 4px;
  font-weight: 200;
}

/*card-cnpj*/
.cnpj input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

/*Card nursing home name */
.nhn input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.nhn fieldset label #count {
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.1rem 0 0 0;
  margin-right: 19%;
  margin-bottom: 32px;
}

.nhn input[type="text"] {
  margin-bottom: 4px;
}

/*Card-cep */
.cep input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

/*CARD-ENDERECO */
.endereco label span {
  display: block;
  margin-bottom: 8px;
}

.endereco .wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.endereco input[type="text"],
.endereco input[type="number"],
.endereco select {
  background-color: inherit;
  margin-right: 8px;
  border: inherit;
  outline: none;
  border-bottom: 2px solid #0d0d0d;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 22px;
  color: #0d0d0d;
  width: 40vw;
  margin-bottom: 32px;
}

.endereco input[type="number"],
.endereco select {
  width: 14vmin;
}

.endereco input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.endereco input[type="number"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.endereco select:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}


/*Card*/
.card {
  border: 2px solid #0d0d0d31;
  width: 100%;
  margin-bottom:16px;
  border-radius: 5px;
  padding: 16px;
}

.card h2:first-of-type{
  font-weight: 700;
  font-size: 16px;
}

.card p:first-of-type {
  margin-top: 8px;
  margin-bottom: 32px;
  font-weight: 200;
  font-size: 16px;
}

/*Reset*/
/*Send and Reset */

.card form[class="sendreset"]{
  margin-top: 64px;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"] {
  color: #68b400;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68b400;
  padding: 8px 16px;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"]:hover {
  background-color: #54990007;
}

.card form[class="sendreset"] a[id="continue"] {
  text-decoration: none;
  border: inherit;
  background-color: #68b400;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

.card form[class="sendreset"] a[id="continue"]:hover {
  background-color: #549900;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"],
.card form[class="sendreset"] a[id="continue"] {
  cursor: pointer;
  font-weight: 400;
  margin-left: 8px;
  float: right;
  align-items: center;
}

/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
