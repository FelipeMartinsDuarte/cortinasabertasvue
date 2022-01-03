<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">
      <div class="title">
        <h3>Criação do website</h3>
      </div>

  <div class="select-team">
    <div class="search-bar">
      <label for="search-bar-team"></label>
      <input type="search" id="search-bar-team" placeholder="Ex: Nutricionista">
      <a><img src="./assets/searchicon.svg" alt="Search button"></a>
    </div>
    <p>Adicione os profissionais clicando em qualquer lugar do item</p>
    <div class="teamlist">
      <div v-for="(item,index) in teamlist" :key="index" class="teamitems">
        <Teamitem :name="item.name" :type="item.icon.contentType" :Base64="item.icon.imageBase64" />
        <img src="./assets/selecticon.svg"/>
      </div>
    </div>  
  </div>


    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Breakline from "./components/breakline.vue";
import Teamitem from "./components/teamitem.vue";
import axios from 'axios';


export default {
  name: "App",
  components: {
    Menu,
    Breakline,
    Teamitem
  },
  data(){
    return{
      teamlist:[]
    }
  },
  created: function(){
    axios.get('/api/equipe').then(res=>{
      let str = JSON.parse(JSON.stringify(res.data));
      console.log(str);
      this.teamlist = str;
    }).catch(err=>{if(err){console.log(err)}})
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

.select-team {
  grid-column: 2/15;
}

/* Select Item */

/*Main*/
.select-team {
  overflow-y: scroll;
  width: 220px;
  height: 256px;
  padding: 8px;
  border-radius: 5px;
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

.select-team .search-bar a{
  cursor: pointer;
  background-color: #007C6B;
  padding: 4px 8px;
}

.select-team .search-bar a:hover{
  background-color: #01685a;
}



/*TeamList */
.teamlist{
  margin-top: 16px;
}

/*TeamItem */
.teamitems {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid hsla(0, 0%, 0%, 0.250);
  padding: 8px 0px 8px;
}

/* Select Item Ends here*/



/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
