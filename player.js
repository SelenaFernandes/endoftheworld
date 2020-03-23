window.player = {
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector(".audios"),
    imagem: document.querySelector(".imagem"),
    audioData: audios,
    currentAudio : {},
    currentPlaying : 0,
    start(){
      this.update();
      this.audio.onended = () => this.next();
    },
 next(){
    this.currentPlaying++

    if(this.currentPlaying == this.audioData.length ) this.restart()
    this.update();
    this.audio.play();
 },
 update(){
    this.currentAudio = this.audioData[this.currentPlaying];
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText =  this.currentAudio.artist;
    this.audio.src = path(this.currentAudio.file);
    this.imagem.src = this.currentAudio.cover;
 },
 restart(){
    this.currentPlaying = 0;
    this.update();
 }
};