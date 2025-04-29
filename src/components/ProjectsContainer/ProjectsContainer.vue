<template>
    <div class="projects-container">
        <div class="project-selector">
            <button class="project-selector__btn" @click="setActiveList('all')">All</button>
            <button class="project-selector__btn" @click="setActiveList('games')">Games</button>
            <button class="project-selector__btn" @click="setActiveList('utilities')">Utilities</button>
        </div>

        <div class="project-list-container">
            <game-projects
                v-if="activeList === 'all' || activeList === 'games'"
                :gameProjects="gameList"
            ></game-projects>

            <utilities-project
                v-if="activeList === 'all' || activeList === 'utilities'"
                :utilitiesProjects="utilitiesList"
            ></utilities-project>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    gameList: {
        type: Array,
        default: () => [],
    },
    utilitiesList: {
        type: Array,
        default: () => [],
    }
});

const activeList = ref('all');

const setActiveList = (list) => {
    activeList.value = list;
}
</script>

<style lang="scss">
.projects-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px 145px;

    @media (max-width: 768px) {
        padding: 40px 0px;
    }   

    .project-selector {
        width: auto;
        height: 80px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background: #f5f5f5;
        border-radius: 15px;
        padding: 20px 20px;

        @media (max-width: 768px) {
            width: 100%;
            height: 70px;
            padding: 10px 5px;
            gap: 10px;
        }   
    }

    .project-selector .project-selector__btn {
        width: 120px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #709775;
        border-bottom: 5px solid #5e7461;
        border-radius: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        user-select: none;
        transition: .1s;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 100px;
        }   
    }

    .project-selector .project-selector__btn:focus,
    .project-selector .project-selector__btn:hover {
        background: #78a07e;
        border-bottom: 7px solid #5e7461;
    }

    .project-selector .project-selector__btn:active {
        border-bottom: none;
    }

    .project-list-container {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
