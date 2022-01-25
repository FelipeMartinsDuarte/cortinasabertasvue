<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>

    <section class="card spot">
          <article id="accessibility">
            <header>
            <h2>Adicione detalhes sobre a acessibilidade</h2>
            <p>Clique e adicione a acessibilidade que a estrutura possui</p>
            </header>
            <span class="error" v-if="erroracessmessage !== ''"><i class="fas fa-exclamation-circle"></i>{{erroracessmessage}}</span>
            <div class="addwrap acess">
              <!--Add items added to array-->
              <label v-for="(item, index) in acessitems" :key="index" class="itemarray">
                <figure v-on:click="onRemovedAcess(item)"><img src="../../assets/bin.svg" alt="Remove"/></figure>
                <Teamadd
                  :name="item.name"
                  :slug="item.slug"
                  :icon="item.icon.contentType"
                  :Base64="item.icon.imageBase64"
                />
              </label>

              <!--Add something, button and list-->
              <div class="add-content">
                <!--Add button-->
                <figure class="add" v-if="acesslenght < 12" v-on:click="onClickedAcess"><img src="../../assets/add.svg"/></figure>
                <!--Clickoutside-->
                <label class="outside" v-if="showacess" v-on:click="onClosedAcess"></label>
                <!--Searchbar-->
                <fieldset class="selectbar acess" v-show="showacess">
                  <label class="search-bar" for="search-bar-acess">
                    <input type="search" id="search-bar-acess" placeholder="Ex: Móveis planejados" v-model="search"/>
                  </label>
                  <!--Rendering all team options-->
                  <div v-for="(item, index) in SearchResultsAcess" :key="index" class="items acess">
                    <label v-on:click="onAddedAcess(item)">
                      <Teamitem 
                      :name="item.name" 
                      :type="item.icon.contentType" 
                      :Base64="item.icon.imageBase64"
                      />
                    </label>
                  </div>
                </fieldset>
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
              <span class="error" v-if="errorspotmessage !== ''"><i class="fas fa-exclamation-circle"></i>{{errorspotmessage}}</span>
                <div class="addwrap spot">
                  <!--Add items added to array-->
                  <label v-for="(item, index) in spotitems" :key="index" class="itemarray">
                    <figure v-on:click="onRemovedSpot(item,index)"><img src="../../assets/bin.svg" alt="remove"/></figure>
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

                  </label>

                  <input type="file" ref="spotInput" @input="createSpot">

                  <!--Add something, button and list-->
                  <div class="add-content">
                    <!--Add button-->
                    <figure class="add add-spot" v-if="spotlenght < 12" v-on:click="onClickedSpot"><img src="../../assets/add.svg" /></figure>
                    <!--Clickoutside-->
                    <label class="outside" v-if="showspot" v-on:click="onClosedSpot"></label>
                    <!--Searchbar-->
                    <fieldset class="selectbar spot" v-show="showspot">
                        <label class="search-bar" for="search-bar-spot">
                          <input type="search" id="search-bar-spot" placeholder="Ex: Jardim" v-model="search"/>
                        </label>
                      <!--Rendering all team options-->
                        <div v-for="(item, index) in SearchResultsSpot" :key="index" class="items spot">
                          <label v-on:click="onAddedSpot(item)">
                            <Teamitem
                            :name="item.name"
                            :type="item.icon.contentType"
                            :Base64="item.icon.imageBase64"
                            />
                        </label>
                        </div>
                    </fieldset>
                  </div>
                </div>
            <form class="sendreset">
              <hr class="sendform" />
              <a @click="checkacess" id="continue">Continuar</a>
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
import Teamitem from "../../components/teamitem.vue";
import Teamadd from "../../components/teamadd.vue";
import Spotadd from "../../components/spotadd.vue";
import slugify from "slugify";
import axios from "axios";

export default {
  name: "website",
  components: {
    Teamadd,
    Teamitem,
    Spotadd,
    Menu,
    Breakline
  },
  data() {
    return {
      //Errors
      erroracessmessage:"",
      errorspotmessage:"",

      //Main
      search: "",

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
      spotImgFl:[0,0,0,0,0,0,0,0,0,0,0,0,0],

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
    checkacess(){
      if(this.acesslenght == 0){
        this.erroracessmessage = "Por favor adicione no minimo 1 item";
      }
      if(this.spotlenght == 0){
        this.errorspotmessage = "Por favor adicione no minimo 1 item";
      } else{
        let array = [];
        let datas = this.$route.params.data;
        for(let i = 0; i < this.spotlist.length; i++){
          let obj = new Object;
          obj.item = this.spotlist[i];
          obj.data = this.spotImgFl[i];
          array.push(obj);
        }
        datas.accessibility = this.acesslist;
        datas.spot = array;

        this.$router.push({
          name: "Contact",
          params: {datas}
        })
      }
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
        this.errorspotmessage = "";
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
          this.ErrorSpotImage("Tipo de Arquivo não é uma imagem");
        } else if(!rsize){
          this.ErrorSpotImage("Arquivo muito grande envie no máximo 3mb")
        } else if(width < min && height < min){
          this.ErrorSpotImage(`A Imagem precisa ter ${min}px em um dos lados`)
        } else if(width > 1920 || height > 1080){
          this.ErrorSpotImage("Imagem muito grande precisa ser menor do que 1920x1080")
        } else{
          this.rightCreateSpot(url,Images);
        }
      }

      img.src = url
    },
    rightCreateSpot: function(url,Images){
      this.spotfiles.splice(this.spotslc,1,url) //Catch the selected index and replace by the image name
      this.spotImgFl.splice(this.spotslc,1,Images) 
    },
    removeCreateSpot:function(index){
      this.spotfiles.splice(index,1,0) //Catch the sent item index and delete it
      this.spotImgFl.splice(index,1,0)
    },
    ErrorSpotImage(msg){
      this.errorspotmessage = msg;
      setTimeout(()=>{
        this.errorspotmessage = "";
      },5000)
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
        this.erroracessmessage = "";
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

.spot {
  grid-column: 2/13;
}

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

.addwrap figure{
  cursor: pointer;
}

/* Select Item */

/*Main*/

.items:nth-child(n+3) {
  border-top: 2px solid #00000040;
}

.items label {
  padding: 4px 0px 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

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
  box-shadow: 1px 1px 3px 5px #9b989846;
}

.selectbar p:first-of-type {
  font-weight: 200;
  opacity: 0.5;
}

/*SearchBar*/
.selectbar .search-bar {
  font-family: "Segoe UI Local", sans-serif;
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 4px;
}

.selectbar .search-bar::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  background: url(../../assets/searchicon.svg) no-repeat center;
  background-size: 16px;
  height: 100%;
  width: 32px;
  background-color: #007c6b;
}

.selectbar .search-bar ::placeholder {
  opacity: 0.5;
}

.selectbar .search-bar input[type="search"] {
  -webkit-appearance:none;
  border-radius: 0;
  z-index: 1;
  text-transform: capitalize;
  width: 100%;
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
