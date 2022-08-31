<template>
  <div>
    <div class="content">
      <router-link class="back_btn" to="/admin/dashboard">
        <left-arrow-icon />

        Dashboard</router-link
      >
      <div class="flex f-space-between">
        <h1>All Articles</h1>
        <router-link class="btn btn-success" :to="{ name: 'new_article' }"
          >New Article</router-link
        >
      </div>
      <div v-if="!loading" class="grid g-four">
        <list-item
          v-for="a of allarticles"
          :key="a._id"
          :title="a.title"
          :description="a.site_description"
          :link="`/admin/articles/new/${a._id}`"
          :id="a._id"
          :image="url + '/' + a.image"
          :date="a.date"
          @delete="deleteArticle(a._id)"
        />
      </div>
      <p v-if="loading">Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "@/components/Admin/ListItem";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon.vue";

export default {
  name: "List",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    ListItem,
    LeftArrowIcon,
  },
  computed: {
    ...mapState(["url"]),
    ...mapState("admin", ["allarticles"]),
  },
  created() {
    if (this.allarticles.length == 0) {
      this.$store.dispatch({ type: "admin/getArticles" });
    } else {
      this.loading = false;
    }
  },
  methods: {
    deleteArticle(id) {
      this.$store.dispatch({ type: "admin/deleteArticle", data: { id: id } });
    },
  },
  watch: {
    allarticles(val) {
      if (val) this.loading = false;
    },
  },
};
</script>

<style></style>
