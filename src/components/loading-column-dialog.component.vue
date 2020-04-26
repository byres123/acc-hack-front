<template>
    <div class="column-wrapper">
        <div @click="openDialog()" class="column">
            <div :style="{width: value+'%'}" :class="['loader', getColor(value)]"></div>
            <span class="value">{{value}}%</span>
        </div>

        <v-dialog v-model="dialog"
            width="600">
            <v-card>
                <!-- <v-toolbar
                    color="indigo"
                    dark
                    >
                    123
                </v-toolbar> -->
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
        &__title {
            display: flex;
            align-items: center;
            width: 40%;
            height: 100%;
        }
        &__value {
            display: flex;
            align-items: center;
            width: 60%;
            height: 100%;
        }
    }
    .table-title {
        font-size: 24px;
        font-weight: 700;
    }
    .table-value {
        font-size: 24px;
        font-weight: 700;
        border-radius: 5px;
        overflow: hidden;
    }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject, Prop } from 'vue-property-decorator';

@Component
export default class LoadingColumnDialogComponent extends Vue {

    @Prop() public value!: string

    @Prop() public date!: string;
    @Prop() public fullName!: string;

    @Prop() public items!: {name: string, value: number}[];

    public dialog: boolean = false;

    public getColor(percent: number): string {
        if(percent < 80) return 'red lighten-3';
        if(percent < 95) return 'yellow lighten-3';
        return 'green lighten-1';
    }

    public openDialog() {
        this.dialog = true;
    }

}
</script>