export function getPlanet () {
    return 'world';
}

export default function getGreeting (_getPlanet = getPlanet) {
    return `hello ${_getPlanet()}!`;
}