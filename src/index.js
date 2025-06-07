function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
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

  axios.get(apiUrl).then(displayPoem);
}

let peomFormElement = document.querySelector("#poem-form");
peomFormElement.addEventListener("submit", generatePoem);
