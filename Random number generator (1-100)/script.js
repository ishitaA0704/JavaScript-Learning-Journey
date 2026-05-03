const min = 1;
const max = 100;
document.getElementById("generate").onclick = function() 
{
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("random-number").textContent = randomNumber;
};
document.getElementById("reset").onclick = function() 
{
    document.getElementById("random-number").textContent = "0";
};