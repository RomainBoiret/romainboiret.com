<template>
    <div class="skills-container">
        <skill-icons
            :iconSkills="iconList"
        ></skill-icons>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    iconList: {
        type: Array,
        default: () => [],
    }
});
</script>

<style lang="scss">  
.skills-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 80px 160px 0;
    margin-bottom: 70px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 40px 0px;
        margin-bottom: 20px;
    }
}
</style>
