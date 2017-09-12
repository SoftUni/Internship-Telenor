define(() => {
  return () => {
      var videoData
      var timeInterval
      var player

      function onYouTubeIframeAPIReady(internVideoData) {
          // Hides telenor thumb image to display iframe player
          $('.img-thump-wrapper').hide()

          updatePlayerData(internVideoData)

          player = new YT.Player('ytplayer', {
              width: 0,
              height: 0,
              videoId: videoData.videoId,
              playerVars: {
                  'rel': 0,
                  'controls': 0,
                  'showinfo': 0
              },
              events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
              }
          });
      }

      function onPlayerReady() {
          // console.log('Player is ready')
          loadQuestionVideoClip()
      }

      function onPlayerStateChange(event) {
          if (event.data === YT.PlayerState.PLAYING) {
              setTimeInterval()
          } else if (event.data === YT.PlayerState.ENDED) {
              changeFromPlayerToThumpImg()
              clearTimeInterval()
          } else if (event.data === YT.PlayerState.UNSTARTED) {
              // console.log('Video is not started!')
              setTimeInterval()

              clearAllPreviousIntervals()
                // .then(result => console.log(`Cleared previous intervals: ${result}`))
          } else {
              clearTimeInterval()
          }
      }

      function loadQuestionVideoClip() {
          let currentClipInfo = videoData.questionsInfo[videoData.currentQuestionId]
          player.seekTo(currentClipInfo.start, true)
      }

      function setTimeInterval() {
          timeInterval = setInterval(function() {
              let videoCurrentTimeSeconds = Math.trunc(player.getCurrentTime())
              let currentClipInfo = videoData.questionsInfo[videoData.currentQuestionId]
              // console.log(`QuestionId: ${videoData.currentQuestionId}, seconds: ${videoCurrentTimeSeconds}`)

              if (videoCurrentTimeSeconds >= currentClipInfo.end) {
                  // console.log('Change to next question!')
                  changeToNextQuestion(videoData.currentQuestionId + 1)
              }
          }, 1000)
      }

      function clearTimeInterval() {
          // console.log(`Interval Id: ${timeInterval}`)
          clearInterval(timeInterval)
      }

      function clearAllPreviousIntervals() {
          return new Promise((resolve, reject) => {
              let arr = []
              for (let i = 0; i < timeInterval; i++) {
                  arr.push(i)
                  clearInterval(i)
              }
              resolve(arr.join(","))
          })
      }

      function changeToNextQuestion(nextQuestionIndex) {
          $('.question').eq(nextQuestionIndex).trigger('click', ["FakeClick"])
      }

      function updatePlayerData(newVideoData) {
          videoData = newVideoData
      }

      function changeFromPlayerToThumpImg() {
          $('.question').removeClass('active')
          $('#ytplayer').hide()
          $('.img-thump-wrapper').show()
          $(window).trigger('resize')
      }

      return {
          readyPlayer: onYouTubeIframeAPIReady,
          updatePlayerData,
          loadQuestionVideoClip,
          clearTimeInterval
      }
  }
})
