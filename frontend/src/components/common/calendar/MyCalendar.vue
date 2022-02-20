<template>
  <div style="width: 90%">
      <div class="calendar-grid-container">
          <div class="calendar-grid-header" v-for="item in headerList" :key="item.id">{{ item.day }}</div>
          <div class="calendar-grid-item" v-for="item in list" :key="item.id">
              <div style="margin: 5px">
                {{ item.day }}
                <div class="test-ok">
                    <div>test</div>
                    <div>ok</div>
                    <div>zefzfd </div>
                    <div>efzef</div>
                    <div>zrfjzeofi</div>
                    <div>...</div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
//import moment from "moment"

export default {
    name: "Calendar",
    data(){
        return {
            headerList: [],
            list: [],
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
        for(let i = 1; i < 31; i++) {
            this.list.push({
                id: i,
                day: i,
            })
        }
    }
}
</script>

<style>

.calendar-grid-container {
    font-size: 12px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    padding: 10px;
}

.calendar-grid-header {
    margin-left: 10px;
    margin-bottom: 5px;
    text-align: left;
}

.calendar-grid-item {
    border: 1px solid lightgrey;
    background-color: rgba(255, 255, 255, 0.8);
    padding-bottom: 75%;
    text-align: left;
}

.test-ok {
    position: absolute;
}



</style>