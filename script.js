function openGift() {

    const gift = document.getElementById("gift");

    // Prevent multiple clicks
    gift.disabled = true;

    // Start gift animation
    gift.style.animation = "none";
    gift.style.transform = "scale(1.3)";

    // Launch party celebration
    celebrate();

    // Open birthday letter after celebration
    setTimeout(() => {

        document.getElementById("home")
            .classList.add("hidden");

        document.getElementById("letter")
            .classList.remove("hidden");

        createHearts();

    }, 1800);
}


// Party popper celebration

function celebrate() {

    const celebration =
        document.getElementById("celebration");

    // Launch two party poppers

    const poppers = ["🎉", "🎊"];

    poppers.forEach((emoji, index) => {

        const popper = document.createElement("div");

        popper.className = "party-popper";
        popper.innerHTML = emoji;

        popper.style.left =
            index === 0 ? "-30px" : "100px";

        popper.style.top = "0px";

        popper.style.setProperty(
            "--x",
            index === 0 ? "-100px" : "100px"
        );

        celebration.appendChild(popper);

        setTimeout(() => popper.remove(), 1400);

    });


    // Colourful confetti

    const colours = [
        "#ff6b9d",
        "#ffd166",
        "#a78bfa",
        "#70d6ff",
        "#ff9f1c",
        "#caffbf"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.backgroundColor =
            colours[Math.floor(Math.random() * colours.length)];

        piece.style.left = "50%";
        piece.style.top = "50%";

        piece.style.setProperty(
            "--x",
            (Math.random() - 0.5) * 500 + "px"
        );

        piece.style.setProperty(
            "--y",
            (Math.random() - 0.5) * 450 + "px"
        );

        celebration.appendChild(piece);

        setTimeout(() => piece.remove(), 2000);

    }

}

function openSecret() {

    document.getElementById("letter").classList.add("hidden");

    document.getElementById("secret").classList.remove("hidden");

    createHearts();
}

function restart() {

    document.getElementById("secret").classList.add("hidden");

    document.getElementById("home").classList.remove("hidden");
}

function createHearts() {

    for (let i = 0; i < 20; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "♡";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = "25px";
        heart.style.color = "#d991ad";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "10";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(-100vh)", opacity: 0 }
            ],
            {
                duration: 4000,
                easing: "ease-out"
            }
        );

        setTimeout(() => heart.remove(), 4000);
    }
}