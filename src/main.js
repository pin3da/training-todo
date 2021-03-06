import Vue from 'vue'
import App from './App'

const STORAGE_KEY = 'training-todo'

const schemaData = {
  problems: [],
  user: '',
  newProblem: {
    name: null,
    url: null,
    notes: null
  },
  message: '',
  toEdit: false
}

var db = {
  fetch: function () {
    var data = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ||
        '{}')
    data = Object.assign(schemaData, data)
    data.problems.forEach(function (problem, index) {
      problem.id = index
    })
    return data
  },
  save: function (data) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  },
  put: function (att, val) {
    let cur = db.fetch()
    cur[att] = val
    db.save(cur)
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<App is="app"
    v-bind:problems="problems"
    v-bind:user="user"
    v-bind:newProblem="newProblem"
    v-bind:message="message"
    v-bind:toEdit="toEdit"
    v-on:addProblem="addProblem"
    v-on:editProblem="editProblem"
    v-on:removeProblem="removeProblem"
    v-on:changeUser="changeUser"
    v-on:doneEdit="doneEdit"
    />`,
  components: { App },
  data: db.fetch(),
  methods: {
    addProblem: function () {
      let name = this.newProblem.name || ''
      let url = this.newProblem.url || ''
      let ok = true
      if (name.length === 0) {
        this.message = 'Please provide a name before add'
        ok = false
      }
      if (url.length === 0) {
        if (this.message.length > 0) this.message += '. '
        this.message += 'Please provide a url'
        ok = false
      }
      if (!ok) {
        return
      }
      this.problems.push(this.newProblem)
      this.newProblem = window.Object.assign({}, schemaData.newProblem)
      this.message = ''
      db.put('problems', this.problems)
    },
    removeProblem: function (problem, index) {
      this.problems.splice(index, 1)
      db.put('problems', this.problems)
    },
    editProblem: function (problem, index) {
      this.newProblem = this.problems[index]
      this.toEdit = true
    },
    doneEdit: function () {
      this.toEdit = false
      this.newProblem = window.Object.assign({}, schemaData.newProblem)
      db.put('problems', this.problems)
    },
    changeUser: function (newUser) {
      db.put('user', newUser)
    }
  }
})
