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

          <form class="sendreset" >
            <div class="wrapprofile">
              <fieldset class="columnprofile">
                <span :class="errorstyleP[0]">Aceitam Longa estadia?</span>
                <div class="option">
                <input type="radio" name="yesnot" id="yesnot1" :value="true" v-model="inputP[0]"  hidden >
                  <label for="yesnot1" @click="profileClick(true,1)" ><a>Sim</a></label>
                  <input type="radio" name="yesnot" id="yesnot2" value="false" v-model="inputP[0]" hidden>
                  <label for="yesnot2" @click="profileClick(false,1)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[1]">Aceitam Curta estadia?</span>
                <div class="option">
                  <input type="radio" name="yesnot6" id="yesnot11" value="true" v-model="inputP[1]" hidden>
                  <label for="yesnot11" @click="profileClick(true,2)"><a>Sim</a></label>
                  <input type="radio" name="yesnot6" id="yesnot12" value="false" v-model="inputP[1]" hidden>
                  <label for="yesnot12" @click="profileClick(false,2)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[2]">Possuem Quartos Coletivos?</span>
                <div class="option">
                  <input type="radio" name="yesnot3" id="yesnot5" value="true" v-model="inputP[2]" hidden>
                  <label for="yesnot5" @click="profileClick(true,3)"><a>Sim</a></label>
                  <input type="radio" name="yesnot3" id="yesnot6" value="false" v-model="inputP[2]" hidden>
                  <label for="yesnot6" @click="profileClick(false,3)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[3]">Possuem Quartos Individuais?</span>
                <div class="option">
                  <input type="radio" name="yesnot7" id="yesnot13" value="true" v-model="inputP[3]" hidden>
                  <label for="yesnot13" @click="profileClick(true,4)"><a>Sim</a></label>
                  <input type="radio" name="yesnot7" id="yesnot14" value="false" v-model="inputP[3]" hidden>
                  <label for="yesnot14" @click="profileClick(false,4)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[4]">Aceitam pessoas Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot4" id="yesnot7" value="true" v-model="inputP[4]" hidden>
                  <label for="yesnot7" @click="profileClick(true,5)"><a>Sim</a></label>
                  <input type="radio" name="yesnot4" id="yesnot8" value="false" v-model="inputP[4]" hidden>
                  <label for="yesnot8" @click="profileClick(false,5)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[5]">Aceitam pessoas Independentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot2" id="yesnot3" value="true" v-model="inputP[5]" hidden>
                  <label for="yesnot3" @click="profileClick(true,6)"><a>Sim</a></label>
                  <input type="radio" name="yesnot2" id="yesnot4" value="false" v-model="inputP[5]" hidden>
                  <label for="yesnot4" @click="profileClick(false,6)"><a>Não</a></label>
                </div>
              </fieldset>

              <fieldset class="columnprofile">
                <span :class="errorstyleP[6]">Aceitam pessoas Semi-Dependentes?</span>
                <div class="option">
                  <input type="radio" name="yesnot5" id="yesnot9" value="true" v-model="inputP[6]"  hidden>
                  <label for="yesnot9" @click="profileClick(true,7)"><a>Sim</a></label>
                  <input type="radio" name="yesnot5" id="yesnot10" value="false" v-model="inputP[6]" hidden>
                  <label for="yesnot10" @click="profileClick(false,7)"><a>Não</a></label>
                </div>
              </fieldset>
            </div>
          </form> 
          <form v-if="change.profile != false" class="sendreset"> 
            <hr class="sendform" />
            <a id="continue" class="edit" @click="Profilesend">Salvar</a>
            <input type="reset" @click="cancelState(1)" class="remove" value="Cancelar" name="cancelar" />
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
            <form class="sendreset" v-if="change.image != false">
              <hr class="sendform" />
              <a id="continue" class="edit" @click="sendImageLogo">Salvar</a>
              <input type="reset" class="remove" @click="cancelState(2)"  value="Cancelar" name="cancelar" />
            </form>
          </article>
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
                <figure v-on:click="onRemovedTeam(item)" v-if="item.name !== 'Médicos' && item.name !== 'Enfermagem'"><img src="../../assets/bin.svg" alt="Remove"/></figure>
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
                <figure class="add" v-if="teamlenght < 12" v-on:click="onClickedTeam"><img src="../../assets/add.svg"/></figure>
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
              <span class="error" v-if="inputTSMessage !== ''"><i class="fas fa-exclamation-circle"></i>{{inputTSMessage}}</span>
              <div class="addwrap structura">
                <!--Add items added to array-->
                <label v-for="(item, index) in strucitems" :key="index" class="itemarray">
                  <Quantityadd
                    :name="item.name"
                    :slug="item.slug"
                    :icon="item.icon.contentType"
                    :Base64="item.icon.imageBase64"
                  />
                  <label for="number" id="lateral-struc">
                      <span>{{item.name}}</span>
                      <TheMask mask="##" type="text" id="number" placeholder="1" @keydown.native="changeState(3)" v-model="inputTS[index]" />
                  </label>

                </label>
              </div>
            <form class="sendreset" v-if="change.team != false">
              <hr class="sendform" />
              <a id="continue" class="edit" @click="strcheck">Salvar</a>
              <input type="reset" @click="cancelState(3)" class="remove" value="Cancelar" name="cancelar" />
            </form>
          </article>
    </section>

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
            <form class="sendreset" v-if="change.acess != false">
              <hr class="sendform" />
              <a id="continue" class="edit" @click="checkacess">Salvar</a>
              <input type="reset" @click="cancelState(4)" class="remove" value="Cancelar" name="cancelar" />
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
            <fieldset>
              <div class="flexbox">
                <address class="pa po">
                  <label for="website">
                  <span>Site</span>
                  </label>
                  <input type="text" id="website" placeholder="www.seusite.com" v-model="webs" @keydown="changeState(5)" @click="desableC(0)"/>
                  <span class="error" v-if="weberror != ''"><i class="fas fa-exclamation-circle"></i>{{weberror}}</span>
                </address>
                <address class="pa po">
                  <label for="tel">
                  <span class="rw">Telefone contato <i class="important">*</i></span>
                  </label>
                  <TheMask mask="(##) ####-#####" type="text" id="tel" v-model="tel" @keydown.native="changeState(5)" @click.native="desableC(1)"/>
                  <span class="error" v-if="telerror != ''"><i class="fas fa-exclamation-circle"></i>{{telerror}}</span>
                </address>
                <address class="pa">
                  <label for="tel2">
                  <span>Telefone contato #2</span>
                  </label>
                  <TheMask mask="(##) ####-#####" type="text" id="tel2"  v-model="tel2" @keydown.native="changeState(5)" @click.native="desableC(2)"/>
                  <span class="error" v-if="tel2error != ''"><i class="fas fa-exclamation-circle"></i>{{tel2error}}</span>
                </address>
                <time class="pa ab">
                  <label for="opentime">
                  <span>Horário Aberto a visitação <i class="important">*</i></span> 
                  <input type="time" v-if="!srdisabled" v-model="srd" @click="desableC(3)" @keydown="changeState(5)" />
                  <input type="time" v-else v-model="srd" class="dis" disabled/>
                  <span>ás</span>    
                  <input type="time" v-if="!srdisabled" v-model="sra" id="opentime" @keydown="changeState(5)"  @click="desableC(3) "/>
                  <input type="time" v-else v-model="sra" id="opentime" class="dis" disabled/>
                  </label>
                  <a v-if="!sr" @mouseover="showTagSR"  @click="srClick"><abbr title="Sem restrição">S/R</abbr></a>
                  <a v-else @mouseout="closeTagSR"  @click="srClick" class="sr"><abbr>S/R</abbr></a>
                  <span class="error" v-if="timeerror != ''"><i class="fas fa-exclamation-circle"></i>{{timeerror}}</span>
                </time>
              </div>
            </fieldset>
            <form class="sendreset" v-if="change.contact != false">
              <hr class="sendform" />
              <a id="continue" class="edit" @click="checkEmail">Salvar</a>
              <input type="reset" @click="cancelState(5)" class="remove" value="Cancelar" name="cancelar" />
            </form>
          </article>
    </section>

    <section class="card description">
          <article>
            <header>
              <h2>Fale um pouco sobre vocês</h2>
              <p>Adicione uma descrição a qual será mostrada aos usuários</p>
            </header>

                <fieldset>
                  <textarea maxlength="5000" v-model="description"></textarea>
                  <ul>
                    <li>Não inclua caracteres especiais</li>
                    <li>Conselho: Seja empático e profissional</li>
                  </ul>
                </fieldset>
              <form class="sendreset">
              <hr class="sendform" />
              <a id="continue">Continuar</a>
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
import draggable from 'vuedraggable'
import Teamitem from "../../components/teamitem.vue";
import Teamadd from "../../components/teamadd.vue";
import Spotadd from "../../components/spotadd.vue";
import Quantityadd from "../../components/quantityadd.vue";
import Validator from 'validator';
import {TheMask} from "vue-the-mask";
import slugify from "slugify";
import axios from "axios";

export default {
  name: "website",
  components: {
    Teamadd,
    Teamitem,
    Quantityadd,
    TheMask,
    Menu,
    Breakline,
    draggable,
    Spotadd,
  },
  data() {
    return {
      //Backup
      backup:{},

      //Main
      search: "",

      //Change
      change:{
        profile:false,
        image:false,
        team:false,
        acess:false,
        contact:false,
        description:false,
      },

      //Description
      description:"",

      //Contact
      weberror:"",
      telerror:"",
      tel2error:"",
      timeerror:"",
  
      sr:false,
      srdisabled:false,
      tel:"",
      tel2:"",
      webs:"",
      srd:"", 
      sra:"", 

      //Accessibility
      erroracessmessage:"",

      acesslist: [],
      showacess: false,
      acessitems: [],
      acessslug: [],
      acesslenght: 0,

      //Spot
      errorspotmessage:"",

      spotlist: [],
      showspot: false,
      spotitems: [],
      spotslug: [],
      spotlenght: 0,

      spotslc:0,
      spotfiles:[0,0,0,0,0,0,0,0,0,0,0,0,0],
      spotImgFl:[0,0,0,0,0,0,0,0,0,0,0,0,0],

      //Team - Structure
      inputTS:[],
      inputTSMessage:"",

      teamlist: [],
      showteam: false,
      teamitems: [],
      teamslug: [],
      teamlenght: 0,

      showstruc: false,
      strucitems: [],

      //Profile
      isDisabledP:[false,false,false,false,false,false,false],
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
    axios
      .get("/api/equipe")
      .then((res) => {
        let str = JSON.parse(JSON.stringify(res.data));
        this.teamlist = str; //Add to a list for search
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
  //Save Edit
  cancelState(num){
    if(num === 1){
    //Reset - Blanking the Paper and Rewriting the Previous Expression
    for(let i = 0; i < this.backup.profile.length; i++){
    //Subtituting item by item for be reactive
    this.inputP.splice(i,1,this.backup.profile[i].data);
    }
    }
    if(num === 2){
      //Reset - Blanking the Paper;
      this.imageFile = [];
      this.imageArray = [];
      this.imageItem = [];
      this.imagelenght = 0;
      //Write the previous expression
      this.verificateImage(this.backup.images);
      //Reset - Blanking the Paper
      this.logoFile = [];
      this.imageFile = [];
      this.logoItem = [];
      this.logolenght = 0;
      //Write the previous expression
      if(this.backup.logo.length != 0){
      this.verificateLogoImage(this.backup.logo[0]);
      }
    }
    if(num === 3){
      //Reset - Blanking the Paper
      this.teamitems = []; //Where the v-for render from
      this.teamslug = []; //Where the Remove take the items
      this.teamlenght = 0;
      //Write the Previous Expression
      for(const k of this.backup.team){
      this.onAddedTeam(k);
      }
      //Reset and Blank + Write the Previous Expression - Substituting
      this.inputTS[0] = this.backup.structure[0];
      this.inputTS[1] = this.backup.structure[1];
      this.inputTS[2] = this.backup.structure[2];
    }
    if(num === 4){
      //Reset - Blanking the Paper 
      this.spotfiles = [0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.spotImgFl = [0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.spotslug = [];
      this.spotitems = [];
      //Write the previous Expession
      for(let i = 0; i < this.backup.spot.length; i++){
        this.spotfiles.splice(i,1,this.backup.spot[i].url);
        this.spotImgFl.splice(i,1,this.backup.spot[i].data);
        this.spotslug.push(this.backup.spot[i].slug);
        this.spotitems.push(this.backup.spot[i].item); 
      }
      //Reset - Blanking the Paper
      this.acessitems = []; //Where the V-FOR Render From
      this.acessslug = []; //Where the Remove use to find
      this.acesslenght = 0; //Used in V-IF
      //Write the Previous Expression
      for(const k of this.backup.accessibility){
      this.onAddedAcess(k);
      }
    }
    if(num === 5){
      //Blanking the Paper - Reset
      this.sr = false; //Time Input Reset
      this.srdisabled = false;
      this.srd = "";
      this. sra = "";
      this.tel = "";  //Cellphone Reset
      this.tel2 = "";
      this.webs = ""; //Website Reset
      //Rewriting the Previous Expression
      this.tel = this.backup.contact.tel; //Cellphone Writing
      if(datas.contact.tel2 !== ""){
      this.tel2 = this.backup.contact.tel2;
      }
      if(datas.contact.website !== ""){ //Website Writing
      this.webs = this.backup.contact.website;
      }
      if(this.backup.contact.time.initial == "00:00" 
      && this.backup.contact.time.end == "23:59"){ //Time Writing
        this.srdisabled = true; //Check if it was disabled when sent and keep it
        this.srd = "00:00";
        this.sra = "23:59";
      } else {
        this.srd = this.backup.contact.time.initial; //Check if it wasn't disabled and keep it previous values
        this.sra = this.backup.contact.time.end;
      }
    }
  },

  changeState(num){
    switch(num){
      case 1:
        this.change.profile = true;
        break;
      case 2:
        this.change.image = true;
        break;
      case 3:
        this.change.team = true;
        break;
      case 4:
        this.change.acess = true;
        break;
      case 5:
        this.change.contact = true;
        break;
      case 6:
        this.change.description = true;
        break;
    }
  },
  //Contact
  desableC(num){
      if(num == 0){
        this.weberror = "";
      }
      if(num == 1){
        this.telerror = "";
      }
      if(num == 2){
        this.tel2error = "";
      }
      if(num == 3){
        this.timeerror = "";
      }
  },
  srClick(){
      this.timeerror = "";
      let cst = this.srdisabled;
      this.srdisabled = !cst;
      if(this.srdisabled == true){
         this.srd = "00:00";
         this.sra = "23:59";
      } else {
        this.srd = "";
        this.sra = "";
      }
      setTimeout(()=>{
        this.sr = false;
      },1000);
      this.changeState(5)
  },
  showTagSR(){
      this.sr = true;
  },
  closeTagSR(){
      this.sr = false;
  },
  checkEmail(){
      const isDtEpty = this.sra == "" || this.srd == "" || this.sra == " " || this.srd == " "; 
      const isDtValid = isNaN(this.sra) || isNaN(this.srd);

      const isTl2Epty = this.tel2 == "" || this.tel2 == " ";
      const isTl2Vlid = this.tel2.length > 9;

      const isTlEpty = this.tel == "" || this.tel == " ";
      const isTelVlid = this.tel.length > 9;

      const isEmailEpty = this.webs == "" || this.webs == " ";
      const isEmailVlid = Validator.isURL(this.webs);
      if(!isEmailEpty && !isEmailVlid){
        this.weberror = "Por favor adicione um website valído";
      }
      if(!isTl2Epty && !isTl2Vlid){
        this.tel2error = "Por favor preencha este campo corretamente";
      }
      if(isTlEpty  || !isTelVlid ){
        this.telerror = "Por favor preencha este campo corretamente";
      }
      if(isDtEpty || !isDtValid){
        this.timeerror = "Por favor preencha este campo corretamente";
      } else {
        //Save the file into backup in case cancel and what to back to the previous
        this.backup.tel = this.tel;
        this.backup.website = this.webs;
        this.backup.tel2 = this.tel2;
        this.backup.contact.time.initial = this.srd 
        this.backup.contact.time.end = this.sra
        this.change.contact = false;
      }
  },
  //Contact ends here

  //Acess
  onRemovedAcess: function (item) {
    this.changeState(4)
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
    this.changeState(4)
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
  checkacess(){
      if(this.acesslenght == 0){
        this.erroracessmessage = "Por favor adicione no minimo 1 item";
      }
      if(this.spotlenght == 0){
        this.errorspotmessage = "Por favor adicione no minimo 1 item";
      } else{
        let array = [];
        for(let i = 0; i < this.spotlist.length; i++){
          let obj = new Object;
          obj.item = this.spotlist[i];
          obj.data = this.spotImgFl[i];
          array.push(obj);
        }
        //Is saving in the backup to back to the previous
        this.backup.accessibility = this.acesslist;
        this.backup.spot = array;
        this.change.acess = false;
      }
    },
  //Acess ends here

  //Spot starts here
  onRemovedSpot: function (item,index) {
      this.changeState(3)
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
      this.change.acess = true;
  },
  onClosedSpot: function () {
      this.showspot = false;
  },
  onClickedSpot: function () {
      this.changeState(4)
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
      this.changeState(4)
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
      this.changeState(3)
      this.spotfiles.splice(index,1,0) //Catch the sent item index and delete it
      this.spotImgFl.splice(index,1,0)
      this.change.acess = true;
  },
  ErrorSpotImage(msg){
      this.errorspotmessage = msg;
      setTimeout(()=>{
        this.errorspotmessage = "";
      },5000)
  },
  //Spot ends here

  //Team starts here 
  onRemovedTeam: function (item) {
      this.changeState(3)
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
      this.changeState(3)
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
  strcheck(){
      let array = new Array;
      for(const i of this.inputTS){
        array.push(i);
      }
      if(array.length < 3){
        this.inputTSMessage = "Por favor não esqueça de preencher todos campos";
        setTimeout(()=>{
          this.inputTSMessage = "";
        },5000)
      } else {
        this.backup.team = this.teamcase;
        console.log(this.backup.team);
        console.log(this.teamcase);
        this.change.team = false;
      }
  },

  //Team ends here

  //Profile Starts here
  profileClick(boolean, item){
    this.changeState(1)
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
        this.backup.profile = objarray;
        this.change.profile = false;
      }
  },
  //Profille Ends here

  //Image starts here
  ondrop: function(event){
    this.changeState(2)
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
      this.changeState(2)
      var position = this.imageItem.indexOf(item.filename);
      this.imagelenght -= 1;
      this.imageArray.splice(position, 1);
      this.imageItem.splice(position, 1);
      this.imageFile.splice(position,1);
  },
  imageSelect: function (){
    this.changeState(2)
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
    this.changeState(2)
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
    this.changeState(2)
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
        this.backup.logo = this.logoFile;
        this.backup.images = this.imageFile;
        this.change.image = false;
      } else {
        this.backup.logo = [];
        this.backup.images = this.imageFile;
        this.change.image = false;
      }
  },
  //Logo Ends
 },
 computed: {
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
 },
 mounted(){
   if(this.$route.params.datas != undefined){ //If are not undefined
    let datas = this.$route.params.datas;
    this.backup = datas; //Fullfilling the Backup
    
    //Profille
    for(let i = 0; i < this.backup.profile.length; i++){
      this.inputP.splice(i,1,this.backup.profile[i].data);
    }

    //Images
    this.verificateImage(this.backup.images);
    if(this.backup.logo != undefined){
      this.verificateLogoImage(this.backup.logo[0]);
    }

    //Team - Structure
    for(const k of this.backup.team){
      this.onAddedTeam(k); //Are being rendering as this option was selected by the user
    }
    this.inputTS[0] = this.backup.structure[0];
    this.inputTS[1] = this.backup.structure[1];
    this.inputTS[2] = this.backup.structure[2];

    //Acessibility - Spot
    for(const k of this.backup.accessibility){
      this.onAddedAcess(k);
    }

    for(let i = 0; i < this.backup.spot.length; i++){
      this.spotfiles.splice(i,1,this.backup.spot[i].url);
      this.spotImgFl.splice(i,1,this.backup.spot[i].data);
      this.spotslug.push(this.backup.spot[i].slug);
      this.spotitems.push(this.backup.spot[i].item); 
    }

    //Contact
    this.tel = this.backup.contact.tel;

    if(datas.contact.website !== ""){
      this.webs = this.backup.contact.website;
     }
    if(datas.contact.tel2 !== ""){
      this.tel2 = this.backup.contact.tel2;
     }
    if(this.backup.contact.time.initial == "00:00" && this.backup.contact.time.end == "23:59"){
      this.srdisabled = true;
      this.srd = "00:00";
      this.sra = "23:59";
    } else {
      this.srd = this.backup.contact.time.initial;
      this.sra = this.backup.contact.time.end;
    }

    //Description
    if(this.backup.description !== ""){
      this.description = this.backup.description;
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

.image {
  grid-column: 2/13;
}

.team{
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

/*Description*/
.description fieldset ul {
  font-weight: 200;
  list-style: disc;
  margin-left: 32px;
  width: 30%;
}

.description fieldset ul li:not(:first-of-type){
  margin-top: 16px;
}

.description fieldset {
  display: flex;
}
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
   margin-bottom: 8px;
}

.description article textarea:focus {
  border: 1px solid #00a28c;
}
/*Description ends here */

/*Contact-Card */
.contact time input[type="time"]{
  padding-top: 4px;
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

.contact .errorinput{
  border-color: red;
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

/*Spot*/
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
/*Spot ends here*/

/*Structure*/
#lateral-struc{
  padding-top: 4px;
  margin-left: 8px;
  color: #006154;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 62px;
  width: 20vmin;
}

#lateral-struc input[type="text"]{
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

#lateral-struc input[type="text"]:focus {
  border-bottom: 1px solid #00a28c83;
  color: #00a28c;
}

#lateral-struc input[type="text"]{
  width: 4vmax;
}

.team .team label:nth-of-type(1),.team .team label:nth-of-type(2){
  margin-left: 10px;
}
/*Structure ends here */

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

/*Main add starts here*/
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
  height: 13vmax;
  padding-top:13px;
  width: 100%;
  margin-bottom: 16px;
  background-color: #e2e4e381;
}

.addwrap figure{
  cursor: pointer;
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
/*Main add ends here*/


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

.card form[class="sendreset"] a[class="edit"][id="continue"] {
  background-color: #C5B800;
}

.card form[class="sendreset"] input[type="reset"][name="cancelar"][class="remove"]{
  border: 1px solid #c7ba00;
  color: #c7ba00;
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

.structura{
  height: 35vh;
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
