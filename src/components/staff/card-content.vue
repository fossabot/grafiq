<template>
  <v-card class="col-md-4">
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>{{ workingHours }}</v-card-text>
    <v-card-actions>
      <v-btn text>aa</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardContent",
  props: {
    name: {
      type: String,
      default: () => ""
    },
    workingHours: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style scoped></style>
