<template>
    <div>
        <h1 class="h1">Операции</h1>

        <v-card class="grid-wrapper">
            <ag-grid-vue
                 class="ag-theme-material"
                 :gridOptions="gridOptions"
                 :rowData="rowData">
            </ag-grid-vue>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";
import { AgGridVue } from 'ag-grid-vue';
import { GridApi, ColDef } from 'ag-grid-community';

@Component({
    components: {
        AgGridVue
    }
})
export default class OperationsPage extends Vue {
    
    public gridApi!: GridApi;
    
    public rowData: any[] = [];

    public columnDefs: ColDef[] = [
        {
            headerName: 'Опирация',
            field: 'id',
            sortable: true,
            minWidth: 150
        }
    ]

}
</script>