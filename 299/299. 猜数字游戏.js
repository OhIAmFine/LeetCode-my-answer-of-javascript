/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    var bulls = 0;
    var cows = 0;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        }
    }
    for (let i = 0; i < guess.length; i++) {
        let index = secret.indexOf(guess[i])
        if (index !== -1) {
            cows++;
            secret = secret.substring(0, index) + secret.substring(index + 1, secret.length)
        }
    }
    return bulls + 'A' + (cows - bulls) + 'B';
};
