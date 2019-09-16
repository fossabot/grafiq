<template>
  <div>
    <Calendar
      width="100%"
      :taskView="false"
      view="week"
      :scheduleView="['time']"
    />
    <LoadExcelFile @export="printExported" />
    <MakeiCalFile :shifts="exportedData" />
    {{ exportedData }}
  </div>
</template>

<script>
// @ is an alias to /src
import LoadExcelFile from "@/components/load-excel-file";
import MakeiCalFile from "@/components/make-ical-file";
import "tui-calendar/dist/tui-calendar.css";
import { Calendar } from "@toast-ui/vue-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export default {
  data() {
    return {
      drawer: null,
      exportedData: null,
      icons: ["home", "heart", "accessible"]
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
