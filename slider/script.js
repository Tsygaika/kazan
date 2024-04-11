const images = document.querySelectorAll('.image');
const slider = document.getElementById('slider');
const sliderImage = document.getElementById('slider_image');
const length = document.querySelectorAll('.image').length;
let currentIndex = 0;

var myVariable = 10;
var imageElement = document.getElementById("button_left");
var imageElement2 = document.getElementById("button_right");
var imagePath;
var imagePath2;

function openSlider(index) {
    currentIndex = index;
    sliderImage.src = images[index].src;
    slider.style.display = 'block';

    if (currentIndex % length === 0) {	//изменение стрелок
	imagePath = "slider/left_not_active.png";
   	imagePath2 = "slider/right.png";}
    else if (currentIndex % length === length - 1){
	imagePath = "slider/left.png";
	imagePath2 = "slider/right_not_active.png";
    }
    else{
	imagePath = "slider/left.png";
	imagePath2 = "slider/right.png";
    }

    imageElement.src = imagePath;
    imageElement2.src = imagePath2;
}

function closeSlider() {
    slider.style.display = 'none';
}

function prevSlide() {
    if (currentIndex % length != 0) {	//изменений индекса
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        sliderImage.src = images[currentIndex].src;
    }

    if (currentIndex % length === 0) {	//изменение стрелок
	imagePath = "slider/left_not_active.png";
   	imagePath2 = "slider/right.png";}
    else if (currentIndex % length === length - 1){
	imagePath = "slider/left.png";
	imagePath2 = "slider/right_not_active.png";
    }
    else{
	imagePath = "slider/left.png";
	imagePath2 = "slider/right.png";
    }

    imageElement.src = imagePath;
    imageElement2.src = imagePath2;
}

function nextSlide() {	
    if (currentIndex % length != length - 1) {	//изменений индекса
        currentIndex = (currentIndex + 1 + images.length) % images.length;
        sliderImage.src = images[currentIndex].src;
    }

    if (currentIndex % length === 0) {	//изменение стрелок
	imagePath = "slider/left_not_active.png";
   	imagePath2 = "slider/right.png";}
    else if (currentIndex % length === length - 1){
	imagePath = "slider/left.png";
	imagePath2 = "slider/right_not_active.png";
    }
    else{
	imagePath = "slider/left.png";
	imagePath2 = "slider/right.png";
    }

    imageElement.src = imagePath;
    imageElement2.src = imagePath2;
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        openSlider(index);
    });
});
