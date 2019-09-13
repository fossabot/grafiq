<template>
  <div class="home">
    <v-app id="calendar">
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
          <v-list-item @click="$refs.file.$el.click()">
            <v-list-item-action>
              <v-icon>mdi-info</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Wgraj plik .ical
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="purple" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Grafiq</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fuild full-height>
          <v-layout align-center justify-center>
            <v-flex text-xs-center>
              <Calendar
                width="100%"
                :taskView="false"
                view="week"
                :scheduleView="['time']"
              />
              <LoadExcelFile @export="printExported" />
              <MakeiCalFile :shifts="exportedData" />
              {{ exportedData }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="purple" dark app>
        <span class="white--text">&copy; 2073</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadExcelFile from "@/components/LoadExcelFile";
import MakeiCalFile from "@/components/MakeiCalFile";
import Vuetify from "vuetify/lib";
import "tui-calendar/dist/tui-calendar.css";
import { Calendar } from "@toast-ui/vue-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export default {
  data() {
    return {
      drawer: null,
      exportedData: null,
      icons: ["home", "heart"]
    };
  },
  name: "home",
  components: {
    LoadExcelFile,
    MakeiCalFile,
    Calendar
  },
  vuetify: new Vuetify(),
  methods: {
    printExported(exportedData) {
      this.exportedData = exportedData;
    }
  },
  watch: {
    exportedData: function() {}
  }
};
</script>
