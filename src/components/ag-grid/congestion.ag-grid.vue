<template>
    <LoadingColumnDialogComponent 
        :value="value"
        :date="date"
        :fullName="fullName"
        :items="items" />
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoadingColumnDialogComponent  from '../loading-column-dialog.component.vue';

@Component({
    components: {
        LoadingColumnDialogComponent
    }
})
export default class CongestionAgGrid extends Vue {

    public value: number = 0;
    public date: string = '';
    public fullName: string = '';

    public items: any[] = [
        {
            name: 'G_AEIPT',
            value: 100
        },
        {
            name: 'G_ANGC1H',
            value: 80
        },
        {
            name: 'G_ANGC3H',
            value: 0
        },
        {
            name: 'G_ANGCD',
            value: 50
        },
        {
            name: 'G_ANOD',
            value: 50
        },
        {
            name: 'G_ANOG1T',
            value: 50
        }
    ]

    created(): void {
        this.date = this.$data.params.colDef.headerName;
        this.value = this.$data.params.value;
        this.fullName = this.$data.params.data.fullName;
    }

}
</script>