function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello",
    autoStart: true,
    cursor: "",
  });
}

let peomFormElement = document.querySelector("#poem-form");
peomFormElement.addEventListener("submit", generatePoem);
