<template>
  <div v-on:click="toggle()" class="relative inline-block text-left">
    <div>
      <button type="button" :style="{color: textColor}" class="caret-transparent lg:hover:text-slate-200 text-slate-700
     px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold
    ">
        {{ name }}
      </button>
    </div>

    <div v-bind:class="{ hidden: !opened }"
         class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    }
  },
  props: {
    textColor: {type: String, default: "#fff"},
    name: {type: String, default: ""},
  },

  methods: {
    toggle: function () {
      if (!this.isActive) {
        document.addEventListener('click', this.clickOutside);
      }
      this.opened = !this.opened;
    },
    clickOutside: function (e) {
      if (!this._closest(this.$el, e.target)) {
        this.opened = false;
        document.removeEventListener('click', this.close_cb);
      }
    },
    /* Element.closest analog but with Element instead of css selector */
    _closest: function (_this, el) {
      if (_this === el) return el;
      if (!el.parentElement) return;
      return this._closest(_this, el.parentElement);
    }

  }
}

</script>