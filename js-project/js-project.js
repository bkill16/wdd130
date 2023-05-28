/// set up the joke and generate button
let jokeDisplay = document.getElementById("joke-display");
let generateBtn = document.getElementById("generate-btn");

/// set up the API
const jokeAPI = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

/// Function that fetches joke from the API
let getJoke = () => {
    jokeDisplay.classList.remove("fade");
    fetch(jokeAPI)
    .then(data => data.json())
    .then(item =>{
        jokeDisplay.textContent = `${item.joke}`;
        jokeDisplay.classList.add("fade");
    });
}

/// Function of the button
generateBtn.addEventListener("click",getJoke);
getJoke();