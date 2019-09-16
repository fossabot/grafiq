<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item :to="{ path: '/' }">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: '/about' }">
          <v-list-item-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: '/staff' }">
          <v-list-item-action>
            <v-icon>mdi-accessible</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Operatorzy
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="purple darken-2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pan Grafan</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="purple darken-2" dark app>
      <span class="white--text">&copy; 2073</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      exportedData: null,
      icons: ["home", "heart", "accessible"]
    };
  }
};
</script>

<style lang="scss"></style>
