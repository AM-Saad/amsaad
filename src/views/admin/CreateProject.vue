<template>
  <div>
    <reload @reload="start" :reload="reload" />
    <p v-if="loading">Loading...</p>
    <form
      v-if="!loading"
      class="form"
      method="POST"
      enctype="multipart/form-data"
    >
      <div>
        <div class="form_inputs">
          <div class="flex f-space-between">
            <h2 v-if="!edit">Create Project</h2>
            <h2 v-if="edit">Edit Project</h2>
            <router-link class="btn" :to="{ name: 'allprojects' }"
              >All Project
              <down-arrow-icon />
            </router-link>
          </div>
          <div class="m-r-3">
            <div>
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                v-model="form.title"
                :class="{ 'required-input': alert }"
              />
            </div>
            <div>
              <label for="subtitle">Sub Title</label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                v-model="form.subtitle"
                :class="{ 'required-input': alert }"
              />
            </div>
            <div>
              <label for="client">Client</label>
              <input type="text" name="client" id="client" v-model="form.client" />
            </div>
            <div>
              <label for="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                v-model="form.country"
              />
            </div>
            <div>
              <label for="demo">Demo</label>
              <input type="text" name="demo" id="demo" v-model="form.demo" />
            </div>
          </div>
          <div class="m-l-3">
            <div>
              <label for="itemImg">image</label>
              <input type="file" name="image" id="itemImg" @change="addFile" />
            </div>
            <div>
              <label for="category">Category</label>
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

            <div>
              <label for="tags">Project Tags:</label>
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
            <div>
              <label for="site_description">Site Description</label>
              <input
                type="text"
                name="site_description"
                id="site_description"
                v-model="form.site_description"
              />
            </div>
          </div>
          <div class="form-control">
            <input type="checkbox" name="active" id="active" v-model="form.active" />
            <label for="active">{{ form.active ? "Active" : "Not Active" }}</label>
          </div>
          <div>
            <label for="brief">Brief</label>
            <textarea
              style="min-height: 100px"
              type="text"
              name="brief"
              id="brief"
              v-model="form.brief"
              rows="40"
              cols="50"
              :class="{ 'required-input': alert }"
            ></textarea>
          </div>
          <div class="bg-w border-r-l p-xlarge  ">
            <div>
              <label for="contentText">Content</label>
              <textarea
                type="text"
                name="contentText"
                id="contentText"
                v-model="form.contentText"
                rows="20"
                cols="50"
              ></textarea>
            </div>
            <div>
              <label for="contentImg">image</label>
              <input type="file" name="image" id="contentImg" />
            </div>
            <button @click.prevent="uploadImage()" class="btn btn-info">
              Add
            </button>
            <div class="grid g-two">
              <div
                class=" p-relative"
                v-for="c in form.content"
                :key="c.name"
              >
                <i class="fas fa-times close" @click="removeContent(c.id)"></i>
                <div v-if="c.image" class="p-relative w-50 block m-auto">
                  <i
                    class="fas fa-times close font-s"
                    @click="deleteImage(c.image, c.id)"
                  ></i>
                  <img :src="url + c.image" alt class="w-100" />
                </div>
                <p class>{{ c.text }}</p>
              </div>
            </div>
          </div>
          <button
            id="addNewitem"
            @click.prevent="saveProject()"
            class="btn btn-success"
            type="button"
            v-if="!edit && !loading"
          >
            Save
          </button>
          <button
            id="addNewitem"
            @click.prevent="saveProject()"
            class="btn btn-success"
            type="button"
            v-if="edit && !loading"
          >
            Update
          </button>
          <button
            id="addNewitem"
            @click.prevent="saveProject()"
            class="btn btn-success opacity-5"
            type="button"
            v-if="loading"
          >
            Loading...
          </button>
        </div>
      </div>
      <!--Image Here-->
    </form>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Reload from "../../components/general/Reload.vue";
import DownArrowIcon from "../../components/Icons/DownArrowIcon.vue";
export default {
  components: { DownArrowIcon, Reload },
  name: "CreateProject",
  data() {
    return {
      reload: false,
      loading: false,
      alert: false,
      edit: false,
      form: {
        active: false,
        site_description: "",
        loaded: false,
        title: null,
        subtitle: null,
        client: null,
        country: null,
        demo: null,
        image: "",
        tags: [],
        brief: "",
        category: "",
        content: [],
        contentimgs: [],
        contentText: null,
        contentName: null,
      },
    };
  },
  computed: {
    ...mapState(["categories", "url"]),
    ...mapState("admin", ["allprojects"]),
    ...mapGetters("admin", ["projectById"]),
  },
  async created() {
    this.start();
  },
  methods: {
    async start() {
      const id = this.$route.params.id;
      if (id) {
        this.edit = true;
        this.loading = true;
        await this.$store.dispatch("admin/getProjects");
        const project = this.projectById(id);
        if (!project) return (this.reload = true);
        this.loading = false;

        this.form.title = project.title;
        this.form.subtitle = project.subtitle;
        this.form.active = project.active;
        this.form.site_description = project.site_description || "";
        this.form.client = project.client;
        this.form.country = project.country || "";
        this.form.tags = project.tags;
        this.form.content = project.content.map((c) => ({
          id: c.id,
          _id: c._id,
          name: c.name,
          text: c.text,
          image: c.image,
        }));
        this.form.brief = project.brief;
        this.form.demo = project.demo;
        this.form.category = project.category.name;
      }
    },
    getTag(e) {
      var keyBoardKey = e.keyCode || e.which;
      if (keyBoardKey === 13) {
        var thisValue = e.target.value.toLowerCase();
        if (thisValue != "") {
          if (!this.form.tags.includes(thisValue)) this.form.tags.push(thisValue);
          e.target.value = "";
        }
      }
    },
    removetag(tag) {
      this.form.tags = this.form.tags.filter((t) => t != tag);
    },
    async addContent(img) {
      if (this.form.contentText) {
        this.form.content.push({
          id: this.form.content.length + 1,
          text: this.form.contentText,
          name: this.form.contentName,
          image: img || "",
        });
      }
      this.from.contentText = "";
    },
    async removeContent(id) {
      const item = this.form.content.find((c) => c.id.toString() == id.toString());

      if (item.image) this.deleteImage(item.image, item.id);
      this.form.content = this.form.content.filter(
        (c) => c.id.toString() !== id.toString()
      );
    },
    addFile(e) {
      var file = e.target.files[0];
      var validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      var fileType = file["type"];
      if (validImageTypes.includes(fileType)) this.image = file;
    },
    async uploadImage() {
      const elm = document.getElementById("contentImg");
      if (elm.files.length == 0) return this.addContent("");
      if (this.form.contentText) {
        var file = elm.files[0];
        var validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
        var fileType = file["type"];
        if (validImageTypes.includes(fileType)) {
          var form = new FormData();
          form.append("image", file);

          //upload image to server
          const res = await fetch(`${this.url}/admin/media`, {
            method: "Post",
            body: form,
          });
          const json = await res.json();
          this.addContent(json);
        }
      }
    },
    async deleteImage(name, id) {
      const item = this.form.content.find((c) => c.id.toString() == id.toString());
      item.image = null;

      await this.$store.dispatch("admin/deleteImage", {
        name: name,
        source: "project",
        content: id,
        id: this.$route.params.id,
      });
    },
    async saveProject() {
      if (!this.form.title || !this.form.subtitle || !this.form.brief) {
        return (this.alert = true);
      }
      const data = new FormData();
      data.append("title", this.form.title);
      data.append("active", this.form.active);
      data.append("site_description", this.form.site_description);
      data.append("subtitle", this.form.subtitle);
      data.append("client", this.form.client);
      data.append("country", this.form.country);
      data.append("brief", this.form.brief);
      data.append("demo", this.form.demo);
      data.append("image", this.form.image);
      data.append("category", this.form.category);
      data.append("tags", JSON.stringify(this.form.tags));
      data.append("content", JSON.stringify(this.form.content));
      let res;
      this.loading = true;

      if (this.edit) {
        const id = this.$route.params.id;
        res = await this.$store.dispatch({
          type: "admin/editProject",
          data,
          id,
        });
      } else {
        res = await this.$store.dispatch({ type: "admin/addProject", data });
      }
      this.loading = false;
      if (res) this.$router.push({ path: "/admin/projects" });
    },
  },
  watch: {
    "$route.params.id": function(id) {
      this.start();
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f9f9f9 !important;
}
</style>
