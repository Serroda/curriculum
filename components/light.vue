<template>
    <div class="light-container">
        <div class="environment-shadow top"></div>
        <div class="blur-container"></div>
        <div class="spotlight left"></div>
        <div class="spotlight right"></div>
        <div class="environment-shadow bottom"></div>
    </div>
</template>

<style scoped>
@keyframes fade {
    0% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}

.light-container {
    display: flex;
    padding-top: 40px;
    min-width: 400px;
    height: 700px;
    justify-content: center;
    position: relative;
    animation: fade 1.2s ease-out;
}

.spotlight {
    width: 100%;
    height: 100%;
}

.blur-container,
.environment-shadow {
    position: absolute;
}

.spotlight.left {
    background: conic-gradient(from 360deg at 50% 0%,
            var(--blue-3) 90deg,
            rgba(43, 144, 238, 0.75) 92deg,
            transparent 220deg);
}

.spotlight.right {
    background: conic-gradient(from 360deg at 50% 0%,
            transparent 140deg,
            rgba(43, 144, 238, 0.75) 268deg,
            var(--blue-3) 270deg);
}

.blur-container {
    bottom: -60px;
    width: 115%;
    height: 200px;
    background: var(--dark-blue-3);
    filter: blur(25px);
}

.environment-shadow {
    border-radius: 100%;

}

.environment-shadow.top {
    top: -100px;
    width: 50%;
    height: 10%;
    background: var(--blue-3);
    filter: blur(120px);
}

.environment-shadow.bottom {
    bottom: 40px;
    background: var(--dark-blue-1);
    filter: blur(100px);
    z-index: 1;
    width: 100%;
    height: 20%;
}
</style>