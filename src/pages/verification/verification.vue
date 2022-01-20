<template>
<div class="wrap">
  <Menu />
  <Breakline />
  <main >
    <header class="pr">
      <h1>Vamos identificar sua instituição</h1>
    </header>

    <section class="pan">
      <header>
        <h2>Coloque CNPJ constituído</h2>
      </header>
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
          <input type="text"  @click="hideNameError" :class="errornamestyle" name="nameclinic" maxlength="30" id="nameclinic" @keyup="countdown" v-model="nomeinst"/>
          <span class="error" v-if="errorname"><i class="fas fa-exclamation-circle"></i></span>
          <div id="count">
            <span id="current">{{remainingCount}}</span>
            <span id="maximum">/ 30</span>
          </div>
        </label>
        <form class="sendreset" v-if="cpcn">
          <a @click="CheckName" id="continue" class="edit">Salvar</a>
          <input type="reset" value="Cancelar" class="remove" name="cancelar" @click="namedischange"/>
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
        <TheMask :class="errorstylecep" mask="#####-###" v-model="cep" type="text" name="cep" id="cnpj" @click.native="hideErrorCEP" @keydown.native="cepchanged"/>
        <span class="error" v-if="errorcep"><i class="fas fa-exclamation-circle"></i>{{errormessagecep[0]}}</span>
        <form class="sendreset" v-if="cpch">
          <a @click="checkCEP" id="continue" class="edit">Salvar</a>
          <input @click="cepdischange" type="reset" value="Cancelar" class="remove" name="cancelar" />
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
            <input type="text" id="rua" name="rua" v-model="endereco" class="ds" disabled/>
          </label>

          <label for="num" :class="errornumstyle">
            <span>Número</span>
            <TheMask type="text" id="number" mask="#######" :class="errornumstyle" v-model="num" @click.native="resetNum"/>
          </label>

          <label for="bairro" class="column3">
            <span>Bairro</span>
            <input type="text" id="bairro" name="bairro" :value="bairro" class="ds" disabled/>
          </label>

          <label for="estado" class="column4">
            <span>Estado</span>
            <select name="estado" id="estado" v-model="estado">
              <option selected  v-if="estado === '' || estado === ' '" disabled></option>
              <option v-for="(item,index) in statelist" :key="index" :value="item" :selected="estado === statelist">{{item}}</option>
            </select>
          </label>

          <label for="cidade" class="column5">
            <span>Cidade</span>
            <input type="text" id="municipio" name="municipio" :value="cidade" class="ds" disabled/>
          </label>
        </fieldset>

        <form class="sendreset">
          <a id="continue" @click="endHasError">Confirmar</a>
          <input type="reset" value="Cancelar" name="cancelar" />
        </form>
    </section>

  </main>
</div>
</template>

<script>
import axios from "axios";
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";
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

      errornum: false,
      errorcep:false,
      errorname:false,

      errormessagecep:[],

      errorstylecep:"",
      errornamestyle:"",
      errornumstyle:"",

      cpch:false,
      cpcn:false,

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
    //Catch the States Acronyms 
      for(const i of res.data){
        this.statelist.push(i.sigla);
      }
     })
     .catch((err)=>{
       if(err){
       console.log(err);
        }
     })
  },
  methods: {
    resetNum(){
      this.errornumstyle = "";
      this.errornum = "false";
    },
    endHasError(){
    console.log("Funcionou")
    let isEmpty = this.num == "" || this.num == " ";
    let isValid = isNaN(this.num);
    if(isEmpty || isValid){
      this.errornumstyle = "errorinput";
      this.errornum = "true";
    }
    },
    namedischange(){
      this.nomeinst = this.$route.params.datas.nomeinst;
      this.cpcn = false;
      this.errornamestyle = "";
      this.errorname  = false;
    },
    cepdischange(){
      this.cep = this.$route.params.datas.cep;
      this.cpch = false;
      this.errorcepstyle = "";
      this.errorcep  = false;
      this.errorcepstyle = "";
    },
    cepchanged(){
      if(this.cpcn === true){
        this.cpch = true;
        this.namedischange();
      } else {
        this.cpch = true;
      }
    },
    checkCEP(){
      let isEmpty = this.cep == "" || this.cep == " ";
      let isValid = this.cep.length == 8;
      if(isEmpty || !isValid){
        this.errorcep = true;
        this.errormessagecep.push("Por favor preencha o campo corretamente");
        this.errorstylecep = "errorinput";
      } else {
        this.checkValidCEP();
      }
    },
    hideErrorCEP(){
      this.errorcep = false;
      this.errorstylecep = ""
      this.errormessagecep = [];
    },
    checkValidCEP(){
    let street =  "https://viacep.com.br/ws/" + this.cep + "/json/"
      axios
      .get(street)
      .then((res)=>{
        if(res.status == 200 && res.data.erro == true){
          this.errorcep = true;
          this.errormessagecep.push("Por favor digite um CEP Valído");
          this.errorstylecep = "errorinput";
        } else {
          this.endereco = res.data.logradouro;
          this.estado = res.data.uf;
          this.bairro = res.data.bairro;
          this.cidade = res.data.localidade;
          this.cpch = false;
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    countdown: function () {
      this.remainingCount = this.maxCount - this.nomeinst.length;
      this.hasError = this.remainingCount < 0;
      if(this.cpch === true){
        this.cpcn = true;
        this.cepdischange();
      } else {
        this.cpcn = true;
      }
    },
    CheckName: function() {
      let isEmpty = this.nomeinst == "" || this.nomeinst == " ";
      let isValid = this.nomeinst.length <= 30;
      if(!isValid || isEmpty){
        this.errorname = true;
        this.errormessagename = "Por favor preencha o campo corretamente";
        this.errornamestyle = "errorinput";
      } else {
        this.cpcn = false;
      }
    },
    hideNameError: function(){
      this.errorname = false;
      this.errormessagename = "";
      this.errornamestyle = "";
    }
  },
  mounted:function(){
    if(this.$route.params.datas){
      let datas = this.$route.params.datas;
      this.bairro = datas.bairro;
      this.cidade = datas.cidade;
      this.endereco = datas.endereco;
      this.estado = datas.estado;
      this.cep = datas.cep;
      this.nomeinst = datas.nomeinst;
      this.remainingCount = this.maxCount - datas.nomeinst.length;
    }
  }
}
</script>

<style scoped>
@import '../../../public/default.css';
@import '../../../public/normalizer.css';
@import '../../../public/reset.css';

main {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}
.cep {
  grid-column: 2/13;
}

.endereco {
  grid-column: 2/13;
}

.card{
  grid-column: 2/13;
}

/*Main*/

#count {
  width: 40vw;
  margin-top: 8px;
  text-align: right;
}

.nhn input[class="errorinput"]{
  border-bottom: 1px solid red;
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


section[class="pan"]{
  grid-column: 2/13;
  position: relative;
  width: 100%;
  padding: 16px;
  background-color: #dddad794;
}

section[class="pan"]:after{
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  background: url(../../assets/downarrow.svg) no-repeat center;
  background-size: 16px;
  height: 100%;
  width: 32px;
}

section[class="pan"] h2{
  font-size: 16px;
  font-weight: 700;
  color: #bababac0;
}

.error{
  display: inline-block;
  color: red;
  vertical-align: middle;
  margin-top: 4px;
}

.error i{
  margin-right: 4px;
}

main header[class="pr"] h1{
  font-size: 32px;
  font-weight: 700;
}

/*CARD CEP*/
.nhn input[type="text"], .cep input[type="text"], .cnpj input[type="text"]{
  width: 40vw;
  outline: 0;
  border: 0;
  border-bottom: 2px solid black;
  font-size: 22px;
  text-indent: 4px;
  font-weight: 200;
}

input[type="text"][class="errorinput"]{
  border-bottom: 1px solid red;
}

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

.endereco input[type="text"][id="number"],
.endereco select {
  width: 5vw;
}

.endereco input[type="text"][class="errorinput"]{
  border-bottom: 2px solid red;
}

.endereco label[class="errorinput"]{
  color: red;
}

.endereco input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.endereco input[type="text"][class="number"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.endereco select:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.endereco input[class="ds"][type="text"]{
  color: #B9B9B9;
  cursor: not-allowed;
  border-bottom: 1px solid #B9B9B9;
}

/*Card Default*/
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

.card form[class="sendreset"] a[id="continue"] {
  text-decoration: none;
  border: inherit;
  background-color: #68b400;
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

.card form[class="sendreset"] a[class="edit"][id="continue"] {
  background-color: #C5B800;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"][class="remove"]{
  border: 1px solid #c7ba00;
  color: #c7ba00;
}




/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
