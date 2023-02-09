// const timer = document.querySelector("#timer");

function start() {
  let startTime = 0;
  const myInterval = setInterval(myTimer, 1000);

  function myTimer() {
    document.getElementById("timer").innerHTML = startTime;
    if (startTime == 11)
      myStopFunction(),
        (document.getElementById("timer").innerHTML =
          "Seu tempo acabou!! Tente novamente!!");
    startTime++;
  }

  function myStopFunction() {
    clearInterval(myInterval);
  }
}
