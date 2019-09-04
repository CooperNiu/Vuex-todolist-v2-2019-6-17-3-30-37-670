<template>
  <button :class="['btn-filter', { selected: selected }]" v-on="listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'filter-button',
  props: {
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    listeners: function () {
      return Object.assign({}, this.$listeners)
    }
  }
}
</script>
