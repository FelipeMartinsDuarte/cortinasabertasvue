<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">
      <div class="title">
        <h3>Criação do website</h3>
      </div>

  <div class="card teamplace">
    <div class="addteam">
      <h4>Adicione sua equipe</h4>
        <p>
          Clique e adicione os profissionais a qual formam e fazem parte da equipe que formam sua instituição
        </p>
        <div class="addwrap team">
          <!--Add items added to array-->
          <div v-for="(item,index) in teamitems" :key="index" class="itemarray">
            <a v-on:click="onRemoved(item)"><img src="./assets/bin.svg" alt="remove"></a>
            <Teamadd :name="item.name" :slug="item.slug" :icon="item.icon.contentType" :Base64="item.icon.imageBase64"/>
          </div>

          <!--Add something, button and list-->
          <div class="add-content">
            <!--Add button-->
            <div class="add" v-if="teamlenght < 12" v-on:click="onClicked">
            <img src="./assets/add.svg">
            </div>
            <!--Clickoutside-->
            <div class="outside" v-if="show" v-on:click="onClosed"></div>
            <!--Add List-->
            <div class="select-team" v-show="show">
                <div class="search-bar">
                  <label for="search-bar-team"></label>
                  <input type="search" id="search-bar-team" placeholder="Ex: Nutricionista" v-model="search">
                  <button><img src="./assets/searchicon.svg" alt="Search button"></button>
                </div>
                <p>Adicione os profissionais clicando em qualquer lugar do item</p>
                <!--Rendering all team options-->
                <div class="teamlist" >
                  <div v-for="(item,index) in SearchResults" :key="index" class="teamitems" >
                    <div v-on:click = "onAdded(item)">
                    <Teamitem :name="item.name" :type="item.icon.contentType" :Base64="item.icon.imageBase64" />
                    <img src="./assets/selecticon.svg" >
                    </div>
                  </div>
                </div>  
            </div>
          </div>
          
        </div>
    </div>
    <div class="structure">
      <h4>Estrutura</h4>
        <p>
          Adicione a detalhes sobre o local como quantidade de quartos, salas e banheiros e em etapas futuras você poderá adicionar os itens a qual faltam 
        </p>
    </div>
    <form class="sendreset">
        <hr/>
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
import slugify from "slugify";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Menu,
    Breakline,
    Teamitem,
    Teamadd,
  },
  data(){
    return{
      teamlist:[],
      search: '',
      show: false,
      teamitems:[],
      teamslug:[],
      teamlenght:0,
    }
  },
  methods:{
    onRemoved: function(item){
      var str = JSON.parse(JSON.stringify(item))
      var position = this.teamslug.indexOf(str.slug);
      this.teamlenght -= 1;
      this.teamitems.splice(position, 1);
      this.teamslug.splice(position, 1)
    },
    onClosed: function(){
      this.show = false;
      
    },
    onClicked: function(){
      this.show = true;
    },
    onAdded: function(item){
      let str = JSON.parse(JSON.stringify(item));
      if(this.teamslug.includes(str.slug)){
        this.onError();
      } else{
        this.onRight(str);
      }
    },
    onError: function(){
    },
    onRight: function(item){
      this.teamitems.push(item)
      this.teamslug.push(item.slug)
      this.show = false;
      this.teamlenght += 1;
    }
  },
  created: function(){
    axios.get('/api/equipe').then(res=>{
      let str = JSON.parse(JSON.stringify(res.data));
      this.teamlist = str;
    }).catch(err=>{if(err){console.log(err)}})
  },
  computed:{
    SearchResults: function(){
      if(this.search == '' || this.search == ' '){
        return this.teamlist
      } else {
        const Capitalized = this.search.charAt(0).toUpperCase() + this.search.slice(1);
        const slug = slugify(Capitalized);
        return this.teamlist.filter(item => item.slug.includes(slug));
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

.teamplace {
  grid-column: 2/13;
}


/*Main*/

.itemarray {
  display: flex;
}

.itemarray img[alt="remove"] {
  cursor: pointer;
}

.outside{
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
    border: 2px solid #00A28C;
    border-radius: 5px;
    height: 47px;
    width: 47px;
    margin-left: 13px;
}

.addwrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 14.8vmax;
  width: 100%;
  margin-bottom: 16px;
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

.card form[class="sendreset"]{
  margin-top: 16px;
}

.card form[class="sendreset"] hr{
  opacity: 0.5;
  margin-bottom: 16px;
}

.card form[class="sendreset"] input[type="reset"]{
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

.card form[class="sendreset"] input[type="reset"], .card form[class="sendreset"] a {
  cursor: pointer;
  font-weight: 400;
  margin-left: 8px;
  float: right;
  align-items: center;
}

/* Select Item */

/*Main*/
.select-team {
  z-index: 32;
  position: absolute;
  overflow-y: scroll;
  cursor:auto;
  width: 220px;
  height: 256px;
  padding: 8px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.39);
}

.select-team p:first-of-type{
  font-weight: 200;
  opacity: 0.5;
}

/*SearchBar*/
.select-team .search-bar{
  font-family: 'Segoe UI Local';
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.select-team .search-bar ::placeholder{
  opacity: 0.25;
}

.select-team .search-bar input[type="search"]{
  text-transform: capitalize;
}

.select-team .search-bar input[type="search"]{
  width: 85%;
  height: 28.5px;
  outline: none;
  font-weight: 600;
  font-size: 12px;
  text-indent: 4px;
  border: 1px solid #707070;
}

.select-team .search-bar input[type="search"]:focus{
  border: 1px solid #16d9f2;
}

.select-team .search-bar button{
  cursor: pointer;
  background-color: #007C6B;
  padding: 4px 8px;
  border: inherit;
}

.select-team .search-bar button:hover{
  background-color: #01685a;
}

/*TeamList */
.teamlist{
  margin-top: 16px;
}

/*TeamItem */

.teamitems{
  border-top: 2px solid hsla(0, 0%, 0%, 0.250);
}

.teamitems div {
  padding: 4px 0px 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

/* Select Item Ends here*/



/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
