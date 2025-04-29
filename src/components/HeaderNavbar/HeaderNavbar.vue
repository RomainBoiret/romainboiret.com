<template>
    <div class="header-navbar">
        <i v-if="!isMenuActive" class="bx bx-menu" id="menu-icon" @click="toggleMenu"></i>
        <i v-if="isMenuActive" class='bx bx-x' id="close-icon" @click="toggleMenu"></i>

        <nav class="header-navbar__navigation" :class="{ active: isMenuActive }">
            <a 
                v-for="(link, index) in links"
                class="header-navbar__link"
                :key="index" 
                :href="link.href"
            >
                {{ link.name }}
            </a>

            <button 
                v-if="copyBtn.tag" 
                class="header-navbar__copy-btn" 
                ref="copyButton" 
                @click="copyToClipboard"
            >
                {{ copyBtn.tag }}
            </button>

            <span
                v-if="copyBtn.description"
                class="header-navbar__copied-tag" 
                :class="{ show: showCopiedTag }"
                ref="copiedTag" 
            >
                {{ copyBtn.description }}
            </span>
            
            <span class="header-navbar__active-nav"></span>
        </nav>
    </div>
</template>
  
<script setup>
import { ref, defineProps, nextTick } from 'vue';

const props = defineProps({
    links: {
        type: Array,
        default: () => []
    },
    copyBtn: {
        type: Object,
        default: () => {}
    },
    colors: {
        type: Array,
        default: () => []
    },
});

const isMenuActive = ref(false);
const showCopiedTag = ref(false);

const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
};

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.copyBtn.email);

        nextTick(() => {
            const copiedTag = document.querySelector('.header-navbar__copied-tag');
            if (copiedTag) {
                showCopiedTag.value = true;

                setTimeout(() => {
                    showCopiedTag.value = false;
                }, 2500);
            }
        });
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
</script>

<style lang="scss">
.header-navbar {
    .header-navbar__navigation a,
    .header-navbar__navigation .header-navbar__copy-btn {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        font-weight: 600;
        user-select: none;
        background: none;
        border-radius: 60% 40% 58% 42% / 42% 48% 52% 58%;
        margin-left: 10px;
        padding: 10px;
        cursor: pointer;
        transition: 0.2s;
    }

    .header-navbar__navigation a:focus,
    .header-navbar__navigation a:hover,
    .header-navbar__navigation .header-navbar__copy-btn:focus,
    .header-navbar__navigation .header-navbar__copy-btn:hover {
        background: #84a98c;
    }

    .header-navbar__copied-tag {
        display: none;
        position: absolute;
        top: 80px;
        right: 70px;
        padding: 10px;
        border-radius: 10px;
        border-bottom: 4px solid #ffffff81;
        border-left: 4px solid #ffffff81;
        background: #84a98c;
        text-align: center;
        gap: 10px;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        transform: rotate(-10deg);

        @media (max-width: 768px) {
            top: 270px;
            right: 30px;
            padding: 5px;
            transform: rotate(0);
        }
    }

    .header-navbar__copied-tag.show {
        display: inline-block;
    }

    #menu-icon,
    #close-icon {
        color: #000;
        font-size: 36px;
        cursor: pointer;
        display: none;
    }

    @media (max-width: 768px) {
        #menu-icon,
        #close-icon {
            display: block;
        }

        .header-navbar__navigation {
            position: absolute;
            top: 79px;
            left: 0;
            width: 100%;
            height: auto;
            background: #ececec;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 15px 10px;
            z-index: 1;
            transform: translatex(100%);
            transition: transform 0.5s ease;
        }

        .header-navbar__navigation.active {
            transform: translatex(0%);
        }

        .header-navbar__navigation a,
        .header-navbar__navigation .header-navbar__copy-btn {
            display: block;
            margin-left: 6px;
            margin-top: 10px;
            font-size: 20px;
            font-weight: 500;
            color: #000;
            border-radius: 0;
            transition: transform 0.25s ease;
        }

        .header-navbar__navigation a:hover,
        .header-navbar__navigation .header-navbar__copy-btn:hover {
            background: none;
            text-decoration: 3px #588157 underline;
        }
    }
}
</style>
