<template>
  <div class="home">
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "../components/common/calendar/MyCalendar.vue"

export default {
  name: 'Home',
  components: {
    Calendar
  }
}
</script>

<style scoped>
.home{
  padding-top: 25px;
  padding-left: 250px;
  padding-right: 250px
  

}
</style>