<template>
    <div>
        <div class="logo-block">
            <img class="logo-block__logo" src="/logo.svg">
            <span class="logo-block__title">Accenture</span>
        </div>
        <v-divider />
        <v-list class="nav-menu" dense>
            <div v-for="(item, i) in getMenu()" :key="i">
                <v-list-item :to="item.path" link>
                    <v-list-item-action>
                        <v-icon v-if="item.meta.icon">{{item.meta.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            
        </v-list>
    </div>
</template>

<style lang="scss" scoped>
    .logo-block {
        display: flex;
        align-items: center;
        padding: 8px 21px 10px;
        &__logo {
            width: 28px;
            height: 28px;
            margin-right: 8px;
        }
        &__title {
            position: relative;
            top: 1px;
            font-size: 30px;
        }
    }
    .nav-menu {
        margin-top: -10px;
    }
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { NavigationModel } from '../model/navigation.model';
import {navigation} from '../router/navigation';

@Component
export default class NavbarComponent extends Vue {

    public getMenu(): NavigationModel[] {
        return navigation.filter(item => {
            return item.meta.showInMenu
        })
    }
    
}
</script>