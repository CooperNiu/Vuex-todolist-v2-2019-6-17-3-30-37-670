<template>
  <div id="btnFilterContainer">
      <filter-button
        v-for="(item, i) in filterButtons"
        :key="i"
        :selected="selectedBtnIndex === i"
        @click="setFilterBtnIndex(i)">{{ item.text }}</filter-button>
    </div>
</template>

<script>
import FilterButton from '@/components/FilterButton.vue'
import { MUTATIONS } from '@/store/function-name'
import { mapMutations } from 'vuex'

export default {
  name: 'filter-button-container',
  components: { FilterButton },
  data () {
    return {
      selectedBtnIndex: 0,
      filterButtons: [{
        text: 'All',
        filter (allItems) {
          return Array.from(allItems)
        }
      }, {
        text: 'Active',
        filter (allItems) {
          return allItems.filter(item => !item.isCheck)
        }
      }, {
        text: 'Complete',
        filter (allItems) {
          return allItems.filter(item => item.isCheck)
        }
      }]
    }
  },
  created () {
    this.setFilterBtnIndex(this.selectedBtnIndex)
  },
  methods: {
    ...mapMutations({
      setItemsFilter: MUTATIONS.SET_ITEMS_FILTER
    }),
    setFilterBtnIndex (selectedBtnIndex) {
      this.selectedBtnIndex = selectedBtnIndex
      this.setItemsFilter(this.filterButtons[this.selectedBtnIndex].filter)
    }
  }
}
</script>
