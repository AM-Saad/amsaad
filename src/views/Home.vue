<template>
  <div>
    <loadingCom v-if="ready != 2"></loadingCom>
    <div class="columns opacity-1">
      <Articles ref="articles" :activeColumn="activeColumn" />
      <Projects ref="projects" :activeColumn="activeColumn" />
      <Studio ref="studio" :activeColumn="activeColumn" />
      <Rails :loading="loading" ref="rails" :refs="this.$refs"></Rails>
    </div>
    <div class="columns-footer">
      <div class="columns-footer__menu">
        <div class="columns-footer__menu-item" @click="activateColumn('one')">
          <div
            class="button-pill"
            :class="{ active: activeColumn === 'one' }"
            data-column="one"
          >
            Blog
          </div>
        </div>
        <div class="columns-footer__menu-item" @click="activateColumn('two')">
          <div
            class="button-pill"
            :class="{ active: activeColumn === 'two' }"
            data-column="two"
          >
            Portfolio
          </div>
        </div>
        <div class="columns-footer__menu-item" @click="activateColumn('three')">
          <div
            class="button-pill"
            :class="{ active: activeColumn === 'three' }"
            data-column="three"
          >
            Studio
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingCom from "@/components/general/homeloading.vue";
import Articles from "@/components/Home/Articles.vue";
import Projects from "@/components/Home/Projects.vue";
import Studio from "@/components/Home/Studio.vue";
import Rails from "@/components/Home/Rails.vue";
import * as helpers from "@/helpers/home";
let $ = require("jquery");

import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth,
      shiftX: null,
      shiftY: null,
      loading: true,
      enter: true,
      activeColumn: "two",
    };
  },
  components: {
    Articles: Articles,
    Projects: Projects,
    Studio: Studio,
    Rails: Rails,
    loadingCom: loadingCom,
  },
  computed: {
    ...mapState("studio", ["ready"]),
  },
  mounted() {
    if (this.ready == 2) this.start();
    this.loading = false;
    window.addEventListener(
      "resize",
      () => (this.windowWidth = window.innerWidth)
    );
  },
  methods: {
    start() {
      helpers.shrink();
      helpers.calcColumn();
      this.enter = false;
    },

    activateColumn(col) {
      console.log(col);
      this.activeColumn = col;
    },
  },
  watch: {
    windowWidth() {
      helpers.calcColumn();
    },
    ready(v) {
      if (v == 2) {
        setTimeout(() => {
          this.start();
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.vdr.active:before {
  outline: 0;
}
.columns-footer .columns-footer__menu {
  display: -webkit-box;
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #000;
}

.columns-footer {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1.4px solid var(--main-color);
  box-shadow: 2px 4px 8px 0px rgb(161 161 161 / 37%),
    -2px -4px 8px 0px rgb(193 193 193 / 37%);
  z-index: 25;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.columns-footer .columns-footer__menu .columns-footer__menu-item {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
}
.columns-footer .columns-footer__menu .columns-footer__menu-item .button-pill {
  border: 1px solid transparent;
  -webkit-transition: border-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: border-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.columns-footer
  .columns-footer__menu
  .columns-footer__menu-item
  .button-pill.active {
  border: 1px solid #000;
  background: var(--main-color);
  color: #fff;
}
.columns-footer .columns-footer__buttons {
  display: -webkit-box;
  display: flex;
  padding: 16px;
}
@media (max-width: 900px) {
  .columns-footer {
    display: block;
  }
}
</style>
