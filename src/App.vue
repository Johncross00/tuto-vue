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
  <button @click="showTimer = !showTimer">Afficher/Masquer</button>
  <Timer v-if="showTimer"></Timer>
  <form action="" @submit.prevent="addTodo">
    <legend>Ajouter une tâche</legend>
    <fieldset role="group">
      <input type="text" name="newTodo" id="newTodo" placeholder="Tâche à faire" v-model="newTodo"
        @input="validateInput" required />
      <button :disabled="!newTodo">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire 😊</div>
  <div v-else>
    <label for="hideCompleted">
      <input type="checkbox" name="hideCompleted" id="hideCompleted" v-model="hideCompleted" />
      Masquer les tâches complétées
    </label>
    <transition-group name="fade" tag="ul" class="todo-list">
      <li v-for="todo in sortedTodos(false)" :key="todo.date" :class="{ completed: todo.completed }">
        <label :for="'todo-' + todo.date">
          <input type="checkbox" :name="'todo-' + todo.date" :id="'todo-' + todo.date" v-model="todo.completed"
            @change="saveTodos" />
          {{ todo.title }}
        </label>
        <button @click="deleteTodo(todo)">Supprimer</button>
      </li>
    </transition-group>
    <h3>Tâches complétées</h3>
    <transition-group name="fade" tag="ul" class="todo-list">
      <li v-for="todo in sortedTodos(true)" :key="todo.date" :class="{ completed: todo.completed }">
        <label :for="'todo-' + todo.date">
          <input type="checkbox" :name="'todo-' + todo.date" :id="'todo-' + todo.date" v-model="todo.completed"
            @change="saveTodos" />
          {{ todo.title }}
        </label>
        <button @click="deleteTodo(todo)">Supprimer</button>
      </li>
    </transition-group>
  </div>
  <Layout>
    <template #header>
      Header
    </template>
    <template #aside>
      Aside
    </template>
    <template #main>
      Main
    </template>
    <template #footer>
      Footer
    </template>
  </Layout>
  <CustomButton>
    <Strong>KTM</Strong> for
  </CustomButton>
  <h1>Hello {{ name.toUpperCase() }}</h1>
  <div v-if="count > 5">Bravo, vous avez appuiyé plus de {{ count - 1 }} fois</div>
  <h3>Vous avez appuyé <strong :style="{ color: count > 10 ? 'red' : 'yellow' }"> {{ count }} </strong> fois</h3>
  <button @click="increment">Augmenter</button>
  <hr>
  <button @click="count--">Diminuer</button>
  <p>my phone is or are:</p>
  <div v-html="phone"></div>

  <br>
  <hr>
  <fieldset>
    <legend>Ajouter un nouveau film</legend>
    <form action="" @submit="addMovie">
      <input type="text" v-model="newMovie"> {{ newMovie }}
      <button @click="addMovie">Ajouter</button>
    </form>
  </fieldset>
  <button @click="sortMovies">Réorganiser</button>
  <p>I like movies like: </p>
  <ul>
    <li v-for="movie in movies" :key="movie" :style="{ color: 'red' }">{{ movie }} <button
        @click="deleteMovie(movie)">Supprimer</button></li>
  </ul>

  <CheckBox label="Bonjour" @check="console.log('Coché')" @uncheck="console.log('Décoché')" />
</template>

<script setup>
import { watch, onMounted } from "vue";

const newTodo = ref( "" );
const hideCompleted = ref( false );
const todos = ref( JSON.parse( localStorage.getItem( "todos" ) ) || [] );

onMounted( () =>
{
  console.log( 'mounted' )
  fetch( 'https://jsonplaceholder.typicode.com/todos' )
    .then( r =>
    {
      console.log( 'Response', r )
      return r.json()
    } )
    .then( v =>
    {
      console.log( 'Data', v )
      todos.value = v.map( todo => ( { ...todo, date: todo.id } ) )
    } )
} )

const validateInput = () =>
{
  newTodo.value = newTodo.value.replace( /\s/g, "" );
};

const addTodo = () =>
{
  todos.value.push( {
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  } );
  newTodo.value = "";
  saveTodos();
};

const deleteTodo = ( todo ) =>
{
  todos.value = todos.value.filter( ( t ) => t !== todo );
  saveTodos();
};

const saveTodos = () =>
{
  localStorage.setItem( "todos", JSON.stringify( todos.value ) );
};

const sortedTodos = ( completed ) =>
{
  const sortedTodos = todos.value
    .slice()
    .sort( ( a, b ) => ( a.completed > b.completed ? 1 : -1 ) );
  if ( hideCompleted.value && completed )
  {
    return [];
  }
  return sortedTodos.filter( ( t ) => t.completed === completed );
};

watch( todos, saveTodos, { deep: true } );

onMounted( () =>
{
  todos.value = JSON.parse( localStorage.getItem( "todos" ) ) || [];
} );
import { ref } from 'vue'
import CheckBox from './Checkbox.vue'
import CustomButton from './CustomButton.vue'
import Layout from './Layout.vue'
import Timer from "./Timer.vue";

const showTimer = ref( true )

const name = "John"
const phone = "<ul><li>iPhone</li><li>Samsung</li></ul>"

const count = ref( 0 )

const increment = ( event ) =>
{
  console.log( event )
  count.value++
}

const movies = ref( [
  'Moko', 'Viuy', 'CCCC'
] )

const deleteMovie = ( event ) =>
{
  movies.value.splice( movies.value.indexOf( event ), 1 )
}
const sortMovies = ( event ) =>
{
  movies.value.sort()
}

const newMovie = ref( "" )
const addMovie = ( event ) =>
{
  event.preventDefault()
  movies.value.push( newMovie.value )
  newMovie.value = ''
}
</script>

<style>
h1 {
  color: pink;
}

strong {
  color: rgb(255, 157, 0);
}
</style>