const sounds = ["fart", "gun", "ocean", "fireworks", "missile", "kitten"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;
    btn.style.black = 'white';

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}