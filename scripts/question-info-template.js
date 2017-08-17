function questionInfoTemplate(videoId, text) {
    return `
    <div class="player-wrapper">
        <iframe id="ytplayer" type="text/html" width="400" height="240"
                src="https://www.youtube.com/embed/${videoId}"
                frameborder="0"></iframe>
    </div>
    <!--<div id="player"></div>-->
    <p class="question-text">
        ${text}
    </p>`
}

define({generate: questionInfoTemplate})