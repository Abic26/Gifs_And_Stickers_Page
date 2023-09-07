<template>
  <h1 class="text-center">Gif Search</h1>
  <Search @buscar="getGifs" />
  <Loading v-if="Loading" class="text-warning"/>
  <div class="row">
    <div v-for="gif in gifs" :key="gif.id" class="col-12 col-md-4 g-3">
      <Card :gif="gif"/>
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
        gifs: [],
        Loading: true
    }),
    created() {
        this.getGifs();
    },
    methods: {
        async getGifs( busqueda = "developer") {
          if(busqueda.trim() === ''){
            swal.fire({
              title: "sin busqueda",
              icon: "error",
              timer:1500,
              timerProgressBar:true
            })
        }else{
            this.Loading=true
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pm8mF47bMlPCVRC92GE2YkrzM2DMyM3d&q=${busqueda}&limit=18`);
            const { data } = await res.json();
            this.gifs = data;
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

