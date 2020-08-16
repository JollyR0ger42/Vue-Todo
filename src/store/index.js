import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistance from 'vuex-persist';

const vuexLocal = new VuexPersistance({storage: window.localStorage})

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
      }
    ]
  },
  mutations: {
    createNote(state, name){
      const id = state.notes[state.notes.length - 1].id + 1;
      const newNote = {name, id, todoList: []};
      state.notes.push(newNote)
    }
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
  },
  plugins:[vuexLocal.plugin]
})
