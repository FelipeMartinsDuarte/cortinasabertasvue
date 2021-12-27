<template>
  <div id="app">
    <header>
      <div class="menu">
        
        <ul>
          <li><a href="#"><img src="./assets/logo.svg" alt="logomarca cortinas abertas" /></a></li>
        </ul>
        
        <ul class="nav">
          <li><a href="#">Anuncie seu Lar</a></li>
          <li><a href="#">Cadastrar-se</a></li>
          <li><a href="#">Entrar</a></li>
        </ul>

        <ul class="page-information">
          <li>Cadastro</li>
          <li>Identificação</li>
        </ul>

        </div>
    </header>
   <div id="breakline"></div>
    <div id="backbutton">
      <img src="./assets/backarrow.svg" alt="botão voltar" />
      <span>Voltar</span>
    </div>

    <div class="title">
      <h1>CADASTRAR</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: "App", //,
  //components: {
  //},
};
</script>

<style>
/*Grid*/

#app{
  display: grid;
  grid-template-columns: 21% repeat(12,1fr) 21%;
  gap: 20px;
}

header{
  grid-column: 2/14;
}

#backbutton{
  grid-column: 2/15;
}

.title{
  grid-column: 5/15;
}



 

/* Menu */

/* Set main Property*/

.menu{
  padding-top: 16px;
  padding-bottom: 8px;
}

.menu, ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
}

/* Set Padding */

.menu ul:nth-child(3n) {
  padding-top: 32px;
  width: 100%;
}

.menu ul:nth-child(3n) li{
  padding-right: 16px;
}

/* Set basic property */

.menu ul li a{
  text-decoration: none;
}

.menu ul[class="page-information"] li, ul[class="nav"] li {
  font-weight: 400;
  font-size: 12px;
  padding: 4px;
  background-color: #00A28C;
  border-radius: 5px;
  margin-left: 8px;
  margin-right: 8px;
  width: 7vmax;
  text-align: center;
}

/* Set Page information property */

.menu ul[class="page-information"] li{
  font-weight: 100;
  background-color: #f2eeeb48;
  border-radius: 7px;
  margin-left: inherit;

}

.menu ul[class="nav"] li:nth-child(1){
  width: 8.5vmax;
  background-color: inherit;
  border: 1px solid #00A28C;
}


/* Set font colors */

.menu ul[class="nav"] a{
  color: white;
}

.menu ul[class="nav"] li:nth-child(1) a {
  color: #00A28C;
}

/* Hover */

.menu ul[class="nav"] li:nth-child(2):hover{
  background-color: #019b86;
}

.menu ul[class="nav"] li:nth-child(3):hover{
  background-color: #019b86;
}


.menu, ul:nth-child(2n){
  justify-content: space-between;
}

/*Adsjust items */

.menu img {
  width: auto;
  height: 16px;
}



/* Back button */
#backbutton{
  padding-bottom: 32px;
}


#backbutton span {
  font-weight: 600;
  padding-left: 8px;
  color: #006154;
  font-size: 12px;
}

#backbutton span:hover{
  color: #00584d;
  cursor: pointer;
}

/*Tittle Description */

.title {
  width: 26vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}




</style>
