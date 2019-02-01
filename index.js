
const colors = [
    /* 1 */ 'balck',
    /* 2 */ 'red',
    /* 3 */ 'green',
    /* 4 */ 'yellow',
    /* 5 */ 'blue',
    /* 6 */ 'magenta',
    /* 7 */ 'cyan',
    /* 8 */ 'white',
];

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = name => {
    let res = '';
    const letters = name.split('');
    let color = 1;

    for(const letter of letters) {
        res += letter !== ' ' ? colorer(letter, color++) : ' ';
        if (color > colors.length) {
            color = 1;
        }
    }
    return res;
};

const greetings = name => (
    `${colorize(name)}`
)

console.log(greetings('This is colores string! Awesome!!!'));