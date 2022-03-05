<template>
  <div>
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />
    <div class="logo_content">
      <div class="logo">
        <i class="bx bxl-c-plus-plus"></i>
        <div class="logo_name" style="margin-left: 10px">Dashboard</div>
      </div>
      <i class="bx bx-menu-alt-right" id="btn" @click="clicked"></i>
    </div>
    <ul class="nav_list">
      <MenuItem
        @itemClicked="itemClicked"
        v-for="item in menuItems"
        :title="item.name"
        :icon="item.icon"
        :link="item.link"
        :key="item.id"
      />
      <li id="log-out-box" @click="logout">
        <div class="logout-out-box">
          <router-link active-class="router-link-active" to="login">
            <i :class="`bx bx-log-out`"></i>
            <span class="links_name">Uitloggen</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MenuItem from "./MenuItem.vue";

export default {
  name: "MenuSidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      visibility: undefined,
      menuItems: [],
    };
  },
  computed: mapGetters(["allMenuItems", "currentMenuItem"]),
  created() {
    this.menuItems = this.allMenuItems;
  },
  mounted() {
    this.visibility = localStorage.getItem("menubarvisibility");
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    if (this.visibility != "true") {
      sidebar.classList.add("active");
      localStorage.setItem("menubarvisibility", null);
    } else {
      sidebar.classList.remove("active");
      localStorage.setItem("menubarvisibility", "true");
    }
    if (this.visibility != "true") {
      btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  },
  methods: {
    ...mapActions(["switchMenuItem"]),
    clicked() {
      let btn = document.querySelector("#btn");
      let sidebar = document.querySelector(".sidebar");
      if (this.visibility == "true") {
        sidebar.classList.add("active");
        localStorage.setItem("menubarvisibility", null);
        this.visibility = null;
      } else {
        sidebar.classList.remove("active");
        localStorage.setItem("menubarvisibility", "true");
        this.visibility = "true";
      }
      if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    },
    itemClicked() {
      if (this.$route.meta.group != this.currentActiveGroup) {
        for (let i = 0; i < this.menuItems.length; i++) {
          if (this.$route.meta.group == this.menuItems[i].group) {
            this.lastActiveGroup = this.currentActiveGroup;
            this.currentActiveGroup = this.menuItems[i].group;
            this.menuItems[
              this.findById(this.lastActiveGroup)
            ].isActive = false;
            this.menuItems[i].isActive = true;
          }
          if (this.$route.name == this.menuItems[i].name) {
            this.switchMenuItem(this.menuItems[i]);
          }
        }
      }
    },
    findById(group) {
      for (let i = 0; i < this.menuItems.length; i++) {
        if (this.menuItems[i].group == group) {
          return i;
        }
      }
      return 0;
    },
    logout() {},
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
#btn {
  cursor: pointer;
}

.logout-out-box {
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: 15px;
  padding: 10px 14px;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.active .logout-out-box {
  width: 240px;
}
</style>
