const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let decoder = [];

    for (let i = 0; i < expr.length; i += 10) {
        decoder.push(expr.slice(i, i + 10))
    }

    let decoder2 = decoder.map(function decoder(l) {
        let letter = '';
        for (let i = 0; i < l.length; i += 2) {
            if (l[i] === '1') {
                if (l[i + 1] === '0') {
                    letter += '.';
                } else {
                    letter += '-';
                }
            }
        }
        return letter;
    })

    let word = decoder2.map(function decoder2(l) {
        if (l) {
            return MORSE_TABLE[l];
        } else return ' ';
    })

    return word.join('');
}

module.exports = {
    decode
}