<template>
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <navbar-component />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="purple"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-toolbar-title>Application</v-toolbar-title> -->

      <v-spacer />

      <v-menu>
        <!-- <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>mdi-account-circle</v-icon>
            {{getName()}}
          </v-btn>
        </template> -->
        <!-- <v-list dense nav>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Мой профиль</v-list-item-title>
          </v-list-item> -->
          <v-list-item @click="logout()">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Выйти из аккаунта</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container
        class="container"
        fluid
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
    .container {
        height: 100%;
        // max-width: 1280px;
        padding: 15px 20px;
    }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarComponent from '../components/navbar.component.vue';

@Component({
    components: {
        NavbarComponent
    }
})
export default class AdminPanelLayout extends Vue {
    public drawer = null;
}
</script>