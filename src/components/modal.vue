<template>
  <v-row justify="center">
    <v-dialog
      v-model="isOpen"
      persistent
      max-width="350"
      :class="{ 'is-active': isOpen }"
    >
      <v-card>
        <v-card-title class="headline">Potwierdź</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="onYes">Tak</v-btn>
          <v-btn @click="onNo">Nie</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!--  <div id="modal" class="modal" :class="{ 'is-active': isOpen }">-->
  <!--    <div class="modal-background"></div>-->
  <!--    <div class="modal-card">-->
  <!--      <header class="modal-card-head">-->
  <!--        <p class="modal-card-title">Potwierdź</p>-->
  <!--      </header>-->
  <!--      <section class="modal-card-body">{{ message }}</section>-->
  <!--      <footer class="modal-card-foot">-->
  <!--        <button class="button modal-no" @click="onNo">Nie</button>-->
  <!--        <button class="button is-primary modal-yes" @click="onYes">Yes</button>-->
  <!--      </footer>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "Modal",
  props: {
    message: {
      type: String,
      default: () => ""
    },
    isOpen: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    onNo() {
      this.$emit("handleNo");
    },
    onYes() {
      this.$emit("handleYes");
    }
  }
};
</script>

<style scoped></style>
