<template>
  <div class="calendar-event-box">
      {{ text }}
  </div>
</template>

<script>
export default {
    name: "CalendarEvent",
    props: {
        text: {
            type: String
        }
    },
}
</script>

<style scoped>
.calendar-event-box {
    margin-top: 5px;
    background: #27ae60;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 10px;
    width: 100%;
    border-radius: 3px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}
</style>