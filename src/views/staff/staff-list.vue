<template>
  <v-container class="pa-2 mx-auto">
    <v-row>
      <v-col v-for="(person, index) in staff" :key="person.id" :cols="4">
        <CardContent :person="person" :index="index"></CardContent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardContent from "@/components/staff/card-content.vue";

export default {
  name: "StaffList",
  props: {
    staff: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CardContent
  },
  methods: {
    deletePerson(person) {
      this.$emit("deleted", person);
      console.log(`You tried to delete ${person.name}`);
    },
    selectPerson(person) {
      this.$emit("selected", person);
    }
  }
};
</script>

<style scoped></style>
