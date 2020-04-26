<template>
    <div @click="openModal()" class="column-wrapper">
        <LoadingColumnDialogComponent 
            :value="value" />

        <v-dialog v-model="dialog"
            width="600">
            <v-card>
                <v-card-title
                    color="purple"
                    class="headline grey lighten-2"
                    primary-title
                >
                    Доступные для оптимизации заказы:
                </v-card-title>
                <v-card-text class="dialog-content">
                    <h3 class="h3">заказ1 - оптимизировать вручную</h3>
                    <h3 class="h3">заказ2- оптимизировать вручную</h3>
                    <h3 class="h3">заказ3- оптимизировать вручную</h3>

                    <!-- <p>Оптимизировать автоматически (высвечивается предупреждение - ОК - все оптимизируется автоматически)</p> -->
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="postcss" scoped>
    .column-wrapper {
        width: 100%;
        height: 100%;
    }
    .dialog-content {
        padding-top: 20px!important;
    }
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
export default class WorkshopGroupAgGrid extends Vue {
    public value: number = 0;
    public date: string = '';
    public fullName: string = '';

    public dialog: boolean = false;

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

    openModal(): void {
        this.dialog = true;
    }
}
</script>