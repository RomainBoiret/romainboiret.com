<template>
    <div class="about-description">
        <h3 v-if="aboutTag" class="about-description__title">
            {{ aboutTag }}
        </h3>

        <p v-if="aboutDesc" class="about-description__desc">
            {{ aboutDesc }}
        </p>

        <ul class="about-description__social-media">
            <li class="about-description__media" 
               v-for="media in socialMedias" 
               :key="media.name" 
            >
                <i :class="media.icon"></i>
                <a 
                    class="about-description__link" 
                    :href="media.link" 
                    target="_blank"
                >
                    {{ media.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    aboutTag: {
        type: String,
        default: ''
    },
    aboutDesc: {
        type: String,
        default: ''
    },
    socialMedias: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang="scss">
.about-description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding: 10px;

    @media (max-width: 768px) {
        padding: 0px;
    }

    .about-description__title {
        color: #000;
        font-size: 22px;
        font-weight: 700;
    }

    .about-description__desc {
        color: #000;
        font-size: 18px;
        font-weight: 400;
    }

    .about-description__social-media {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 230px 10px;
        grid-template-rows: 1fr 1fr;
        gap: 20px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            gap: 15px;
        }
    }

    .about-description__media {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .about-description__link {
        color: #000;
        font-size: 18px;
        font-weight: 400;
    }

    .about-description__link:focus,
    .about-description__link:hover {
        text-decoration: 3px #588157 underline;
    }

    .about-description__media i {
        color: #000;
        font-size: 25px;
        background: #a4caac;
        border-radius: 50px;
        padding: 10px;
        transition: .2s;
    }
}
</style>
