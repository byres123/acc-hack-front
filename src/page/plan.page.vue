<template>
    <div>
        <h1>План загрузки цехов</h1>
        
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { AgGridVue } from 'ag-grid-vue';

@Component({
    components: {
        AgGridVue
    }
})
export default class PlanPage extends Vue {

}
</script>