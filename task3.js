/*
Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
результата getNum, затем возводить его в квадрат и выводить на экран.
*/

function getNum() {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(Math.floor(Math.random() * (5 - 1)) + 1),
         3000)
    );
}

async function doSquare() {
    let number = await getNum();
    let result = number ** 2;
    console.log(result);
}

doSquare();
