const chatBody = document.querySelector(".chat-body");
const userInput = document.querySelector(".message-input");
const sendButton = document.querySelector("#send-message");
const newText = document.querySelector(".message-text");
const userData = {
  message: null,
};
function createMessageElement(content, classes) {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
}

//handleSentButton
function handleOutgoingMessage(e) {
  const messageContent = `<div class="message-text"></div>`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  e.preventDefault();
  newMessage = newText;
  newMessage = userInput.value;
  //userData.message = userInput.value;
  userInput.value = "";
  
  outgoingMessageDiv.querySelector(".message-text").textContent = newMessage;
    newMessage
  chatBody.appendChild(outgoingMessageDiv);
}
////Event Listeners
userInput.addEventListener("keydown", (e) => {
  const newMessage = e.target.value;
  if (e.key === "Enter" && newMessage) {
    handleOutgoingMessage(newMessage);
  }
});
sendButton.addEventListener("click", (newMessage) => {
  handleOutgoingMessage(newMessage);
});
