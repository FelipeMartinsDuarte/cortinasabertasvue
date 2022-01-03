<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">
      <div class="title">
        <h3>Criação do website</h3>
      </div>

      <div v-for="(item,index) in teamlist" :key="index">
        <Teamitem :name="item.name" :type="item.icon.contentType" :Base64="item.icon.imageBase64" />
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

/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>
