<!-- Please remove this file from your project -->
<template>
  <div class="model">
    <v-dialog
      v-model="showDialog"
      persistent
      scrollable
      max-width="600"
      
    >
        <template v-slot:activator="{ on, attrs }" v-if="!empty(btn)">
         
            <v-btn
            color="teal"
            dark
            small
            outlined
            v-bind="attrs"
            v-on="on"
            >
            <v-icon left>
                mdi-plus
            </v-icon>
            เพิ่ม{{label}}
            </v-btn>
        </template>
        <v-card class="list-dialog">
            <v-card-title class="text-h5">
            <v-text-field
                v-model="tmpSearch"
                v-on:keyup.enter="search=tmpSearch"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
            ></v-text-field>
            </v-card-title>
            <v-divider style="padding: 0; margin: -8px 0 10px;"></v-divider>
            <v-card-text>
                    <v-data-table
                        v-model="selected"
                        :headers="setHeaders"
                        :items="listItems"
                        :loading="loading"
                        item-key="_id"
                        show-select
                        hide-default-header
                        hide-default-footer
                        disable-pagination
                    >
                        <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" >{{slot}}</slot>
                        <template
                            v-for="slot in Object.keys($scopedSlots)"
                            :slot="slot"
                            slot-scope="scope"
                            >
                            <slot :name="slot" v-bind="scope" />
                        </template>
                        

                    </v-data-table>
                    <v-overlay :value="overlay">
                                <v-progress-circular
                                    indeterminate
                                    size="64"
                                ></v-progress-circular>
                    </v-overlay>
                    <hr>
                    
            </v-card-text>
            <div class="pt-2 pb-1 pl-15 pr-15" >
                <v-btn
                    color="black"
                    rounded
                    :disabled="(page>=totalPages)"
                    block
                    :dark="!(page>=totalPages)"
                    @click="syncData(page+1)">
                    Load More
                </v-btn>
            </div>
            <v-divider></v-divider>
            
            
            <v-card-actions>
                <div class="actions-center">
                    <v-btn
                        color="cyan darken-3"
                        dark
                        @click="confirmSelect()"
                    >
                        บันทึก
                    </v-btn>
                    &nbsp;
                    &nbsp;
                    <v-btn
                        color="grey lighten-2"
                        @click="showDialog = false"
                    >
                        ยกเลิก
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from '~/utils/axios'
import _ from 'lodash'
import collect from 'collect.js'
export default {
  name: 'v-model',
  props: {
    label: {
      type: String,
      default: '',
    },
    showDialog:{type:Boolean,default:false},
    headers:{type:Array,default:[]},
    btn:{type:Boolean,default:false},
    items: { type: Array, default: () => [] },
    value: { type: Array, default: () => [] },
    limit: { type: Number, default: 10 },
    url: { type: String,required:true },
    searchField: { type: Array },
  },
  data() {
    return {
      loading: false,
      overlay: false,
      selected:[],
      search:'',
      tmpSearch:'',
      listItems: [],
      page:1,
      totalPages:100,
    };
  },
  computed:{
      setHeaders(){
        return this.headers.map(item=>{
          return {
            text:item.value,
            value:item.value,
            sortable:false,
          }
        })
      }
  },
  methods:{
    syncData(page=null){
        if((page-1)>=this.totalPages){
            return
        }
        if(!this.empty(page)){
            this.page = page;
        }
        this.loading = true
        this.overlay = true
        let queryParams = [
            this.url,
            {
                params:{
                    page:!this.empty(page)?page:this.page,
                    limit:this.limit,
                    searchFields: this.searchField,
                    search:this.search,
                    except:this.value.map(item=>item._id),
                }
            }
        ]
        console.log(queryParams);
        axios.get(...queryParams).then(
            r => {
                this.totalPages = _.get(r,'data.totalPages',_.get(r,'data.data.totalPages',100))
                this.listItems = collect(_.concat(this.listItems,_.get(r, "data.docs", _.get(r, "data.data.docs", [])))).unique('_id').all()
                this.loading = false
                this.overlay = false
            }
        )
    },
    confirmSelect(){
        this.$emit('input',this.selected)
        this.showDialog = false
    },
  },
  watch:{
    showDialog(val){
      if(val){
        this.listItems = _.get(this,'items',[])
        this.selected = _.get(this,'value',[])
        this.syncData()
      }
    },
    search(val){
        if(val){
            this.listItems = []
            this.syncData()
        }else{
            this.listItems = _.get(this,'items',[])
            this.selected = _.get(this,'value',[])
            this.syncData()
        }
    },
  },
}
</script>
<style lang="scss">
.v-overlay.v-overlay--active {
  z-index: 9999 !important;
}
.actions-center{
      margin: 0 auto !important;
}
.v-dialog__content.v-dialog__content--active{
    z-index: 99999 !important;
}
.list-dialog{
    padding:0 !important;
    .v-card__title{
        padding:0 !important;
    }
    .v-card__text{
        padding:0 !important;
        .v-label{
            .col{
                padding-top: 0;
                padding-bottom: 0;
            }
        }
        .v-list-item{
            border-bottom: 1px solid #e0e0e0;
            &:first-child{
                border-top: 1px solid #e0e0e0;
            }
            .v-list-item__content{
                padding: 0 0 12px;
            }
        }
    }
}
</style>