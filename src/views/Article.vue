<template>
  <div>
    <Reload :reload="reload" @reload="getArticle($route.params.id)" />

    <FormPopup :startAuth="startAuth" v-on:close="closeAuthForm" />
    <div id="single-post" :class="{ 'loader-effect': loading }">
      <div class="close">
        <router-link
          :to="{ name: 'home' }"
          class="button-pill button-pill--icon m-medium"
        >
          <cross-icon />
        </router-link>
      </div>
      <div v-if="!loading">
        <div class="items__item">
          <div class="items__item-title">
            <h1 class>{{ article.title }}</h1>
          </div>
          <div class="items__item-description">
            <span class>{{ article.site_description }}</span>
          </div>
          <div class="meta__tags">
            <router-link
              :to="{
                name: 'home',
                params: { category: article.category.name },
                query: { type: 'article' },
              }"
              class="button-pill"
              >{{ article.category.name }}</router-link
            >
          </div>

          <ShareBoxVue
            :url="url + '/articles/' + article._id"
            :title="article.title"
          />

          <div class="items__item-date">Posted At: {{ article.date }}</div>

          <div class="items__item-image">
            <img :src="article.image" :alt="article.title" />
          </div>

          <Reacts
            v-if="article.source === 'server'"
            :article="article"
            @requireAuth="startAuth = true"
          />

          <div class="ql-snow">
            <div
              class="items__item-content ql-editor"
              v-html="article.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="column articles" id="articles">
      <router-link :to="{ name: 'home' }">
        <div class="items__title column-head">
          <span>Articles</span>
          <span>
            <i class="fas fa-times"></i>
          </span>
        </div>
      </router-link>
      <Article
        v-for="article in articles"
        :key="article._id"
        :article="article"
        :ref="article._id"
      />

      <h3 v-if="articles.length === 0 && !loading">No articles yet!</h3>

      <ItemLoading v-if="loading"></ItemLoading>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import Article from "@/components/Articles/article-components/ArticleComponent.vue";
import FormPopup from "@/components/general/FormPopup.vue";
import ShareBoxVue from "@/components/general/ShareBox.vue";
import Reload from "@/components/general/Reload.vue";
import Reacts from "@/components/Articles/Reacts.vue";
import ItemLoading from "@/components/general/ItemLoading.vue";

import { mapGetters, mapState } from "vuex";
import CrossIcon from "../components/Icons/CrossIcon.vue";

export default {
  name: "Profile",
  data() {
    return {
      loading: true,
      article: null,
      startAuth: false,
      reload: false,
    };
  },
  components: {
    Article,
    FormPopup,
    CrossIcon,
    ShareBoxVue,
    Reload,
    Reacts,
    ItemLoading,
  },
  computed: {
    ...mapState(["url"]),
    ...mapState("studio", ["articles"]),
    ...mapGetters("studio", ["articleById"]),
  },
  async created() {
    await this.getArticle(this.$route.params.id);

    this.scrollToArticle();
  },
  metaInfo() {
    const article = this.article;
    if (article) {
      return {
        title: article.title,
        meta: [
          { name: "AMS STUDIOS", content: "AMS STUDIOS | Digital Agency" },
          {
            name: "description",
            content: article.site_description,
            vmid: "desc",
          },
          {
            name: "og:description	",
            content: article.site_description,
            vmid: "ogdesc",
          },
          {
            property: "og:title",
            content: article.title,
          },
          {
            property: "og:image",
            content: `${this.url}/${article.image}`,
          },
          {
            property: "og:image:secure_url",
            content: `${this.url}/${article.image}`,
          },
          {
            property: "og:image:type",
            content: `jpg`,
          },
          {
            property: "og:image:width",
            content: `1200`,
          },
          {
            property: "og:image:height",
            content: `628`,
          },
          {
            property: "og:url",
            content: `${window.location.pathname}`,
          },
          {
            property: "og:type",
            content: `website`,
          },
        ],
      };
    }
  },

  methods: {
    scrollToArticle() {
      const articleItem = this.$refs[this.article._id];

      document.getElementById("articles").scrollTo({
        top: articleItem[0].$el.offsetTop,
        behavior: "smooth",
      });
    },

    async getArticle(id) {
      this.reload = false;
      this.loading = true;

      // Already fetching all the articles, that's why we searching in the articles array
      if (this.articles.length === 0) {
        await this.$store.dispatch("studio/fetch_articles");
      }
      this.article = this.articleById(id);

      this.loading = false;

      if (!this.article) return (this.reload = true);
      this.newview(id);
    },

    async newview(id) {
      await this.$store.dispatch("studio/newview", { id: id, item: "article" });
    },

    closeAuthForm() {
      this.startAuth = false;
    },
  },
  watch: {
    "$route.params.id": function(id) {
      if (id !== this.article._id) {
        document.getElementById("single-post").scrollTo({
          top: 0,
          behavior: "smooth",
        });
        this.getArticle(id);
        this.scrollToArticle();
      }
    },
  },
};
</script>

<style scoped>
.items__item-title {
    font-size: 5vmin;
    padding: 3.5rem 3rem 1rem 0px;
    line-height: 1.2;
    color: #222;
}
.items__item-description {
  font-size: 24px;
  color:#666;
  margin-bottom: 1rem;
}
.items__item-content {
  padding: 160px 16px 106px 100px;
}

.articles:hover {
  filter: blur(0);
}
#single-post {
  position: absolute;
  top: 0;
  right: 33.33%;
  bottom: 0;
  left: 0;
  opacity: 1;
  min-width: 75%;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-right: 1px solid #000;
  z-index: 10;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
#single-post .items__item {
  cursor: unset;
  margin-bottom: 60px;
  border-radius: 0;
  border: 0;
}
#single-post .meta__share {
  position: absolute;
  top: 140px;
  right: 16px;
  text-align: right;
  margin: var(--m-margin) 0;
}
.articles {
  transition: filter 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  filter: blur(3px);
  left: 75%;
  position: relative;
  width: 25% !important;
}
.loading-item {
  padding-top: 0 !important;
}

@media (min-width: 320px) and (max-width: 557px) {
  #profile {
    grid-template-columns: 1fr;
  }
  .items__item-content {
    padding: 7px !important;
  }
}
@media (max-width: 900px) {
  .articles {
    display: none;
  }
  #single-post {
    width: 100% !important;
    background-color: #fff;
    z-index: 9999;
  }

  #single-post .meta__share {
    position: unset;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
