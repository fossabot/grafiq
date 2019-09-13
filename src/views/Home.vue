<template>
  <div class="home">
    <Calendar :taskView="false" :view="week" :scheduleView="['time']" />
    <LoadExcelFile @export="printExported" />
    <MakeiCalFile :shifts="exportedData" />
    {{ exportedData }}
  </div>
</template>

<script>
// @ is an alias to /src
import LoadExcelFile from "@/components/LoadExcelFile";
import MakeiCalFile from "@/components/MakeiCalFile";
import "tui-calendar/dist/tui-calendar.css";
import { Calendar } from "@toast-ui/vue-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export default {
  data() {
    return {
      exportedData: []
    };
  },
  name: "home",
  components: {
    LoadExcelFile,
    MakeiCalFile,
    Calendar
  },
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
