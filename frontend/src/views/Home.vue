<template>
  <div class="home">
    <div style="width: 60%">
      <div>Month: March</div>
      <Calendar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "../components/common/calendar/MyCalendar.vue"

export default {
  name: 'Home',
  components: {
    Calendar
  },
}
</script>

<style scoped>
.home{
  padding: 25px;
}
</style>