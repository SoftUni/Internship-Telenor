define(() => {
    return text => `
        <div class="player-wrapper">
            <iframe id="player" enablejsapi="true"></iframe>
        </div>
        <div class="description-wrapper">
            <p class="question-text">
                ${text}
            </p>
        </div>`
})