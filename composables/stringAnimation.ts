export const useStringAnimation = () => {
    const stringAnimated = ref("");

    const options = "0123456789ABCDEF"
    let lastResult = "";
    let iterations = 0;
    let delay = 0;


    function init(_lastResult: string, _iterations: number, _delay: number) {
        lastResult = _lastResult;
        iterations = _iterations;
        delay = _delay;
    }

    function getRandomChar() {
        const random = Math.floor(Math.random() * (options.length - 1))
        return options.split("")[random]
    }

    function addRandomString() {
        for (let i = 1; i <= lastResult.length; i++) {
            const char = getRandomChar();
            if (i % 9 === 0) {
                stringAnimated.value += " "
                continue;
            }
            stringAnimated.value += char
        }
    }

    async function wait(time: number) {
        return await new Promise((resolve) => {
            setTimeout(() => resolve(true), time)
        })
    }

    async function animate() {
        for (let x = 0; x < iterations; x++) {
            stringAnimated.value = ""
            addRandomString();
            await wait(delay);
        }
        stringAnimated.value = lastResult;
    }



    return {
        init,
        animate,
        stringAnimated
    }
}