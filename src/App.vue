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

        

        <form class="send">
          <hr/>
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
          <div class="image-multiple" >


            <div class="image-input">


            <div class="placeholder">

            <img src="./assets/imageicon.svg" alt="icon arquivo de imagem">

            <span>Clique e Selecione ou Arraste Aqui uma ou Mais Imagens</span>

            </div>


            <input type="file" name="images" ref="ImagesArray" multiple>
          

          </div>

          <hr/>

        </div>

        

        </div>
        <div class="logo">
          <h4>Possui uma Logo?</h4>
          <p>
            Coloque a sua logo em fundo transparente ou branco, caso não possua uma ou não esteja com o arquivo basta avançar para próxima etapa, você poderá adicionar futuramente
          </p>


          <div class="logo-unique" >


            <div class="logo-input">

            <div class="placeholder">
            <img src="./assets/logoicon.svg" alt="icon arquivo de imagem">

            <span >Selecione ou Arraste aqui</span>


            </div>

            <input method="post" type="file" name="logo" id="logo" ref="ImagesLogo">
            
            </div>

            <div class="requisitos-minimos">
              <ul>
                <li>Formato: Png ou Jpeg</li>
                <li>Tamanho de 64x64 á 512x512 pixels </li>
              </ul>
            </div>

          </div>

          

        <form class="send">
          <hr/>
          <a href="#card-cnpj">Continuar</a>
          <input type="reset" value="Cancelar" />
        </form>

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
  delimiters: ['${', '}'],
  components: {
    Menu,
    Breakline,
    Footer
  },
  data(){
    return{
      filelist: []
    }
  },
  methods:{
    chooseImages(){
      this.$refs.ImagesArray.click()
    },
    chooseLogo(){
      this.$refs.ImagesLogo.click()
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

.card-profile{
  grid-column: 2/13;
}

.card-image{
  grid-column: 2/13;
}


/*Card-Image */

.image-input .placeholder img, .image-input .placeholder span {
  visibility: hidden;
}


.card-image .images hr{
  margin-top: 32px;
  margin-bottom: 24px;
  opacity: 0.25;
}


.card-image{
  margin-bottom: 128px;
  border: 2px solid #0d0d0d31;
  border-radius: 5px;
  padding: 16px;
}


.card-image .logo-unique{
  display: flex;
  flex-direction: row;
}
.card-image .logo-unique .requisitos-minimos ul li{
  list-style: disc;
  margin-bottom: 4px;
  font-weight: 200;
  color: #830039;
}

.card-image .logo-unique .requisitos-minimos {
  margin-left: 32px;
}


.card-image .logo{
  margin-top: 16px;
}

.card-image p{
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 200;
  font-size: 12px;
}

.card-image .image-multiple .image-input{
  display: block;
  width: 100%;
  height: 25vmin;
  cursor: pointer;
}


.card-image .image-multiple .placeholder{
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23528E00FF' stroke-width='4' stroke-dasharray='7%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #68B400;
  font-weight: 200;
}

.card-image .image-multiple .placeholder span{
  margin-top: 8px;
  width: 22vmax;
}

.card-image input[type="file"]{
  /*display: none;*/
}

/*Logo*/

.card-image .logo-unique span{
  margin-top: 8px;
  width: 6rem;
}

.card-image .logo .logo-unique .placeholder{
  width: 128px;
  height: 128px;
  cursor: pointer;
}

.card-image .logo-unique .placeholder{
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23528E00FF' stroke-width='4' stroke-dasharray='7%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #68B400;
  font-weight: 200;
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

form[class="send"]{
  margin-top: 16px;
}

form[class="send"] hr{
  opacity: 0.5;
  margin-bottom: 16px;
}

form[class="send"] a,
form[class="send"] input[type="reset"] {
  cursor: pointer;
  font-weight: 400;
  padding: 8px 16px;
  margin-left: 8px;
  float: right;
}

form[class="send"] a:hover {
  background-color: #549900;
}

form[class="send"] input[type="reset"]:hover {
  background-color: #54990007;
}

form[class="send"] a {
  text-decoration: none;
  border: inherit;
  background-color: #68b400;
  color: white;
  padding: 10px 16px;
  border-radius: 5px;
  margin-right: 32px;
}

form[class="send"] input[type="reset"] {
  color: #68b400;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #68b400;
}

form[class="send"] input[type="send"] a:hover {
  background-color: #549900;
}

form[class="send"] input[type="reset"]:hover {
  background-color: #54990007;
}



/*Tittle Description */
.title {
  margin-top: 32px;
  width: 38vmax;
  margin-bottom: 16px;
}
</style>