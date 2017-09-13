define(() => {
    return () => new Promise(() => {
        let currentIntervalId = setInterval(() => {}, 1000)
        let startIntervalId = currentIntervalId > 100 ? currentIntervalId - 100 : 0;

        for (let i = startIntervalId; i <= currentIntervalId; i++) {
            clearInterval(i)
        }
    })
})