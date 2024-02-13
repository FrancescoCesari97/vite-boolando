


<script >

import AppCard from './AppCard.vue';
import AppModal from './AppModal.vue'


import {store} from '../store';
import axios from 'axios';

export default{
  data(){
    return{
      
        store,

        products:[],
    }
  },


  
  
  
  components: {AppCard, AppModal},
  
  created(){
    axios.get(`${store.apiUri}/products`).then((res) => {
        console.log(res.data);

        this.products = res.data;
    });
  },

  methods:{
    modalOpen(){
      store.modal.show = true;
    }

  }
};
</script>





<template>

    <main>
        <div class="container">
            <!-- <div class="card" v-for="product in products">
                <img :src="product.img" alt="">
                <div class="descrizione">
                    <p>{{ product.brand }}</p>
                    <H4>{{ product.name }}</H4>
                    <div class="price">
                        <h5>{{ product.price }}</h5>
                        <h5 class="oldprice">{{ product.oldprice }}</h5 >

                    </div>
                    
                    
                </div>
                <div class="sconto">
                    <span>{{product.sconto}}</span>
                    <span>sostenibilità</span>

                    <div class="cuore">
                    <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div> -->

            <app-card 
            v-for="product in products"
            @card-show="modalOpen"
            :img="product.img" 
            :brand="product.brand" 
            :name="product.name"
            :price="product.price"
            :oldprice="product.oldprice"
            :sconto="product.sconto"
            :cuore="product.cuore"
            />

            <app-modal v-if="store.modal.show"/>
        </div>
        
    </main>

</template>





<style lang="scss" scoped>
.container{


flex-wrap: wrap;



.card{
   
    width: 30%;
    margin: 20px 0;
    position: relative;
    .sconto{
        position: absolute;
        bottom: 150px;
        color: aliceblue;
        span:nth-child(1){
            background-color: red;
            padding: 3px;
        }
        span:nth-child(2){
            background-color: green;
            padding: 3px;
        }
    }
    .descrizione{
        padding: 10px;
        
        h5{
            color: red;
        }

        p{
            color: rgba(0, 0, 0, 0.462);
        }
        .price{
            display: flex;
            .oldprice{
                color: black;
                text-decoration: line-through;
                padding: 0 5px;
            }
        }

    }

   
}



}

</style>