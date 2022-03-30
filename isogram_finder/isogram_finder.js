const IsogramFinder = function (word) {
    this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
    newWord = this.word.split('');
    return newWord.every((letter) => {
        return newWord.indexOf(letter) === this.word.lastIndexOf(letter);
    });
}






module.exports = IsogramFinder;
