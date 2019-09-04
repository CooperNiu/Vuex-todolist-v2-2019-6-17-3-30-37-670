<template>
  <li>
    <div>
      <input type="checkbox" :checked="value.isCheck" @change="onCheckChange($event.target.checked)" />
      <span
        :class="{ checked: value.isCheck }"
        :contenteditable="editable"
        @dblclick="setEditable(true)"
        @keypress.enter="onEnterPress"
        ref="text">{{ value.text }}</span>
      </div>
  </li>
</template>

<script>
import { ACTIONS } from '@/store/function-name'

export default {
  name: 'todo-item',
  props: {
    value: Object
  },
  data () {
    return {
      editable: false
    }
  },
  methods: {
    onCheckChange (isCheck) {
      this.updateTodoItem(this.value.text, isCheck)
    },
    setEditable (editable) {
      this.editable = editable
    },
    onEnterPress () {
      this.setEditable(false)
      this.updateTodoItem(this.$refs.text.innerText, this.value.isCheck)
    },
    updateTodoItem (text, isCheck) {
      const newValue = Object.assign({}, this.value, {
        text: text,
        isCheck: isCheck
      })
      this.$store.dispatch(ACTIONS.UPDATE_TODO_ITEM_TO_NET, newValue)
    }
  }
}
</script>
