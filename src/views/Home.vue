<template>
  <div class="home">
    <LoadExcelFile @export="printExported" />
    <ul>
      <li v-for="item in exportedData">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadExcelFile from "@/components/LoadExcelFile";

export default {
  data() {
    return {
      exportedData: []
    };
  },
  name: "home",
  components: {
    LoadExcelFile
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
