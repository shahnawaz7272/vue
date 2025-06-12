<script setup lang="ts">
let srck ="https://source.boomplaymusic.com/group10/M00/03/16/435585fa84cb4ba08a835036accf6181H3000W3000_320_320.jpg"
</script>

<template>
  <div>  
  <h1>Attribute Binding</h1>
  <p>
    Attribut Binding refers to way to bind attributes of an element with data in vue instance(data
    inside script tag)
  </p>
  <h2>exaple using src of below image</h2>
  <img :src='srck' height="400" width="400" alt="chimpanzini bananini"></img>
  </div>
</template>

<style scoped>
div {background-color: black; height: 100%; width: 100%; padding: 70px;}
h1 { color: #42b983; font-family: sans-serif; margin-bottom: 24px; }
h2 { color: steelblue; font-family: Georgia, 'Times New Roman', Times, serif; margin-bottom: 24px;}
p { color: chocolate; font-family: 'Times New Roman', Times, serif;}
</style>
