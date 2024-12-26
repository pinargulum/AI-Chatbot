const chatBody = document.querySelector(".chat-body");
const userInput = document.querySelector(".message-input");
let sendButton = document.querySelector("#send-message");
function createMessageElement(content, classes) {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
}

function handleOutgoingMessage(newMessage) {
  const messageContent = `<div class="user-message">${newMessage}</div>`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  chatBody.appendChild(outgoingMessageDiv);
}

sendButton.addEventListener("click", (e) => {
  newMessage = e.target.value;
  newMessage = userInput.value;
  handleOutgoingMessage(newMessage);
})