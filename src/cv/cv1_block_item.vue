<template>
    <div class="block-item">
        <div class="block-item-left">
            <span class="grade">{{this.grade}}</span>&nbsp;
            <span>{{this.left}}</span>
        </div>
        <div class="block-item-right">
            {{this.right}}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    grade: { type: String, },
    left: { type: String, },
    right: { type: String, },
  }
}
</script>

<style>
.block-item {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 10.5pt;
    line-height: 20px;
    padding: 0;
}

.grade {
    font-weight: bold;
    display: inline-block;
    white-space: pre-wrap;
}

.block-item-left {
    display: block;
    width: 75%;
}

.block-item-right {
    display: block;
    width: 25%;
    padding-left: 1em;
    text-align: right;
}
</style>