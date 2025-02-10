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
  <div v-if="count > 5">Bravo, vous avez appuiyé plus de {{ count - 1 }} fois</div>
  <h3>Vous avez appuyé <strong :style="{ color: count > 10 ? 'red' : 'yellow' }"> {{ count }} </strong> fois</h3>
  <button @click="increment">Augmenter</button>
  <hr>
  <button @click="count--">Diminuer</button>
  <p>my phone is or are:
  <div v-html="phone"></div>
  </p>
  <br>
  <!-- <button @click="sortMovies">Réorganiser</button> -->
  <p>I like movies like:
  <ul>
    <li v-for="movie in movies">{{ movie }} <button @click="deleteMovie(movie)">Supprimer</button></li>
  </ul>
  </p>
</template>

<script setup>
import { ref } from 'vue'
const name = "John"
const phone = "<ul><li>iPhone</li><li>Samsung</li></ul>"

const count = ref( 0 )

const increment = ( event ) =>
{
  console.log( event )
  count.value++
}

const movies = ref( [
  'AAA', 'BBB', 'CCCC'
] )

const deleteMovie = ( event ) => {
  movies.value.splice( movies.value.indexOf( event ), 1 )
}
// const sortMovies = ( event ) => {
//   movies.value.sort()
// }
</script>

<style>
h1 {
  color: pink;
}

strong {
  color: green;
}
</style>