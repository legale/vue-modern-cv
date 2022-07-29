<template>
      <router-link
        :to="to"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
       >
      <slot></slot>
      </router-link>
</template>

<script>
export default {
  props: ['to'],
}
</script>