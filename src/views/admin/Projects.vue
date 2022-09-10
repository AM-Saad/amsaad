<template>
  <div>
    <div class="content">
      <router-link class="back_btn" to="/admin/dashboard">
        <left-arrow-icon />
        Dashboard
      </router-link>

      <div class="flex f-space-between">
        <h1>All Projects</h1>
        <router-link class="btn btn-success" :to="{ name: 'new_project' }"
          >New Project</router-link
        >
      </div>
      <div v-if="!loading" class="grid g-three">
        <list-item
          v-for="a of allprojects"
          :key="a._id"
          :title="a.title"
          :link="`/admin/projects/new/${a._id}`"
          :id="a._id"
          :image="url + '/' + a.image"
          :active="a.active"
          :date="a.createdAt.slice(0,10)"
          :description="a.brief"
          @delete="deleteProject(a._id)"
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
    ...mapState("admin", ["allprojects"]),
  },
  created() {
    if (this.allprojects.length == 0) {
      this.$store.dispatch({ type: "admin/getProjects" });
    } else {
      this.loading = false;
    }
  },
  methods: {
    async deleteProject(id) {
      this.loading = true;
      await this.$store.dispatch({
        type: "admin/deleteProject",
        data: { id: id },
      });
      this.loading = false;
    },
  },
  watch: {
    allprojects(val) {
      if (val) {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
