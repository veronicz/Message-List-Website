import { hideDetailedView } from './DetailedViewActions';

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

export const updateMessageComplete = msg => {
  return {
    type: 'UPDATE_MESSAGE',
    payload: msg
  };
};

export const updateMessageSuccess = msg => {
  return (dispatch, getState) => {
    dispatch(hideDetailedView());
    dispatch(updateMessageComplete(msg));
  };
};

export const deleteMessageSuccess = msg => {
  return {
    type: 'DELETE_MESSAGE',
    payload: msg
  };
};

export const clearMessagesSuccess = () => {
  return {
    type: 'CLEAR_MESSAGES'
  };
};

const messagesEndpoint = '/messages';

function makeAPICall(dispatch, options, callback, url = messagesEndpoint) {
  dispatch(request_start());
  fetch(url, options)
    .then(res => res.json())
    .then(res => {
      dispatch(callback(res));
    })
    .catch(err => {
      dispatch(request_error(err));
    });
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

export const updateMessage = msg => {
  return (dispatch, getState) => {
    makeAPICall(
      dispatch,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg)
      },
      updateMessageSuccess,
      `${messagesEndpoint}/${msg._id}`
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
