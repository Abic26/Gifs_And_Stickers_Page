<template>
    <form class="row" @submit.prevent="getData">
        <div class="col-auto">
            <input v-model="busqueda" class="form-control" type="text" placeholder="Search">
        </div>
        <div class="col-auto">
            <button class="btn btn-warning fw-bolder" type="submit">Search</button>
        </div>
    </form>
</template>

<script>
export default {
    data: ()=>({
        busqueda: "",
    }),
    methods:{
        getData(){
            this.$emit('buscar', this.busqueda)
            this.busqueda=""
        }
    }
};
</script>

