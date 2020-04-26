<template>
    <div class="column-wrapper">
        <div @click="openDialog()" class="column">
            <div :style="{width: value+'%'}" :class="['loader', getColor(value)]"></div>
            <span class="value">{{value}}%</span>
        </div>

        <v-dialog v-if="items" v-model="dialog"
            width="800">
            <v-card>
                <v-card-title
                    color="purple"
                    class="headline grey lighten-2"
                    primary-title
                >
                    {{fullName}} на дату: {{date}}
                </v-card-title>
                <v-card-text>
                    <div v-for="(item,i) in items" :key="i" class="table-item">
                        <span class="table-title table-item__title">{{item.name}}</span>
                        <div class="table-value table-item__value">
                            <div class="column">
                                <div :style="{width: item.value+'%'}" :class="['loader', getColor(item.value)]"></div>
                                <span class="value">{{item.value}}%</span>
                            </div>
                        </div>
                    </div>

                    <v-divider class="table-item" />

                    <div class="table-item">
                        <span class="table-title table-item__title">Average</span>
                        <div class="table-value table-item__value">
                            <div class="column">
                                <div :style="{width: getAvg()+'%'}" :class="['loader', getColor(getAvg())]"></div>
                                <span class="value">{{getAvg()}}%</span>
                            </div>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
    .column-wrapper {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    .column {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .value {
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 1;
    }
    .loader {
        position: absolute;
        height: 100%;
    }
    .table-item {
        display: flex;
        height: 50px;
        margin-top: 25px;
        margin-bottom: 10px;
        background: #f1f1f1;
        &__title {
            display: flex;
            align-items: center;
            width: 40%;
            height: 100%;
            padding-left: 10px;
            padding-right: 15px;
            color: #000;
        }
        &__value {
            display: flex;
            align-items: center;
            width: 60%;
            height: 100%;
        }
    }
    .table-title {
        font-size: 18px;
        font-weight: 700;
        line-height: normal;
    }
    .table-value {
        font-size: 24px;
        font-weight: 700;
        border-radius: 5px;
        overflow: hidden;
    }
    .avg {
        margin-top: 35px;
    }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject, Prop } from 'vue-property-decorator';
import { PlantsService } from '../service/plants.service';

@Component
export default class LoadingColumnDialogComponent extends Vue {

    @Inject() public plantsService!: PlantsService;

    @Prop() public value!: string

    @Prop() public date?: string;
    @Prop() public fullName?: string;

    @Prop() public items?: {name: string, value: number}[];

    @Prop() public id?: number;

    public dialog: boolean = false;

    public getColor(percent: number): string {
        if(percent < 80) return 'red lighten-3';
        if(percent < 95) return 'yellow lighten-3';
        return 'green lighten-1';
    }

    public getAvg(): number {
        let i=0;
        if(!this.items) return 0;
        return Math.round(this.items.reduce((sum, current) => {
            i++
            return sum + current.value
        }, 0)/i);
    }

    public openDialog() {
        if(this.id && this.date) {
            this.plantsService.getGroups(this.id, this.date)
            .then(res => {
                this.items = res.data.timeData.map((item: any) => {
                    return {
                        name: item.resource_grup_short_name,
                        value: Math.round(item.percent)
                    }
                });
            })
        }
        this.dialog = true;
    }

}
</script>