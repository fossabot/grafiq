import * as axios from "axios";
import { parseItem, parseList } from "./action-utils";
import { API } from "../config";
import {
  ADD_PERSON,
  DELETE_PERSON,
  GET_STAFF,
  UPDATE_PERSON
} from "./mutation-types";

export default {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    staff: []
  },
  mutations: {
    [ADD_PERSON](state, person) {
      state.staff.unshift(person);
    },
    [UPDATE_PERSON](state, person) {
      const index = state.staff.findIndex(p => p.id === person.id);
      state.staff.splice(index, 1, person);
      state.staff = [...state.staff];
    },
    [GET_STAFF](state, staff) {
      state.staff = staff;
    },
    [DELETE_PERSON](state, person) {
      state.staff = [...state.staff.filter(p => p.id !== person.id)];
    }
  },
  actions: {
    async getStaffAction({ commit }) {
      try {
        const response = await axios.get(`${API}/staff`);
        const staff = parseList(response);
        commit(GET_STAFF, staff);
        return staff;
      } catch (error) {
        return console.log(error);
      }
    },
    async deletePersonAction({ commit }, person) {
      try {
        const response = await axios.delete(`${API}/staff/${person.id}`);
        parseItem(response, 200);
        commit(DELETE_PERSON, person);
        return null;
      } catch (error) {
        return console.log(error);
      }
    },
    async updatePersonAction({ commit }, person) {
      try {
        const response = await axios.post(`${API}/staff/${person.id}`, person);
        const updatedPerson = parseItem(response, 200);
        commit(UPDATE_PERSON, updatedPerson);
        return updatedPerson;
      } catch (error) {
        return console.log(error);
      }
    },
    async addPersonAction({ commit }, person) {
      try {
        const response = await axios.post(`${API}/staff/${person.id}`, person);
        const addedPerson = parseItem(response, 201);
        commit(ADD_PERSON, addedPerson);
        return addedPerson;
      } catch (error) {
        return console.log(error);
      }
    }
  },
  getters: {
    staff: state => state.staff
  }
};
