<template>
  <div>
    <header id="header">
      <div @click="goTo" class="logo">
        <img src="../../assets/myweb.png" alt="" />
      </div>
      <div class="flex-nav">
        <nav>
          <ul v-show="!mobile" class="links">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product">Product</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/cart" class="flex-cart"> <span>Cart</span> <img class="cart-icons"
                  src="~/assets/cart-icon-28356.png" alt=""> <span class="quantity">{{length}}</span></nuxt-link>
                 
            </li>
          </ul>
          <ul v-show="mobileNav" class="mobile-nav">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
             <li>
              <nuxt-link to="/product">Product</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
     
              <li>
              <nuxt-link to="/cart" >Cart</nuxt-link>
                 
            </li>
          </ul>
        </nav>
        <img class="bars dropdown" @click="submit" src="../../assets/barss.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNav: false,
      windrwWidth: null,
      mobile: null,
    };
  },
  computed: {
    length() {
      return this.$store.getters.length
    }
  },
  created() {
    if (typeof window !== "undefined") {
      // browser code
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    }
  },
  methods: {
    goTo() {
      this.$router.push("/");
    },
    submit() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      if (typeof window !== "undefined") {
        // browser code
        this.windrwWidth = window.innerWidth;
        if (this.windrwWidth <= 900) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
  },
   mounted() {
    this.$store.dispatch("initializeGetStore");
  },
};
</script>

<style>


header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 2rem;
  /* padding: 0 3rem; */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

.links {
  list-style: none;
  display: flex;
  align-items: center;
}

#header .logo img {
  width: 90px;
}

#header ul li a {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0.4rem;
}

.flex-nav {
  display: flex;
  align-items: center;
}

.flex-nav .flex {
  display: flex;
  display: none;
}

.flex-nav select {
  padding: 0.3rem;
  outline: none;
  background: rgb(213, 251, 253);
  font-size: 1.2rem;
}

.flex-nav option {
  background: white;
}

.flex-bars {
  display: flex;
  align-items: center;
}

.bars {
  margin-left: 2rem;
  width: 30px;
  height: 30px;
  display: none;
}

.cart-icons {
  width: 30px;
  height: 30px;

}
.flex-cart {
  display: flex !important;
  align-items: center;
  position: relative;
}
.quantity {
  position: absolute;
  top: -5px;
  right: -12px;
  width: 20px !important;
  height: 20px !important;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 1rem;
  background: red !important;
  color: white;
}
.cross {
  margin-left: 2rem;
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 900px) {
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .mobile-nav {
    display: block;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    top: 2.4rem;
    right: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .mobile-nav {
    list-style: none;
  }

  .mobile-nav ul li a {
    text-decoration: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 15px;
  }

  .flex-nav select {
    font-size: 1rem;
  }
}
@media  screen and (max-width: 900px) {
    .cart-icons {
      display: none;
    }
    .cart-icons span {
      display: none;
    }
}
</style>