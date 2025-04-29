<template>
    <div class="logo" ref="logo">
        <a class="logo__tag"
           :href="logoLink"
           v-html="computedLetters"
           @mouseenter="animateLogo"
           @focus="animateLogo"
           tabindex="0">
        </a>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
    logoTag: {
        type: String,
        default: 'Portfolio.'
    },
    logoLink: {
        type: String,
        default: ''
    },
});

const logo = ref(null);

const computedLetters = computed(() => {
    return props.logoTag.split('').map(letter => `<span>${letter}</span>`).join('');
});

function animateLogo() {
    const logoElement = logo.value;
    if (logoElement) {
        const spans = logoElement.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.animation = `bounce 0.6s ease ${index * 0.1}s`;

            span.addEventListener('animationend', () => {
                span.style.animation = 'none';
                span.offsetHeight;
                span.style.animation = '';
            }, { once: true });
        });
    }
}
</script>

<style lang="scss">
.logo {
    .logo__tag {
        color: #000;
        font-size: 30px;
        font-weight: 700;
        user-select: none;
        cursor: pointer;
        outline: none;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .logo__tag span {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    .logo__tag:focus span {
        animation: bounce 0.6s ease forwards;
    }
}
</style>
