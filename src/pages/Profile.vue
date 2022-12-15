<template>
  <div>This is your profile</div>
  <p>Your email: {{ user.email }}</p>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const user = useUserStore();
</script>

<style lang="scss" scoped></style>
