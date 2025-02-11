<template>
  <div class="timer">
    <h1>Temps: {{ time }}</h1>
    <br>
    <hr>
    <div ref="div">
      largeur: {{ size.width }}
      hauteur: {{ size.height }}
    </div>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const time = ref( 0 )
const size = ref({width:0, height:0})
const div = ref(null)

let timer
onMounted( () => timer = setInterval( () =>
{
  const rect = div.value.getBoundingClientRect()
  size.value = {width:rect.width, height:rect.height}
  console.log( "Time: " );
  time.value++
}, 1000 ) )

onUnmounted( () => clearInterval( timer ) )
// let intervalId = null;

// const startTimer = () => {
//   intervalId = setInterval(() => {
//     time.value++;
//   }, 1000);
// };

// const stopTimer = () => {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// const resetTimer = () => {
//   time.value = 0;
// };

// onMounted(() => {
//   startTimer();
// });

</script>