<template>
  <h2><strong></strong>PRODUCTS LIST</h2>
  <div class="flex-box">
    <card-comp
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :id="product.id"
      :img="product.img"
      :price="product.price"
      :cost="product.cost"
    />
  </div>
</template>

<script>
import CardComp from "./CardComp.vue";
export default {
  name: "App",
  components: { CardComp },

  data() {
    return {
      products: [
        {
          id: "1",
          img: "https://media.croma.com/image/upload/v1664417894/Croma%20Assets/Entertainment/Television/Images/247599_14_qfo8px.png",
          name: "Croma 80 cm (32 inch) HD Ready LED Smart Android TV with Google Assistant (2022 model)",

          price: "₹13000",
          cost: "₹10,899",
        },
        {
          id: "2",
          img: "https://rukminim1.flixcart.com/image/832/832/kmns7m80/suitcase/z/6/q/61-20-24-28-inch-combo-set-trolley-bag-travel-bag-suitcase-51cm-original-imagfg7ydgtxfhga.jpeg?q=70",
          name: "STUNNERZ Soft Body Set of 3 Luggage Trolley Bag Travel Bag Suitcase Small ,Medium ,& Large",

          price: " ₹4,129.00",
          cost: "₹3,500",
        },
        {
          id: "3",
          img: "https://cdn.shopify.com/s/files/1/0254/5883/5510/products/1_9f8d9495-5319-4843-b4a0-e8eab13cf080_1024x1024.jpg?v=1650627294",
          name: "Saint Eibhlin Platin Hand Woven Leather Block Heels For Women",

          price: "₹10000",
          cost: "₹5,150",
        },
        {
          id: "4",
          img: "https://outdoor-and-country-res.cloudinary.com/image/upload/e_trim:2/bo_8px_solid_white/c_pad,b_white,w_1000,h_1200,f_auto,q_auto/v1586343196/product/238215.jpg",
          name: "Women Winter Thicken Hooded Zipper Up Warm Coat Jacket Trench Outwear",

          price: "₹6000",
          cost: "₹4,200",
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex-box {
  display: flex;
}
</style>
