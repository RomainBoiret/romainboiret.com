<template>
    <div class="television" ref="television">
        <div 
            class="television__knob" 
            @wheel.prevent="adjustThickness" 
            :style="{ transform: `rotate(${knobRotation}deg)` }" 
            aria-label="Thickness"
        >
        </div>
    
        <div class="television__btn-container">
            <button 
                v-for="(color, index) in colors" 
                :key="index"
                class="television__btn"
                :style="{ background: color }"
                @click="setColor(color)"
                :aria-label="'Couleur ' + color"
            >
            </button>

            <button 
                class="television__btn erase" 
                @click="clearCanvas" 
                aria-label="Clear"
            >
                ⨉
            </button>
        </div>
    
        <div class="television__screen">
            <img
                :src="imageLink"
                :alt="imageAlt"
                class="television__img"
                ref="image"
            >
            <canvas ref="canvas" class="drawing-canvas"></canvas>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    imageLink: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
});

const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];

const canvas = ref(null);
const image = ref(null);
const drawing = ref(false);
const brushColor = ref(colors[0]);
const brushThickness = ref(2.5);
const knobRotation = ref(0);
const ctx = ref(null);

const setColor = (color) => {
    brushColor.value = color;
};

const adjustThickness = (event) => {
    const delta = event.deltaY < 0 ? 1 : -1;
    const newThickness = brushThickness.value + delta;

    if (newThickness >= 1 && newThickness <= 20) {
        brushThickness.value = newThickness;
        knobRotation.value += delta * 10;
    }
};

const startDrawing = (e) => {
    drawing.value = true;
    draw(e);
};

const endDrawing = () => {
    drawing.value = false;
    if (ctx.value) ctx.value.beginPath();
};

const draw = (e) => {
    if (!drawing.value || !ctx.value) return;

    const rect = canvas.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.value.lineWidth = brushThickness.value;
    ctx.value.lineCap = 'round';
    ctx.value.lineJoin = 'round';
    ctx.value.strokeStyle = brushColor.value;

    ctx.value.lineTo(x, y);
    ctx.value.stroke();
    ctx.value.beginPath();
    ctx.value.moveTo(x, y);
};

const clearCanvas = () => {
    if (ctx.value) {
        ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
    }
};

onMounted(() => {
    const c = canvas.value;
    const img = image.value;

    c.width = img.clientWidth;
    c.height = img.clientHeight;

    ctx.value = c.getContext('2d');
    ctx.value.imageSmoothingEnabled = true;

    c.addEventListener('mousedown', startDrawing);
    c.addEventListener('mouseup', endDrawing);
    c.addEventListener('mouseout', endDrawing);
    c.addEventListener('mousemove', draw);
});
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
    overflow: hidden;

    .television__btn-container {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 12px;
        align-items: center;
        max-width: 80%;
    }

    .television__btn {
        width: 12px;
        height: 12px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;

        &.erase {
            width: 18px;
            height: 18px;
            font-size: 12px;
            background: #e0e0e0;
            color: #333;
            border-radius: 4px;
        }
    }

    .television__knob {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        background: #444;
        border: 2px solid #000;
        border-radius: 50%;
        cursor: ns-resize;
        transition: transform 0.2s ease;
    }

    .television__screen {
        position: relative;
        width: 100%;
        height: 90%;
        background: #fdfaf9;
        border: 2px solid #000;
        border-radius: 15px;
        overflow: hidden;
    }

    .television__img {
        width: 100%;
        height: 110%;
        display: block;
    }

    .drawing-canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        pointer-events: auto;
    }
}
</style>
