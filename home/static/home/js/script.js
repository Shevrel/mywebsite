document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".coaster").classList.add("arriving");
        setTimeout(() => {
            document.querySelector(".board-btn").style.display = "block";
        }, 4000);
    }, 1500);
});

function startRide() {
    document.querySelector(".coaster").classList.remove("arriving");
    document.querySelector(".coaster").classList.add("departing");
    document.querySelector(".board-btn").style.display = "none";
    setTimeout(() => {
        document.getElementById("main-content").style.display = "block";
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    }, 3000);
}