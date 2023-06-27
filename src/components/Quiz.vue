<script setup>
import { ref, watch, computed } from "vue";
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
  <div v-if="!showResults" className="bg-slate-900 flex flex-col items-center w-full">
    <h4 className="mt-10 text-xl text-white/60">
      Question {{ questionStatus }}
    </h4>
    <Question
      :question="questions[currentQuestion]"
      @selectOption="onOptionSelected"
    />
  </div>
  <Result :correctAns="correctAns" :quizLength="questions.length" v-else/>
</template>
