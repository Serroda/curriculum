export const useMouseTransformAnimation = () => {

    let container: HTMLDivElement | null = null;
    let inner: HTMLDivElement | null = null;
    let counter = 5;

    const mouse = {
        x: 0,
        y: 0,
        originX: 0,
        originY: 0
    }

    function init(_container: HTMLDivElement, _inner: HTMLDivElement) {
        container = _container;
        inner = _inner;
        setOrigin();
        setTransition();
    }

    function setOrigin() {
        if (!container) return;
        mouse.originX = container.offsetLeft + Math.floor(container.offsetWidth / 2)
        mouse.originY = container.offsetTop + Math.floor(container.offsetHeight / 2)
    }

    function setTransition() {
        if (!inner) return;
        inner.style.transition = "transform .4s"
    }

    function updatePostion(event: MouseEvent | TouchEvent) {
        if (event instanceof MouseEvent) {
            mouse.x = event.x - mouse.originX
            mouse.y = (event.y - mouse.originY) * -1
        } else {
            mouse.x = event.touches[0].clientX - mouse.originX
            mouse.y = (event.touches[0].clientY - mouse.originY) * -1
        }
    }

    function setRotation() {
        if (!inner) return;
        const valueX = (mouse.y / inner.offsetHeight / 2).toFixed(2);
        const valueY = (mouse.x / inner.offsetWidth / 2).toFixed(2);
        inner.style.transform = "rotateX(" + valueX + "deg) rotateY(" + valueY + "deg)";
    }


    function updateAnimation(event: MouseEvent | TouchEvent) {
        if (counter !== 5) {
            counter++;
            return;
        }
        updatePostion(event);
        setRotation()
        counter = 0;
    }

    function removeRotation() {
        if (!inner) return;
        inner.style.transform = "";
        counter = 5;
    }

    function setTriggers() {
        if (!inner) return;
        inner.onmousemove = updateAnimation;
        inner.ontouchmove = updateAnimation;
        inner.onmouseleave = removeRotation;
        inner.ontouchend = removeRotation;
        window.onresize = () => {
            setOrigin();
        }
    }

    function removeTriggers() {
        if (!inner) return;
        inner.onmousemove = null;
        inner.ontouchmove = null;
        inner.onmouseleave = null;
        inner.ontouchend = null;
        window.onresize = null;
    }

    return {
        init,
        setTriggers,
        removeTriggers
    }
}
