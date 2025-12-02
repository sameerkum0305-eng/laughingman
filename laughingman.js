const SQUARE_COUNT = 30;
const SPEED = 10;
const TIMER_SPEED = 200;

function getColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

document.addEventListener('DOMContentLoaded', () => {

    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click", () => {
        alert("OMG YOU CAUGHT ME!");
    });

    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {
        //create the square
        let img = document.createElement("img");
        img.className = "square";
        img.src = "laughing_man.jpg";
        box.appendChild(img);
        //add it to the screen
    }

    let allSquares = box.children;
    let squareArray = Array.from(allSquares);

    squareArray.forEach(function (element) {

        var dx = SPEED * Math.random() * 2 - 1;
        var dy = SPEED * Math.random() * 2 - 1;

        setInterval(() => {

            let currentLeft = parseInt(element.style.left) || 225;
            let currentTop = parseInt(element.style.top) || 175;

            if (currentLeft >= 450 || currentLeft <= 0) {

                //change the border and background as hits wall feature
                dx *= -1;
                element.style.borderColor = getColor();
                element.style.backgroundColor = getColor();
            }

            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getColor();
                element.style.backgroundColor = getColor();
            }

            element.style.left = (currentLeft + dx) + "px";
            element.style.top = (currentTop + dy) + "px";

        }, TIMER_SPEED);
    });

    box.addEventListener("mouseover", function(event) {
        let t = event.target;

        //square changing background, not image
        if (t.id === "square") {
            t.style.backgroundColor = getColor();
        }
        //change to orochimaru.jpg
        else if (t.tagName === "IMG") {
            t.src = "Orochimaru.jpg";
        }
    });

    box.addEventListener("mouseout", function(event) {
        let t = event.target;

        //reset square background
        if (t.id === "square") {
            t.style.backgroundColor = "red";
        }
        //change image back to laughing man
        else if (t.tagName === "IMG") {
            t.src = "laughing_man.jpg";
        }
    });

});
