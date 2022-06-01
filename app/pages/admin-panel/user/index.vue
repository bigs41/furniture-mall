<template>
  <v-body>
    <div>
      <v-card outlined>
        <v-card-title>
          <h1>Users</h1>
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
          <v-btn dark color="teal" v-if="isCreate" @click="$router.push(`${$strLast($route.path,'/')}create`)">add</v-btn>
        </v-card-title>
        <v-api-table
          :headers="headers"
          url="/api/users"
          item-key="_id"
          :search="search"
          :searchFields="['firstName','lastName']"
          v-model="selected"
          pagination-number
          hide-default-footer
        >
        <template
            v-slot:[`item.userName`]="{ item }"
          >{{`${item.firstName} ${item.lastName}`}}</template>
          <template
            v-slot:[`item.createdAt`]="{ item }"
          >{{ $moment(item.createdAt).format('LLL') }}</template>
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
export default {
  data() {
    return {
      selected: [],
      tempsearch: "",
      search: "",

      headers: [
        {
          text: "Name",
          value: "userName"
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
  methods: {},
  watch: {},
  async mounted() {
    this.$checkPermission("user","create").then(r => {
      this.isCreate = r;
    });
    this.$checkPermission("user","edit").then(r => {
      this.isEdit = r;
    });
    this.$checkPermission("user","remove").then(r => {
      this.isDelete = r;
    });
  }
};
</script>
