<template>
  <v-item-group>
    <v-card flat class="py-2">
      <v-card-text>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" sm="6" class="py-2">
              <span class="white--text mr-2">
                <h1 class="title">{{ title }}</h1>
              </span>
              <v-btn text @click="handleAdd" aria-label="add">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn text @click="handleRefresh" aria-label="refresh">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-item-group>
</template>

<script>
export default {
  name: "ListHeader",
  props: {
    title: {
      type: String,
      default: () => ""
    },
    routePath: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    handleAdd() {
      this.$emit("add");
    },
    handleRefresh() {
      this.$emit("refresh");
    }
  }
};
</script>

<style scoped>
h1.title {
  border-left: 16px solid purple;
  border-bottom: 2px solid purple;
  padding-left: 8px;
  padding-right: 16px;
  display: inline-block;
  text-transform: uppercase;
  color: #555;
  letter-spacing: 0;
}
</style>
