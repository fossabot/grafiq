<template>
  <div class="card-content">
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="working-hours">{{ workingHours }}</div>
    </div>
  </div>
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
