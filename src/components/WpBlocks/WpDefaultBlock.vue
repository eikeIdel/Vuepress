<template>
    <div v-if="props.content.blockName" :class="props.content.blockName" class="default-block-render"
        v-html="props.content.innerHTML" />
</template>

<script setup>
const props = defineProps({ content: Object })
console.log(props.content.innerHTML);
</script>

<style lang=" scss" scoped>
</style>