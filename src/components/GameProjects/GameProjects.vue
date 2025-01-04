<template>
    <div 
        v-for="game in gameProjects"
        class="game-project"
    >
        <div class="game-project__header">
            <h3 class="game-project__title">{{ game.title }}</h3>
            <a
                class="game-project__link"
                :href="game.link"
                target="_blank"
            >
                <i class="bx bxl-github"></i>
            </a>
        </div>

        <p class="game-project__description">
            {{ game.description }}
        </p>

        <ul class="game-project__toolslist">
            <li class="game-project__tool"
                v-for="tool in game.toolList"
                :key="tool"
            >
                {{ tool }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    gameProjects: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss">
.game-project {
    width: 100%;
    height: 250px;
    background: #e3e3e3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .game-project__header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .game-project__title {
        font-size: 25px;
        font-weight: 700;
    }

    .game-project__link {
        width: 80px;
        height: 50px;
        color: #ffffff;
        font-size: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #8bb090;
        border-bottom: 4px solid #6e8a71;
        border-radius: 10px;
        transition: .1s;
        cursor: pointer;
    }

    .game-project__link:focus,
    .game-project__link:active {
        border-bottom: none;
    }

    .game-project__description {
        font-size: 16px;
        font-weight: 400;
    }

    .game-project__toolslist {
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .game-project__tool {
        padding: 0px 10px;
        background: #b8cfbb;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
    }
}
</style>
