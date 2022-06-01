<template>
  <div style="padding:20px">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col d-flex justify-content-start">
            <h4>Projects</h4>
          </div>
          <div class="col d-flex justify-content-end">
            <v-btn   class="mr-5" @click="back()">{{$t('back')}}</v-btn>
            <v-btn dark color="teal" v-if="isEdit" @click="save()">{{$t('save')}}</v-btn>
          </div>
        </div>
      </div>
      <div class="card-body">
        <v-timeline align-top dense>
          <v-timeline-item color="blue">
            <template v-slot:icon>
              <span>1</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="text-h5">add link coohom</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="field.name"
                      label="name project"
                      prepend-icon="mdi-alpha-n"
                      :rules="[v => !!v || 'Name is required']"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="field.uri"
                      label="Link project"
                      prepend-icon="mdi-link"
                      :rules="[v => !!v || 'Link is required',(value) => this.isURL(value) || 'URL is not valid']"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="pink" v-if="!empty(field.uri)&&this.isURL(field.uri)">
            <template v-slot:icon>
              <span>2</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="text-h5">add mode</v-card-title>
              <v-card-text>
                <v-list-item v-for="model in listModels" :key="model">
                  <v-list-item-content>
                    <v-list-item-title class="pa-5">
                      <v-row>
                        <v-col xl="10" lg="10" md="10" sm="10">
                          <v-auto-complete
                            ref="autoComplete"
                            class="my-0"
                            label="sku code"
                            url="/api/products"
                            :search-fields="['name', 'sku']"
                            item-text="sku"
                            item-value="_id"
                            :limit="5"
                            :items="!empty(model.detail)?[model.detail]:[]"
                            outlined
                            v-model="model.detail"
                          >
                            <template slot="item" slot-scope="{ item }">
                              <v-list-tile-content>
                                <div class="input-group">
                                  <div
                                    class="input-group-text"
                                    id="btnGroupAddon"
                                    style="width:100px"
                                  >{{item.sku}}</div>
                                  <div class="input-group-text" id="btnGroupAddon">{{item.name}}</div>
                                </div>
                              </v-list-tile-content>
                            </template>
                          </v-auto-complete>
                        </v-col>
                        <v-col xl="2" lg="2" md="2" sm="2">
                          <v-btn icon v-if="listModels.length>1" @click="devModels(model.uuid)">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <div class="input-group" v-if="!empty(model.detail)">
                            <div
                              class="input-group-text title-label"
                              id="btnGroupAddon"
                              style="width:100px"
                              data-label="sku"
                            >{{_.get(model,'detail.sku','')}}</div>
                            <div
                              class="input-group-text title-label"
                              id="btnGroupAddon"
                              data-label="name"
                            >{{_.get(model,'detail.name','')}}</div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
              <v-card-footer>
                <v-btn
                  icon
                  @click="addModels()"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="add more"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-footer>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import axios from "~/utils/axios";
import _ from "lodash";
import collect from "collect.js";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      overlay: false,
      listModels: [{ uuid: uuidv4(), detail: null }],
      field: {},
      isEdit: false,
    };
  },
  methods: {
    empty(mixed_var) {
      if (!mixed_var || mixed_var == "0") {
        return true;
      }
      if (typeof mixed_var == "object") {
        for (var k in mixed_var) {
          return false;
        }
        return true;
      }
      return false;
    },
    isURL(str) {
      let url;
      try {
        url = new URL(str);
      } catch (err) {
        return false;
      }
      return url.protocol === "http:" || url.protocol === "https:";
    },
    async syncData() {
      const $r = await axios.get(`/api/projects/${this.$route.params.id}`);
      this.field = _.get($r, "data", {});
      this.listModels = _.get(this.field, "products", []).map(item => {
        return { uuid: uuidv4(), detail: item };
      });
    },
    addModels() {
      this.listModels.push({
        uuid: uuidv4(),
        detail: null
      });
    },
    devModels(uuid) {
      this.listModels = collect(this.listModels)
        .filter(item => item.uuid !== uuid)
        .all();
    },
    async back() {
      let path = _.filter(this.$route.path.split("/"));
      path = _.filter(path, (r, k) => {
        return k != path.length - 1;
      });
      path = _.join(path, "/");
      this.$router.push(`/${path}`);
    },
    async save() {
      this.overlay = true;
      this.field.products = this.listModels.map(item => {
        return item.detail;
      });
      await axios.post(`/api/projects/${this.$route.params.id}`, this.field);
      this.overlay = false;
      this.back();
    }
  },
  watch: {
    $refs: {
      async handler(val) {
        console.log(val);
      },
      deep: true
    }
  },
  async mounted() {
    if (!["0", "create", "add"].includes(this.$route.params.id)) {
        await this.syncData();
        this.$checkPermission("project","edit").then(r => {
            this.isEdit = r;
        });
    }else{
        this.$checkPermission("project","create").then(r => {
            this.isEdit = r;
        });
    }
  }
};
</script>