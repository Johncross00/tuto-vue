<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
  <h1>Hello {{ name.toUpperCase() }}</h1>
  <!-- <h3>Vous avez appuyé <strong>{{ count }}</strong> fois</h3> -->
  <h3>Compteur <strong>{{ count }}</strong></h3>
</template>

<script setup>
import {ref} from 'vue'
const name = "John"
const count = ref(0)
setInterval(() => {
  count.value ++
}, 1000);
</script>

<style>
h1{
  color: pink;
}
strong{
  color: green;
}
</style>