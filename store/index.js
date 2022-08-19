import axios from "axios";
import item from "../data/item";
import product from "../data/product";

export const state = () => ({
  product: [],
  cart: [],
  searchValue: "",
});

export const getters = {
  products(state) {
    return state.product;
  },
  carts(state) {
    return state.cart;
  },

  filteredProducts(state) {
    return state.product.filter((item) =>
      item.title.toLowerCase().includes(state.searchValue.toLowerCase())
    );
  },
  length(state) {

    return state.cart.reduce((acc, val) => acc + val.quantity, 0)
  }
};
export const mutations = {
  initializeStore(state) {
    if (localStorage.getItem("cart")) {
      state.cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },

  GET_PRODUCT(state, product) {
    state.product = product;
  },

  ADD_ITEM(state, item) {
    const record = state.cart.find((el) => el.id === item);
    if (record) {
      record.quantity++;
    } else {
      state.cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  REMOVE_ITEMS(state, item) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id == item.id) {
        state.cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  SEARCH_VALUE(state, value) {
    state.searchValue = value;
  },
  REMOVE_QTY(state, id) {
    const record = state.cart.find((el) => el.id === id);
    if (record.quantity > 1) {
      record.quantity--;
    } else {
      state.cart.splice(state.cart.indexOf(record), 1);
    }
  },
  ADD_QUANTITY(state, id) {
    const record = state.cart.find((el) => el.id === id);
    record.quantity++;
  },
};

export const actions = {
  //   async fetchUsers({ commit }) {
  //     try {
  //       const data = await axios.get("https://fakestoreapi.com/products");

  //       commit("GET_PRODUCT", data.data);
  //     } catch (error) {
  //       alert(error);
  //       console.log(error);
  //     }
  //   },
  initItems({ commit }) {
    commit("GET_PRODUCT", item);
  },
  initProduct({ commit }) {

        commit("GET_PRODUCT", product);
  
  },
  addItems({ commit }, item) {
    commit("ADD_ITEM", item);
  },
  removeItem({ commit }, item) {
    commit("REMOVE_ITEMS", item);
  },
  async filterTodos({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    console.log(limit);
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      commit("GET_PRODUCT", res.data);
    } catch (err) {
      console.log(err);
    }
  },
  initializeGetStore({ commit }) {
    commit("initializeStore");
  },

  searchValues({ commit }, value) {
    commit("SEARCH_VALUE", value);
  },
};
