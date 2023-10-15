export const useIntersectionObserver = () => {

    const runtimeConfig = useRuntimeConfig()

    const apiOptions: IntersectionObserverInit = {
        threshold: runtimeConfig.public.intersectionObserverThreshold ? parseFloat(runtimeConfig.public.intersectionObserverThreshold) : 0
    }

    function setObserver(className: string) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entrie) => {
                entrie.target.classList.toggle("visible", entrie.isIntersecting)
            })
        }, apiOptions)

        document.querySelectorAll("." + className).forEach((element) => {
            observer.observe(element);
        })
    }

    return { setObserver }
}