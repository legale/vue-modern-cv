<script>
export default {
    data() {
        return {
          form: {},
        }
    },
    props: {
        items: Array,
        buttonName: String,
    },
  methods: {
    createBlock() {
      this.$emit('create', this.form);
    },

  }
}
</script>

<template>

    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div v-for="item in items" v-bind:key="item.id">
                    <label class="text-gray-700 dark:text-gray-200">{{ item.label }}</label>
                    <input :type="item.type" :placeholder="item.placeholder" :name="item.name"
                           @input="this.form[item.name] = $event.target.value" :value="this.form[item.name]"
                        class="block w-full px-4 py-2 mt-2 text-gray-700
                         bg-white border border-gray-200 rounded-md dark:bg-gray-800
                          dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                           focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300
                            focus:outline-none focus:ring">
                </div>
            </div>
        </form>
      <div class="flex justify-end mt-6">
        <button @click="createBlock"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">{{ buttonName }}</button>
      </div>
    </section>

</template>