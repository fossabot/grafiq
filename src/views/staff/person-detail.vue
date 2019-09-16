<template>
  <div class="card edit-detail">
    <header class="card-header">
      <p class="card-header-title">{{ editingPerson.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label" for="name">Imię</label>
          <input
            class="input"
            name="name"
            placeholder="e.g. Edward Zabbix"
            type="text"
            v-model="editingPerson.name"
          />
        </div>
        <div class="field">
          <input
            class="input"
            name="workingHours"
            type="select"
            v-model="editingPerson.workingHours"
          />
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <ButtonFooter
        class="card-footer-item"
        label="Anuluj"
        :className="'cancel-button'"
        :iconClasses="'fas fa-undo'"
        :item="editingPerson"
        @clicked="clear"
      ></ButtonFooter>
      <ButtonFooter
        class="card-footer-item"
        label="Zapisz"
        :className="'save-button'"
        :iconClasses="'fas fa-save'"
        :item="editingPerson"
        @clicked="savePerson"
      ></ButtonFooter>
    </footer>
  </div>
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
      editingPerson: { ...this.person }
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
    }
  }
};
</script>

<style scoped></style>
