import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistance from 'vuex-persist';

const vuexLocal = new VuexPersistance({storage: window.localStorage})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastNoteCreated: -1,
    notes: []
  },
  mutations: {
    createNote(state, title){
      const id = state.lastNoteCreated + 1;
      const newNote = {title, id, todoList: []};
      state.notes.push(newNote)
      state.lastNoteCreated = id
    },
    removeNote(state, id){
      state.notes = state.notes.filter(note => note.id !== id)
    },
    updateNote(state, updatedNote){
      let note = state.notes.find(note => note.id === updatedNote.id);
      Object.assign(note, updatedNote)
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
    },
    lastNoteCreated(state){
      return state.lastNoteCreated
    },
  },
  plugins:[vuexLocal.plugin]
})
