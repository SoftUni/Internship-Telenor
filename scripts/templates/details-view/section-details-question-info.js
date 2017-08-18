define(() => {
    return (videoId, text) => `
        <div class="player-wrapper">
            <iframe id="ytplayer"
                    src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0" 
                    allowfullscreen></iframe>
        </div>
        <div class="description-wrapper">
            <p class="question-text">
                ${text}
            </p>
        </div>`
})