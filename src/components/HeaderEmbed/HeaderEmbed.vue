<template>
    <div class="header-embed">
        <logo
            :logo-tag="logoText" 
            :logo-link="logoLinkTag"
        ></logo>

        <header-navbar
            :links="linksTab"
            :copyBtn="copyBtnTab"
        ></header-navbar>
    </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    logoText: {
        type: String,
        default: ''
    },
    logoLinkTag: {
        type: String,
        default: ''
    },
    linksTab: {
        type: Array,
        default: () => []
    },
    copyBtnTab: {
        type: Object,
        default: () => ({})
    },
});
</script>

<style lang="scss">
.header-embed {
    position: fixed;
    top: 0;
    background: #fdfaf9;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 160px;
    z-index: 1000;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
}
</style>
