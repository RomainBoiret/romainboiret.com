<template>
    <div class="skill-icons" v-for="icon in iconSkills" :key="icon.alt">
        <img :src="icon.src" :alt="icon.alt" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    iconSkills: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss">
.skill-icons {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 110px;
        height: 110px;
        background: #f6f5f1;
        border-radius: 50%;
        padding: 20px;
        overflow: visible;

        @media (max-width: 768px) {
            width: 90px;
            height: 90px;
            padding: 15px;
        }
    }
}

</style>
