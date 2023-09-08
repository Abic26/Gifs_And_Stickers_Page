<template>
    <h1 class="text-center">Gif Ramdon</h1>
    <Loading v-if="Loading" class="text-info"/>
    <img :src="img" :alt="name">
    <p>{{ name }}</p>
    <button class="btn btn-success" @click="cargarPagina">Next Gif</button>
  </template>

  <script>
import Loading from '../components/loading.vue';

export default {
    data: () => ({
        img: "",
        name: "",
        Loading:true
    }),
    created() {
        this.getRandomGif();
    },
    methods: {
        async getRandomGif() {
            const data = await fetch("https://api.giphy.com/v1/gifs/random?api_key=Pm8mF47bMlPCVRC92GE2YkrzM2DMyM3d");
            const res = await data.json();
            console.log(res.data.title);
            console.log(res.data.images.original.url);
            this.img = res.data.images.original.url;
            this.name = res.data.title;
            this.Loading=false
        },
        cargarPagina(){
            window.location.reload();
        }
    },
    components: { Loading }
};
</script>
<style>
img{
    width: 70%;
}
@media(max-width: 991px){
    img{
    width: 60%;
}
}
</style>