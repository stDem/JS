// Задание 1. Необходимо с помощью цикла for вывести следующие 11 строк в консоль
function getLine(min, max) {
    const array = [];
    if (min === 0) {
        array.push('0 – это ноль');
        for (let i = min + 1; i <= max; i++)
            array.push(i % 2 === 0 ? `${i} – четное число` : `${i} – нечетное число`);
    }
    else
        for (let i = min; i <= max; i++) { array.push(i % 2 === 0 ? `${i} – четное число` : `${i} – нечетное число`); }
    return array;
}
const array = getLine(0, 11);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// // Задание 2. Дан массив [1, 2, 3, 4, 5, 6, 7]. Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const previousArray = [1, 2, 3, 4, 5, 6, 7];
console.log(previousArray);
previousArray.splice(3, 2);
console.log(previousArray);

// // Задание 3.Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// // и создать массив состоящий из 5 таких элементов
// // 1. Рассчитать сумму элементов этого массива
// // 2. Найти минимальное число
// // 3. Найти есть ли в этом массиве число 3
const getArrayRandom = () => {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.trunc(Math.random() * 10));
    }
    return array;
}
const getSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const getMin = (array) => Math.min.apply(null, array);
const isThree = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3)
            return true;
    }
    return false;
}

const array2 = getArrayRandom();
console.log(array2);
console.log(`1. Сумма элементов массива = ${getSum(array2)}`);
console.log(`2. Минимальный элемент массива = ${getMin(array2)}`);
console.log(isThree(array2) ? '3. В массиве есть 3' : '3. В массиве нет 3');

// Задание 4. Необходимо вывести горку в консоль (используя цикл for)
for (let i = 0; i < 20; i++) {
    let str = (i + 1) + "  ";
    for (let j = 0; j <= i; j++) {
        str += "x";
    }
    console.log(str);
}
