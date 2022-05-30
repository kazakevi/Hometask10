/**Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
Promise.all получите массив результатов, найдите его сумму, выведите на экран.
*/
function generateRandomTime() {
  let num = Math.floor(Math.random() * (5000-1000))+1000;
  return num;
}

function getTimeout() {
  return new Promise(function (resolve, reject) {
    let time = generateRandomTime();
    setTimeout(function () {
      console.log(time);
      resolve(time);

    }, time);
  });
}

const p1 = getTimeout();
const p2 = getTimeout();
const p3 = getTimeout();

function getSumArray(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

Promise.all([p1, p2, p3]).then(value => {
  let sum = getSumArray(value);
  console.log(sum);
});
