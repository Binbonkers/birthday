document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const video = document.getElementById("video-bg");

    startButton.addEventListener("click", function () {
        // Sembunyikan layar awal dengan fade-out
        introScreen.style.opacity = "0";
        setTimeout(() => {
            introScreen.style.display = "none";

            // Munculkan konten utama dengan fade-in
            mainContent.classList.add("fade-in");
            video.classList.add("fade-in"); // Tampilkan video

            // Aktifkan suara dan play video
            video.muted = false;
            video.play().catch(error => console.log("Autoplay gagal:", error));
        }, 1000);
    });

    // Scroll ke Section Undangan saat tombol ditekan
    const button = document.querySelector("a[href='#undangan']");
    const targetSection = document.querySelector("#undangan");

    if (button && targetSection) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});

