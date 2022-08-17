
<template>
  <div class="bg-dark">
    hello
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
    <!-- <section class="featured">
      <div class="container">
        <div class="sub-title">
          <h2>FEATURED PRODUCTS</h2>
        </div>
        <div class="cart-box">
          <div class="box" v-for="item in products" :key="item.id">
            <div class="image">
              <img class="cart-item" :src="item.image" alt="" />
              <img
                class="cart-icon"
                src="../assets/addbutton.png"
                alt=""
                @click="addItem(item)"
              />
            </div>
            <h4>{{ item.price }} TK</h4>
            <a :href="item.link">{{ item.title }}</a>
            <span class="span">{{ item.authority }}</span>
          </div>
        </div>
      </div>
    </section> -->
    <style>
      .bg-dark {
        background: #000;
        height: 100vh;
        color: antiquewhite;
      }
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    </style>