//Задание 1

function showMessage(text) { 
	return text;
}
console.log(showMessage("Я учу JavaScript!"));

//Задание 2 с котиками

const image = document.getElementById('cat');

function changeImg() {
    image.src = "images/cat1.jpg";
}

function changeImg2() {
    image.src = "images/cat2.jpg";
}