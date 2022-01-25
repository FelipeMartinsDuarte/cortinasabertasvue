<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>

    <section class="card contact">
          <article>
          <header>
          <h2>Contato</h2>
          <p>
            Adicione os meios de contato existentes cujo o cliente possa entrar em contato e o horário em que a instituição permanece 
            aberta para visitas, coloque no mínimo um meio de contato 
          </p>
          </header>
            <fieldset>
              <div class="flexbox">
                <address class="pa po">
                  <label for="website">
                  <span>Site</span>
                  </label>
                  <input type="text" id="website" placeholder="www.seusite.com" v-model="webs" @click="desableC(0)"/>
                  <span class="error" v-if="weberror != ''"><i class="fas fa-exclamation-circle"></i>{{weberror}}</span>
                </address>
                <address class="pa po">
                  <label for="tel">
                  <span class="rw">Telefone contato <i class="important">*</i></span>
                  </label>
                  <TheMask mask="(##) ####-#####" type="text" id="tel" v-model="tel" @click.native="desableC(1)"/>
                  <span class="error" v-if="telerror != ''"><i class="fas fa-exclamation-circle"></i>{{telerror}}</span>
                </address>
                <address class="pa">
                  <label for="tel2">
                  <span>Telefone contato #2</span>
                  </label>
                  <TheMask mask="(##) ####-#####" type="text" id="tel2"  v-model="tel2" @click.native="desableC(2)"/>
                  <span class="error" v-if="tel2error != ''"><i class="fas fa-exclamation-circle"></i>{{tel2error}}</span>
                </address>
                <time class="pa ab">
                  <label for="opentime">
                  <span>Horário Aberto a visitação <i class="important">*</i></span> 
                  <input type="time" v-if="!srdisabled" v-model="srd" @click="desableC(3)" />
                  <input type="time" v-else v-model="srd" class="dis" disabled/>
                  <span>ás</span>    
                  <input type="time" v-if="!srdisabled" v-model="sra" id="opentime" @click="desableC(3)"/>
                  <input type="time" v-else v-model="sra" id="opentime" class="dis" disabled/>
                  </label>
                  <a v-if="!sr" @mouseover="showTagSR"  @click="srClick"><abbr title="Sem restrição">S/R</abbr></a>
                  <a v-else @mouseout="closeTagSR"  @click="srClick" class="sr"><abbr>S/R</abbr></a>
                  <span class="error" v-if="timeerror != ''"><i class="fas fa-exclamation-circle"></i>{{timeerror}}</span>
                </time>
              </div>
            </fieldset>
          <form class="sendreset">    
              <hr class="sendform" />
              <a @click="checkEmail" id="continue">Continuar</a>
              <input type="reset" value="Cancelar" name="cancelar" />
          </form>
          </article>
    </section>

  </main>
</div>
</template>

<script>
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";
import {TheMask} from "vue-the-mask";
import Validator from 'validator';

export default {
  name: "website",
  components: {
    TheMask,
    Menu,
    Breakline
  },
  data() {
    return {
      //Errors
      weberror:"",
      telerror:"",
      tel2error:"",
      timeerror:"",
  
      //Acronyms
      sr:false,
      srdisabled:false,
      tel:"",
      tel2:"",
      webs:"",
      srd:"", //First input time
      sra:"", //Second input time
    };
  },
  created: function () {

  },
  methods:{
    //Website
    desableC(num){
      if(num == 0){
        this.weberror = "";
      }
      if(num == 1){
        this.telerror = "";
      }
      if(num == 2){
        this.tel2error = "";
      }
      if(num == 3){
        this.timeerror = "";
      }
    },
    //Time
    srClick(){
      this.timeerror = "";
      let cst = this.srdisabled;
      this.srdisabled = !cst;
      if(this.srdisabled == true){
         this.srd = "00:00";
         this.sra = "23:59";
      } else {
        this.srd = "";
        this.sra = "";
      }
      setTimeout(()=>{
        this.sr = false;
      },1000);
    },
    showTagSR(){
      this.sr = true;
    },
    closeTagSR(){
      this.sr = false;
    },
    checkEmail(){
      const isDtEpty = this.sra == "" || this.srd == "" || this.sra == " " || this.srd == " "; 
      const isDtValid = isNaN(this.sra) || isNaN(this.srd);

      const isTl2Epty = this.tel2 == "" || this.tel2 == " ";
      const isTl2Vlid = this.tel2.length > 9;

      const isTlEpty = this.tel == "" || this.tel == " ";
      const isTelVlid = this.tel.length > 9;

      const isEmailEpty = this.webs == "" || this.webs == " ";
      const isEmailVlid = Validator.isURL(this.webs);
      if(!isEmailEpty && !isEmailVlid){
        this.weberror = "Por favor adicione um website valído";
      }
      if(!isTl2Epty && !isTl2Vlid){
        this.tel2error = "Por favor preencha este campo corretamente";
      }
      if(isTlEpty  || !isTelVlid ){
        this.telerror = "Por favor preencha este campo corretamente";
      }
      if(isDtEpty || !isDtValid){
        this.timeerror = "Por favor preencha este campo corretamente";
      } else {
        let datas = this.$route.params.datas;

        let contact = new Object;
        contact.tel = this.tel;
        contact.website = this.webs;
        contact.tel2 = this.tel2;
        contact.time = new Object;
        contact.time.initial = this.srd 
        contact.time.end = this.sra

        datas = {...datas, contact}

        this.$router.push({
          name: "Description",
          params: {datas}
        })
      }
    }



  },
  computed: {

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
  grid-column: 2/15;
}

.contact {
  grid-column: 2/13;
}

/*Contact-Card */
.contact time input[type="time"]{
  padding-top: 4px;
  border: none;
  border-radius: inherit;
  border-bottom: 1px solid black;
  background-color: inherit;
  font-size: 16px;
  font-weight: 200;
  outline: none;
  color: #2a2c2d;
}
.contact time input[type="time"]::webkit-datetime-edit-fields-wrapper{
  display: flex;
}

.contact time input[type=time]::webkit-clear-button{
  display: none;
}

.contact time input[type=time]::-webkit-inner-spin-button {
  display: none;
}

.contact time input[type=time]::-webkit-datetime-edit-ampm-field {
  display: none;
}

.contact time a[class="sr"]{
  position: relative;
  cursor: pointer;
  text-decoration: none;
}

.contact time a[class="sr"]::after {
  content: 'Sem restrição';

  position: absolute;
  z-index: 1;
  left: 0;
  bottom: -40px;
  width: auto;
  white-space: nowrap;

  background-color: #F2EEEB;
  box-shadow: 1px 1px 3px 2px #5f5f5f34;
  font-size: 16px;
  font-weight: 200;
  border-radius: 4px;
  padding: 16px;
}
.contact time input[class="dis"]{
  opacity: 0.25;
}

.contact time input[class="dis"]::-webkit-datetime-edit-hour-field {
  color: #dcdcdc ; 
  text-decoration-line: line-through;
  -webkit-text-decoration-line: line-through;
  text-decoration-color: gainsboro;
  -webkit-text-decoration-color: gainsboro;
}

.contact time input[class="dis"]::-webkit-datetime-edit-minute-field {
  color: gainsboro;
  text-decoration-line: line-through;
  -webkit-text-decoration-line: line-through;
  text-decoration-color: gainsboro;
  -webkit-text-decoration-color: gainsboro;
}

.contact time input[class="dis"]::-webkit-datetime-edit-text {
  color: gainsboro;
  text-decoration-line: line-through;
  -webkit-text-decoration-line: line-through;
  text-decoration-color: gainsboro;
  -webkit-text-decoration-color: gainsboro;
}

.contact .flexbox{
  display: flex;
  flex-wrap: wrap;
  align-content: bottom;
}
.contact .flexbox span{
  display: block;
}

.contact .flexbox time label span:last-of-type{
  display: inline;
  font-weight: 100;
  padding: 0 8px;
}

.contact .flexbox input[type="text"]{
  outline: none;
  border:none;
  background-color: transparent;
  padding-bottom: 4px;
  border-radius: 0;
  width: 90%;
  border-bottom: 1px solid black;
}

.contact .errorinput{
  border-color: red;
}

.contact .flexbox a{
  margin-left: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #007C6B;
  outline: none;
  border: none;
  background: inherit;
}

.contact .flexbox .pa{
  margin-bottom: 32px;
  width: 50%;
}

.contact .flexbox .po{
  margin-top: 8px;
  margin-bottom: 32px;
}

.contact .flexbox .pa input:focus{
  border-bottom: 2px solid #00a28c;
  color: #00a28c;
}

.contact .flexbox a abbr{
  text-decoration: none;
}

/*Contact ends here */

/*Main*/
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

i[class="important"]{
  color: red;
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
  margin-top: 4px;
  vertical-align: middle;
  margin-bottom: 8px;
}

.error i{
  margin-right: 4px;
}

/*Tittle Description */
.title {
  width: 38vmax;
}

.title h1{
  margin-bottom: 32px;
  font-weight: 700;
}

.title p{
  color:#006154;
  margin-bottom: 8px;
  font-weight: 600;
}
</style>
