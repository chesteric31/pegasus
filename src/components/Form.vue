<template>
  <div>
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <div class="input-group input-group-lg mb-3 mt-3">
        <span class="input-group-text"><i class="fas fa-sun"></i></span>
        <input type="number" class="form-control" v-model="day" placeholder="Enter day index">
      </div>
      <div class="input-group input-group-lg mb-3">
        <span class="input-group-text"><i class="fas fa-moon"></i></span>
        <input type="number" class="form-control" v-model="night" placeholder="Enter night index">
      </div>
      <div class="input-group input-group-lg mb-3">
        <span class="input-group-text"><i class="fas fa-exclamation-circle"></i></span>
        <input type="number" class="form-control" v-model="exclusiveNight" placeholder="Enter exclusive night index">
      </div>
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
    <div v-if="formSubmitted">
      <h3>Form Submitted</h3>
      <p>Day: {{ day }}</p>
      <p>Night: {{ night }}</p>
      <p>Exclusive Night: {{ exclusiveNight }}</p>
      <button class="btn btn-secondary" @click="formSubmitted = false">Retry</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

defineProps<{ msg: string }>()

const day = ref(0)
const night = ref(0)
const exclusiveNight = ref(0)
let formSubmitted = ref(false)

function submitForm() {
  console.log(day.value, night.value, exclusiveNight.value)
  formSubmitted.value = true
}
</script>

<style scoped>

</style>
