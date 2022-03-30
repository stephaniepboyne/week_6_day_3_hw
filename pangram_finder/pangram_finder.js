
const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  newPhrase = this.phrase.split('');
  return this.alphabet.every(letter => newPhrase.includes(letter))
}

module.exports = PangramFinder;
