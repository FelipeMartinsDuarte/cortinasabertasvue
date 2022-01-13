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
                <div class="border addimg">
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
          <div class="addwrap acess">
            <!--Add items added to array-->
            <div
              v-for="(item, index) in acessitems"
              :key="index"
              class="itemarray"
            >
              <a v-on:click="onRemovedAcess(item)"
                ><img src="./assets/bin.svg" alt="remove"
              /></a>
              <Teamadd
                :name="item.name"
                :slug="item.slug"
                :icon="item.icon.contentType"
                :Base64="item.icon.imageBase64"
              />
            </div>

            <!--Add something, button and list-->
            <div class="add-content">
              <!--Add button-->
              <div class="add" v-if="acesslenght < 12" v-on:click="onClickedAcess">
                <img src="./assets/add.svg" />
              </div>
              <!--Clickoutside-->
              <div class="outside" v-if="showacess" v-on:click="onClosedAcess"></div>
              <!--Searchbar-->
              <div class="selectbar acess" v-show="showacess">
                <div class="search-bar">
                  <label for="search-bar-acess"></label>
                  <input
                    type="search"
                    id="search-bar-acess"
                    placeholder="Ex: Móveis planejados"
                    v-model="search"
                  />
                  <button>
                    <img src="./assets/searchicon.svg" alt="Search button" />
                  </button>
                </div>
                <p>
                  Adicione detalhes sobre a acessibilidade clicando em qualquer lugar do item
                </p>
                <!--Rendering all team options-->
                <div class="list acess">
                  <div
                    v-for="(item, index) in SearchResultsAcess"
                    :key="index"
                    class="items acess"
                  >
                    <div v-on:click="onAddedAcess(item)">
                      <Teamitem
                        :name="item.name"
                        :type="item.icon.contentType"
                        :Base64="item.icon.imageBase64"
                      />
                      <img src="./assets/selecticon.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="spot">
          <h4>Espaço</h4>
          <p>
          Adicione detalhes sobre a acomodação da instituição, se possui salas de esperas, jardins e adicione imagens se quiser 
          para mostrarmos aos visitantes
          </p>
          <div class="addwrap spot">
            <!--Add items added to array-->
            <div
              v-for="(item, index) in spotitems"
              :key="index"
              class="itemarray"
            >
              <a v-on:click="onRemovedSpot(item,index)"
                ><img src="./assets/bin.svg" alt="remove"
              /></a>
              <Spotadd
                :slug="item.slug"
                :icon="item.icon.contentType"
                :Base64="item.icon.imageBase64"
              />

              <div class="lateral-img">
                <span>{{item.name}}</span>
                <!--Pass values into indirect way-->
                <a @click="selectSpot(index)">Adicionar imagem</a> 
                <!--Its direct value-->
                <a @click="removeCreateSpot(index)">Remover imagem</a> 
              </div>

            </div>

            <input type="file" ref="spotInput" @input="createSpot">

            <!--Add something, button and list-->
            <div class="add-content">
              <!--Add button-->
              <div class="add add-spot" v-if="spotlenght < 12" v-on:click="onClickedSpot">
                <img src="./assets/add.svg" />
              </div>
              <!--Clickoutside-->
              <div class="outside" v-if="showspot" v-on:click="onClosedSpot"></div>
              <!--Searchbar-->
              <div class="selectbar spot" v-show="showspot">
                <div class="search-bar">
                  <label for="search-bar-spot"></label>
                  <input
                    type="search"
                    id="search-bar-spot"
                    placeholder="Ex: Jardim"
                    v-model="search"
                  />
                  <button>
                    <img src="./assets/searchicon.svg" alt="Search button" />
                  </button>
                </div>
                <p>
                  Adicione detalhes sobre o Espaço qual compõe a clinica clicando em qualquer lugar do item
                </p>
                <!--Rendering all team options-->
                <div class="list spot">
                  <div
                    v-for="(item, index) in SearchResultsSpot"
                    :key="index"
                    class="items spot"
                  >
                    <div v-on:click="onAddedSpot(item)">
                      <Teamitem
                        :name="item.name"
                        :type="item.icon.contentType"
                        :Base64="item.icon.imageBase64"
                      />
                      <img src="./assets/selecticon.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import Teamitem from "./components/teamitem.vue";
import Teamadd from "./components/teamadd.vue";
import Spotadd from "./components/spotadd.vue";
import slugify from "slugify";
import axios from "axios";

export default {
  name: "App",
  components: {
    Menu,
    Breakline,
    Teamadd,
    Teamitem,
    Spotadd,
  },
  data() {
    return {
      //Main
      search: "",

      //Image-Logo card
      imageArray:[],
      imageItem:[],
      imagelenght:0,
      logoItem:[],
      logolenght:0,

      //Select acess
      acesslist: [],
      showacess: false,
      acessitems: [],
      acessslug: [],
      acesslenght: 0,

      //Select spot
      spotlist: [],
      showspot: false,
      spotitems: [],
      spotslug: [],
      spotlenght: 0,

      spotslc:0,
      spotfiles:[0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
  },
  created: function () {
    axios
      .get("/api/acessibilidade")
      .then((res) => {
        let str = JSON.parse(JSON.stringify(res.data));
        this.acesslist = str;
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })

    axios
      .get("/api/lugar")
      .then((res) => {
        let str = JSON.parse(JSON.stringify(res.data));
        this.spotlist = str;
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
  },
  methods:{

    //Add

    //Spot
    onRemovedSpot: function (item,index) {
      var str = JSON.parse(JSON.stringify(item));
      var position = this.spotslug.indexOf(str.slug);
      this.spotlenght -= 1;
      this.spotitems.splice(position, 1);
      this.spotslug.splice(position, 1);
      //Fix item slug index decresing and files interlaced index keep the same
      let i;
      for(i = index + 1; i <= 12; i++){ //Garantee it catch from the next value until the end
        this.spotfiles.splice(i - 1, 1, this.spotfiles[i]); //Catch previous value of index number
        this.spotfiles.splice(i, 1, 0);
      }
    },
    onClosedSpot: function () {
      this.showspot = false;
    },
    onClickedSpot: function () {
      this.showspot = true;
    },
    onAddedSpot: function (item) {
      let str = JSON.parse(JSON.stringify(item));
      if (this.spotslug.includes(str.slug)) {
        this.onErrorSpot();
      } else {
        this.onRightSpot(str);
      }
    },
    onErrorSpot: function () {},
    onRightSpot: function (item) {
      this.spotitems.push(item);
      this.spotslug.push(item.slug);
      this.showspot = false;
      this.spotlenght += 1;
    },
    selectSpot: function(index){
      this.spotslc = index; //Pass selected value toa variable so it can be used to interlace the file to the slug
      this.$refs.spotInput.click()
    },
    createSpot: function(){
      const spotInput = this.$refs.spotInput; //Import the files
      let spotadd = spotInput.files[0];
      this.rightCreateSpot(spotadd); //Pass to the filter that pass to the right
    },
    rightCreateSpot: function(spotadd){
      this.spotfiles.splice(this.spotslc,1,spotadd.name) //Catch the selected index and replace by the image name
    },
    removeCreateSpot:function(index){
      this.spotfiles.splice(index,1,0) //Catch the sent item index and delete it
    },

    //Spot ends here

    //Acess
    onRemovedAcess: function (item) {
      var str = JSON.parse(JSON.stringify(item));
      var position = this.acessslug.indexOf(str.slug);
      this.acesslenght -= 1;
      this.acessitems.splice(position, 1);
      this.acessslug.splice(position, 1);
    },
    onClosedAcess: function () {
      this.showacess = false;
    },
    onClickedAcess: function () {
      this.showacess = true;
    },
    onAddedAcess: function (item) {
      let str = JSON.parse(JSON.stringify(item));
      if (this.acessslug.includes(str.slug)) {
        this.onErrorAcess();
      } else {
        this.onRightAcess(str);
      }
    },
    onErrorAcess: function () {},
    onRightAcess: function (item) {
      this.acessitems.push(item);
      this.acessslug.push(item.slug);
      this.showacess = false;
      this.acesslenght += 1;
    },
    //Acess ends here
    //Add ends here

    //Image starts here
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
    //Logo Ends


    },
    computed: {
    SearchResultsAcess: function () {
      if (this.search == "" || this.search == " ") {
        return this.acesslist;
      } else {
        const Capitalized =
          this.search.charAt(0).toUpperCase() + this.search.slice(1);
        const slug = slugify(Capitalized);
        return this.acesslist.filter((item) => item.slug.includes(slug));
      }
    },

    SearchResultsSpot: function () {
      if (this.search == "" || this.search == " ") {
        return this.spotlist;
      } else {
        const Capitalized =
          this.search.charAt(0).toUpperCase() + this.search.slice(1);
        const slug = slugify(Capitalized);
        return this.spotlist.filter((item) => item.slug.includes(slug));
      }
    },

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

#image-content .addimg{
 border: inherit;
 background-color: #e7e7e7e7;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 8.2vmax;
 margin-top: 24px;
}

#image-content .addimg span{
  margin-top: 4px;
  text-align: center;
  width: 99%;
}

#image-content .addimg span a{
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

/*Add*/

.lateral-img{
  margin-top: 4px;
  height: 78%;
  justify-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 100;
  color: #006154;
}

.lateral-img a{
  cursor:pointer;
  margin-top: 4px;
  text-decoration: underline;
  font-size: 12px;
  color:#68B400;
}

.lateral-img a:hover, .lateral-img a:active{
  color:#5a9b00;
}

.itemarray {
  display: flex;
}

.itemarray img[alt="remove"] {
  cursor: pointer;
}

.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.add {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #00a28c;
  border-radius: 5px;
  height: 47px;
  width: 47px;
  margin-left: 13px;
}

.addwrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 12vmax;
  width: 100%;
  margin-bottom: 16px;
}

/* Select Item */

/*Main*/

.selectbar {
  z-index: 32;
  position: absolute;
  overflow-y: scroll;
  cursor: auto;
  width: 220px;
  height: 256px;
  padding: 8px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.39);
}

.selectbar p:first-of-type {
  font-weight: 200;
  opacity: 0.5;
}

/*SearchBar*/
.selectbar .search-bar {
  font-family: "Segoe UI Local";
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.selectbar .search-bar ::placeholder {
  opacity: 0.25;
}

.selectbar .search-bar input[type="search"] {
  text-transform: capitalize;
}

.selectbar .search-bar input[type="search"] {
  width: 85%;
  height: 28.5px;
  outline: none;
  font-weight: 600;
  font-size: 12px;
  text-indent: 4px;
  border: 1px solid #707070;
}

.selectbar .search-bar input[type="search"]:focus {
  border: 1px solid #16d9f2;
}

.selectbar .search-bar button {
  cursor: pointer;
  background-color: #007c6b;
  padding: 4px 8px;
  border: inherit;
}

.selectbar .search-bar button:hover {
  background-color: #01685a;
}

/*TeamList */
.list {
  margin-top: 16px;
}

/*TeamItem */

.items {
  border-top: 2px solid hsla(0, 0%, 0%, 0.25);
}

.items div {
  padding: 4px 0px 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

/*Add-ends here*/

.image input[type="file"], #spot .addwrap input[type="file"]{
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
