<template>
  <div id="app">
    <header>
      <div class="container">
        <a href="#">
        <img src="./assets/logo.svg" alt="logomarca cortinas abertas" />
        </a>
      </div>
    </header>

    <div id="backbutton">
      <img src="./assets/backarrow.svg" alt="botão voltar" />
      <span>Voltar</span>
    </div>

    <div class="title">
      <h1>CADASTRAR</h1>
    </div>

    <div class="wrap">
      <form id="registrar" method="post" action="/register">

        <label for="nome">NOME:</label><br />
        <input name="nome" type="text" /><br /><br />

        <label for="email">E-MAIL:</label><br />
        <input name="email" type="email" /><br /><br />

        <input type="submit" value="Continuar"><br />
        <p>ou</p>

        <button name="google">
        <i class="fab fa-google "></i>
        <span class="my-text">Cadastrar com o Google</span>
        </button><br />
      </form>

      <footer>
        <a>Já possui uma conta?</a>
      </footer>
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
  grid-column: 2/15;
}

#backbutton{
  grid-column: 2/15;
}

.title{
  grid-column: 5/15;
}

.wrap{
  grid-column: 5/15;
}

footer{
  grid-column: 5/11;
}

/* Menu */

.container img {
  width: auto;
  height: 16px;
}

.container{
  padding-top: 16px;
  padding-bottom: 8px;
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

/* Input Register */

input[type="text"], input[type="email"] {
  font-weight: 200;
  font-size: 16px;
  text-indent: 8px;
  color: #707070;
  outline: none;
  border: 2px solid rgb(185, 185, 185);
  border: 2px solid rgba(185, 185, 185, 0.5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  border-radius: 5px;
  height: 52px;
  width: 26vmax;
}

input[type="text"]:focus {
  color: #0d0d0d;
  border: 2px solid #16d9f2;
}

input[type="email"]:focus{
  color: #0d0d0d;
  border: 2px solid #16d9f2;
}

.wrap input[type="submit"], button{
  font-weight: 600;
  font-size: 16px;
  border: none;
  color: white;
  background-color: #68b400;
  height: 52px;
  border-radius: 5px;
  width: 26.5vmax;
}

.wrap input[type="submit"]:hover{
  background-color: #549900;
  cursor: pointer;
}

.wrap p{
  width: 26.5vmax;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;

}

label {
  font-weight: 400;
  display: block;
  font-size: 16px;
}

.wrap button[name="google"]{
  display: inline-block;
  background-color: #F2EEEB;
  color: black;
  font-weight: 400;
  cursor: pointer;
}

.wrap button[name="google"] i{
  padding-right: 8px;
}

.wrap button[name="google"]:hover{
  background-color: #e7e3df;
}

.fa-google {
  vertical-align: middle;
  font-size: 22px;
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/*Footer*/

footer{
  width: 26.5vmax;
  padding-top: 16px;
}


footer a{
  display:block;
  font-weight: 100;
  color: #006154;
  cursor: pointer;
  opacity: 0.5;
  text-decoration: underline;
  float: right;
}

footer a:hover{
  opacity: 1;
}




</style>
