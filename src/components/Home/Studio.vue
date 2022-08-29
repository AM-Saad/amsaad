<template>
  <div
    class="column"
    data-size="1"
    data-column="three"
    ref="studio"
    :class="{ active: isActiveColumn }"
  >
    <a class="enlarge button-pill" ref="button" @click="expand()">Studio</a>
    <div class="flex f-space-between column-head">
      <button
        :disabled="ready % 2 !== 0"
        @click="expanded ? shrink() : expand()"
        class="items__title"
        :class="[{ disabled: ready % 2 !== 0 }]"
      >
        <span>Studio</span>
        <span>
          <i class="fas" :class="expanded ? 'fa-times' : 'fa-arrows-alt-h'"></i>
        </span>
      </button>
    </div>
    <div class="information__text">
      <p>What does it mean to elevate the human experience?</p>
      <p>
        AMSaad is a software and digital resources studio based in Egypt with a
        timeless approach that fosters connection.
      </p>
      <p>
        Every detail is thoughtfully considered, coalescing in work that forges
        new ground while remaining true to our philosophy and vision.
      </p>
    </div>
    <div class="information__buttons">
      <a class="button-extend search" @click="opensearch($event)">
        <div class="button-extend__text-wrapper">
          <div class="button-extend__text">Search</div>
        </div>
        <div class="button-extend__icon">
          <search-icon />
        </div>
      </a>
      <br />
      <router-link class="button-extend newsletter" :to="{ name: 'contacts' }">
        <div class="button-extend__text-wrapper">
          <div class="button-extend__text">Contact</div>
        </div>
        <div class="button-extend__icon">
          <envolpe-icon />
        </div>
      </router-link>

      <br />
      <a class="button-extend loginPortalIcon" @click="openmail($event)">
        <div class="button-extend__text-wrapper">
          <div class="button-extend__text">Client&nbsp;Portal</div>
        </div>
        <div class="button-extend__icon">
          <user-plus-icon />
        </div>
      </a>
    </div>
    <div class="logo">
      <img src="@/assets/images/horizontal.png" alt="logo" />
    </div>
    <Footer></Footer>
    <AuthPortal :visibilePortal="visibilePortal"></AuthPortal>
  </div>
</template>

<script>
import Footer from "@/components/Home/Footer.vue";
import AuthPortal from "@/components/Home/AuthPortal.vue";
import * as helpers from "@/helpers/home";
import SearchIcon from "../Icons/SearchIcon.vue";
import EnvolpeIcon from "../Icons/EnvolpeIcon.vue";
import UserPlusIcon from "../Icons/UserPlusIcon.vue";
import { mapState } from "vuex";

export default {
  name: "Projetcs",
  data() {
    return {
      visibilePortal: false,
      expanded: false,
    };
  },
  components: {
    Footer: Footer,
    AuthPortal,
    SearchIcon,
    UserPlusIcon,
    EnvolpeIcon,
  },

  props: ["activeColumn"],
  computed: {
    ...mapState("studio", ["ready"]),

    isActiveColumn: function() {
      return this.activeColumn === "three" ? true : false;
    },
  },
  methods: {
    openmail() {
      this.visibilePortal = true;
      document.getElementById("subscription").classList.add("show");
      document.querySelector("body").classList.add("portal-pane--show");
    },
    opensearch() {
      document.querySelector("body").classList.add("search-pane--show");
    },
    shrink() {
      this.expanded = false;

      helpers.changePositions({
        one: { right: 66.6, left: 33.3 },
        two: { right: 33.3, left: 66.6 },
      });
      helpers.shrink();
    },
    expand() {
      this.expanded = true;

      helpers.changePositions({
        one: { right: 95, left: 5 },
        two: { right: 90, left: 10 },
      });
    },
  },
};
</script>

<style>
.information__text {
  padding: 0 3rem 16px 16px;
  min-height: 59vh;

}
.information__text p {
  font-size: 2vh;
  margin-bottom: 24px;
}
.disabled {
  cursor: progress;
}
@media (max-width: 900px) {
  .information__text p {
    line-height: 24px;
  }
}
</style>
