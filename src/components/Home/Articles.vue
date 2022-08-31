<template>
  <div
    class="column"
    data-column="one"
    id="colOne"
    data-size="1"
    ref="articles"
    :class="[{ loading: loading }, { active: isActiveColumn }]"
  >
    <ItemLoading v-if="loading"></ItemLoading>

    <!-- Reload if request failed -->
    <Reload :reload="reload" @reload="getArticles()" />

    <div v-if="!loading">
      <a class="enlarge button-pill" ref="button" @click="expand()">Blog</a>
      <div class="flex f-space-between column-head">
        <button
          class="items__title"
          :disabled="ready % 2 !== 0"
          @click="expanded ? shrink() : expand()"
          :class="[{ block: !isFiltersActive }, { none: isFiltersActive }, {disabled:ready % 2 !== 0}]"
        >
          <span >Blog</span>
          <span>
            <i
              class="fas"
              :class="expanded ? 'fa-times' : 'fa-arrows-alt-h'"
            ></i>
          </span>
        </button>

        <Filters
          :isActive="isFiltersActive"
          :val="filterVal"
          @filter="filter"
          @toggleFilter="isFiltersActive = !isFiltersActive"
        />
      </div>
      <div class="items" v-if="items.length > 0">
        <Article
          v-for="article in items"
          :key="article._id"
          :article="article"
        ></Article>
      </div>
      <div v-if="items.length == 0">
        <img
          class="w-75 m-auto block"
          src="../../assets/images/noresult.svg"
          style="margin-top:15px"
          alt
          srcset
        />
      </div>
    </div>
  </div>
</template>

<script>
import Article from "@/components/Articles/article-components/ArticleComponent";
import ItemLoading from "@/components/general/ItemLoading.vue";
import { mapGetters, mapState } from "vuex";
import * as helpers from "@/helpers/home";
import Filters from "./Filters.vue";
import Reload from "@/components/general/Reload.vue";

export default {
  name: "Articles",
  data() {
    return {
      isFiltersActive: false,
      items: [],
      expanded: false,
      loading: false,
      reload: false,
      filterVal: "all",
    };
  },
  components: {
    Article,
    ItemLoading,
    Filters,
    Reload,
  },
  props: ["activeColumn"],
  computed: {
    ...mapState(["two"]),
    ...mapState("studio", ["articles", "ready"]),
    ...mapGetters("studio", ["filterArticle"]),
    isActiveColumn: function() {
      return this.activeColumn === "one" ? true : false;
    },
  },

  created() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      this.loading = true;
      this.reload = false;

      const res = await this.$store.dispatch("studio/fetch_articles");

      this.loading = false;
      if (!res) return (this.reload = true);
      this.items = this.articles;
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
        one: { right: 10, left: this.two.min - 5 },
        two: { right: 100 - this.two.min, left: this.two.min },
      });
    },
    filter(type) {
      this.filterVal = type;
      const articles = this.filterArticle(type);
      this.items = articles;
    },
  },
  watch: {
    articles() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
#editBox {
  position: absolute;
  background: #ffffffeb;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 999999;
}
.post .create-post_pop-up.Unactive {
  display: none;
}
.allarticles #loading {
  height: 35px;
  width: 100px;
}
.disabled{
  cursor: progress;
}
#imgPrv {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.598);
  height: 100%;
  width: 100%;
  z-index: 99999;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: 0.5s all ease-in-out;
}
#imgPrv img {
  height: auto;
  position: relative;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 320px) and (max-width: 557px) {
}
</style>
