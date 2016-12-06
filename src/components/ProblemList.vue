<template>
  <ul>
    <li v-for="(problem, index) in problems" :key="problem.id">
      {{index}} - {{problem.name}} @ <a :href="problem.url"> judge </a>
      <pre v-html='problem.notes'></pre>
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
</style>
