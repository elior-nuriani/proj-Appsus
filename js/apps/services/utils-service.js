
export default {
    load,
    store,
    getRandomColor
}

function load(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function store(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

function getRandomColor(light = false) {
    var letters = '0123456789abcdef';
    if (light) letters = '89abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

