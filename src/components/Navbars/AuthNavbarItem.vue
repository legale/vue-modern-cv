<template>
<li class="flex items-center">
<a
    class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    :href="to"
    target="_blank"
>
    <i
    class=" lg:text-slate-200 text-slate-400 fab text-lg leading-lg"></i>
    <span class="lg:hidden inline-block ml-2">
    <slot></slot>
    </span>
</a>
</li>
</template>

<script>
export default {
  props: ['to','class'],
}
</script>