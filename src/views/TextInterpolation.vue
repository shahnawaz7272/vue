<template>
  <div >
    <h1>Text interpolation</h1>
    <h2>text interpolation means showing dynamic data of component stored in script tag in DOM with the help of curly braces {}</h2>
    <p> example: 2 + 2 = {{ num + 2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref<number>(2)
</script>

<style scoped>
div {background-color: black; height: 100%; width: 100%; padding: 70px;}
h1 { color: #42b983; font-family: sans-serif; margin-bottom: 24px; }
h2 { color: steelblue; font-family: Georgia, 'Times New Roman', Times, serif; margin-bottom: 24px;}
p { color: chocolate; font-family: 'Times New Roman', Times, serif;}
</style>