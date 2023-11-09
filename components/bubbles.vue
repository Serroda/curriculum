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
    transform: translateX(-300px);
}

.bubbles.visible {
   transition: transform 1s;
    transform: translateX(0px); 
}

.bubbles.visible .bubble.b2 {
    animation: grow .8s forwards;
}

.bubble {
    position: absolute;
    border-radius: 100%;
}

.bubbles .gradient {
    right: 60px;
    top: 20px;
}

.bubble.b1 {
    background: linear-gradient(231deg, hsl(var(--color-2)) -70.88%, transparent 80.23%);
    width: 500px;
    height: 500px;
    right: 300px;
}

.bubble.b2 {
    transform: scale(0);
    max-width: 400px;
    max-height: 400px;
    width: 400px;
    height: 400px;

    right: 150px;
    top: 200px;
    
    backdrop-filter: blur(7.5px);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: linear-gradient(231deg, hsl(var(--color-2)) -50%, transparent 101.27%);
}

@keyframes grow {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}
</style>