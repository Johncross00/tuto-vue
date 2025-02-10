<template>
    <label>
        <input type="checkbox" @change="onChange"/>
        {{ label }}
    </label>
</template>

<script setup>
const props = defineProps( {
    label: String
} )
console.log( props.label )

const emit = defineEmits([
    'check', 'uncheck'
])
const onChange = (event) => {
    if (event.target.checked) {
        emit('check', event.target.checked)
    } else {
        emit('uncheck', event.target.checked)
    }
}

</script>