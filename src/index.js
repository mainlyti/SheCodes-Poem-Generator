function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-prompt");

  let key = "5bfa080034fb64td6b864b3a813efo04";
  let prompt = `Generate a short poem about ${userInput.value}`;
  let context =
    "Create a short poem, between 2 to 4 lines long, that is lighthearted and sweet based on the user input. Seperate each line of the poem using <br>. Sign the poem at the bottom with a single emoji that relates to the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  new Typewriter("#poem", {
    strings: `⌛ Generating poem about ${userInput.value}...`,
    autoStart: true,
    delay: 15,
    cursor: "",
  });

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
