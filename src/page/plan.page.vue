<template>
    <div>
        <h1 class="h1">План загрузки цехов</h1>
        
        <div class="btn-wrapper">
            <v-menu
                v-model="dateMenuFrom"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        class="dateField btn-wrapper__item"
                        v-model="dateFrom"
                        outlined
                        dense
                        label="Дата от"
                        readonly
                        v-on="on"
                        ></v-text-field>
                </template>
                <v-date-picker v-model="dateFrom" no-title @input="dateMenuFrom = false"></v-date-picker>
            </v-menu>
            <v-menu
                v-model="dateMenuTo"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        class="dateField btn-wrapper__item"
                        v-model="dateTo"
                        outlined
                        dense
                        label="Дата до"
                        readonly
                        v-on="on"
                        ></v-text-field>
                </template>
                <v-date-picker v-model="dateTo" no-title @input="dateMenuTo = false"></v-date-picker>
            </v-menu>
            <v-spacer />
        </div>
    
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
    .dateField {
        width: 200px;
        max-width: 200px;
    }
    .btn-wrapper {
        display: flex;
        justify-content: flex-end;
        margin: 0 0 25px;
        &__item {
            margin-right: 15px!important;
            &:last-child {
                margin-right: 0!important;
            }
        }
    }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { AgGridVue } from 'ag-grid-vue';
import { GridApi, GridOptions, ColDef, GridReadyEvent, ModelUpdatedEvent } from 'ag-grid-community';
import { Inject } from 'vue-property-decorator';
import { PlantsService } from '../service/plants.service';
import CongestionAgGrid from '../components/ag-grid/congestion.ag-grid.vue';
import WorkshopAgGrid from '../components/ag-grid/workshop.ag-grid.vue';

@Component({
    components: {
        AgGridVue,
    }
})
export default class PlanPage extends Vue {

    @Inject() plantsService!: PlantsService;

    public dateFrom: string = (new Date()).toISOString().slice(0,10);
    public dateMenuFrom: boolean = false;

    public dateTo: string = (new Date()).toISOString().slice(0,10);
    public dateMenuTo: boolean = false;

    public gridApi!: GridApi;

    public rowData: any[] = [];

    public columnDefs: ColDef[] = [
        {
            headerName: 'Цех',
            field: 'fullName',
            sortable: true,
            minWidth: 250,
            cellRenderer: 'workshop'
        },
        {
            headerName: 'KPI',
            sortable: true,
            minWidth: 150,
            valueGetter: (p) => {
                let i = 0;
                return Math.round(p.data.timeData.reduce((sum: number, current: any) => {
                    if(i++>10) return sum;
                    return sum + current.percent
                }, 0)/i) + '%';
            }
        },
    ]

    public frameworkComponents: any = {
        congestion: CongestionAgGrid,
        workshop: WorkshopAgGrid
    }

    public gridOptions: GridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: e => this.onGridReady(e),
        onModelUpdated: e => this.onModelUpdated(e),
        frameworkComponents: this.frameworkComponents
    }

    public created(): void {
        let columnDefs = [...this.columnDefs];
        this.plantsService.getPlants()
        .then(res => {
            this.rowData = res.data;
            if(!this.rowData.length) return;

            let pinnedRow = {};
            let i=0;
            this.rowData[0].timeData.forEach((el: any) => {
                if(i++>10) return;
                columnDefs.push({
                    headerName: el.start,
                    minWidth: 150,
                    sortable: true,
                    valueGetter: () => Math.round(el.percent),
                    cellRenderer: 'congestion'
                });
            })
            
            this.gridApi.setColumnDefs(columnDefs);
            this.gridApi.sizeColumnsToFit();
        });
    }

    public onGridReady(event: GridReadyEvent) {
        this.gridApi = event.api;
    }

    public onModelUpdated(event: ModelUpdatedEvent) {
        // this.gridApi
    }

}
</script>