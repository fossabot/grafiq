<template>
  <v-card class="col-md-4">
    <v-card-title>{{ person.name }}</v-card-title>
    <v-card-text>{{ person.workingHours }}</v-card-text>
    <v-card-actions>
      <v-container fluid class="pa-0">
        <v-row>
          <ButtonFooter
            class="delete-item"
            iconClass="mdi-remove"
            label="Usuń"
            :dataId="person.id"
            dataIndex="index"
            :item="person"
            @clicked="deletePerson"
          ></ButtonFooter>
          <ButtonFooter
            class="edit-item"
            iconClass="mdi-edit"
            label="Edytuj"
            :dataId="person.id"
            dataIndex="index"
            :item="person"
            @clicked="selectPerson"
          ></ButtonFooter>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import ButtonFooter from "./button-footer";
export default {
  name: "CardContent",
  components: { ButtonFooter },
  props: {
    person: {
      type: Object,
      default() {}
    }
  },
  methods: {
    deletePerson(person) {
      console.log(`Trying to delete ${person.name}`);
      this.$parent.$emit("deleted", person);
    },
    selectPerson(person) {
      console.log(`Editing ${person.name}`);
      this.$parent.$emit("selected", person);
    }
  }
};
</script>

<style scoped></style>
