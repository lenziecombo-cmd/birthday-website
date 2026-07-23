// ❤️ Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ❤️ Typewriter Effect
    const message = `Happy Birthday, my Bebi! ❤️

Today is all about celebrating you and the wonderful person you are.

Thank you for loving me, understanding me, and making my days brighter.

I hope this year brings you happiness, success, good health, and countless blessings.

Always remember that I will always support you and believe in you.

I love you so much.

Happy Birthday, my Bebi! ❤️`;

    const typing = document.getElementById("typing");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const musicBtn = document.getElementById("musicBtn");
    const letter = document.getElementById("letter");
    const countdown = document.getElementById("countdown");
    const song = document.getElementById("song");

    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 45);
        }
    }

    typeWriter();

    // ❤️ Countdown
    function startCountdown() {

        const birthday = new Date("July 24, 2026 00:00:00").getTime();

        setInterval(function () {

            const now = new Date().getTime();
            const distance = birthday - now;

            if (distance <= 0) {
                countdown.innerHTML = "🎉 Happy Birthday, Bebi! ❤️";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdown.innerHTML =
                `⏳ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

        }, 1000);

    }

    startCountdown();

    // ❤️ Surprise Button
  surpriseBtn.onclick = function () {
    console.log("Button clicked");

    letter.classList.remove("hidden");

       alert("🎉 Happy Birthday, Bebi! ❤️\n\nI hope all your dreams come true. I love you always! 🥰");

    };

    // ❤️ Music Button
    let playing = false;

    musicBtn.onclick = function () {

        if (!playing) {

            song.src = "palagi.mp3";
            song.load();

            song.play().catch(function(error) {
                console.log(error);
        });

            musicBtn.innerHTML = "⏸ Pause Music";
            playing = true;

        } else {

            song.pause();

            musicBtn.innerHTML = "🎵 Play Our Song";
            playing = false;

        }

// ❤️ Confetti
function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        let confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "💖", "💕", "❤️", "🎊"][Math.floor(Math.random() * 6)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.transition = "transform 3s linear, opacity 3s linear";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
            confetti.style.opacity = "0";
        }, 50);

        setTimeout(function () {
            confetti.remove();
        }, 3200);

    }

}

// ❤️ Sparkles
setInterval(function () {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (10 + Math.random() * 20) + "px";
    sparkle.style.transition = "all 2s";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(function () {
        sparkle.style.opacity = "0";
        sparkle.style.transform = "scale(2)";
    }, 100);

    setTimeout(function () {
        sparkle.remove();
    }, 2200);

}, 700);
