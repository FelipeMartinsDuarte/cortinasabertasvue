<template>
<header id="menu-content">
      <menu>
        <ul>
          <li><a href="#"><img src="../assets/logo.svg" alt="Cortinas abertas" /></a></li>
        </ul>
        
        <nav>
          <ul class="nav">
            <li><a href="#">Anuncie seu Lar</a></li>
            <li><a href="#">Cadastrar-se</a></li>
            <li><a href="#">Entrar</a></li>
          </ul>
        </nav>

        <ul class="page-information">
          <li>Cadastro</li>
          <li>Identificação</li>
        </ul>
        
      </menu>
</header>

</template>

<script>

export default {
    name:"menuHeader",
}
</script>

<style scoped>
#menu-content{
  display: grid;
  grid-template-columns: 21% repeat(12,1fr) 21%;
  gap: 20px;
}

menu{
  grid-column: 2/14;
}

/* Menu */

/* Set main Property*/

menu{
  padding-top: 16px;
}

menu, ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
}

/* Set Padding */

menu ul:nth-child(3n) {
  padding-top: 16px;
  width: 50%;
}

menu ul:nth-child(3n) li{
  padding-right: 16px;
}

/* Set basic property */


menu ul li a{
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

menu ul[class="page-information"] li, ul[class="nav"] li {
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

menu ul[class="nav"] li{
  padding: 3px 4px 6px 4px;
  font-size: 16px;
  margin-left: 4px;
  margin-right: 4px;
}

/* Set Page information property */

menu ul[class="page-information"] li{
  width: auto;
  font-weight: 100;
  background-color: #dddad794;
  border-radius: 7px;
  margin-left: inherit;
  padding: 4px 32px 4px 32px;

}

menu ul[class="nav"] li:nth-child(1){
  width: 8vmax;
  background-color: inherit;
}


/* Set font colors */

menu ul[class="nav"] a{
  color: white;
}



menu ul[class="nav"] li:nth-child(1) a {
  color: #00A28C;
}

menu ul[class="nav"] li:nth-child(1) a:hover{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
}

/* Hover */

menu ul[class="nav"] li:nth-child(2):hover{
  background-color: #007c6c;
}

menu ul[class="nav"] li:nth-child(3):hover{
  background-color: #007c6c;
}


menu, ul:nth-child(2n){
  justify-content: space-between;
}

/*Adjust items */

menu img {
  width: auto;
  height: 16px;
}
</style>
