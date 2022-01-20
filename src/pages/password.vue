<template>
<div id="app">

<menu>
  <nav>
    <a>
      <img src="../assets/logo.svg" alt="logomarca cortinasabertas" />
    </a>
  </nav>
</menu>

<span id="back" @click="$router.push('email')">Voltar</span>

<main>
  <header>
    <h1>CADASTRAR</h1>
    <p>Use pelo menos 8 Caracteres, incluindo letras maiúsculas e letras minúsculas</p>
  </header>
  <fieldset class="fr">
    <label for="password"><span>CRIAR UMA SENHA:</span></label>
    <div class="passwordcreate">
      <img src="../assets/showpass.svg" alt="Não mostrar Senha" v-if="tyv === 'text'" @click="showpassword">
      <img src="../assets/closepass.svg" alt="Mostrar Senha" v-if="tyv === 'password'" @click="showpassword">
      <input :type="tyv"  name="password" id="password">
    </div>
    <label for="passconfirm"><span>CONFIRMAR SENHA</span></label>
    <div class="passwordconfirm">
      <img src="../assets/showpass.svg" alt="Não mostrar Senha" v-if="tyvc === 'text'" @click="showconfirmpassword">
      <img src="../assets/closepass.svg" alt="Mostrar Senha" v-if="tyvc === 'password'" @click="showconfirmpassword">
      <input :type="tyvc" name="passwordconfirm" id="passconfirm">
    </div>

    <button @click="$router.push('password')">
    Criar Conta
    </button>
  </fieldset>
  <footer>
    <hr>
    <p>Ao fazer login ou criar uma conta você concorda com nossos <a href="#">Termos e Condições e Declaração de Privacidade</a></p>
    <hr>
    <p>Todos os direitos reservados Direitos autorais (2021-2021) - Cortinas Abertas.com</p>
  </footer>
</main>

</div>
</template>

<script>
export default {
  name: "email",
  data: function(){
    return{
      shvisible:false,
      tyv: "password",
      shcovisible:false,
      tyvc: "password"
    }
  },
  methods:{
    showpassword(){
      if(this.tyv === "password"){
        this.tyv = "text";
      } else {
        this.tyv = "password";
      }
    },

    showconfirmpassword(){
      if(this.tyvc === "password"){
        this.tyvc = "text";
      } else {
        this.tyvc = "password";
      }
    }

  }
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
main{
  display: flex;
  flex-direction: column;
  width: 100%;
}

menu nav a img{
  display: block;
  height: 16px;
  width: auto;
}
menu {
  grid-column: 2/14;
  margin-top: 16px;
}

.passwordcreate, .passwordconfirm{
  width: 100%;
  height: auto !important;
  margin-bottom: 16px;
  position: relative;
}
.passwordcreate	img, .passwordconfirm img{
  cursor: pointer;
  position: absolute;
  height: 22px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
}
.passwordconfirm img[alt="Não mostrar Senha"], 
.passwordcreate img[alt="Não mostrar Senha"]{
  height: 16.9px;
  width: auto;
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
  width: 100;
  grid-column: 5/11;
}

main fieldset[class="fr"]{
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

input, button{
  box-sizing:content-box;
  width: 100%;
}
/*Principally ends here*/


/*First fieldset starts here */
main header h1{
  font-weight: 800;
  width: 100%;
  padding-bottom: 16px;
  text-align: center;
}

main header p{
  font-weight: 100;
  padding-bottom: 8px;
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

main fieldset[class=fr] input:focus {
  border-color: #16D9F2;
}

main fieldset[class=fr] button{
  background-color: #68B400;
  font-weight: 600;
  color: white;
}
/*First fieldset ends here*/



/*Footer*/
main footer{
  text-align: center;
  font-weight: 100;
  font-size: 12px;
}

main footer a {
  color: #528E00;
}

main footer p{
  padding: 16px; 
}

main footer hr{
  color: #70707033;
}
/*Footer ends here*/


</style>
