function PlayMusic() {
    var audioFileInput = document.getElementById("audioFile");
    var audioPlayer = document.getElementById("audioPlayer");

    if (audioFileInput.files.length > 0) {
        var file = audioFileInput.files[0];

        var fileURL = URL.createObjectURL(file);

        audioPlayer.src = fileURL;

        audioPlayer.load();

        audioPlayer.play();
    } else {
        alert("Please select an audio file.");
    }
}
