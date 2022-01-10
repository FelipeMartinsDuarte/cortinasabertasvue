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
              <div v-for="(url,index) in imageArray" :key="index">
                <img :src="url">
              </div>
            </div>
            <div class="add-image" v-if="imagelenght == 0">
              <img src="./assets/imageicon.svg"/>
              <span><a href="#" v-on:click="imageSelect">Clique e selecione</a> ou Arraste aqui uma ou mais Imagens</span>
            </div>

          <input type="file" ref="imageInput" @input="previewImage" multiple>
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
      imagelenght:0,
    };
  },
  methods:{
    imageSelect: function (){
      this.$refs.imageInput.click()
    },
    previewImage: function(){
      const imageInput = this.$refs.imageInput;
      let Images = [...imageInput.files];
      for(var item of Images){
        let url = URL.createObjectURL(item);
        this.imageArray.push(url);
        this.imagelenght +=1;
      }

    }
  }
};
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
  width: 47vmax;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
}

.image-preview img{
  height: 8.8vmax;
  width: auto;
  margin-left: 8px;
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
