let myLibrary = [];

class Game {
  constructor(title, rating, weight, players, playTime, isPlayed) {
    this.title = title;
    this.rating = rating;
    this.weight = weight;
    this.players = players;
    this.playTime = playTime;
    this.isPlayed = isPlayed;
  }
}
function addGametoLibrary() {
  const newGame = new Game(title, rating, weight, players, playTime, isPlayed);
  myLibrary.push(newGame)
}

addGametoLibrary("Ark Nova", "8.6", "3.71", "1-4", "90-150 Min", false);