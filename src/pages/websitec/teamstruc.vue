<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>

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
                      <TheMask mask="##" type="text" id="number" placeholder="1" v-model="inputTS[index]" />
                  </label>

                </label>
              </div>
          </article>
          <form class="sendreset">
            <hr class="sendform" />
            <a @click="strcheck" id="continue">Continuar</a>
            <input type="reset" value="Cancelar" name="cancelar" />
          </form>
    </section>

    
  </main>
</div>
</template>

<script>
import Menu from "../../components/menu.vue";
import Breakline from "../../components/breakline.vue";
import Teamitem from "../../components/teamitem.vue";
import Teamadd from "../../components/teamadd.vue";
import Quantityadd from "../../components/quantityadd.vue";
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
    Breakline
  },
  data() {
    return {
      //Main
      search: "",

      //validate
      inputTS:[],
      inputTSMessage:"",

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
        let obj = this.$route.params.datas;
        let data = new Object;
        
        if(obj.logo == undefined){
          data.profile = obj.profile;
          data.images = obj.images;
        } else {
          data.profile = obj.profile;
          data.images = obj.images;
          data.logo = obj.logo;
        }
        data.team = this.teamlist;
        data.structure = this.inputTS;

        this.$router.push({
        name: "AcessSpot",
        params: {data}
        }) 
      }
    },

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

<style scoped>
@import '../../../public/default.css';
@import '../../../public/normalizer.css';
@import '../../../public/reset.css';

.team .team label:nth-of-type(1),.team .team label:nth-of-type(2){
  margin-left: 10px;
}

/*Grid*/
#content-wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.title {
  grid-column: 2/15;
}

.team{
  grid-column: 2/13;
}

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
/*Structure ends here */

/*Main */

/*Add*/

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
  height: 34vh;
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
