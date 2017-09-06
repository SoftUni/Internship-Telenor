define(() => {
  return () => {
      var player;
      function onYouTubeIframeAPIReady(internVideoIdsArr, currentQuestionIndex) {
          let playlistVideoIdsStr = internVideoIdsArr.join(',')

          player = new YT.Player('ytplayer', {
              playerVars: {
                  'playlist': playlistVideoIdsStr,
                  'rel': 0,
                  'controls': 0,
                  'showinfo': 0
              },
              events: {
                  'onStateChange': e => onPlayerStateChange(e, currentQuestionIndex)
              }
          });
      }

      function onPlayerStateChange(event, index) {
          if (event.data === YT.PlayerState.CUED) {
              player.playVideoAt(Number(index))
          }
          if (event.data === YT.PlayerState.ENDED) {
              changeToNextQuestion(player.getPlaylistIndex())
          }
      }

      function changeToNextQuestion(nextQuestionIndex) {
          $('.question').eq(nextQuestionIndex).trigger('click')
      }

      function changeQuestion(videoPlaylistIndex) {
          player.playVideoAt(Number(videoPlaylistIndex))
      }

      return { readyPlayer: onYouTubeIframeAPIReady, changeQuestion }
  }
})
