


<script >

export default{
  data(){
    return{
     linksGenere:[{
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
     ]
    }
  },

 
};
</script>





<template>

    <header>
        <div class="container">
            <ul>
              <li v-for="link in linksGenere" :class="link.current ? 'active' : ''">
                  <a :href="link.url">{{ link.genere }}</a>
                  
              </li>
            </ul>

            <img src="/img/boolean-logo.png" alt="">

            <ul>
                <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                <li><a href=""><i class="fa-regular fa-envelope-open"></i></a></li>
            </ul>

        </div>


        
    </header>

</template>





<style lang="scss" scoped>

header{
    height: 80px;
    background-color:#ff6900 ;
    color:aliceblue ;
    
}

.container{

    ul{
        li{

        &.active{

            background-color: rgba(35, 253, 133, 0.416);
            }
            
        }
    }

    img{
        width: 20%;
    }
   
}


</style>