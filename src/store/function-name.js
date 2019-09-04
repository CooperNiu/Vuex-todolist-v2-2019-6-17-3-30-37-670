const STATE = {
  ALL_TODO_ITEMS: 'allTodoItems',
  ITEMS_FILTER: 'itemsFilter'
}

const MUTATIONS = {
  SET_TODO_ITEM: 'setTodoItem',
  ADD_TODO_ITEM: 'addTodoItem',
  SET_ITEMS_FILTER: 'setItemsFilter'
}

const GETTERS = {
  TODO_ITEMS: 'todoItems'
}

const ACTIONS = {
  TODO_ITEMS_FROM_NET: 'todoItems',
  ADD_TODO_ITEM_TO_NET: 'addTodoItem',
  UPDATE_TODO_ITEM_TO_NET: 'updateTodoItem'
}

export {
  STATE,
  MUTATIONS,
  GETTERS,
  ACTIONS
}
