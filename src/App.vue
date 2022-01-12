<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">
      <div class="title">
        <h3>Criação do website</h3>
      </div>

      <div class="card image">
        <div id="image">
          <h4>Coloque Imagens</h4>
          <p>
            Coloque uma ou mais Imagens sobre a estrutura qual queira mostrar 
            ao visitante, com no mínimo 640x360 Pixels
          </p>
          <div id="image-content" @dragover.prevent @drop.stop.prevent="ondrop">
            <div class="image-preview" >
                <div class="border add">
                  <img src="./assets/imageicon.svg"/>
                  <span><a href="#" v-on:click="imageSelect">Clique e selecione</a> ou Arraste aqui</span>
                </div>
              </div>
              <div v-for="(item,index) in imageArray" :key="index" class="image-preview">
                  <div id="top-bar">
                    <img src="./assets/bin.svg" alt="remove image" @click="removeImage(item)">
                    <span>{{item.filename}}</span>
                  </div>
                  <div class="border image">
                    <img :src="item.url">
                  </div>
              </div>
          <input type="file" ref="imageInput" @input="onselect" multiple>
          </div>
        </div>
        <div id="logo">
          <h4>Possui uma Logo?</h4>
          <p>
            Coloque a sua logo em fundo transparente ou branco, caso não possua uma ou não esteja 
            com o arquivo basta avançar para próxima etapa, você poderá adicionar futuramente
          </p>
          <div id="logo-content">
            <div class="preview-logo" v-for="(item,index) in logoItem" :key="index">
              <img :src="item.url">
            </div>
            <div class="add-logo" @click="logoSelect" v-if="logolenght == 0">
            <img src="./assets/logoicon.svg">
            </div>
            <div class="row navlogo" v-if="logolenght > 0">
              <div class="edit">
                <img src="./assets/crop.svg">
              </div>
              <div class="remove" @click="removeLogo">
                <img src="./assets/bin.svg">
              </div>
            </div>
            <input type="file" ref="logoInput" @input="onlogoselect">
          </div>
        </div>
        <form class="sendreset">
          <hr />
          <a href="#">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>

      </div>

      <div class="card spot">
        <div id="accessibility">
          <h4>Adicione detalhes sobre a acessibilidade na estrutura</h4>
          <p>Clique e adicione e adicione detalhes sobre qual acessibilidade a estrutura disponibiliza</p>
        </div>
        <div id="spot">
          <h4>Espaço</h4>
          <p>Adicione detalhes sobre a acomodação da instituição, se possui salas de esperas, jardins e adicione imagens se quiser para mostrarmos aos visitantes</p>
        </div>

        <form class="sendreset">
          <hr />
          <a href="#">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>
      </div>

    </div>
    
  </div>
  
</template>

<script>
import Menu from "./components/menu.vue";
import Breakline from "./components/breakline.vue";

export default {
  name: "App",
  components: {
    Menu,
    Breakline,
  },
  data() {
    return {
      imageArray:[],
      imageItem:[],
      imagelenght:0,
      logoItem:[],
      logolenght:0,
    };
  },
  methods:{
    ondrop: function(event){
        let limit = 13;
        let Images = [...event.dataTransfer.files];
        let cbv = Images.length + this.imagelenght;
        let oquesobrou = limit - this.imagelenght;
        console.log(oquesobrou);
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
        let url = URL.createObjectURL(item);
        //Booleans
        var rtype = av.includes(item.type);
        var rsize = item.size < maxsize;
        //Check Requirements
        if(!rtype){
          console.log("Tipo de Arquivo não é uma imagem");
          continue;
        }
        if(!rsize){
          console.log("Arquivo muito grande envie no máximo 3mb")
          continue;
        }
        this.previewImage(item, url);
      }
    },
    previewImage: function(item,url){
        let imageObj = new Object;
        imageObj.url = url;
        imageObj.filename = item.name;
        imageObj.filetype = item.type;
        this.imageArray.push(imageObj);
        this.imageItem.push(imageObj.filename);
        this.imagelenght +=1;
        console.log(this.logoItem)
      },

      //Image End
      //Logo 

      logoSelect: function (){
      this.$refs.logoInput.click()
    },

      onlogoselect: function(){
        const logoInput = this.$refs.logoInput;
        let Logo = logoInput.files[0];
        let url = URL.createObjectURL(Logo);
        this.onlogopreview(Logo,url);
      },
      onlogopreview: function(item,url){
        console.log(url);
        let Logo = new Object;
        Logo.url = url;
        Logo.filename = item.name;
        Logo.filetype = item.type;
        this.logoItem.push(Logo);
        this.logolenght +=1;
      },
      removeLogo: function(){
        this.logolenght = 0;
        this.logoItem.splice(0,1);
      }

    }
  }

</script>

<style>
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

.spot {
  grid-column: 2/13;
}

/*Image-Card*/

/*Logo*/

#logo{
  margin-top: 16px;
}

.row{
  display: flex;
  flex-direction: row;

}
#logo-content .navlogo .remove img, #logo-content .navlogo .edit img{
  cursor: pointer;
  background-color: #ffffff85;
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
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
  width: 16vmax;
  height: 16vmax;
}

#logo-content .add-logo {
  cursor: pointer;
  height: 100%;
  widows: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo-content .add-logo img{
  height: 8vmax;
  width: 8vmax;
}

#logo-content .preview-logo{
  height: 100%;
  width: 100%;
}

#logo-content .preview-logo img{
  height: 100%;
  width: 100%;
}

/*Logo ends here*/

/*Image-content */
#image-content{
  display: flex;
  flex-shrink: 0;
  align-items:center;
  width: 100%;
  height: 12vmax;
  overflow-x: auto;
}

.image-preview{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
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
}

#image-content .add{
 border: inherit;
 background-color: #e7e7e7e7;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 8.2vmax;
 margin-top: 24px;
}

#image-content .add span{
  margin-top: 4px;
  text-align: center;
  width: 99%;
}

#image-content .add span a{
  color: #00a28c;
}

.border{
  border: 1px solid black;
  border-radius: 4px;
  width: 8vmax;
  height: 8vmax;
}

#image-content .image-preview:nth-child(2) .image::before{
  content: "Imagem Principal";
  color: white;
  position: absolute;
  text-shadow: 1px 1px 5px black;
}






/*Image card ends here */





/*Main */

.image input[type="file"]{
  display: none;
}

.card {
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}

.card p:first-of-type {
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}

/*Send and Reset */

.card form[class="sendreset"] {
  margin-top: 16px;
}

.card form[class="sendreset"] hr {
  opacity: 0.5;
  margin-bottom: 16px;
}

.card form[class="sendreset"] input[type="reset"] {
  color: #68b400;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68b400;
  padding: 8px 16px;
}

.card form[class="sendreset"] input[type="reset"]:hover {
  background-color: #54990007;
}

.card form[class="sendreset"] a {
  text-decoration: none;
  border: inherit;
  background-color: #68b400;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

.card form[class="sendreset"] a:hover {
  background-color: #549900;
}

.card form[class="sendreset"] input[type="reset"],
.card form[class="sendreset"] a {
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
