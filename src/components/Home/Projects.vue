<template>
  <div
    data-column="two"
    data-size="1"
    class="column"
    ref="projects"
    :class="[{ loading: loading }, { active: isActiveColumn }]"
  >
    <ItemLoading v-if="loading"></ItemLoading>

    <!-- Reload if request failed -->
    <Reload :reload="reload" @reload="getProjects()" />

    <div v-if="!loading">
      <a class="enlarge button-pill" ref="button" @click="expand()"
        >Portfolio</a
      >
      <div class="flex f-space-between column-head">
        <button
          class="items__title"
          :disabled="ready % 2 !== 0"
          @click="expanded ? shrink() : expand()"
          :class="[
            { flex: !isFiltersActive },
            { none: isFiltersActive },
            { disabled: ready % 2 !== 0 },
          ]"
        >
          <span>Portfolio</span>
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
        <Project
          v-for="project in items"
          :key="project._id"
          :project="project"
        ></Project>
      </div>

      <div v-if="items.length == 0">
        <img
          class="w-75 m-auto block"
          style="margin-top:15px"
          src="../../assets/images/noresult.svg"
          alt
          srcset
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Projects/project-components/Project";
import * as helpers from "@/helpers/home";
import ItemLoading from "@/components/general/ItemLoading.vue";
import { mapState, mapGetters } from "vuex";
import Filters from "./Filters.vue";
import Reload from "../general/Reload.vue";


export default {
  name: "Projetcs",
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
    Project,
    ItemLoading,
    Filters,
    Reload,
  },
  props: ["activeColumn"],
  computed: {
    ...mapState("studio", ["projects", "ready"]),
    ...mapGetters("studio", ["filterProject"]),
    isActiveColumn: function() {
      return this.activeColumn === "two" ? true : false;
    },
  },

  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.loading = true;
      this.reload = false;

      const res = await this.$store.dispatch("studio/fetch_projects");

      this.loading = false;

      if (!res) return (this.reload = true);

      this.items = this.projects;
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
        two: { right: 5, left: 95 },
      });
    },
    filter(type) {
      this.filterVal = type;
      const projects = this.filterProject(type);
      this.items = projects;
    },
  },
};
</script>

<style scoped>
.disabled {
  cursor: progress;
}
</style>
