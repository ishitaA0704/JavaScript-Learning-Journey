const display = document.getElementById("display");

let timer = null;
let start = 0;
let elapsed= 0;
let running = false;

function start() {

    if (running) return;

    running = true;
    start = Date.now() - elapsed;
    timer = setInterval(update, 10);
}

function stop() {

    if (!running) return;
    running = false;
    clearInterval(timer);
    elapsed = Date.now() - start;
}

function reset() {

    clearInterval(timer);
    running = false;
    start = 0;
    elapsed = 0;
    display.textContent = "00:00:00:00";
}

function update() {
    elapsed = Date.now() - start;
    let h = Math.floor(elapsed / 3600000);
    let m = Math.floor(elapsed / 60000) % 60;
    let s = Math.floor(elapsed / 1000) % 60;
    let ms = Math.floor(elapsed % 1000 / 10);

    display.textContent =
        `${String(h).padStart(2, "0")}:` +
        `${String(m).padStart(2, "0")}:` +
        `${String(s).padStart(2, "0")}:` +
        `${String(ms).padStart(2, "0")}`;
}