import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 0,
        name: 'note 1',
        todoList: [
          {
            id: 0,
            text: 'То'
          },
          {
            id: 1,
            text: 'Се'
          },
          {
            id: 2,
            text: 'Пятое'
          },
          {
            id: 3,
            text: 'Десятое'
          },
        ]
      },
      {
        id: 1,
        name: 'note 2',
        todoList: [
          {
            id: 0,
            text: 'То'
          },
          {
            id: 1,
            text: 'Се'
          },
          {
            id: 2,
            text: 'Пятое'
          },
          {
            id: 3,
            text: 'Десятое'
          },
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    allNotes(state){
      return state.notes
    },
    noteById: state => id =>{
      return state.notes.find(note => note.id === parseInt(id))
    }
  }
})
