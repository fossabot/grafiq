<template>
  <div class="home">
    <LoadExcelFile @export="printExported" />
    <MakeiCalFile :shifts="exportedData" />
    {{ exportedData }}
  </div>
</template>

<script>
// @ is an alias to /src
import LoadExcelFile from "@/components/LoadExcelFile";
import MakeiCalFile from "@/components/MakeiCalFile";

export default {
  data() {
    return {
      exportedData: []
    };
  },
  name: "home",
  components: {
    LoadExcelFile,
    MakeiCalFile
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
