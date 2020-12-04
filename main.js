const container = document.querySelectorAll(".container");
const length = container.length;
var doubleClick = 0;

var interval = setInterval(() => {
    /**************************************Generate a random number***********************************/
    const random = Math.floor(Math.random() * length);

    /*********************************Remove the active class from every Conatiner**********************/
    container.forEach((e) => {
        e.classList.remove("active");
    });

    /*************************************Add the active class to random Container**********************/
    container[random].classList.toggle("active");
}, 900);

/********************************************Score-Card*********************************************/
let score = 0;

container.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("active")) {
            if (doubleClick == 0) {
            score++;
            e.classList.remove("active");
            document.getElementById("score").innerHTML = score;
        }
        }
    });
});

/****************************************Cookies Storage *****************************************/
function setCookies() {
    var high = score;
    document.cookie = "HScore=" + high;
}
function getCookies() {
    var scorearray = document.cookie;
    scorearray.split("=");
    var secArray = scorearray.split("=");
    secArray[1];

    if (secArray[1] == 0) {
        setCookies();
    } else if (score > secArray[1]) {
        setCookies();
    } else {
        console.log(document.cookie);
        var HighScore = secArray[1];
        document.getElementById("highScore").innerText = HighScore;
    }
    //setCookies();
}

/**************************************************Strat Button********************************/
var seconds = 60;
var countdownTimer;

function Start() {
    document.getElementById("btnStart").disabled = true;
    /*******************************************Timer Of Game*****************************************/

    function GameTimer() {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById("waiting_time").innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            alert("Game over! \nYour Score \n" + score);
            window.location.reload();
        } else {
            seconds--;
        }
        getCookies();
    }
    countdownTimer = setInterval(GameTimer, 1000);
    var start = document.getElementById("main");
    start.style.display = "block";
    document.getElementById("game").style.display = "none";
    score = 0;
    document.getElementById("score").innerHTML = score;
}

/*******************************************Stop Function************************************/
function Stop() {
    var StopGame = confirm("Your Score " + score + "\nDo You want to Stop the Game...!");
    if (StopGame == true) {
        window.location.reload();
    }
}
