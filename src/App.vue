<template>
  <div>
    <!-- <default-layout v-if="currentUser === null" /> -->
    <admin-panel-layout />
  </div>
</template>

<style lang="scss"src="./theming/index.scss"></style>

<script lang="ts">
import Vue from 'vue';
import DefaultLayout from './layout/default.layout.vue';
import Component from 'vue-class-component';
import {Provide} from 'vue-property-decorator';
import AdminPanelLayout from './layout/admin-panel.layout.vue';
import { Route } from 'vue-router';
import VueAxios from 'vue-axios'
import {Axios} from './http';
import {PlantsService} from './service/plants.service';

Vue.use(VueAxios, Axios);

@Component({
  components: {
    DefaultLayout,
    AdminPanelLayout
  }
})
export default class App extends Vue {

  @Provide() plantsService: PlantsService = new PlantsService(this.$http);
   
  public created() {
    
  }

}
</script>
