<template>
  <h2>Computed</h2>
  <input type="number" v-model="myNumber" :class="myColor" />
  <button @click="myNumber++">+</button>
  <button @click="myNumber--">-</button>
</template>

<script setup>
import { ref, computed } from "vue";

const myNumber = ref(0);

const myColor = computed(() => {
  if (myNumber.value < 5) return "green";
  else return "red";
});
</script>

<style scoped>
.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
