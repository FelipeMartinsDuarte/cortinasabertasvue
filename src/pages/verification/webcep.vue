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

      <section class="pan">
        <header>
          <h2>Coloque o nome da instituição</h2>
        </header>
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
          <TheMask :class="errorstyle" mask="#####-###" v-model="cep" type="text" name="cep" id="cnpj" @click.native="hideError"/>
          <span class="error" v-if="error"><i class="fas fa-exclamation-circle"></i>{{errormessage[0]}}</span>
          <form class="sendreset">
            <a @click="check" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
      </section>

      <section class="pan">
        <header>
          <h2>Endereço</h2>
        </header>
      </section>

  </main>
</div>
</template>

<script>
import axios from 'axios';
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
      error:false,
      errormessage:[],
      errorstyle:"",

      valid:"",
      cnpj:"",
      nomeinst:"",
      cep:"",
      endereco:"",
      num:"",
      bairro:"",
      estado:"",
      cidade:"",

    };
  },
  methods:{
    check(){
      let isEmpty = this.cep == "" || this.cep == " ";
      let isValid = this.cep.length == 8;
      if(isEmpty || !isValid){
        this.error = true;
        this.errormessage.push("Por favor preencha o campo corretamente");
        this.errorstyle = "errorinput";
      } else {
        this.checkValid();
      }
    },
    hideError(){
      this.error = false;
      this.errorstyle = ""
      this.errormessage = [];
    },
    checkValid(){
    let street =  "https://viacep.com.br/ws/" + this.cep + "/json/"
      axios
      .get(street)
      .then((res)=>{
        if(res.status == 200 && res.data.erro == true){
          this.error = true;
          this.errormessage.push("Por favor digite um CEP Valído");
          this.errorstyle = "errorinput";
        } else {
          let datas = this.$route.params.datas;
          datas.cep = this.cep;
          datas.endereco = res.data.logradouro;
          datas.estado = res.data.uf;
          datas.bairro = res.data.bairro;
          datas.cidade = res.data.localidade;

          this.$router.push({
            name: "Verificar",
            params: {datas}
          })
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  mounted(){
    if(this.$route.params.datas){
      let datas = this.$route.params.datas;
      this.cep = datas.cep;
    }
  },
}

</script>

<style scoped>
@import '../../../public/default.css';
@import '../../../public/normalizer.css';
@import '../../../public/reset.css';

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

.cep {
  grid-column: 2/13;
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

/*Main*/

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

.nhn input[type="text"], .cep input[type="text"], .cnpj input[type="text"]{
  width: 40vw;
  outline: 0;
  border: 0;
  border-bottom: 2px solid black;
  font-size: 22px;
  text-indent: 4px;
  font-weight: 200;
}

.cep input[type="text"][class="errorinput"]{
  border-bottom: 1px solid red;
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
  color: #0D0D0D;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #0D0D0D;
  padding: 8px 16px;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"]:hover {
  background-color: #54990007;
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

.card form[class="sendreset"] a[id="continue"]:hover {
  background-color: #0D0D0D;
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
