export const request_start = () => {
  return {
    type: 'LOADING'
  };
};

export const request_error = err => {
  return {
    type: 'FAILURE',
    payload: err
  };
};

export const fetchMessagesSuccess = messages => {
  return {
    type: 'RECEIVE_MESSAGES',
    payload: messages
  };
};

export const addMessageSuccess = msg => {
  return {
    type: 'ADD_MESSAGE',
    payload: msg
  };
};

export const deleteMessageSuccess = id => {
  return {
    type: 'DELETE_MESSAGE',
    payload: id
  };
};

export const clearMessagesSuccess = () => {
  return {
    type: 'CLEAR_MESSAGES'
  };
};

const messagesEndpoint = 'http://localhost:3001/messages';

function makeAPICall(dispatch, options, callback, url = messagesEndpoint) {
  dispatch(request_start());
  setTimeout(function() {
    fetch(url, options)
      .then(res => res.json())
      .then(messages => {
        dispatch(callback(messages));
      })
      .catch(err => {
        dispatch(request_error(err));
      });
  }, 500);
}

export const fetchMessages = () => {
  //pause the dispatch to make async call
  return (dispatch, getState) => {
    makeAPICall(dispatch, null, fetchMessagesSuccess);
  };
};

export const addMessage = msg => {
  return (dispatch, getState) => {
    makeAPICall(
      dispatch,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg)
      },
      addMessageSuccess
    );
  };
};

export const deleteMessage = id => {
  return (dispatch, getState) => {
    makeAPICall(
      dispatch,
      {
        method: 'delete'
      },
      deleteMessageSuccess,
      `${messagesEndpoint}/${id}`
    );
  };
};

export const clearMessages = () => {
  return (dispatch, getState) => {
    makeAPICall(
      dispatch,
      {
        method: 'delete'
      },
      clearMessagesSuccess
    );
  };
};
