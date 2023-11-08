<template>
    <div class="bubbles observing">
        <div class="gradient dark"></div>
        <div class="bubble b1"></div>
        <div class="bubble b2"></div>
    </div>
</template>

<style scoped>
.bubbles {
    position: relative;
    width: 50%;
    height: 650px;
    left: -700px;
}

.bubbles.visible {
    transition: left 1s;
    left: 0px;
}

.bubbles.visible .bubble.b2 {
    animation: grow .8s forwards;
}

.bubble {
    position: absolute;
    border-radius: 100%;
}

.bubbles .gradient {
    left: 270px;
    top: 20px;
}

.bubble.b1 {
    
    background: linear-gradient(231deg, hsl(var(--color-2)) -70.88%, transparent 80.23%);
    width: 500px;
    height: 500px;
}

.bubble.b2 {
    left: 250px;
    top: 200px;
    backdrop-filter: blur(7.5px);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: linear-gradient(231deg, hsl(var(--color-2)) -50%, transparent 101.27%);
}

@keyframes grow {
    from {
        width: 0px;
        height: 0px;
    }
    to {
        width: 400px;
        height: 400px;
    }
}
</style>