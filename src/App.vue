<template>
  <div id="app">
    <h1 class="greeting">Hello {{localUser}} !!</h1>
    <span class="sub" v-on:click="toggleUserInput">Not you?</span>
    <input v-if="showUserInput" v-on:keyup="changeUser"
    placeholder="Insert your name" v-model="localUser">
    <span v-if="showUserInput" v-on:click="closeUser"> close</span>

    <div class="main">

      <h3> Add new problems to solve (: </h3>

      <h4 class="warning"> {{message}} </h4>
      <problem-form
        v-bind:newProblem="newProblem"
        v-bind:problems="problems"
        v-on:addProblem="addProblem"
      />
      <problem-list v-bind:problems="problems"/>
    </div>
  </div>
</template>

<script>
import ProblemList from './components/ProblemList'
import ProblemForm from './components/ProblemForm'
import debounce from 'lodash.debounce'

export default {
  name: 'app',
  components: {
    ProblemList,
    ProblemForm
  },
  data: function () {
    return {
      showUserInput: false,
      localUser: this.user || 'MP'
    }
  },
  props: ['problems', 'user', 'newProblem', 'message'],
  filters: {
    lowercase: function (d) {
      return d.toLowerCase()
    }
  },
  methods: {
    addProblem: function () {
      this.$emit('addProblem')
    },
    toggleUserInput: function () {
      this.showUserInput = !this.showUserInput
    },
    closeUser: function () {
      this.showUserInput = false
    },
    changeUser: debounce(function () {
      this.$emit('changeUser', this.localUser)
    }, 500)
  }
}
</script>

<style>
@import './assets/css/base.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-smoothing: antialiased;
  text-align: center;
  margin-top: 60px;
  color: dimgray;
}

#app span {
  color: var(--sec-color);
}

.greeting {
  color: var(--main-color);
}

.main {
  // background: var(--background-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
}

.warning {
  color: orangered;
}
</style>
