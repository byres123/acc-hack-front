<template>
    <LoadingColumnDialogComponent 
        :id="id"
        :value="value"
        :date="date"
        :fullName="fullName"/>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoadingColumnDialogComponent  from '../loading-column-dialog.component.vue';
import { Inject } from 'vue-property-decorator';
import { PlantsService } from '../../service/plants.service';

@Component({
    components: {
        LoadingColumnDialogComponent
    }
})
export default class CongestionAgGrid extends Vue {

    public value: number = 0;
    public date: string = '';
    public fullName: string = '';
    public id?: number;

    created(): void {
        this.date = this.$data.params.colDef.headerName;
        this.value = this.$data.params.value;
        this.fullName = this.$data.params.data.fullName;
        this.id = this.$data.params.data.id;
    }

}
</script>