//Задание 1. Создайте функцию которая возводит переданное число в куб, 
//необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let getCube = (num) => Math.pow(num, 3);

let num = +prompt('Введите число');
console.log(`${num}^3 = ${getCube(num)} `);

// Задание 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести
// что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
const getSalaryTax = (salary) => salary - salary * 0.13;

let salary = +prompt('Введите зп');
if (Number.isNaN(salary) || salary === '')
    console.log('Неверное значение');

else
    console.log(`Размер заработной платы за вычетом налогов = ${getSalaryTax(salary)}`);

// Задание 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел
const getMax = (num1, num2, num3) => Math.max(num1, num2, num3);

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');
console.log(`Максимальное число из [${num1}, ${num2}, ${num3}] = ${getMax(num1, num2, num3)}`);

// Задание 4. Необходимо реализовать четыре функции, каждая функция должна принимать
// по два числа и выполнять одну из операций (каждая функция выполняет одну из них)

let getAddition = (c, d) => c + d;
let getSubstraction = (c, d) => {
    return (c > d ? c - d : d - c);
}
let getMultiplication = (c, d) => c * d;
let getDevision = (c, d) => c / d;

let num4 = +prompt('Введите первое число');
let num5 = +prompt('Введите второе число');
console.log(`c + d = ${getAddition(num4, num5)}`);
console.log(`c - d = ${getSubstraction(num4, num5)}`);
console.log(`c * d = ${getMultiplication(num4, num5)}`);
console.log(`c / d = ${getDevision(num4, num5)}`);


