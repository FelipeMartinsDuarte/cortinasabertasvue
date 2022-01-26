<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>


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
      //Main
      errormessageI:[],
      errorlogoL:[],
      search: "",

      logoFile:[],
      imageFile:[],

      //Image-Logo card
      imageArray:[],
      imageItem:[],
      imagelenght:0,
      logoItem:[],
      logolenght:0,
    };
  },
  methods:{
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
        this.imageFile.push(item);
        let url = URL.createObjectURL(item);
        //Booleans
        var rtype = av.includes(item.type);
        var rsize = item.size < maxsize;
        var exAn = this.imageItem.indexOf(imgname);
        //Check Requirements
        let img = new Image;
        img.onload = ()=>{
          let minsize = 600;
          let width = img.width;
          let height = img.height;
          //Fixing bug, images being upload althought it doesn't apply to the rules
          for(let i = 0; i<1; i++){
            if(exAn !== -1){
              this.imageFile.pop();
              this.errorImage("Por favor não envie Imagens duplicadas"); //Check if it's an image
              continue;
            }
            if(!rtype){
              this.imageFile.pop();
              this.errorImage("Tipo de Arquivo não é uma imagem"); //Check if it's an image
              continue;
            } 
            if(!rsize){ //Check image size exceed 3mb
              this.imageFile.pop();
              this.errorImage("Arquivo muito grande envie no máximo 3mb")
              continue;
            } 
            if(width < minsize && height < minsize){ //Check the dimensions are atach the min size
              this.imageFile.pop();
              this.errorImage(`A Imagem precisa ter ${minsize}px em um dos lados`)
              continue;
            } 
            if(width > 1920 || height > 1080){ //Check if the dimensions exceed the max size
              this.imageFile.pop();
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
        imageObj.size = item.size;
        imageObj.lastModified = item.lastModified;
        this.imageArray.push(imageObj);
        this.imageItem.push(imgname);
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
    //Logo Ends
    sendImageLogo(){
      let isValid = this.imagelenght > 0;
      if(!isValid){
        this.errormessageI.push("Por favor adicione no minimo uma foto");
      } else {
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
      }   
    }
  },
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

.image {
  grid-column: 2/13;
}


/*Image-Card*/
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

.error{
  display: inline-block;
  color: red;
  vertical-align: middle;
  margin-bottom: 8px;
}

.error i{
  margin-right: 4px;
}

/*Logo ends here*/

/*Image-content */
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
/*Image card ends here */


/* Select Item */
/*Main*/

.image input[type="file"], #spot .addwrap input[type="file"]{
  display: none;
}

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
