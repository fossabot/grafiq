<template>
  <v-col cols="6" sm="6" class="py-2">
    <v-btn
      text
      :class="className"
      :aria-label="label"
      tabIndex="0"
      @click="handleClick"
      :data-index="dataIndex"
      :data-id="dataId"
    >
      <i :class="iconClasses"></i>
      <span>{{ label }}</span>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "ButtonFooter",
  props: {
    item: {
      type: Object,
      default() {}
    },
    className: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: () => ""
    },
    dataIndex: {
      type: String,
      default: () => ""
    },
    dataId: {
      type: Number,
      default: () => null
    },
    iconClasses: {
      type: String,
      default: () => ""
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
