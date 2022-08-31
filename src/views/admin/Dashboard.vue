<template>
  <main class="content">
    <section class="overall-info">
      <div class=" gradient p-large  border-r-l shadow-l f-center">
        <p>Users</p>
        <b>2</b>
      </div>
      <div class=" gradient p-large  border-r-l shadow-l f-center">
        <p>Projects</p>
        <b>{{ allprojects.length }}</b>
      </div>
      <div class=" gradient p-large  border-r-l shadow-l f-center">
        <p>Articles</p>
        <b>{{ allarticles.length }}</b>
      </div>
    </section>
    <section class="navigation">
      <div class="p-3 flex">
        <h3>Navigation:</h3>
      </div>
      <!-- <img src="/images/loading(3).svg" alt="" class="loading block"> -->
      <div class="grid ">
        <router-link :to="{ name: 'admin_projects' }">All Project</router-link>
        <router-link :to="{ name: 'admin_articles' }">All Article</router-link>

        <router-link :to="{ name: 'new_project' }"
          >New Project

          <user-plus-icon />
        </router-link>
        <router-link :to="{ name: 'new_article' }"
          >New Article

          <user-plus-icon />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import UserPlusIcon from "../../components/Icons/UserPlusIcon.vue";

export default {
  components: { UserPlusIcon },
  name: "Dashboard",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState("admin", ["allprojects", "allarticles"]),
  },
  created() {
    if (this.allprojects.length == 0) {
      this.$store.dispatch({ type: "admin/getProjects" });
    }
    if (this.allarticles.length == 0) {
      this.$store.dispatch({ type: "admin/getArticles" });
    }
  },
  methods: {},
};
</script>

<style>
.navigation {
  background: #ffff;
  border: 1.3px solid #eee;
  padding: 1rem;
  margin-top: 1rem;
}
.overall-info {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap-reverse;
}
.overall-info div {
  position: relative;
  line-height: 60px;
  width: 300px;
  margin: auto;
  border: 1.2px solid;
  font-size: 1.3em;
}

.navigation a {
  margin-bottom: var(--m-margin);
  font-size: 18px;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--shadow2);
  color: #000;
}

.overall-info b {
  font-size: 2rem;
  position: absolute;
  right: 25px;
  bottom: 4px;
  background: #ffffffb3;
  height: 51px;
  width: 51px;
  line-height: 51px;
  border-radius: 50%;
  text-align: center;
  -webkit-transition: 2s;
  transition: 2s;
  border: 1px solid;
}

.gradient {
  background: radial-gradient(
      circle at 17% 5%,
      rgba(185, 185, 185, 0.1) 0%,
      rgba(185, 185, 185, 0.1) 33.333%,
      rgba(216, 216, 216, 0.1) 33.333%,
      rgba(216, 216, 216, 0.1) 66.666%,
      rgba(247, 247, 247, 0.1) 66.666%,
      rgba(247, 247, 247, 0.1) 99.999%
    ),
    radial-gradient(
      circle at 36% 54%,
      rgba(52, 52, 52, 0.1) 0%,
      rgba(52, 52, 52, 0.1) 33.333%,
      rgba(111, 111, 111, 0.1) 33.333%,
      rgba(111, 111, 111, 0.1) 66.666%,
      rgba(170, 170, 170, 0.1) 66.666%,
      rgba(170, 170, 170, 0.1) 99.999%
    ),
    radial-gradient(
      circle at 62% 35%,
      rgba(209, 209, 209, 0.1) 0%,
      rgba(209, 209, 209, 0.1) 33.333%,
      rgba(107, 107, 107, 0.1) 33.333%,
      rgba(107, 107, 107, 0.1) 66.666%,
      rgba(5, 5, 5, 0.1) 66.666%,
      rgba(5, 5, 5, 0.1) 99.999%
    ),
    linear-gradient(45deg, rgb(255, 255, 255), rgb(248 219 128)) !important;
}
@media screen and (max-width: 900px) {
  .overall-info div {
    width: 100%;
  }
}
</style>
