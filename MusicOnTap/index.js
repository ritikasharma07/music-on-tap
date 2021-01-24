window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(45, 2, 63)",
        "rgb(95, 7, 7)",
        "rgb(5, 70, 5)",
        "rgb(85, 4, 67)",
        "rgb(202, 69, 16)",
        "rgb(146, 137, 7)"
    ];
    //console.log(sounds);
    //sound part

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            //to play the sound again before it finish.
            sounds[index].currentTime=0;
            //to play
            sounds[index].play();

            createBubbles(index);
           
        });
    });
    //creating function to make bubbles
    const createBubbles = (index) => { 
       const  bubble = document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.backgroundColor = colors[index];
       bubble.style.animation = "jump 1s ease";

       // to stop our app from crashing
       bubble.addEventListener("animationed",function() {
           visual.removeChild(this);
       })
    };
});