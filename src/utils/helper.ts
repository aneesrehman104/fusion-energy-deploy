export function generateRandomNumber(): number {
    const min = 3;
    const max = 5;
    const randomDecimal = Math.random() * (max - min) + min;
    return parseFloat(randomDecimal.toFixed(2));
}
