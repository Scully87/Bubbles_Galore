var minBubbles = 1;
var maxBubbles = 10;
var bubbleSpawnTime = 5000;
var startHeight = 0;
var startWidth = 0;
var minSpeed = 2000;
var maxSpeed = 250;
var maxSpawnTime = 10000;
var minSpawnTime = 100;
var maxScale = 2;
var minScale = 1;
var bubbleNumber = 1;

$(document).ready(function(){
    bubbleAnimation();
});

function randomPosition(){
    var startPosY = $('#container').width() - startHeight;
    var startPosX = $('#container').height() - startWidth;
    var newHeight = Math.floor(Math.random() * startPosX);
    var newWidth = Math.floor(Math.random() * startPosY);
    return [newHeight,newWidth];
}

function randomSpeed(){
    var speed = Math.floor(Math.random() * minSpeed) + maxSpeed;
    return speed;
}

function randomScale(){
    var scale = (Math.random() * minScale) + maxScale;
    return [scale - 1];
}

function randomSpawnSpeed(){
    var spawn = Math.floor(Math.random() * maxSpawnTime) + minSpawnTime;
    return spawn;
}

function bubbleAnimation(){
    var newPos = randomPosition();
    var newSpeed = randomSpeed();
    var newScale = randomScale();
    $('.bubble').transition({ top: newPos[0], left: newPos[1], scale:(newScale) },newSpeed, function(){
        bubbleAnimation();
    });
};

//function spawnBubble(){
//
//    var bubbleIndex = setInterval(function(){
//    var newBubble = document.createElement('img');
//            newBubble.className = "bubble" + minBubbles;
//            console.log(newBubble.className);
//            newBubble.src = "images/bubble.png";
//            document.getElementById('container').appendChild(newBubble);
//
//        minBubbles++;
//        if(minBubbles === maxBubbles){
//            clearInterval(bubbleIndex);
//        }
//    return newBubble.className;
//    }, randomSpawnSpeed());
//};

$('.bubble').click(function(){
    $(this).fadeOut(500);
});


