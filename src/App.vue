<template>
<Navbar />
<div class="conteiner mt-3 text-center">
<RouterView/>
</div>
<ReloadPrompt/>
</template>


<script>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";

export default {
  components: {
    Navbar,
    RouterView,
    ReloadPrompt
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
