<template>
  <div :class="getStyle">
        <div style="margin: 5px">
            <div v-if="item.date">
                {{ item.day }}    
                <div class="calendar-grid-item-subitem-box">
                    <div>{{ item.date.format("DD/MM/YY")}}</div>
                    <div>ok</div>
                    <div>...</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
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
    }
}
</script>

<style scoped>
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
    position: absolute;
}
</style>