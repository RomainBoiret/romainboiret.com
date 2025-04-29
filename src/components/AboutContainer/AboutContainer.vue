<template>
    <div class="about-container">
        <div class="about-container__left-part">
            <television
                :image-link="imageLink"
                :image-alt="imageAlt"
            ></television>
        </div>
        
        <div class="about-container__right-part">
            <about-description
                :about-tag="aboutTag"
                :about-desc="aboutDesc"
                :social-medias="socialMedias"
            ></about-description>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    aboutTag: {
        type: String,
        default: '',
    },
    aboutDesc: {
        type: String,
        default: '',
    },
    socialMedias:  {
        type: Array,
        default: () => [],
    },
    imageLink: {
        type: String,
        default: ''
    },
    imageAlt: {
        type: String,
        default: ''
    },
});
</script>

<style lang="scss">
.about-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 140px 40px;

    @media (max-width: 1200px) {
        height: auto;
        flex-direction: column;
        gap: 20px;
        margin-top: 0px;
        padding: 30px 0px;
    }

    .about-container__left-part {
        width: 400px;
        height: 100%;

        @media (max-width: 1200px) {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
        }
    }

    .about-container__right-part {
        width: 70%;
        height: 100%;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }
}
</style>
