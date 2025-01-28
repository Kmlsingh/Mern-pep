const heading = document.getElementsByTagName("h2")[0];

const getRandomColor = () => {
    let randomRed = Math.random();
    randomRed = randomRed * 255;
    randomRed = Math.floor(randomRed);

    let randomGreen = Math.random();
    randomGreen = randomGreen * 255;
    randomGreen = Math.floor(randomGreen);

    let randomBlue = Math.random();
    randomBlue = randomBlue * 255;
    randomBlue = Math.floor(randomBlue);

    const color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return color;
};

const handleHeadingStyling = () => {
    heading.style.backgroundColor = getRandomColor();
    heading.style.color = getRandomColor();
};

setTimeout(handleHeadingStyling, 3000);
setInterval(handleHeadingStyling, 500);

console.log("START");

const handleWelcome = () => {
    console.log("WELCOME !");
    setTimeout(function myTimer() {
        console.log("Hello");
    }, 30000);
};

handleWelcome();

console.log("END");

const handleClick = () => {
    console.log("Clicked!", Math.random());
};

const bdy = document.getElementsByTagName("body")[0];
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

bdy.addEventListener(
    "click",
    () => {
        console.log("clicked on body");
    },
    { capture: true }
);

btn1.addEventListener("click", () => {
    console.log("btn 1");
});

btn2.addEventListener("click", () => {
    console.log("btn 2");
});

console.log("A -- Start");

function doSomeThing() {
    console.log("B -- Starting...");
    setTimeout(() => {
        console.log("C -- Callback completed");
    }, 0);
    console.log("D -- Done");
}

console.log("E -- Made function ...");

doSomeThing();

console.log("F -- end");
