function sendMessage() {
  var userInput = document.getElementById("user-input");
  var chatOutput = document.getElementById("chat-output");
  var userMessage = userInput.value.trim();
  if (userMessage !== "") {
    chatOutput.innerHTML += "<p class='user-message'>" + userMessage + "</p>";
    processUserInput(userMessage);
    userInput.value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
}
function processUserInput(userMessage) {
  var randomResponses = [
    "hola buenos dias espero que este muy bien estoy listo para atender tus solicitudes",
    "¡Gracias por tu pregunta! Estoy procesando la información.",
    "Es una pregunta interesante. Permíteme encontrar la mejor respuesta para ti.",
    "No estoy seguro, pero estoy investigando. Por favor, espera un momento.",
  ];
  var randomResponse =
    randomResponses[Math.floor(Math.random() * randomResponses.length)];
  setTimeout(function () {
    displayBotMessage(randomResponse);
  }, 1000);
}
function displayBotMessage(message) {
  var chatOutput = document.getElementById("chat-output");
  chatOutput.innerHTML += "<p class='bot-message'>" + message + "</p>";
}