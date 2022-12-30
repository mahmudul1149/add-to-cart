<template>
  <div class="bg-dark">
    <div class="bg-secondery">
      <landpage-vue></landpage-vue>
    </div>

    <div class="cart-width">
      <vue-confirm-dialog></vue-confirm-dialog>

      <div class="cart-box">
        <div class="box" v-for="item in filteredProducts" :key="item.id">
          <div class="image">
            <img class="cart-item" :src="item.image" alt="" />
          </div>
          <h3 class="price">{{ item.price }} $</h3>
          <h3>{{ item.title }}</h3>

          <div class="sites">
            <svg
              data-v-06b3d8fe=""
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="#613361"
            >
              <g data-v-06b3d8fe="" clip-path="url(#clip0_27_1736)">
                <path
                  data-v-06b3d8fe=""
                  d="M20.6201 7L18.7451 4.50125C18.672 4.40313 18.5851 4.31812 18.4951 4.23688V1.25C18.4951 0.56 17.9351 0 17.2451 0H4.74512C4.05449 0 3.49512 0.56 3.49512 1.25V4.2375C3.40512 4.31813 3.31824 4.4025 3.24512 4.5L1.37074 6.99938C1.12824 7.32188 0.995117 7.72125 0.995117 8.125V8.75C0.995117 9.78375 1.83637 10.625 2.87012 10.625V18.75C2.87012 19.44 3.43012 20 4.12012 20H17.8701C18.5601 20 19.1201 19.44 19.1201 18.75V10.625C20.1539 10.625 20.9951 9.78375 20.9951 8.75V8.125C20.9951 7.72125 20.862 7.32188 20.6201 7ZM17.2451 1.25V3.75H4.74512V1.25H17.2451ZM7.36574 9.375H4.74762L7.24762 5H8.61574L7.36574 9.375ZM9.26637 5H10.6826V9.375H8.01637L9.26637 5ZM11.3076 5H12.7239L13.9739 9.375H11.3076V5ZM13.3732 5H14.7414L17.2414 9.375H14.6232L13.3732 5ZM2.24512 8.75V8.125C2.24512 7.98938 2.28887 7.85812 2.37012 7.75L4.24512 5.25C4.36324 5.0925 4.54824 5 4.74512 5H6.52762L4.02762 9.375H2.87012C2.52512 9.375 2.24512 9.09562 2.24512 8.75ZM13.4951 18.75H8.80762V12.5H13.4951V18.75ZM17.8701 18.75H14.1201V12.5C14.1201 12.1544 13.8395 11.875 13.4951 11.875H8.80762C8.46262 11.875 8.18262 12.1544 8.18262 12.5V18.75H4.12012V10.625H17.8701V18.75ZM19.7451 8.75C19.7451 9.09562 19.4657 9.375 19.1201 9.375H17.9614L15.4614 5H17.2451C17.4414 5 17.627 5.0925 17.7445 5.25L19.6195 7.75C19.7014 7.85812 19.7451 7.98938 19.7451 8.125V8.75Z"
                  fill="$color-tertiary"
                ></path>
              </g>
              <defs data-v-06b3d8fe="">
                <clipPath data-v-06b3d8fe="" id="clip0_27_1736">
                  <rect
                    data-v-06b3d8fe=""
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.995117)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <span>{{ item.site }}</span>
          </div>
          <div class="mt-3">
            <button @click="addItem(item)" class="btn btn-add">
              <span>Add To Cart</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                class="h-6 w-6 inline add-icon"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=""
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import landpageVue from "../components/views/landpage.vue";
export default {
  components: {
    landpageVue,
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

<style>
.bg-secondery {
  background: #5e92ff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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

.add-icon {
  background: #000;
  border-radius: 50%;
}
.btn-add {
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;

  background: #009535;
  color: #e8f5ed;
  gap: 0.7rem;
  padding: 0.5rem;
  border-radius: 5px;
}
.btn-add span {
  font-size: 1.2rem;
}
.cart-box {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 5rem;
}
.cart-box .box .title {
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
}
.cart-box .box .price {
  font-family: "Roboto", sans-serif;
  margin: 0.4rem 0;
}
.box .price {
  color: #9e00ff;
  font-size: 1.3rem;
}
.cart-width {
  width: 100%;
  padding: 2rem;
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
  gap: 0.4rem;
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
  color: rgb(71, 70, 70);
}
</style>
