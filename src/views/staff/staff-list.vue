<template>
  <v-container class="pa-2 mx-auto">
    <v-row>
      <v-col
        v-for="(person, index) in staff"
        :key="person.id"
        :cols="cols"
        v-resize="onResize"
      >
        <CardContent :person="person" :index="index"></CardContent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardContent from "@/components/staff/card-content.vue";
import { rescaleCards } from "../../shared/mixins";

export default {
  name: "StaffList",
  mixins: [rescaleCards],
  data() {
    return {
      cols: 3
    };
  },
  props: {
    staff: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CardContent
  },
  mounted() {
    this.onResize();
  },
  methods: {
    deletePerson(person) {
      this.$emit("deleted", person);
      console.log(`You tried to delete ${person.name}`);
    },
    selectPerson(person) {
      this.$emit("selected", person);
      console.log(`You tried to select ${person.name}`);
    },
    onResize() {
      this.rescaleCardsOnResize();
    }
  }
};
</script>

<style scoped></style>
