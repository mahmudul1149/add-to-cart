<template>
  <div id="cart ">
    <div class="mt-3">
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
            <div class="category addItem">
              <button @click="addQty(item.id)" class="btn add-btn">+</button>
              <span>{{ item.quantity }}</span>
              <button @click="removeQty(item.id)" class="btn minus-btn">-</button>
            </div>
            <img @click="removeItems(item)" src="../assets/delete.png" alt="" class="delete-image" />
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
    addQty(item) {
      this.$store.commit('ADD_QUANTITY', item)
      console.log(item)
    },
    removeQty(item) {
      this.$store.commit('REMOVE_QTY', item)
      console.log(item)
    }
  },
  mounted() {
    this.$store.dispatch("initializeGetStore");
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cart li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 2rem;
  margin-left: 2rem;

}

/* .items {
  margin-right: 3.5rem !important;
} */
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

.add-btn,
.minus-btn {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #7CAFD2;
  font-size: 1.6rem;
  margin: 1rem;
}

.add-btn:hover,
.minus-btn:hover {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.815);
}

.title {
  font-weight: bold;
  width: 200px;
  margin-right: 1.7rem;
  font-size: 1.2rem;
  color: #1822cf;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.addItem {
  width: 200px;
  margin-left: 3rem;

}

.price {
  width: 250px;
  font-weight: bolder;
  color: rgba(6, 211, 143, 0.856);
}

.heading {
  margin-bottom: 2rem;
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



@media screen and (max-width: 900px) {
  .cart {
    margin-top: 4rem;
  }

  .items {

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .item {
    padding: 1rem;
    margin: 10px !important;
    display: flex;
    align-items: flex-start !important;
    flex-direction: column;
    position: relative;
  }

  .cart .delete-image {
    position: absolute;
    top: 0;
    right: 0;
  }

  .price {
    text-align: left !important;
  }
}

@media screen and (max-width: 500px) {
  .cart {
    margin: 2rem 2rem !important;
  }

  .cart li {
    margin: 0 auto !important;
  }

  .item {
    max-width: 300px;
    position: relative;

  }

  .cart .delete-image {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>