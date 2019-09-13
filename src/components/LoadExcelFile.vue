<template>
  <div>
    <label
      >Plik
      <input type="file" id="file" ref="file" @change="handleFileUpload()" />
    </label>
  </div>
</template>

<script>
import xlsxParser from "xlsx-parse-json";

export default {
  name: "LoadExcelFile",
  data() {
    return {
      file: "",
      content: "",
      keys: [],
      days: null,
      toExport: []
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    parseSchedule() {
      for (let shift = 0; shift < this.content.length; shift++) {
        //dzień miesiąca
        if (shift % 4 === 0) this.toExport.push(`Dzień ${shift / 4 + 1}`);
        //8-16
        else if (shift % 4 === 1 && this.keys[shift].length === 0)
          this.toExport.push("Weekend");
        else if (shift % 4 === 1) this.toExport.push(this.keys[shift]);
        //7-19
        else if (shift % 4 === 2) this.toExport.push(this.keys[shift]);
        //19-7
        else if (shift % 4 === 3) this.toExport.push(this.keys[shift]);
      }
      this.$emit("export", this.toExport);
    },
    prepareContext() {
      const spreadsheetName = Object.keys(this.content).toString();
      this.content = this.content[spreadsheetName];
      this.content.forEach(line => {
        this.keys.push(
          Object.keys(line).filter(x => x !== "czy weekend" && x !== " ")
        );
      });
      this.days = (this.content.length + 1) / 4;
      this.parseSchedule();
    }
  },
  watch: {
    file: function() {
      xlsxParser.onFileSelection(this.file).then(data => {
        this.content = data;
        this.prepareContext();
      });
    }
  }
};
</script>

<style scoped></style>
