<template>
  <h2>Please enter your email</h2>
  <input type="email" v-model="email" />
  <p id="error" v-if="show">{{ errorMsg }}</p>
  <button :disabled="show" @click="addToProfile">Send form</button>
</template>

<script setup>
import { ref, watch } from "vue";

import { useUserStore } from "../stores/user";
const user = useUserStore();

// Email del Home.vue
const email = ref("");

const errorMsg = ref("Emails need an @");
const show = ref(false);

watch(email, (newEmail, oldEmail) => {
  !newEmail.includes("@") ? (show.value = true) : (show.value = false);
});

function addToProfile() {
  user.changeEmail(email.value);
}
</script>

<style lang="scss" scoped></style>
