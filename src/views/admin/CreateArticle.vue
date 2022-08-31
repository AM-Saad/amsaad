<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p class="c-r" v-if="!loading && error">{{ error }}</p>
    <form
      v-if="!error && !loading"
      class=" form "
      method="POST"
      enctype="multipart/form-data"
    >
      <div class="content">
        <router-link class="back_btn" :to="{ name: 'admin_articles' }">
          <left-arrow-icon />

          Articles</router-link
        >
        <h2 v-if="!edit">Create Article</h2>
        <h2 v-if="edit">Edit Article</h2>
        <div class="p-medium">
          <div class="form-control">
            <label for="name">Title</label>
            <input type="text" name="title" id="name" v-model="form.title" />
          </div>
          <div class="form-control">
            <label for="site_description">Site Description</label>
            <input
              type="text"
              name="site_description"
              id="site_description"
              v-model="form.site_description"
            />
          </div>
          <div class="form-control">
            <input
              type="checkbox"
              name="active"
              id="active"
              v-model="form.active"
            />
            <label for="active">{{
              form.active ? "Active" : "Not Active"
            }}</label>
          </div>
          <div class="form-control">
            <label for="image">image</label>
            <input
              type="file"
              name="image"
              id="itemImg"
              @change="previewFiles"
            />
          </div>
          <div class="form-control grid">
            <label for="category">category</label>

            <select name="category" id="category" v-model="form.category">
              <option
                v-for="t in categories"
                :key="t.name"
                :data-val="t.name"
                :value="t.name"
                class="options"
              >
                {{ t.name }}
              </option>
            </select>
          </div>
          <div class="form-control grid">
            <label for="location">location</label>

            <select name="location" id="location" v-model="form.location">
              <option value="all" class="options">All</option>
              <option value="blog" class="options">Blog</option>
              <option value="portfolio" class="options">Portfolio</option>
            </select>
          </div>
          <div class="form-input">
            <label for="tags">Article Tags:</label>
            <input
              class="currentInput input"
              id="tags"
              type="text"
              placeholder="Type Tags Then Press Enter"
              @keyup="getTag($event)"
            />
            <div class="tags flex">
              <li
                v-for="t in form.tags"
                :key="t"
                :data-val="t"
                class="options btn btn-info tag-span"
              >
                {{ t }}
                <i class="fas fa-times" @click="removetag(t)"></i>
              </li>
            </div>
          </div>
        </div>
        <quill-editor
          v-model="form.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
        <input
          type="file"
          id="getFile"
          @change="uploadImage($event)"
          class="none"
        />

        <!-- <quill v-model="content" :config="config" :options="editorOption"></quill> -->
        <button
          v-if="!edit"
          id="addNewitem"
          @click.prevent="createArticle()"
          class="btn btn-success"
          type="button"
        >
          Save
        </button>
        <button
          v-if="edit"
          id="addNewitem"
          @click.prevent="createArticle()"
          class="btn btn-success"
          type="button"
        >
          Update
        </button>
      </div>
    </form>
  </div>
  <!--Image Here-->
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import hljs from "highlight.js";
import { quillEditor } from "vue-quill-editor";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon.vue";

export default {
  name: "createarticle",
  data() {
    return {
      edit: false,
      error: "",
      loading: false,
      form: {
        active: true,
        title: null,
        category: "",
        image: "",
        location: null,
        site_description: "",
        tags: [],
        content: "<p>example content</p>",
      },

      editorOption: {
        modules: {
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },

          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }], // text direction

              [{ size: ["small", false, "large", "huge"] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],

              ["clean"],
              ["link", "image", "emoji"],
            ],
            handlers: {
              image: function() {
                document.getElementById("getFile").click();
              },
            },
          },
        },
      },
    };
  },
  components: {
    LeftArrowIcon,
    quillEditor,
  },
  computed: {
    ...mapState(["categories", "url"]),
    ...mapState("admin", ["allarticles"]),
    ...mapGetters("admin", ["articleById"]),
    ...mapMutations(["msg"]),
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.startEditing(id);
    }
  },
  methods: {
    onEditorBlur(quill) {
      return quill;
    },
    onEditorFocus(quill) {
      return quill;
    },
    onEditorReady(quill) {
      return quill;
    },
    onEditorChange({ quill, html, text }) {
      return { text, html, quill };
    },
    async startEditing(id) {
      this.edit = true;
      this.loading = true;
      if (this.allarticles.length == 0) {
        await this.$store.dispatch("admin/getArticles");
      }
      const article = this.articleById(id);
      this.loading = false;
      if (!article) {
        this.error = "Cannot find article";
      }
      this.form.title = article.title;
      this.form.active = article.active;
      this.form.location = article.location || "all";
      this.form.tags = article.tags;
      this.form.site_description = article.site_description;
      this.form.category = article.category.name;
      this.form.content = article.content;
    },
    async uploadImage(e) {
      this.selectedFile = e.target.files[0];
      var form = new FormData();
      form.append("image", this.selectedFile);
      form.append("name", this.selectedFile.name);
      //upload image to server
      const res = await fetch(`${this.url}/admin/media`, {
        method: "Post",
        body: form,
      });
      const json = await res.json();
      if (res.status === 200 || res.status === 201) {
        //this code to set your position cursor
        const range = this.$refs.myQuillEditor.quill.getSelection();
        //this code to set image on your server to quill editor
        this.$refs.myQuillEditor.quill.insertEmbed(
          range.index,
          "image",
          `${this.url}${json}`
        );
      }
    },

    getTag(e) {
      var keyBoardKey = e.keyCode || e.which;
      if (keyBoardKey === 13) {
        var thisValue = e.target.value.toLowerCase();
        if (thisValue != "") {
          if (!this.form.tags.includes(thisValue)) {
            this.form.tags.push(thisValue);
          }
          e.target.value = "";
        }
      }
    },
    removetag(tag) {
      this.form.tags = this.form.tags.filter((t) => t != tag);
    },
    previewFiles(e) {
      var file = e.target.files[0];
      var validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      var fileType = file["type"];
      if (validImageTypes.includes(fileType)) {
        return (this.form.image = file);
      }
      return "";
    },
    async createArticle() {
      const data = new FormData();
      data.append("content", this.form.content);
      data.append("active", this.form.active);
      data.append("tags", JSON.stringify(this.form.tags));
      data.append("title", this.form.title);
      data.append("location", this.form.location);
      data.append("category", this.form.category);
      data.append("site_description", this.form.site_description);
      data.append("image", this.form.image);

      if (!this.edit) {
        return await this.$store.dispatch({
          type: "admin/addArticle",
          data,
        });
      }

      const id = this.$route.params.id;
      await this.$store.dispatch({
        type: "admin/editArticle",
        data,
        id,
      });
    },
  },
  watch: {
    "$route.params.id": function() {
      this.startEditing();
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f9f9f9 !important;
}
</style>
