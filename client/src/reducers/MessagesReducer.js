const initState = {
  isLoading: false,
  messageList: [],
  error: null
};

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'RECEIVE_MESSAGES':
      return {
        ...state,
        isLoading: false,
        messageList: action.payload
      };
    case 'ADD_MESSAGE':
      let new_message = action.payload;
      return {
        ...state,
        isLoading: false,
        messageList: [...state.messageList, new_message]
      };
    case 'UPDATE_MESSAGE':
      let updated_message = action.payload;
      return {
        ...state,
        isLoading: false,
        messageList: state.messageList.map(msg =>
          msg.id === updated_message.id ? updated_message : msg
        )
      };
    case 'DELETE_MESSAGE':
      return {
        ...state,
        isLoading: false,
        messageList: state.messageList.filter(
          msg => msg.id !== action.payload.id
        )
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        isLoading: false,
        messageList: []
      };
    default:
      return state;
  }
};

export default messagesReducer;
