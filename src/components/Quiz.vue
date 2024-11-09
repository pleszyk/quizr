<script setup>
import { ref, computed } from "vue";
import questions from "../questions.json";
import Question from "./Question.vue";
import Result from "./Result.vue";

const currentQuestion = ref(0);
const correctAns = ref(0);
const showResults = ref(false)

const questionStatus = computed(
  () => `${currentQuestion.value + 1}/${questions.length}`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    correctAns.value++;
  }

  if(questions.length -1 === currentQuestion.value){
    showResults.value = true
  }
  currentQuestion.value++;
};
</script>

<template>
  <div v-if="!showResults" class="bg-slate-900 gap-2 flex flex-col items-center mx-auto w-3/4 md:w-1/2">
    <h4 class="mt-10 text-xl text-white/60">
      Question {{ questionStatus }}
    </h4>
    <Question
      :question="questions[currentQuestion]"
      @selectOption="onOptionSelected"
    />
  </div>
  <Result :correctAns="correctAns" :quizLength="questions.length" v-else/>
</template>
