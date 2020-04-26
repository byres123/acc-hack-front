<template>
    <div>
        <h1 class="h1">Заказы</h1>

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
import OrderMoreAgGrid from '../components/ag-grid/order-more.ag-grid.vue';

@Component({
    components: {
        AgGridVue
    }
})
export default class OrdersPage extends Vue {

    public gridApi!: GridApi;

    public rowData: any[] = [];

    public columnDefs: ColDef[] = [
        {
            headerName: 'ИД заказа',
            field: 'id',
            sortable: true,
            minWidth: 150
        },
        {
            headerName: 'Запрашив. дата',
            field: 'order_date',
            sortable: true,
            cellClass: (p) => this.getDateColor(new Date(p.data.order_date), new Date(p.data.fact_date)),
            minWidth: 150
        },
        {
            headerName: 'Дата поставки',
            field: 'fact_date',
            sortable: true,
            cellClass: (p) => this.getDateColor(new Date(p.data.order_date), new Date(p.data.fact_date)),
            minWidth: 150
        },
        {
            headerName: 'Продукт',
            field: 'product',
            sortable: true,
            minWidth: 250
        },
        {
            headerName: 'Мин. количество',
            field: 'min_count',
            sortable: true,
            cellClass: (p) => this.getQuantityColor(p.data.min_count, p.data.max_count, p.data.fact_count),
            minWidth: 150
        },
        {
            headerName: 'Макс. количество',
            field: 'max_count',
            sortable: true,
            cellClass: (p) => this.getQuantityColor(p.data.min_count, p.data.max_count, p.data.fact_count),
            minWidth: 150
        },
        {
            headerName: 'Факт. кол.',
            field: 'fact_count',
            sortable: true,
            cellClass: (p) => this.getQuantityColor(p.data.min_count, p.data.max_count, p.data.fact_count),
            minWidth: 150
        },
        {
            headerName: 'Подробнее',
            minWidth: 150,
            cellRenderer: 'more'
        }
    ];

    testData: any[] = [
        {
            id: 0,
            id_f: '40357666/3',
            order_date: '2020-02-02',
            fact_date: '2020-02-10',
            product: 'Х/к оцинкованный прокат с полимерным покрытием',
            min_count: 25,
            max_count: 27.1,
            fact_count: 26.6
        }
    ]

    public frameworkComponents: any = {
        more: OrderMoreAgGrid
    }

    public gridOptions: GridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: e => this.onGridReady(e),
        frameworkComponents: this.frameworkComponents
    }

    created(): void {
    }
    
    public onGridReady(event: GridReadyEvent) {
        this.gridApi = event.api;
        this.rowData = this.testData;
        this.gridApi.sizeColumnsToFit();
    }

    public getDateColor(orderDate: Date, currentDate: Date): string {
        let days = Math.abs((+orderDate - +currentDate) / 24 / 60 / 60 / 1000);
        if(days > 7) return 'red lighten-3';
        if(days != 0) return 'yellow lighten-3';
        return 'green lighten-1';
    }

    public getQuantityColor(rangeFrom: number, rangeTo: number, current: number): string {
        if(rangeFrom > current || rangeTo < current) return 'red lighten-3';
        return 'green lighten-1';
    }
    
}
</script>