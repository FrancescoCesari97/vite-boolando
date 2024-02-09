<script>
    export default{

        props:{
            img: String,
            brand: String,
            name: String,
            price: String,
            oldprice: String,
            sconto: String,
           
        },
    };
</script>





<template>
 <div class="card" >
    <img :src="img" alt="">
    <div class="descrizione">
        <p>{{ brand }}</p>
        <H4>{{ name }}</H4>
        <div class="price">
            <h5>{{price}}</h5>
            <h5 class="oldprice">{{oldprice}}</h5 >

        </div>
                    
                    
    </div>
    <div class="sconto">
        <span>{{sconto}}</span>
        <span>sostenibilità</span>
    </div>
    <div class="cuore">
        <i class="fa-solid fa-heart"></i>
    </div>
 </div>
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
    .cuore{
        position: absolute;
        font-size: 35px;
        bottom: 500px;
        padding: 5px;
        background-color: aliceblue;
        right: 0;
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