import { ref, onMounted, onUnmounted } from 'vue';

export function useTimer(initial = 0) {
    const time = ref(initial);
    let timerInterval = null;

    onMounted(() => {
        timerInterval = setInterval(() => {
            time.value++;
        }, 1000);
    });

    onUnmounted(() => {
        clearInterval(timerInterval);
    });

    const resetTimer = () => {
      time.value = initial;
    };

    return {time, resetTimer}
}