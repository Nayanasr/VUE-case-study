<template>
  <h2>CART LIST</h2>

  <div class="card" style="width: 25rem">
    <!-- <div class="card-body">
      <h5 class="card-title">{{ id }}</h5>
    </div> -->
     <div class="card-body">
      <img :src="img" class="card-img-top" alt="..." />
     </div>

     <div class="card-body">
      <h7 class="card-title"><strong></strong>{{ name }}</h7>
     </div>
   
    <!-- <div class="card-body"> -->
      <h5 class="card-title" style="color: brown">price:{{ price }}</h5>
    <!-- </div> -->
      <h5 class="card-title" style="color: purple">Premium price:{{ cost }}</h5>
  
  </div>
 
  
</template>

<script>
export default {
  components: {
  },
  // computed:{
  //   cart(){
  //     return this.$store.state.cart;
  //   }
  // }
};
</script>

<style>
</style>

