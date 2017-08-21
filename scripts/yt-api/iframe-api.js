let player, listId;

define({
	init: () => {
		let tag = document.createElement('script')
		tag.src = 'https://www.youtube.com/iframe_api'

		let firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
	},
	changeVideo: index => {
		player.playVideoAt(index)
	}
})


function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		events: {
			onReady: playerReadyListener,
			onStateChange: playNextVideo
		}
	})
	console.log(player)
	player.cuePlaylist({
		playlist: listId,
		listType: 'playlist',
		index: 0
	})
}

function playerReadyListener(e) {
	e.target.playVideo()
}

function playNextVideo(e) {
	if (e.data === 0) {
		player.nextVideo();
	}
}

