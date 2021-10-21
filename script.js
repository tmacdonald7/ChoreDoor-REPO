d
//Door Images
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

//Global variables
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
let startButton = document.getElementById('start');

let numClosedDoors = 3;
let openDoor1; 
let openDoor2;
let openDoor3;


const isBot = door => {
    if(door.src === botDoorPath) {
        return true
    } else {
        return false
    }
}

const isClicked = door => {
    if (door === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const playDoor = () => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if(isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }      
};



//Door click functionality
door1.onclick = () => {
    if(!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
}

door2.onclick = () => {
    if(!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    }
}

door3.onclick = () => {
    if(!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    }
}

let gameOver = (status) => {
    if(status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
}

randomChoreDoorGenerator()