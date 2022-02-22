<template>
  <div @click="clicked" :class="getStyle">
    <div v-if="item.date" class="calendar-grid-day-wrapper" style="position:relative; margin: 5px">
        <span class="calendar-grid-item-day">{{ item.day }}</span>
        <div class="calendar-grid-item-subitem-box">
            <div v-for="(eventItem, index) in item.events" :key="eventItem.id">
                <CalendarEvent  v-if="index < 3" :text="eventItem.name" />
                <div v-if="index === 3">...</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CalendarEvent from './CalendarEvent.vue'

export default {
  components: { CalendarEvent },
    name: "Day",
    props: {
        item: {
            type: Object
        },
    },
    computed: {
        getStyle(){
            if(this.item.date) return "calendar-grid-item"
            return "calendar-grid-item-disabled"
        }
    },
    methods: {
        clicked() {
            this.$emit("clicked", this.item);
        }
    }
}
</script>

<style scoped>
.calendar-grid-item-day {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}
.calendar-grid-item {
    border: 1px solid lightgrey;
    background-color: rgba(255, 255, 255, 0.8);
    padding-bottom: 75%;
    text-align: left;
}
.calendar-grid-item-disabled {
    border: 1px solid lightgrey;
    background-color: rgba(219, 219, 219, 0.8);
    padding-bottom: 75%;
    text-align: left;
}
.calendar-grid-item-subitem-box {
    width: 100%;
    position: absolute;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}
.calendar-grid-item:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
}
.calendar-grid-item:active {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
}
</style>