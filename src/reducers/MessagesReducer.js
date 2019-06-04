const initMessages = [
  { id: 1, message: "Hi~~" },
  { id: 2, name: "Sherry", message: "Have a nice day!" }
];

const messagesReducer = (messages = initMessages, action) => {
  if (action.type === "ADD_MESSAGE") {
    let new_message = action.message;
    new_message.id = generate_msg_id(messages);
    return [...messages, new_message];
  } else if (action.type === "DELETE_MESSAGE") {
    return messages.filter(msg => {
      return msg.id !== action.id;
    });
  } else if (action.type === "CLEAR_MESSAGES") {
    return [];
  }
  return messages;
};

function generate_msg_id(messages) {
  if (!messages || messages.length === 0) {
    return 1;
  } else {
    return messages[messages.length - 1].id + 1;
  }
}

export default messagesReducer;
