<template>
  <v-card>
    <v-card-title>
      {{ editingPerson.name }}
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="editingPerson.name"
                placeholder="np. Edward Zabbix"
                label="Imię i nazwisko operatora"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-select
                v-model="editingPerson.workingHours"
                :items="workingHoursOptions"
                label="Wymiar czasu pracy"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-container fluid class="pa-0">
        <v-row>
          <ButtonFooter
            label="Anuluj"
            :className="'cancel-button'"
            iconClass="mdi-cancel"
            :item="editingPerson"
            @clicked="clear"
          ></ButtonFooter>
          <ButtonFooter
            label="Zapisz"
            :className="'save-button'"
            iconClass="mdi-save"
            :item="editingPerson"
            @clicked="savePerson"
          ></ButtonFooter>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import ButtonFooter from "@/components/staff/button-footer.vue";
import { unselector } from "@/shared/mixins.js";

export default {
  name: "PersonDetail",
  props: {
    person: {
      type: Object,
      default() {}
    }
  },
  mixins: [unselector],
  components: { ButtonFooter },
  data() {
    return {
      addMode: false,
      editingPerson: { ...this.person },
      valid: false,
      nameRules: [v => !!v || "Imie i nazwisko są wymagane!"],
      workingHoursOptions: [
        "pełny etat",
        "7/8 etatu",
        "3/4 etatu",
        "5/8 etatu",
        "1/2 etatu",
        "umowa zlecenie"
      ]
    };
  },
  watch: {
    person() {
      if (this.person && this.person.id) {
        this.editingPerson = { ...this.person };
        this.addMode = false;
      } else {
        this.editingPerson = { id: undefined, name: "", description: "" };
        this.addMode = true;
      }
    }
  },
  methods: {
    savePerson() {
      this.$emit("save", this.editingPerson);
      this.clear();
    },
  }
};
</script>

<style scoped></style>
