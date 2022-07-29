<template>
  <div v-for="(item, itemIndex) in items" :key="item.id">
    <form class="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <input class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
             :value="item.grade"
             @input="updateItem($event.target.value, itemIndex, 'grade')"

      >
      <input class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
             :value="item.left"
             @input="updateItem($event.target.value, itemIndex, 'left')"
      >
      <input class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
             :value="item.right"
             @input="updateItem($event.target.value, itemIndex, 'right')"
      >
    </form>
    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            @click="removeItem(itemIndex)">удалить</button>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    updateItem(itemValue, itemIndex, inputIndex) {
      this.$emit('update', itemValue, itemIndex, inputIndex);
    },
    removeItem(itemIndex) {
      this.$emit('remove', itemIndex);
      // console.log(this.$options.__file, itemIndex);
    },
  },
  emits: ['remove', 'update'],
}
</script>

<style scoped>

</style>