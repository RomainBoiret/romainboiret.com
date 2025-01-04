<template>
    <div class="name-part">
        <span class="name-part__first-name">
            <template v-for="(item, index) in processedFirstName" :key="index">
                <eye-follow 
                    v-if="item.char.toLowerCase() === 'o'" 
                />
                <span v-else :style="{ color: '#588157' }">
                    {{ item.char }}
                </span>
            </template>
        </span>

        <span class="name-part__last-name">
            <template v-for="(item, index) in processedLastName" :key="index">
                <eye-follow 
                    v-if="item.char.toLowerCase() === 'o'" 
                />
                <span v-else :style="{ color: '#588157' }">
                    {{ item.char }}
                </span>
            </template>
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
});

const processedFirstName = props.firstName.split('').map(char => ({ char }));
const processedLastName = props.lastName.split('').map(char => ({ char }));
</script>

<style lang="scss">
.name-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .name-part__first-name,
    .name-part__last-name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 200px;
        font-weight: 800;
        user-select: none;
        margin: -2% 0;

        @media (max-width: 1200px) { 
            font-size: 150px;
        }

        @media (max-width: 768px) {
            font-size: 72px;
        }
    }

    .name-part__last-name {
        margin-left: 35%;

        @media (max-width: 768px) {
            margin-left: 20%;
        }
    }
}
</style>
