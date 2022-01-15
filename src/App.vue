
<template>
  <div id="app">
    <menuHeader/>
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
        </article>

        <article id="logo">
          <header>
          <h2>Possui uma Logo?</h2>
          <p>
            Coloque a sua logo em fundo transparente ou branco. Você poderá adicionar futuramente!
          </p>
          </header>
          <aside id="logo-content">
            <nav class="row navlogo" v-if="logolenght > 0">
              <div class="edit">
                <img src="./assets/crop.svg" alt="cortar imagem">
              </div>
              <div class="remove" @click="removeLogo">
                <img src="./assets/bin.svg" alt="excluir imagem">
              </div>
            </nav>
            <figure class="preview-logo" v-for="(item,index) in logoItem" :key="index">
              <img :src="item.url" alt="visualisação da sua logomarca">
            </figure>
            <figure class="add-logo" @click="logoSelect" v-if="logolenght == 0">
             <img src="./assets/logoicon.svg" alt="crie sua logo aqui">
            </figure>
            <input type="file" ref="logoInput" @input="onlogoselect">
          </aside>
        </article>

        <form class="sendreset">
          <hr />
          <a href="#spot">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>
      </section>

      <section class="card spot">
        <article id="accessibility">
          <header>
          <h2>Adicione detalhes sobre a acessibilidade</h2>
          <p>Clique e adicione a acessibilidade que a estrutura possui</p>
          </header>
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
        </article>

        <article id="spot">
          <header>
          <h2>Espaço</h2>
          <p>
          Clique e Adicione a acomodação disponibilizada e opcionalmente adicione imagens. Ex: Sala de espera, Jardim
          </p>
          </header>
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
                :imgUrl="spotfiles[index]"
              />

              <div class="lateral-img" v-if="spotfiles[index] == 0">
                <span>{{item.name}}</span>
                <!--Pass values into indirect way-->
                <a @click="selectSpot(index)">Adicionar imagem</a> 
              </div>

              <div class="lateral-img" v-if="spotfiles[index] != 0">
                <span>{{item.name}}</span>
                <!--Pass values into indirect way-->
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
        </article>

        <form class="sendreset">
          <hr />
          <a href="#">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>
      </section>

      <section class="card contact">
        <article>
        <header>
        <h2>Contato</h2>
        <p>
          Adicione os meios de contato existentes cujo o cliente possa entrar em contato e o horário em que a instituição permanece 
          aberta para visitas, coloque no mínimo um meio de contato 
        </p>
        </header>

        <div class="flexbox">

        <address class="pa po">
          <label for="website">
          <span>Site</span>
          </label>
          <input type="text" id="website" placeholder="www.seusite.com">
        </address>

        <address class="pa po">
          <label for="tel">
          <span class="rw">Telefone contato *</span>
          </label>
          <TheMask mask="(##) ####-#####" type="text" id="tel"/>
        </address>

        <address class="pa">
          <label for="tel2">
          <span>Telefone contato #2</span>
          </label>
          <TheMask mask="(##) ####-#####" type="text" id="tel2"/>
        </address>

      

        <time class="pa ab">
          <label for="opentime">
          <span>Horário Aberto a visitação *</span> 
          <input type="time" v-if="!srdisabled">
          <input type="time" v-if="srdisabled" :value="srd" class="dis" disabled/>
          <span>ás</span>    
          <input type="time" v-if="!srdisabled" id="opentime" />
          <input type="time" v-if="srdisabled" :value="sra" id="opentime" class="dis" disabled/>
          </label>
          <a v-if="!sr" @mouseover="showTagSR"  @click="srClick"><abbr title="Sem restrição">S/R</abbr></a>
          <a v-if="sr"  @mouseout="closeTagSR"  @click="srClick" class="sr"><abbr>S/R</abbr></a>
        </time>

        </div>

        <form class="sendreset">
          <hr />
          <a href="#">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>


        </article>
      </section>

    </main>
    
  </div>
  
</template>

<script>
import menuHeader from "./components/menu.vue";
import Breakline from "./components/breakline.vue";
import Teamitem from "./components/teamitem.vue";
import Teamadd from "./components/teamadd.vue";
import Spotadd from "./components/spotadd.vue";
import {TheMask} from "vue-the-mask";
import slugify from "slugify";
import axios from "axios";

export default {
  name: "App",
  components: {
    menuHeader,
    Breakline,
    Teamadd,
    Teamitem,
    Spotadd,
    TheMask
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
      spotfiles:[0,0,0,0,0,0,0,0,0,0,0,0,0],

      //Acronyms
      sr:false,
      srdisabled:false,
      srd:"", //First input time
      sra:"", //Second input time

      pm:false,
      pmdisabled:false,
      pma:"",
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
    //Tags Acronyms 

    //Website
    showTagPM(){
      this.pm = true;
    },
    closeTagPM(){
      this.pm = false;
    },
    pmClick(){
      let cst = this.pmdisabled;
      this.pmdisabled = !cst;
      this.pma = "Não possui";
      setTimeout(()=>{
        this.pm = false;
      },1000);
    },

    //Time
    srClick(){
      let cst = this.srdisabled;
      this.srdisabled = !cst;
      if(this.srdisabled == true){
         this.srd = "00:00";
         this.sra = "23:59";
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
      this.search = "";
      this.showspot = true;
    },
    onAddedSpot: function (item) {
      let str = JSON.parse(JSON.stringify(item));
      if (this.spotslug.includes(str.slug)) {
        this.onErrorSpot();
      } else {
        this.search = "";
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
      this.verificateSpotImage(spotadd); //Pass to the filter that pass to the right
    },
    verificateSpotImage: function(Images){
      //Define rules
      const av = ["image/jpeg","image/jpg","image/png","image/webp"];
      const maxsize = 3000000; //3Mb to Bytes
      //Check item by item comply with the rule
      let url = URL.createObjectURL(Images);
      //Booleans
      var rtype = av.includes(Images.type);
      var rsize = Images.size < maxsize;
      //Check Requirements
      let img = new Image;
      img.onload = () =>{
        let min = 600;
        let width = img.width;
        let height = img.height;
        if(!rtype){
          console.log("Tipo de Arquivo não é uma imagem");
        } else if(!rsize){
          console.log("Arquivo muito grande envie no máximo 3mb")
        } else if(width < min && height < min){
          console.log(`A Imagem precisa ter ${min}px em um dos lados`)
        } else if(width > 1920 || height > 1080){
          console.log("Imagem muito grande precisa ser menor do que 1920x1080")
        } else{
          this.rightCreateSpot(url);
        }
      }

      img.src = url
    },
    rightCreateSpot: function(url){
      this.spotfiles.splice(this.spotslc,1,url) //Catch the selected index and replace by the image name
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
      this.search = "";
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
        this.search = "";
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
        var img = new Image;
        img.onload = ()=>{
          let minsize = 600;
          let width = img.width;
          let height = img.height;
          if(!rtype){
          console.log("Tipo de Arquivo não é uma imagem"); //Check if it's an image
          } else if(!rsize){ //Check image size exceed 3mb
            console.log("Arquivo muito grande envie no máximo 3mb")
          } else if(width < minsize && height < minsize){ //Check the dimensions are atach the min size
            console.log(`A Imagem precisa ter ${minsize}px em um dos lados`)
          } else if(width > 1920 || height > 1080){ //Check if the dimensions exceed the max size
            console.log("A Imagem é muito grande precisa ser menor do que 1920x1080")
          } else{
            this.previewImage(item, url); //So it can be displayed
          }
        }
        img.src = url;
        
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
          console.log("Tipo de Arquivo não é uma imagem");
        } else if(!rsize){
          console.log("Arquivo muito grande envie no máximo 3mb")
        } else if(width < minsize || height < minsize){
          console.log("Este arquivo é muito pequeno precisa ter 64px nos dois lados")
        } else if(width > 512 || height > 512){
          console.log("Logo muito grande precisa ser menor do que 512")
        } else{
          this.onlogopreview(Logo,url);
        }
      }

      img.src = url;
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

.contact {
  grid-column: 2/13;
}

/*Contact-Card */


/*Contact card ends here */
.contact time input[type="time"]{
  padding-top: 1px;
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
  background-color: #e2e4e381;
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
  padding-top:13px;
  width: 100%;
  margin-bottom: 16px;
  background-color: #e2e4e381;
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
  font-family: "Segoe UI Local", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
}

.selectbar .search-bar ::placeholder {
  opacity: 0.5;
}

.selectbar .search-bar input[type="search"] {
  -webkit-appearance:none;
  border-radius: 0;
  text-transform: capitalize;
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

/*TeamItem */

.items:nth-child(n+2) {
  border-top: 2px solid #00000040;
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
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 16px;
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
  width: 38vmax;
}

.title h1{
  margin-top: 8px;
  margin-bottom: 32px;
  font-weight: 700;
}

.title p{
  color:#006154;
  font-weight: 600;
}

</style>
