<template>
  <div class="flex-sidebar">
    <div>
      <SidebarVue />
    </div>
    <div class="cart-width">
      <vue-confirm-dialog></vue-confirm-dialog>
      <div class="search-box">
        <input
          @input="searchInput"
          class="input"
          type="text"
          name=""
          id=""
          placeholder="Search for products"
          v-model="text"
        />
        <img class="search" src="../assets/search.png" alt="" />
        <img
          v-if="text"
          class="cross"
          @click="clear"
          src="../assets/cros icon.png"
          alt=""
        />
      </div>

      <div class="cart-box">
        <!-- <input type="text" name="" id="" /> -->
        <div class="box" v-for="item in filteredProducts" :key="item.id">
          <div class="image">
            <img class="cart-item" :src="item.image" alt="" />

            <img
              class="cart-icon"
              src="../assets/addbutton.png"
              alt=""
              @click="addItem(item)"
            />
          </div>
          <h3>{{ item.price }} TK</h3>
          <a :href="item.link">{{ item.title }}</a>
          <div class="sites">
            <img src="../assets/site.png" alt="" />
            <span>{{ item.site }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarVue from "../components/views/Sidebar.vue";
export default {
  name: "IndexPage",
  props: ["value"],
  data() {
    return {
      loading: false,
      text: "",
    };
  },
  components: {
    SidebarVue,
  },

  computed: {
    ...mapGetters(["products", "filteredProducts"]),
  },
  methods: {
    addItem(item) {
      this.$confirm({
        title: "Save Successful",
        message: "Product saved successfully!",
        button: {
          yes: "Ok",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$store.dispatch("addItems", item);
          }
        },
      });
    },

    removeItem() {
      this.$store.dispatch("removeItems");
    },
    clear() {
      this.$store.dispatch("clearFilter");
      this.text = [];
    },
    searchInput() {
      this.$store.dispatch("searchValues", this.text);
      console.log("cliclexd");
    },
  },

  created() {
    this.$store.dispatch("initProduct");
  },
};
</script>
<style scoped>
.flex-sidebar {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.image {
  text-align: center;
}
.cart-item {
  width: 200px;
  height: 200px;
  margin: auto;
  text-align: center;
  background-position: center;
  background-size: cover;
}
.cart-icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.cart-box {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-right: 0.5rem;
  margin-top: 5rem;
}
.cart-width {
  width: 90%;
}
.box {
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
}
.box a {
  text-decoration: none;
  color: green;
}
.box a:hover {
  text-decoration: underline;
  color: red;
}
.absolute {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1rem;
  left: 0;
  cursor: pointer;
}
.box:hover {
  transition: 0.5s ease-in-out;
  transform: scale(1.009);
  box-shadow: rgb(170, 253, 220) 0 0 10px;
  border-collapse: collapse;
}
.loading {
  width: 100%;
  height: 100%;
  outline: none;
}

.search-box {
  height: 50px;
  position: relative;
  border: 0.5px solid rgba(1, 116, 211, 0.5);
  box-sizing: border-box;
  text-align: center;
  background: #f7f7ff;

  border-radius: 5px;
}
.search-box:hover {
  box-shadow: rgba(27, 26, 23, 0.4) 0 0 5px;
}
.search-box .input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  font-size: 1.1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background: transparent;
  position: absolute;
  box-sizing: border-box;
}

.search {
  width: 30px;
  height: 30px;
  padding: 0.7rem 0.7rem;
  position: absolute;
  top: 0;
  left: 0;
}
.cross {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  padding: 0.8rem 0.7rem;
}
.sites {
  margin-top: 0.7rem;
  display: flex;
  align-items: center;
}
.sites img {
  width: 25px;
  height: 25px;
  margin-right: 0.7rem;
}
.sites span {
  font-size: 1.1rem;
  color: #969699;
}
</style>
