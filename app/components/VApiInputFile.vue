<template>
  <div class="uf-01-all">
    <div
      class="uf-01-boder"
      @drop.prevent="onDrop($event)"
      @dragover.prevent="() => {}"
    >
      <v-file-input
        :accept="accept"
        :label="label"
        :loading="loading"
        :messages="messages"
        :multiple="multiple"
        :placeholder="placeholder"
        :prepend-icon="prependIcon"
        :prepend-inner-icon="prependInnerIcon"
        :rules="rules"
        :type="type"
        :disabled="!editable"
        @click:clear="
          files = [{}];
          fileBase64 = null;
          $forceUpdate();
        "
        color="primary"
        outlined
        ref="fileInput"
        v-model="files"
        style="position:relative"
      >
        <template v-slot:append>
          <template>
            <v-icon>mdi-clear</v-icon>
          </template>
        </template>
        <template v-slot:prepend-inner>
          <template>
            <div
              style="width:100%;margin-left:25%;padding:5%;position:relative;z-index:0"
              @click="$refs.fileInput.blur()"
            >
              <v-row>
                <v-col lg="6" xl="6" md="6" sm="6" col="6" class="float-right">
                  <span>ลากไฟล์เพื่อวางที่นี่หรือกดปุ่มเพื่ออัปโหลดไฟล์</span
                  ><br /><br />
                  <span style="font-size:0.9em;color:#FF0000"
                    >*ภาพขนาดไม่เกิน 10 mb ขนาดขั้นต่ำ 640 x 360 px</span
                  >
                </v-col>
                <v-col lg="2" xl="2" md="2" sm="2" col="2">
                  <v-btn color="primary" @click="$refs.fileInput.blur()"
                    >อัปโหลด</v-btn
                  >
                </v-col>
              </v-row>
            </div>
          </template>
        </template>
      </v-file-input>
    </div>

    <v-list dense v-if="styleList == 'list'">
      <v-list-item
        v-for="(item, i) in _.filter(tmp, r => {
          return empty(r.isRemove);
        })"
        :key="i"
      >
        <v-list-item-avatar>
          <v-img
            v-if="/png|jpg|gif|jpeg/g.test(item.base64)"
            :src="item.base64"
          ></v-img>
          <v-avatar
            v-else
            color="primary"
            size="56"
            :color="pickColor(_.upperCase(_.last(item.name.split('.'))))"
            style="color:#fff;font-size: 12px;"
            >{{ _.upperCase(_.last(item.name.split("."))) }}</v-avatar
          >
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red lighten-1" @click="remove(item.id)"
              >mdi-close</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-row v-else-if="styleList == 'grid'">
      <v-col
        lg="2"
        xl="2"
        md="2"
        col="2"
        class="pr-0 d-flex"
        v-for="(item, i) in _.filter(tmp, r => {
          return empty(r.isRemove);
        })"
        :key="i"
      >
        <v-card style="width:100%">
          <v-img
            v-if="/png|jpg|gif|jpeg/g.test(item.base64)"
            :src="item.base64"
            width="191"
            height="120"
          ></v-img>
          <v-avatar
            v-else
            color="primary"
            size="56"
            width="191"
            height="120"
            :color="pickColor(_.upperCase(_.last(item.name.split('.'))))"
            style="color:#fff;font-size: 12px;"
            >{{ _.upperCase(_.last(item.name.split("."))) }}</v-avatar
          >
          <v-btn
            icon
            style="position:absolute;right:0;top:0;color: white;text-shadow: 0 0 4px black;"
            @click="remove(item.id)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
import collect from "collect.js";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    accept: { type: String, default: "image/*" },
    aspectRatio: { type: String, default: 16 / 9 },
    height: { type: String },
    label: { type: String },
    loading: { type: Boolean },
    messages: { type: String },
    multiple: { type: Boolean },
    placeholder: { type: String },
    prependIcon: { type: String, default: "" },
    prependInnerIcon: { type: String },
    rules: { type: Array },
    styleList: { type: String, default: "list" },
    src: { type: String },
    type: { type: String },
    uploadUrl: { type: String, required: true },
    value: { type: File },
    width: { type: String },
    maxWidth: { type: String },
    editable: { type: Boolean, default: true }
  },
  data() {
    return {
      files: [{}],
      tmp: [],
      fileBase64: null
    };
  },
  methods: {
    remove(index) {
      this.tmp = collect(this.tmp)
        .map((v, k) => {
          if (v.id == index) {
            if (typeof v.id == "number") {
              _.set(v, "isRemove", true);
            } else {
              _.set(v, "isDel", true);
            }
          }
          return v;
        })
        .filter(r => {
          return this.empty(r.isDel);
        })
        .all();
    },
    onDrop(e) {
      this.files = e.target.files || e.dataTransfer.files;
    },
    hashCode(str) {
      let hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    },
    pickColor(str) {
      // Note the last value here is now 50% instead of 80%
      return `hsl(${this.hashCode(str) % 360}, 100%, 50%)`;
    },
    readURL(file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();

        reader.onload = e => {
          resolve(e.target.result);
        };

        reader.readAsDataURL(file); // convert to base64 string
      });
    },
  },
  computed: {
    ...mapState(["setting"])
  },
  watch: {
    tmp: {
      deep: true,
      async handler(files) {
        this.files = [];
        this.value = files;
        this.$emit("input", files);
      }
    },
    files: {
      deep: true,
      async handler(files) {
        for (const file of files) {
          _.set(file, "id", _.get(file, "id", uuidv4()));
          if (file && file instanceof File) {
            const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
            if (file && acceptedImageTypes.includes(file.type)) {
              _.set(file, "base64", await this.readURL(file));
            }
          } else if (!this.empty(file.path)) {
            _.set(
              file,
              "base64",
              (await this.$obs.readObject(file.path)).replace(/\/\//g, "/")
            );
          }
          this.tmp.push(file);
        }
      }
    }
  },
  async mounted() {
    if (!!this.value) {
      this.files = this.value;
    }
  }
};
</script>
<style scoped>
.uf-01-all >>> .v-avatar {
  border-radius: 5px;
}
.uf-01-all >>> .v-text-field__slot {
  position: absolute !important;
  left: 0%;
  width: 100%;
  height: 105%;
}
.uf-01-all >>> .v-input__prepend-inner {
  position: relative;
  width: 100%;
  z-index: 0;
}
.uf-01-all >>> .v-input__control {
  position: relative;
}
.uf-01-all,
.uf-01-boder,
.uf-01-all >>> .v-input,
.uf-01-all >>> .v-input .v-text-field__slot {
  cursor: pointer;
}
/* .uf-01-all >>> .v-input__slot::before {
  width: 50px;
  height: 50px;
  font-size: 3em;
  position: absolute;
  left: 50%;
  top: 25%;
  content: "\F0B7E";
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  line-height: inherit;
  border-style: inherit;
  color: rgb(146, 146, 146);
} */
.uf-01-all >>> .v-text-field--outlined fieldset {
  border: inherit;
}
.uf-01-all >>> .uf-01-boder {
  border: dashed 1px #f68519 !important;
  border-radius: 4px;
}
.uf-01-all >>> .v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none;
}
.uf-01-all >>> .v-card .v-image {
  border-radius: 4px;
}
@media screen and (min-width: 1859px) {
  .uf-01-all >>> .v-input__control {
    height: 88px;
  }
}
@media screen and (min-width: 1158px) {
  .uf-01-all >>> .v-input__control {
    height: 100%;
  }
}
@media screen and (min-width: 960px) AND (max-width: 1157px) {
  .uf-01-all >>> .v-input__control {
    height: 150px;
  }
}
@media screen and (max-width: 959px) {
  .uf-01-all >>> .v-input__control {
    height: 150px;
  }
  .uf-01-all >>> .col {
    width: 170px !important;
    display: inline-block !important;
    height: 95px !important;
  }
  .uf-01-all >>> .v-card {
    width: auto !important;
  }
}
</style>
