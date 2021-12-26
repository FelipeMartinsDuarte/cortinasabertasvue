<template>
  <div id="app">
    <header>
      <div class="container">
        <img src="./assets/logo.svg" alt="logomarca cortinas abertas" />
      </div>
    </header>

    <div id="backbutton">
      <img src="./assets/backarrow.svg" alt="botão voltar" />
      <span>Voltar</span>
    </div>

    <div class="title">
      <h3>CADASTRAR</h3>
      <p>
        Use pelo menos 8 Caracteres, incluindo letras maiúsculas e letras
        minúsculas
      </p>
    </div>

    <div class="wrap">
      <form id="registrar" method="post" action="/register/password">
        <input name="name" type="hidden" :value="name" />
        <input name="email" type="hidden" :value="email" />

        <label for="password">CRIAR UMA SENHA</label><br />
        <input name="password" type="password" /><br /><br />

        <label for="confirmpassword">CONFIRMAR SENHA</label><br />
        <input name="confirmpassword" type="password" /><br /><br />

        <input type="submit" value="Criar Conta" />
      </form>
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

/* Menu */

.container img {
  width: auto;
  height: 16px;
}

/* Back button */

#backbutton span {
  font-weight: 600;
  padding-left: 8px;
  color: #006154;
  font-size: 12px;
}

/*Tittle Description */
.title {
  width: 32vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.title p {
  font-weight: 300;
  text-align: left;
}


/* Input Register */

input[type="password"] {
  font-weight: 200;
  font-size: 16px;
  color: #707070;
  outline: none;
  border: 2px solid rgb(185, 185, 185);
  border: 2px solid rgba(185, 185, 185, 0.5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  border-radius: 5px;
  height: 52px;
  width: 32vmax;
}

input[type="password"]:focus {
  color: #0d0d0d;
  border: 2px solid #16d9f2;

}

input[type="submit"] {
  font-weight: 600;
  font-size: 16px;
  border: none;
  color: white;
  background-color: #68b400;
  height: 52px;
  border-radius: 5px;
  width: 32.5vmax;

}

label {
  font-weight: 400;
  display: block;
  font-size: 16px;
}


</style>
