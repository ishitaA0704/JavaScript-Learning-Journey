function rollDice() {
    const numDice = document.getElementById('numDice').value;
    const result= document.getElementById('result');
    const images= document.getElementById('images');
    const values = [];
    const image = [];
    for (let i = 0; i < numDice; i++) 
        {
            const roll = Math.floor(Math.random() * 6) + 1;
            values.push(roll);
            image.push(`<img src="dice_imgs/${roll}.png">`);
        }
        result.textContent = `You rolled: ${values.join(', ')}`;
        images.innerHTML = image.join(' ');
    }
