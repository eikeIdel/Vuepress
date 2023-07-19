<template>
    <component v-for="content in wpContent" :is="WpDefaultBlock" :content="content" class="">
    </component>
</template>

<script setup>
import { ref } from 'vue'
import WpDefaultBlock from './WpDefaultBlock.vue'

const props = defineProps({ wpContent: Array })

const wpBlocks = {
    WpDefaultBlock
}

</script>

<style lang="scss" scoped></style>