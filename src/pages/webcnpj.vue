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
          <TheMask mask="##.###.###/####-##" :class={errorstyle} v-model="cnpj" type="text" name="cnpj" id="cnpj" @click.native="hideError"/>
          <span class="error" v-if="error"><i class="fas fa-exclamation-circle"></i>{{errormesage[0]}}</span>
          <form class="sendreset">
            <a href="#" id="continue" @click="checkCNPJ">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
      </section>

      <section class="pan">
        <header>
          <h2>Coloque o nome da instituição</h2>
        </header>
      </section>

      <section class="pan">
        <header>
          <h2>Digite o CEP</h2>
        </header>
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
import Menu from "../components/menu.vue";
import axios from 'axios';
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
      error:false,
      errormesage: [],
      isValid:false,
      errorstyle: "",

      cnpj:"",
      nomeinst:"",
      cep:"",
      endereco:"",
      bairro:"",
      estado:"",
      cidade:"",
    };
  },
  methods: {
    autocomplete: function(){
      axios
      .get('https://publica.cnpj.ws/cnpj/'+this.cnpj)
      .then((res)=>{
        let name = res.data.estabelecimento.nome_fantasia += " ";
        this.cep = res.data.estabelecimento.cep;
        this.endereco = res.data.estabelecimento.tipo_logradouro + " " + res.data.estabelecimento.logradouro;
        this.bairro = res.data.estabelecimento.bairro;
        this.estado = res.data.estabelecimento.estado.sigla;
        this.cidade = res.data.estabelecimento.cidade.nome;
        var trimmedString = name.substr(0, this.maxCount);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        this.nomeinst = trimmedString;
        this.remainingCount = this.maxCount - this.nomeinst.length;
        this.checkValid(res.data);
       })
      .catch((err)=>{
        if(err){
          this.error = true;
          this.errorstyle = "errorstyle";
        }
      })

      
    },
    checkCNPJ: function(){
      let isEmpty = this.cnpj == "" || this.cnpj == " ";
      let isValid = this.cnpj.length === 14; 
      if(!isValid || isEmpty){
        this.error = true;
        this.errorstyle = "errorstyle"
        this.errormesage.push("Por favor preencha o campo corretamente");
      } else {
        this.autocomplete();
      }
    },
    hideError(){
      this.error = false;
      this.errorstyle = ""
      this.errormesage = [];
    },
    checkValid(data){
      //Secondary Activities
      let groups = [];
      //Catching Primarlly Activities
      let st = data.estabelecimento.situacao_cadastral;
      //Make an array with this informations
      let cenaegsec = data.estabelecimento.atividades_secundarias;
      //Checking if there is only one and loop
      if(cenaegsec != []){
        for(const item of cenaegsec){
          groups.push(item.grupo)
        }
      }
      //Push Primarlly Activites information
      groups.push(data.estabelecimento.atividade_principal.grupo)

      //Check if Attends to the Requisites
      let incl = groups.includes("87.1");
      if(!incl){
        this.error = true;
        this.errormesage.push("Está instituição não está habilitada a serviços de cuidados");
        this.errorstyle = "errorstyle"
      }
      if(st !== "Ativa"){
        this.error = true;
        this.errorstyle = "errorstyle"
        this.errormesage.push("A Situação Cadastral não está ativa");
      } else{
        var datas = {
          cnpj: this.cnpj,
          nomeinst: this.nomeinst,
          cep: this.cep,
          endereco: this.endereco,
          bairro: this.bairro,
          estado: this.estado,
          cidade: this.cidade,
        }
        this.$router.push({
          name: "Webname",
          params: {datas}
        })
      }
      
    }
  },
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
.cnpj {
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
  background: url(../assets/downarrow.svg) no-repeat center;
  background-size: 16px;
  height: 100%;
  width: 32px;
}

section[class="pan"] h2{
  font-size: 16px;
  font-weight: 700;
  color: #bababac0;
}


/*Error*/
.error{
  display: inline-block;
  color: red;
  vertical-align: middle;
  margin-top: 4px;
}

.error i{
  margin-right: 4px;
}

.right{
  display: inline-block;
  color: greenyellow;
  vertical-align: middle;
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

.cnpj input[class="errorstyle"]{
  border-bottom: 1px solid red;
}

/*card-cnpj*/
.cnpj input[type="text"]:focus {
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

/*Card*/
.card {
  border: 2px solid #0d0d0d31;
  width: 100%;
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

/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
