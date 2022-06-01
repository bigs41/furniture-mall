<template>
  <v-body>
    <div>
      <v-card outlined>
        <v-card-title>
          <h1>Project</h1>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="tempsearch"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            solo
            dense
            hide-details
            class="mr-5"
            @click:append="search = tempsearch"
            @keydown.enter="search = tempsearch"
          ></v-text-field>
          <v-btn v-if="isCreate" dark color="teal" @click="$router.push(`${$strLast($route.path,'/')}create`)">add</v-btn>
        </v-card-title>
        <v-api-table
          :headers="headers"
          url="/api/projects"
          item-key="_id"
          :search="search"
          :searchFields="['name']"
          v-model="selected"
          ref="apiTable"
          pagination-number
          hide-default-footer
        >
          <template
            v-slot:[`item.createdAt`]="{ item }"
          >{{ $moment(item.createdAt).format('LLL') }}
          </template>
          <template
                    v-slot:[`item._id`]="{ item }"
                >
                    <div>
                        <v-btn-toggle dense>
                            <v-btn dark color="teal" v-if="isEdit" @click="$router.push(`${$strLast($route.path,'/')}${item._id}`)">edit</v-btn>
                            <v-btn dark color="red" v-if="isDelete" @click="deleteItem(item)">delete</v-btn>
                        </v-btn-toggle>
                        
                    </div>
          </template>
        </v-api-table>
      </v-card>
    </div>
  </v-body>
</template>
<script>
import axios from "~/utils/axios";
import collect from "collect.js";
export default {
  data() {
    return {
      selected: [],
      tempsearch: "",
      search: "",

      headers: [
        {
          text: "Name",
          value: "name"
        },
        {
          text: "createdAt",
          value: "createdAt",
          width: '25%',
        },
        {
          text: 'active',
          value: '_id',
          width: '15%',
          sortable: false,
        },
      ],
      isCreate: false,
      isEdit: false,
      isDelete: false,
    };
  },
  methods: {
    async deleteItem(item) {
            try {
                const { data } = await axios.delete(`/api/projects/${item._id}`);
                await this.$refs.apiTable.getData(true);
                return data;
            } catch (error) {
                return error;
            }
        },
      
  },
  watch: {},
  async mounted() {
        this.$checkPermission("project","create").then(r => {
            this.isCreate = r;
        });
        this.$checkPermission("project","edit").then(r => {
            this.isEdit = r;
        });
        this.$checkPermission("project","remove").then(r => {
            this.isDelete = r;
        });
  }
};
</script>
