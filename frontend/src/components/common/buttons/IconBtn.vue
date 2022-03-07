<template>
  <div :style="styleObject" class="roundbtn-wrapper-icon">
    <span><i :class="getIcon"></i></span>
  </div>
</template>

<script>
export default {
  name: "IconBtn",
  props: {
    icon: { type: String },
    color: { type: String },
  },
  computed: {
    getIcon() {
      return `bx ${this.icon}`;
    },
    styleObject() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<style scoped>
.roundbtn-wrapper-icon {
  position: relative;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color);
  cursor: pointer;
  background-color: var(--color);
  color: #ffffff;
}

.roundbtn-wrapper-icon:hover {
  border: 1px solid #bdc3c777;
  background: #bdc3c777;
}
.roundbtn-wrapper-icon:active {
  background-color: lightblue;
}
/*
.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}
*/
</style>
