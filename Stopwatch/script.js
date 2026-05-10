const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;

function start() {

    if (running) return;

    running = true;
    startTime = Date.now() - elapsedTime;

    timer = setInterval(update, 10);
}

function stop() {

    if (!running) return;

    running = false;
    clearInterval(timer);

    elapsedTime = Date.now() - startTime;
}

function reset() {

    clearInterval(timer);

    running = false;
    startTime = 0;
    elapsedTime = 0;

    display.textContent = "00:00:00:00";
}

function update() {

    elapsedTime = Date.now() - startTime;

    let h = Math.floor(elapsedTime / 3600000);
    let m = Math.floor(elapsedTime / 60000) % 60;
    let s = Math.floor(elapsedTime / 1000) % 60;
    let ms = Math.floor(elapsedTime % 1000 / 10);

    display.textContent =
        `${String(h).padStart(2, "0")}:` +
        `${String(m).padStart(2, "0")}:` +
        `${String(s).padStart(2, "0")}:` +
        `${String(ms).padStart(2, "0")}`;
}