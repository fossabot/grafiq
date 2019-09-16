<template>
  <div>
    <input
      type="file"
      id="file"
      ref="file"
      @change="handleFileUpload()"
    />
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
        switch (shift % 4) {
          case 0:
            {
              this.day = {
                date: `${shift / 4 + 1}`,
                "8-16": null,
                "7-19": null,
                "19-7": null
              };
            }
            break;
          case 1:
            this.day["8-16"] = this.keys[shift];
            break;
          case 2:
            this.day["7-19"] = this.keys[shift];
            break;
          case 3:
            this.day["19-7"] = this.keys[shift];
            this.toExport.push(this.day);
            break;
        }
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
      (this.content = ""),
        xlsxParser.onFileSelection(this.file).then(data => {
          this.content = data;
          this.prepareContext();
        });
    }
  }
};
</script>

<style scoped></style>
