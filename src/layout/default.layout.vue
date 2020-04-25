<template>
    <v-app class="bg" id="inspire">
        <v-content>
            <v-container
                class="fill-height container"
                fluid>
                <router-view />
            </v-container>
        </v-content>
    </v-app>

</template>

<style lang="scss" scoped>
    .container {
        align-items: initial;
    }
    .bg {
        background: url('/bg.png')!important;
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute; 
            top: 0;
            left: 0;
            background: rgba(255,255,255,0.8);
        }
    }
</style>