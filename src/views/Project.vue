<template>
  <div>
    <Reload :reload="reload" @reload="getProject($route.params.id)" />

    <div :class="{ 'loader-effect': loading }">
      <div v-if="!loading">
        <div class="close">
          <router-link
            :to="{ name: 'home' }"
            class="button-pill button-pill--icon m-medium"
          >
            <cross-icon />
          </router-link>
        </div>
        <div class="hero">
          <div
            class="hero__image"
            :style="{
              'background-image': 'url(' + url + '/' + project.image + ')',
            }"
          ></div>
          <div id="project" class="hero__meta">
            <div class="hero__title">{{ project.title }}</div>

            <a class="hero__arrow hide" href="#project">
              <down-arrow-icon height="25" width="25" />
            </a>
          </div>
        </div>
        <div class="background background-white">
          <div class="meta line-background" data-background-color="white">
            <h2 class="meta__subtitle">{{ project.subtitle }}</h2>
            <ShareBoxVue
              :url="url + '/project/' + project._id"
              :title="project.title + ' - ' + project.subtitle"
            />
            <div class="meta__tags">
              <router-link
                :to="{
                  name: 'home',
                  params: { category: project.category.name, type: 'project' },
                }"
                class="button-pill"
                >{{ project.category.name }}</router-link
              >
            </div>
            <div class="meta__attributes">
              <div class="attribute" v-if="project.client">
                <div class="attribute__title">Client</div>
                <div class="attribute__text">{{ project.client }}</div>
              </div>
              <div class="attribute">
                <div class="attribute__title">Location</div>
                <div class="attribute__text">Cairo, Egypt</div>
              </div>
              <div class="attribute">
                <div class="attribute__title">Status</div>
                <div class="attribute__text">Completed {{ createdDate }}</div>
              </div>

              <div class="attribute">
                <div class="attribute__title">Demo</div>
                <div class="attribute__text">
                  <a target="_blank" :href="project.demo">Open Here</a>
                </div>
              </div>
            </div>
            <div class="meta__intro-text">
              <p>{{ project.brief }}</p>
            </div>
          </div>
          <div class="blocks line-background" data-background-color="white">
            <div
              class="block block-text grid g-two"
              v-for="(c, i) in project.content"
              :key="c._id"
            >
              <div
                class="block-text__image"
                :style="[i % 2 === 0 ? { order: '1' } : { order: '2' }]"
                v-if="c.image"
              >
                <img
                  class="blur show"
                  :src="url + c.image"
                  :alt="project.title"
                  data-gallery-image="https://www.carr.net.au/wp-2020/wp-content/uploads/2020/09/carr_nortonroseVIC-248-LR.jpg"
                  data-gallery-caption
                />
                <div class="gallery-icon"></div>
              </div>
              <div
                class="block-text__text"
                data-footnotes
                :style="[i % 2 === 0 ? { order: '2' } : { order: '1' }]"
              >
                <p v-html="c.text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Reload from "@/components/general/Reload.vue";
import CrossIcon from "@/components/Icons/CrossIcon.vue";
import DownArrowIcon from "@/components/Icons/DownArrowIcon.vue";
import ShareBoxVue from "@/components/general/ShareBox.vue";

export default {
  name: "Project",
  data() {
    return {
      isFollowed: false,
      loading: true,
      project: null,
      reload: false,
    };
  },
  components: {
    Reload,
    CrossIcon,
    DownArrowIcon,
    ShareBoxVue,
  },
  computed: {
    ...mapState(["url"]),
    ...mapState("studio", ["projects"]),
    ...mapGetters("studio", ["projectById"]),
    createdDate: function() {
      const date = new Date(this.project.createdAt);
      const year = date.getFullYear();
      return year;
    },
  },
  created() {
    return this.getProject(this.$route.params.id);
  },
  methods: {
    async getProject(id) {
      this.reload = false;
      this.loading = true;
      if (this.projects.length == 0) {
        await this.$store.dispatch("studio/fetch_projects");
      }

      this.project = this.projectById(id);
      this.loading = false;

      if (!this.project) return (this.reload = true);
    },
  },
  watch: {
    "$route.params.id": function(id) {
      if (id) this.getProject(id);
    },
  },
};
</script>

<style scoped>
.close {
  position: fixed;
  top: 0;
  right: 10px;
  padding: 16px;
  z-index: 10;
}
.hero {
  position: relative;
  height: 100vh;
  background-color: #fff;
}
.hero .hero__image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: contain;
  background-position: 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  will-change: opacity;
  z-index: 3;
  background-color: #fff;
}

.hero__meta {
  display: -webkit-box;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.2px;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 3;
}

.hero__meta .hero__title {
  padding: 14px 16px;
  font-size: 2em;
}
.hero .hero__meta .hero__arrow {
  margin-left: auto;
  margin-right: 8px;
  padding: 14px 18px;
  cursor: pointer;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.hero .hero__meta .hero__arrow svg {
  -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.hero .hero__meta .hero__arrow:hover svg {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
}
.background {
  background-color: transparent;
  -webkit-transition: background-color 1.2s cubic-bezier(0.55, 0, 0.1, 1);
  transition: background-color 1.2s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: background-color;
}
.meta {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #fff;
  padding-bottom: 8vmax;
  margin-bottom: 4rem;
}
.meta .meta__subtitle {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  min-height: 378px;
  background-color: #fff;
  padding: 112px 100px 106px 16px;
  z-index: 1;
  font-weight: 400;
  font-size: 3.5vw;
  line-height: 4.5vw;
  color: #333;
}

.meta .meta__share {
  position: absolute;
  top: 124px;
  right: 16px;
  text-align: right;
  z-index: 1;
}
.meta .meta__tags {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
  font-size: 0;
}
.meta .meta__tags .button-pill {
  margin-right: 10px;
  margin-bottom: 10px;
}
.meta .meta__attributes {
  flex-wrap: wrap;
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
}
.meta .meta__attributes .attribute {
  display: -webkit-box;
  display: flex;
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  margin-bottom: 16px;
}
.meta .meta__attributes .attribute .attribute__title {
  -webkit-box-flex: 0;
  flex: 0 0 47%;
  padding-right: 16px;
  font-weight: bold;
}
.meta .meta__attributes .attribute .attribute__text {
  -webkit-box-flex: 0;
  flex: 0 0 53%;
}
.meta .meta__intro-text {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;

  font-size: 24px;
  line-height: 32px;
}

.blocks .block {
  position: relative;
  padding-bottom: 110px;
  z-index: 1;
}

.blocks .block.block-image .block-image__image.width--two-thirds {
  width: 66.66%;
}
.blocks .block.block-text .block-text__text {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
  margin-left: auto;
  font-size: 3vh;
  color: #333;
  width: 100%;
}
.blocks .block.block-text .block-text__image {
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  padding-top: 5px;
  padding-left: 16px;
  border: 1.5px solid #f8f8f8;
}

.blocks .block.block-text .block-text__text p {
  margin: 24px;
}
.blocks .block.block-image .block-image__image img {
  display: block;
  width: 100%;
}
.blocks .block.block-text .block-text__image img {
  display: block;
  width: 70%;
  margin: auto;
}

.line-background:before {
  content: "";
  position: absolute;
  top: 0;
  left: 33.33%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
}
.line-background:after {
  content: "";
  position: absolute;
  top: 0;
  right: 33.33%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
}

#single-post {
  opacity: 1;
  min-width: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-right: 1px solid #000;
  z-index: 10;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

@media (max-width: 900px) {
  #profile {
    grid-template-columns: 1fr;
  }
  .hero {
    height: 30vh;
  }
  .hero .hero__image {
    background-attachment: scroll;
  }
  .meta {
    padding-bottom: 55px;
  }
  .meta .meta__subtitle {
    font-size: 30px;
    line-height: 36px;
    min-height: 0;
    padding-top: 20px;
    padding-right: 16px;
    padding-bottom: 28px;
  }
  .blocks .block.block-text .block-text__image img {
    width: 90%;
    margin: auto;
  }
  .meta .meta__share {
    position: static;
    -webkit-box-flex: 0;

    display: flex;
    flex: 0 0 100%;
    -webkit-box-ordinal-group: 3;
    order: 2;
    text-align: left;
    padding: 8px 16px;
    margin-bottom: 50px;
  }
  .meta .meta__tags {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    margin-bottom: 35px;
  }
  .meta .meta__attributes {
    font-size: 12px;
    line-height: 21px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
  .meta .meta__intro-text {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .meta .meta__attributes .attribute {
    margin-bottom: 10px;
  }
  .line-background::after,
  .line-background:before {
    opacity: 0;
  }

  .blocks .block.block-text .block-text__image {
    order: 1 !important;
  }
  @media screen and (max-width: 900px) {
    #single-post {
      width: 100% !important;
      background-color: #fff;
      z-index: 9999;
    }
  }
}
</style>
