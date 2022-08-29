<template>
  <div>
    <router-link :to="{name:'home'}" class="button-pill button-pill--icon m-medium close">
      <svg
        data-v-4fdd230d
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon-cross">
        <path
          data-v-4fdd230d
          d="M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="black"
        />
        <path
          data-v-4fdd230d
          d="M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="black"
        />
      </svg>
    </router-link>
    <loadingCom v-if="enter"></loadingCom>
    <div v-if="!enter" class="columns opacity-1">
      <Contacts ref="contacts"></Contacts>
      <About ref="about"></About>
    </div>
    <div class="columns-footer" v-if="!enter">
      <div class="columns-footer__menu">
        <div class="columns-footer__menu-item" @click="activeColumn('one', $event)">
          <div class="button-pill active" data-column="one">About</div>
        </div>
        <div class="columns-footer__menu-item" @click="activeColumn('two', $event)">
          <div class="button-pill" data-column="two">Contacts</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingCom from "@/components/general/homeloading.vue";
import Contacts from "@/components/Contact/Contacts.vue";
import About from "@/components/Contact/About.vue";
import * as helpers from "@/helpers/home";
let $ = require("jquery");

import { mapState } from "vuex";
export default {
  name: "Contact",
  data() {
    return {
      windowWidth: window.innerWidth,
      shiftX: null,
      shiftY: null,
      loading: true,
      enter: true
    };
  },
  components: {
    Contacts: Contacts,
    About: About,
    loadingCom: loadingCom
  },
  computed: {
    ...mapState(["one", "two", "colWidth"]),
    ...mapState("studio", ["articles", "projects", "ready"])
  },
  mounted() {
    this.start();
    this.loading = false;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },


  methods: {
    start() {
      helpers.shrink();
      this.enter = false;
    },
    checkFiltertion() {
      const type = this.$route.query.type;
      const category = this.$route.params.category;
      if (type && category) {
        if (type === "article") {
          this.$refs.articles.activefilters = true;
          document.querySelector(`a[data-article-id="${category}"]`).click();
          this.$refs.articles.expand();
        } else {
          this.$refs.projects.activefilters = true;
          document.querySelector(`a[data-project-id="${category}"]`).click();
          this.$refs.projects.expand();
        }
      }
    },
    activeColumn(col) {
      $(".column").addClass("none");
      $(`[data-column]`).removeClass("active");
      $(".column").removeClass("none");
      $(`[data-column="${col}"]`).addClass("active");
    }
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
    }
  }

};
</script>

<style scoped>
.vdr.active:before {
  outline: 0;
}

</style>
