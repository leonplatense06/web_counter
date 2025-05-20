counter = document.getElementById("counter");
title = document.getElementById("counter-title");

function decreaseCounter(){
    updateCounter(parseInt(counter.innerText) - 1);
}

function resetCounter() {
    updateCounter(0);
}

function increaseCounter() {
    updateCounter(parseInt(counter.innerText) + 1);
}

function updateCounter(newValue){
    if (newValue >= 0){
        counter.style.left = 3 + "px";
        if (newValue > 0)
            title.style.color = "green";
        else
            title.style.color = "rgb(41, 43, 58)";
    }
    else {
        counter.style.left = -15 + "px";
        title.style.color = "red";
    }
    counter.innerText = String(newValue);
}
