// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
    let result = 0;
    while (max >= min) {
        console.log(max);
        if (max % 2 ===0) {
            result += max; 
        }
        max--;
    }
    return result;
}

console.log(getNumbers(1, 6));
