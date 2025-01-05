<template>
    <div class="about-container">
        <div class="about-container__left-part">
            <television></television>
        </div>
        
        <div class="about-container__right-part">
            <about-description
                about-tag="Hi! I'm a student developper"
                about-desc="
                    Software engineering student at École de Technologie Supérieure, Montréal QC. 
                    Passionate about programming, new technologies and social networks. 
                    Innovation and creativity drive my daily life.
                "
                :social-medias="[
                    { name: 'in/romain-boiret', link: 'https://www.linkedin.com/in/romain-boiret-54b0ab286/', icon: 'bx bxl-linkedin' },
                    { name: 'github.com/RomainBoiret', link: 'https://github.com/RomainBoiret', icon: 'bx bxl-github' },
                    { name: '@roma.brt', link: 'https://www.instagram.com/roma.brt/?hl=fr', icon: 'bx bxl-instagram-alt' },
                    { name: 'romain.boiret.1@ens.etsmtl.ca', link: 'mailto:romain.boiret.1@ens.etsmtl.ca', icon: 'bx bxl-gmail' },
                ]"
            ></about-description>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({

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
