export const addMessage = message => {
  return {
    type: "ADD_MESSAGE",
    message: message
  };
};

export const deleteMessage = id => {
  return {
    type: "DELETE_MESSAGE",
    id: id
  };
};

export const clearMessages = () => {
  return {
    type: "CLEAR_MESSAGES"
  };
};

export const showDetailedView = messageDetail => {
  console.log(messageDetail);
  return {
    type: "SHOW",
    view: messageDetail
  };
};

export const hideDetailedView = () => {
  return {
    type: "HIDE"
  };
};
