<template>
  <div id="home">
    <todo-header></todo-header>
    <create-item-box></create-item-box>
    <ol>
      <todo-item
        v-for="item in todoItems"
        :key="item.id"
        :value="item">
      </todo-item>
    </ol>
    <filter-button-container></filter-button-container>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import CreateItemBox from '@/components/CreateItemBox.vue'
import TodoItem from '@/components/TodoItem.vue'
import FilterButtonContainer from '@/components/FilterButtonContainer.vue'
import { MUTATIONS, GETTERS, ACTIONS } from '@/store/function-name'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'v-home',
  components: { TodoHeader, CreateItemBox, TodoItem, FilterButtonContainer },
  computed: {
    ...mapGetters({
      todoItems: GETTERS.TODO_ITEMS
    })
  },
  mounted () {
    this.loadAllItemsFromNet()
  },
  methods: {
    ...mapMutations({
      addTodoItemGlobal: MUTATIONS.ADD_TODO_ITEM
    }),
    ...mapActions({
      loadAllItemsFromNet: ACTIONS.TODO_ITEMS_FROM_NET
    })
  }
}
</script>
