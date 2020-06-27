import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function emptyCourse()  {
  return{
    id: null,
      data: {
      name: '',
      img: '',
      description:'',
      //example: [],
      }

  }
                
                  }

export default new Vuex.Store({
  state: {
    courses:[],
    currentCourse: emptyCourse(),
    //currentUser: getFromStorage('user') || undefined,
  },
  mutations: {
    GET_COURSES(state, data){state.courses = data}
  },
  actions: {
    getCourses({commit}) {
      axios.get('https://us-central1-livecoding-156a5.cloudfunctions.net/courses/courses',{ headers: {"Content-type": "text/plain"}})
      .then(response => {
        commit('GET_COURSES', response.data)
        console.log(response.data)
      })
    }
  },
  modules: {
  }
})
