<template>
    <section 
        class="default-section" 
        :style="{ 
            backgroundColor: backgroundColor, 
            height: height, 
            padding: padding 
        }"
    >
        <div class="default-section__container">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    backgroundColor: {
        type: String,
        default: '',
    },
    height: {
        type: String,
        default: '100vh',
    },
    padding: {
        type: String,
        default: '40px 20px',
    },
});
</script>

<style lang="scss">
.default-section {
    position: relative;
    width: 100%;
}
</style>
