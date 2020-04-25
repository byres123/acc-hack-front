<template>
    <LoadingColumnDialogComponent 
        :value="value"
        :date="date"
        :fullName="fullName"
        :items="items" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoadingColumnDialogComponent  from '../loading-column-dialog.component.vue';

@Component({
    components: {
        LoadingColumnDialogComponent
    }
})
export default class WorkshopGroupAgGrid extends Vue {
    public value: number = 0;
    public date: string = '';
    public fullName: string = '';

    public items: any[] = [
        {
            name: 'G_APGKRD_Seq_16',
            value: 100
        },
        {
            name: 'G_ARG2T_Seq_40',
            value: 80
        },
        {
            name: 'G_APRRG_Seq_23',
            value: 0
        },
        {
            name: 'G_AR3T_Seq_44',
            value: 50
        },
        {
            name: 'G_AR3T_Seq_43',
            value: 50
        },
        {
            name: 'G_APRRG_Seq_20',
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