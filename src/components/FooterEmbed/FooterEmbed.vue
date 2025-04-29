<template>
    <footer class="footer-embed">
        <p class="footer-embed__text">{{ footerText }}</p>
        
        <a href="#" class="footer-embed__link">
            <i class='bx bx-up-arrow-alt'></i>
        </a>
    </footer>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    footerText: {
        type: String,
        default: ''
    },
});
</script>

<style lang="scss">
.footer-embed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 160px;
    background: #e5e5e5;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 20px 20px;
    }

    .footer-embed__text {
        font-size: 18px;

        @media (max-width: 768px) {
            margin-top: 20px;
            text-align: center;
        }
    }

    .footer-embed__link {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #6e8a71;
        border-bottom: 4px solid #3a553a;
        border-radius: 10px;
        transition: .1s;
        cursor: pointer;
    }

    .footer-embed__link i {
        color: #ffffff;
        font-size: 30px;
    }

    .footer-embed__link:focus,
    .footer-embed__link:hover {
        border-bottom: 6px solid #3a553a;
    }

    .footer-embed__link:active {
        border-bottom: none;
    }
}
</style>
