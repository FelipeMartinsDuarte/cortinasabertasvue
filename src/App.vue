<template>
  <div id="app">
    <Menu />
    <Breakline />

    <div id="content-wrap">
      <div class="title">
        <h3>Criação do website</h3>
      </div>

      <div class="card-profile">
        <h4>Perfil da Casa</h4>
        <p>
          Clique sobre as opções sim ou não de cada item para Definir o Perfil da instituição
        </p>

        <form>
          <div class="wrap">
          <div class="column one">
            <span>Aceitam Longa estadia?</span>
            <div class="option">
            <input type="radio" name="yesnot" id="yesnot1" value="true" hidden >
            <label for="yesnot1"><a>Sim</a></label>
            <input type="radio" name="yesnot" id="yesnot2" value="false" hidden>
            <label for="yesnot2"><a>Não</a></label>
            </div>
          </div>

          <div class="column two">
            <span>Aceitam pessoas Independentes?</span>
            <div class="option">
            <input type="radio" name="yesnot2" id="yesnot3" value="true" hidden>
            <label for="yesnot3"><a>Sim</a></label>
            <input type="radio" name="yesnot2" id="yesnot4" value="false" hidden>
            <label for="yesnot4"><a>Não</a></label>
            </div>
          </div>

          <div class="column three">
            <span>Possuem Quartos Coletivos?</span>
            <div class="option">
            <input type="radio" name="yesnot3" id="yesnot5" value="true" hidden>
            <label for="yesnot5"><a>Sim</a></label>
            <input type="radio" name="yesnot3" id="yesnot6" value="false" hidden>
            <label for="yesnot6"><a>Não</a></label>
            </div>
          </div>

          <div class="column four">
            <span>Aceitam pessoas Dependentes?</span>
            <div class="option">
            <input type="radio" name="yesnot4" id="yesnot7" value="true" hidden>
            <label for="yesnot7"><a>Sim</a></label>
            <input type="radio" name="yesnot4" id="yesnot8" value="false" hidden>
            <label for="yesnot8"><a>Não</a></label>
            </div>
          </div>

          <div class="column five">
            <span>Aceitam pessoas Semi-Dependentes?</span>
            <div class="option">
            <input type="radio" name="yesnot5" id="yesnot9" value="true" hidden>
            <label for="yesnot9"><a>Sim</a></label>
            <input type="radio" name="yesnot5" id="yesnot10" value="false" hidden>
            <label for="yesnot10"><a>Não</a></label>
            </div>
          </div>

          <div class="column six">
            <span>Aceitam Curta estadia?</span>
            <div class="option">
            <input type="radio" name="yesnot6" id="yesnot11" value="true" hidden>
            <label for="yesnot11"><a>Sim</a></label>
            <input type="radio" name="yesnot6" id="yesnot12" value="false" hidden>
            <label for="yesnot12"><a>Não</a></label>
            </div>
          </div>

          <div class="column seven">
            <span>Possuem Quartos Individuais?</span>
            <div class="option">
            <input type="radio" name="yesnot7" id="yesnot13" value="true" hidden>
            <label for="yesnot13"><a>Sim</a></label>
            <input type="radio" name="yesnot7" id="yesnot14" value="false" hidden>
            <label for="yesnot14"><a>Não</a></label>
            </div>
          </div>
          </div>
        </form>

        <hr/>

        <form id="send">
          <a href="#card-cnpj">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>
  
      </div>

      <div class="card-image">
        <div class="images">
          <h4>Coloque Imagens</h4>
          <p>
            Coloque uma ou mais Imagens sobre a estrutura qual queira mostrar ao visitante, com no mínimo 640x360 Pixels
          </p>
        </div>
        <div class="logo">
          <h4>Possui uma Logo?</h4>
          <p>
            Coloque a sua logo em fundo transparente ou branco, caso não possua uma ou não esteja com o arquivo basta avançar para próxima etapa, você poderá adicionar futuramente
          </p>
      </div>
      </div>


      
      </div>
    <Footer/>
    </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Breakline from "./components/breakline.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Menu,
    Breakline,
    Footer
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

.card-profile{
  grid-column: 2/13;
}

.card-image{
  grid-column: 2/13;
}


/*Card-Image */
.card-image{
  margin-bottom: 128px;
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}

.card-image p{
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}


/*Card-Name*/

.column{
  margin-right: 8px;
}

.card-profile .column input[type="radio"]:checked + label a{
  color: #00493f;
}

.card-profile label a {
  cursor: pointer;
}

.card-profile{
  margin-bottom: 64px;
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}

.card-profile form:first-of-type .wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card-profile p{
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}

.card-profile a ,
.card-profile span {
  display: block;
  margin-bottom: 8px;
}

.card-profile form .column{
  width: 11vmax;
}

.card-profile form .column .option{
  width: 7.5vmax;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-profile form .column a {
  text-decoration: none;
  color: #007C6B;
  font-weight: 600;
}

/*Reset & Input Send*/

.card-profile form[id="send"]{
  margin-top: 32px;
}

.card-profile hr{
  margin-top: 16px;
  opacity: 0.5;
}

.card-profile form[id="send"] a,
.card-profile form[id="send"] input[type="reset"] {
  cursor: pointer;
  font-weight: 400;
  padding: 8px 16px;
  margin-left: 8px;
  float: right;
}

.card-profile form[id="send"] a:hover {
  background-color: #549900;
}

.card-profile input[type="reset"]:hover {
  background-color: #54990007;
}

.card-profile form[id="send"] a {
  text-decoration: none;
  border: inherit;
  background-color: #68b400;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

.card-profile input[type="reset"] {
  color: #68b400;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68b400;
}

.card-profile input[type="send"] a:hover {
  background-color: #549900;
}

.card-profile input[type="reset"]:hover {
  background-color: #54990007;
}



/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>