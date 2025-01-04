<template>
    <div class="television" ref="television">
        <div class="television__btn-container">
            <button class="television__btn-1"></button>
            <button class="television__btn-2"></button>
            <button class="television__btn-3"></button>
        </div>

        <div class="television__screen">
            <img src="../../images/profile.jpg" alt="Romain" class="television__img">
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

</script>

<style lang="scss">
.television {
    position: relative;
    width: 335px;
    height: 335px;
    background: #84a98c;
    border-radius: 20px;
    border-bottom: 5px solid #588157;
    border-right: 5px solid #588157;
    padding: 20px;

    .television__btn-container {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .television__btn-container button {
        width: 12px;
        height: 12px;
        border-radius: 50px;
        cursor: pointer;
    }

    .television__btn-1 {
        background: #f57c42;
    }

    .television__btn-2 {
        background: #2ecc71;
    }

    .television__btn-3 {
        background: #9b59b6;
    }

    .television__screen {
        width: 100%;
        height: 90%;
        background: #fff;
        border: 2px solid #000;
        border-radius: 15px;
        overflow: hidden;
    }

    .television__img {
        width: 100%;
        height: 110%;
    }
}
</style>
