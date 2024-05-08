'use strict'

const numberOfImages = document.querySelectorAll('.images').length;

function generateRandomNumbers(arrayLength) {
    var numbers = [];

    while (numbers.length < arrayLength) {
        var randomNumber = Math.floor(Math.random() * arrayLength);

        // Check if the random number is already in the array
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber); // If not, add it to the array
        }
    }

    return numbers;
}

function FarmAnimal (classImg, sound) { //Constructor function for animals
    this.classImg = classImg;
    this.sound = sound;
}

const farmAnimalsList = [
    new FarmAnimal ('bull', 'bull.mp3'),
    new FarmAnimal ('cat', 'cat.mp3'),
    new FarmAnimal ('chicken', 'chicken.mp3'),
    new FarmAnimal ('cow', 'cow.mp3'),
    new FarmAnimal ('dog', 'dog.mp3'),
    new FarmAnimal ('donkey', 'donkey.mp3'),
    new FarmAnimal ('duck', 'duck.mp3'),
    new FarmAnimal ('geese', 'geese.mp3'),
    new FarmAnimal ('goat', 'goat.mp3'),
    new FarmAnimal ('horse', 'horse.mp3'),
    new FarmAnimal ('pig', 'pig.mp3'),
    new FarmAnimal ('rooster', 'rooster.mp3'),
    new FarmAnimal ('sheep', 'sheep.mp3'),
    new FarmAnimal ('turkey', 'turkey.mp3'),
]

const randomIndexes = generateRandomNumbers(farmAnimalsList.length).slice(0,3);
const indexAnswer = generateRandomNumbers (randomIndexes.length)[0];

const disableImages = function() {
    for (let i = 0; i < numberOfImages; i++){
        if (i != indexAnswer) {
            document.querySelectorAll('.images')[i].classList.add('disabledbutton');
        } else {
            document.querySelectorAll('.images')[i].classList.add('correctbutton');
        }
    }
}

for (let i = 0; i < numberOfImages; i++) { 
   
    const imagesList = document.querySelectorAll('.images');
    let imageSelected = document.querySelectorAll('.images')[i];

    // Assign background image by adding class  
    imageSelected.classList.add(`${farmAnimalsList[randomIndexes[i]].classImg}`);

    // Mouse Hover Events
    imageSelected.addEventListener('mouseover', function(){
        imageSelected.classList.toggle('imgMouseHover');
    });
    imageSelected.addEventListener('mouseleave', function(){
        imageSelected.classList.toggle('imgMouseHover');
    });

    // Mouse Click Events
    imageSelected.addEventListener('click', function(){
   
        if (i === indexAnswer){
            document.querySelector('.heading').textContent = "You Win! 🎉";
            disableImages();
        } else{
            document.querySelector('.heading').textContent = "Better luck next time!";
            disableImages();
        }

        document.querySelector('.instructions').textContent = `That was the sound of a ${farmAnimalsList[randomIndexes[indexAnswer]].classImg}.`;
            
    });
}



document.querySelector('.btn-play').addEventListener('click', function() { // Assign sound to play button
    let sound = new Audio(`../assets/sounds/${farmAnimalsList[randomIndexes[indexAnswer]].sound}`)
    sound.play();
    console.log(farmAnimalsList[randomIndexes[indexAnswer]]);
});

