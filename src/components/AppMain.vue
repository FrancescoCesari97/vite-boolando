


<script >

import AppCard from './AppCard.vue';


export default{
  data(){
    return{
     products:[
        {
            img: '/img/1.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
        {
            img: '/img/2.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
        {
            img: '/img/3.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
        {
            img: '/img/4.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
        {
            img: '/img/5.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
        {
            img: '/img/6.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
            sconto: '50%',
            isInFavorites: true,
            cuore: 'fa-solid fa-heart',
        },
     ]
    }
  },

  components: {AppCard},
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
            :img="product.img" 
            :brand="product.brand" 
            :name="product.name"
            :price="product.price"
            :oldprice="product.oldprice"
            :sconto="product.sconto"
            :cuore="product.cuore"
            />
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