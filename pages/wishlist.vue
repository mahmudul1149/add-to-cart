<template>
  <div id="cart">
    <div class="">
      <vue-confirm-dialog></vue-confirm-dialog>
      <div v-if="carts.length" class="cart container">
        <h1 class="heading">Wishist Product</h1>
        <ul class="items flex-3">
          <li class="item" v-for="item in carts" :key="item.id">
            <img :src="item.image" alt="" class="cart-image" />
            <div class="title">
              <span>{{ item.title }}</span>
            </div>
            <div class="price">
              <span>{{ item.price }} TK</span>
            </div>
            <div class="category">
              <span>{{ item.category }}</span>
            </div>
            <img
              @click="removeItems(item)"
              src="../assets/delete.png"
              alt=""
              class="delete-image"
            />
          </li>
        </ul>
        <img v-if="loadingGif" src="../assets/load.gif" alt="" />
      </div>
      <div v-else class="show-cart">
        <div class="show">
          <img src="../assets/cart-icon-28356.png" alt="" class="cart-icon" />
          <h3 class="cart-heading">Oops! It’s empty here!</h3>
          <p>
            Fill this page with your favorite products. It’s easy. Find a
            product you like, click the heart icon and it'll be added here.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      mag: "",
      loadingGif: false,
    };
  },
  computed: {
    ...mapGetters(["carts"]),
  },
  methods: {
    removeItems(item) {
      this.$confirm({
        title: "Confirm",
        message: "Are you sure want to delete the content?",
        button: {
          yes: "Yes",
          no: "Cancel",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$store.dispatch("removeItem", item);
          }
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("initializeGetStore");
  },
};
</script>

<style>
.cart li {
  display: flex;
  align-items: center;

  width: 100%;
  border: 1px solid #ccc;
  margin: 1rem;
  border-radius: 10px;
  box-sizing: border-box;
}
.items {
  margin-right: 3.5rem !important;
}
.cart li:hover {
  box-shadow: rgba(3, 8, 247, 0.4) 0 0px 10px;
  transform: scale(1.009);
  transition: 0.3s ease-in-out;
}
.cart .cart-image {
  width: 50px;
  height: 50px;
  margin: 1.5rem;
  cursor: pointer;
}
.cart .delete-image {
  width: 25px;
  height: 25px;
  margin: 0.7rem;
  margin-left: auto;
  cursor: pointer;
}
.cart-icon {
  width: 50px;
  height: 50px;
}

.title {
  font-weight: bold;
  width: 350px;
  margin-right: 1.7rem;
  font-size: 1.2rem;
  color: #1822cf;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.category {
  width: 250px;
}
.price {
  width: 250px;
  font-weight: bolder;
  color: rgba(6, 211, 143, 0.856);
}
.heading {
  text-align: center;
  font-size: 2rem;
  color: rgba(1, 150, 100, 0.815);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.show-cart {
  display: flex;
  align-items: center;
  height: 92vh;
  text-align: center;
}
.show {
  display: flex;
  padding: 0 2rem;
  align-items: center;
  margin: auto;
  flex-direction: column;
}
.show .cart-heading {
  color: red;
  font-size: 1.4rem;
}

.show p {
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.spinner {
  width: 300px;
  height: 100%;
}
</style>