const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word =  expr.split('')
    let result = []
    for (let i = 0; i < word.length; i+=2) {
       result.push(word.slice(i, i + 2).join(''))
}
for (let j = 0; j < result.length; j++) {
    if (result[j] === '10') {
        result[j] = '.'
       } else if (result[j] === '11') {
        result[j] = '-'
       } else if (result[j] === '00') {
        result[j] = ''
       } else if (result[j] === '**********') {
        result[j] = ' '
       }
}
let arr = []
for (let k = 0; k < result.length; k+=5) {
    arr.push(result.slice(k, k + 5).join(''))
}
for (let l = 0; l < arr.length; l++) {
    if (arr[l] === '**********') {
        arr[l] = ' '
       } else {
        arr[l] = MORSE_TABLE[arr[l]]
       }
}
return arr.join('')
}




module.exports = {
    decode
}