<template>
    <LoadingColumnDialogComponent 
        :value="value" />
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";
import LoadingColumnDialogComponent  from '../loading-column-dialog.component.vue';

@Component({
    components: {
        LoadingColumnDialogComponent
    }
})
export default class OprerationWorkload extends Vue {
    
    public value!: number;

    created(): void {
        this.value = this.$data.params.value;
    }

}
</script>