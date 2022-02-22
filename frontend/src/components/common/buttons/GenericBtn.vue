<template>
  <div class="dash-generic-btn" @click="clicked">{{ text }}</div>
</template>

<script>
export default {
    name: "GenericBtn",
    props: {
        text: {
            type: String
        }
    },
    methods: {
        clicked(){
            this.$emit("clicked")
        }
    }
}
</script>

<style>
.dash-generic-btn {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 5px 5px 5px 5px;
  display: inline-block;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 12px;
  cursor: pointer;
  background: white;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}

.dash-generic-btn:hover {
  box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  -webkit-box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  -moz-box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  -ms-box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  color: white;
  background: #81ecec;
  animation: glow linear 2s infinite; 
}

@keyframes glow { 
    0% { background-color:#81ecec; }
    50% { background-color:#c7ecee; }
    100% { background-color:#81ecec; } 
}

.dash-generic-btn:active {
  color: white;
  background: black;
  box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  -webkit-box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
  -moz-box-shadow: 0px 0px 25px 3px rgba(0, 174, 255, 0.3);
}
</style>