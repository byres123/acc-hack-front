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
import { GridApi, ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import OprerationWorkload from '../components/ag-grid/operation-workload.ag-grid.vue';

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
            field: 'description',
            sortable: true,
            minWidth: 250
        },
        {
            headerName: 'Ресурс. груп.',
            field: 'group',
            sortable: true,
            minWidth: 250
        },
        {
            headerName: 'Загруженность',
            field: 'workload',
            sortable: true,
            minWidth: 150,
            cellRenderer: 'workload'
        },
        {
            headerName: 'Количество',
            field: 'output_quantity',
            sortable: true,
            minWidth: 150
        },
        {
            headerName: 'Маршурт',
            field: 'route',
            sortable: true,
            minWidth: 150
        },
        {
            headerName: 'Дата начала',
            field: 'start_date',
            sortable: true,
            minWidth: 150
        },
        {
            headerName: 'Дата окончания',
            field: 'end_date',
            sortable: true,
            minWidth: 150
        }

    ]

    testData: any[] = [
        {
            description: 'Отгрузка ЦХПП',
            group: 'G_OTGRH',
            workload: 70,
            output_quantity: 21.5,
            route: '40373189|2|S_OTGRH|01|9999T',
            start_date: '2020-04-15 00:00:00.000000',
            end_date: '2020-04-16 00:04:00.000000'
        },
        {
            description: 'Отгрузка ЦХПП',
            group: 'G_OTGRH',
            workload: 95,
            output_quantity: 21.5,
            route: '40373189|2|S_OTGRH|01|9999T',
            start_date: '2020-04-15 00:00:00.000000',
            end_date: '2020-04-16 00:04:00.000000'
        }
    ]

    public frameworkComponents: any = {
        workload: OprerationWorkload
    }

    public gridOptions: GridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: e => this.onGridReady(e),
        frameworkComponents: this.frameworkComponents
    }

    public onGridReady(event: GridReadyEvent) {
        this.gridApi = event.api;
        this.rowData = this.testData;
        this.gridApi.sizeColumnsToFit();
    }

}
</script>