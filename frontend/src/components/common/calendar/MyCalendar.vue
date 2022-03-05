<template>
    <Bar :title="calendar.getNameOfCurrentMonth()" @previous="previous" @next="next" />
    <div class="calendar-grid-container">
        <Header />
        <Day @clicked="addEvent" :item="item" v-for="item in calendar.list" :key="item" />
    </div>
</template>

<script>
import Day from './Day.vue'
import Header from './Header.vue'
import Calendar from '../../../logic/calendar/calendar.js'
import Bar from './Bar.vue'

export default {
  components: { Bar, Header, Day },
    name: "Calendar",
    data(){
        return {
            calendar: null,
            list: []
        }
    },
    created(){
        this.calendar = new Calendar();
        //this.list = this.calendar.getList()
        //this.calendar.setList(this.calendar.getList())
        this.calendar.getList()
    },
    methods: {    
        previous(){
            this.list = this.calendar.previous()
        },
        next(){
            this.list = this.calendar.next()
        },
        addEvent(item){
            console.log(item);
            item.events.push({
                id: 1,
                name: "Okay aankoop"
            })
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