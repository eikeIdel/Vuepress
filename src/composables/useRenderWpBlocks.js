import { ref } from 'vue'


export function useRenderWpBlocks() {
    const blocksHTML = ref('');

    function renderWpBlocks(blockArr) {
        blockArr.forEach((block) => {
            switch (block.blockName) {
                case null:
                    break;
                case 'core/heading':
                    blocksHTML.value += `${block.innerHTML}`;
                    break;
                // case 'core/gallery':

                //     break;
                // case 'core/paragraph':

                //     break;

                default:
                    blocksHTML.value += `${block.innerHTML}`;
                    break;
            }

        })
    }

    return { renderWpBlocks, blocksHTML }
}