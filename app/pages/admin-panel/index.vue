<template>
    <div class="dashboard">
        <v-row>
            <v-col md="12" lg="12" sm="12">
              <v-card outlined>
                <v-card-title>
                  <span class="headline">{{ $t('popular order') }}</span>
                </v-card-title>
                <v-card-text>
                    <GChart
                        type="BarChart"
                        :data="barChartData"
                        :createChart="(el, google, type) => {
                          return new google.visualization[type](el)
                        }"
                    />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="4" lg="4" sm="4">
              <v-card
                color="#385F73"
                dark
              >
              <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>
                  Accounts
                </v-card-title>

                <v-card-subtitle  class="text-h5">{{numUser}}</v-card-subtitle>
              </div>
                <v-avatar
                  class="ma-3"
                  tile
                >
                  <v-icon dark>
                    mdi-account
                  </v-icon>
                </v-avatar>
              </div>
              </v-card>
            </v-col>
            <v-col md="4" lg="4" sm="4">
              <v-card
                color="#952175"
                dark
              >
              <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>
                  Products
                </v-card-title>

                <v-card-subtitle  class="text-h5">{{numProduct}}</v-card-subtitle>
              </div>
                <v-avatar
                  class="ma-3"
                  tile
                >
                  <v-icon dark>
                    mdi-package-variant
                  </v-icon>
                </v-avatar>
              </div>
              </v-card>
            </v-col>
            <v-col md="4" lg="4" sm="4">
              <v-card
                color="#1F7087"
                dark
              >
              <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>
                  Projects
                </v-card-title>

                <v-card-subtitle  class="text-h5">{{numProject}}</v-card-subtitle>
              </div>
                
              </div>
              </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import axios from '~/utils/axios'
import _ from 'lodash'
import collect from 'collect.js'
import { GChart } from "vue-google-charts";
export default {
    component:[GChart],
    data() {
        return {
            chartsLib: null,
            headBarChartData:[],
            barChartData: [],
            numUser:0,
            numProduct:0,
            numProject:0,
        }
    },
    methods: {
        async order() {
            const $r = await axios.get(`/api/order/report`);
            const $data = _.get($r, 'data', []);
            this.barChartData = _.concat([['product','quantity']], collect($data).map(r=>[r.name,r.quantity]).all());
        },
        async countUser(){
            const $r = await axios.get(`/api/users/count`);
            this.numUser = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        async countProduct(){
            const $r = await axios.get(`/api/products/count`);
            this.numProduct = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        async countProject(){
            const $r = await axios.get(`/api/projects/count`);
            this.numProject = _.get($r, 'data.data', _.get($r, 'data', 0));
        },
        onChartReady (chart, google) {
          this.chartsLib = google
        }
    },
    async mounted() {
        await this.order()
        await this.countUser();
        await this.countProduct();
        await this.countProject();
    },
};
</script>
<style lang="scss" scoped>
.dashboard {
  padding: 0;
  margin: 0;
  ::v-deep{
    .v-card__title{
      // background-color: #fafafa;
    }
  }
}
</style>
