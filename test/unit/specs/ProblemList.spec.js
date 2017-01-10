import Vue from 'vue'
import ProblemList from 'src/components/ProblemList'

describe('ProblemList.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ProblemList)
    })
    expect(vm.$el.querySelector('.problem-list'))
  })
})
