<template>
  <div class="exp-screen-categories">
    <div class="row">
      <div class="column">
        <CategoryBox :category="item" v-for="item in categories" :key="item.id" />
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import CategoriesController from "../api/calls/categories.js";
import CategoryBox from "../components/boxes/CategoryBox.vue";

export default {
  name: "Categories",
  components: {
    CategoryBox,
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    CategoriesController.getAll(this, (res) => {
      console.log(res);
      this.categories = res.data;
    });
  },
};
</script>

<style scoped>
.exp-screen-categories {
  padding: 25px;
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
