<template>
<Navbar />
<div class="conteiner mt-3 text-center">
<RouterView/>
</div>
</template>


<script>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";

export default {
  components: {
    Navbar,
    RouterView
}
}
</script>

<style scoped>
div{
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
}
</style>
