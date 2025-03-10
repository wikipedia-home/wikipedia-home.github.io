const games = document.getElementsByClassName("games");
for (let i = 0; i < games.length; i++)
    games[i].style.display = "none";

const validationForm = document.getElementById("validation");
validationForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

function checkPassword() {
    const password = document.getElementById("password");
    if (password.value === "chezdev$0705") {
        validationForm.style.display = "none";
        for (let i = 0; i < games.length; i++)
            games[i].style.display = "block";
    } else {
        alert("Wrong...");
    }
}