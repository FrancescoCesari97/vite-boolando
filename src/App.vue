<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';



export default{
  data(){
    return{
      title:'Booleando',

      HeaderlinksGenere:[{
        genere: 'Uomo',
        current: false,
        url: '#',
     },

        {
        genere: 'Donna',
        current: true,
        url: '#',
    },

       {  
        genere: 'Bambino',
        current: false,
        url: '#',
       },
     ],

    }
  },

  


  
  components: {AppHeader, AppMain, AppFooter, },


  
};
</script>




<template>

  <app-header :HeaderlinksGenere="HeaderlinksGenere"></app-header>


  <app-main>
    
  </app-main>


  <app-footer></app-footer>

</template>




<style lang="scss">
  @use './styles/genral.scss'

 
</style>
