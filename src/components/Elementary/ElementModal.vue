<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div @click="close"
       class="z-50 bg-slate-800 bg-opacity-50 justify-center
       items-center absolute top-0 right-0 bottom-0 left-0"
       :class="{ hidden: !this.opened, flex: this.opened }"
  >

    <div
         class="bg-white px-16 py-14 rounded-md text-center">
      <h1 class="text-xl mb-4 font-bold text-slate-500">{{text}}</h1>
    </div>
  </div>
</template>

<script >

export default {
  data() {
    return {
    };
  },
  props: ['text', 'opened'],
  methods: {
    close(){
      this.$emit('close');
    }
  },
}


</script>