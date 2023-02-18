//Задание 1

function showMessage(text) { 
	return text;
}
console.log(showMessage("Я учу JavaScript!"));

//Задание 2 с котиками

function changeImg() {
    let image = document.getElementById('cat');
    image.src = "images/cat1.jpg";
}

function changeImg2() {
    let image = document.getElementById('cat');
    image.src = "images/cat2.jpg";
}