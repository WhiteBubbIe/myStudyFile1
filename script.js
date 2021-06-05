//Создаем переменные 
const button = document.getElementById("btn");
const color = document.querySelector(".color");
//Создаем массив, из которого функция будет брать значения
const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
];
//Создаем функцию привязки фона к сгенерированному цвету
button.addEventListener("click", () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
//Создаем функцию, ответственную за количество символов (6)
function generateHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}
//Создаем функцию, генерирующую рандомное значение из символов в массиве
function getRandomNumber() {
   return Math.floor(Math.random() * hex.length);
}

