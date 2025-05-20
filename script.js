counter = document.getElementById("counter");

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
    }
    else {
        counter.style.left = -15 + "px";
    }
    counter.innerText = String(newValue);
}