// ❤️ Typewriter Effect
const message = `Happy Birthday, my Bebi! ❤️

Today is all about celebrating you and the wonderful person you are.

Thank you for loving me, understanding me, and making my days brighter.

I hope this year brings you happiness, success, good health, and countless blessings.

Always remember that I will always support you and believe in you.

I love you so much.

Happy Birthday, my Bebi! ❤️`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = function () {
    typeWriter();
    startCountdown();
};

// 🎁 Surprise Button
const surpriseBtn = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

surpriseBtn.addEventListener("click", function () {

    letter.classList.remove("hidden");

    launchConfetti();

    alert("🎉 Happy Birthday, Bebi! ❤️\n\nI hope all your dreams come true. I love you always! 🥰");

});

// 🎵 Music Button
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");
const audioFile = "Palagi - TJ Monterde.mp3";

// Don't preload — set src only on user click for better file:// compatibility
var isFirstClick = true;

musicBtn.addEventListener("click", function(){
    if (isFirstClick) {
        // Set source on first click (user gesture required by browser autoplay policy)
        song.src = audioFile;
        song.load();
        isFirstClick = false;
    }
    
    if(song.paused){
        song.play().then(function() {
            musicBtn.innerHTML = "⏸ Pause Music";
        }).catch(function(error) {
            console.error("Playback failed:", error);
            
            // Fallback: try with URI-encoded path
            var encodedFile = encodeURI(audioFile);
            song.src = encodedFile;
            song.load();
            song.play().then(function() {
                musicBtn.innerHTML = "⏸ Pause Music";
            }).catch(function(error2) {
                console.error("All playback methods failed:", error2);
                
                // Final fallback: show helpful message with instructions
                alert('🎵 Music Tip: The song file was found but could not play automatically.\n\n' +
                      'Try these fixes:\n' +
                      '1️⃣ Open this page in a different browser (Edge, Firefox)\n' +
                      '2️⃣ Right-click the HTML file → "Open with" → choose a different browser\n' +
                      '3️⃣ Or just continue enjoying the page without music! ❤️\n\n' +
                      'File: "' + audioFile + '"');
                
                // Reset button text
                musicBtn.innerHTML = "🎵 Play Our Song";
            });
        });
    }else{
        song.pause();
        musicBtn.innerHTML = "🎵 Play Our Song";
    }
});

// ⏳ Countdown
function startCountdown(){

const birthday = new Date("July 24, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = birthday - now;

if(distance < 0){

document.getElementById("countdown").innerHTML =
"🎉 Happy Birthday, Bebi! ❤️";

return;

}

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
`⏳ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);

}

// 🎊 Simple Confetti
function launchConfetti(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.innerHTML=["🎉","✨","💖","💕","❤️","🎊"][Math.floor(Math.random()*6)];

confetti.style.position="fixed";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";
confetti.style.fontSize=(15+Math.random()*20)+"px";
confetti.style.transition="transform 3s linear, opacity 3s linear";
confetti.style.zIndex="9999";

document.body.appendChild(confetti);

setTimeout(function(){

confetti.style.transform=`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720}deg)`;
confetti.style.opacity="0";

},50);

setTimeout(function(){

confetti.remove();

},3200);

}

}

// ❤️ Floating Sparkles
setInterval(function(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";
sparkle.style.left=Math.random()*100+"vw";
sparkle.style.top=Math.random()*100+"vh";
sparkle.style.fontSize=(10+Math.random()*20)+"px";
sparkle.style.opacity="1";
sparkle.style.transition="all 2s";
sparkle.style.pointerEvents="none";

document.body.appendChild(sparkle);

setTimeout(function(){

sparkle.style.opacity="0";
sparkle.style.transform="scale(2)";

},100);

setTimeout(function(){

sparkle.remove();

},2200);

},700);

