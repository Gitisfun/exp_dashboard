<template>
    <div class="calendar-grid-header" v-for="item in headerList" :key="item.id">{{ item.day }}</div>
</template>

<script>
export default {
    name: "DaysHeader",
    data(){
        return {
            headerList: []
        }
    },
    created(){
        this.headerList.push({ id: 1, day: "Mon"})
        this.headerList.push({ id: 2, day: "Tue"})
        this.headerList.push({ id: 3, day: "Wed"})
        this.headerList.push({ id: 4, day: "Thu"})
        this.headerList.push({ id: 5, day: "Fri"})
        this.headerList.push({ id: 6, day: "Sat"})
        this.headerList.push({ id: 7, day: "Sun"})
    }
}
</script>

<style scoped>
.calendar-grid-header {
    margin-left: 10px;
    margin-bottom: 5px;
    text-align: left;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}
</style>