<template>
  <div>
    <loadingCom v-if="ready % 2 !== 0"></loadingCom>
    <div class="columns opacity-1" >
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
      this.activeColumn = col;
    },
  },
  destroyed() {
    helpers.changePositions({
      one: { right: 66.6, left: 33.3 },
      two: { right: 33.3, left: 66.6 },
    });
    helpers.shrink();
    window.removeEventListener("resize", () => {});
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


