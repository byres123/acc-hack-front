<template>
    <div @click="viewWorkshop()" class="column">
        {{value}}
    </div>
</template>

<style lang="scss" scoped>
    .column {
        cursor: pointer;
    }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class WorkshopAgGrid extends Vue {

    public value!: number;
    public id!: number;

    created(): void {
        this.value = this.$data.params.value;
        this.id = this.$data.params.data.id;
    }

    viewWorkshop(): void {
        window.open("/plan/" + this.id);
    }

}
</script>