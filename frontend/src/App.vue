<template>
  <div>
    <div v-if="isLogin">
      <router-view />
    </div>
    <div v-else>
      <div class="sidebar">
        <MenuSidebar />
      </div>
      <div class="home_content">
        <Titlebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MenuSidebar from "./components/general/menu/MenuSidebar.vue"
import Titlebar from './components/general/titlebar/Titlebar.vue'

export default {
  name: "App",
  components: {
    MenuSidebar,
    Titlebar
  },
  computed: {
    isLogin(){
      if(this.$route.name === "Login") return true
      return false
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Comic Sans MS", "Comic Sans", cursive;



}
body {
  position: relative;
  width: 100%;
  height: 100vh;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


/* _CO_ Vanaf hier */


@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

:root{
  
  /*
  --mytextcolor: white;
  --mysidebarcolor: black;
  --mytooltipcolortext: orange;
  --mytooltipcolor: orange;
  --myhovercolor: white;
  --myhovercolortext: black;
  

  --mytextcolor: black;
  --mysidebarcolor: white;
  --mytooltipcolortext: white;
  --mytooltipcolor: black;
  --myhovercolor: black;
  --myhovercolortext: white;
  */
  --mytextcolor: white;
  --mysidebarcolor: black;
  --mytooltipcolortext: black;
  --mytooltipcolor: white;
  --myhovercolor: white;
  --myhovercolortext: white;
  
}
::selection {
  color: var(--mytextcolor);
  background: var(--mysidebarcolor);
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  background: var(--mysidebarcolor);
  padding: 6px 14px;
  /*z-index: 99;*/
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 240px;
}
.sidebar .logo_content .logo {
  color: var(--mytextcolor);
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}
.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}
.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}
.sidebar #btn {
  position: absolute;
  color: var(--mytextcolor);
  top: 6px;
  left: 50%;
  font-size: 22px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}
.sidebar.active #btn {
  left: 90%;
}
.sidebar ul {
  margin-top: 20px;
}
.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  margin: 5px 0;
}
.sidebar ul li .tooltip {
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  color: var(--mytooltipcolortext);
  background: var(--mytooltipcolor);
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active ul li .tooltip {
  display: none;
}
.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}

.sidebar ul li a {
  color: var(--mytextcolor);
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover {
  background: linear-gradient(45deg,#dff9fb, #81ecec, #c7ecee, #c7ecee);
  color: black;
  background-size: 400% 400%;
	animation: gradient 5s ease infinite;
  animation-direction: normal;
}
.sidebar ul li i {
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name {
  transition: 0s;
  opacity: 1;
  pointer-events: auto;
}
.sidebar.active ~ .home_content {
  z-index: 100;
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}
.home_content {
  position: absolute;
  height: 100vh;
  width: calc(100% - 78px);
  left: 78px;
  transition: all 0.5s ease;
  background: white;
  background: #F8EFBA;
  background: #697070;
  /* Template colors */
  background: #ffeaa7;
  background: #dfe6e9;
  background: #74b9ff;
  background: #38ada9;
  background: #fad390;
  background: #f8c291;
  background: #6a89cc;
  background: #dff9fb;
  background: #82ccdd;
}
/*
.content-body {
  min-height: 100%;
  padding-top: 10px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 35px;
  background: white;
}
*/
</style>
