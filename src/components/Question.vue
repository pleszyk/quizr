<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);

const emit = defineEmits(['selectOption'])

const emitSelectedOption = (isCorrect) => {
    emit('selectOption', isCorrect)
}
</script>

<template>
  <div class="mt-4 text-2xl text-white">
    {{ question.question }}
  </div>
  <div
    @click="emitSelectedOption(option.isCorrect)"
    v-for="option in question.answerOptions"
    class="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl hover:bg-black/5 bg-white/5"
  >
    <input type="radio" class="w-6 h-6 bg-black" />
    <p class="ml-6 text-white">{{ option.answer }}</p>
  </div>
</template>

<style scoped>
input[type="radio"]:after {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  background-color: #535353;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

input[type="radio"]:checked:after {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  background-color: #4f46e5;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
</style>
