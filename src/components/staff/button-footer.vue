<template>
  <button
    class="link card-footer-item"
    :class="className"
    :aria-label="label"
    tabIndex="0"
    @click="handleClick"
    :data-index="dataIndex"
    :data-id="dataId"
  >
    <i :class="iconClasses"></i>
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonFooter",
  props: {
    item: {
      type: Object,
      default() {}
    }
  },
  methods: {
    handleClick() {
      this.$emit("clicked", this.item);
    }
  }
};
</script>

<style scoped></style>
