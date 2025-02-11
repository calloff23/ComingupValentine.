const heartLines = document.querySelectorAll(".heart-line");

let colors = ["red", "orange", "yellow", "green", "blue", "violet"];
let i = 0;

setInterval(() => {
    heartLines.forEach(line => {
        line.style.stroke = colors[i];
    });
    i = (i + 1) % colors.length;
}, 500);
