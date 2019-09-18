<template>
  <div class="content-container">
    <ListHeader
      :title="title"
      @refresh="getStaff"
      @add="enableAddMode"
      :routePath="routePath"
    ></ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column is-8" v-if="staff">
        <StaffList
          v-if="!selected"
          :staff="staff"
          :selectedPerson="selected"
          @deleted="askToDelete($event)"
          @selected="select($event)"
        ></StaffList>
        <PersonDetail
          v-if="selected"
          :person="selected"
          @unselect="clear"
          @save="save"
        ></PersonDetail>
      </div>
    </div>
    <Modal
      class="modal-staff"
      :message="message"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deletePerson"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ListHeader from "@/components/staff/list-header.vue";
import PersonDetail from "@/views/staff/person-detail.vue";
import Modal from "@/components/modal.vue";
import StaffList from "./staff/staff-list";
import { containerMethods } from "../shared/mixins.js";

export default {
  name: "Staff",
  data() {
    return {
      personToDelete: null,
      message: "",
      routePath: "/staff",
      selected: null,
      showModal: false,
      title: "Operatorzy"
    };
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { ListHeader, StaffList, PersonDetail, Modal },
  mixins: [containerMethods],
  created() {
    this.getStaffAction();
  },
  computed: {
    ...mapGetters("staff", { staff: "staff" })
  },
  methods: {
    ...mapActions("staff", [
      "getStaffAction",
      "deletePersonAction",
      "addPersonAction",
      "updatePersonAction"
    ]),
    askToDelete(person) {
      this.personToDelete = person;
      this.showModal = true;
      if (this.personToDelete.name) {
        this.message = `Na pewno chcesz usunąć ${this.personToDelete.name}?`;
      }
    },
    deletePerson() {
      this.closeModal();
      if (this.personToDelete) {
        this.deletePersonAction(this.personToDelete);
      }
      this.clear();
    },
    getStaff() {
      this.getStaffAction();
      this.clear();
    },
    save(person) {
      person.id
        ? this.updatePersonAction(person)
        : this.addPersonAction(person);
    },
    select(person) {
      this.selected = person;
    }
  }
};
</script>

<style scoped></style>
