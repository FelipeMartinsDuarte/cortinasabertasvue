<template>    
<div class="wrap">
  <Menu />
  <Breakline />
  <main id="content-wrap">
    <header class="title">
      <p>Etapa 1 de 2</p>
      <h1>Criação do website</h1>
    </header>

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
              <a @click="sendDescription" id="continue">Continuar</a>
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

export default {
  name: "website",
  components: {
    Menu,
    Breakline
  },
  data() {
    return {
      description:"",
    };
  },
  created: function () {
    
  },
  methods:{
    sendDescription(){
      let datas = this.$route.params.datas;
      let description  = this.description;
      datas = {...datas, description};
      console.log(datas);
    
      this.$router.push({
        name: "WebsiteVerificator",
        params: {datas}
      })

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

.description {
  grid-column: 2/13;
}

/*Description */
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
/*Card*/

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
