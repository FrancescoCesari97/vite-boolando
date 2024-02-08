


<script >

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
        },
        {
            img: '/img/2.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
        },
        {
            img: '/img/3.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
        },
        {
            img: '/img/4.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
        },
        {
            img: '/img/5.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
        },
        {
            img: '/img/6.webp',
            brand: 'levis',
            name: 'RELAZED FIT TEE UNISEX',
            price:'14.99 $',
            oldprice: '30.00 $',
        },
     ]
    }
  },

 
};
</script>





<template>

    <main>
        <div class="container">
            <div class="card" v-for="product in products">
                <img :src="product.img" alt="">
                <div class="descrizione">
                    <p>{{ product.brand }}</p>
                    <H4>{{ product.name }}</H4>
                    <div class="price">
                        <h5>{{ product.price }}</h5>
                        <h5 class="oldprice">{{ product.oldprice }}</h5 >

                    </div>
                    
                </div>
            </div>
        </div>
        
    </main>

</template>





<style lang="scss" scoped>
.container{


flex-wrap: wrap;



.card{
   
    width: 30%;
    margin: 20px 0;
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