<template>
  <div class="home">
    <div class="home-column-left">
      <IconBtn icon="bx-plus" color="#26de81"/>
      <IconBtn icon="bx-plus" color="#4cd137"/>
      <IconBtn icon="bx-plus" color="#44bd32"/>
      <IconBtn icon="bx-plus" color="#2ecc71"/>
      <IconBtn icon="bx-plus" color="#27ae60"/>
      <IconBtn icon="bx-plus" color="#1abc9c"/>
      <IconBtn icon="bx-user" />
    </div>
    <div class="home-column-right">
    </div>

  </div>
</template>

<script>
import IconBtn from '../components/common/buttons/IconBtn.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    IconBtn
  },
}
</script>

<style scoped>
.home{
  padding: 25px;
  display: flex;
}
.home-column-left{
  flex-grow: 6;
}
.home-column-right{
  flex-grow: 4;
}
</style>