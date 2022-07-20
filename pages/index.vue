<template>
  <div>
    <div class="searching-page container">
      <vue-confirm-dialog></vue-confirm-dialog>
      <h1>
        SEARCH & COMPA RE<br />
        THE BEST DEALS ONLINE
      </h1>
      <div class="width-page">
        <div class="searchbox">
          <input
            type="text"
            @change="searchInput"
            v-model="text"
            name=""
            id="input"
            placeholder="What Are You Looking For Toady"
          />
          <img @click="goTo" src="../assets/search.png" class="search" alt="" />
        </div>
      </div>
    </div>
    <section class="deals">
      <div class="container flex-deals">
        <div class="deals-box">
          <h1>GET THE BEST ONLINE DEALS ON YOUR INBOX</h1>
          <p>
            Signup Our Newsletter And Receive Periodic Info And Alerts On Best
            Online <br />
            Deals In Bangladesh
          </p>
          <div class="flex-input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Input your email here"
            />
            <button class="submit-btn">Submit</button>
          </div>
        </div>
        <div>
          <img
            src="https://www.gifimage.net/wp-content/uploads/2018/11/rainbow-gif-png.gif"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="featured">
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
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    searchInput() {
      this.$store.dispatch("searchValues", this.text);
      console.log("cliclexd");
      this.$router.push("/search");
    },
    goTo() {
      this.$router.push("/search");
    },
    addItem(item) {
      this.$confirm({
        title: "Confirm",
        message: "Are you sure want to Add the content?",
        button: {
          yes: "Yes",
          no: "Cancel",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$store.dispatch("addItems", item);
          }
        },
      });
    },
  },
  created() {
    this.$store.dispatch("initItems");
  },
};
</script>

<style>
.searching-page {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.searching-page h1 {
  font-size: 4rem;
  text-align: center;
  color: rgba(182, 214, 0, 0.87);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.searching-page span {
  color: rgba(48, 1, 216, 0.973);

  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.searchbox {
  height: 50px;
  position: relative;
  border: 0.5px solid rgba(1, 116, 211, 0.5);
  margin: 0.7rem;
  background: #f7f7ff;
  border-radius: 35px;
}
.searchbox:hover {
  box-shadow: rgba(4, 128, 253, 0.5) 0 0 5px;

  outline: none;
}
.searchbox #input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 0 0.9rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background: transparent;
  position: absolute;
  box-sizing: border-box;
}
.searchbox #input:focus {
  outline: none;
}
.searchbox #input::placeholder {
  color: #ff7b0098;
}

.searchbox .search {
  width: 30px;
  height: 30px;
  padding: 0.7rem 0.7rem;
  position: absolute;
  top: 0;
  display: block;
  right: 0;
}
.width-page {
  max-width: 500px;
  margin: auto;
}
.box .image img {
  width: 250px;
  height: 250px;
  text-align: center;
}
.box a {
  text-decoration: none;
  color: black;
}
.box a:hover {
  text-decoration: underline;
  color: green;
}
.cart-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.cart-box .box {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
}
.cart-box .box h4 {
  color: rgb(59, 59, 253);
  font-weight: 900;
}
.cart-box .box:hover {
  transition: 0.5s ease-in-out;
  transform: scale(1.009);
  box-shadow: rgb(170, 253, 220) 0 0 10px;
  border-collapse: collapse;
}
.box .image .cart-icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.span {
  color: rgb(216, 213, 213) !important;
}
.featured {
  margin-bottom: 2rem;
  background: #f7f7ff;
}
.featured .sub-title {
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.8rem;
}
.featured .-sub-title h2 {
  color: red;
  text-align: center;
}
.deals {
  display: flex;
  background-image: linear-gradient(to bottom right, #01436f, #1bc661);
  padding: 5rem 1rem;
}
.flex-deals {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.flex-deals img {
  width: 400px;
  height: 100%;
}
.flex-deals .deals-box {
  max-width: 500px;
}
.deals-box h1 {
  color: white;
  line-height: 1.5;
  font-size: 2rem;
}
.deals-box p {
  color: white;
  font-size: 1.3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.flex-input input {
  outline: none;
  border: 1px solid greenyellow;
  color: #fff;
  background: #1bc661;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
}
.flex-input input::placeholder {
  color: #fff;
}
.flex-input input:hover {
  box-shadow: #1bc661 0 0 10px;
}
.submit-btn {
  outline: none;
  padding: 0.5rem;
  border: 1px solid white;
  background: #01436f;
  color: white;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
}
.submit-btn:hover {
  background: red;
}
.submit-btn:focus {
  outline: none;
}
</style>