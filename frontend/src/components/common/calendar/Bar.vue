<template>
  <div id="calendar-bar">
    <GenericBtn @clicked="previous" text="< Previous" />
    <div id="calendar-bar-title" class="level-item">{{ title }}</div>
    <GenericBtn @clicked="next" text="Next >" />
  </div>
</template>

<script>
import GenericBtn from '../buttons/GenericBtn.vue'
export default {
  components: { GenericBtn },
    name: "Bar",
    props: {
      title: {
        type: String
      }
    },
    methods: {
      previous(){
        this.$emit("previous")
      },
      next(){
        this.$emit("next")
      }
    }
}
</script>

<style scoped>
#calendar-bar {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
    margin-left: 15px;
}
#calendar-bar-title {
  background: white;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}

</style>