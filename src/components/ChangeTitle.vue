<template>
    <fieldset>Changer le titre ici</fieldset>
    <input type="text" name="" id="" v-model="page.title">
    Temps écoulé: {{ time }}
    <br>
    <hr>
    <button @click="resetTimer">Reset</button>
</template>

<script setup>

import { useTimer } from '@/composable/useTimer';
import { ref, watch, watchEffect } from 'vue';


const page = ref( {
    title: ''
} )

const {time, resetTimer} = useTimer()
// watch(()=> page.value.title, ( newValue, oldValue ) =>
// {
//     console.log( 'old value: ' + oldValue, 'new value: ' + newValue )
//     document.title = newValue
// }, 
// // {immediate: true}
//  )
watchEffect( () => page.value.title, ( newValue, oldValue ) =>
{
    document.title = newValue
} )
</script>