<template>
  <h2>Watcher</h2>

  <input type="number" v-model="myNumber" :class="myClass" />
  <button @click="myNumber++">+</button>
  <button @click="myNumber--">-</button>
</template>

<script setup>
import { ref, watch } from "vue";

const myNumber = ref(0);
const myClass = ref("red");

watch(myNumber, (newNumber) => {
  if (newNumber > 4) {
    myClass.value = "green";
  } else {
    myClass.value = "red";
  }
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
