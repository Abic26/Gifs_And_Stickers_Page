<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/" >Gifs Page</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <RouterLink active-class="bg-info fw-bold text-dark" class="nav-link" to="/" >home</RouterLink>
        </li>
        
        <li class="nav-item">
            <RouterLink active-class="bg-warning fw-bold text-dark" class="nav-link" to="/gifs" >gifs</RouterLink>
        </li>

        <li class="nav-item">
            <RouterLink active-class="bg-success fw-bold text-dark" class="nav-link" to="/stickers" >stickers</RouterLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink
  }
}
</script>
