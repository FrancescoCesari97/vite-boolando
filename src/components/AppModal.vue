<script >
import { store } from '../store';




export default{
  data(){
    return{ 
        store
    };

    },
    methods: {
        closeModal(){
            store.modal.show = false;
            store.modal.marca = '';
            store.modal.nome = '';
            store.modal.prezzo = '';
            store.modal.immagine = '';
        }
    }

};
</script>



<template>

    <div class="layover">
        

        <div class="riquandro">
            <i class="chiusura fa-solid fa-x" @click="closeModal()"></i>
            <img :src="store.modal.immagine" alt="">
            <p>{{  store.modal.nome }}</p>
            <p>{{  store.modal.marca }}</p>
            <p>{{ store.modal.prezzo }}</p>

        </div>
    </div>
   

</template>




<style lang="scss" scoped>
.riquandro{
    width: 80%;
    max-width: 960px;
    background-color: aliceblue;
    padding: 1rem;
    position: relative;
    color: black;

    .chiusura{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
   
}




</style>