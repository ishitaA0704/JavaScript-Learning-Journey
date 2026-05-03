let count = 0;
document.getElementById("increment").onclick = function() {
    count++;
    document.getElementById("counter").textContent = count;
};
document.getElementById("decrement").onclick = function() {
    count--;
    document.getElementById("counter").textContent = count;
};
document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("counter").textContent = count;
};
