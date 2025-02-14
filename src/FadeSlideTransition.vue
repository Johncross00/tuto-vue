<template>
    <Transition name="fadeSlide" mode="out-in" appear>
        <slot></slot>
    </Transition>
</template>

<!-- <script setup>
import { ref } from 'vue';
const showSpoiler = ref(false)
</script> -->

<style>

.fadeSlide-enter-from {
    opacity: 0;
    transform: translateX(10px);
}

.fadeSlide-enter-active{
    transition: .5s ease-in ;
    color: yellow;
  }

  .fadeSlide-leave-active{
    transition: .5s ease-out;
    color: greenyellow;
  }
  .v-enter-to{
    opacity: 1;
    transform: translateX(0);
  }

.fadeSlide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}
</style>