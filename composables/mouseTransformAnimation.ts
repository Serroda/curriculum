export const useMouseTransformAnimation = () => {

    const container: Ref<HTMLDivElement | null> = ref(null);
    const inner: Ref<HTMLDivElement | null> = ref(null);
    const counter = ref(5);

    const mouse = reactive({
        x: 0,
        y: 0,
        originX: 0,
        originY: 0
    })

    function init(_container: HTMLDivElement, _inner: HTMLDivElement) {
        container.value = _container;
        inner.value = _inner;
        setOrigin();
    }

    function setOrigin() {
        if (!container.value) return;
        mouse.originX = container.value.offsetLeft + Math.floor(container.value.offsetWidth / 2)
        mouse.originY = container.value.offsetTop + Math.floor(container.value.offsetHeight / 2)
    }

    function updatePostion(event: MouseEvent) {
        mouse.x = event.x - mouse.originX
        mouse.y = (event.y - mouse.originY) * -1
    }

    function setRotation() {
        if (!inner.value) return;
        const valueX = (mouse.y / inner.value.offsetHeight / 2).toFixed(2);
        const valueY = (mouse.x / inner.value.offsetWidth / 2).toFixed(2);
        inner.value.style.transform = "rotateX(" + valueX + "deg) rotateY(" + valueY + "deg)";
    }

    function removeRotation() {
        if (!inner.value) return;
        inner.value.style.transform = "";
    }

    function updateAnimation(event: MouseEvent) {
        if (counter.value !== 5) {
            counter.value++;
            return;
        }
        updatePostion(event);
        setRotation()
        counter.value = 0;
    }

    function setTriggers() {
        if (!inner.value) return;
        inner.value.onmousemove = updateAnimation;
        inner.value.onmouseleave = removeRotation;
    }

    function removeTriggers() {
        if (!inner.value) return;
        inner.value.onmousemove = null;
        inner.value.onmouseleave = null;
    }

    return {
        init,
        setTriggers,
        removeTriggers
    }
}
