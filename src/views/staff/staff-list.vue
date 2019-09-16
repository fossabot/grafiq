<template>
  <v-container class="pa-2 mx-auto">
    <v-row>
      <v-col v-for="(person, index) in staff" :key="person.id" :cols="4">
        <CardContent :name="person.name" :workingHours="person.workingHours">
          <footer class="card-footer">
            <ButtonFooter
              class="delete-item"
              iconClasses="fas fa-trash"
              label="Usuń"
              :dataId="person.id"
              :dataIndex="index"
              :item="person"
              @clicked="deletePerson"
            />
            <ButtonFooter
              class="edit-item"
              iconClasses="fas fa-edit"
              label="Edytuj"
              :dataId="person.id"
              :dataIndex="index"
              :item="person"
              @clicked="selectPerson"
            />
          </footer>
        </CardContent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonFooter from "@/components/staff/button-footer.vue";
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
    CardContent,
    ButtonFooter
  },
  methods: {
    deletePerson(person) {
      this.$emit("deleted", person);
    },
    selectPerson(person) {
      this.$emit("selected", person);
    }
  }
};
</script>

<style scoped></style>
