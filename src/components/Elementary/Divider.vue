<template>
    <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
    >
        <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
        >
        <polygon
            class="fill-current"
            points="0,100 1280,0 2560,100"
            :style="{color: color }"
        ></polygon>
        </svg>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    color: {
        type: String,
        default: "#fff"
    }
  }
}
</script>