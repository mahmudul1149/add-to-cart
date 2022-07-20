<template>
  <div class="sidebar">
    <div class="border">
      <div class="input-group">
        <label for="#">Price Rance</label>
        <input type="number" name="" id="" placeholder="1" />
        <input type="number" name="" id="" placeholder="1600000" />
        <button class="btn-secondery">Apply</button>
      </div>
      <div class="category-group">
        <label for="#">Choose a category:</label>
        <select name="#" id="">
          <option v-for="category in priorities" :key="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="category-group">
        <label for="#">Choose a category:</label>
        <select @change="filterTodos($event)">
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="6">6</option>
        </select>
        <button class="btn-darks">Clear Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      selectedPriority: "All",
      priorities: ["All", "jewelery", "electronics", "men's clothing"],
      selectedNumber: [20, 10, 5],
    };
  },

  computed: {
    ...mapGetters(["products"]),
  },

  //   methods: mapActions(["filterTodos"]),
};
</script>

<style>
.sidebar {
  border-right: 1px solid #ccc;
  max-width: 280px;
  height: 100vh;
  padding: 2rem;
}
.border {
  margin-top: 2rem;
}
.input-group label {
  display: block;
}
.input-group input {
  border: 1px solid #ccc;
  margin: 5px auto;
  padding: 12px 14px;
  width: 280px;
  border-radius: 5px;
  box-sizing: border-box;
}
.category-group label {
  display: block;
  margin: 0.4rem;
}
.category-group select {
  border: 1px solid #ccc;
  background: #eeeeff;
  margin: 5px auto;
  padding: 12px 14px;
  width: 280px;
  border-radius: 5px;
}
.category-group select option {
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
}
label {
  font-weight: 600;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.btn-secondery {
  cursor: pointer;
  padding: 0.6rem 2.5rem;
  margin: 0.5rem 0;
  color: white;
  background: #040463;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #1d1d61;
  margin-right: 1rem;
}
.btn-darks {
  cursor: pointer;
  padding: 0.6rem 2.5rem;
  margin: 0.5rem 0;
  background: #ffffff;
  color: #585892;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #1d1d61;
}
.btn-primary {
  cursor: pointer;
  padding: 0.6rem 2.5rem;
  margin: 0.5rem 0;
  background: red;
  margin-left: 0.6rem;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #1d1d61;
}
.btn-primary:hover {
  background: #333;
  color: white;
}
.btn-darks:hover {
  color: white;
  background: #040463;
  transition: 0.3s;
}
.btn-secondery:hover {
  background: #ffffff;
  color: #1616bd;
  border: 1px solid #1d1d61;
  transition: 0.4s;
}
</style>