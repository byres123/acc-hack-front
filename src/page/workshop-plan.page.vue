<template>
    <div>
        <h1 class="h1">Загрузка ресурсов по цеху: Конвертерный цех 1</h1>

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
import Vue from 'vue'
import Component from 'vue-class-component';
import { AgGridVue } from 'ag-grid-vue';
import { GridApi, ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import CongestionAgGrid from '../components/ag-grid/congestion.ag-grid.vue';
import WorkshopAgGrid from '../components/ag-grid/workshop.ag-grid.vue';
import WorkshopGroupAgGrid from '../components/ag-grid/workshop-group.ag-grid.vue';

@Component({
    components: {
        AgGridVue
    }
})
export default class WorkshopPlanPage extends Vue {

    public dateFrom: string = (new Date()).toISOString().slice(0,10);
    public dateMenuFrom: boolean = false;

    public dateTo: string = (new Date()).toISOString().slice(0,10);
    public dateMenuTo: boolean = false;

    public gridApi!: GridApi;

    public rowData: any[] = [];

    public columnDefs: ColDef[] = [
        {
            headerName: 'Группа',
            field: 'fullName',
            sortable: true
        },
        {
            headerName: 'KPI',
            sortable: true,
            valueGetter: (p) => {
                let i = 0;
                return p.data.timeData.reduce((sum: number, current: any) => {
                    i++
                    return sum + current.percentage
                }, 0)/i + '%';
            }
        }
    ];

    testData: any[] = [
        {
            id: 0,
            fullName: "G_AEIPT",
            shortName: "G_AEIPT",
            timeData: [
                {
                    date: "2020-04-25",
                    percentage: 0,
                },
                {
                    date: "2020-04-26",
                    percentage: 50,
                },
                {
                    date: "2020-04-27",
                    percentage: 10,
                },
                {
                    date: "2020-04-28",
                    percentage: 30,
                },
                {
                    date: "2020-04-29",
                    percentage: 100,
                }
            ]
        },
        {
            id: 1,
            fullName: "G_ANGC1H",
            shortName: "G_ANGC1H",
            timeData: [
                {
                    date: "2020-04-25",
                    percentage: 0,
                },
                {
                    date: "2020-04-26",
                    percentage: 50,
                },
                {
                    date: "2020-04-27",
                    percentage: 10,
                },
                {
                    date: "2020-04-28",
                    percentage: 30,
                },
                {
                    date: "2020-04-29",
                    percentage: 100,
                }
            ]
        },
        {
            id: 2,
            fullName: "G_ANGC3H",
            shortName: "G_ANGC3H",
            timeData: [
                {
                    date: "2020-04-25",
                    percentage: 0,
                },
                {
                    date: "2020-04-26",
                    percentage: 50,
                },
                {
                    date: "2020-04-27",
                    percentage: 10,
                },
                {
                    date: "2020-04-28",
                    percentage: 30,
                },
                {
                    date: "2020-04-29",
                    percentage: 100,
                }
            ]
        }
    ]

    public frameworkComponents: any = {
        workshop: WorkshopGroupAgGrid
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

        let columnDefs = [...this.columnDefs];
        this.rowData = this.testData;
        if(!this.rowData.length) return;

        this.rowData[0].timeData.forEach((el: any) => {
            columnDefs.push({
                headerName: el.date,
                sortable: true,
                valueGetter: () => el.percentage,
                cellRenderer: 'workshop'
            });
        })
        this.gridApi.setColumnDefs(columnDefs);
        this.gridApi.sizeColumnsToFit();
    }

}
</script>