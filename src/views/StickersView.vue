<template>
  <h1 class="text-center">Stickers Searchs</h1>
  <Loading v-if="Loading" class="text-success"/>
  <Search @buscar="getStickers" />
  <div class="row">
    <div v-for="sticker in stickers" :key="sticker.id" class="col-12 col-md-4 g-3">
      <Card :gif="sticker"/>
      <span >
      </span>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Loading from '../components/loading.vue';
import swal from "sweetalert2"

export default {
    data: () => ({
        stickers: [],
        Loading:true
    }),
    created() {
        this.getStickers();
    },
    methods: {
        async getStickers( busqueda = "developer") {
          if(busqueda.trim() === ''){
            swal.fire({
              title: "sin busqueda",
              icon: "error",
              timer:1500,
              timerProgressBar:true

            })
            // alert('¿Que quieres Buscar?')
          }else{
            this.Loading=true
            const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=Pm8mF47bMlPCVRC92GE2YkrzM2DMyM3d&q=${busqueda}&limit=18`);
            const { data } = await res.json();
            this.stickers = data;
            console.log(data);
            this.Loading=false

        }}
    },
    
    components: {
    Card,
    Search,
    Loading
}
};
</script>