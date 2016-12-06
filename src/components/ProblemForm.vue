<template>
  <div>
    <label> Name * </label>
    <input v-model="newProblem.name" autofocus>

    <label> Url * </label>
    <input v-model="newProblem.url">

    <br />
    <label> Notes </label>
    <textarea v-model="newProblem.notes">
    </textarea>

    <button @click="addProblem"> Add !</button>

    <br />
    <span v-html="desc"></span>

  </div>
</template>

<script>
export default {
  name: 'problem-form',
  props: ['prolems', 'newProblem'],
  computed: {
    desc: function () {
      let name = this.newProblem.name || ''
      let url = this.newProblem.url || ''
      if (name.length > 0) {
        let ref = `<span> @ </span> judge`
        if (url.length > 0) {
          ref = `<a href=${url}> @ judge </a>`
        }
        return name + ref
      }
      return ''
    }
  },
  methods: {
    addProblem: function () {
      this.$emit('addProblem')
    }
  }
}
</script>

<style scoped>
@import '../assets/css/base.css';

input {
  border: none;
  border-bottom: 2px solid var(--main-color);
  margin: 10px;
}

textarea {
  border: none;
  border-bottom: 2px solid var(--main-color);
}

button {
  background-color: var(--sec-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 7px 20px;
}
</style>
