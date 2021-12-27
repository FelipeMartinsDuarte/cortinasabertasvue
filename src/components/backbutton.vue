<template>
    <div class="wrap">
        <div id="backbutton">
        <img src="../assets/backarrow.svg" alt="botão voltar" />
        <span>Voltar</span>
      </div>
    </div>
</template>

<script>
export default {
    name:"backbutton"
}
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 21% repeat(12, 1fr) 21%;
  gap: 20px;
}

#backbutton {
  grid-column: 2/15;
}

#backbutton {
  padding-bottom: 32px;
}

#backbutton span {
  font-weight: 600;
  padding-left: 8px;
  color: #006154;
  font-size: 12px;
}

#backbutton span:hover {
  color: #00584d;
  cursor: pointer;
}
</style>