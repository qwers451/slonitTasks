function computerGuessingGame() {
    // Компьютер 1 загадывает число от 1 до 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Компьютер 1 загадал число: ${secretNumber}.\n`);

    // Компьютер 2 пытается угадать число
    let low = 1;
    let high = 100;
    let attempts = 0;

    while (true) {
        attempts++;
        const guess = Math.floor((low + high) / 2);
        console.log(`Компьютер 2: число ${guess}.`);

        if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            low = guess + 1;
        } else if (guess > secretNumber) {
            console.log("Компьютер 1: Меньше.");
            high = guess - 1;
        } else {
            console.log("Компьютер 1: Угадал!");
            break;
        }
        console.log(`Компьютер 2: Текущий диапазон: от ${low} до ${high}.\n`);
    }

    console.log(`Компьютер 2 угадал число ${secretNumber} за ${attempts} попыток.`);
}

computerGuessingGame();