<template>
    <label>
        <input type="checkbox" />
        {{ label }}
    </label>
</template>

<script setup>
const props = defineProps( {
    label: String
} )
console.log( props.label )


</script>