<template>
    <div class="eye-follow" ref="eye">
        <div class="pupil" ref="pupil" @click="shrinkPupil"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const eye = ref(null);
const pupil = ref(null);

const movePupil = (event) => {
    if (!eye.value || !pupil.value) return;

    const eyeRect = eye.value.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = (event.clientX - eyeCenterX) / (eyeRect.width / 2);
    const deltaY = (event.clientY - eyeCenterY) / (eyeRect.height / 2);

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 0.7;
    const scale = Math.min(1, maxDistance / distance);

    const limitedX = deltaX * scale * 50;
    const limitedY = deltaY * scale * 50;

    pupil.value.style.transform = `translate(${limitedX}%, ${limitedY}%) translate(-50%, -50%)`;
};

const shrinkPupil = () => {
    if (pupil.value) {
        pupil.value.style.transform += ' scale(1.2)';

        setTimeout(() => {
            pupil.value.style.transform = pupil.value.style.transform.replace(' scale(1.2)', '');
        }, 150);
    }
};

onMounted(() => {
    document.addEventListener('mousemove', movePupil);
});

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', movePupil);
});
</script>

<style lang="scss">
.eye-follow {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #d6d6d6;
    position: relative;
    overflow: hidden;

    @media (max-width: 1200px) { 
        width: 130px;
        height: 130px;
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
    }

    .pupil {
        width: 125px;
        height: 125px;
        background: black;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease-out;

        @media (max-width: 1200px) { 
            width: 90px;
            height: 90px;
        }

        @media (max-width: 768px) {
            width: 50px;
            height: 50px;
        }
    }
}
</style>
