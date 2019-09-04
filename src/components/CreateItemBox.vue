<template>
  <div>
    <input id="inputBox" type="text" v-model="inputText"/>
    <button id="btnAdd" @click="submitText">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ACTIONS } from '@/store/function-name'

export default {
  name: 'create-item-box',
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    ...mapActions({
      addTodoItem: ACTIONS.ADD_TODO_ITEM_TO_NET
    }),
    submitText () {
      const newItem = {
        id: new Date().getTime(),
        text: this.inputText,
        isCheck: false
      }
      this.addTodoItem(newItem)
      this.inputText = ''
    }
  }
}
</script>
