<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>

    <section class="card profile">
          <header>
            <h2>Perfil da Casa</h2>
            <p>
              Clique sobre as opções sim ou não de cada item para Definir o Perfil da instituição
            </p>
            <span class="error" v-if="errorPmessage !== ''"><i class="fas fa-exclamation-circle"></i>{{errorPmessage}}</span>
          </header>

          <form class="sendreset">
            <div class="wrapprofile">

              <fieldset class="columnprofile">
                <span :class="errorstyleP[1]">Aceitam Longa estadia?</span>
                <div class="option">
                <input type="radio" name="yesnot" id="yesnot1" value="true"  hidden >
                  <label for="yesnot1" @click="profileClick(true,1)"><a>Sim</a></label>
                  <input type="radio" name="yesnot" id="yesnot2" value="false"  hidden>
                  <label for="yesnot2" @click="profileClick(false,1)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[2]">Aceitam Curta estadia?</span>
                <div class="option">
                  <input type="radio" name="yesnot6" id="yesnot11" value="true" hidden>
                  <label for="yesnot11" @click="profileClick(true,2)"><a>Sim</a></label>
                  <input type="radio" name="yesnot6" id="yesnot12" value="false" hidden>
                  <label for="yesnot12" @click="profileClick(false,2)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[3]">Possuem Quartos Coletivos?</span>
                <div class="option">
                  <input type="radio" name="yesnot3" id="yesnot5" value="true" hidden>
                  <label for="yesnot5" @click="profileClick(true,3)"><a>Sim</a></label>
                  <input type="radio" name="yesnot3" id="yesnot6" value="false" hidden>
                  <label for="yesnot6" @click="profileClick(false,3)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[4]">Possuem Quartos Individuais?</span>
                <div class="option">
                  <input type="radio" name="yesnot7" id="yesnot13" value="true" hidden>
                  <label for="yesnot13" @click="profileClick(true,4)"><a>Sim</a></label>
                  <input type="radio" name="yesnot7" id="yesnot14" value="false" hidden>
                  <label for="yesnot14" @click="profileClick(false,4)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[5]">Aceitam pessoas Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot4" id="yesnot7" value="true" hidden>
                  <label for="yesnot7" @click="profileClick(true,5)"><a>Sim</a></label>
                  <input type="radio" name="yesnot4" id="yesnot8" value="false" hidden>
                  <label for="yesnot8" @click="profileClick(false,5)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[6]">Aceitam pessoas Independentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot2" id="yesnot3" value="true" hidden>
                  <label for="yesnot3" @click="profileClick(true,6)"><a>Sim</a></label>
                  <input type="radio" name="yesnot2" id="yesnot4" value="false"  hidden>
                  <label for="yesnot4" @click="profileClick(false,6)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[7]">Aceitam pessoas Semi-Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot5" id="yesnot9" value="true" hidden>
                  <label for="yesnot9" @click="profileClick(true,7)"><a>Sim</a></label>
                  <input type="radio" name="yesnot5" id="yesnot10" value="false" hidden>
                  <label for="yesnot10" @click="profileClick(false,7)"><a>Não</a></label>
                </div>
              </fieldset>

            </div>

            <hr class="sendform" />
            <a @click="Profilesend" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>    
    </section>

  </main>
</div>
</template>

<script>
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";

export default {
  name: "website",
  components: {
    Menu,
    Breakline
  },
  data() {
    return {
      isDisabledP:[true,true,true,true,true,true,true],
      inputP:[false,false,false,false,false,false,false],
      errorstyleP:["","","","","","",""],
      errorPmessage:"",
    };
  },
  created: function () {
  
  },
  methods:{ 
  profileClick(boolean, item){
    if(item === 1){
     this.inputP.splice(0,1,boolean)
     this.isDisabledP.splice(0,1,false);
     this.errorstyleP.splice(0,1,"");
     this.profilehide(0)
    }
    if(item === 2){
     this.inputP.splice(1,1,boolean)
     this.isDisabledP.splice(1,1,false);
     this.errorstyleP.splice(1,1,"");
     this.profilehide(1)
    }
    if(item === 3){
     this.inputP.splice(2,1,boolean)
     this.isDisabledP.splice(2,1,false);
     this.errorstyleP.splice(2,1,"");
     this.profilehide(2)
    }
    if(item === 4){
     this.inputP.splice(3,1,boolean)
     this.isDisabledP.splice(3,1,false);
     this.errorstyleP.splice(3,1,"");
     this.profilehide(3)
    }
    if(item === 5){
     this.inputP.splice(4,1,boolean);
     this.isDisabledP.splice(4,1,false);
     this.errorstyleP.splice(4,1,"");
     this.profilehide(4)
    }
    if(item === 6){
     this.inputP.splice(5,1,boolean)
     this.isDisabledP.splice(5,1,false);
     this.errorstyleP.splice(5,1,"");
     this.profilehide(5)
    }
    if(item === 7){
     this.inputP.splice(6,1,boolean)
     this.isDisabledP.splice(6,1,false);
     this.errorstyleP.splice(6,1,"");
     this.profilehide(6)
    }
  },
  profilehide(value){
    if(this.inputP[value] == true){
       this.errorPmessage = "";
    }
  },
  Profilesend(){
    let isDis = this.isDisabledP.includes(true); //Check if select no one value
    let plon = this.inputP.includes(true); //Check if select all value not 
    if(isDis){
      let index = this.isDisabledP.indexOf(true);
      this.errorstyleP.splice(index,1,"errorinputP") 
    } else if(!plon){
      this.errorPmessage = "Você deve aceitar pelo menos 1 dos campos"
    } else {
        let objarray = [];
        const array = ["Aceitam Longa estadia", "Aceitam Curta estadia",
        "Possuem Quartos Coletivos", "Possuem Quartos Individuais?", 
        "Aceitam pessoas Dependentes","Aceitam pessoas Independentes","Aceitam pessoas Semi-Dependentes"]
        for(let i = 0; i < 7; i++){
          let obj = new Object;
          obj.name = array[i];
          obj.data = this.inputP[i];
          objarray.push(obj);
        }
        let datas = {
          profile: objarray,
          accessibility: "",
          spot:"",
        };
        this.$router.push({
          name: "Images",
          params: {datas}
        })
      }
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
  grid-column: 2/15;
}

.profile{
  grid-column: 2/13;
}

/*Structure ends here */

/*Info*/
.profile .columnprofile input[type="radio"]:checked + label a{
  color: #00A28C;
}

.profile form .wrapprofile{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.profile label a {
  cursor: pointer;
}

.profile .columnprofile span{
  display: block;
  margin-bottom: 8px;
  width: 9vmax;
}

.profile .sendreset .wrapprofile .columnprofile{
  width: 33%;
  padding: 0;
  margin-bottom: 8px;
}

.profile form .columnprofile .option{
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.profile form .columnprofile a {
  display: block;
  margin-bottom: 16px;
  text-decoration: none;
  color: #00615481;
  font-weight: 600;
}

.errorinputP{
  color: red;
  width: 100%;
}
/*Info ends here */


/*Card Starts here*/

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
/*Card Ends here*/

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
