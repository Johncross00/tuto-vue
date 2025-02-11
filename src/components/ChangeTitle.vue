<template>
    <fieldset>Changer le titre ici</fieldset>
    <input type="text" name="" id="" v-model="page.title">
</template>

<script setup>

import { ref, watch } from 'vue';


const page = ref({
    title: ''
} )
watch(()=> page.value.title, ( newValue, oldValue ) =>
{
    console.log( 'old value: ' + oldValue, 'new value: ' + newValue )
    document.title = newValue
}, 
// {immediate: true}
 )
</script>