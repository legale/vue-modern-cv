<template>
    <h2 font-family="Lora" class="block-title">{{text}}</h2>
</template>
<script>
export default {
    props: ['text'],
};
</script>
<style>
.block-title {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 0.6728em;
    text-align: center;
    border-radius: 2px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: rgba(88, 106, 106, 0.07);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 13pt;
    line-height: 25px;
    padding-top: 0.35496em;
    color: rgb(88, 106, 106);
}
</style>