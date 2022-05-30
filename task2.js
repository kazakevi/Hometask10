/*
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
его работы на экран.
*/

function generateTimeoutTime() {
    let num = Math.floor(Math.random() * (5000-1000))+1000;
    return num;
  }

let myPromise1 = new Promise(function (resolve, reject) {
      let time1 = generateTimeoutTime();
      setTimeout(function () {
        resolve(1);
      }, time1);
    });
  

    let myPromise2 = new Promise(function (resolve, reject) {
      let time2 = generateTimeoutTime();
      setTimeout(function () {
        resolve(2);
      }, time2);
    });


let myPromise3 = new Promise(function (resolve, reject) {
    let time3 = generateTimeoutTime();
    setTimeout(function () {
      resolve(3);
    }, time3);
  });


Promise.race([myPromise1, myPromise2, myPromise3]).then((value) => {
    console.log(value);
});


