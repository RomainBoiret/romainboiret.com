<template>
    <h2 class="title">{{ titleTag }}</h2>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    titleTag: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss">
.title {
    color: #fff;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 5px;
}
</style>
