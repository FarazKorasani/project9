const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });
});

const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
