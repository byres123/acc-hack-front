<template>
    <v-btn @click="more()" color="purple white--text" depressed>Подробнее</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Component
export default class OrderMoreAgGrid extends Vue {
    
    id!: number;

    created(): void {
        this.id = this.$data.params.data.id
    }

    more(): void {
        window.open('/operations/' + this.id);
    }

}
</script>