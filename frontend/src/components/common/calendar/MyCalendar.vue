<template>
    <button @click="previous">Previous</button>
    <button @click="next">Next</button>
    <div class="calendar-grid-container">
        <Header />
        <Day :item="item" v-for="item in list" :key="item" />
    </div>
</template>

<script>
import Day from './Day.vue'
import Header from './Header.vue'
import Calendar from '../../../logic/calendar/calendar.js'

export default {
  components: { Header, Day },
    name: "Calendar",
    data(){
        return {
            calendar: null,
            list: []
        }
    },
    created(){
        this.calendar = new Calendar();
        this.list = this.calendar.getList()
    },
    methods: {    
        previous(){
            this.list = this.calendar.previous()
        },
        next(){
            this.list = this.calendar.next()
        }
    }
}
</script>

<style scoped>
.calendar-grid-container {
    font-size: 12px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    padding: 10px;
}
</style>