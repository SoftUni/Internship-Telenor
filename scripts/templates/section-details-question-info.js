define(() => {
    return (videoId, text) => `
        <div class="player-wrapper">
            <iframe id="ytplayer" width="400" height="240"
                    src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0"></iframe>
        </div>
        <div class="description-wrapper">
            <p class="question-text">
                ${text}
            </p>
        </div>`
})