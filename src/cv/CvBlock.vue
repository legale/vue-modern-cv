<script>
import Cv1_block_title from './cv1_block_title.vue';
import Cv1_block_item from './cv1_block_item.vue';
import Cv1_spacer from './cv1_spacer.vue';
export default {
    props: ["blocks"],
    components: { Cv1_block_title, Cv1_block_item, Cv1_spacer }
};
</script>

<template>
    <div>
        <div v-for="block in blocks" v-bind:key="block.id" >
            <Cv1_block_title :text="block.key" />
            <div v-for="item in block.val" v-bind:key="item.id">
                <Cv1_block_item :grade="item.grade" :left="item.left" :right="item.right" />
                <Cv1_spacer />
            </div>
        </div>
    </div>
</template>