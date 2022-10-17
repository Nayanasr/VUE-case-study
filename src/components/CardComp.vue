<template>
  <div class="card" style="width: 25rem">
     <div class="card-body">
      <img :src="img" class="card-img-top" alt="..." />
     </div>

     <div class="card-body">
      <h7 class="card-title" style="color: black"><strong></strong>{{ name }}</h7>
     </div>
   
      <h5 class="card-title" style="color: brown">price:{{ price }}</h5>
      <h5 class="card-title" style="color: purple">Premium price:{{ cost }}</h5>
    <div>
      <button type="button" class="btn btn-info" @click="addToCart">ADD TO CART</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    img: {
      required: true,
    },
  },

  methods: {
    addToCart(){
     this.$router.push("/cart")
   
    },

    
  }
};
</script>

<style>

</style>
