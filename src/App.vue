
<template>
  <div id="app">
    <menuHeader/>
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
        </header>

        <form class="sendreset">
          <div class="wrapprofile">

            <fieldset class="columnprofile">
              <span>Aceitam Longa estadia?</span>
              <div class="option">
              <input type="radio" name="yesnot" id="yesnot1" value="true" hidden >
                <label for="yesnot1"><a>Sim</a></label>
                <input type="radio" name="yesnot" id="yesnot2" value="false" hidden>
                <label for="yesnot2"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Aceitam pessoas Independentes?</span>
              <div class="option">
                <input type="radio" name="yesnot2" id="yesnot3" value="true" hidden>
                <label for="yesnot3"><a>Sim</a></label>
                <input type="radio" name="yesnot2" id="yesnot4" value="false" hidden>
                <label for="yesnot4"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Possuem Quartos Coletivos?</span>
              <div class="option">
                <input type="radio" name="yesnot3" id="yesnot5" value="true" hidden>
                <label for="yesnot5"><a>Sim</a></label>
                <input type="radio" name="yesnot3" id="yesnot6" value="false" hidden>
                <label for="yesnot6"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Aceitam pessoas Dependentes?</span>
              <div class="option">
                <input type="radio" name="yesnot4" id="yesnot7" value="true" hidden>
                <label for="yesnot7"><a>Sim</a></label>
                <input type="radio" name="yesnot4" id="yesnot8" value="false" hidden>
                <label for="yesnot8"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Aceitam pessoas Semi-Dependentes?</span>
              <div class="option">
                <input type="radio" name="yesnot5" id="yesnot9" value="true" hidden>
                <label for="yesnot9"><a>Sim</a></label>
                <input type="radio" name="yesnot5" id="yesnot10" value="false" hidden>
                <label for="yesnot10"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Aceitam Curta estadia?</span>
              <div class="option">
                <input type="radio" name="yesnot6" id="yesnot11" value="true" hidden>
                <label for="yesnot11"><a>Sim</a></label>
                <input type="radio" name="yesnot6" id="yesnot12" value="false" hidden>
                <label for="yesnot12"><a>Não</a></label>
              </div>
            </fieldset>

            <fieldset class="columnprofile">
              <span>Possuem Quartos Individuais?</span>
              <div class="option">
                <input type="radio" name="yesnot7" id="yesnot13" value="true" hidden>
                <label for="yesnot13"><a>Sim</a></label>
                <input type="radio" name="yesnot7" id="yesnot14" value="false" hidden>
                <label for="yesnot14"><a>Não</a></label>
              </div>
            </fieldset>
          </div>

          <hr class="sendform" />
          <a href="#" id="continue">Continuar</a>
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
          <div id="image-content" @dragover.prevent @drop.stop.prevent="ondrop">
            <div class="image-preview" >
                <figure class="border addimg">
                  <img src="./assets/imageicon.svg"/>
                  <figcaption><span><a v-on:click="imageSelect">Clique e selecione</a> ou Arraste aqui</span></figcaption>
                </figure>
              </div>
              <label v-for="(item,index) in imageArray" :key="index" class="image-preview">
                  <figure id="top-bar">
                    <img src="./assets/bin.svg" alt="remover imagem" @click="removeImage(item)">
                    <figcaption><span>{{item.filename}}</span></figcaption>
                  </figure>
                  <figure class="border image">
                    <img :src="item.url">
                  </figure>
              </label>
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
          <div id="logo-content">
            <nav class="row navlogo" v-if="logolenght > 0">
              <figure class="edit">
                <img src="./assets/crop.svg" alt="cortar imagem">
              </figure>
              <figure class="remove" @click="removeLogo">
                <img src="./assets/bin.svg" alt="excluir imagem">
              </figure>
             </nav>

             <figure class="preview-logo" v-for="(item,index) in logoItem" :key="index">
               <img :src="item.url" alt="visualisação da sua logomarca">
             </figure>

              <div class="add-logo" @click="logoSelect" v-if="logolenght == 0">
                <img src="./assets/logoicon.svg" alt="crie sua logo aqui">
                <span>Selecione ou Arraste aqui</span>
              </div>
              <input type="file" ref="logoInput" @input="onlogoselect">
          </div>
        </article>

        <form class="sendreset">
          <hr class="sendform" />
          <a href="#" id="continue">Continuar</a>
          <input type="reset" value="Cancelar" name="cancelar" />
        </form>
      </section>

      <section class="card team">
        <article id="team">
          <header>
          <h2>Adicione sua equipe</h2>
          <p>Clique e adicione os profissionais a qual formam e fazem parte da equipe que formam sua instituição</p>
          </header>
          <div class="addwrap team">
            <!--Add items added to array-->
            <label v-for="(item, index) in teamitems" :key="index" class="itemarray">
              <figure v-on:click="onRemovedTeam(item)"><img src="./assets/bin.svg" alt="Remove"/></figure>
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
              <figure class="add" v-if="teamlenght < 12" v-on:click="onClickedTeam"><img src="./assets/add.svg"/></figure>
              <!--Clickoutside-->
              <label class="outside" v-if="showteam" v-on:click="onClosedTeam"></label>
              <!--Searchbar-->
              <fieldset class="selectbar acess" v-show="showteam">
                <label class="search-bar" for="search-bar-acess">
                  <input type="search" id="search-bar-acess" placeholder="Ex: Nutricionistas" v-model="search"/>
                </label>
                <!--Rendering all team options-->
                <div v-for="(item, index) in SearchResultsTeam" :key="index" class="items acess">
                  <label v-on:click="onAddedTeam(item)">
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

        <article id="structure">
          <header>
            <h2>Estrutura</h2>
            <p>
            Adicione a detalhes sobre o local como quantidade de quartos, salas e banheiros e em etapas futuras você poderá adicionar os itens a qual faltam 
            </p>
            </header>
            <div class="addwrap structura">
              <!--Add items added to array-->
              <label v-for="(item, index) in strucitems" :key="index" class="itemarray">
                <Quantityadd
                  :name="item.name"
                  :slug="item.slug"
                  :icon="item.icon.contentType"
                  :Base64="item.icon.imageBase64"
                />
                <label for="number" class="lateral-struc">
                    <span>{{item.name}}</span>
                    <TheMask mask="##" type="text" id="number" placeholder="1"/>
                </label>

              </label>
            </div>
        </article>
      </section>

      <section class="card spot">
        <article id="accessibility">
          <header>
          <h2>Adicione detalhes sobre a acessibilidade</h2>
          <p>Clique e adicione a acessibilidade que a estrutura possui</p>
          </header>
          <div class="addwrap acess">
            <!--Add items added to array-->
            <label v-for="(item, index) in acessitems" :key="index" class="itemarray">
              <figure v-on:click="onRemovedAcess(item)"><img src="./assets/bin.svg" alt="Remove"/></figure>
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
              <figure class="add" v-if="acesslenght < 12" v-on:click="onClickedAcess"><img src="./assets/add.svg"/></figure>
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
            <form class="sendreset">
              <div class="addwrap spot">
                <!--Add items added to array-->
                <label v-for="(item, index) in spotitems" :key="index" class="itemarray">
                  <figure v-on:click="onRemovedSpot(item,index)"><img src="./assets/bin.svg" alt="remove"/></figure>
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
                  <figure class="add add-spot" v-if="spotlenght < 12" v-on:click="onClickedSpot"><img src="./assets/add.svg" /></figure>
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
            <hr class="sendform" />
            <a href="#" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
        </article>
        
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
        <form class="sendreset">
          <fieldset>
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
            
            <hr class="sendform" />
            <a href="#" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </fieldset>
      </form>


        </article>
      </section>

      <section class="card description">
        <article>
          <header>
            <h2>Fale um pouco sobre vocês</h2>
            <p>Adicione uma descrição a qual será mostrada aos usuários</p>
          </header>

          <form class="sendreset">
              <fieldset>
                <textarea maxlength="5000"></textarea>
                <hr class="sendform" />
                <a href="#" id="continue">Continuar</a>
                <input type="reset" value="Cancelar" name="cancelar" />
              </fieldset>
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
import Quantityadd from "./components/quantityadd.vue";
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
    Quantityadd,
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

      //Select Team
      teamlist: [],
      showteam: false,
      teamitems: [],
      teamslug: ["Medicos","Enfermagem"],
      teamlenght: 2,

      //Select Structure
      struclist: [],
      showstruc: false,
      strucitems: [],
      strucslug: [],

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
      .get("/api/equipe")
      .then((res) => {
        let str = JSON.parse(JSON.stringify(res.data));
        this.teamlist = str;
        this.teamitems.push(this.teamlist[0]);
        this.teamitems.push(this.teamlist[1]);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })

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

    axios
      .get("/api/estrutura")
      .then((res) => {
        let str = JSON.parse(JSON.stringify(res.data));
        this.strucitems = str;
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
    //Tags Acronyms ends here

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

    //Team
    onRemovedTeam: function (item) {
      var str = JSON.parse(JSON.stringify(item));
      var position = this.teamslug.indexOf(str.slug);
      this.teamlenght -= 1;
      this.teamitems.splice(position, 1);
      this.teamslug.splice(position, 1);
    },
    onClosedTeam: function () {
      this.search = "";
      this.showteam = false;
    },
    onClickedTeam: function () {
      this.showteam = true;
    },
    onAddedTeam: function (item) {
      let str = JSON.parse(JSON.stringify(item));
      if (this.teamslug.includes(str.slug)) {
        this.onErrorTeam();
      } else {
        this.search = "";
        this.onRightTeam(str);
      }
    },
    onErrorTeam: function () {},
    onRightTeam: function (item) {
      this.teamitems.push(item);
      this.teamslug.push(item.slug);
      this.showteam = false;
      this.teamlenght += 1;
    },
    //Team ends here

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
        let img = new Image;
        img.onload = ()=>{
          let minsize = 600;
          let width = img.width;
          let height = img.height;
            if(!rtype){
              console.log("Tipo de Arquivo não é uma imagem"); //Check if it's an image
            } 
            if(!rsize){ //Check image size exceed 3mb
              console.log("Arquivo muito grande envie no máximo 3mb")
            } 
            if(width < minsize && height < minsize){ //Check the dimensions are atach the min size
              console.log(`A Imagem precisa ter ${minsize}px em um dos lados`)
            } 
            if(width > 1920 || height > 1080){ //Check if the dimensions exceed the max size
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
    SearchResultsTeam: function () {
      if (this.search == "" || this.search == " ") {
        return this.teamlist;
      } else {
        const Capitalized =
          this.search.charAt(0).toUpperCase() + this.search.slice(1);
        const slug = slugify(Capitalized);
        return this.teamlist.filter((item) => item.slug.includes(slug));
      }
    },
    SearchResultsStruc: function () {
      if (this.search == "" || this.search == " ") {
        return this.struclist;
      } else {
        const Capitalized = this.search.charAt(0).toUpperCase() + this.search.slice(1);
        const slug = slugify(Capitalized);
        return this.struclist.filter((item) => item.slug.includes(slug));
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

.profile{
  grid-column: 2/13;
}

.team{
  grid-column: 2/13;
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

.description {
  grid-column: 2/13;
}

/*Structure*/
.lateral-struc{
  padding-top: 4px;
  margin-left: 8px;
  color: #006154;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 62px;
  width: 20vmin;
}

.lateral-struc input[type="text"]{
  background-color: inherit;
  margin-right: 8px;
  border: inherit;
  outline: none;
  border-bottom: 1px solid #0d0d0d70;
  font-weight: 200;
  text-indent: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  color: #0d0d0d;
  width: 33vmax;
  margin-bottom: 32px;
}

.lateral-struc input[type="text"]:focus {
  border-bottom: 1px solid #00a28c83;
  color: #00a28c;
}

.lateral-struc input[type="text"]{
  width: 4vmax;
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
/*Info ends here */

/*Description */
.description article textarea {
   resize: none;  
   width: 65%;
   height: 30vh;
   border: 1px solid #B9B9B9;
   border-radius: 5px;
   padding: 16px;
   outline: none;
   font-weight: 200;
   overflow-y: auto;
}

.description article textarea:focus {
  border: 1px solid #00a28c;
}

/*Description ends here */

/*Contact-Card */
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

/*Contact ends here */


/*Image-Card*/

/*Logo*/

#logo{
  margin-top: 16px;
  margin-bottom: 32px;
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
  height: 100% ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo-content .add-logo img{
  height: 6vmax;
  width: 6vmax;
}

#logo-content .add-logo span{
  width: 50%;
  text-align: center;
  color: #68B400;
  padding-top: 4px;

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
  text-decoration: underline;
  cursor: pointer;
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

.structura{
  height: 30vh;
}

.addwrap figure{
  cursor: pointer;
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
  background: url(./assets/searchicon.svg) no-repeat center;
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

/*TeamList */

/*TeamItem */

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
