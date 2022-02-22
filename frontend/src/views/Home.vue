<template>
  <div class="home">
    <div class="home-column-left">
      <Calendar />
    </div>
    <div class="home-column-right">
      <RoundBtn />
    </div>

  </div>
</template>

<script>
import RoundBtn from '../components/common/buttons/RoundBtn.vue'
// @ is an alias to /src
import Calendar from "../components/common/calendar/MyCalendar.vue"

export default {
  name: 'Home',
  components: {
    Calendar,
    RoundBtn
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