let msg = document.querySelector(".input");

const handleMessage = () => {
  const message = msg.value;
  console.log("message =>", message);
  messageBubble(message);
};

const handleSubmit = (e) => {
  e.preventDefault();
  handleMessage();
  msg.value = "";
};

const messageBubble = (message) => {
  if (!message) {
    return;
  }
  let bubbles = document.querySelector(".bubbles");
  let text = document.createTextNode(message);
  let bubble = document.createElement("li");
  bubble.classList.add("bubbleout");
  bubble.appendChild(text);
  bubbles.appendChild(bubble);
};

msg.addEventListener("keydown", () => {
  console.log("typing");
});
