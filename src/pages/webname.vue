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
            <input type="text"  @click="thisEnter" :class="errorstyle" name="nameclinic" maxlength="30" id="nameclinic" @keyup="countdown" v-model="nomeinst"/>
            <span class="error" v-if="error"><i class="fas fa-exclamation-circle"></i></span>
            <div id="count">
              <span id="current">{{remainingCount}}</span>
              <span id="maximum">/ 30</span>
            </div>
          </label>
          <form class="sendreset">
            <a @click="thisCheck" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </fieldset>
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
import Breakline from "../components/breakline.vue";

export default {
  name: "verification",
  components:{
    Menu,
    Breakline,
  },
  data() {
    return {
      maxCount: 30,
      remainingCount: 30,
      hasError: false,

      error:false,
      errormessage:"",
      errorstyle:"",

      nomeinst:"",
    };
  },
  methods: {
    countdown: function () {
      this.remainingCount = this.maxCount - this.nomeinst.length;
      this.hasError = this.remainingCount < 0;
    },
    thisCheck: function() {
      let isEmpty = this.nomeinst == "" || this.nomeinst == " ";
      let isValid = this.nomeinst.length < 30;
      if(!isValid || isEmpty){
        this.error = true;
        this.errormessage = "Por favor preencha o campo corretamente";
        this.errorstyle = "errorstyle";
      } else {
        let datas = this.$route.params.datas;
        datas.nomeinst = this.nomeinst;

        this.$router.push({
          name: "Webcep",
          params: {datas}
        })
      }
    },
    thisEnter: function(){
      this.error = false;
      this.errormessage = "";
      this.errorstyle = "";
    }
  },
  mounted(){
    if(this.$route.params.datas){
      let datas = this.$route.params.datas;
      this.nomeinst = datas.nomeinst;
      this.remainingCount = this.maxCount - this.nomeinst.length;
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

.nhn {
  grid-column: 2/13;
}


#count {
  width: 40vw;
  padding-top: 4px;
  text-align: right;
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

.nhn input[type="text"][class="errorstyle"]{
  border-bottom: 2px solid red;
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

.error i{
  margin-left: 4px;
  color: red;
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
