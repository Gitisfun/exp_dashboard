<template>
  <div class="exp-category-box">
    <i class="bx bxs-circle" style="font-size: 12px"></i>
    <span style="margin-left: 15px; font-size: 16px">
      {{ category.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: {
    category: {
      type: Object,
    },
  },
};
</script>

<style>
.exp-category-box {
  background: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: left;
}
</style>
