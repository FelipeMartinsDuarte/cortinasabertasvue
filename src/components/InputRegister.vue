<template>
  <div class="Form">
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
  name: "InputRegister",
};
</script>

<style scoped>

.Form{
    display: grid;
    grid-template-columns: 37px 74px 74px 74px 74px 74px 74px ;
    grid-gap: 10px;
}

.wrap {
  grid-column-start:2;
  width: 100vw;
  height: 36px;
}

input[type=password]{
 font-weight: 200;
 font-size: 16px;
 color: #707070;
 outline: none;
 border: 2px solid rgb(185,185,185);
 border: 2px solid rgba(185,185,185,.5);
 -webkit-background-clip: padding-box; /* for Safari */
 background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
 border-radius: 5px;
 height: 52px;
}

input[type=password]:focus{
 color: #0D0D0D;
 border: 2px solid #16D9F2;
}

input[type=submit]{
 font-weight: 600;
 font-size: 16px;
 border: none;
 color: white;
 background-color:#68B400;
 height: 52px;
 border-radius: 5px;
}

label{
    font-weight: 400;
    display: block;
    font-size: 16px;
}


</style>
