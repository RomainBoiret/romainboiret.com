<template>
    <div 
        v-for="utilities in utilitiesProjects"
        class="utilities-project"
    >
        <div class="utilities-project__container">
            <h3 class="utilities-project__title">{{ utilities.title }}</h3>
            <a
                class="utilities-project__link"
                :href="utilities.link"
                target="_blank"
            >
                <i class="bx bxl-github"></i>
            </a>
        </div>

        <p class="utilities-project__description">
            {{ utilities.description }}
        </p>

        <ul class="utilities-project__toolslist">
            <li class="utilities-project__tool"
                v-for="tool in utilities.toolList"
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
    utilitiesProjects: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss">
.utilities-project {
    width: 100%;
    height: 250px;
    background: #e3e3e3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .utilities-project__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .utilities-project__title {
        font-size: 25px;
        font-weight: 700;
    }

    .utilities-project__link {
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

    .utilities-project__link:focus,
    .utilities-project__link:active {
        border-bottom: none;
    }

    .utilities-project__description {
        font-size: 16px;
        font-weight: 400;
    }

    .utilities-project__toolslist {
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .utilities-project__tool {
        padding: 0px 10px;
        background: #b8cfbb;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
    }
}
</style>