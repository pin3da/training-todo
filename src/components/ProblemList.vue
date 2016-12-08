<template>
  <ul class="problem-list">
    <li v-for="(problem, index) in problems" :key="problem.id">
      <div>
        <label @dblclick="edit(problem, index)" >
          {{index}} - {{problem.name}}
        </label>
        @ <a :href="problem.url"> judge </a>
        <button class="destroy"
          @click="removeProblem(problem, index)">
          x
        </button>
      <pre v-html='problem.notes'></pre>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'problem-list',
  props: ['problems'],
  data () {
    return {
      msg: 'Manuel'
    }
  },
  methods: {
    edit: function (problem, index) {
      this.$emit('editProblem', problem, index)
    },
    removeProblem: function (problem, index) {
      this.$emit('removeProblem', problem, index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: var(--link-color);
}

.problem-list li .destroy {
  background-color: var(--link-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 5px;
}

.problem-list li:hover .destroy {
  background-color: var(--sec-color);
}

</style>
