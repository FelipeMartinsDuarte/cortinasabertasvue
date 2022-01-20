<template>
<div id="app">

<menu>
  <nav>
    <a>
      <img src="../assets/logo.svg" alt="logomarca cortinasabertas" />
    </a>
  </nav>
</menu>

<span id="back">Voltar</span>

<main>
  <header>
    <h1>CADASTRAR</h1>
  </header>
  <fieldset class="fr">
    <label for="nome">NOME:</label>
    <input type="text" name="nome" id="nome">
    <label for="email">E-MAIL:</label>
    <input type="email" name="email" id="email">
    <button @click="$router.push('password')">
    Continuar
    </button>
  </fieldset>
  <fieldset class="sc">
    <span>Ou</span>
    <button @click="$router.push('password')">
      <i class="fab fa-google "></i>
      <span>Continuar com Google</span>
    </button>
  </fieldset>  
  <a>Já possui uma conta?</a>
</main>

</div>
</template>

<script>
export default {
  name: "email"
};
</script>

<style scoped>
@import '../../public/default.css';
@import '../../public/normalizer.css';
@import '../../public/reset.css';
#app{
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}
/*Menu */
menu nav a img{
  display: block;
  height: 16px;
  width: auto;
}
menu {
  grid-column: 2/14;
  margin-top: 16px;
}
#back{
  position: relative;
  grid-column: 2/14;
  cursor: pointer;
  padding-left: 20px;
  font-size: 12px;
  color: #006154;
  margin-bottom: 64px;
  font-weight: 600;
}
#back::after{
  content: "";
  position: absolute;
  background: url(../assets/backarrow.svg) no-repeat center;
  left: 0;
  margin: auto;
  width: 13.5px;
  height: 13.5px;
}
label{
  margin-bottom: 8px;
}
/*Menu ends here */
/*Principally starts here */
main{
  width: 100%;
  grid-column: 5/11;
  display: flex;
  flex-direction: column;
}
main fieldset[class="fr"], 
main fieldset[class="sc"]{
  display: flex;
  flex-direction: column;
  width: 100%;
}
button{
  cursor: pointer;
  height: 45px;
  border: inherit;
  border-radius: 5px;
  font-size: 16px;
}

input{
  margin-bottom: 16px;
}

main a{
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-end;
  color: #00615485;
}
main a span{
  font-weight: 200;
}
/*Principally ends here */
/*First fieldset starts here */
main header{
  font-weight: 800;
  width: 100%;
  text-align: center;
  padding-bottom: 32px;
}
main fieldset[class="fr"] input{
  border: 2px solid rgb(185, 185, 185);
  border: 2px solid rgba(185, 185, 185, 0.5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  border-radius: 5px;
  outline: none;
  height: 45px;
  text-indent: 4px;
  font-weight: 200;
}
main fieldset[class=fr] input:focus{
  border-color: #16D9F2;
}
main fieldset[class=fr] button{
  background-color: #68B400;
  font-weight: 600;
  color: white;
}
/*First fieldset ends here*/
/*Second fieldset */
main fieldset[class="sc"]{
  width: 100%;
  font-weight: 100;
  font-size: 16px;
  text-align: center;
}
main fieldset[class="sc"] button{
  margin-top: 16px;
  background-color: #F2EEEB;
}
/*Second fieldset ends here */
</style>