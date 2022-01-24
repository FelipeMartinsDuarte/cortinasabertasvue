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
                <span :class="errorstyleP[0]">Aceitam Longa estadia?</span>
                <div class="option">
                <input type="radio" name="yesnot" id="yesnot1" value="true"  hidden >
                  <label for="yesnot1" @click="profileClick(true,1)"><a>Sim</a></label>
                  <input type="radio" name="yesnot" id="yesnot2" value="false"  hidden>
                  <label for="yesnot2" @click="profileClick(false,1)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[5]">Aceitam Curta estadia?</span>
                <div class="option">
                  <input type="radio" name="yesnot6" id="yesnot11" value="true" hidden>
                  <label for="yesnot11" @click="profileClick(true,6)"><a>Sim</a></label>
                  <input type="radio" name="yesnot6" id="yesnot12" value="false" hidden>
                  <label for="yesnot12" @click="profileClick(false,6)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[2]">Possuem Quartos Coletivos?</span>
                <div class="option">
                  <input type="radio" name="yesnot3" id="yesnot5" value="true" hidden>
                  <label for="yesnot5" @click="profileClick(true,3)"><a>Sim</a></label>
                  <input type="radio" name="yesnot3" id="yesnot6" value="false" hidden>
                  <label for="yesnot6" @click="profileClick(false,3)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[6]">Possuem Quartos Individuais?</span>
                <div class="option">
                  <input type="radio" name="yesnot7" id="yesnot13" value="true" hidden>
                  <label for="yesnot13" @click="profileClick(true,7)"><a>Sim</a></label>
                  <input type="radio" name="yesnot7" id="yesnot14" value="false" hidden>
                  <label for="yesnot14" @click="profileClick(false,7)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[3]">Aceitam pessoas Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot4" id="yesnot7" value="true" hidden>
                  <label for="yesnot7" @click="profileClick(true,4)"><a>Sim</a></label>
                  <input type="radio" name="yesnot4" id="yesnot8" value="false" hidden>
                  <label for="yesnot8" @click="profileClick(false,4)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[1]">Aceitam pessoas Independentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot2" id="yesnot3" value="true" hidden>
                  <label for="yesnot3" @click="profileClick(true,2)"><a>Sim</a></label>
                  <input type="radio" name="yesnot2" id="yesnot4" value="false"  hidden>
                  <label for="yesnot4" @click="profileClick(false,2)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[4]">Aceitam pessoas Semi-Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot5" id="yesnot9" value="true" hidden>
                  <label for="yesnot9" @click="profileClick(true,5)"><a>Sim</a></label>
                  <input type="radio" name="yesnot5" id="yesnot10" value="false" hidden>
                  <label for="yesnot10" @click="profileClick(false,5)"><a>Não</a></label>
                </div>
              </fieldset>

            </div>

            <hr class="sendform" />
            <a @click="Profilesend" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>    
    </section>

    <section class="card image">
          <article id="image">
            <header>
            <h2>Adicione fotos</h2>
            <p>
              Coloque uma ou mais fotos sobre a estrutura, com no mínimo 600 Pixels
            </p>
            </header>
            <span class="error" v-if="errormessageI.length > 0"><i class="fas fa-exclamation-circle"></i>{{errormessageI[0]}}</span>
            <div id="image-content" @dragover.prevent @drop.stop.prevent="ondrop" >
              <div class="image-preview" @click="imageSelect" >
                  <figure class="border addimg">
                    <img src="../../assets/uploadicon.svg"/>
                    <figcaption><span><a>Clique e selecione</a> ou Arraste aqui</span></figcaption>
                  </figure>
                </div>

                <draggable v-model="imageArray" draggable=".image-preview" class="draggable">
                <label v-for="(item,index) in imageArray" :key="index" class="image-preview">
                    <figure id="top-bar">
                      <img src="../../assets/bin.svg" alt="remover imagem" @click="removeImage(item)">
                      <figcaption><span>{{item.filename}}</span></figcaption>
                    </figure>
                    <figure class="border image">
                      <img :src="item.url">
                    </figure>
                </label>
                </draggable>



            <input type="file" ref="imageInput" @input="onselect" multiple>
            </div>
          </article>

          <article id="logo">
            <header>
            <h2>Possui uma Logo?</h2>
            <p>
              Coloque a sua logo em fundo transparente ou branco. Você poderá adicionar futuramente!
            </p>
            </header>
            <span class="error" v-if="errorlogoL.length > 0"><i class="fas fa-exclamation-circle"></i>{{errorlogoL[0]}}</span>
            <div class="logo-wrap">
              <div id="logo-content">
                <nav class="row navlogo" v-if="logolenght > 0">
                  <figure class="edit" >
                    <img src="../../assets/crop.svg" alt="cortar imagem" >
                  </figure>
                  <figure class="remove" @click="removeLogo">
                    <img src="../../assets/bin.svg" alt="excluir imagem">
                  </figure>
                </nav>

                <figure class="preview-logo" v-for="(item,index) in logoItem" :key="index">
                  <img :src="item.url" alt="visualisação da sua logomarca" >
                </figure>

                  <div class="add-logo" @click="logoSelect" v-if="logolenght == 0">
                    <img src="../../assets/uploadicon.svg" alt="crie sua logo aqui">
                    <span><a>Clique e selecione</a> ou Arraste aqui</span>
                  </div>
                  <input type="file" ref="logoInput" @input="onlogoselect">
              </div>
            </div>
          </article>
          <form class="sendreset">
            <hr class="sendform" />
            <a @click="sendImageLogo" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
    </section>

  </main>
</div>
</template>

<script>
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";
import draggable from 'vuedraggable'

export default {
  name: "website",
  components: {
    Menu,
    Breakline,
    draggable,
  },
  data() {
    return {
      //Profile 
      isDisabledP:[true,true,true,true,true,true,true],
      inputP:[false,false,false,false,false,false,false],
      errorstyleP:["","","","","","",""],
      errorPmessage:"",

      //Image-Logo
      errormessageI:[],
      errorlogoL:[],

      logoFile:[],
      imageFile:[],

      imageArray:[],
      imageItem:[],
      imagelenght:0,
      logoItem:[],
      logolenght:0,
    };
  },
  created: function () {
  
  },
  methods:{ 
  //Profile Starts here
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
  },
  //Profille Ends here

  //Image starts here
  ondrop: function(event){
        let limit = 13;
        let Images = [...event.dataTransfer.files];
        let cbv = Images.length + this.imagelenght;
        if(cbv < limit){
        this.verificateImage(Images);
        }
  },
  onselect: function(){
      const imageInput = this.$refs.imageInput;
      let Images = [...imageInput.files];
      this.verificateImage(Images);
  },
  removeImage: function(item){
      var position = this.imageItem.indexOf(item.filename);
      this.imagelenght -= 1;
      this.imageArray.splice(position, 1);
      this.imageItem.splice(position, 1);
      this.imageFile.splice(position,1);
  },
  imageSelect: function (){
    this.$refs.imageInput.click()
  },
  verificateImage: function(Images){
      //Define rules
      const av = ["image/jpeg","image/jpg","image/png","image/webp"];
      const maxsize = 3000000; //3Mb to Bytes
      //Check item by item comply with the rule
      for(var item of Images){
        const imgname = item.name;
        let url = URL.createObjectURL(item);
        //Booleans
        var rtype = av.includes(item.type);
        var rsize = item.size < maxsize;
        //Check Requirements
        let img = new Image;
        img.onload = ()=>{
          let minsize = 600;
          let width = img.width;
          let height = img.height;
          //Fixing bug, images being upload althought it doesn't apply to the rules
          for(let i = 0; i<1; i++){
            if(!rtype){
              this.errorImage("Tipo de Arquivo não é uma imagem"); //Check if it's an image
              continue;
            } 
            if(!rsize){ //Check image size exceed 3mb
              this.errorImage("Arquivo muito grande envie no máximo 3mb")
              continue;
            } 
            if(width < minsize && height < minsize){ //Check the dimensions are atach the min size
              this.errorImage(`A Imagem precisa ter ${minsize}px em um dos lados`)
              continue;
            } 
            if(width > 1920 || height > 1080){ //Check if the dimensions exceed the max size
              this.errorImage("A Imagem é muito grande precisa ser menor do que 1920x1080")
              continue;
            } else {
              this.previewImage(item, url, imgname); //So it can be displayed 
            }
         }
        }
        img.src = url;
      }
  },
  previewImage: function(item,url,imgname){
        this.errormessageI = [];
        let imageObj = new Object;
        imageObj.url = url;
        imageObj.filename = imgname;
        imageObj.filetype = item.type;
        this.imageArray.push(imageObj);
        this.imageFile.push(item);
        this.imagelenght +=1;
  },
  errorImage(msg){
      this.errormessageI.push(msg);
      setTimeout(()=>{
        this.errormessageI = [];
      },5000)
  },
  //Image End

  //Logo 
  logoSelect: function (){
      this.$refs.logoInput.click()
  },
  onlogoselect: function(){
        const logoInput = this.$refs.logoInput;
        let Logo = logoInput.files[0];
        this.verificateLogoImage(Logo);
  },
  logoerror: function(msg){
      this.errorlogoL.push(msg);
      setTimeout(()=>{
        this.errorlogoL = [];
      },5000)
  },
  verificateLogoImage: function(Logo){
      //Define rules
      const av = ["image/jpeg","image/jpg","image/png","image/webp"];
      const maxsize = 3000000; //3Mb to Bytes
      //Check item by item comply with the rule
      let url = URL.createObjectURL(Logo);
      //Booleans
      var rtype = av.includes(Logo.type);
      var rsize = Logo.size < maxsize;
      //Check Requirements
      let img = new Image();
      img.onload = () => {
        let minsize = 64;
        let width = img.width;
        let height = img.height;
        if(!rtype){
          this.logoerror("Tipo de Arquivo não é uma imagem");
        } else if(!rsize){
          this.logoerror("Arquivo muito grande envie no máximo 3mb")
        } else if(width < minsize || height < minsize){
          this.logoerror("Este arquivo é muito pequeno precisa ter 64px nos dois lados")
        } else if(width > 512 || height > 512){
          this.logoerror("Logo muito grande precisa ser menor do que 512")
        } else{
          this.onlogopreview(Logo,url);
        }
      }

      img.src = url;
  },
  onlogopreview: function(item,url){
      let Logo = new Object;
        Logo.url = url;
        Logo.filename = item.name;
        Logo.filetype = item.type;
        this.logolenght +=1;
        this.logoItem = [Logo];
        this.img = url;
      this.logoFile.push(item);
  },
  removeLogo: function(){
        this.logoItem = [];
        this.logolenght = 0;
        this.logoItem.splice(0,1);
  },
  sendImageLogo(){
      let isValid = this.imagelenght > 0;
      let hsLogo = this.logolenght > 0;
      if(!isValid){
        this.errormessageI.push("Por favor adicione no minimo uma foto");
      } else if(hsLogo && isValid){
        let data = this.$route.params.datas;
        let datas = {
          profile: data.profile,
          images: this.imageFile,
          logo: this.logoFile,
        }
        this.$router.push({
          name: "TeamStructure",
          params: {datas}
        })
      } else {
        let data = this.$route.params.datas;
        let datas = {
          profile: data.profile,
          images: this.imageFile,
        }
        this.$router.push({
          name: "TeamStructure",
          params: {datas}
        })
      }   
  },
  //Logo Ends
 


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

.image {
  grid-column: 2/13;
}




/*Logo*/
.logo-wrap{
  display: flex;
  flex-shrink: 0;
  align-items:center;
  width: 98%;
  height: 12vmax;
  padding-left: 12px;
  background-color: #e2e4e381;
  overflow-x: auto;
}

#logo{
  margin-top: 16px;
  margin-bottom: 32px;
}

.row{
  display: flex;
  flex-direction: row;

}

.draggable{
  display: flex;
}
#logo-content .navlogo .remove img, #logo-content .navlogo .edit img{
  cursor: pointer;
  background-color: #e7e7e7e7;
  border-radius: 4px;
  margin-left: 8px;
  padding: 4px;
  width: auto;
  height: 22px;
}

#logo-content .navlogo{
  position: absolute;
  z-index: 1;
  top: 4px;
  right: 4px;
}
 
#logo-content {
  box-shadow: 1px 1px 5px 1px #cfcfcf;
  position: relative;
  background-color: #e7e7e7e7;
  border-radius: 4px;
  width: 8.2vmax;
  height: 8.2vmax;
  padding: 8px;
}

#logo-content .add-logo {
  cursor: pointer;
  height: 100% ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo-content .add-logo span a {
  color: #00a28c;
  text-decoration: underline;
}

#logo-content .add-logo img{
  height: 1.8em;
  margin-bottom: 4px;
  width: auto;
}

#logo-content .add-logo span{
  text-align: center;
  color: black;

}

#logo-content .preview-logo{
  height: 100%;
  width: 100%;

}

#logo-content .preview-logo img{
  height: 100%;
  width: 100%;
}
/*Logo ends here */


/*Images starts here */
#image-content{
  display: flex;
  flex-shrink: 0;
  align-items:center;
  width: 100%;
  height: 12vmax;
  background-color: #e2e4e381;
  overflow-x: auto;
}

.image-preview{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:13px;
  height: auto;
}

.image-preview .image{
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview .image img {
  width: 100%;
  height: 50%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

#top-bar{
  display: flex;
  align-items: flex-end;
  width: 8vmax;
  margin-bottom: 4px;
}

#top-bar img{
  height: 20px;
  cursor: pointer;
  margin-right: 8px;

}

#top-bar span{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inherit;
  width: 6.5rem;
}

#image-content .addimg{
 cursor: pointer;
 box-shadow: 1px 1px 5px 1px #cfcfcf;
 border: inherit;
 background-color: #e7e7e7e7;
 display: flex;
 padding: 8px;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 8.2vmax;
 margin-top: 24px;
}

#image-content .addimg span{
  display: inherit;
  text-align: center;
  width: 99%;
}

#image-content .addimg span a{
  color: #00a28c;
  text-decoration: underline;
}

#image-content .image-preview .addimg img{
  height: 1.8em;
  margin-bottom: 4px;
  width: auto;
}

.border{
  border: 1px solid black;
  border-radius: 4px;
  width: 8vmax;
  height: 8vmax;
}

#image-content .image-preview:nth-child(1) .image::before{
  content: "Imagem Principal";
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  text-shadow: 1px 1px 5px black;
}

.image input[type="file"], #spot .addwrap input[type="file"]{
  display: none;
}
/*Images ends here */

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
