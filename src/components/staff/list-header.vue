<template>
  <v-item-group>
    <div class="purple text-center">
      <span class="white--text">
        <h2 class="title">{{ title }}</h2>
      </span>
    </div>

    <button class="button add-button" @click="handleAdd" aria-label="add">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </button>
    <button
      class="button refresh-button"
      @click="handleRefresh"
      aria-label="refresh"
    >
      <i class="fas fa-sync" aria-hidden="true"></i>
    </button>
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

<style scoped></style>
