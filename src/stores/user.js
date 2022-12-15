import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: "",
    number: 0,
  }),
  actions: {
    changeEmail(email) {
      this.email = email;
    },
    sumNumber() {
      this.number++;
    },
  },
});
