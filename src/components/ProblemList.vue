<template>
  <ul class="problem-list">
    <li v-for="(problem, index) in compProblems" :key="problem.id">
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
var marked = require('marked')

export default {
  name: 'problem-list',
  props: ['problems'],
  data () {
    return {
      msg: 'Manuel'
    }
  },
  computed: {
    compProblems: function () {
      console.log(this.problems)
      var ans = []
      for (let i = 0; i < this.problems.length; ++i) {
        ans.push(Object.assign({}, this.problems[i]))
        ans[i].notes = marked(ans[i].notes || '', { sanitize: true })
      }
      return ans
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
