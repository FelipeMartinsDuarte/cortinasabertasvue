<template>
  <div class="wrap">
    <div class="account-details">
      <div class="top-footer">
        <ul>
          <li><a href="#">Sua Conta</a></li>
          <li><a href="#">Contate-nos</a></li>
        </ul>
      </div>
    </div>

    <footer>
      <div class="button-footer">
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Bairros</a></li>
          <li><a href="#">Politica</a></li>
          <li><a href="#">Contate-nos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Regiões</a></li>
          <li><a href="#">Privacidade</a></li>
          <li><a href="#">Pagamentos</a></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Notificação</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href="#">Dúvidas</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.account-details {
  grid-column: 1/16;
}
footer {
  grid-column: 1/15;
}

/*Footer */
footer {
  margin: -20px;
  padding: 16px;
  background-color: #0d0d0d;
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.account-details {
  padding: 16px 0px;
  background-color: #e1e3e2;
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

.account-details .top-footer {
  grid-column: 2/15;
}

footer .button-footer {
  grid-column: 2/15;
}

footer .button-footer ul,
.account-details .top-footer ul {
  width: 24vmax;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

footer .button-footer ul li,
.account-details .top-footer ul li {
  margin-right: 16px;
}

footer .button-footer ul li {
  margin-top: 8px;
}

footer a {
  color: white;
  font-weight: 200;
}

.top-footer a {
  color: #006154;
  font-weight: 200;
}
</style>
