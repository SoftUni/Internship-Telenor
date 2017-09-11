define(() => {
  return () => {
      var player;
      function onYouTubeIframeAPIReady(videoData) {
          $('.img-thump-wrapper').hide()
          player = new YT.Player('ytplayer', {
              width: 0,
              height: 0,
              videoId: videoData.videoId,
              playerVars: {
                  'rel': 0,
                  'controls': 0,
                  'showinfo': 0,
                  'autoplay': 1,
                  'start': videoData.videoInfo.start,
                  'end': videoData.videoInfo.end
              },
              events: {
                  'onStateChange': e => onPlayerStateChange(e, videoData)
              }
          });
      }

      function onPlayerStateChange(event, videoData) {
          let doesVideoEnded = event.data === YT.PlayerState.ENDED
          let isLastQuestion = videoData.currentQuestionId === videoData.lastQuestionId

          if (doesVideoEnded && isLastQuestion) {
              $('#ytplayer').hide()
              $('.img-thump-wrapper').show()
          } else if (doesVideoEnded) {
              changeToNextQuestion(videoData.currentQuestionId + 1)
          }
      }

      function changeToNextQuestion(nextQuestionIndex) {
          $('.question').eq(nextQuestionIndex).trigger('click')
      }

      return onYouTubeIframeAPIReady
  }
})
