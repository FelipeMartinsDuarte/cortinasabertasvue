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
          <div id="image-content">
            <div class="image-preview" v-if="imagelenght > 0">
              
              <div v-for="(item,index) in imageArray" :key="index">
                <div class="imgs">
                <div class="meta-data">
                <img src="./assets/bin.svg" alt="remove image" @click="removeImage(item)">
                <span>{{item.filename}}</span>
                </div>
                <img :src="item.url">
                </div>
              </div>
            </div>
            <div class="add-image" v-if="imagelenght == 0">
              <img src="./assets/imageicon.svg"/>
              <span><a href="#" v-on:click="imageSelect">Clique e selecione</a> ou Arraste aqui uma ou mais Imagens</span>
            </div>

          <input type="file" ref="imageInput" @input="verificateImage" multiple>
          </div>



        </div>



        
        <div id="logo">
          <h4>Possui uma Logo?</h4>
          <p>
            Coloque a sua logo em fundo transparente ou branco, caso não possua uma ou não esteja 
            com o arquivo basta avançar para próxima etapa, você poderá adicionar futuramente
          </p>
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
    };
  },
  methods:{
    removeImage: function(item){
      var position = this.imageItem.indexOf(item.filename);
      this.imagelenght -= 1;
      this.imageArray.splice(position, 1);
      this.imageItem.splice(position, 1);
    },
    imageSelect: function (){
      this.$refs.imageInput.click()
    },
    verificateImage: function(){
      //Define rules
      const av = ["image/jpeg","image/jpg","image/png","image/webp"];
      const maxsize = 3000000; //3Mb to Bytes
      //Import Files
      const imageInput = this.$refs.imageInput;
      let Images = [...imageInput.files];
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

/*Image-Card*/

/*Image-content */
#image-content{
  border: 1px solid black;
  width: 100%;
  height: 12.8vmax;
}

/*add-image */
.add-image{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/*Image-preview*/
.image-preview{
  position: relative;
  height: 12.8vmax;
  width: 99%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
}

.image-preview .imgs .meta-data img{
  width: 16px;
  cursor: pointer;
  height: auto;
  margin-right: 8px;
}

.image-preview .meta-data{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4px;
}

.image-preview .imgs{
 display: flex;
 flex-direction: column;
 margin-left: 16px;
}

.image-preview .imgs .meta-data span{
  width: 8vw;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.image-preview .imgs img:nth-child(2n){
  height: 5vmax;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.8vmax 0;
  width: 10vw;
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

.card p {
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
