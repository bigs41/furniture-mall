<template>
    <div>
          <GCharts
                :settings="{packages: ['corechart', 'bar']}"
                :data="barChartData"
                :options="chartOptions"
                :createChart="(el, google) => new google.charts.Bar(el)"
            />
    </div>
</template>

<script>
import { GChart } from "vue-google-charts";
const { Parser } = require("json2csv");
import _ from "lodash";

export default {
  props: {
    projectList: { type: Array },
    barChartData: { type: Array },
    headBarChartData: { type: Array },
  },
  data() {
    return {
      
    };
  },
  components: {
    GChart,
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  methods: {
    
  },
  async mounted() {
    
  },
  watch: {
    
  }
};
</script>
