export const showDetailedView = messageDetail => {
  return {
    type: 'SHOW',
    view: messageDetail
  };
};

export const hideDetailedView = () => {
  return {
    type: 'HIDE'
  };
};
