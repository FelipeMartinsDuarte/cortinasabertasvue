<template>
  <div id="app">
    <Menu/>
    <Backbutton />
    <Title />
    <InputRegister />
  </div>
</template>

<script>
import Menu from './components/menu.vue'
import Backbutton from './components/backbutton.vue'
import Title from './components/title.vue'
import InputRegister from './components/InputRegister.vue'


export default {
  name: 'App',
  components: {
    Menu,
    Backbutton,
    Title,
    InputRegister
  }
}
</script>

<style>
                                            
</style>
