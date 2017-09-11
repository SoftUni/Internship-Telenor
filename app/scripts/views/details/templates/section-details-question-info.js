define(() => {
    return text => `
            <div class="player-wrapper">
                <div class="img-thump-wrapper">
                    <img id="thump-telenor-img" 
                         src="./assets/images/telenor_thump.jpg" 
                         alt="Теленор image" />
                </div>
                <div id="ytplayer"></div>
            </div>
            <div class="description-wrapper">
                <p class="question-text">
                    ${text}
                </p>
            </div>`
})