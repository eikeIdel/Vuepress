<template>
    <v-container>
        <v-col class="">
            <h1>{{ pageData.post_title }}</h1>
            <!-- <div class="page-content" v-html="blocksHTML"></div> -->
            <wp-content-render :wpContent="pageData.post_content" />
        </v-col>
    </v-container>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { useRenderWpBlocks } from '../composables/useRenderWpBlocks.js'
import WpContentRender from '../components/WpBlocks/WpContentRender'

const router = useRouter();
const currentPathObject = router.currentRoute.value;
const pageData = currentPathObject.matched[1].props.default;

const { renderWpBlocks, blocksHTML } = useRenderWpBlocks();

renderWpBlocks(pageData.post_content);

// console.log(blocksHTML.value);
</script>

<style lang="scss" scoped>
.wp-block-gallery {}
</style>../composables/useRenderWpBlock