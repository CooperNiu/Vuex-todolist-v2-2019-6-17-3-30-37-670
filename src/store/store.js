import Vue from 'vue'
import Vuex from 'vuex'
import { STATE, MUTATIONS, GETTERS, ACTIONS } from './function-name'
import { server } from '@/api/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [STATE.ALL_TODO_ITEMS]: [],
    [STATE.ITEMS_FILTER]: (allTodoItems) => Array.from(allTodoItems)
  },
  mutations: {
    [MUTATIONS.SET_TODO_ITEM] (state, newItem) {
      const index = state.allTodoItems.findIndex(item => item.id === newItem.id)
      Vue.set(state[STATE.ALL_TODO_ITEMS], index, newItem)
    },
    [MUTATIONS.ADD_TODO_ITEM] (state, item) {
      Vue.set(state[STATE.ALL_TODO_ITEMS], state.allTodoItems.length, item)
    },
    [MUTATIONS.SET_ITEMS_FILTER] (state, filter) {
      state[STATE.ITEMS_FILTER] = filter
    }
  },
  getters: {
    [GETTERS.TODO_ITEMS] (state) {
      return state[STATE.ITEMS_FILTER](state[STATE.ALL_TODO_ITEMS])
    }
  },
  actions: {
    [ACTIONS.TODO_ITEMS_FROM_NET] ({ state }) {
      server('todos')
        .then(data => {
          state[STATE.ALL_TODO_ITEMS] = data
        })
        .catch(error => {
          console.error(error)
        })
    },
    [ACTIONS.ADD_TODO_ITEM_TO_NET] ({ dispatch }, payload) {
      server({ url: 'todos', method: 'POST', data: payload })
        .then(data => {
          dispatch(ACTIONS.TODO_ITEMS_FROM_NET)
        })
        .catch(error => {
          console.error(error)
        })
    },
    [ACTIONS.UPDATE_TODO_ITEM_TO_NET] ({ dispatch }, payload) {
      server({ url: `todos/${payload.id}`, method: 'PUT', data: payload })
        .then(data => {
          dispatch(ACTIONS.TODO_ITEMS_FROM_NET)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
})
