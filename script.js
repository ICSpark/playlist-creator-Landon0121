let playlist = []
function addSong() {
    let title = document.getElementById("songTitle").value;
    let artist = document.getElementById("artist").value;
    let duration = document.getElementById("duration").value;
    let Song = {
        songTitle: title,
        songArtist: artist,
        songDuration: duration,
    }
    if (title == '') {
        alert("Fill in the title box first.")
        return
    }
    if (artist == '') {
        alert("Fill in the artist box first.")
        return
    }
    if (duration == '') {
        alert("Fill in the duration box first.")
        return
    }
    playlist.push(Song);
    displayPlaylist()
    document.getElementById('songTitle').value = '';
    document.getElementById('artist').value = '';
    document.getElementById('duration').value = '';
}



//DO NOT EDIT BELOW THIS LINE

//This function updates the HTML with whatever's in the playlist array
function displayPlaylist() {
    let playlistDiv = document.getElementById('playlist');
    
    playlistDiv.innerHTML = '';
    
    playlist.forEach((song, index) => {
        let songCard = document.createElement('div');
        songCard.className = 'song-card';
    
        songCard.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.songTitle}</div>
                <div class="song-artist">${song.songArtist}</div>
            </div>
            <div class="duration">${song.songDuration}</div>
        `;
        
        playlistDiv.appendChild(songCard);
    });
}