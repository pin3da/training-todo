<template>
  <div id="app">
    <h1 class="greeting">Hello {{localUser}} !!</h1>
    <span class="sub" v-on:click="toggleUserInput">Not you?</span>
    <input ref="inputUser" v-if="showUserInput" v-on:keyup="changeUser"
    placeholder="Insert your name" v-model="localUser"
    v-on:keyup.enter="closeUser">
    <span v-if="showUserInput" v-on:click="closeUser"> close</span>

    <div class="main">

      <h3> Add new problems to solve (: </h3>

      <h4 class="warning"> {{message}} </h4>
      <problem-form
          v-bind:newProblem="newProblem"
          v-bind:problems="problems"
          v-bind:toEdit="toEdit"
          v-on:addProblem="addProblem"
          v-on:doneEdit="doneEdit"
          ref="problemForm"
          />
        <problem-list v-bind:problems="problems"
          v-on:editProblem="editProblem"
          v-on:removeProblem="removeProblem"
          />
    </div>
  </div>
</template>

<script>
import ProblemList from './components/ProblemList'
import ProblemForm from './components/ProblemForm'
import debounce from 'lodash.debounce'
import Vue from 'vue'

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
  props: ['problems', 'user', 'newProblem', 'message', 'toEdit'],
  filters: {
    lowercase: function (d) {
      return d.toLowerCase()
    }
  },
  methods: {
    addProblem: function () {
      this.$emit('addProblem')
    },
    editProblem: function (problem, index) {
      this.$emit('editProblem', problem, index)
      this.$refs.problemForm.$refs.inputProblemName.focus()
    },
    removeProblem: function (problem, index) {
      this.$emit('removeProblem', problem, index)
    },
    toggleUserInput: function () {
      this.showUserInput = !this.showUserInput
      Vue.nextTick(() => {
        if (this.showUserInput) {
          // this.$el.querySelector('input').focus()
          this.$refs.inputUser.focus()
        }
      })
    },
    closeUser: function () {
      this.showUserInput = false
    },
    changeUser: debounce(function () {
      this.$emit('changeUser', this.localUser)
    }, 500),
    doneEdit: function () {
      this.$emit('doneEdit')
    }
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
