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

      <section class="pan">
        <header>
          <h2>Digite o CEP</h2>
        </header>
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

          <label for="num" class="column2">
            <span>Número</span>
            <input type="number" id="num" name="number" v-model="num"/>
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
            <a @click="endHasError">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
      </section>
  </main>
</div>
</template>

<script>
import Menu from "../components/menu.vue";
import Breakline from "../components/breakline.vue";
import axios from 'axios';

export default {
  name: "verification",
  components:{
    Menu,
    Breakline,
  },
  data() {
    return {
      errenum: false,
      errstate: false,
      errstyle: "",

      endereco:"",
      num:"",
      bairro:"",
      estado:"",
      cidade:"",

      statelist: [],
    };
  }, 
  methods:{

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
  mounted: function(){
    if(this.$route.params.datas){
      let datas = this.$route.params.datas;
      this.bairro = datas.bairro;
      this.cidade = datas.cidade;
      this.endereco = datas.endereco;
      this.estado = datas.estado;
    }
  },
  computed:{
    autoComplete: function(){
      return this.query
    }
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

.endereco {
  grid-column: 2/13;
}


/*Main*/

main header[class="pr"] h1{
  font-size: 32px;
  font-weight: 700;
}

/*Endereco */
.endereco input[type="text"],
.endereco input[type="number"],
.endereco select {
  background-color: inherit;
  outline: none;
  border-bottom: 2px solid #0d0d0d;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 22px;
  color: #0d0d0d;
  width: 40vw;
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

.endereco input[class="ds"][type="text"]{
  color: #B9B9B9;
  border-bottom: 1px solid #B9B9B9;
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
