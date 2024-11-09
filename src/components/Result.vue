<script setup>
import { defineProps } from 'vue';
import { RouterLink as Link } from 'vue-router';

const { correctAns, quizLength } = defineProps(["correctAns", "quizLength"]);

</script>

<template>
    <div class="text-3xl gap-4 mx-auto bg-slate-900 flex flex-col p-32 items-center justify-center font-semibold text-center text-white">
      You scored {{correctAns}}/{{ quizLength }}
      <Link class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" to="/">
        Go back
    </Link>
    </div>

</template>