<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <div class="text-center">
        <template>
            <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">
                    Name of step 1
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">
                    Name of step 2
                </v-stepper-step>

                </v-stepper-header>

                <v-stepper-items>
                <v-stepper-content step="1">
    
                        <v-row>
                            <v-col>
                                <v-text-field
                                label="project id"
                                v-model="data.projectId"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                label="link to project"
                                v-model="data.uri"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-row>
                        <v-col>
                            <ul>
                                <li v-for="$model in data.model">
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                            label="sku code"
                                            v-model="$model.code"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </li>
                            </ul>
                        </v-col>
                        </v-row>
                        <v-row>
                        <v-col>
                            <v-btn
                            color="primary"
                            @click="data.model.push({})" 
                            >
                            add model
                            </v-btn>
                        </v-col>
                    </v-row>
                    <br/>
                    <v-divider></v-divider>
                    <br/>
                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>


                </v-stepper-items>
            </v-stepper>
            </template>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        e1: 1,
        data: {
            model:[{}],
        },
      }
    },
    methods: {
     async updateData () {
        
      },
    },
  }
</script>