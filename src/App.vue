<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  data(){
    return{
      title:'Booleando'
    }
  },

  components: {AppHeader, AppMain, AppFooter },
};
</script>




<template>

  <app-header></app-header>


  <app-main>
    <h1>{{ title }}</h1>
  </app-main>


  <app-footer></app-footer>

</template>




<style >

</style>
